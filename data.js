const electionData = [
  // === 六都 ===
  {
    city: "台北市", region: "six", area: "north",
    statusType: "tossup", statusText: "🔥 五五波激戰",
    blueCand: "蔣萬安 (國·現)", blueClass: "kmt",
    greenCand: "沈伯洋 (民)", greenClass: "dpp",
    bluePct: 46.0, greenPct: 44.7,
    pollNote: "多數調查在誤差內，中立選民成關鍵",
    pollCompare: [
      "• TVBS封關：蔣萬安 46% vs 沈伯洋 44%",
      "• ETtoday：蔣萬安 48.1% vs 沈伯洋 42.0%",
      "• 鋒燦傳媒：沈伯洋 44.7% vs 蔣萬安 43.0%",
      "• 信民協會：沈伯洋 48.6% vs 蔣萬安 33.8%"
    ],
    socialTags: [
      { platform: "Threads", text: "沈佔優 / 假帳號洗版" },
      { platform: "FB", text: "蔣佔優 / 辯論攻防" },
      { platform: "IG", text: "青年圖文五五波" }
    ],
    socialDetail: [
      "• 【Threads 爆料】逾2400個可疑帳號散播AI抹黑沈伯洋霸凌假影片，遭Meta停用；辯論後亦出現藍營網軍洗版爭議。",
      "• 【FB / 新聞】蔣萬安最大聲量來自新聞與臉書社團，藍營猛攻「黑熊學院」經費與言論爭議。",
      "• 【IG 動態】雙方主打短影音與市政圖卡，沈團隊以科技串連搶攻首投族。"
    ],
    newsHeadline: "沈伯洋取消選前之夜",
    newsDetail: "沈伯洋深夜宣布取消仁愛路選前之夜實體晚會，避免交管影響市民；蔣萬安表示願讓出市府路，並邀盧秀燕北上站台。"
  },
  {
    city: "新北市", region: "six", area: "north",
    statusType: "tossup", statusText: "🔥 藍白合激戰",
    blueCand: "李四川 (國·藍白合)", blueClass: "kmt",
    greenCand: "蘇巧慧 (民)", greenClass: "dpp",
    bluePct: 43.1, greenPct: 44.0,
    pollNote: "黃國昌退選輔選李四川，全力抗衡蘇巧慧",
    pollCompare: [
      "• TVBS封關：李四川 43% vs 蘇巧慧 41%",
      "• 信民協會：蘇巧慧 46.5% vs 李四川 35.2%",
      "• TPOC趨勢：雙北外溢效應明顯，五五波拉鋸"
    ],
    socialTags: [
      { platform: "Threads", text: "李負面聲量高 / 蘇佔優" },
      { platform: "FB", text: "藍白合組織動員強" },
      { platform: "IG", text: "蘇巧慧視覺圖卡活躍" }
    ],
    socialDetail: [
      "• 【Threads 平台】數據顯示李四川在脆上負面討論比例高達70%，網友聚焦工程與居住正義檢驗；蘇巧慧在脆上互動佔比近3成。",
      "• 【FB 社團】地方社團瘋傳藍白合退選整合內幕，侯友宜8度合體拉抬。",
      "• 【IG 動態】蘇巧慧主打900天基層紀錄短影音，吸引年輕家長關注。"
    ],
    newsHeadline: "李四川8度合體侯友宜車掃",
    newsDetail: "李四川喊出8年完工新北大巨蛋，獲黃國昌與侯友宜全力輔選；蘇巧慧中和拜票細數900天參選歷程，預告選前之夜藏驚喜。"
  },
  {
    city: "桃園市", region: "six", area: "north",
    statusType: "blue", statusText: "🔵 藍營穩居領先",
    blueCand: "張善政 (國·現)", blueClass: "kmt",
    greenCand: "黃世杰 (民)", greenClass: "dpp",
    bluePct: 47.4, greenPct: 36.0,
    pollNote: "各家封關民調皆由張善政保持領先",
    pollCompare: [
      "• TVBS封關：張善政 47% vs 黃世杰 36%",
      "• 信民協會：張善政 42.1% vs 黃世杰 34.8%",
      "• 學者評估：張善政約維持10%左右領先優勢"
    ],
    socialTags: [
      { platform: "Threads", text: "張開通帳號直球對決" },
      { platform: "FB", text: "埤塘光電爆料攻防" },
      { platform: "IG", text: "夜市掃街花絮熱度高" }
    ],
    socialDetail: [
      "• 【Threads 話題】張善政選前開通脆帳號談美光勞資爭議破11萬瀏覽，遭網友酸「新店市長」，本人親自留言邀約官邸外當面聊。",
      "• 【FB 爆料】黃世杰在臉書猛攻埤塘光電與招商爭議，要求市府公開說明。",
      "• 【IG 動態】張善政與蔣萬安合體逛桃園夜市影片在IG大量轉發。"
    ],
    newsHeadline: "埤塘光電與產業發展交鋒",
    newsDetail: "黃世杰承諾絕不推動埤塘光電並批產業招商不力；張善政合體蔣萬安逛夜市拉票，穩健守成。"
  },
  {
    city: "台中市", region: "six", area: "central",
    statusType: "tossup", statusText: "🔥 麻花捲肉搏",
    blueCand: "江啟臣 (國)", blueClass: "kmt",
    greenCand: "何欣純 (民)", greenClass: "dpp",
    bluePct: 39.5, greenPct: 40.2,
    pollNote: "盧秀燕任期屆滿交棒，藍綠調查結果互異",
    pollCompare: [
      "• 世新民調：江啟臣領先何欣純約 8~9%",
      "• 信民協會：何欣純 41.2% vs 江啟臣 35.4%",
      "• TPOC趨勢：選情緊繃，差距縮小至誤差範圍"
    ],
    socialTags: [
      { platform: "Threads", text: "太平本命區車掃互尬" },
      { platform: "FB", text: "大咖站台直播拼場" },
      { platform: "IG", text: "盧秀燕交棒短影音" }
    ],
    socialDetail: [
      "• 【Threads 討論】台中網友熱議藍綠同日直搗太平本命區車掃，年輕族群討論度急升。",
      "• 【FB 社團】台中地方社團高度關注空污、中火議題與藍白整合動向，韓國瑜與蔡英文助陣直播破萬人觀看。",
      "• 【IG 動態】江啟臣主打國際視野與盧秀燕市政延續Reels。"
    ],
    newsHeadline: "韓國瑜盧秀燕vs蔡英文助陣",
    newsDetail: "選前最後衝刺，韓國瑜、盧秀燕陪江啟臣掃街；蔡英文合體何欣純直搗對手本命區，北屯造勢湧入近2萬人。"
  },
  {
    city: "台南市", region: "six", area: "south_east",
    statusType: "green", statusText: "🟢 綠營大幅領先",
    blueCand: "謝龍介 (國)", blueClass: "kmt",
    greenCand: "陳亭妃 (民)", greenClass: "dpp",
    bluePct: 24.5, greenPct: 58.0,
    pollNote: "綠營基本盤穩固，陳亭妃維持高支持度",
    pollCompare: [
      "• TVBS封關：陳亭妃 59% vs 謝龍介 23%",
      "• 信民協會：陳亭妃 57.4% vs 謝龍介 25.1%",
      "• TPOC趨勢：綠營優勢明顯，謝龍介主打空戰突圍"
    ],
    socialTags: [
      { platform: "Threads", text: "鐵馬苦行與王世堅梗圖" },
      { platform: "FB", text: "光電黑金爆料戰場" },
      { platform: "IG", text: "台南美食與基層走訪" }
    ],
    socialDetail: [
      "• 【FB 爆料】謝龍介在臉書持續爆料台南光電案爭議並喊出「拆光電、普發2萬」，在藍營社群轉發度極高。",
      "• 【Threads 話題】陳亭妃鐵馬破千里苦行紀錄與王世堅站台金句在脆上引發熱烈二創。",
      "• 【IG 動態】陳亭妃以女性溫暖形象與地方小吃打卡吸引年輕選民。"
    ],
    newsHeadline: "光電議題與鐵馬破千里",
    newsDetail: "謝龍介嗆賭誓拆光電、主張普發2萬；陳亭妃鐵馬破千里苦行固票，並獲王世堅站台助陣。"
  },
  {
    city: "高雄市", region: "six", area: "south_east",
    statusType: "tossup", statusText: "🔥 差距縮小激戰",
    blueCand: "柯志恩 (國)", blueClass: "kmt",
    greenCand: "賴瑞隆 (民)", greenClass: "dpp",
    bluePct: 44.5, greenPct: 45.0,
    pollNote: "各家機構分歧極大，呈現拉鋸格局",
    pollCompare: [
      "• ETtoday：柯志恩 46.1% vs 賴瑞隆 44.6%",
      "• 年代民調：賴瑞隆 43.9% vs 柯志恩 24.7%",
      "• 信民協會：賴瑞隆 47.8% vs 柯志恩 36.2%"
    ],
    socialTags: [
      { platform: "Threads", text: "百面巨幅看板經費爭議" },
      { platform: "FB", text: "美濃大峽谷/環境爆料" },
      { platform: "IG", text: "選前之夜演唱會視覺" }
    ],
    socialDetail: [
      "• 【Threads 爆料】網友在脆上狂拍高雄街頭「百面柯志恩巨幅看板」，質疑競選經費來源引發洗版討論。",
      "• 【FB 攻防】藍營粉專在臉書猛打高雄環境與廢棄物爭議；綠營則以賴清德站台與演唱會經濟政績回擊。",
      "• 【IG 動態】柯志恩選前之夜主打音樂人開唱海報，搶攻年輕人眼球。"
    ],
    newsHeadline: "選前之夜拼場與看板攻防",
    newsDetail: "賴瑞隆邀賴清德助講並質疑柯志恩看板經費；柯志恩獲盧秀燕、張麗善女力助陣，選前之夜請音樂人開唱。"
  },

  // === 其餘重點縣市（其餘縣市同步保留並加入社群標籤） ===
  {
    city: "基隆市", region: "other", area: "north",
    statusType: "tossup", statusText: "🔥 府會龍頭對決",
    blueCand: "謝國樑 (國·現)", blueClass: "kmt",
    greenCand: "童子瑋 (民)", greenClass: "dpp",
    bluePct: 44.0, greenPct: 42.0,
    pollNote: "現任市長對決議長，雙北外溢效應受矚目",
    pollCompare: [ "• 藍營內參：謝國樑微幅領先約 4~5%", "• 綠營內參：童子瑋緊咬在 2% 誤差範圍內" ],
    socialTags: [ { platform: "Threads", text: "通勤族捷運進度討論" }, { platform: "FB", text: "基隆人社團市政攻防" } ],
    socialDetail: [ "• 【Threads / FB】基隆通勤族高度關注基捷進度與電動機車政策後續；童子瑋在社群主打年輕世代接棒。" ],
    newsHeadline: "基隆捷運與市政政績攻防",
    newsDetail: "謝國樑訴求施政延續與藍白整合力挺；童子瑋主打基隆翻轉與交通建設。"
  },
  {
    city: "宜蘭縣", region: "other", area: "north",
    statusType: "coalition", statusText: "🤝 藍白民調整合",
    blueCand: "吳宗憲 (國·藍白合)", blueClass: "kmt",
    greenCand: "林國漳 (民)", greenClass: "dpp",
    bluePct: 42.0, greenPct: 40.0,
    pollNote: "藍白整合共推吳宗憲，五五波激戰",
    pollCompare: [ "• 藍白整合民調：吳宗憲領先約 2~3%", "• 綠營評估：林國漳受北北宜桃聯防拉抬呈現平手" ],
    socialTags: [ { platform: "FB", text: "藍白合民調過程熱議" }, { platform: "Threads", text: "北北宜桃聯防聲量" } ],
    socialDetail: [ "• 【FB / Threads】民眾黨陳琬惠整合退選成臉書熱議焦點；林國漳主打律師專業形象獲青壯年支持。" ],
    newsHeadline: "北北宜桃區域聯防連線",
    newsDetail: "林國漳加入民進黨北北宜桃區域聯防連線造勢；吳宗憲獲民眾黨陳琬惠整合力挺力守宜蘭。"
  },
  {
    city: "新竹縣", region: "other", area: "north",
    statusType: "tossup", statusText: "🔥 強棒對決激戰",
    blueCand: "徐欣瑩 (國)", blueClass: "kmt",
    greenCand: "鄭朝方 (民)", greenClass: "dpp",
    bluePct: 45.0, greenPct: 43.0,
    pollNote: "竹北市長鄭朝方強勢挑戰藍營版圖",
    pollCompare: [ "• 綜合評估：徐欣瑩傳統盤佔優，鄭朝方竹北票倉大勝", "• TPOC趨勢：網路聲量與年輕選民支持度鄭朝方領先" ],
    socialTags: [ { platform: "Threads", text: "竹北工程師社群熱議" }, { platform: "IG", text: "鄭朝方美學政見高互動" } ],
    socialDetail: [ "• 【Threads / IG】竹北新興家庭在脆與IG高度討論教育資源與交通塞車問題，鄭朝方社群互動率居全縣之冠。" ],
    newsHeadline: "竹北票倉成決勝關鍵",
    newsDetail: "民進黨徵召高人氣竹北市長鄭朝方參選，緊咬國民黨立委徐欣瑩，竹北新興人口選票成勝負關鍵。"
  },
  {
    city: "新竹市", region: "other", area: "north",
    statusType: "coalition", statusText: "🤝 藍白現任優先",
    blueCand: "高虹安 (無·現/藍白合)", blueClass: "tpp",
    greenCand: "莊競程 (民)", greenClass: "dpp",
    bluePct: 45.0, greenPct: 38.0,
    pollNote: "藍白協議禮讓現任，對決綠營莊競程",
    pollCompare: [ "• 地方評估：在野整合成功後高虹安維持領先優勢", "• 變數觀察：科技園區中間選民投票率成關鍵" ],
    socialTags: [ { platform: "Threads", text: "司法官司與輕軌攻防" }, { platform: "FB", text: "新竹大小事社團激辯" } ],
    socialDetail: [ "• 【Threads / FB】脆上網友緊盯高虹安官司進度與大新竹輕軌可行性；臉書地方社團則聚焦棒球場與通學步道改善。" ],
    newsHeadline: "高虹安端大新竹輕軌政見",
    newsDetail: "高虹安提出大新竹輕軌地下化政見爭取連任；莊競程合體沈伯洋造勢全力搶攻科技選票。"
  },
  {
    city: "苗栗縣", region: "other", area: "north",
    statusType: "blue", statusText: "🔵 藍營現任優勢",
    blueCand: "鍾東錦 (國·現)", blueClass: "kmt",
    greenCand: "陳品安 (民)", greenClass: "dpp",
    bluePct: 54.0, greenPct: 31.0,
    pollNote: "鍾東錦恢復國民黨籍爭取連任，優勢明顯",
    pollCompare: [ "• 地方評估：鍾東錦獲國民黨提名並整合派系，領先逾20%" ],
    socialTags: [ { platform: "FB", text: "地方派系整合動員" }, { platform: "Threads", text: "陳品安青年監督聲量" } ],
    socialDetail: [ "• 【FB / Threads】鍾東錦在臉書展現強大基層組織動員力；陳品安在脆上獲得年輕與返鄉青年支持。" ],
    newsHeadline: "鍾東錦整合地方派系固票",
    newsDetail: "鍾東錦獲國民黨正式提名並整合全縣基層組織；民進黨徵召縣議員陳品安主打青年與專業監督。"
  },
  {
    city: "彰化縣", region: "other", area: "central",
    statusType: "tossup", statusText: "🔥 四腳督大混戰",
    blueCand: "魏平政 (國)", blueClass: "kmt",
    greenCand: "陳素月 (民) / 邱建富 (無)", greenClass: "dpp",
    bluePct: 36.0, greenPct: 38.0,
    pollNote: "前市長邱建富脫黨參選，綠營面臨分裂變數",
    pollCompare: [ "• 選情評估：陳素月與魏平政支持度接近（約35~38%）", "• 分裂變數：邱建富無黨籍參選約分走 8~12% 票源" ],
    socialTags: [ { platform: "FB", text: "綠營分裂棄保效應熱議" }, { platform: "Threads", text: "彰化捷運與青年返鄉" } ],
    socialDetail: [ "• 【FB 社團】彰化人社團熱烈討論「泛綠分裂是否讓藍營漁翁得利」，棄保傳聞在選前最後一週發酵。" ],
    newsHeadline: "泛綠分裂成彰化最大變數",
    newsDetail: "民進黨提名立委陳素月，但前彰化市長邱建富以無黨籍參選瓜分票源，國民黨魏平政力拚漁翁得利。"
  },
  {
    city: "南投縣", region: "other", area: "central",
    statusType: "blue", statusText: "🔵 藍營現任優勢",
    blueCand: "許淑華 (國·現)", blueClass: "kmt",
    greenCand: "温世政 (民)", greenClass: "dpp",
    bluePct: 53.0, greenPct: 32.0,
    pollNote: "許淑華施政滿意度高，對決牙醫温世政",
    pollCompare: [ "• 地方評估：許淑華施政滿意度高，穩定領先逾 15~20%" ],
    socialTags: [ { platform: "FB", text: "觀光活動與長照福利" }, { platform: "IG", text: "南投旅遊短影音推廣" } ],
    socialDetail: [ "• 【FB / IG】許淑華透過茶博與燈會活動在臉書與IG累積高好感度；温世政主打醫療長照切入。" ],
    newsHeadline: "許淑華主打觀光與交通建設",
    newsDetail: "現任縣長許淑華基層實力雄厚，穩健領先；民進黨徵召牙醫師温世政主打醫療與長照福利。"
  },
  {
    city: "雲林縣", region: "other", area: "central",
    statusType: "tossup", statusText: "🔥 兩大家族對決",
    blueCand: "張嘉郡 (國)", blueClass: "kmt",
    greenCand: "劉建國 (民)", greenClass: "dpp",
    bluePct: 44.0, greenPct: 43.0,
    pollNote: "張家班接棒人對決資深立委劉建國",
    pollCompare: [ "• 地方評估：雙方實力伯仲之間，差距在 3% 誤差內", "• 盤勢分析：海線張家佔優、山線劉建國強勢" ],
    socialTags: [ { platform: "FB", text: "農漁業補助與家族攻防" }, { platform: "Threads", text: "返鄉投票串連話題" } ],
    socialDetail: [ "• 【FB / Threads】臉書地方社團聚焦張家班接棒與農水路建設；脆上則出現不少雲林青年號召返鄉投票貼文。" ],
    newsHeadline: "山線海線組織戰白熱化",
    newsDetail: "張麗善任期屆滿交棒姪女張嘉郡，對決多次參選的民進黨立委劉建國，雙方海線與山線實力伯仲之間。"
  },
  {
    city: "嘉義縣", region: "other", area: "central",
    statusType: "green", statusText: "🟢 綠營穩居優勢",
    blueCand: "吳品叡 (無·藍營支持)", blueClass: "ind",
    greenCand: "蔡易餘 (民)", greenClass: "dpp",
    bluePct: 33.0, greenPct: 55.0,
    pollNote: "國民黨未提名禮讓朴子市長吳品叡",
    pollCompare: [ "• 地方評估：蔡易餘基層組織完整，領先幅度超過 20%" ],
    socialTags: [ { platform: "FB", text: "無人機園區產業政績" }, { platform: "IG", text: "蔡易餘親民搞笑短片" } ],
    socialDetail: [ "• 【FB / IG】蔡易餘靠親民幽默短片與無人機產業園區政績在社群維持高人氣。" ],
    newsHeadline: "蔡易餘穩守綠營優勢版圖",
    newsDetail: "民進黨初選勝出的蔡易餘基層實力強勁；在野陣營支持無黨籍朴子市長吳品叡力拚突圍。"
  },
  {
    city: "嘉義市", region: "other", area: "central",
    statusType: "coalition", statusText: "🤝 藍白民調整合",
    blueCand: "張啓楷 (眾·藍白合)", blueClass: "tpp",
    greenCand: "王美惠 (民)", greenClass: "dpp",
    bluePct: 41.0, greenPct: 43.0,
    pollNote: "藍白全民調共推張啓楷，激戰王美惠",
    pollCompare: [ "• 綜合評估：藍白整合後縮小差距，王美惠基層口碑仍佔微幅優勢" ],
    socialTags: [ { platform: "Threads", text: "藍白合示範區熱烈討論" }, { platform: "FB", text: "地方服務口碑對決" } ],
    socialDetail: [ "• 【Threads / FB】嘉義市被視為藍白合關鍵指標，民眾黨支持者在脆上高度動員；王美惠在臉書靠日常服務貼文固票。" ],
    newsHeadline: "學界與地方人士站台張啓楷",
    newsDetail: "張啓楷造勢晚會獲清大退休教授李敏及前綠委林國慶站台；王美惠主打地方服務口碑迎戰。"
  },
  {
    city: "屏東縣", region: "other", area: "south_east",
    statusType: "green", statusText: "🟢 綠營現任優勢",
    blueCand: "蘇清泉 (國)", blueClass: "kmt",
    greenCand: "周春米 (民·現)", greenClass: "dpp",
    bluePct: 38.0, greenPct: 49.0,
    pollNote: "周春米與蘇清泉二度對決，綠營佔上風",
    pollCompare: [ "• 地方評估：周春米握有執政優勢，領先約 10~12%" ],
    socialTags: [ { platform: "FB", text: "高鐵南延與醫療議題" }, { platform: "IG", text: "屏東大型活動視覺宣傳" } ],
    socialDetail: [ "• 【FB / IG】周春米透過屏東燈會與大型活動在IG累積高好感；蘇清泉在臉書聚焦偏鄉醫療與農漁產銷。" ],
    newsHeadline: "周春米主打科技產業進駐屏東",
    newsDetail: "繼 2022 年激戰後兩人再度交鋒，周春米握有現任執政優勢，蘇清泉持續深耕醫療與農漁民選票。"
  },
  {
    city: "花蓮縣", region: "other", area: "south_east",
    statusType: "coalition", statusText: "🤝 綠挺無黨抗藍",
    blueCand: "游淑貞 (國) / 魏嘉賢 (無)", blueClass: "kmt",
    greenCand: "張峻 (無·綠營支持)", greenClass: "ind",
    bluePct: 45.0, greenPct: 40.0,
    pollNote: "泛藍三人分票（游淑貞、張峻、魏嘉賢）",
    pollCompare: [ "• 三強鼎立：游淑貞獲傅崐萁系統力挺，魏嘉賢與張峻瓜分在野與中間票", "• 整合效應：民進黨不提名禮讓張峻，選情高度緊繃" ],
    socialTags: [ { platform: "Threads", text: "反傅聯盟與震後重建爆料" }, { platform: "FB", text: "花蓮三強分票激辯" } ],
    socialDetail: [ "• 【Threads 爆料】花蓮地震重建進度與地方政治生態在脆上引發全國網友高度關注，綠營支持者串連挺張峻。" ],
    newsHeadline: "民進黨不提名禮讓議長張峻",
    newsDetail: "花蓮上演罕見三強鼎立：國民黨提名吉安鄉長游淑貞，前市長魏嘉賢獨立參選，民進黨則表態支持議長張峻。"
  },
  {
    city: "台東縣", region: "other", area: "south_east",
    statusType: "tossup", statusText: "🔥 女力雙雄對決",
    blueCand: "吳秀華 (國)", blueClass: "kmt",
    greenCand: "陳瑩 (民)", greenClass: "dpp",
    bluePct: 44.0, greenPct: 41.0,
    pollNote: "議長吳秀華對決原民立委陳瑩",
    pollCompare: [ "• 地方評估：吳秀華具地方組織優勢，陳瑩原民票源強勁，差距縮小至 3~5%" ],
    socialTags: [ { platform: "FB", text: "花東交通與原民福利" }, { platform: "IG", text: "部落文化與青年返鄉" } ],
    socialDetail: [ "• 【FB / IG】陳瑩在原住民社群與IG擁有高互動；吳秀華主打縣政無縫接軌。" ],
    newsHeadline: "原住民與南迴選票成關鍵",
    newsDetail: "國民黨議長吳秀華獲縣長饒慶鈴全力交棒；民進黨徵召資深原民立委陳瑩，打破台東長期藍大於綠格局。"
  },
  {
    city: "澎湖縣", region: "other", area: "south_east",
    statusType: "tossup", statusText: "🔥 澎湖六人混戰",
    blueCand: "陳振中 (國) / 葉竹林 (無)", blueClass: "kmt",
    greenCand: "吳淑瑾 (民)", greenClass: "dpp",
    bluePct: 42.0, greenPct: 39.0,
    pollNote: "陳光復因傷退選，由夫人吳淑瑾代夫出征",
    pollCompare: [ "• 混戰評估：泛藍陳振中與葉竹林分票，吳淑瑾承接現任執政基礎" ],
    socialTags: [ { platform: "FB", text: "澎湖大小事六人混戰" }, { platform: "Threads", text: "機票補助與觀光討論" } ],
    socialDetail: [ "• 【FB 社團】澎湖地方社團熱議六人混戰與「代夫出征」效應，離島機票與醫療成焦點。" ],
    newsHeadline: "吳淑瑾代夫出征迎戰六人混戰",
    newsDetail: "現任縣長陳光復因傷退選，民進黨改徵召其妻吳淑瑾參選；國民黨提名湖西鄉長陳振中，另有葉竹林等共 6 人參選。"
  },
  {
    city: "金門縣", region: "other", area: "south_east",
    statusType: "blue", statusText: "🔵 藍營七人混戰",
    blueCand: "陳玉珍 (國) / 李文良 (無)", blueClass: "kmt",
    greenCand: "（民進黨未提名）", greenClass: "none-cand",
    bluePct: 52.0, greenPct: 30.0,
    pollNote: "全台最多 7 人登記，陳玉珍聲勢領先",
    pollCompare: [ "• 地方評估：陳玉珍全國知名度與組織動員居首，李文良緊追在後" ],
    socialTags: [ { platform: "FB", text: "小三通與金門大橋議題" }, { platform: "Threads", text: "陳玉珍全國高聲量話題" } ],
    socialDetail: [ "• 【Threads / FB】陳玉珍全國網路聲量極高，脆上常出現兩極化熱議；臉書地方社團則聚焦金門福利與小三通。" ],
    newsHeadline: "金門 7 搶 1 全台最擁擠選區",
    newsDetail: "現任縣長陳福海未尋求連任，國民黨徵召立委陳玉珍參選，面對副縣長李文良等 6 位無黨籍候選人挑戰。"
  },
  {
    city: "連江縣", region: "other", area: "south_east",
    statusType: "blue", statusText: "🔵 藍營現任優勢",
    blueCand: "王忠銘 (國·現) vs 曹爾元 (無)", blueClass: "kmt",
    greenCand: "（民進黨未提名）", greenClass: "none-cand",
    bluePct: 56.0, greenPct: 44.0,
    pollNote: "現任縣長王忠銘對決無黨籍曹爾元",
    pollCompare: [ "• 地方評估：現任縣長王忠銘執政優勢穩固，曹爾元宗親票源深厚" ],
    socialTags: [ { platform: "FB", text: "馬祖資訊網交通熱議" } ],
    socialDetail: [ "• 【FB / 地方論壇】馬祖民眾高度關注台馬航線航班穩定與觀光發展。" ],
    newsHeadline: "馬祖二強對決拚施政延續",
    newsDetail: "連江縣由尋求連任的國民黨籍縣長王忠銘，對決地方實力雄厚的無黨籍候選人曹爾元。"
  }
];
