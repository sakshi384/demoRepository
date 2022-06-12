import elasticsearch
from elasticsearch import Elasticsearch
import psycopg2
es= Elasticsearch([{'host': '127.0.0.1','port':9200}])
# es= Elasticsearch(hosts= “http://sakshi:12345@localhost:9200/”)

print(es.ping())

conn = psycopg2.connect(host='127.0.0.1', database='medika', user='postgres', password= '123456')
cur = conn.cursor()

search_param = {
    'query': {
        'match': {
            'price': '1200'
        }
    }
}
response = es.search(index="es_db", body=search_param)
print ('response:', response)
# s= Search(index='medikaapp_destination').using(es).query('match')
# es_result= s.execute()