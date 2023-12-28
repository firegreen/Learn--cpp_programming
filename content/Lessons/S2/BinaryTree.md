---
title: Arbres binaires
tags:
    - C++

sidebar_position: 6
---

Dans ce chapitre nous allons découvrir une nouvelle structure de données: les arbres. Et plus particulièrement les arbres binaires.

La notion d'**arbre** est une notion très importante en informatique. 
Un arbre est une **structure de données** qui permet de représenter des données **hiérarchiques** comme par exemple des dossiers et des fichiers dans un système de fichiers.

Un arbre est composé de **noeuds**. Chaque noeud peut avoir un nombre quelconque de **fils**. Un noeud qui n'a pas de fils est appelé une **feuille**.

Un arbre est composé d'un **noeud racine** qui est le noeud de départ de l'arbre. Il est possible d'accéder à tous les autres noeuds de l'arbre à partir du noeud racine.

```mermaid
graph TB
    A[Noeud A] --> B[Noeud B]
    A --> C[Noeud C]
    A --> D[Noeud D]
    B --> E[Noeud E]
    B --> F[Noeud F]
    C --> G[Noeud G]
    C --> H[Noeud H]
    C --> I[Noeud I]
    D --> J[Noeud J]
    D --> K[Noeud K]
    D --> L[Noeud L]
```

### Profondeur d'un noeud

La **profondeur** d'un noeud est le nombre de noeuds qui le séparent du noeud racine. En considérant que la profondeur du noeud racine est 1.

Dans notre exemple, la profondeur du noeud racine `A` est 1. La profondeur du noeud `B` est 2. La profondeur du noeud `E` est 3. etc..

### Hauteur d'un arbre

La **hauteur** d'un arbre est la profondeur maximale de ses noeuds. C'est à dire la profondeur du noeud le plus profond.

## Arbres binaires

Il existe plusieurs types d'arbres qui ont des propriétés différentes. On peut par exemple se limiter à un nombre maximum de fils par noeud, imposer un ordre sur les fils d'un noeud, ou encore imposer que chaque noeud ait un nombre fixe de fils.

C'est le cas des **arbres binaires**. Un **arbre binaire** est un arbre dont chaque noeud a au maximum deux fils. Un fils gauche et un fils droit.

C'est une structure de données très utilisée en informatique et c'est ce que nous allons étudier.

## Représentation d'un arbre binaire

### Structure par récursivité

Pour représenter un arbre binaire une solution qui peut sembler naturelle est d'utiliser une structure récursive. C'est à dire une structure qui contient des éléments de son propre type.

En effet, n'importe quel noeud de l'arbre, peut être vu comme un sous arbre binaire dont la racine est ce noeud. Ce jeu de l'esprit permet de comprendre qu'un noeud **pointe** vers deux autres noeuds qui sont les fils gauche et droit de ce noeud.

Il peut ne pointer vers aucun noeud, dans ce cas il est une feuille. Sinon, ce noeud représente un embranchement de l'arbre.

Mais on peut se demander comment représenter ce lien (qui peut ne pas exister dans le cas d'une feuille) entre un noeud et ses fils.

C'est là qu'interviennent les **pointeurs**. On peut représenter ce lien en utilisant des pointeurs vers les noeuds fils.

:::caution
On ne peut pas utiliser des **références** car elles doivent être une **référence vers** un **objet existant**. Or, dans le cas d'une feuille, il n'y a pas de noeud fils.
:::

Le pointeur lui peut être nul, c'est à dire qu'il ne pointe vers aucun objet. C'est cette particularité qui permet de représenter le cas d'une feuille.

Voilà à quoi ressemble la **structure** que l'on va utiliser pour représenter un **arbre binaire**:
```cpp
struct Node {
    int value;
    Node* left;
    Node* right;
};
```

Elle est composée d'un entier qui représente la valeur du noeud (cela peut être n'importe quel type de donnée), et de deux pointeurs vers des noeuds qui représentent les fils gauche et droit.

