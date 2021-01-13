from time import sleep
from json import dumps
from kafka import KafkaProducer,KafkaAdminClient
from kafka.admin import ConfigResource, NewTopic, ConfigResourceType
from config import bootstrapServer

producer = KafkaProducer(bootstrap_servers=[bootstrapServer],
                         value_serializer=lambda x:
                             dumps(x).encode('utf-8'))
admin = KafkaAdminClient(bootstrap_servers="different-legs-kafka.default.svc.cluster.local:9092")
topic_list = []
topic_list.append(NewTopic(name="test",
                           num_partitions=8, replication_factor=1))

for e in range(1000):
    data= {"number" : e}
    producer.send("test",value=data)
    sleep(1)
    
