import logging
import json
import nltk
from nltk.corpus import words
nltk.download('words')
            

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    name = req.params.get('name')
    if not name:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            name = req_body.get('name')

    age = req.params.get('age')
    if not age:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            age = req_body.get('age')

    if name and age:
        return func.HttpResponse(f"Hello, {name}. You are {age} years old!!! This HTTP triggered function executed successfully.")
    else:
        print("returning...")
        
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