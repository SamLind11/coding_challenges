class Solution(object):
    def isValidSudoku(self, board):
        """
        :type board: List[List[str]]
        :rtype: bool
        """
        dim = len(board)

        # Check rows.
        for row in board:
            d = {}
            for i in row:
                if i == ".":
                    pass
                elif i in d:
                    return False
                else:
                    d[i] = 1
        # Check cols.
        for col in range(dim):
            d = {}
            for row in range(dim):
                val = board[row][col]
                if val == ".":
                    pass
                elif val in d:
                    return False
                else:
                    d[val] = 1

        # Check squares.
        for i in range(3):
            for j in range(3):
                d = {}
                for row in range(3):
                    for col in range(3):
                        val = board[i*3 + row][j*3 + col]
                        if val == ".":
                            pass
                        elif val in d:
                            return False
                        else:
                            d[val] = 1

        return True

board = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

