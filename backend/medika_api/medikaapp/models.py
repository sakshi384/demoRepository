from django.db import models

# Create your models here.
class Destination(models.Model):
    Pname=models.CharField(max_length=100)
    Price=models.IntegerField()
    Quantity=models.IntegerField()


