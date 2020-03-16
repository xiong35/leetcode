#include<iostream>
#include<vector>
using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::vector;
class Solution
{
public:
    int removeDuplicates(vector<int> &nums)
    {
        int i, j;
        i = j = 0;
        while (j < nums.size())
        {
            while ( j < nums.size() - 1&& nums[j] == nums[j + 1])
            {
                j++;
            }
            nums[i++] = nums[j++];
        }
        return i ;
    }
};
int main(void)
{
    Solution s;
    vector<int> nums = {1,1,2};
    cout<<"\n\n\n"<<s.removeDuplicates(nums);
	return 0;
}