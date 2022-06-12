import abc
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from medikaapp.es_documents import ProductDocument
from medikaapp.es_serializers import ProductDocumentSimpleSerializer
from medikaapp.models import Destination
# from rest_framework import viewsets
# from rest_framework.pagination import PageNumberPagination
from elasticsearch_dsl import Q
from rest_framework.pagination import LimitOffsetPagination

from medikaapp.serializers import DestinationSerializer

# Create your views here.

def response_generator(data, message, status):
    return{'data': data, 'message':message,'status':status}


# Add product
class addProduct(APIView):

    def post(self,request):
        data=request.data
        serializer = DestinationSerializer(data=data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(response_generator(data=serializer.data, message='success', status=201))


        return Response(response_generator(data=serializer.data, message='error', status=400))

# display products
class showProduct(APIView):

    def get(self,request):

        queryset = Destination.objects.all()
        serializer= DestinationSerializer(queryset,many=True,context={'request': request})
        return Response(response_generator(data=serializer.data, message='success', status=201))




# search products
# class BlogViewSet(viewsets.ModelViewSet):
#     queryset = Destination.objects.all()
#     serializer_class = DestinationSerializer
#     pagination_class = PageNumberPagination
class PaginatedElasticSearchAPIView(APIView, LimitOffsetPagination):
    serializer_class = None
    document_class = None

    @abc.abstractmethod
    def generate_q_expression(self, query):
        """This method should be overridden
        and return a Q() expression."""

    def get(self, request, query):
        try:
            q = self.generate_q_expression(query)
            search = self.document_class.search().query(q)
            response = search.execute()

            print(f'Found {response.hits.total.value} hit(s) for query: "{query}"')

            results = self.paginate_queryset(response, request, view=self)
            serializer = self.serializer_class(results, many=True)
            return self.get_paginated_response(serializer.data)
        except Exception as e:
            return HttpResponse(e, status=500)

class SearchProduct(PaginatedElasticSearchAPIView):
    serializer_class = ProductDocumentSimpleSerializer
    document_class = ProductDocument

    def generate_q_expression(self, query):
        return Q('bool',
                 should=[
                     Q('match', Pname=query),
                 ], minimum_should_match=1)


# edit 
class updateProduct(APIView):

    def put(self, request, pk, format=None):
        snippet = Destination.objects.get(pk=pk)
        serializer = DestinationSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(response_generator(data=serializer.data, message='success', status=201))