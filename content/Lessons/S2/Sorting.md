---
title: algorithmes de tri, complexité et recherche dichotomique
tags:
    - C++

sidebar_position: 3
---

export const Array = ({values, boldIndices}) => (
    <div style={{display: "flex", justifyContent: "center"}}>
    <table>
    <tbody>
    <tr>
        {values.map((value, i) =>(
            <td style={{fontWeight: boldIndices && boldIndices.includes(i) ? 'bold' : 'normal'}} key={i} >{value}</td>
        ))}
    </tr>
    </tbody>
    </table>
    </div>
);

Les algorithmes de tri sont des algorithmes qui permettent de **trier des données**. Ils sont très utilisés en informatique, et il en existe de nombreux. Dans ce cours, nous allons voir les plus connus pour comprendre leur fonctionnement et leur intérêt.

Comment trier un tableau de nombres ? C'est une question qui peut paraître simple, mais qui est en fait assez complexe. Il existe de nombreux algorithmes de tri, et chacun a ses avantages et ses inconvénients.

Commençons par un exemple simple.

## Tri par sélection

L'algorithme de tri par sélection est un algorithme de tri qui consiste à trouver le plus petit élément du tableau, et à le placer en première position (ou le plus grand élément en dernière position). On répète cette opération jusqu'à ce que le tableau soit trié.

Un exemple, avec le même tableau `[6, 2, 8, 1, 5, 3, 9]`:

1. On, parcourt le tableau pour trouver le plus petit élément, qui est `1`.

    son indice est `3`, on l'échange avec l'élément à l'indice `0` (le premier élément du tableau).

    <Array values={[2, 8, 1, 5, 3, 9, 6]}  boldIndices={[0, 3]} />

    le premier élément du tableau est désormais le plus petit élément du tableau. On recommence l'opération, mais en ignorant le premier élément du tableau, car il est déjà trié.

    :::info
    Toute l'astuce de cet algorithme est donc de trier un sous-tableau plus petit à chaque itération jusqu'à ce que le tableau soit trié.
    :::

Voilà les itérations suivantes:

1. <Array values={[1, 8, 2, 5, 3, 9, 6]}  boldIndices={[0, 2]} />
2. <Array values={[1, 2, 8, 5, 3, 9, 6]}  boldIndices={[1, 2]} />
3. <Array values={[1, 2, 3, 5, 8, 9, 6]}  boldIndices={[2, 4]} />
4. A cette étape, l'élément à l'indice `4` est déjà le plus petit (des éléments non triés), donc on ne fait rien.
5. <Array values={[1, 2, 3, 5, 6, 9, 8]}  boldIndices={[4, 6]} />
6. <Array values={[1, 2, 3, 5, 6, 8, 9]}  boldIndices={[5, 6]} />

Voilà, le tableau est trié.

## Tri à bulles (bubble sort)

Le tri à bulles est un autre algorithme de tri très connu.
Il consiste à **comparer** deux à deux les éléments du tableau, et à les échanger si ils ne sont pas dans le bon ordre. On répète cette opération jusqu'à ce que le tableau soit trié.

:::note
Cela va avoir pour effet de faire "**remonté**" les plus grands éléments du tableau vers la fin du tableau, comme des bulles d'air qui remontent à la surface.
:::

Un exemple, avec le même tableau `[6, 2, 8, 1, 5, 3, 9]`:

1. On compare les deux premiers éléments du tableau, `6` et `2`. Comme `6` est plus grand que `2`, on les échange.

    <Array values={[2, 6, 8, 1, 5, 3, 9]}  boldIndices={[0, 1]} />

On recommence l'opération avec les deux éléments suivants, `6` et `8`. Comme `6` est plus petit que `8`, on ne fait rien.
On procède ainsi jusqu'à la fin du tableau.

On obtient après un premier passage sur l'ensemble du tableau:

<Array values={[2, 6, 1, 5, 3, 8, 9]} />

On recommence l'opération, mais en ignorant le dernier élément du tableau, car il est déjà trié.

Voilà les itérations suivantes:

1. <Array values={[2, 1, 5, 3, 6, 8, 9]} />
2. <Array values={[1, 2, 3, 5, 6, 8, 9]} />
3. Dernier passage, aucun échange n'est effectué. Le tableau est trié.

