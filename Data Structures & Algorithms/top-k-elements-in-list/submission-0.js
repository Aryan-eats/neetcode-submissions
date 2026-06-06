class Solution {
    topKFrequent(nums, k) {
        const count = new Map();

        // Count frequency
        for (let num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }

        // Create buckets
        const buckets = Array(nums.length + 1)
            .fill()
            .map(() => []);

        // Place numbers into buckets based on frequency
        for (let [num, freq] of count) {
            buckets[freq].push(num);
        }

        const result = [];

        // Traverse buckets from highest frequency
        for (let i = buckets.length - 1; i >= 0; i--) {
            for (let num of buckets[i]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }
    }
}