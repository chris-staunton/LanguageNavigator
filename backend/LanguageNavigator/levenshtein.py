import numpy as np
from pip._vendor.msgpack.fallback import xrange
from nltk.corpus import wordnet

def distanceCalc(seq1, seq2):
    return levenshteinDistance(seq1,seq2) + levenshteinDistance(soundex(seq1),soundex(seq2))

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
    #print (matrix)
    #print("The distance is: ", matrix[size_x - 1, size_y - 1])
    return (matrix[size_x - 1, size_y - 1])

def soundex(query: str):
    # Step 0: Clean up the query string
    query = query.lower()
    letters = [char for char in query if char.isalpha()]
    # Step 1: Save the first letter. Remove all occurrences of a, e, i, o, u, y, h, w.
    # If query contains only 1 letter, return query+"000" (Refer step 5)
    if len(query) == 1:
        return query + "000"
    to_remove = ('a', 'e', 'i', 'o', 'u', 'y', 'h', 'w')

    first_letter = letters[0]
    letters = letters[1:]
    letters = [char for char in letters if char not in to_remove]

    if len(letters) == 0:
        return first_letter + "000"

    # Step 2: Replace all consonants (include the first letter) with digits according to rules
    to_replace = {('b', 'f', 'p', 'v'): 1, ('c', 'g', 'j', 'k', 'q', 's', 'x', 'z'): 2,
                  ('d', 't'): 3, ('l',): 4, ('m', 'n'): 5, ('r',): 6}

    first_letter = [value if first_letter else first_letter for group, value in to_replace.items() if first_letter in group]
    letters = [value if char else char for char in letters for group, value in to_replace.items() if char in group]

    # Step 3: Replace all adjacent same digits with one digit.
    letters = [char for ind, char in enumerate(letters)
               if (ind == len(letters) - 1 or (ind+1 < len(letters) and char != letters[ind+1]))]

    # Step 4: If the saved letter’s digit is the same the resulting first digit, remove the digit (keep the letter)
    if first_letter == letters[0]:
        letters[0] = query[0]
    else:
        letters.insert(0, query[0])

    # Step 5: Append 3 zeros if result contains less than 3 digits.
    # Remove all except first letter and 3 digits after it. (Optional [OFF])

    first_letter = letters[0]
    letters = letters[1:]

    #letters = [char for char in letters if isinstance(char, int)][0:3]
    # If you want the algorithm to work like the original soundex formula
    # where it only accepts the first three constanants
    # and gives a number for that then provides a uniform code for those constanants
    # remove the comment on the first line of this
    # Otherwise, it will compare all the constanants.

    while len(letters) < 3:
        letters.append(0)
    letters.insert(0, first_letter)
    string = "".join([str(l) for l in letters])
    return string


if __name__ == '__main__':
    print(distanceCalc("a","e"))
    #print(soundex("rhinocerous"))
