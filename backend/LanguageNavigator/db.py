from azure.cosmos import exceptions, CosmosClient, PartitionKey
import json


from dotenv import load_dotenv
load_dotenv()
import os
# token = os.environ.get("api-token")

# Initialize the Cosmos client
endpoint = os.environ.get("endpoint")
key = os.environ.get("key")



# <create_cosmos_client>
client = CosmosClient(endpoint, key)
# </create_cosmos_client>

database = client.get_database_client("LanguagePal")

container = database.get_container_client("items")


if client:
    print("success")

query = 'SELECT * FROM items c WHERE c.source = "english" AND c.target = "spanish"'
query = 'SELECT * FROM c'

items = list(container.query_items(
    query=query,
    enable_cross_partition_query=True
))
# source="english"
# target = "french"
# id = source + '-' + target
# container.upsert_item({"id":id,"source":"eng","target":"fr","list":["hello","hi"]})

print(json.dumps(items, indent=True))
# print(items[0]["list"])