from django.shortcuts import render
# from django.http import HttpResponse

from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from .serializer import *


# Create your views here.

# request -> response
# request handler
# action

def calculate():
    x= 1
    y = 2
    return x

class ReactView(APIView):
    
    serializer_class = ReactSerializer
    def get(self, request):
        output = [{"employee": output.employee, "department": output.department} for output in React.objects.all()]
        # print(output)
        return Response(output)
    
    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid(raise_exception=True):
            # print("hi")
            serializer.save()
            return Response(serializer.data)
        


# add url that calls this
def say_hello(request):
    # x = calculate()
    return render(request, 'hello.html', {'name': 'Mosh'})