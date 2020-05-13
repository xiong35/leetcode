
# ACM 招新算法题 task1-D

## 题目

原题如下

![problemD](https://s1.ax1x.com/2020/05/13/YdEJdH.png)

## 解题思路

首先排除暴力递归, 又慢又容易爆栈  

我的思路是, 先标记每个数的**下降长度**为-1, 然后执行以下过程:

    (1) while 有下降长度为-1的数
    (2)     找到下降长度为-1的, 数字最小的格子, 标记他的下降长度为1
    (3)     从这个格子开始, 寻找四方更高的格子
    (4)         如果有更高的格子
    (5)             标记这个格子的下降长度为 MAX(当前格+1, 这个格子原来的下降高度)
    (6)             递归地进行步骤(3)
    (7)         否则
    (8)             退出递归

步骤(2)的目的在于, 选择一个确定的最低点, 可以肯定在这个点就是某条路径的终点  
之后从这个点慢慢上升, 将途径的格子全都标记为能达到的最大距离  
重复这个过程, 直到所有点都被标记了, 这时候再找到全局最大的下降长度就是所求答案了

代码如下

```python
# python
class Solution(object):

    def __init__(self):
        self.row, self.col = map(int, input().split())
        self.map = list()

        for _ in range(self.row):
            row = map(lambda i: {'height': int(i),
                                 'descend': -1}, input().split())
            self.map.append(list(row))

    def solve(self):
        positions = self.find_lowest()
        while positions is not None:
            self.find_path(*(positions))
            positions = self.find_lowest()
        max = 0
        for row in self.map:
            for item in row:
                if item['descend'] > max:
                    max = item['descend']
        print(max)

    def find_path(self, row, col):
        stack = [[row, col, -1]]
        self.map[row][col]['descend'] = 1

        while stack:
            pop_flag = True
            row, col = stack[-1][0], stack[-1][1]
            direction = stack[-1][2]
            while direction < 3:
                direction += 1
                next_row, next_col = self.move(row, col, direction)
                if next_row is None:
                    continue
                cur_descend = self.map[row][col]['descend']
                if self.map[next_row][next_col]['descend'] > cur_descend+1:
                    continue
                self.map[next_row][next_col]['descend'] = cur_descend+1
                stack[-1][2] = direction
                stack.append([next_row, next_col, -1])
                pop_flag = False
                break
            if pop_flag:
                stack.pop()

    def move(self, row, col, n):
        movements = [[0, 1], [0, -1], [1, 0], [-1, 0]]

        move = movements[n]
        next_row = row + move[0]
        next_col = col + move[1]
        if next_row >= 0 and next_row < self.row and\
                next_col >= 0 and next_col < self.col:
            if self.map[next_row][next_col]['height'] > self.map[row][col]['height']:
                return next_row, next_col
        return None, None

    def find_lowest(self):
        lowest = float('inf')
        lowest_position = None
        for row in range(self.row):
            for col in range(self.col):
                cur_item = self.map[row][col]
                if cur_item['descend'] <= 0 and cur_item['height'] < lowest:
                    lowest = cur_item['height']
                    lowest_position = (row, col)
        return lowest_position

s = Solution()
s.solve()
```