## Parlons un peu de complexité

La complexité d'un algorithme est une **mesure** de la quantité de ressources (temps, mémoire, etc) que celui-ci va utiliser pour s'exécuter.

En général, on s'intéresse à la complexité **en fonction de la taille** des données en entrée de l'algorithme.

Il existe plusieurs types de complexité, la plus souvent utilisée est la **complexité en temps**.

Cela revient à se poser la question:

**Si je donne à mon programme une entrée de taille `N`, quel est l'ordre de grandeur, en fonction de `N`, du nombre d'opérations qu'il va effectuer ?**

:::note
La complexité permet de **quantifier** la relation entre les conditions de départ et le temps effectué par l'algorithme.
:::

### Opérations de base

Pour "compter les opérations", il faut décider de ce qu'est une **opération**. Ce choix dépend du problème (et même de l'algorithme) considéré. Il faut en fait choisir soi-même quelques petites opérations que l'algorithme effectue souvent, et que l'on veut utiliser comme opérations de base pour mesurer la complexité. Les opérations qui caractérise le mieux l'algorithme et **représente le mieux le temps d'exécution** de celui-ci. Les opération de base sont souvent les opérations **arithmétiques**, les **comparaisons**, les **affectations**, etc. Par exemple, pour un algorithme de tri, on va compter le nombre de **comparaisons** et d'**échanges** d'éléments du tableau.

En fonction des algorithmes, certaines opérations peuvent être plus significatives que d'autres. Par exemple, la multiplication est plus coûteuse que l'addition, on peut donc ne considérer que les opérations de multiplication pour mesurer la complexité d'un algorithme.

