---
title: TD3 - Structures de données
---

## Evaluation NPI

La notation polonaise inversée (**NPI**) est une notation mathématique qui permet d'exprimer des expressions arithmétiques sans utiliser de parenthèses. Elle a été inventée par le mathématicien polonais Jan Lukasiewicz en 1924.

La notation polonaise inversée est une notation postfixe, c'est-à-dire que l'opérateur est placé après les deux opérandes. Par exemple, l'expression `3 + 4` s'écrit `3 4 +` en NPI.

Ce qui permet ensuite d'interpréter l'expression de gauche à droite, en empilant les opérandes sur une pile, et en déclenchant l'opération lorsque l'on rencontre un opérateur.

Par exemple, l'expression `3 4 +` s'interprète comme suit :

- On empile `3`
- On empile `4`
- On rencontre `+`, on dépile `4` et `3`, on calcule `3 + 4 = 7`, et on empile le résultat `7`
- On a terminé, le résultat est `7`

On va donc pouvoir se servir d'une **pile** pour évaluer une expression en NPI.

:::tip
Il faut cependant faire attention au opérateur non commutatifs, comme `-` ou `/`. `3 4 /` ne s'interprète pas comme `3 / 4`, mais comme `4 / 3`. Il faut donc écrire `3 4 /` pour évaluer `3 / 4`.
:::

Le but de cet exercice est d'écrire une fonction qui prend en paramètre une expression en **NPI** sous forme d'une chaîne de caractères (les différents éléments de l'expression sont séparés par des espaces), et qui retourne le résultat de l'expression.

1. Écrire un programme qui permet de lire une entrée utilisateur sous la forme d'une chaines de caractères composée des différents éléments de l'expression (nombre, opérateur) en **notation polonaise inversée** (**NPI**).
  :::note
  Par simplicité, on se limitera à des expressions contenant des **chiffres** entiers positifs compris entre **0** et **9**, et des opérateurs `+`, `-`, `*` et `/` ainsi que des **parenthèses** (`(` et `)`).
  la chaîne de caractères sera donc composée uniquement des caractères suivants: `0123456789+-*/` sans espaces(pour s'éviter d'avoir à gérer les espaces dans un premier temps). :warning: `12` représente donc bien la succession des chiffres `1` et `2`, et non pas le nombre `12`.
  :::
2. Écrire une fonction qui prend en paramètre une **chaîne de caractères** représentant l'expression en **NPI** et qui retourne le résultat de l'expression.
  Utilisez une **pile** (`std::stack`) pour évaluer l'expression comme dans l'exemple précédent.
  :::tip
  On pourra faire la distinction entre les opérateurs et les opérandes en utilisant la fonction `std::isdigit` de la bibliothèque `<cctype>`.
  On pourra utiliser la fonction `std::stoi` de la bibliothèque `<string>` pour convertir une chaîne de caractères en entier.
  :::

3. Utiliser les fonctions précédentes pour afficher le résultat d'une expression en NPI entrée par l'utilisateur.

### Pour aller plus loin
4. Gérer les nombres (à plusieurs chiffres) (il va falloir ajouter un espace entre chaque éléments de l'expression et ajouter une étape de traitement pour séparer l'expression en plusieurs nombres et opérateurs (appelés **tokens**) en fonction des espaces).

  Je vous fourni le code suivant pour vous aider à tester si une chaîne de caractères représente un nombre entier:
  ```cpp
  #include <string>
  #include <cctype>
  #include <algorithm>
  #include <iostream>

  bool is_digits(std::string const& str)
  {
    return std::all_of(str.begin(), str.end(), [](unsigned char ch){ return std::isdigit(ch); });
  }

  void main() {
    std::string s { "42" };
    if (is_digits(s))
    {
      int i { std::stoi(s) };
      std::cout << i << std::endl;
    }
    else
    {
      // opertor
      std::cout << "not a number" << std::endl;
    }
  }
  ```

5. Réécrire le programme précédent en utilisant un **enum** pour représenter les différents **opérateurs** ainsi qu'une structure pour représenter un **token** (un élément de l'expression) avec un champ pour le type (opérateur ou opérande) et des champs pour les valeurs (opérateur ou opérande).
    ```cpp
    enum class Operator { ADD, SUB, MUL, DIV};
    enum class TokenType { OPERATOR, OPERAND };
    struct Token {
      TokenType type;
      int value;
      Operator op;
    };
    ```

    :::info
    Il existe des fonctionnalités plus avancés qui permettraient de faire ça plus proprement, et de se passer de la structure `Token` (les **variantes**). Vous pouvez vous renseigner ou me demander si vous voulez en savoir plus.
    :::

