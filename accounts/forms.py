# from django import forms
# from django.contrib.auth.forms import UserCreationForm
# from django.contrib.auth.forms import AuthenticationForm

# class CustomUserCreationForm(UserCreationForm):
#     username = forms.CharField(
#         widget=forms.TextInput(attrs={'class': 'form-control',})
#     )
#     password1 = forms.CharField(
#         widget=forms.PasswordInput(attrs={'class': 'form-control'})
#     )
#     password2 = forms.CharField(
#         widget=forms.PasswordInput(attrs={'class': 'form-control'})
#     )
    

# class CustomAuthenticationForm(AuthenticationForm):
#     username = forms.CharField(
#         widget=forms.TextInput(attrs={'class': 'form-control','placeholder': 'Enter your username'})
#     )
#     password = forms.CharField(
#         widget=forms.PasswordInput(attrs={'class' 'form-control': 'input', 'placeholder': 'Enter your password'})
#     )