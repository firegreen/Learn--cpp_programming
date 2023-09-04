---
title: TD4 - Boucles
sidebar_position: 4
---

## Exercice 1 (For)

- faire une boucle **for** qui affiche les nombres pairs inférieurs ou égal à un nombre entré par l'utilisateur:
  - en utilisant le mot clé **continue**
  - en utilisant un condition et l'opérateur **modulo**
  - en utilisant une boucle bien choisie (un nombre pair est un nombre qui peut s'écrire comme le double d'un nombre entier)

:::tip
VOus pourrez utiliser **std::cin** pour demander le nombre maximum à l'utilisateur (aucune gestion d'une éventuelle erreur de saisi n'est demandé ici)
:::

## Exercice 2 (While)

- Écrire une boucle **while** qui affichera les entiers entre 1 et 20.
- Écrire une boucle **while** qui affichera les 50 premiers multiples de 7, chacun
sur une ligne de la forme: `5 fois 7 = 35`.
- Refaire les deux questions précédentes en utilisant une boucle **for**.

## Exercice 3 (Somme d'entiers positifs)

Écrire un programme qui demande à l’utilisateur de saisir des entiers positifs (s’arrête dès que l’utilisateur saisit un entier négatif)

- Afficher la **somme** des entiers positifs saisis par l’utilisateur.

- permettre de calculer également la **moyenne** et l'afficher.

:::info
Pour calculer la moyenne, il faut compter le nombre d'entiers positifs saisis par l'utilisateur.
Vous n'avez à stocker les entiers saisis par l'utilisateur (vous découvrirez comment faire cela dans le prochain chapitre).
:::

## Exercice 4 (rendu de monnaie)

Écrire un programme qui demande à l’utilisateur un montant en euros et affiche le nombre de billets et de pièces nécessaires pour rendre la monnaie avec le moins de billets et de pièces possible.

On suppose que l’on dispose de pièces de `1`, `2`, `5`, `10`, `20` et `50` centimes, de `1` et `2` euros ainsi que de billets de `5`, `10`, `20`, `50`, `100`, `200` et `500` euros.

## Exercice 5 (entrée utilisateur)

Écrire un programme qui demande à l'utilisateur un nombre et affiche la table de multiplication de ce nombre.

Vous devrez gérer le cas où l'utilisateur saisit une valeur incorrecte (un nombre négatif ou une lettre par exemple) et redemander à l'utilisateur de saisir un nombre tant qu'il n'a pas saisi une valeur correcte.

Je vous invite à retourner voir l'[exercice 3](/TDs/Conditions#exercice-3) du **TD2** sur les conditions pour vous aider.

## Exercice 6 (conjecture de Syracuse)

Écrire un programme qui, à partir d’un entier positif saisi par l’utilisateur, affiche le nombre de termes de la suite de Syracuse nécessaires pour atteindre `1` (on inclut le terme de départ dans le décompte)

La suite de **Syracuse** est une suite d'entiers dans laquelle chaque terme est obtenu en appliquant une fonction à son terme précédent. Cette fonction est définie comme suit:

- si le terme est pair, le terme suivant est égal à la **moitié** du terme précédent. (x/2)
- si le terme est impair, le terme suivant est égal à **3** fois le terme précédent **plus 1** (3x+1).

Par exemple, si le terme de départ est `7`, la suite est :
`7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1, 4, 2, 1, 4, 2, 1, ...`

Ici, la suite atteint la valeur `1` au bout de 17 termes (incluant le terme de départ).

Vous remarquez qu’à la fin, une fois qu’on est tombé sur 1, la suite finit par répéter indéfiniment le cycle `4, 2, 1`.

Il est conjecturé que cette suite atteint toujours la valeur `1` quelque soit le terme de départ. Cela a d'ailleurs déjà été vérifiée numériquement jusqu’à 10^20 (par [Tomas Oliveira e Silva](https://www.ams.org/journals/mcom/1999-68-225/S0025-5718-99-01031-5/S0025-5718-99-01031-5.pdf)).

## Exercice 7 (ASCII art)

Écrire un programme qui demande à l’utilisateur de saisir un entier positif et affiche un triangle rectangle de hauteur `n` comme dans l’exemple ci-dessous.

```bash title="exemple d'exécution"
Entrez un entier positif : 5
*
**
***
****
*****
```

- Essayer d'afficher un sapin de noël, autrement dit un triangle rectangle isocèle de hauteur `n` et dont le sommet est composé d'une seule étoile.

```bash title="exemple d'exécution"
Entrez un entier positif : 3
  *
 ***
*****
```

## Exercice 8 (Le juste prix)

Un nombre entier est tiré au hasard entre `1` et `100` (inclus).

Le joueur doit deviner ce nombre en un minimum de tentatives.

À chaque tentative, le programme indique au joueur si le nombre à deviner est plus grand ou plus petit que celui qu’il a proposé.

Le programme s’arrête lorsque le joueur a trouvé le nombre mystère.

:::info
Pour générer un nombre aléatoire, vous pouvez utiliser la fonction **rand()** de la bibliothèque **cstdlib**.

la fonction **rand()** retourne un nombre entier aléatoire entre **0** et **RAND_MAX** (une constante définie dans la bibliothèque **cstdlib**).

Pour obtenir un nombre aléatoire entre **1** et **100**, il faut utiliser l'opérateur modulo **%**:

`std::rand() % 100 + 1`.

<details>
<summary>
  Génération plus moderne de nombre aléatoire
</summary>

Avec **C++11**, plusieurs nouvelles fonctionnalités ont été ajoutées dans la bibliothèque **random** pour la génération de nombres aléatoires.

Cela permet de mieux contrôler la génération pseudo-aléatoire de nombres et avoir accès à des distributions de probabilités déjà implémentées.

```cpp
#include <iostream>
#include <random>

int main()
{
    std::random_device rd;
    std::mt19937 gen{rd()};
    std::uniform_int_distribution<int> dist{1, 100};
    
    std::cout << dist(gen) << std::endl;

    return 0;
}
```
</details>
:::
