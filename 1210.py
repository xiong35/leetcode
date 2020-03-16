from typing import List
from copy import deepcopy

class Solution:
    move = [
        [[0, 0], [-1, 1]],
        [[1, 0], [1, 0]],
        [[0, 1], [0, 1]],
        [[0, -1], [0, -1]],
        [[-1, 0], [-1, 0]],
        [[0, 0], [1, -1]],
    ]
    positions = [[0, 0], [1, 0]]
    count = 0
    min = 99999
    mode = 'h'

    def minimumMoves(self, grid: List[List[int]]) -> int:
        x = len(grid[0])
        y = len(grid)
        if self.positions[0][1] == y-1 and self.positions[1][0] == x-1:
            self.min = min(self.count, self.min)
            return 0
        for i in range(6):
            if self.mode+i == 5:
                continue
            temp = deepcopy(self.positions)
            for m in range(2):
                for n in range(2):
                    temp[m][n] += self.move[i][m][n]
            x1 = temp[0][0]
            y1 = temp[0][1]
            x2 = temp[1][0]
            y2 = temp[1][1]
            if not(x1 >= 0 and y1 >= 0 and x2 < x and y2 < y):
                continue
            if (grid[y1][x1] or grid[y2][x2]):
                continue
            if not(x1 == x2 or y1 == y2):
                continue
            self.positions = deepcopy(temp)
            self.count += 1
            self.mode = i
            self.minimumMoves(grid)
            self.count -= 1
            for m in range(2):
                for n in range(2):
                    self.positions[m][n] -= self.move[i][m][n]
        return min


s = Solution()
grid = [[0, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1],
        [1, 1, 1, 1, 0, 1],
        [1, 1, 1, 0, 0, 1],
        [1, 1, 1, 0, 0, 0]]
print(s.minimumMoves(grid))
