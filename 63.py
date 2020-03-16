class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid):
        if len(obstacleGrid) <= 0:
            return 0
        if len(obstacleGrid[0]) <= 0:
            return 0
        shape = (len(obstacleGrid)-1, len(obstacleGrid[0])-1)
        if obstacleGrid[0][0] == 1 or obstacleGrid[shape[0]][shape[1]] == 1:
            return 0
        obstacleGrid[0][0] = -1
        for i in range(len(obstacleGrid)):
            for j in range(len(obstacleGrid[0])):
                if obstacleGrid[i][j] == 1:
                    continue
                if i+1 <= shape[0]:
                    if obstacleGrid[i+1][j] != 1:
                        obstacleGrid[i+1][j] += obstacleGrid[i][j]
                if j+1 <= shape[1]:
                    if obstacleGrid[i][j+1] != 1:
                        obstacleGrid[i][j+1] += obstacleGrid[i][j]
        return -obstacleGrid[shape[0]][shape[1]]


s = Solution()
input = [
    [1]
]
print(s.uniquePathsWithObstacles(input))
