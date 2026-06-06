class Solution {
    encode(strs) {
        let encoded = "";

        for (let str of strs) {
            encoded += str.length + "#" + str;
        }

        return encoded;
    }

    decode(s) {
        const result = [];
        let i = 0;

        while (i < s.length) {
            let j = i;

            // Find separator '#'
            while (s[j] !== "#") {
                j++;
            }

            // Get string length
            const length = parseInt(s.substring(i, j));

            // Move pointer to start of string
            j++;

            // Extract string
            const str = s.substring(j, j + length);
            result.push(str);

            // Move to next encoded string
            i = j + length;
        }

        return result;
    }
}