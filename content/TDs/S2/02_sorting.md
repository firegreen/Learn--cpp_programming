---
title: TD2 - Algorithmes de tri
---

import useBaseUrl from '@docusaurus/useBaseUrl';

L'idée de ce TD est de mettre en pratique les notions vues en cours sur les algorithmes de tri et de recherche.

## Exercice 1

Dans cet exercice, vous devez écrire une fonction qui prend en paramètre un tableau d'entiers (`std::vector`) et le trie par ordre croissant.

Vous avez le choix entre deux algorithmes de tri:
- **tri à bulle**
- **tri par sélection**

## Exercice 2 (tri récursif)

De nouveau, vous devez écrire une fonction qui prend en paramètre un tableau d'entiers (`std::vector`) et le trie par ordre croissant.

Cette fois-ci, vous devez utiliser un algorithme de tri récursif.

Vous avez le choix entre deux algorithmes de tri:
- **tri fusion**
- **tri rapide**

## Comparaison des algorithmes de tri

Une fois nos algorithmes de tri implémentés, nous allons les comparer en terme de complexité temporelle.

Je vous fournis une fonction qui permet de générer un tableau d'entiers aléatoires.
```cpp
#include <vector>
#include <cstdlib>

std::vector<int> generateRandomArray(size_t size, int max) {
    std::vector<int> array;
    
    for (size_t i {0}; i < size; i++) {
        array.push_back(std::rand() % max);
    }

    return array;
}
```

Je vous fournis également une structure chronomètre, il suffit de  télécharger le fichier <a target="_blank" href={ useBaseUrl("/code/S2/ScopedTimer.hpp") } download={"ScopedTimer.hpp"}>ScopedTimer.hpp</a> et le copier dans le dossier de votre projet et de l'inclure dans votre fichier source:
```cpp
#include "ScopedTimer.hpp"
```
Elle fonctionne de la manière suivante:
```cpp
{
    ScopedTimer timer("nom du chronomètre");
    // code à chronométrer
}
```

Il affichera le temps écoulé entre sa création et sa destruction(c'est à dire à la fin du bloc de code, c'est pourquoi il est déclaré dans un bloc entre accolades (**Scope**)).

### bibliothèque standard

La **bibliothèque standard** de C++ fournit une fonction de tri `std::sort` qui permet de trier des conteneurs (incluse dans la bibliothèque `<algorithm>`)

Vous pouvez l'utiliser de la manière suivante:
```cpp
std::vector<int> array {1, 2, 3, 4, 5, 6, 7, 8, 9};
std::sort(array.begin(), array.end());
```

:::note
`begin` et `end` sont des méthodes de `std::vector` qui permettent de récupérer des **itérateurs** sur le début et la fin du conteneur.
Nous verrons les itérateurs plus tard dans le cours.
:::

Avec cette fonction, vous pouvez comparer les temps d'exécution de vos algorithmes de tri avec celui de la bibliothèque standard.

- Que constatez-vous ?
- Que pouvez-vous en dire ?


## Exercice 3 (dichotomie)

1. Écrire une fonction `search` qui prend en paramètre un tableau d'entiers (`std::vector`) trié par ordre croissant et une valeur entière et retourne l'indice de la valeur dans le tableau. Si la valeur n'est pas présente dans le tableau, la fonction retournera `-1`.

la fonction devra utiliser l'algorithme de recherche **dichotomique**.

:::tip
On utilisera deux indices pour définir la partie du tableau à traiter:
- `left` : indice du premier élément de la partie du tableau à traiter
- `right` : indice du dernier élément de la partie du tableau à traiter

Exemple simple avec le tableau suivant `[1, 2, 2, 3, 4, 8, 12]` (nombre d'éléments: 7) et la valeur recherchée `8`:

1. `left = 0` et `right = 6` (indice du premier et dernier élément du tableau)
    `middle = (left + right) / 2 = (0 + 6) / 2 = 3` (indice de l'élément au milieu du tableau)
    la valeur au milieu du tableau est `3` qui est inférieure à la valeur recherchée `8`, on ne garde que la partie droite du tableau.
    `left` devient `middle + 1 = 3 + 1 = 4` (indice du premier élément de la partie droite du tableau)
2. `left = 4` et `right = 6`
    `middle = (left + right) / 2 = (4 + 6) / 2 = 5`
    la valeur au milieu du tableau est `8` qui est égale à la valeur recherchée, on retourne l'indice `5` de la valeur dans le tableau.
:::

1. tester la fonction `search` avec les tableaux suivants et afficher le résultat de la recherche:
   - `[1, 2, 2, 3, 4, 8, 12]` (valeur recherchée: `8`)
   - `[1, 2, 3, 3, 6, 14, 12, 15]` (valeur recherchée: `15`)
   - `[2, 2, 3, 4, 5, 8, 12, 15, 16]` (valeur recherchée: `16`)
   - `[5, 6, 7, 8, 9, 10, 11, 12, 13]` (valeur recherchée: `6`)
   - `[1, 2, 3, 4, 5, 6, 7, 8, 9]` (valeur recherchée: `10`)

