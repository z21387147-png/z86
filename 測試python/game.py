import random

answer = random.randint(1, 100)
count = 0
print("=== 歡迎來到終極密碼！請猜一個 1 到 100 的數字 ===")

while True:
    guess = int(input("請輸入你猜的數字："))
    count = count + 1

    if guess == answer:
        print(f"恭喜答對！答案就是 {answer}，你總共猜了 {count} 次！")
        break
    elif guess < answer:
        print("太小了，再猜大一點！")
    else:
        print("太大了，再猜小一點！")