class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const count = new Array(26).fill(0);

        for (let char of s) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        for (let char of t) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]--;
        }

        return count.every(num => num === 0);
    }
}