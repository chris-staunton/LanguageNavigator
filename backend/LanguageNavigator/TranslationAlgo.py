from google_trans_new import google_translator
from english_words import english_words_lower_alpha_set

translator = google_translator()
wordDict = {}
for i in english_words_lower_alpha_set:
    trans = translator.translate(i, lang_tgt="es")
    wordDict[i] = trans
    print(wordDict[i])
