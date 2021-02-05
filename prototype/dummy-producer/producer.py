from time import sleep
from json import dumps
from kafka import KafkaProducer,KafkaAdminClient
from kafka.admin import ConfigResource, NewTopic, ConfigResourceType
import config.config as config

producer = KafkaProducer(bootstrap_servers=[config.kafkaProducerBootstrapServer],
                         value_serializer=lambda x:
                             dumps(x).encode('utf-8'))

# Code to create a kafka topic programmatically
# admin = KafkaAdminClient(bootstrap_servers="different-legs-kafka.default.svc.cluster.local:9092")
# topic_list = []
# topic_list.append(NewTopic(name="test",
#                            num_partitions=50, replication_factor=1))
# admin.create_topics(topic_list)
for e in range(20):
    data= {"number" : e}
    producer.send(config.kafka_topic,value=data)
    sleep(1)
    
    
