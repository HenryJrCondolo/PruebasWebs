from ast import Try
from enum import Enum
from warnings import catch_warnings


integer = 11
name = "Pepe"

if integer == 10 and name == "Pepe":
    print("Es true")
elif integer == 11 or name == "Pepe":
    print("Es 11 y pepe")

#names = ["Pepe", "Juan", "Maria", "Jose"]

# for i in names:
 #   print(i)


def sum(a, b):
    return a + b


print(sum(1, 2))


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def say_hi(self):
        print("Hello, my name is", self.name)


class Color(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3


print(Color.RED)
e = Color.GREEN.value
print(e)

# diccionario
persona = {'nombre': 'Pepe', 'edad': 20, 'cursos': ['Python', 'Django']}
print(persona['nombre'])

# catche de errores
try:
    int('andre')
except:
    print('Error')
print('Fin de programa ')
