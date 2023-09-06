---
title: TD7 - Structures
sidebar_position: 7
---

## Exercice 1

Vous êtes le pilote d'un sous-marin, vous avez reçu des ordres de mouvements sous la forme d'une instruction et d'une distance à parcourir. Vous devez écrire un programme qui permet de calculer la position du sous-marin après avoir effectué les mouvements reçus.

Votre position initiale est (0, 0) et vous pouvez vous déplacer dans les directions suivantes: Haut, Bas, Avant, Arrière.

- Écrire une **structure** `Position` qui permet de stocker les coordonnées du sous-marin.

- Écrire un **enum** `Direction` qui permet de stocker les directions possibles.

- Écrire une structure `Move` qui représente un mouvement sous la forme d'une direction et d'une distance à parcourir.
- 
- Écrire une fonction `moveSubmarine` qui permet de déplacer le sous-marin en fonction d'un mouvement. La fonction ne doit rien retourner et doit modifier la position du sous-marin passée en paramètre.

- Écrire une fonction `display` qui permet d'afficher la position du sous-marin passée en paramètre.

Le but est d'indiquer la position du sous-marin après avoir effectué les mouvements suivants:

- `Avant 10`
- `Bas 5`
- `Arrière 3`
- `Haut 2`
- `Avant 5`
- `Bas 1`
- `Arrière 2`
- `Avant 3`
- `Bas 1`
- `Haut 3`
- `Avant 1`
- `Bas 5`
- `Arrière 2`
- `Avant 6`

Vous pouvez représenter les mouvements sous la forme d'un vecteur de `Move`:

```cpp
std::vector<Move> moves = {
    {Direction::Forward, 10},
    {Direction::Down, 5},
    {Direction::Backward, 3},
    {Direction::Up, 2},
    {Direction::Forward, 5},
    {Direction::Down, 1},
    {Direction::Backward, 2},
    {Direction::Forward, 3},
    {Direction::Down, 1},
    {Direction::Up, 3},
    {Direction::Forward, 1},
    {Direction::Down, 5},
    {Direction::Backward, 2},
    {Direction::Forward, 6}
};
```