C'est pratique mais cela s'accompagne des **inconvénients des pointeurs**. Il faut faire attention à ne pas avoir de fuites mémoires (gérer l'allocation et la désallocation de la mémoire) et il faut faire attention à ne pas utiliser un pointeur qui ne pointe vers rien (pointeur nul).

Exemple d'utilisation:

```cpp
Node* root { new Node {1, nullptr, nullptr}};
root->left = { new Node {2, nullptr, nullptr}};
root->right = { new Node {3, nullptr, nullptr}};

root->left->left = { new Node {4, nullptr, nullptr}};

delete root->left->left;
delete root->left;
delete root->right;
delete root;
```

:::caution
:warning: Il faut faire attention à désallouer la mémoire dans le bon ordre ! Si on désalloue le noeud racine avant ses fils, on ne pourra plus accéder aux fils pour les désallouer. Cela provoque une **fuite de mémoire**.
:::

:::info
On pourrait se limiter seulement à cette structure de **noeud** pour représenter un **arbre binaire**. Mais cela peut être pratique d'avoir une structure dédiée à l'arbre binaire qui contient un pointeur vers le noeud racine.

Cela permet de gérer le cas où l'arbre est **vide** (qui n'a pas encore de noeud racine). Cela permet aussi de cacher la structure interne de l'arbre. On peut par exemple changer la structure interne `Node` (la structure de **noeud**) sans avoir à modifier le code qui l'utilise (la structure de l'arbre). L'utilisateur de l'arbre n'a pas besoin de savoir comment est représenté l'arbre en interne, il n'est pas censé manipuler directement les noeuds.

Cette notion de cacher la structure interne d'un objet est appelée **encapsulation**. C'est une notion importante en **programmation orientée objet**. Vous découvrirez cela plus en détail l'année prochaine et cela sera encore plus pertinent avec la notions de **visibilité**.

```cpp
struct BinaryTree {
    Node* root;
};
```
:::

<details>

<summary> Pointeurs intelligents </summary>

Il existe des **pointeurs intelligents** qui permettent de gérer automatiquement la mémoire. Ils sont définis dans la bibliothèque `<memory>`.

On pourrait se servir dans notre cas du pointeur intelligent `std::unique_ptr` qui permet de gérer automatiquement la mémoire d'un objet alloué dynamiquement.

```cpp
struct Node {
    int value;
    std::unique_ptr<Node> left;
    std::unique_ptr<Node> right;
};
```

On peut alors utiliser la fonction `std::make_unique` pour créer un objet alloué dynamiquement et initialiser les pointeurs intelligents.

```cpp
std::unique_ptr<Node> root { std::make_unique<Node>(1, nullptr, nullptr)};
root->left = std::make_unique<Node>(2, nullptr, nullptr);
root->right = std::make_unique<Node>(3, nullptr, nullptr);
```

Cela permet de ne pas avoir à gérer la désallocation de la mémoire. La structure est automatiquement désallouée lorsque le pointeur intelligent est détruit. Cela va se faire dans le bon ordre naturellement car pour détruire une structure, il faut d'abord détruire ses membres. Ses enfants seront donc détruits avant le noeud parent.
</details>

### Structure par tableau

Une autre façon de représenter un arbre binaire est d'utiliser un tableau. Cela peut sembler étrange mais c'est possible.

On peut représenter un arbre binaire en utilisant un tableau en utilisant la relation entre les indices du tableau et les noeuds de l'arbre.

On commence par numéroter le noeud racine avec l'indice 0. Ensuite, on définit une relation entre les indices des noeuds et les indices de leurs fils.

On définit que le fils gauche d'un noeud d'indice `i` est le noeud d'indice `2*i + 1`. Et que le fils droit d'un noeud d'indice `i` est le noeud d'indice `2*i + 2`.

Un exemple avec l'arbre suivant:

```mermaid
graph TB
    A --> B
    A --> C
    B --> D
    B --> E
    C --> F
    C --> G
```

On peut représenter cet arbre avec le tableau suivant:

```cpp
[A, B, C, D, E, F, G]
```

En effet, le noeud `A` est à l'indice 0. Son fils gauche est le noeud `B` qui est à l'indice `2*0 + 1 = 1`. Son fils droit est le noeud `C` qui est à l'indice `2*0 + 2 = 2`. Pour le noeud `B`(d'indice 1) , son fils gauche est le noeud `D` qui est à l'indice `2*1 + 1 = 3`. Son fils droit est le noeud `E` qui est à l'indice `2*1 + 2 = 4`. Etc...

:::info
On peut remarquer qu'il faut un tableau de taille `2^n - 1` pour représenter un arbre binaire complet de hauteur `n`. C'est à dire un arbre binaire dont tous les niveaux sont remplis sauf éventuellement le dernier niveau qui peut ne pas être rempli.
:::

