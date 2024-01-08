---
title: TD6 - Arbres binaires
---

# Arbres binaires de recherche

Dans ce TD, nous allons voir comment implémenter un arbre binaire de recherche.

## Implémentation

Donnons nous pour commencer la structure suivante pour représenter un nœud d'un arbre binaire.

```cpp
struct Node {
    int value;
    Node* left = nullptr;
    Node* right = nullptr;
};
```

:::tip
Je vous conseil de créer un fichier `node.hpp` et d'y mettre la structure `Node` ainsi que le prototype des fonctions et méthodes que vous allez écrire.

Avec une organisation de fichier comme celle-ci:
```
src/
    L main.cpp
    L node.hpp
    L node.cpp
CmakeLists.txt
```
:::

1. Écrire une **fonction** `createNode` qui prend en paramètre une valeur et permet de créer (sur la heap avec **new**) un nœud contenant cette valeur et dont les fils sont pointeur nuls.
```cpp
Node* createNode(int value);
```

2. Écrire une **méthode** `isLeaf` sur la structure `Node` qui retourne vrai si le nœud est une feuille (c'est à dire si ses deux fils sont nuls).
```cpp
bool isLeaf() const;
```

3. Écrire une **méthode** `insert` à la structure `BinaryTree` qui prend en paramètre une valeur et qui insère un nouveau nœud contenant cette valeur dans l'arbre binaire. On insérera le nœud à gauche si la valeur est inférieure à la valeur du nœud courant et à droite sinon.
```cpp
void Node::insert(int value);
```
:::tip
On utilisera la fonction `createNode` pour créer le nouveau nœud.
:::

4. Écrire une **méthode** `infixe` qui retourne un vecteur contenant les pointeurs vers les nœuds de l'arbre binaire parcourus en **infixe**.
```cpp
std::vector<Node const*> Node::infixe() const;
```

:::tip
Pour le faire par **récursivité** on pourra utiliser la méthode `insert` du `std::vector` qui permet d’insérer plusieurs éléments à l'aide d’itérateurs.
```cpp
auto left_nodes {left->infixe()};
nodes.insert(nodes.end(), left_nodes.begin(), left_nodes.end());
```
:::

5. De même, écrire deux autres méthodes `prefixe` et `postfixe` qui retournent les nœuds parcourus dans l'ordre **préfixe** et **postfixe** respectivement.

<!-- 6. Écrire une **fonction** `displayNodeValues` qui prends en paramètre un vecteur de pointeurs vers des nœuds et qui affiche les valeurs de ces nœuds, séparées par un séparateur passé en paramètre.
    ```cpp
    void displayNodeValues(std::vector<Node const*> const& nodes, std::string separator = ", ");
    ``` -->

6. Écrire une **méthode** `mostLeft` qui retourne un pointeur vers le nœud le plus à gauche de l'arbre binaire dont ce nœud est la racine.
```cpp
    Node* Node::mostLeft();
```

7. Écrire une **méthode** `find` qui prend en paramètre une valeur et qui retourne un pointeur vers le nœud contenant cette valeur dans l'arbre binaire. Si la valeur n'est pas présente dans l'arbre, on retourne un pointeur nul.
```cpp
Node* Node::find(int value);
```

8. (**BONUS**) Écrire la même **méthode** `find` mais qui retourne un pointeur constant vers le nœud. On ne pourra donc pas modifier la valeur du nœud retourné. L'avanatage de cette méthode est qu'on pourra l'utiliser sur un `Node` constant.
```cpp
Node const* Node::find(int value) const;
```

9. Écrire une **fonction** `removeNode` qui permet de supprimer une valeur de l'arbre binaire dont le nœud passé en paramètre est la racine. La fonction retourne un pointeur vers le nouveau nœud racine de l'arbre binaire.
```cpp
Node* removeNode(Node* node, int value);
```

Retourner un pointeur vers le nouveau nœud racine permet de réassigner le pointeur du node parent si le nœud est supprimé. C'est important dans le cas par exemple où l'on supprime une feuille de l'arbre il faut pouvoir réassigner le pointeur du nœud parent vers un pointeur nul pour éviter d'avoir un pointeur qui pointe vers un nœud supprimé.

```cpp
if (value == node->value && node->isLeaf()) {
        // On supprime le nœud courant
        delete node;
        // on retourne nullptr pour mettre à jour le pointeur du parent vers le nœud courant
        return nullptr;
    }
```

le parent doit alors appeler par récursivité la fonction `removeNode` pour mettre à jour son pointeur vers le nœud fils correspondant.

```cpp
if (value < node->value) {
    node->left = removeNode(node->left, value);
}
```

:::tip
Il existe trois cas de figure lorsqu'on supprime un nœud d'un arbre binaire:
- Le nœud n'a pas de fils: on peut le supprimer directement.
- Le nœud a un seul fils: on peut le supprimer et le remplacer par son fils.
- Le nœud a deux fils: 
    Il faut remplacer la valeur du nœud à supprimer par une valeur préserver l'ordre de l'arbre. Pour cela, on utilisera la fonction `mostLeft` qui permettent de trouver le nœud le plus à gauche d'un arbre binaire (autrement dit, le nœud de valeur minimale).
    Il faut ensuite remplacer la valeur du nœud à supprimer par la valeur du nœud trouvé précédemment et supprimer ce dit nœud pour ne pas avoir de doublon. (cela revient à intervertir les deux nœuds sans avoir à modifier les pointeurs puis à supprimer le nœud dont la valeur a été copiée).
:::

:::warning
Il faut faire attention à bien libérer la mémoire des nœuds supprimés.
:::

10. Écrire une fonction `deleteChilds` sur la structure `Node` qui permet de supprimer les fils d'un nœud (et de libérer la mémoire).
```cpp
void Node::deleteChilds();
```

:::tip
On peut utiliser de la récursivité pour supprimer les nœuds de l'arbre.
:::

11. Écrire une méthode `height` qui retourne la hauteur de l'arbre binaire (c'est à dire la longueur du plus long chemin entre la racine et une feuille).
```cpp
int Node::height() const;
```

