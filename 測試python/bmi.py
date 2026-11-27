print("=== 歡迎使用 BMI 健康計算機 ===")

height = float(input("請輸入你的身高（公分）："))
weight = float(input("請輸入你的體重（公斤）："))

# 把公分換成公尺，並套用 BMI 公式：體重 ÷ (身高公尺的平方)
height_m = height / 100
bmi = round(weight / (height_m ** 2), 1)

# 順便反推出你這個身高的「標準體重上下限」
min_normal_weight = round(18.5 * (height_m ** 2), 1)
max_normal_weight = round(24.0 * (height_m ** 2), 1)

print(f"\n你的 BMI 數值是：{bmi}（正常範圍為 18.5 ～ 24.0）")

# 台灣衛福部成人 BMI 標準判斷 + 差距計算
if bmi < 18.5:
    diff_bmi = round(18.5 - bmi, 1)
    diff_kg = round(min_normal_weight - weight, 1)
    print("判定結果：體重過輕，多吃點營養的東西喔！")
    print(f"💡 距離正常體位（18.5）還差 {diff_bmi} 個 BMI 數值（約需增重 {diff_kg} 公斤）")

elif bmi < 24:
    print("判定結果：健康體位，維持得非常標準！")
    print(f"💡 你目前正處於理想範圍內（{min_normal_weight} ～ {max_normal_weight} 公斤）！")

elif bmi < 27:
    diff_bmi = round(bmi - 24.0, 1)
    diff_kg = round(weight - max_normal_weight, 1)
    print("判定結果：體重過重，稍微注意一下飲食與運動！")
    print(f"💡 距離正常體位（24.0）超過了 {diff_bmi} 個 BMI 數值（約需減重 {diff_kg} 公斤）")

else:
    diff_bmi = round(bmi - 24.0, 1)
    diff_kg = round(weight - max_normal_weight, 1)
    print("判定結果：肥胖範圍，建議開始規律運動囉！")
    print(f"💡 距離正常體位（24.0）超過了 {diff_bmi} 個 BMI 數值（約需減重 {diff_kg} 公斤）")
    