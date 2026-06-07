class Solution {
    productExceptSelf(nums) {
        const result = new Array(nums.length).fill(1);

        // Prefix product
        let prefix = 1;
        for (let i = 0; i < nums.length; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        }

        // Suffix product
        let suffix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] *= suffix;
            suffix *= nums[i];
        }

        return result;
    }
}