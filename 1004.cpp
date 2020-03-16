#include <iostream>
#include <vector>
using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::vector;
class Solution
{
public:
    int longestOnes(vector<int> &A, int K)
    {
        int count = 0;
        int max = -1;
        int i = 0, j = 0;
        while (j < A.size())
        {
            if (A[j] == 1 || K > 0)
            {
                if (A[j] == 0)
                {
                    K--;
                }
                count++;
                j++;
            }
            else
            {
                if (A[i])
                {
                    count--;
                }
                else
                {
                    j++;
                }
                i++;
            }
            max = (max > count) ? max : count;
        }
        return max;
    }
};

int main(void)
{
    vector<int> A = {0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1};
    Solution solution;
    cout << "\n\n\n"
         << solution.longestOnes(A, 3);
    return 0;
}