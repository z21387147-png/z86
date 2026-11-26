import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
import json
import time
from datetime import datetime, timezone, timedelta

# 1. 全台灣 22 縣市追蹤清單
TARGETS = [
    {"city": "台北市", "query": "台北市長 蔣萬安 沈伯洋", "blue": "蔣萬安 (國·現)", "green": "沈伯洋 (民)"},
    {"city": "新北市", "query": "新北市長 李四川 蘇巧慧", "blue": "李四川 (國·藍白合)", "green": "蘇巧慧 (民)"},
    {"city": "桃園市", "query": "桃園市長 張善政 黃世杰", "blue": "張善政 (國·現)", "green": "黃世杰 (民)"},
    {"city": "台中市", "query": "台中市長 江啟臣 何欣純", "blue": "江啟臣 (國)", "green": "何欣純 (民)"},
    {"city": "台南市", "query": "台南市長 陳亭妃 謝龍介", "blue": "謝龍介 (國)", "green": "陳亭妃 (民)"},
    {"city": "高雄市", "query": "高雄市長 柯志恩 賴瑞隆", "blue": "柯志恩 (國)", "green": "賴瑞隆 (民)"},
    {"city": "基隆市", "query": "基隆市長 謝國樑 童子瑋", "blue": "謝國樑 (國·現)", "green": "童子瑋 (民)"},
    {"city": "宜蘭縣", "query": "宜蘭縣長 吳宗憲 林國漳", "blue": "吳宗憲 (國·藍白合)", "green": "林國漳 (民)"},
    {"city": "新竹縣", "query": "新竹縣長 徐欣瑩 鄭朝方", "blue": "徐欣瑩 (國)", "green": "鄭朝方 (民)"},
    {"city": "新竹市", "query": "新竹市長 高虹安 莊競程", "blue": "高虹安 (無·現/藍白合)", "green": "莊競程 (民)"},
    {"city": "苗栗縣", "query": "苗栗縣長 鍾東錦 陳品安", "blue": "鍾東錦 (國·現)", "green": "陳品安 (民)"},
    {"city": "彰化縣", "query": "彰化縣長 魏平政 陳素月 邱建富", "blue": "魏平政 (國)", "green": "陳素月 (民) / 邱建富 (無)"},
    {"city": "南投縣", "query": "南投縣長 許淑華 温世政", "blue": "許淑華 (國·現)", "green": "温世政 (民)"},
    {"city": "雲林縣", "query": "雲林縣長 張嘉郡 劉建國", "blue": "張嘉郡 (國)", "green": "劉建國 (民)"},
    {"city": "嘉義縣", "query": "嘉義縣長 蔡易餘 吳品叡", "blue": "吳品叡 (無·藍營支持)", "green": "蔡易餘 (民)"},
    {"city": "嘉義市", "query": "嘉義市長 張啓楷 王美惠", "blue": "張啓楷 (眾·藍白合)", "green": "王美惠 (民)"},
    {"city": "屏東縣", "query": "屏東縣長 周春米 蘇清泉", "blue": "蘇清泉 (國)", "green": "周春米 (民·現)"},
    {"city": "花蓮縣", "query": "花蓮縣長 游淑貞 張峻 魏嘉賢", "blue": "游淑貞 (國) / 魏嘉賢 (無)", "green": "張峻 (無·綠營支持)"},
    {"city": "台東縣", "query": "台東縣長 吳秀華 陳瑩", "blue": "吳秀華 (國)", "green": "陳瑩 (民)"},
    {"city": "澎湖縣", "query": "澎湖縣長 吳淑瑾 陳振中 葉竹林", "blue": "陳振中 (國) / 葉竹林 (無)", "green": "吳淑瑾 (民)"},
    {"city": "金門縣", "query": "金門縣長 陳玉珍 李文良", "blue": "陳玉珍 (國) / 李文良 (無)", "green": "（民進黨未提名）"},
    {"city": "連江縣", "query": "連江縣長 王忠銘 曹爾元", "blue": "王忠銘 (國·現) vs 曹爾元 (無)", "green": "（民進黨未提名）"}
]

# 2. 設定風向加減分關鍵字規則
POS_WORDS = ["領先", "大勝", "站台", "力挺", "合體", "爆滿", "政績", "肯定", "翻轉", "整合成功"]
NEG_WORDS = ["爭議", "爆料", "抹黑", "假帳號", "網軍", "官司", "退選", "分裂", "落後", "挨批", "取消"]

def fetch_google_news(query):
    """抓取 Google 新聞 RSS 最新 5 則標題"""
    encoded_q = urllib.parse.quote(query)
    url = f"https://news.google.com/rss/search?q={encoded_q}&hl=zh-TW&gl=TW&ceid=TW:zh-Hant"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    
    headlines = []
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            xml_data = response.read()
            root = ET.fromstring(xml_data)
            for item in root.findall("./channel/item")[:5]:
                title = item.find("title").text
                headlines.append(title)
    except Exception as e:
        headlines.append(f"暫時無法取得新聞 ({e})")
    return headlines

def calculate_score(headlines):
    """根據新聞標題計算網路風向加減分"""
    score = 0
    for title in headlines:
        for word in POS_WORDS:
            if word in title:
                score += 5
        for word in NEG_WORDS:
            if word in title:
                score -= 5
    return score

def main():
    tw_time = datetime.now(timezone(timedelta(hours=8))).strftime("%Y/%m/%d %H:%M")
    results = []

    for t in TARGETS:
        news_list = fetch_google_news(t["query"])
        score = calculate_score(news_list)
        
        if score > 0:
            status_text = f"📈 聲勢看漲 (+{score}分)"
            status_type = "green"
        elif score < 0:
            status_text = f"📉 爭議偏多 ({score}分)"
            status_type = "tossup"
        else:
            status_text = "⚖️ 聲勢持平 (0分)"
            status_type = "blue"

        results.append({
            "city": t["city"],
            "statusType": status_type,
            "statusText": status_text,
            "blueCand": t["blue"],
            "greenCand": t["green"],
            "score": score,
            "latestHeadline": news_list[0] if news_list else "尚無最新消息",
            "allNews": news_list
        })
        time.sleep(0.5) # 稍微停頓避免請求過快

    js_content = f"const lastUpdated = '{tw_time}';\nconst autoData = {json.dumps(results, ensure_ascii=False, indent=2)};\n"
    with open("auto_data.js", "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"成功更新 22 縣市 auto_data.js！更新時間：{tw_time}")

if __name__ == "__main__":
    main()