Dans le cas où l'arbre n'est pas **complet** (c'est à dire que tous les feuilles ne sont pas sur le même niveau ou que des noeuds de l'arbre n'ont pas forcément deux fils), on peut avoir des trous dans le tableau. C'est à dire des cases du tableau qui ne sont pas utilisées.

Par exemple, pour l'arbre suivant:

```mermaid
graph TB
    A --> B
    A --> C
    C --> D
    C --> E
    E --> F
    D --> H
```

On peut représenter cet arbre avec le tableau suivant:

```cpp
[A, B, C, _, _, D, E, _, _, _, _, H, _, F, _]
```

Cette représentation est intéressante car elle permet de représenter un arbre binaire sans avoir à utiliser de pointeurs. Mais elle a aussi l'inconvénient de ne pas être très efficace quand l'arbre n'est complètement rempli. En effet, on peut avoir beaucoup de trous dans le tableau. Cela peut être problématique si l'arbre a une hauteur importante.

De plus il faut un moyen de représenter les trous dans le tableau. On peut par exemple utiliser une valeur spéciale qui ne peut pas être une valeur valide pour un noeud. Par exemple, on peut utiliser la valeur `-1` pour représenter un trou dans le tableau. Ou alors on peut utiliser `std::optional` pour représenter un noeud qui n'existe pas.

## Parcours d'un arbre binaire

Il existe plusieurs façons de parcourir les différents noeuds d'un arbre binaire. On peut par exemple parcourir l'arbre en largeur ou en profondeur.

Donnons nous l'arbre suivant:
```mermaid
graph TB
    A --> B
    A --> C
    B --> D
    B --> E
    C --> F
    C --> G
```

### Parcours en largeur

Le parcours en largeur consiste à parcourir l'arbre en commençant par le noeud racine puis en parcourant les noeuds de **chaque niveau** de profondeur de l'arbre de gauche à droite.

:::tip
Cela correspond à l'ordre dans lequel sont rangées les données lorsque l'on représente un arbre binaire par un tableau.
:::

### Parcours en profondeur

Le parcours en profondeur consiste à parcourir l'arbre de la racine vers les feuilles par récursion dans les **sous-arbres** gauche et droite. On peut parcourir l'arbre en profondeur de différentes façons:
- Parcours en profondeur **préfixe** (ou **pré-ordre**): on parcourt d'abord le noeud racine, puis le sous-arbre gauche et enfin le sous-arbre droit.
- Parcours en profondeur **infixe** (ou **symétrique**): on parcourt d'abord le sous-arbre gauche, puis le noeud racine et enfin le sous-arbre droit.
- Parcours en profondeur **postfixe** (ou **post-ordre**): on parcourt d'abord le sous-arbre gauche, puis le sous-arbre droit et enfin le noeud racine.

Exemple de parcours Pour l'arbre suivant:

```mermaid
graph TB
    A --> B
    A --> C
    B --> D
    B --> E
    C --> F
    C --> G
```

- Parcours en **largeur**: `A B C D E F G`
- Parcours en profondeur **préfixe**: `A B D E C F G`
- Parcours en profondeur **infixe**: `D B E A F C G`
- Parcours en profondeur **postfixe**: `D E B F G C A`

## Arbres binaires de recherche

Une fois que l'on a vu comment représenter un arbre binaire, on peut se demander à quoi cela peut servir. On peut par exemple se demander comment faire une recherche efficace dans un arbre binaire.

Un **arbre binaire de recherche** est un **arbre binaire** qui à la particularité d'être **ordonné**. On va imposer un ordre sur les valeurs des noeuds de l'arbre.

Dans notre cas on va imposer que pour chaque noeud, toutes les valeurs des noeuds du **sous-arbre gauche** sont **inférieures** à la valeur du noeud et toutes les valeurs des noeuds du **sous-arbre droit** sont **supérieures** à la valeur du noeud.

Le premier élément inséré dans l'arbre devient la racine. Ensuite, il suffit de mettre à gauche les éléments plus petits et à droite les éléments plus grands. C'est cette particularité qui rend les arbres binaires de recherche intéressants.

Cela permet de faire des recherches efficaces dans l'arbre. Grâce à la relation d'ordre entre les noeuds, on peut savoir dans quel sous-arbre se trouve la valeur recherchée et effectuer une recherche rappelant le fonctionnement de la recherche dichotomique.

### Insertion

L'insertion dans un arbre binaire de recherche est assez simple. Il suffit de trouver le bon endroit pour insérer le nouveau noeud en respectant la relation d'ordre entre les noeuds.

On commence par comparer la valeur du nouveau noeud avec la valeur du noeud racine. Si la valeur du nouveau noeud est inférieure à la valeur du noeud racine, on insère le nouveau noeud dans le sous-arbre gauche. Sinon, on insère le nouveau noeud dans le sous-arbre droit.

On répète cette opération jusqu'à trouver un noeud qui n'a pas de fils dans la direction où l'on souhaite insérer le nouveau noeud. On insère alors le nouveau noeud à cet endroit.

### Recherche

La recherche dans un arbre binaire de recherche est similaire à la recherche dichotomique. Pour commencer, on compare la valeur recherchée avec la valeur du noeud racine. Si la valeur recherchée est inférieure à la valeur du noeud racine, on effectue la recherche dans le sous-arbre gauche. Sinon, on effectue la recherche dans le sous-arbre droit.

On répète cette opération jusqu'à trouver la valeur recherchée ou jusqu'à arriver à un noeud qui n'a pas de fils dans la direction où l'on souhaite continuer la recherche. Dans ce cas, on peut conclure que la valeur recherchée n'est pas dans l'arbre.

L'intérêt de la recherche dans un arbre binaire de recherche est que l'on peut exclure une partie de l'arbre à chaque étape de la recherche. Cela permet de réduire le nombre de comparaisons nécessaires pour trouver un élément dans l'arbre. C'est ce qui rend la recherche dans un arbre binaire de recherche efficace. C'est une complexité en $O(log(n))$.

### Suppression

La suppression dans un arbre binaire de recherche est plus complexe que l'insertion et la recherche. Il faut faire attention à ne pas casser la relation d'ordre entre les noeuds.

Il existe trois cas de figure:

1. Le noeud à supprimer est une feuille: il suffit de supprimer le noeud.
2. Le noeud à supprimer a un seul fils: il suffit de supprimer le noeud et de le remplacer par son fils.
3. Le noeud à supprimer a deux fils: il faut trouver le noeud qui va remplacer le noeud à supprimer tout en conservant la relation d'ordre entre les noeuds.

Dans le cas 3, il faut faire attention à ne pas casser la relation d'ordre entre les noeuds. Je rappelle que pour chaque noeud, toutes les valeurs des noeuds du sous-arbre gauche sont inférieures à la valeur du noeud et toutes les valeurs des noeuds du sous-arbre droit sont supérieures à la valeur du noeud. Pour conserver cette relation d'ordre, il faut alors que le noeud qui remplace le noeud à supprimer soit plus grand que tous les noeuds du sous-arbre gauche ou plus petit que tous les noeuds du sous-arbre droit.

On va donc par exemple chercher le noeud le plus à gauche du sous-arbre droit. Ce noeud est le plus petit noeud du sous-arbre droit. Il est donc plus grand que tous les noeuds du sous-arbre gauche et plus petit que tous les noeuds du sous-arbre droit. Il peut donc remplacer le noeud à supprimer tout en conservant la relation d'ordre entre les noeuds.

## Une multitude d'arbres binaires

Il existe une multitude d'arbres binaires différents qui ont des propriétés différentes. Cela permet de s'adapter à différents cas d'utilisation.

Par exemple, dans le cadre d'une recherche, on peut vouloir que l'arbre soit le plus équilibré possible (c'est à dire que la hauteur de l'arbre soit la plus petite possible). Cela permet de réduire le nombre de comparaisons nécessaires pour trouver un élément dans l'arbre. C'est le cas des arbres binaires de recherche **AVL**. Cela nous force à implémenter des algorithmes d'insertion et de suppression plus complexes pour maintenir l'équilibre de l'arbre.

Dans d'autres cas, on peut vouloir privilégier la rapidité d'insertion et de suppression. C'est le cas des arbres binaires de recherche **Rouge-Noir**. C'est un autre type d'arbre binaire de recherche qui permet de maintenir un arbre équilibré mais qui ne garantit pas à tout moment que l'arbre soit le plus équilibré possible. Cela permet de simplifier les algorithmes d'insertion et de suppression tout en restant efficace la majorité du temps.

## Résumé

- Un **arbre** est une **structure de données** qui permet de représenter des données hiérarchiques.
- Un arbre est composé de **noeuds**. Chaque noeud peut avoir un nombre quelconque de fils. Un noeud qui n'a pas de fils est appelé une feuille.
- Un arbre est composé d'un **noeud racine** qui est le noeud de départ de l'arbre. Il est possible d'accéder à tous les autres noeuds de l'arbre à partir du noeud racine.
- La **profondeur** d'un noeud est le nombre de noeuds qui le séparent du noeud racine.
- La **hauteur** d'un arbre est la profondeur maximale de ses noeuds. C'est à dire la profondeur du noeud le plus profond.
- Un **arbre binaire** est un arbre dont chaque noeud a au **maximum deux fils**. Un fils **gauche** et un fils **droit**.
- Un **arbre binaire** peut être représenté par une **structure récursive** (C'est à dire une structure qui contient des éléments de son propre type) ou par un tableau.
- Un **arbre binaire de recherche** est un arbre binaire qui a la particularité d'être **ordonné**. On va imposer un ordre sur les valeurs des noeuds de l'arbre. Cela va permettre de faire des recherches efficaces dans l'arbre.
- Il existe une multitude d'arbres binaires différents qui ont des propriétés différentes. Cela permet de s'adapter à différents cas d'utilisation (pour optimiser la recherche, l'insertion, la suppression, etc...)
