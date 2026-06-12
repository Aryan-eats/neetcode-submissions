class Solution {
    searchMatrix(matrix, target) {
        let rows = matrix.length;
        let cols = matrix[0].length;

        let top = 0;
        let bottom = rows - 1;

        while (top <= bottom) {
            const row =
                Math.floor((top + bottom) / 2);

            if (
                target > matrix[row][cols - 1]
            ) {
                top = row + 1;
            } else if (
                target < matrix[row][0]
            ) {
                bottom = row - 1;
            } else {
                let left = 0;
                let right = cols - 1;

                while (left <= right) {
                    const mid = Math.floor(
                        (left + right) / 2
                    );

                    if (
                        matrix[row][mid] === target
                    ) {
                        return true;
                    }

                    if (
                        matrix[row][mid] < target
                    ) {
                        left = mid + 1;
                    } else {
                        right = mid - 1;
                    }
                }

                return false;
            }
        }

        return false;
    }
}