from django_elasticsearch_dsl_drf.serializers import DocumentSerializer
from medikaapp.es_documents import ProductDocument


class ProductDocumentSimpleSerializer(DocumentSerializer):
    class Meta:
        document = ProductDocument
        fields = (
            'Pname',
            'Price',
            'Quantity',
        )