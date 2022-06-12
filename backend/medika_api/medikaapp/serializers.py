from rest_framework import serializers 
from medikaapp.models import Destination
 
 
class DestinationSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Destination
        fields = ('id',
                  'Pname',
                  'Price',
                  'Quantity')