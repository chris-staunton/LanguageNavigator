import logging
import json
# import nltk
#comment out to deploy on azure
# from dotenv import load_dotenv
# load_dotenv()
# import os
#
from azure.cosmos import exceptions, CosmosClient, PartitionKey           

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
    
    #enter manually for deploying to azure
    # endpoint = os.environ.get("endpoint")
    # key = os.environ.get("key")





    # <create_cosmos_client>
    client = CosmosClient(endpoint, key)
    # </create_cosmos_client>

    database = client.get_database_client("LanguagePal")

    container = database.get_container_client("items")


    if client:
        print("success")

    

    # print(json.dumps(items, indent=True))
    # print(items[0]["list"])

    

    mode = req.params.get('mode')
    if not mode:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            mode = req_body.get('mode')

    source = req.params.get('source')
    if not source:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            source = req_body.get('source')

    target = req.params.get('target')
    if not target:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            target = req_body.get('target')

    if mode == "LevPhon":
        print("Levenshtein & Phonetics")
        query = 'SELECT * FROM items c WHERE (c.source = "' + source +'" AND c.target = "'+target+'" AND c.type = "'+mode+'") OR (c.source = "' + target +'" AND c.target = "'+source+'" AND c.type = "'+mode+'")'
        items = list(container.query_items(
            query=query,
            enable_cross_partition_query=True
        ))
        sample = items[0]
        # print(sample)
        

        return func.HttpResponse(json.dumps(sample), status_code=200)
    elif mode == 'sample':
        print("returning sample words")
        print(source)

        if (source == "english" and target == "french") or (source == "french" and target == "english"):

            sample = {"source": source, "target": target, "list": ["allowance", 
                        "aviation",
                        "bachelor", 
                        "ballet", 
                        "bureau", 
                        "cadet", 
                        "champagne",
                        "radiant"]}

        elif (source == "english" and target == "spanish") or (source == "spanish" and target == "english"):

            sample = {"source": source, "target": target, "list": ["abdominal", 
                        "Animal",
                        "Balance", 
                        "Base", 
                        "Capital", 
                        "Cable", 
                        "Conclusion",
                        "Informal"]}

        else:
            return func.HttpResponse("Error", status_code=400)
        
        return func.HttpResponse(json.dumps(sample), status_code=200)



    

    else:
        print("no mode selected...")
        
        return func.HttpResponse("No Mode Selected"
            ,status_code=200
        )