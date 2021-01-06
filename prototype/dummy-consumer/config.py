from pymongo.collation import Collation

kafkaBootstrapServer = 'different-legs-kafka.default.svc.cluster.local:9092'
kafkaTopic = 'test'
mongoServer = 'flaky-summer-mongodb.mongo.svc.cluster.local:27017'
mongoCollectionName = 'test'
colla = Collation(
    locale="en_US",
)
mongoUsername = 'admin1'
mongoPassword = 'password'
mongoAuthSource = 'test'
mongoAuthMechanism = 'SCRAM-SHA-256'
