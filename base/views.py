from django.shortcuts import render

# Create your views here.

def room (request):
    return render(request, 'room.html')

def lobby (request):
    return render(request, 'lobby.html')

def home (request):
    return render(request, 'home.html')
