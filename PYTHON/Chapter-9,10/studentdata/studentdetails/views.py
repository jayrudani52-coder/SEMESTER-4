from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.decorators import login_required
from .models import Student

# --- AUTHENTICATION VIEWS ---
def signup_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')
    else:
        form = UserCreationForm()
    return render(request, 'signup.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('home')
    else:
        form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})

def logout_view(request):
    if request.method == 'POST' or request.method == 'GET':
        logout(request)
        return redirect('login')

# --- PROTECTED APP VIEWS ---
@login_required
def home_view(request):
    search_query = request.GET.get('search', '')
    if search_query:
        students = Student.objects.filter(name__icontains=search_query)
    else:
        students = Student.objects.all()
    return render(request, 'home.html', {'students': students, 'search_query': search_query})

@login_required
def welcome_view(request):
    return render(request, 'welcome.html')

@login_required
def add_student_view(request):
    if request.method == "POST":
        Student.objects.create(
            name=request.POST.get('name'),
            roll_number=request.POST.get('roll_number'),
            email=request.POST.get('email'),
            phone=request.POST.get('phone'),
            department=request.POST.get('department'), # Plain text from input box
            gpa=request.POST.get('gpa'),
            status=request.POST.get('status')         # Plain text from input box
        )
        return redirect('home')
    return render(request, 'add_student.html')

@login_required
def edit_student_view(request, pk):
    student = get_object_or_404(Student, pk=pk)
    
    if request.method == "POST":
        student.name = request.POST.get('name')
        student.roll_number = request.POST.get('roll_number')
        student.email = request.POST.get('email')
        student.phone = request.POST.get('phone')
        student.department = request.POST.get('department')
        student.gpa = request.POST.get('gpa')
        student.status = request.POST.get('status')
        student.save()
        return redirect('home')
        
    return render(request, 'edit_student.html', {'student': student})

@login_required
def delete_student_view(request, pk):
    student = get_object_or_404(Student, pk=pk)
    student.delete()
    return redirect('home')