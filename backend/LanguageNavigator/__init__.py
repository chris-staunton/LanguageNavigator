import logging
import json
import nltk
from google_trans_new import google_translator
from nltk.corpus import words
nltk.download('words')
            

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    mode = req.params.get('mode')
    if not mode:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            mode = req_body.get('mode')

    # age = req.params.get('age')
    # if not age:
    #     try:
    #         req_body = req.get_json()
    #     except ValueError:
    #         pass
    #     else:
    #         age = req_body.get('age')

    # test = req.params.get('test')
    # if not test:
    #     try:
    #         req_body = req.get_json()
    #     except ValueError:
    #         pass
    #     else:
    #         test = req_body.get('test')
    if mode == 'translate':
        print("translating")
        word = req.params.get('word')
        if not word:
            try:
                req_body = req.get_json()
            except ValueError:
                pass
            else:
                word = req_body.get('word')

        translator = google_translator()
        trans = translator.translate(word, lang_tgt="es")
        if word:
            return func.HttpResponse(json.dumps({word:trans}), status_code=200)
        else:
            print("Missing word to translate. Please include word value in request body...")
            return func.HttpResponse("Error Translating....", status_code=403)

    if mode == 'testing':
        print("testing")
        translator = google_translator()
        lang_dict = {}
        wordList = words.words()
        for i in range(500,700):
            #print(wordList[i])
            trans = translator.translate(wordList[i], lang_tgt="es")
            #print(trans)
            lang_dict[wordList[i]]= trans


        print(lang_dict)
        return func.HttpResponse(json.dumps(lang_dict), status_code=200)


    

    # if name and age:
    #     return func.HttpResponse(f"Hello, {name}. You are {age} years old!!! This HTTP triggered function executed successfully.")
    else:
        print("no mode selected...")
        
        word_list = words.words()
        # prints 236736
        print(len(word_list))
        #print(word_list)
        return func.HttpResponse(
             json.dumps({
            'lat': 16,
            'lon': 111
 
            }) 
            ,status_code=200
        )