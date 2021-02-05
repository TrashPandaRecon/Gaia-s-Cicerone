from kafka import KafkaConsumer
from pymongo import MongoClient
from json import loads
import config.config as config
consumer = KafkaConsumer(
    config.kafka_topic, # topic
    bootstrap_servers=[config.kafkaConsumerBootstrapServer],
    auto_offset_reset=config.kafka_auto_offset_reset, #when set to earliest the consumer starts reading from the latest committed offset 
    enable_auto_commit=config.kafka_enable_auto_commit, # ensures that the consumer commits its read offset every interval.
    auto_commit_interval_ms=config.kafka_auto_commit_interval_ms, # since data is coming in every 5 seconds, an interval of 1 second is fine
    group_id=config.kafka_consumerGroupID, #this is the consumer group to which the consumer belongs. It needs to be set for auto commit to work
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
