from google_trans_new import google_translator
import unidecode
import time

translator = google_translator()


myWords = []
    # with open('LanguageLists\words.txt', 'r') as f:
    #     myWords = f.readlines()
    # f = open("LanguageLists/words.txt",'r')
fileWrite = open("frenchWords.txt",'w')
    
with open('englishWords.txt', 'r') as f:
    myWords = [line.strip() for line in f]
        # fileWrite.write(f.readline())
        # print(f.readline())

    
    
    
    # with open("spanishWords.txt",'w') as f:
    #     f.write("h")
    # for i in f:
    #     print(i)

    # print(myWords)
source = "eng"
target = "fr"

for line in myWords:
    trans = translator.translate(line, lang_tgt=target)
    print(trans)
    time.sleep(0.3)
    if isinstance(trans, list):
        # fileWrite.write(trans[0])
        word = trans[0]
    else:
        word = trans
    # unicode_text = word+'\n'
    # encoded_unicode = unicode_text.encode("utf8")
    unaccented_string = unidecode.unidecode(word+'\n')
    # unaccented_string contains 'Malaga'and is of type 'str'
    fileWrite.write(unaccented_string)
        # fileWrite.write('\n')
        # fileWrite.write(trans)
        # print(trans)