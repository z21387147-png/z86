import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
import json
from datetime import datetime, timezone, timedelta

# 1. 設定要追蹤的目標（以後想換追蹤股票，只要改這裡！）
TARGETS = [
    {"city": "台北市", "query": "台北市長 蔣萬安 沈伯洋", "blue": "蔣萬安 (國·現)", "green": "沈伯洋 (民)"},
    {"city": "新北市", "query": "新北市長 李四川 蘇巧慧", "blue": "李四川 (國·藍白合)", "green": "蘇巧慧 (民)"},
    {"city": "桃園市", "query": "桃園市長 張善政 黃世杰", "blue": "張善政 (國·現)", "green": "黃世杰 (民)"},
    {"city": "台中市", "query": "台中市長 江啟臣 何欣純", "blue": "江啟臣 (國)", "green": "何欣純 (民)"},
    {"city": "台南市", "query": "台南市長 陳亭妃 謝龍介", "blue": "謝龍介 (國)", "green": "陳亭妃 (民)"},
    {"city": "高雄市", "query": "高雄市長 柯志恩 賴瑞隆", "blue": "柯志恩 (國)", "green": "賴瑞隆 (民)"}
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
    # 取得台灣時間 (UTC+8)
    tw_time = datetime.now(timezone(timedelta(hours=8))).strftime("%Y/%m/%d %H:%M")
    results = []

    for t in TARGETS:
        news_list = fetch_google_news(t["query"])
        score = calculate_score(news_list)
        
        # 根據分數決定狀態標籤
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

    # 自動寫入成網頁可以直接讀取的 auto_data.js
    js_content = f"const lastUpdated = '{tw_time}';\nconst autoData = {json.dumps(results, ensure_ascii=False, indent=2)};\n"
    with open("auto_data.js", "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"成功更新 auto_data.js！更新時間：{tw_time}")

if __name__ == "__main__":
    main()
