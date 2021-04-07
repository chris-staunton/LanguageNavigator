import goslate
from english_words import english_words_lower_alpha_set
import heapq

translator = goslate.Goslate()   
wordDict = {}

def get_key(dictionary, n=0):
    if n < 0:
        n = 0
    for i, key in enumerate(dictionary.keys()):
        if i == n:
            return key

#@author: Conall
def levenshteinDistance(seq1, seq2):
    size_x = len(seq1) + 1
    size_y = len(seq2) + 1
    matrix = [[0 for i in range(size_y)] for i in range(size_x)]
    #Set X's and Y's to 0
    for x in range(size_x):
        matrix[x][0] = x
    for y in range(size_y):
        matrix[0][y] = y

    #Go through each letter of each word and determine a number
    for x in range(1, size_x):
        for y in range(1, size_y):
            if seq1[x-1] == seq2[y-1]:
                matrix [x][y] = min(matrix[x-1][y] + 1, matrix[x-1][y-1], matrix[x][y-1] + 1)
            else:
                matrix [x][y] = min(matrix[x-1][y] + 1, matrix[x-1][y-1] + 1, matrix[x][y-1] + 1)
    print (matrix)
    print("The distance is: ", matrix[size_x - 1][size_y - 1])
    return (matrix[size_x - 1][size_y - 1])


if __name__ == '__main__':
    for i in english_words_lower_alpha_set:
        trans = translator.translate(i, 'fr')
        if isinstance(trans, list):
            wordDict[i] = trans[0]
        else:
            wordDict[i] = trans
        print(i + " --> " + wordDict[i])
        if len(wordDict) >= 700:
            break
    heap = []
    for i in range(len(wordDict)):
        key = get_key(wordDict, i)
        trans = wordDict[key].lower()
        x = levenshteinDistance(key, trans)
        if x == 0:
            continue
        elif len(heap) <= 200:
            heapq.heappush(heap, (x, key, trans))
        else:
            del heap[len(heap)-1]
            heapq.heappush(heap, (x, key, trans))
        heapq.heapify(heap)
    print(heap)







