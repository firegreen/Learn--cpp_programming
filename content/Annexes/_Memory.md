---
title: Représentation mémoire
tags:
    - C++
---

Toute donnée en mémoire est représentée par une suite de **bits**. La taille de cette suite de bits dépend du **type** de la donnée.

Par exemple, un ```int``` est généralement représenté par **32** bits (4 octets) et un ```char``` par **8** bits (1 octet).

Un **octet** est une unité de mesure de la mémoire. Un octet est composé de 8 bits.

On peut représenter un nombre **décimal** en **binaire**. Par exemple, le nombre 42 s'écrire en binaire: ```00101010```.

Quand je demande à mon programme de créer une variable, il va réserver un espace mémoire de la taille du type de la variable.

Il est possible de connaître la taille d'un **type** ou d'une variable existante (en octets) avec l'opérateur ```sizeof```.

```cpp
#include <iostream>

int main()
{
    std::cout << "sizeof(int): " << sizeof(int) << std::endl;
    std::cout << "sizeof(short int): " << sizeof(short int) << std::endl;
    std::cout << "sizeof(float): " << sizeof(float) << std::endl;
    std::cout << "sizeof(double): " << sizeof(double) << std::endl;
    std::cout << "sizeof(char): " << sizeof(char) << std::endl;
    std::cout << "sizeof(bool): " << sizeof(bool) << std::endl;

    // Les pointeurs ont une taille fixe (la taille nécessaire pour stocker une adresse mémoire)
    std::cout << "sizeof(int*): " << sizeof(int*) << std::endl;
    std::cout << "sizeof(short int*): " << sizeof(short int*) << std::endl;
    std::cout << "sizeof(float*): " << sizeof(float*) << std::endl;
    std::cout << "sizeof(double*): " << sizeof(double*) << std::endl;
    std::cout << "sizeof(char*): " << sizeof(char*) << std::endl;
    std::cout << "sizeof(bool*): " << sizeof(bool*) << std::endl;

    int integer {42};
    int* integerPointer {&integer};
    
    std::cout << "sizeof(integer): " << sizeof(integer) << std::endl;
    std::cout << "sizeof(integerPointer): " << sizeof(integerPointer) << std::endl;

    return 0;
}
```

Il est d'ailleurs possible d'observer ce mécanisme avec les adresses sur des blocs contigus alloués dynamiquement.

Comme expliqué précédemment un pointeur est une variable qui contient une adresse qui n'est rien d'autre qu'un nombre. Il est possible de manipuler notre **pointeur** avec les opérateurs d'**addition** et de **soustraction** pour se déplacer dans l'espace mémoire (en faisant attention à ne pas sortir de l'espace mémoire alloué).
En fonction de son **type**, le pointeur va se déplacer de la taille du type (en octets).

```cpp
#include <iostream>

int main()
{
    int* integersPointer {new int[3]};

    std::cout << "integersPointer    : " << integersPointer << std::endl;
    std::cout << "integersPointer + 1: " << integersPointer + 1 << std::endl;
    std::cout << "integersPointer + 2: " << integersPointer + 2 << std::endl;

    delete [ ] integersPointer;
    
    return 0;
}
```

```bash
integersPointer    : 0x55b728991eb0
integersPointer + 1: 0x55b728991eb4
integersPointer + 2: 0x55b728991eb8
```

Ici, on peut voir que l'adresse du pointeur est incrémentée de 4 à chaque fois (la taille d'un ```int```).


---


 **reinterpret_cast**: permet d'**interpréter** un type comme un autre type. Par exemple, un ```int``` en ```char```. Il s'utile sur des pointeurs et permet de manipuler les bits de la mémoire. C'est un **cast** très dangereux car il ne fait aucune vérification et peut donc provoquer des erreurs. Il est à utiliser avec extrêmement de précautions.

 ```cpp
#include <iostream>

int main()
{
    int integer {42};
    float floating {3.14f};

    float floatingFromInteger {static_cast<float>(integer)};
    int integerFromFloating {static_cast<int>(floating)};

    std::cout << "integer: " << integer << std::endl;
    std::cout << "floating: " << floating << std::endl;

    // static_cast
    std::cout << "static_cast<float>(integer): " << floatingFromInteger << std::endl;
    std::cout << "static_cast<int>(floating): " << integerFromFloating << std::endl;

    int* integerPointer {&integer};
    float* floatingPointer {&floating};

    // reinterpret_cast
    float* floatingPointerFromInteger {reinterpret_cast<float*>(integerPointer)};
    int* integerPointerFromFloating {reinterpret_cast<int*>(floatingPointer)};

    std::cout << "floatingPointerFromInteger: " << *floatingPointerFromInteger << std::endl;
    std::cout << "integerPointerFromFloating: " << *integerPointerFromFloating << std::endl;

    return 0;
}
```

```bash
integer: 42
floating: 3.14
static_cast<float>(integer): 42
static_cast<int>(floating): 3
reinterpret_cast<float*>(integerPointer): 5.88545e-44
reinterpret_cast<int*>(floatingPointer): 1078523331
```
