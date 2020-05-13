
# ACM 招新算法题 task1-A

## 题目

简单描述题目

### 输入

输入如下的一组数:  

    soldier_num vest_num x y
    s1 s2 s3 ...
    v1 v2 v3 ...

他们的含义是  

- s1 ...: 每个士兵需要的防弹衣大小(降序排列)
- v1 ...: 每个防弹衣实际的大小(降序)
- soldier_num: 士兵数量
- vest_num: 防弹衣数量
- x: 防弹衣可以比士兵需求的小多少
- y: 防弹衣可以比士兵需求的大多少

> 每个数据都是整数, 所有边界情况可取等

### 输出

    pair_num
    s_index1 v_index1
    s_index2 v_index2
    ...

他们的含义是

- pair_num: 最多有多少士兵能穿上差不多合适的防弹衣
- s_index / v_index: 每一对匹配的士兵/防弹衣在输入中的序号(从1开始算)

原题如下
![problemA](https://s1.ax1x.com/2020/05/13/YdEgFs.png)

## 解题思路

### 错误思路

(从小到大)对每一个防弹衣, (从小到大)检查有没有匹配的士兵, 如果有就将这对s/v出队, 重复这个过程

```python
# python
class Solution(object):
    def __init__(self):
        soldier_num, vest_num, x, y = map(int, input().split())
        soldiers = list(map(int, input().split()))
        vests = list(map(int, input().split()))
        self.soldier_num = soldier_num
        self.vest_num = vest_num
        self.x = x
        self.y = y
        self.soldiers = soldiers
        self.vests = vests

    def assign(self):
        pairs = [(0, 0)]
        for index_v in range(pairs[-1][1], self.vest_num):
            for index_s in range(pairs[-1][0], self.soldier_num):
                if self.is_suit(self.soldiers[index_s], self.vests[index_v]):
                    pairs.append(
                        (index_s+1, index_v+1))
                    break

        print(len(pairs)-1)
        for (index_s, index_v) in pairs[1:]:
            print(f"{index_s} {index_v}")

    def is_suit(self, soldier, vest):
        if vest >= soldier - self.x and vest <= soldier + self.y:
            return True
        return False


s = Solution()
s.assign()
```

通常情况没问题, 但是在类似这种情况下: [衣服都很大, 士兵地需求都很小], 就会进行相当多的不必要计算, 降低效率, 结果就是时间超标

### 正解

用两个指针分别指向v数组和s数组的起点(就叫他们 v/s 好了), 轮流**向前推进**(就是往后挪一位), v 推进的条件是[v指向的数值比s指向的数值还要小x], s 推进的条件是[s指向的数值比v小y], 因为如果满足以上条件之一, 说明两个指针指向的值差太多了, 没有交集, 不符合题目要求  

重复推进, 直到某次推进后指针没变化, 这说明s/v在题目要求的范围内了, 记录此次结果, 将两个指针往后挪一位, 重复前面说的推进

大致思路就是这样了, 再处理一下边界情况就好了

代码如下

```python
class Solution(object):

    def __init__(self):
        soldier_num, vest_num, x, y = map(int, input().split())
        soldiers = list(map(int, input().split()))
        vests = list(map(int, input().split()))

        self.soldier_num = soldier_num
        self.vest_num = vest_num
        self.x = x
        self.y = y
        self.soldiers = soldiers
        self.vests = vests

    def assign(self):
        vest_index = 0
        soldier_index = 0
        results = []
        if self.soldier_num == 0 or self.vests == 0:
            print("0")
            return
        while True:
            new_soldier_index, new_vest_index = self.drop_too_small(
                soldier_index, vest_index)
            if new_soldier_index is None:
                break
            if (new_soldier_index, new_vest_index) != (soldier_index, vest_index):
                soldier_index, vest_index = new_soldier_index, new_vest_index
                continue

            results.append((soldier_index+1, vest_index+1))
            soldier_index += 1
            vest_index += 1
            if soldier_index >= self.soldier_num or vest_index >= self.vest_num:
                break

        print(len(results))
        for result in results:
            print(result[0], result[1])

    def drop_too_small(self, s_index, v_index):
        for v in range(v_index, self.vest_num):
            v_index = v
            if self.vests[v] >= self.soldiers[s_index] - self.x:
                break
            if v_index == self.vest_num -1:
                return None, None
        for s in range(s_index, self.soldier_num):
            s_index = s
            if self.soldiers[s] >= self.vests[v_index] - self.y:
                break
            if s_index == self.soldier_num -1:
                return None, None
        return s_index, v_index

s = Solution()
s.assign()
```