:::tip
On peut utiliser de la récursivité pour calculer la hauteur de l'arbre.
:::

12. Écrire une **fonction** `deleteTree` qui permet de supprimer un arbre binaire (et de libérer la mémoire).
```cpp
void deleteTree(Node* node);
```

13. (**BONUS**) Écrire des méthodes `min` et `max` qui retournent respectivement les valeurs minimales et maximales de l'arbre binaire.

## Pointeurs intelligents

Nous allons maintenant améliorer et simplifier notre code en utilisant des pointeurs intelligents. En effet la partie la plus compliquée de notre code est la gestion de la mémoire et des pointeurs. Les pointeurs intelligents vont nous permettre de nous débarrasser de cette gestion et de nous passer de la fonction `deleteTree` par exemple.

14. Copier coller votre fichier pour garder une version de votre code précédent et créer un nouveau fichier `smartNode.hpp` dans lequel vous allez réécrire votre code en utilisant des **pointeurs intelligents**.
Renommer la structure `Node` en `SmartNode` pour pouvoir faire la différence entre les deux versions.

15. Remplacer les pointeurs "bruts" par des pointeurs intelligents `std::unique_ptr` dans la structure `SmartNode`.

16. Modifier la fonction `isLeaf` pour utiliser le fait qu'un pointeur intelligent peut être converti implicitement en [booléen](https://en.cppreference.com/w/cpp/memory/unique_ptr/operator_bool) (il vaut `false` si le pointeur est nul et `true` sinon). 

17. Renommer et modifier la fonction `createNode` (en `createSmartNode`) pour qu'elle retourne un pointeur intelligent `std::unique_ptr` au lieu d'un pointeur brut (on utilisera la fonction `std::make_unique` pour créer le pointeur).

18. Modifier la méthode `mostLeft` pour qu'elle retourne une référence vers la structure `SmartNode` au lieu d'un pointeur brut (une référence car cet élément est toujours présent dans l'arbre).

19. Modifier les méthodes `insert`, `find` pour qu'elles fonctionnent avec des pointeurs intelligents.

20. (**BONUS**) Renommer et modifier la méthode `removeNode` (en `removeSmartNode`) également.
## Utilisation

Testons maintenant notre implémentation en créant un programme qui permet de créer un arbre binaire et d'effectuer différentes opérations dessus.

21. Créer un arbre binaire et insérer les valeurs suivantes: 5, 3, 7, 2, 4, 6, 8, 1, 9, 0.

22. Afficher les valeurs des nœuds de l'arbre binaire dans l'ordre **infixe**, **préfixe** et **postfixe**.

23. Afficher la hauteur de l'arbre binaire.

## Aller plus loin: Encapsulation

Le but est de créer une structure `BinaryTree` qui encapsule la structure `Node` ou `SmartNode` et qui permet d'utiliser les même méthodes sans connaître la structure interne de l'arbre binaire. Cela permet aussi de gérer le cas où l'arbre binaire est vide (c'est à dire que la racine est un pointeur nul).

C'est moins pertinent dans notre cas pour ce TDs mais lorsque vous découvrirez la notion de **visibilité** vous comprendrez l'intérêt de cette encapsulation.

Voilà le contenu du fichier `binaryTree.hpp`:

```cpp
#pragma once

#include <vector>

#include "smartNode.hpp"

struct BinaryTree {
    std::unique_ptr<SmartNode>{} root = std::unique_ptr<SmartNode>{};

    void insert(int value);
    void remove(int value);
    void clear();
    SmartNode* find(int value);
    SmartNode const* find(int value) const;
    int height() const;
    std::vector<Node const*> infixe() const;
    std::vector<Node const*> postfixe() const;
    std::vector<Node const*> prefixe() const;
};
```
