from django.http import response
from rest_framework.views import APIView
from django_elasticsearch_dsl_drf.pagination import PageNumberPagination
from django_elasticsearch_dsl_drf.viewsets import BaseDocumentViewSet
from medikaapp.es_documents import ProductDocument
from medikaapp.es_serializers import ProductDocumentSimpleSerializer

def response_generator(data, message, status):
    return{'data': data, 'message':message,'status':status}
    
class ESBlogViewSet(BaseDocumentViewSet):
    document = ProductDocument
    serializer_class = ProductDocumentSimpleSerializer
    pagination_class = PageNumberPagination
    paginate_by = 30



