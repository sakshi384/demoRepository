from django_elasticsearch_dsl import Document
from medikaapp.models import Destination
from django.conf import settings

ES_INDEX = settings.ES_INDEX


@ES_INDEX.document

class ProductDocument(Document):
    class Django:
        model = Destination # The model associated with this DocType

        # The fields of the model you want to be indexed in Elasticsearch
        fields = [
            'Pname',
            'Price',
            'Quantity',
        ]