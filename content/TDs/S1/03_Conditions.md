---
title: TD3 - Conditions
sidebar_position: 3
---

## Exercice 1 (Positif ou négatif)
Écrire un programme qui demande à l’utilisateur de saisir un entier et aﬀiche si cet entier est positif ou négatif.

Exemples d’exécution:

```bash
Saisir un entier : 42
42 est positif
```

```bash
Saisir un entier : -5
-5 est négatif
```

## Exercice 2 (Pair ou impair)

Écrire un programme qui demande à l’utilisateur de saisir un entier et aﬀiche si cet entier est **pair** ou **impair**.

:::tip
Vous pouvez utiliser l'opérateur modulo `%` qui donne le reste de la division entière.
:::

## Exercice 3

Écrire un programme qui demande à l’utilisateur de saisir son **âge** (un nombre entier) et aﬀiche s’il est **majeur** ou **mineur**.

1. Gérer la saisie d'un âge à stocker dans une variable.
2. Gérer le cas où l’utilisateur saisit un **âge négatif** et afficher un message d’erreur dans ce cas.
3. Gérer le cas où l’utilisateur saisit un **âge avec des lettres** et afficher et gérer l’erreur.

:::info
`std::cin >> x` renvoie **true** si tout est correct ou **false** si on a rencontré une erreur lors de la saisie.
Dans notre cas, si l'utilisateur saisit un âge avec des lettres, la saisie échoue et la variable âge n'est pas modifiée.

Il est aussi possible de tester si la saisie précédente a échoué avec `std::cin.fail()` qui renvoie **true** si la saisie a échoué et **false** sinon.

`std::cin.fail()` équivaut à `!(std::cin >> x)`.

Dans le cas où la saisie a échoué, il faut réinitialiser la saisie de l'utilisateur pour pouvoir saisir à nouveau un âge.

`std::cin.clear()` restaure std::cin à un état fonctionnel, sans erreur.
`std::cin.ignore()` permet d’ignorer un nombre défini de caractères, soit jusqu’à un nombre maximum (exemple 500), soit jusqu’à un caractère précis (exemple '\n' ou 'a'). Dans notre cas, nous allons utiliser ceci pour réinitialiser la saisie de l'utilisateur si on a rencontré une erreur.

```cpp
std::cin.clear(); // On remet std::cin dans un état fonctionnel.
std::cin.ignore(255, '\n'); // On vide les caractères mémorisés.
```
:::

## Exercice 4 (Soldes)

C'est les soldes !

Créer un programme qui demande à l'utilisateur:
- le type de produit (à stocker dans un **enum**)
- le prix du produit (un nombre flottant)
- s'il a une carte de fidélité (boolean)
- son age (un nombre entier)

En fonction des informations saisies, le programme affiche le **prix final** après réduction.

Vous disposez des informations suivantes:

| Type d'article | Réduction | Réduction avec carte de fidélité |
| -------------- | --------- | -------------------------------- |
| Alimentation | 5% | 8% |
| Vêtements | 10% | 15% |
| Chaussures | 12% | 18% |
| Autre | 0% | 0% |

S'il à moins de **26** ans, il a **10%** de réduction supplémentaire sur tous les articles après réduction.

Je vous fourni le code suivant pour l'énumération et la gestion de la saisie de l'utilisateur:

```cpp
enum class Article { Alimentation, Vetements, Chaussures, Autre };

// C'est un mécanisme avancé, vous n'avez pas besoin de comprendre comment ça marche.
// On en reparlera au second semestre.
// retenez juste que ça permet de convertir une entrée de l'utilisateur en Article.
std::istream& operator>>(std::istream& is, Article& article)
{
    std::string articleAsString;
    is >> articleAsString;

    if (articleAsString == "Alimentation") {
        article = Article::Alimentation;
    } else if (articleAsString == "Vetements") {
        article = Article::Vetements;
    } else if (articleAsString == "Chaussures") {
        article = Article::Chaussures;
    } else if (articleAsString == "Autre") {
        article = Article::Autre;
    } else {
        is.setstate(std::ios::failbit);
    }

    return is;
}
```

