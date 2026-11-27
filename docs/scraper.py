import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
import json
import time
from datetime import datetime, timezone, timedelta

# 1. 全台灣 22 縣市追蹤清單
TARGETS = [
    {"city": "台北市", "blue_key": "蔣萬安", "green_key": "沈伯洋"},
    {"city": "新北市", "blue_key": "李四川", "green_key": "蘇巧慧"},
    {"city": "桃園市", "blue_key": "張善政", "green_key": "黃世杰"},
    {"city": "台中市", "blue_key": "江啟臣", "green_key": "何欣純"},
    {"city": "台南市", "blue_key": "謝龍介", "green_key": "陳亭妃"},
    {"city": "高雄市", "blue_key": "柯志恩", "green_key": "賴瑞隆"},
    {"city": "基隆市", "blue_key": "謝國樑", "green_key": "童子瑋"},
    {"city": "宜蘭縣", "blue_key": "吳宗憲", "green_key": "林國漳"},
    {"city": "新竹縣", "blue_key": "徐欣瑩", "green_key": "鄭朝方"},
    {"city": "新竹市", "blue_key": "高虹安", "green_key": "莊競程"},
    {"city": "苗栗縣", "blue_key": "鍾東錦", "green_key": "陳品安"},
    {"city": "彰化縣", "blue_key": "魏平政", "green_key": "陳素月"},
    {"city": "南投縣", "blue_key": "許淑華", "green_key": "温世政"},
    {"city": "雲林縣", "blue_key": "張嘉郡", "green_key": "劉建國"},
    {"city": "嘉義縣", "blue_key": "吳品叡", "green_key": "蔡易餘"},
    {"city": "嘉義市", "blue_key": "張啓楷", "green_key": "王美惠"},
    {"city": "屏東縣", "blue_key": "蘇清泉", "green_key": "周春米"},
    {"city": "花蓮縣", "blue_key": "游淑貞", "green_key": "張峻"},
    {"city": "台東縣", "blue_key": "吳秀華", "green_key": "陳瑩"},
    {"city": "澎湖縣", "blue_key": "陳振中", "green_key": "吳淑瑾"},
    {"city": "金門縣", "blue_key": "陳玉珍", "green_key": ""},
    {"city": "連江縣", "blue_key": "王忠銘", "green_key": ""}
]

# 2. 分級加扣分規則
POS_WEIGHTS = {
    "大勝": 10, "爆滿": 8, "領先": 8, "整合成功": 8,
    "合體": 5, "力挺": 5, "站台": 5, "政績": 4, "肯定": 4, "翻轉": 4
}
NEG_WEIGHTS = {
    "貪污": -15, "賄選": -15, "起訴": -15, "性騷": -15,
    "造假": -10, "錄音": -10, "官司": -8, "分裂": -8, "抹黑": -8, "假帳號": -8,
    "爆料": -6, "爭議": -5, "挨批": -5, "失言": -5, "脫口": -5, "落後": -5,
    "取消": -4, "酸": -4
}

def fetch_google_news(query, limit=10):
    """每個縣市只發 1 次請求，避免被 Google 限流"""
    encoded_q = urllib.parse.quote(query)
    url = f"https://news.google.com/rss/search?q={encoded_q}&hl=zh-TW&gl=TW&ceid=TW:zh-Hant"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "zh-TW,zh;q=0.9"
    }
    req = urllib.request.Request(url, headers=headers)
    headlines = []
    try:
        with urllib.request.urlopen(req, timeout=15) as response:
            root = ET.fromstring(response.read())
            for item in root.findall("./channel/item")[:limit]:
                headlines.append(item.find("title").text)
    except Exception as e:
        print(f"抓取失敗 ({query}): {e}")
    return headlines

def evaluate_candidate(headlines):
    """計算單一候選人的分數並記錄原因"""
    score = 0
    logs = []
    for title in headlines[:4]:
        hit_words = []
        title_delta = 0
        for w, pts in POS_WEIGHTS.items():
            if w in title:
                title_delta += pts
                hit_words.append(f"+{pts}({w})")
        for w, pts in NEG_WEIGHTS.items():
            if w in title:
                title_delta += pts
                hit_words.append(f"{pts}({w})")
        score += title_delta
        tag = " ".join(hit_words) if hit_words else "中性(0)"
        logs.append(f"【{tag}】{title}")
    return score, logs

def main():
    tw_time = datetime.now(timezone(timedelta(hours=8))).strftime("%Y/%m/%d %H:%M")
    results = []

    for t in TARGETS:
        city = t["city"]
        b_key = t["blue_key"]
        g_key = t["green_key"]

        # 用 OR 合併查詢，1 次請求同時抓兩位候選人
        query = f"{b_key} OR {g_key}" if g_key else b_key
        all_news = fetch_google_news(query, limit=10)
        print(f"[{city}] 抓到 {len(all_news)} 則新聞")

        # 依照標題出現的名字自動分類歸屬
        b_news = [n for n in all_news if b_key in n]
        g_news = [n for n in all_news if g_key and g_key in n]

        b_score, b_logs = evaluate_candidate(b_news)
        g_score, g_logs = evaluate_candidate(g_news)

        diff = b_score - g_score
        if diff > 0:
            summary = f"🔵 藍營近期佔優 (+{diff})"
        elif diff < 0:
            summary = f"🟢 綠營近期佔優 (+{abs(diff)})"
        else:
            summary = "⚖️ 近期風向持平"

        results.append({
            "city": city,
            "summary": summary,
            "blueScore": b_score,
            "blueLogs": b_logs if b_logs else ["近期無顯著加減分新聞"],
            "greenScore": g_score,
            "greenLogs": g_logs if g_logs else ["近期無顯著加減分新聞"],
            "latestHeadline": all_news[0] if all_news else "尚無最新消息",
            "allNews": all_news[:5] if all_news else ["尚無最新消息"]
        })
        time.sleep(1.2) # 每個縣市停頓 1.2 秒防限流

    js_content = f"const lastUpdated = '{tw_time}';\nconst autoData = {json.dumps(results, ensure_ascii=False, indent=2)};\n"
    with open("auto_data.js", "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"成功更新 22 縣市！時間：{tw_time}")

if __name__ == "__main__":
    main()
