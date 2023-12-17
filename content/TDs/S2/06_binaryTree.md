---
title: TD6 - Arbres binaires
---

# Arbres binaires de recherche

Dans ce TD, nous allons voir comment implémenter un arbre binaire de recherche.

# Implémentation

Donnons nous pour commencer la structure suivante pour représenter un noeud d'un arbre binaire.

```cpp
struct Node {
    int value;
    Node* left = nullptr;
    Node* right = nullptr;
};
```

et également la structure suivante pour représenter un arbre binaire qui n'est rien d'autre qu'un pointeur vers son noeud racine.

```cpp
struct BinaryTree {
    Node* root = nullptr;
};
```

:::info
On pourrait se passer de cette seconde structure et utiliser directement un pointeur vers le noeud racine. Cependant, cela nous permettra de définir des fonctions et méthodes qui font plus de sens et permet de mieux structurer notre code.
Cela permet au passage de gérer plus facilement le cas particulier d'un arbre vide qui est représenté par un pointeur nul.
:::

1. Écrire une fonction `createNode` qui prend en paramètre une valeur et permet de créer (sur la heap avec **new**) un noeud contenant cette valeur et dont les fils sont pointeur nuls.
```cpp
Node* createNode(int value);
```

2. Écrire une méthode `insert` à la structure `BinaryTree` qui prend en paramètre une valeur et qui insère un nouveau noeud contenant cette valeur dans l'arbre binaire. On insérera le noeud à gauche si la valeur est inférieure à la valeur du noeud courant et à droite sinon.
```cpp
void BinaryTree::insert(int value);
```

3. Écrire une méthode `infixe` sur la structure sur la structure BinaryTree qui retourne un vecteur contenant les pointeurs vers les noeuds de l'arbre binaire parcourus en **infixe**.
    ```cpp
    std::vector<Node const*> BinaryTree::infixe() const;
    ```

4. De même, écrire deux autres méthodes `prefixe` et `postfixe` qui retournent les noeuds parcourus dans l'ordre **préfixe** et **postfixe** respectivement.

5. Écrire une fonction `displayNodeValues` qui prends en paramètre un vecteur de pointeurs vers des noeuds et qui affiche les valeurs de ces noeuds, séparées par un séparateur passé en paramètre.
    ```cpp
    void displayNodeValues(std::vector<Node const*> const& nodes, std::string separator = ", ");
    ```

6. Écrire une fonction `mostLeftNodeFrom` qui prend en paramètre un pointeur vers un noeud et qui retourne un pointeur vers le noeud le plus à gauche de l'arbre binaire dont ce noeud est la racine.
    ```cpp
    Node* mostLeftNodeFrom(Node* node);
    ```
7. De la même manière, écrire la fonction `mostRightNodeFrom`.


8. Écrire une méthode `find` sur la structure `BinaryTree` qui prend en paramètre une valeur et qui retourne un pointeur vers le noeud contenant cette valeur dans l'arbre binaire. Si la valeur n'est pas présente dans l'arbre, on retourne un pointeur nul.
    ```cpp
    Node* BinaryTree::find(int value);
    ```
9. Écrire la même méthode find mais qui retourne un pointeur constant vers le noeud. On ne pourra donc pas modifier la valeur du noeud retourné et on pourra utiliser cette méthode sur un arbre binaire constant.
    ```cpp
    Node const* BinaryTree::find(int value) const;
    ```

9. Écrire une méthode `remove` qui permet de supprimer une valeur de l'arbre binaire. On supprimera le noeud contenant cette valeur et on réorganisera l'arbre pour que les noeuds restants soient toujours dans un ordre valide.
    ```cpp
    void BinaryTree::remove(int value);
    ```

    :::tip
    Il existe trois cas de figure lorsqu'on supprime un noeud d'un arbre binaire:
    - Le noeud n'a pas de fils: on peut le supprimer directement.
    - Le noeud a un seul fils: on peut le supprimer et le remplacer par son fils.
    - Le noeud a deux fils: 
        Il faut remplacer la valeur du noeud à supprimer par une valeur préserver l'ordre de l'arbre. Pour cela, on utilisera les fonctions `mostLeftNodeFrom` et `mostRightNodeFrom` qui permettent de trouver le noeud le plus à gauche ou le plus à droite d'un arbre binaire (autrement dit, le plus petit ou le plus grand noeud de l'arbre).
        Il faut ensuite remplacer la valeur du noeud à supprimer par la valeur du noeud trouvé précédemment et supprimer ce  dit noeud pour ne pas avoir de doublon. (cela revient à intervertir les deux noeuds ans avoir à modifier les pointeurs puis à supprimer le noeud dont la valeur a été copiée).
    :::

    :::warning
    Il faut faire attention à bien libérer la mémoire des noeuds supprimés.
    :::

10. Écrire une fonction `deleteTree` qui prend en paramètre un pointeur vers un noeud et qui supprime l'arbre binaire dont ce noeud est la racine (en prenant soin de libérer la mémoire des noeuds dans le bon ordre)
    ```cpp
    void deleteTree(Node* node);
    ```

    :::tip
    On peut utiliser de la récursivité pour supprimer les noeuds de l'arbre.
    :::

11. Écrire une méthode `clear` sur la structure `BinaryTree` qui permet de supprimer tous les noeuds de l'arbre binaire (et de libérer la mémoire)
    ```cpp
    void BinaryTree::clear();
    ```

12. Écrire une méthode `height` sur la structure `BinaryTree` qui retourne la hauteur de l'arbre binaire (c'est à dire la longueur du plus long chemin entre la racine et une feuille).
    ```cpp
    int BinaryTree::height() const;
    ```

    :::tip
    On peut utiliser de la récursivité pour calculer la hauteur de l'arbre.
    :::
# Pointeurs intelligents

Nous allons maintenant améliorer et simplifier notre code en utilisant des pointeurs intelligents. En effet la partie la plus compliquée de notre code est la gestion de la mémoire et des pointeurs. Les pointeurs intelligents vont nous permettre de nous débarrasser de cette gestion.

1. Copier coller votre fichier pour garder une version de votre code précédent.

2. Remplacer les pointeurs bruts par des pointeurs intelligents `std::unique_ptr` dans la structure `Node`.

3. Modifier la fonction `createNode` pour qu'elle retourne un pointeur intelligent `std::unique_ptr` au lieu d'un pointeur brut (on utilisera la fonction `std::make_unique` pour créer le pointeur).

4. Modifier la fonction `clear` pour qu'elle utilise des pointeurs intelligents. (il n'y a plus besoin de la fonction `deleteTree`)


# Utilisation

Testons maintenant notre implémentation en créant un programme qui permet de créer un arbre binaire et d'effectuer différentes opérations dessus.

1. Créer un arbre binaire et insérer les valeurs suivantes: 5, 3, 7, 2, 4, 6, 8, 1, 9, 0.

2. Afficher les valeurs des noeuds de l'arbre binaire dans l'ordre **infixe**, **préfixe** et **postfixe**.

3. Afficher la hauteur de l'arbre binaire.