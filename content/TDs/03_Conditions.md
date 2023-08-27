---
title: TD3 - Conditions
sidebar_position: 3
---

## Exercice 1 
Écrivez un programme qui demande à l’utilisateur de saisir un entier et aﬀiche si cet entier est positif ou négatif.

exemples d’exécutions

```bash
Saisir un entier : 42
42 est positif
```

```bash
Saisir un entier : -5
-5 est négatif
```

## Exercice 2

Écrivez un programme qui demande à l’utilisateur de saisir un entier et aﬀiche si cet entier est **pair** ou **impair**.

:::tip
VOus pouvez utiliser l'opérateur modulo `%` qui donne le reste de la division entière.
:::

## Exercice 3

Écrivez un programme qui demande à l’utilisateur de saisir son **age** (un nombre entier) et aﬀiche s’il est **majeur** ou **mineur**.

- Gérer le cas où l’utilisateur saisit un **age négatif** et afficher un message d’erreur.

- Gérer le cas ou l’utilisateur saisit un **age avec des lettres** et afficher et gérer l’erreur.

:::infos
`std::cin >> x` renvoie **true** si tout est correct ou **false** si on a rencontré une erreur lors de la saisie.
Dans notre cas, si l'utilisateur saisit un age avec des lettres, la saisie échoue et la variable age n'est pas modifiée.

`std::cin.clear()` restaure std::cin à un état fonctionnel, sans erreur.
`std::cin.ignore()` permet d’ignorer un nombre défini de caractères, soit jusqu’à un nombre maximum (exemple 500), soit jusqu’à un caractère précis (exemple '\n' ou 'a'). Dans notre cas, nous allons utiliser ceci pour réinitialiser la saisie de l'utilisateur si on a rencontré une erreur.

```cpp
std::cin.clear(); // On remet std::cin dans un état fonctionnel.
std::cin.ignore(255, '\n'); // On vide les caractères mémorisés.
```
:::

- Si vous ne l'avez pas fait utilisez le type `unsigned int` pour stocker l'age. 

:::infos
Cela permet de gérer le cas où l'utilisateur saisit un age négatif en profitant du fait que le type `unsigned int` ne peut pas être négatif sans avoir à faire de test supplémentaire.

`std::cin >> x` va renvoyer false dans le cas où l'utilisateur saisit un age négatif (impossible à stocker dans un unsigned int) et la variable age ne sera pas modifiée.
:::

## Exercice 4 (Soldes)

C'est les soldes !

Créez un programme qui demande à l'utilisateur:
- le type de produit (une chaîne de caractères à stocker dans un **enum**)
- le prix du produit (un nombre flottant)
- s'il a une carte de fidélité (boolean)
- son age (un nombre entier)

En fonction des informations saisies, le programme affiche le **prix final** après réduction.

Vous disposez des informations suivantes:

| type d'article | Réduction | Réduction avec carte de fidélité |
| -------------- | --------- | -------------------------------- |
| Alimentation | 5% | 8% |
| Vêtements | 10% | 15% |
| Chaussures | 12% | 18% |
| Autres | 0% | 0% |

s'il est étudiant, il a 10% de réduction supplémentaire sur tous les articles après réduction.
:warning: Cela ne se cumule pas avec la carte de fidélité, dans ce cas de figure, c'est la réduction la plus avantageuse qui est appliquée.

- Gérer le cas où l'utilisateur saisit un type d'article qui n'existe pas et afficher un message d'erreur.

- L'enseigne offre également un bon d'achat de **10%** du montant total du ticket de caisse, à valoir sur un prochain achat. Le bon d'achat ne peut pas être supérieur à 30€.
Calculer le montant du bon d'achat et l'afficher en fin de programme.

## Exercice 5

Calcul du temps d'ébullition de l'eau en fonction de l'**altitude**, de la **température ambiante** et de l'ajout ou non de **sel**.

- Demander à l'utilisateur de saisir l'altitude en mètres (un nombre entier)
- Demander à l'utilisateur de saisir la température ambiante en degrés Celsius (un nombre flottant)
- Demander à l'utilisateur s'il ajoute du sel dans l'eau (un booléen)

En fonction des informations saisies, le programme affiche le temps d'ébullition de l'eau en minutes.

Vous disposez des informations suivantes:

- A **0** mètre d'altitude, l'eau bout à **100°C**.
- Tout les **300 mètres** d'altitude supplémentaire, l'eau atteint son point d'ébullition **1°C plus bas**.
- L'action d'ajouter du **sel** dans l'eau fait augmenter son point d'ébullition de **1.5°C**.
- il faut **1 min** pour que l'eau gagne **10°C** de température.

Gérer le cas où l'utilisateur saisit une altitude négative et afficher un message d'erreur.