Cela nous permet d'utiliser l'opérateur `>>` pour lire un **enum** comme on pourrait le faire avec un **int** ou un **float**.
Sans cela, on aurait du utiliser une variable intermédiaire de type **string** ou **int** pour stocker la saisie de l'utilisateur et faire la conversion nous même.

<details>

<summary>Exemple de saisie d'un enum</summary>

```cpp
#include <iostream>

enum class Article { Alimentation, Vetements, Chaussures, Autre };

std::istream& operator>>(std::istream& is, Article& article)
{
    std::string articleAsString;
    is >> articleAsString;

    if (articleAsString == "Alimentation") {
        article = Article::Alimentation;
    } else if (articleAsString == "Vetements") {
        article = Article::Vetements;
    } else if (articleAsString == "Chaussures") {
        article = Article::Chaussures;
    } else if (articleAsString == "Autre") {
        article = Article::Autre;
    } else {
        is.setstate(std::ios::failbit);
    }

    return is;
}

int main()
{
    Article article;
    std::cin >> article;

    // On vérifie si la saisie a échoué.
    if (std::cin.fail()) {
        std::cout << "Erreur de saisie, il faut saisir un type d'article valide (\"Alimentation\", \"Vetements\", \"Chaussures\" ou \"Autre\")" << std::endl;

        std::cin.clear(); // On remet std::cin dans un état fonctionnel.
        std::cin.ignore(255, '\n'); // On vide les caractères mémorisés.

        // le programme s'arrête si on a rencontré une erreur de saisie et renvoie 1 pour indiquer une erreur.
        return 1;
    }

    if (article == Article::Alimentation) {
        std::cout << "Vous avez saisi un article de type Alimentation" << std::endl;
    } else if (article == Article::Vetements) {
        std::cout << "Vous avez saisi un article de type Vetements" << std::endl;
    } else if (article == Article::Chaussures) {
        std::cout << "Vous avez saisi un article de type Chaussures" << std::endl;
    } else if (article == Article::Autre) {
        std::cout << "Vous avez saisi un article de type Autre" << std::endl;
    }

    return 0;
}
```
</details>

1. Demander à l'utilisateur de saisir le type d'article, le prix, s'il a une carte de fidélité et son âge.

2. Gérer les cas où l'utilisateur saisit des informations incorrectes (enum incorrect, prix ou âge négatif, etc.) et afficher un message d'erreur dans ce cas.
Vous pouvez reprendre mon exemple de saisie d'un enum.

3. Calculer le prix final en fonction des informations saisies et afficher le résultat.

4. L'enseigne offre également un bon d'achat de **10%** du montant total du ticket de caisse, à valoir sur un prochain achat. Le bon d'achat ne peut pas être supérieur à 30€.
Calculer le montant du bon d'achat et l'afficher en fin de programme.

## Exercice 5

Calcul du temps d'ébullition de l'eau en fonction de l'**altitude** en mètres (un nombre entier), de la **température ambiante** (un nombre flottant) et de l'ajout ou non de **sel** (boolean).

Vous disposez des informations suivantes:

- A **0** mètre d'altitude, l'eau bout à **100°C**.
- Tout les **300 mètres** d'altitude supplémentaires, l'eau atteint son point d'ébullition **1°C plus bas**.
- L'action d'ajouter du **sel** dans l'eau fait augmenter son point d'ébullition de **1.5°C**.
- Il faut **1 min** pour que l'eau gagne **10°C** de température.
- La température de l'eau initiale est la température ambiante.

1. Demander à l'utilisateur de saisir l'altitude, la température ambiante et s'il ajoute du sel.
2. Gérer le cas où l'utilisateur saisit une altitude négative et afficher un message d'erreur.
3. En fonction des informations saisies, afficher le temps d'ébullition de l'eau en minutes.

## Exercice 6

Essayer de refaire les exercices **1** et **2** en utilisant des **ternaires**.

:::note

Un **ternaire** est une expression conditionnelle qui permet de faire un test comme un **if/else** et de retourner une valeur en fonction du résultat du test.

```cpp
int a {5};
int b {10};
// condition ? valeur si vrai : valeur si faux
int c {(a > b) ? a : b }; // c = 10
```

C'est réservé aux cas simples qui peuvent s'écrire sur une seule ligne.
Il ne faut pas abuser des ternaires car cela peut rendre le code illisible.
:::