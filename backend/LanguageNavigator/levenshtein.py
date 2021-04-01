import numpy as np
from pip._vendor.msgpack.fallback import xrange


def levenshteinDistance(seq1, seq2):
    size_x = len(seq1) + 1
    size_y = len(seq2) + 1
    matrix = np.zeros((size_x, size_y))
    #Set X's and Y's to 0
    for x in xrange(size_x):
        matrix [x, 0] = x
    for y in xrange(size_y):
        matrix [0, y] = y

    #Go through each letter of each word and determine a number
    for x in xrange(1, size_x):
        for y in xrange(1, size_y):
            if seq1[x-1] == seq2[y-1]:
                matrix [x,y] = min(matrix[x-1, y] + 1, matrix[x-1, y-1], matrix[x, y-1] + 1)
            else:
                matrix [x,y] = min(matrix[x-1,y] + 1, matrix[x-1,y-1] + 1, matrix[x,y-1] + 1)
    print (matrix)
    print("The distance is: ", matrix[size_x - 1, size_y - 1])
    return (matrix[size_x - 1, size_y - 1])



if __name__ == '__main__':
    levenshteinDistance("rhino", "next")
