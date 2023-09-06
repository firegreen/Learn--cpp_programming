---
title: TD6 - Fonctions
sidebar_position: 6
---

## Exercice 1

- Écrire une fonction `int somme(int a, int b)` qui retourne la somme de deux entiers.
- Utiliser des paramètres constants pour les arguments de la fonction.
- Utiliser des références pour les arguments de la fonction.
- Vérifier que cela fonctionne aussi bien avec des variables que des littéraux dans le cas des références.

## Exercice 2 (Factorielle)

- Écrire un programme qui demande à l’utilisateur de saisir un entier positif.
- Écrire une fonction récursive qui retourne la factorielle de `n`.
- Afficher le résultat.
- Gérer les cas d'erreur (nombre négatif, nombre trop grand, etc.).
- Utiliser une fonction itérative (non récursive).

:::info
La factorielle d'un entier `n` est le produit des nombres entiers strictement positifs inférieurs ou égaux à `n`.
:::

## Exercice 3 (Fibonacci)

- Écrire un programme qui demande à l’utilisateur de saisir un entier positif.
- Écrire une fonction récursive qui retourne sous la forme d'un tableau les `n` premiers termes de la suite de **Fibonacci**.
- Afficher les `n` premiers termes de la suite de **Fibonacci** à l'aide de la fonction.
- Pour aller plus loin: Essayer de trouver une solution itérative (non récursive).

Par exemple, si l’utilisateur saisit `7`, le programme affichera `0, 1, 1, 2, 3, 5, 8`.

:::info
La suite de Fibonacci est une suite d'entiers dans laquelle chaque terme est la somme des deux termes qui le précèdent. Ses premiers termes sont `0` et `1`.
:::

## Exercice 4 (Surcharges)

- Écrire une fonction qui permet de calculer la moyenne d'un tableau d'entiers.
- Écrire une fonction surchargée portant le même nom qui permet de calculer la moyenne d'un tableau de flottants.

## Exercice 5

Écrire sous forme récursive les fonctions $U_n$ et $V_n$ conformément à la description suivante:

- $U_0 = 1$ et $U_{n+1} = 3U_n + 2V_n$
- $V_0 = 2$ et $V_{n+1} = 2V_n + U_n + 1$

Afficher les dix premiers termes de chacune des suites.

Vous devez obtenir les résultats suivants:

```
U0 = 1 et V0 = 2
U1 = 5 et V1 = 7
U2 = 33 et V2 = 20
U3 = 139 et V3 = 74
U4 = 565 et V4 = 288
U5 = 2271 et V5 = 1142
U6 = 9097 et V6 = 4556
U7 = 36403 et V7 = 18210
U8 = 145629 et V8 = 72824
U9 = 582535 et V9 = 291278
```

# Exercice 6 (Pangramme)

Écrire une fonction qui prend en paramètre une chaîne de caractères et qui retourne `true` si la chaîne est un **pangramme**, `false` sinon.

Il faut faire attention à la casse (majuscules/minuscules).

:::info
Un pangramme est une phrase contenant toutes les lettres de l'alphabet au moins une fois.
:::

# Exercice 7 (String)

- Écrire une fonction qui prend en paramètre une chaîne de caractères et qui modifie cette chaîne en remplaçant les lettres minuscules par des lettres majuscules et vice-versa.

- Écrire une fonction qui prend en paramètre une chaîne de caractères et qui retourne le nombre de voyelles de cette chaîne.

- Écrire une fonction qui prend en paramètre une chaîne de caractères et qui retourne le nombre de mots de cette chaîne. On considère que les mots sont séparés par un ou plusieurs espaces.

- Écrire une fonction qui prend en paramètre une chaîne de caractères et qui retourne la même chaîne écrite à l'envers.

