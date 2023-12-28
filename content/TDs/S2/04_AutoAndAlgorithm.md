---
title: TD4 - Déduction de type et bibliothèque standard
---

## Exercice 1 (Vector and Algorithm)

1. Remplir un `std::vector` avec des nombres entiers aléatoires compris entre 0 et 100.
2. Utiliser les itérateurs et les méthodes `begin` et `end` pour afficher les valeurs du vecteur à l'aide d'une boucle `for`.
3. Demander à l'utilisateur de saisir un nombre entier `n` compris entre 0 et 100.
4. Chercher si `n` est présent dans le vecteur à l'aide de la fonction `std::find`.
5. Afficher le résultat de la recherche à l'aide d'un message adapté.
6. Utiliser la fonction `std::count` pour compter le nombre d'occurrences d'un autre nombre entier le vecteur.
Vous pouvez trouver la documentation de la fonction `std::count` [ici](https://en.cppreference.com/w/cpp/algorithm/count).
1. Utiliser la fonction `std::sort` pour trier le vecteur.
2. Utiliser la fonction `std::accumulate` pour calculer la somme des éléments du vecteur.

## Exercice 2 (String)

Étant donnée une phrase composée de mots séparés par des espaces.

1. Écrire une fonction ( à l'aide des fonctions `std::find` et `std::count` ) qui prendre en paramètre une référence constante sur une `std::string` et qui retourne le nombre de lettres du premier mot de la phrase.

2. Écrire une fonction qui permet de découper la phrase en mots et de les stocker dans un `std::vector` de `std::string`.
Voilà le prototype de la fonction :

```cpp
std::vector<std::string> split(std::string const& str, std::string const& delimiter = " ");
```

:::info
Vous allez avoir besoin de la fonction `std::distance`, qui retourne la distance entre deux itérateurs, sous forme d’un nombre entier.
:::

## Exemple 3 (Palindrome)

Écrire une fonction qui prend en paramètre une référence constante sur une `std::string` et qui retourne `true` si la chaîne de caractères est un palindrome, `false` sinon.

Utiliser la fonctions `std::equal` pour comparer les valeurs de deux itérateurs.
Utiliser les fonctions `std::begin`, `std::end`  et `std::rbegin`, `std::rend` pour obtenir les itérateurs de début et de fin d'une chaîne de caractères et de sa version inversée.