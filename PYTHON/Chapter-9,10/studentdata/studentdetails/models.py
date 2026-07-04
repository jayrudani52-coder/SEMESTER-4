from django.db import models

# Create your models here.
class Student(models.Model):
    name=models.CharField(max_length=100)
    roll_number=models.CharField(max_length=20,unique=True)
    email=models.EmailField(unique=True,default="student@example.com")
    phone=models.CharField(max_length=15,blank=True,null=True)
    department=models.CharField(max_length=50,default="Computer Science")
    status=models.CharField(max_length=50,default="Active")
    gpa=models.FloatField()
    enrollment_Date=models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.roll_number})"
