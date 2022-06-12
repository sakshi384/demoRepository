from django.urls import path
from medikaapp.views import addProduct,showProduct,SearchProduct, updateProduct
# from . import views



urlpatterns =[
    path('addproduct/', addProduct.as_view(), name="addproduct"),
    path('showproduct/', showProduct.as_view(), name="addproduct"),
    path('product/<str:query>', SearchProduct.as_view(),name="searchproduct"),
    path('update/<int:pk>/',updateProduct.as_view(),name="updateproduct"),
    # path('esview',views.BlogViewSet,name="blog"),
    # re_path(r'^blogs-es$', es_views.ESBlogViewSet.as_view({'get': 'list'})),
    

]