:::info
On ne compte pas les opérations qui ne dépendent pas de la taille des données en entrée (comme l'initialisation de variables, etc).
Ces opérations sont considérées comme constantes et pas significatives pour la complexité en fonction de la taille des données en entrée.
:::

### Notation "grand O"

On exprime la complexité en fonction de la taille des données en entrée avec la notation **"grand O"**.
La notation **"grand O"** est une notion mathématique qui permet d'exprimer un ordre de grandeur.

Par exemple, des algorithmes effectuant environ $N$ opérations, $2N+20$ opérations ou $N/2$ opérations ont tous la même complexité : on la note $O(N)$ (lire "grand O de N"). De même, un algorithme en $3N2 + 4N + 2$ opérations aura une complexité de $O(N2)$ : on néglige les termes de plus faible degré (ici $4N$ et $2$) et les coefficients (ici $3$).
On cherche seulement à savoir comment **évolue** le nombre d'opérations en fonction de la taille des données en entrée et on considère le terme de plus haut degré qui est celui qui va croître le plus vite en fonction de la taille des données en entrée.

### Tri par sélection

Prenons l'exemple du tri par sélection.

Pour trier un tableau de taille $n$, premièrement on parcourt le tableau pour trouver le plus petit élément, on va donc effectuer $n$ comparaisons.

Ensuite, on va échanger cet élément avec le premier élément du tableau, on va donc effectuer $1$ échange.

Ensuite on va recommencer l'opération, mais en ignorant le premier élément du tableau, car il est déjà trié.

On va donc effectuer $n-1$ comparaisons et $1$ échange.

On va faire cela jusqu'à ce que le tableau soit trié, donc jusqu'à ce qu'il ne reste plus qu'un seul élément à trier.

Pour résumer, on va effectuer pour les différentes itérations:

- $n$ comparaisons et $1$ échange
- $n-1$ comparaisons et $1$ échange
- $n-2$ comparaisons et $1$ échange
- ...
- $1$ comparaison et $1$ échange

On peut donc calculer le nombre total de comparaisons et d'échanges effectués par l'algorithme:

$$
\begin{align*}
= & (n+1) + ((n-1)+1) + ((n-2)+1) + ... + (1+1) \\
= & (n + (n-1) + \dots + 1) + (1 + \dots + 1) \\ 
= & \frac{n(n+1)}{2} + n \\
= & \frac{n^2 + 3n}{2} \\
\end{align*}
$$

Ici, j'ai compté de manière exacte le nombre d'**opérations** effectuées par l'algorithme, mais en général on s'intéresse à la complexité en fonction de la taille des données en entrée.

On va donc garder uniquement le terme de plus haut degré, ici $n^2$.

**On dit que la complexité du tri par sélection est en $O(n^2)$.**

:::info
On peux aussi évaluer cette complexité sans calcul exact, mais plutôt en estimant le nombre d'opérations effectuées par l'algorithme.

On peut voir que l'algorithme doit à chaque itération parcourir le tableau, c'est ce qui va prendre le plus de temps et dépendra de la taille du tableau.

Chaque itération va permettre de trier **un** élément du tableau, donc on va effectuer $n$ itérations.

On peut donc estimer que la complexité du tri par sélection est en $O(n \times n) = O(n^2)$.
:::

### Complexité dans le pire des cas

Le nombre d'opérations effectuées par un algorithme peut dépendre de la taille des données en entrée, mais aussi des données elles-mêmes.

Par exemple, dans le cadre d'un **tri à bulles**, si le tableau est déjà trié, on n'effectuera aucune opération d'échange, et seulement $n$ comparaisons.

On peut donc dire que la complexité du tri à bulles est en $O(n)$ dans le meilleur des cas.

Mais si le tableau est trié dans l'**ordre inverse**, on va effectuer $n$ comparaisons et $n$ échanges à chaque itération, et on va effectuer $n$ itérations.

On peut donc dire que la complexité du **tri à bulles** est en $O(n \times n) = O(n^2)$ dans le pire des cas.

:::note
C'est intéressant de s'intéresser à la complexité dans le pire des cas, car elle permet de savoir si l'algorithme est efficace pour toutes les données possibles. l’intérêt de considérer le pire des cas vient du fait que pour des données quelconques, on ne peut pas savoir si elles sont favorables ou non à l'algorithme et c'est en général assez proche du comportement dans le pire des cas.
:::

### Complexité en moyenne
On peut aussi s'intéresser à la complexité en **moyenne**, c'est-à-dire la complexité sur toutes les données possibles.

Par exemple, pour le **tri à bulles**, on peut montrer que la complexité en moyenne est en $O(n^2)$.

Il existe des algorithmes qui ont une complexité en **moyenne** bien **meilleure** que leur complexité dans le **pire des cas**. Cela dépend du problème considéré et demande une analyse plus fine de l'algorithme.

### Complexité en mémoire

On peut aussi s'intéresser à la complexité en **mémoire** d'un algorithme. Autrement dit, combien de mémoire va utiliser l'algorithme en fonction de la taille des données en entrée.

C'est aussi une mesure de la complexité tout aussi pertinente que la complexité en temps.

Si par exemple on a besoin de trier un tableau de 1000 éléments, on peut se dire que la complexité en temps n'est pas très importante, car l'algorithme va s'exécuter très rapidement. Mais si l'algorithme utilise **beaucoup de mémoire**, cela peut poser problème, car on peut ne **pas avoir assez de mémoire disponible** pour exécuter l'algorithme.

Dans la plupart des cas, la complexité en mémoire est beaucoup plus simple à calculer que la complexité en temps.

Mais dans des problèmes plus compliqués, la complexité en **mémoire** et la complexité en **temps** peuvent être **liées**.

On peut par exemple choisir de sacrifier un peu de rapidité d'exécution pour utiliser moins de mémoire, ou au contraire d'augmenter la vitesse en augmentant la complexité en mémoire de notre algorithme, par exemple en stockant dans un tableau les résultats déjà calculés (c'est le principe de la mise en cache, appelée aussi *memoization*).

### Limitation de la complexité

La complexité d'un algorithme est donc une mesure d'**ordre de grandeur** en fonction de la taille des données en entrée.

Cependant, il est important de garder à l'esprit que la complexité ne permet pas de savoir si un algorithme est **rapide** ou **lent**.

Même si un algorithme à une complexité plus faible qu'un autre, il peut être plus (beaucoup plus) lent à s'exécuter qu'un autre algorithme pour des tailles de données en entrée faibles.

:::caution
La complexité permet de comparer des algorithmes entre eux, donner une tendance en fonction de l'augmentation la taille des données en entrée, mais ne permet pas de savoir si un algorithme est plus rapide qu'un autre pour des tailles de données en entrée faibles.
:::

## Tri fusion (merge sort)

Le tri fusion est un algorithme de tri qui consiste à **diviser** le tableau en deux parties égales, **trier** les deux parties, puis **fusionner** les deux parties triées.

Le tri fusion est un algorithme efficace, car il a une complexité en $O(n \times log(n))$.

C'est un algorithme "**récursif**", c'est-à-dire qu'il s'appelle lui-même pour trier deux sous-tableaux et les fusionner pour trier le tableau complet.

Il y a donc deux "phases" dans cet algorithme:
- la phase de **division** du tableau en deux parties égales
- la phase de **fusion** des deux parties triées

### Phase de division

Il existe deux façons de procéder pour diviser le tableau en deux parties égales:
- Créer des **tableaux intermédiaires** pour stocker les deux parties du tableau à trier, puis fusionner les deux tableaux triés.
- Utiliser des **indices** pour définir les parties du tableau à trier, et trier directement le tableau en place.

La première méthode est plus simple à comprendre, mais utilise plus de mémoire, car il faut créer des tableaux intermédiaires.

On privilégie donc la deuxième méthode, et c'est celle que je vais détailler ici.

Pour trier un tableau, on va donc utiliser deux indices, un indice de **début** et un indice de **fin**, qui vont définir la **partie du tableau** à trier.

Par exemple, pour le tableau `[6, 2, 8, 1, 5, 3, 9]`, on va utiliser les indices `0` et `6` pour trier le tableau complet.

On va calculer la taille de la partie du tableau à trier, ici `6` (indice de fin) - `0` (indice de début) + `1` (car on compte l'élément à l'indice de fin), soit `7`.

On va ensuite diviser cette taille par deux, soit `3` (on peut arrondir à l'entier inférieur).

On va donc utiliser par récursion les indices `0` et `3` pour trier la première partie du tableau, et les indices `4` et `6` pour trier la deuxième partie du tableau.

Enfin on va fusionner les deux parties triées pour trier le tableau complet.

### Phase de fusion

C'est la phase de **fusion** qui est la plus intéressante, car c'est elle qui va permettre de trier le tableau.

Pour fusionner deux tableaux triés, on va utiliser deux (autres) **indices**, un indice pour chaque tableau, qui vont permettre de parcourir les deux tableaux.

On va comparer les éléments des deux tableaux, et ajouter le plus petit des deux dans le tableau final.

On va incrémenter l'indice du tableau dont on a ajouté l'élément, et on recommence l'opération jusqu'à ce qu'on ait parcouru les deux tableaux.

:::caution
Il faut faire attention à ne pas dépasser la taille des sous-tableaux avec les indices, sinon on va avoir une erreur en essayant d'accéder à un élément qui n'existe pas.

Il faut donc vérifier que les indices sont bien inférieurs à la taille des sous-tableaux.

Si l'un des deux indices est égal à la taille du sous-tableau, cela veut dire qu'on a parcouru tout le sous-tableau, et qu'il ne reste plus qu'à ajouter les éléments du deuxième sous-tableau dans le tableau final.
:::

On obtient ainsi un tableau trié.

:::info
La **condition d'arrêt** de la récursion est quand la taille de la partie du tableau à trier est inférieure ou égale à `1`, car un tableau de taille `1` est déjà trié.
:::

## Tri rapide (quick sort)

Le tri rapide est un algorithme de tri qui consiste à choisir un élément du tableau, appelé **pivot**, et à placer tous les éléments plus petits que le pivot à gauche du pivot, et tous les éléments plus grands que le pivot à droite du pivot.

On répète ensuite l'opération sur les deux sous-tableaux, jusqu'à ce que le tableau soit trié.

De la même manière que pour le tri fusion, c'est un algorithme **récursif** et on va donc utiliser des indices pour définir les parties du tableau à trier.

Il y a également deux phases dans cet algorithme:
- la phase de **division** du tableau en deux parties en fonction du pivot
- la phase de **tri** des deux parties

### Phase de division

#### Choix du pivot

Le choix du pivot est très important, car il va déterminer la complexité de l'algorithme.

Si on choisit un pivot qui est toujours le plus petit élément du tableau, on va avoir une complexité en $O(n^2)$, car on va devoir parcourir tout le tableau à chaque itération (de même si on choisit le plus grand élément du tableau).

Il existe plusieurs méthodes pour choisir le pivot, la plus simple est de choisir le premier élément du tableau. Mais cela peut être problématique si le tableau est déjà trié car on va diviser le tableau en deux parties de tailles très différentes.

:::info
L'idéal est de choisir un pivot qui est proche de la valeur médiane du tableau, c'est-à-dire qui va diviser le tableau en deux parties égales.

Il existe plusieurs méthodes pour choisir un pivot proche de la valeur médiane du tableau, mais elles sont plus compliquées à mettre en oeuvre.
:::

Nous allons préférer choisir un pivot aléatoire ou plus simplement l'élément au milieu du sous-tableau considéré pour minimiser les risques de cas défavorables.

#### Partitionnement

Une fois le pivot choisi, on va parcourir le tableau et placer tous les éléments plus petits que le pivot à gauche du pivot, et tous les éléments plus grands que le pivot à droite du pivot.

Il y a plusieurs approche pour gérer le pivot, dans notre cas, on va choisir de premièrement placer le pivot à la fin du tableau.

Pour cela, on va utiliser **deux indices**, un indice pour parcourir le tableau de gauche à droite, et un indice pour parcourir le tableau de droite à gauche.

On va **incrémenter** l'indice de **gauche** tant que l'élément est **plus petit** que le pivot, et on va **décrémenter** l'indice de **droite** tant que l'élément est **plus grand** que le pivot.

Si l'indice de gauche est inférieur à l'indice de droite, on va **échanger** les deux éléments et on recommence l'opération.

Une fois que les deux indices se sont croisés, on sait que tous les éléments plus petits que le pivot sont à gauche du pivot, et tous les éléments plus grands que le pivot sont à droite du pivot.

Enfin, on va **échanger** le pivot avec l'élément à l'indice de gauche (l'indice pointant sur le premier élément plus grand que le pivot) pour que le pivot soit à sa place définitive.

#### Récursion

On obtient ainsi un tableau avec le pivot à sa place définitive, et tous les éléments plus petits que le pivot à gauche du pivot, et tous les éléments plus grands que le pivot à droite du pivot et on connaît l'indice du pivot.

On va donc pouvoir appeler récursivement l'algorithme sur les deux sous-tableaux, en ignorant le pivot.

## Tri par dénombrement (counting sort)

Un tri intéressant est le tri par dénombrement (ou **counting sort** en anglais). Il est très efficace, car il va permettre de trier un tableau en complexité **linéaire**, c'est-à-dire en $O(n)$. Il ne fonctionne cependant que pour des données **entières** car il ne se base pas sur des comparaisons mais va compter le nombre d'occurrences de chaque valeur (de plus pour simplifier, on va supposer que les valeurs sont positives).

Le **prérequis** pour utiliser cet algorithme est donc de connaître la valeur **maximale** des données à trier. Soit on connaît cette valeur à l'avance, soit on peut la calculer en parcourant le tableau une première fois.

L'algorithme consiste à compter le nombre d'occurrences de chaque valeur dans le tableau, puis à reconstruire le tableau en plaçant les valeurs dans l'ordre.

Par exemple, si on se fixe des valeurs entières entre 0 et 9, on peut trier le tableau suivant `[1, 4, 1, 2, 7, 5, 2]` en procédant ainsi:

1. On parcourt le tableau pour compter le nombre d'occurrences de chaque valeur.

| valeur | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|--------|---|---|---|---|---|---|---|---|---|---|
| nombre d'occurrences | 0 | 2 | 2 | 0 | 1 | 1 | 0 | 1 | 0 | 0 |

2. On reconstruit le tableau en parcourant le tableau des occurrences et en ajoutant les valeurs dans l'ordre.

- On ajoute 2 fois la valeur `1`
- On ajoute 2 fois la valeur `2`
- ...

On obtient ainsi le tableau trié `[1, 1, 2, 2, 4, 5, 7]`.

:::caution
On remarque qu'il faut pouvoir stocker le nombre d'occurrences de chaque valeur, donc un tableau de taille 10 dans notre exemple.
Il faut donc un tableau de taille $k$ pour trier des données comprises entre 0 et $k-1$ ce qui augmente la complexité en **mémoire** de l'algorithme.

C'est à prendre en compte si on veut utiliser cet algorithme car il peut être très efficace en temps, mais peut aussi utiliser beaucoup de mémoire si les valeurs sont très grandes.

**C'est un algorithme à utiliser seulement dans le cas où on connaît la valeur maximale des données à trier et que cette valeur est raisonnable.**
:::

## Pour aller plus loin:
<details>

### Tri par dénombrement stable

On peux améliorer le tri par dénombrement en le rendant **stable**. Cela signifie que si deux éléments ont la même valeur, ils seront dans le même ordre dans le tableau trié que dans le tableau initial. Cela ne semble pas très important à première vue, mais cela permet de trier des données plus complexes et leur associant des valeurs entières sur lesquelles on va effectuer le tri.

POur faire cela il faut modifier légèrement l'algorithme de tri par dénombrement.

Une fois qu'on a compté le nombre d'occurrences de chaque valeur, on va calculer la somme partielle des occurrences de chaque valeur. Cela va nous permettre de connaître la position de chaque valeur dans le tableau trié.

Par exemple, si on se fixe des valeurs entières entre 0 et 9 et le tableau suivant `[1, 4, 1, 2, 7, 5, 2]`:
- On compte le nombre d'occurrences de chaque valeur et on obtient le tableau suivant: `[0, 2, 2, 0, 1, 1, 0, 1, 0, 0]`
- On calcule la somme partielle des occurrences de chaque valeur et on obtient le tableau suivant: `[0, 2, 4, 4, 5, 6, 6, 7, 7, 7]`

:::note
On peut se resservir du tableau des occurrences pour stocker la somme partielle des occurrences de chaque valeur, ce qui permet de ne pas utiliser de tableau intermédiaire supplémentaire.
:::

On va construire un nouveau tableau de même taille que le tableau initial, et on va parcourir le tableau initial pour ajouter les valeurs dans le nouveau tableau. On va ajouter la valeur à la position indiquée par la somme partielle des occurrences de la valeur, puis on va décrémenter la somme partielle des occurrences de la valeur.

Par exemple, pour la valeur `1`, on va ajouter la valeur `1` à la position `2` du nouveau tableau, puis on va décrémenter la somme partielle des occurrences de la valeur `1` pour obtenir `1` (car il reste une occurrence de la valeur `1`).

On obtient ainsi le tableau trié `[1, 1, 2, 2, 4, 5, 7]`.

L'inconvénient principal de cette méthode est qu'il faut un tableau intermédiaire pour stocker le tableau trié, ce qui augmente la complexité en mémoire de l'algorithme.

### tri base (radix sort)

Le tri par dénombrement permet de trier des données entières comprises entre 0 et $k-1$ en complexité linéaire.

On va se servir de cet algorithme pour trier des données plus complexes, en associant à chaque donnée une valeur entière sur laquelle on va effectuer le tri (d'où l'intérêt de rendre le tri par dénombrement stable).

On va considérer un tri de nombres entiers, mais cela peut s'appliquer à d'autres types de données.

Un nombre entier peut être représenté en base `10`, c'est-à-dire en utilisant les chiffres de `0` à `9`.

Par exemple, le nombre `123` peut être représenté en base `10` par la suite de chiffres `1`, `2` et `3`.

On va donc pouvoir trier des nombres entiers en triant les chiffres de leur représentation en base `10`.

Par exemple, pour trier les nombres `[123, 456, 789, 321, 654, 987]`, on va trier les chiffres des nombres, en commençant par les centaines, puis les dizaines et enfin les unités.

Cela permet de trier les nombres en complexité linéaire grâce au tri par dénombrement.

Dans notre exemple, le nombre le plus grand est `987`, il a donc `3` chiffres, on va donc effectuer `3` itérations de tri par dénombrement pour trier les nombres.

:::note
Cette information peut être connue à l'avance, mais on peut aussi la calculer en parcourant le tableau une première fois.
:::

1. On trie les centaines ce qui donne `[123, 321, 456, 654, 789, 987]`
2. On trie les dizaines ce qui donne `[123, 321, 456, 654, 789, 987]`
3. enfin, on trie les unités ce qui donne `[123, 321, 456, 654, 789, 987]`

</details>

## Recherche dichotomique

Avoir un tableau trié est très utile pour effectuer des recherches dans un tableau.

Par exemple, si on veut savoir si une valeur est présente dans un tableau, on peut parcourir le tableau et comparer chaque élément avec la valeur recherchée.

Mais si le tableau est trié, on peut utiliser une méthode plus efficace: la **recherche dichotomique**.

La **recherche dichotomique** consiste à diviser le tableau en deux parties égales et à ne garder que la partie qui contient la valeur recherchée. On répète l'opération jusqu'à trouver la valeur ou jusqu'à ce qu'il ne reste plus qu'un seul élément dans le tableau.

Exemple simple avec le tableau suivant `[1, 2, 2, 4, 5, 8, 12]` (nombre d'éléments: 7) et la valeur recherchée `8`:

1. On calcule l'indice du milieu du tableau, soit `3`.

    On compare la valeur à l'indice `3` avec la valeur recherchée `8`, comme `4` est plus petit que `8`, on ne garde que la partie du tableau qui contient la valeur recherchée, c'est-à-dire la partie du tableau à partir de l'indice `4` (indice de début: `4`, indice de fin: `6`).

    On recommence l'opération avec la partie du tableau restante.

2. Sous partie du tableau: `[4, 8, 12]` (nombre d'éléments: 3), indice du milieu: `5`.

    On compare la valeur à l'indice `5` avec la valeur recherchée `8`, comme `8` est égal à `8`, on a trouvé la valeur recherchée.

    On peut donc s'arrêter et renvoyer l'indice `5`.

## Résumé

- Les **algorithmes de tri** sont très importants en informatique, car ils permettent de trier des données, ce qui est une opération très courante.
- La complexité d'un algorithme est une **mesure** de la quantité de ressources (**temps**, **mémoire**, etc) que celui-ci va utiliser pour s'exécuter.
- La **complexité en temps** permet de **quantifier** la relation entre les **conditions de départ** (**nombre d'éléments** du tableau, valeurs des éléments, etc) et le **temps** effectué par l'algorithme.
- La **complexité** permet de **comparer** plusieurs algorithmes entre eux mais ne permet pas de savoir si un algorithme est **rapide** ou **lent**.
- Nous avons vu les algorithmes de tri suivants:
    - **Tri par sélection** (selection sort): $O(n^2)$
        > C'est un algorithme qui fonctionne par **recherche successive** du plus petit élément du tableau.
    - **Tri à bulles** (bubble sort): $O(n^2)$
        > C'est un algorithme qui fonctionne par **comparaison successive** de deux éléments consécutifs du tableau.
    - **Tri fusion** (merge sort): $O(n \times log(n))$
        > C'est un algorithme qui fonctionne par récursion en **divisant** le tableau en deux parties égales, en triant les deux parties, puis en **fusionnant** les deux parties triées.
    - **Tri rapide** (quick sort): $O(n \times log(n))$
        > C'est un algorithme qui fonctionne par récursion en choisissant un **pivot**, en divisant le tableau en deux parties en fonction du pivot, puis en triant les deux parties.
    - **Tri par dénombrement** (counting sort): $O(n)$
        > C'est un algorithme qui fonctionne en comptant le nombre d'occurrences de chaque valeur, puis en reconstruisant le tableau en plaçant les valeurs dans l'ordre.
        > C'est un algorithme qui ne fonctionne que pour des données **entières** et où la valeur maximale des données est connue à l'avance et relativement petite.
- La **recherche dichotomique** est une méthode de recherche dans un tableau trié qui consiste à diviser le tableau en deux parties égales et à ne garder que la partie qui contient la valeur recherchée. On répète l'opération jusqu'à trouver la valeur souhaitée.
