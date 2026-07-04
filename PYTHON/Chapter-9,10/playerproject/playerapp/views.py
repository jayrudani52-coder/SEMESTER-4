from django.shortcuts import render
from django.shortcuts import get_object_or_404,redirect
from .models import Player

# Create your views here.
def homepage(request):
    search_query=request.GET.get('search','')
    if search_query:
        players=Player.objects.filter(name__icontains=search_query)
    else:
        players=Player.objects.all()
    return render(request,'home.html',{'players':players,'search_query':search_query})

def welcomepage(request):
    return render(request,'welcome.html')

def addplayer(request):
    if request.method == 'POST':
        name=request.POST.get('name')
        innings=request.POST.get('innings')
        runs=request.POST.get('runs')

        player = Player.objects.create(name=name, test_innings=innings, runs=runs)
        player.save()
        return redirect('homepage')
    return render(request,'add.html')

def editplayer(request, pk):
    player = get_object_or_404(Player, pk=pk)
    if request.method == 'POST':
        name = request.POST.get('name')
        innings = request.POST.get('innings')
        runs = request.POST.get('runs')

        player.name = name
        player.test_innings = innings
        player.runs = runs
        player.save()
        return redirect('homepage')
    return render(request, 'edit.html', {'player': player})

def deleteplayer(request, pk):
    player = get_object_or_404(Player, pk=pk)
    if request.method == 'POST':
        player.delete()
        return redirect('homepage')
    return render(request, 'delete.html', {'player': player})