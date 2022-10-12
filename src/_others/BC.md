
# ACM 招新算法题 task1-B task1-C 

## B-题目

输入一个数 n  

输出  
$\forall$ integer X in ${1, 2, 3, ... n}$  
计算 X 的**位数**的总和  
如 666 是3位, 42 是2位

原题如下

![problemB](https://s1.ax1x.com/2020/05/13/YdEGee.png)

## B-解题思路

1-9 的 9 个数, 每个数 1 位  
10-99 的 90 个数, 每个数 2 位  
100-999 的 900 个数, 每个数 3 位  
...  
这是有规律的, n 如果是三位数, 9 个1位数, 90 个2位数他全都要, 然后```(n - 100 + 1) * 3```就是3位数的总位数

最后考虑一下边界情况/要不要+1-1什么的就好了

代码如下

```python
# python
def solve():
    book_num = int(input())
    cur_digit_min = 1
    cur_digit_max = 9
    cur_digit = 1

    result = 0
    while True:
        if book_num > cur_digit_max:
            result += (cur_digit_max-cur_digit_min+1)*cur_digit
            cur_digit += 1
            cur_digit_min *= 10
            cur_digit_max = cur_digit_max*10+9
        else:
            result += (book_num-cur_digit_min+1)*cur_digit
            break
    print(result)

solve()
```

## C-题目

计算一个整数在java中最小能用哪种类型存储  
每种类型的范围见下图, 包含边界

原题如下

![problemC](https://s1.ax1x.com/2020/05/13/YdEBy8.png)

## C-解题思路

恕我直言, 这题python秒做...

```python
# python
def solve():
    digit = input()
    if len(digit) > 20:
        print("BigInteger")
        return
    digit = int(digit)

    if digit <= 127 and digit >=-128:
        print("byte")
        return
    if digit <= 32767 and digit >=-32768:
        print("short")
        return
    if digit <= 2147483647 and digit >=-2147483648:
        print("int")
        return
    if digit <= 9223372036854775807 and digit >=-9223372036854775808:
        print("long")
        return
    else:
        print("BigInteger")

solve()
```