---
marp: true
class: invert
paginate: false
backgroundColor: #1D5998
---

<style>

h1 {
    text-align: start;
    font-size: 1.75em;
}

section {
  font-family: Verdana, sans-serif;
}

img[alt~="center"] {
  display: block;
  margin: 0 auto;
}

blockquote {
  background: #16304C;
  border-left: 10px solid #3C74B0;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  color: #FFFFFF;
}

</style>

# Programmation et Algorithmique S1

## Enguerrand DE SMET (IMAC 2021)

---

# Evaluation

- **Examen**
  - Durée: ~ 1h30
  - Format: Exercices similaires à ceux vus en TDs
  - Notation: 85% mise en pratique et évaluation du code, 15% compréhension générale du cours sur différentes composantes
  - Date: 7 Dec (8h30-10h30)
- **Workshop**: 1 semaine (20 -24 novembre) (Jules Fouchy)

---

# Compilation manuelle

- ```g++ helloImac.cpp -o helloImac```

---

# Compilation manuelle (CMake)

- `mkdir build` Créer un dossier build
- `cd ./build` Se déplacer dans le dossier build
- `cmake ..` Créer les fichiers de compilation (à partir du fichier CMakeLists.txt du dossier parent)
- `make` Compiler le projet (à partir du fichier **Makefile** généré par **CMake**)

---

# Tableaux

- Un tableau est une structure de données permettant de stocker plusieurs valeurs de même type (conteneur)
- **Dynamique**: taille variable (`std::vector`)
- **Statique**: taille fixe (`std::array`)

---

# Tableaux dynamiques

- `std::vector` (header `<vector>`)
- Type de données unique: `std::vector<type>`
```cpp	
#include <vector>

int main()
{
    std::vector<int> vector01 {};

    std::vector<int> vector02 { 12, 18, 8, 4, 9 };

    std::vector<float> const vector03 { 3.1415f, 5.2365f };

    std::vector<float> vector04 { vector03 };

    return 0;
}
```

---

# Indexation

- Accès aux éléments: `[]`
- Indexation à partir de **0**

```cpp	
#include <vector>

int main()
{
    std::vector<int> vector01 { 12, 18, 8, 4, 9 };

    int const value01 { vector01[0] }; // 12
    int const value02 { vector01[2] }; // 8
    int const value03 { vector01[5] }; // Erreur: index out of range

    return 0;
}
```

---

# Fonctionnalités

- Taille: `size()`
- Première valeur: `front()`
- Dernière valeur: `back()`
- Savoir si le tableau est vide: `empty()`
- Ajouter une valeur à la fin: `push_back()`
- Supprimer la dernière valeur: `pop_back()`
- Supprimer toutes les valeurs: `clear()`

---

## Range-based for loop

- Parcours d'un tableau
- Syntaxe: `for (type value : container) { ... }`

```cpp	
#include <iostream>
#include <vector>

int main()
{
    std::vector<int> const vector { 12, 18, 8, 4, 9 };

    for (int const value : vector)
    {
        std::cout << value << std::endl;
    }

    return 0;
}
```

---

# Tableaux statiques

- `std::array` (header `<array>`)
- Type de données unique: `std::array<type, size>`

---

# std::String

- Tableau de caractères (`char`)
- `std::string` (header `<string>`)

---


# PRNG

- **P**seudo-**R**andom **N**umber **G**enerator

- `std::rand()` (header `<cstdlib>`)
  - Valeurs entre 0 et `RAND_MAX`
- **Seed**: valeur initiale
  - `std::srand(unsigned int seed)` (header `<cstdlib>`)
  - `std::time(nullptr)` (header `<ctime>`)

---

# PRNG

```cpp
#include <cstdlib> // std::rand & std::srand
#include <ctime> // std::time
#include <iostream>
 
int main() 
{
  // Initialisation du générateur de nombres aléatoires avec la fonction time()
  std::srand(std::time(nullptr));
  int random_variable { std::rand()};
  std::cout << "Random value between 0 and "<< RAND_MAX <<" : " << random_variable << std::endl;
}
```
