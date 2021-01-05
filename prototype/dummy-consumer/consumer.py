from kafka import KafkaConsumer
from pymongo import MongoClient
from json import loads
import config
consumer = KafkaConsumer(
    config.kafkaTopic, # topic
    bootstrap_servers=[config.kafkaBootstrapServer],
    auto_offset_reset='earliest', #when set to earliest the consumer starts reading from the latest committed offset 
    enable_auto_commit=True, # ensures that the consumer commits its read offset every interval.
    auto_commit_interval_ms=1000, # since data is coming in every 5 seconds, an interval of 1 second is fine
    group_id='counters', #this is the consumer group to which the consumer belongs. It needs to be set for auto commit to work
    value_deserializer=lambda x: loads(x.decode('utf-8')))

client = MongoClient(config.mongoServer,
                     username=config.mongoUsername,
                     password=config.mongoPassword,
                     authSource=config.mongoAuthSource,
                     authMechanism=config.mongoAuthMechanism)

try:
    collection = client.test.create_collection(
        name=config.mongoCollectionName,
        codec_options=None,
        read_preference=None,
        write_concern=None,
        read_concern=None,
        session=None,
        collation=config.colla
    )
except Exception as err:
    # collection already exists
    if "already exists" in err._message:
        collection = client.test[config.mongoCollectionName]
    else:
        print("create_collection() ERROR:", err)
        collection = None
print("Collection name:", collection.name)


for message in consumer:
    message = message.value
    collection.insert_one(message)
    print('{} added to {}'.format(message, collection))