## Pour aller plus loin

### Conversion en NPI

Nous avons précédemment vu comment évaluer une expression en **NPI**. Mais comment faire pour convertir une expression en notation infixe (c'est-à-dire de manière "classique" avec des parenthèses) en une expression en NPI ?

Pour cela, il existe un algorithme appelé **Shunting-yard algorithm** (littéralement "algorithme de la cour de triage").

Son principe est d'utiliser une **pile** pour stocker les opérateurs rencontrés, et de les dépiler lorsque l'on rencontre un opérateur de priorité supérieure.

Voilà comment il fonctionne :

- On parcourt l'expression de gauche à droite
- Si on rencontre un nombre, on l'ajoute à la sortie
- Si on rencontre un opérateur:
  - Si on rencontre une parenthèse ouvrante (`(`), on la met sur la pile des opérateurs
  - Si on rencontre une parenthèse fermante (`)`), on dépile les opérateurs jusqu'à ce qu'on rencontre une parenthèse ouvrante, et on ajoute les opérateurs défilés à la sortie
  - Tant qu'il y a un opérateur sur la pile des opérateurs de priorité supérieure ou égale à l'opérateur courant, on dépile les opérateurs et on les ajoute à la sortie. Puis on ajoute l'opérateur courant à la pile des opérateurs.

- Enfin, on dépile les opérateurs restants et on les ajoute à la sortie.

Voici un exemple d'application de l'algorithme  avec l'expression `3 + 4 ^ 2 / ( 1 - 5 ) ^ 6 ` :

| Entrée | Sortie | Pile des opérateurs | commentaire |
| --- | --- | --- | --- |
| 3 | 3 | | on ajoute 3 à la sortie |
| + | 3 | + | on ajoute + à la pile des opérateurs |
| 4 | 3 4 | + | on ajoute 4 à la sortie |
| ^ | 3 4 | + ^ | on ajoute ^ à la pile des opérateurs |
| 2 | 3 4 2 | + ^ | on ajoute 2 à la sortie |
| / | 3 4 2 ^ | + | on dépile ^ et on l'ajoute à la sortie car / a une priorité inférieure à ^ |
| ( | 3 4 2 ^ | + ( | on ajoute ( à la pile des opérateurs |
| 1 | 3 4 2 ^ 1 | + ( | on ajoute 1 à la sortie |
| - | 3 4 2 ^ 1 | + ( - | on ajoute - à la pile des opérateurs |
| 5 | 3 4 2 ^ 1 5 | + ( - | on ajoute 5 à la sortie |
| ) | 3 4 2 ^ 1 5 - | + | on dépile les opérateurs jusqu'à ( et on les ajoute à la sortie |
| ^ | 3 4 2 ^ 1 5 - | + ^ | on ajoute ^ à la pile des opérateurs |
| 6 | 3 4 2 ^ 1 5 - 6 | + ^ | on ajoute 6 à la sortie |
|   | 3 4 2 ^ 1 5 - 6 ^ | + | on dépile le reste des opérateurs et on les ajoute à la sortie |

Écrire une fonction qui prend en paramètre une chaîne de caractères représentant une expression en **notation infixe**, qui retourne un tableau de `Token` représentant l'expression en NPI.

:::tip
On utilisera la même structure `Token` que dans l'exercice précédent.
Il faut ajouter les parenthèses à la liste des opérateurs, et gérer la propriété des opérateurs(en ordonnant les opérateurs par priorité dans l'énumération `Operator` par exemple ou à l'aide d'une fonction ou d'un tableau pour déterminer la priorité d'un opérateur).
On utilisera une `std::stack` pour représenter la pile des opérateurs.
:::

### Réaliser un calculatrice

Maintenant que nous savons évaluer une expression en NPI et que nous savons convertir une expression en notation infixe en NPI, nous pouvons réaliser une **calculatrice**.

Essayez de réaliser un programme qui permet de lire une expression en notation infixe, de la convertir en NPI, de l'évaluer et d'afficher le résultat.