import goslate
from english_words import english_words_lower_alpha_set
import heapq
from google_trans_new import google_translator
import time
import json
from azure.cosmos import exceptions, CosmosClient, PartitionKey
import json


from dotenv import load_dotenv
load_dotenv()
import os

translator = google_translator()
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
    # print (matrix)
    # print("The distance is: ", matrix[size_x - 1][size_y - 1])
    return (matrix[size_x - 1][size_y - 1])


if __name__ == '__main__':

    myWords = []
    # with open('LanguageLists\words.txt', 'r') as f:
    #     myWords = f.readlines()
    # f = open("LanguageLists/words.txt",'r')
    with open('LanguageLists/words.txt', 'r') as f:
        myWords = [line.strip() for line in f]

    # for i in f:
    #     print(i)

    # print(myWords)
    source = "eng"
    target = "es"
    for i in myWords:
        trans = translator.translate(i, lang_tgt=target)
        if isinstance(trans, list):
            wordDict[i] = trans[0]
        else:
            wordDict[i] = trans
        print(i + " --> " + wordDict[i])
        time.sleep(0.3)
        if len(wordDict) >= 1000:
            break
    heap = []
    for i in range(len(wordDict)):
        key = get_key(wordDict, i)
        trans = wordDict[key].lower()
        x = levenshteinDistance(key, trans)
        if x == 0:
            continue
        elif len(heap) <= 200:
            heapq.heappush(heap, (-x, key, trans))
        else:
            # del heap[len(heap)-1]
            heapq.heappush(heap, (-x, key,trans))
            heapq.heappop(heap)
    print(heap)

    orderedHeap = heapq.nlargest(len(heap),heap)
    print(orderedHeap)

  
    wordList = []
    
    for item in orderedHeap:
        print(item[1])
        wordList.append(item[1])
       

    result = {"source": source, "target": target, "list": wordList}
    print(result)


    
    # uncomment to upload data to database
    # # token = os.environ.get("api-token")

    # # Initialize the Cosmos client
    # endpoint = os.environ.get("endpoint")
    # key = os.environ.get("key")



    # # <create_cosmos_client>
    # client = CosmosClient(endpoint, key)
    # # </create_cosmos_client>

    # database = client.get_database_client("LanguagePal")

    # container = database.get_container_client("items")


    # if client:
    #     print("success")

    # # query = 'SELECT * FROM items c WHERE c.source = "english" AND c.target = "spanish"'

    # # items = list(container.query_items(
    # #     query=query,
    # #     enable_cross_partition_query=True
    # # ))

    # # print(json.dumps(items, indent=True))
    # # print(items[0]["list"])

    # container.upsert_item(result)







