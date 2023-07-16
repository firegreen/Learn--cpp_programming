---
title: Un monde de variables
tags:
    - C++

sidebar_position: 2
---

# Introduction

Maintenant que l'on sait exécuter notre premier programme il est temps de découvrir ce que l'on va pouvoir manipuler en C++.

# Les littéraux

## Les caractères
En effet, la phrase **"Hello and welcome to IMAC !"** précédemment rencontrée représente simplement du texte.
C'est ce qu'on appelle une **chaîne de caractères**.

Qui dit **chaîne de caractères** dit **caractères** et il est également possible de représenter un unique caractère avec des guillemets simples **'**.

```cpp
#include <iostream>

int main() {
    std::cout << 'a' << std::endl;
    std::cout << '7' << std::endl;
    std::cout << '?' << std::endl;
    return 0;
}
```

```cpp
#include <iostream>

int main() {
    std::cout << 'H' << 'e'  << 'l' << 'l' << 'o' << ' ' << 'I' << 'M' << 'A' << 'C' << '!' << std::endl;
    return 0;
}
```

On pourrait simplement se contenter de caractères me direz vous mais c'est un peu fastidieux et les chaînes de caractères sont donc là pour nous simplifier la vie.

```cpp
#include <iostream>

int main() {
    std::cout << "Hello IMAC!" << std::endl;
    return 0;
}
```

:::note
On différencie les caractères simples (utilisants des <kbd>'</kbd>) des chaines de caractères par les guillements <kbd>"</kbd>.
:::

###  Les caractères spéciaux

Avez vous une idée de comment afficher des guillements ?

```cpp
#include <iostream>

int main() {
    std::cout << "Hello "IMAC"!" << std::endl;
    return 0;
}
```

Si j'essaie d'utiliser des guillemets cela va planter comme dans l'exemple ci-dessus.

En effet, les guillements permettent déjà de signaler le début et la fin d'une chaîne de caractères.

C'est également le cas quand on essaye de représenter un chemin de dossier au format Windows, par exemple, avec le chemin de fichier "C:\Program Files" et on obtient une erreur du type ```warning: unknown escape sequence: '\P'```.

Il existe en **C++** des **caractères** dits **spéciaux**, appelés séquences d’échappement. Le symbole <kbd>\</kbd> permet d'indiquer au compilateur d’afficher et non interpréter ces caractères.

Il faut donc préfixer les guillements du caractère <kbd>\</kbd> pour pouvoir les afficher:
```cpp
#include <iostream>

int main() {
    std::cout << "Hello \"IMAC\"!" << std::endl;
    return 0;
}
```

Vous pouvez trouver tous les caractères d'échappement [ici](https://en.cppreference.com/w/cpp/language/escape).

Voilà les plus utiles en pratique:

- <kbd>\'</kbd> qui permet d’afficher un guillemet simple <kbd>'</kbd>
- <kbd>\"</kbd> qui permet d’afficher un guillemet double <kbd>"</kbd>
- <kbd>\n</kbd> qui permet d’aller à la ligne, comme std::endl
- <kbd>\t</kbd> qui permet de faire une tabulation horizontale
- <kbd>\\</kbd> qui permet d’afficher un antislash <kbd>\</kbd>

## Les nombres 

On peut également manipuler des nombres.

```cpp
#include <iostream>

int main() {
    std::cout << -1 << std::endl;
    std::cout << 0 << std::endl;
    std::cout << 42 << std::endl;
    return 0;
}
```

On les appelle **nombres entiers** mais il est aussi possible d'utiliser des nombres à virgule, appelés **flottants**.

```cpp
#include <iostream>

int main() {
    std::cout << 3.141593 << std::endl;
    std::cout << -1.5 << std::endl;
    return 0;
}
```

:::info
On remarque que l'on peut utiliser des **nombres négatifs** sans aucun problème. On y reviendra un peu plus tard.
:::

Concernant les nombres (entiers ou flottants) les **opérateurs arithmétiques** usuels sont utilisables:

| Opérateur | Description                     |
|-----------|---------------------------------|
| +         | Addition                        |
| -         | Soustraction                    |
| *         | Multiplication                  |
| /         | Division                        |
| %         | Modulo (reste de la division)   |

```cpp
#include <iostream>

int main() {
    std::cout << "Opérateurs arithmétiques :" << std::endl;
    std::cout << "Addition: 1 + 2 = " << 1 + 2 << std::endl;
    std::cout << "Soustraction: 6 - 2 = " << 6 - 2 << std::endl;
    std::cout << "Multiplication: 3.14 * 2 = " << 3.14 * 2 << std::endl;
    std::cout << "Division: 42.5 / 3.2 = " << 42.5 / 3.2 << std::endl;
    std::cout << "Modulo: 7 % 3 = " << 7 % 3 << std::endl;

    std::cout << "5 / 2 = " << 5 / 2 << std::endl;
    std::cout << "5. / 2 = " << 5. / 2 << std::endl;

    return 0;
}
```

C'est aussi vrai pour les règles de **distributivité**, **associativité**, **commutativité** ou **priorité des opérateurs**, rien de bien étonnant me direz vous.

```cpp
#include <iostream>

int main() {
    td::cout << "Associativité :" << std::endl;
    std::cout << "2 + (3 + 6) = " << 2 + (3 + 6) << std::endl;
    std::cout << "(2 + 3) + 6 = " << (2 + 3) + 6 << std::endl;
 
    std::cout << "Distributivité :" << std::endl;
    std::cout << "2 * (4 + 3) = " << 2 * (4 + 3) << std::endl;

    std::cout << "Priorité des opérateurs :" << std::endl;
    std::cout << "42 * 3 + (2 + 8 / 4) = " << 42 * 3 + (2 + 8 / 4) << std::endl;
    
    return 0;
}
```

:::caution
Ne remarquez vous pas quelque chose d'étonnant ? ```5 / 2``` et ```5. / 2``` ne donne pas la même chose ?

La raison est que pour le **C++**, si on fait une opération sur deux nombres entiers, le résultat doit **rester** un nombre entier.

Si l’on veut que le résultat soit un flottant, il faut qu’**au moins un des deux** nombres soit un flottant.

C'est pour cela d'ailleurs que mon exemple ```3.14 * 2``` fonctionne bien car au moins un des deux nombres est un flottant et le résultat est donc un flottant également.
:::

Pour résumer, toutes ces valeurs écrites dans notre code s'appellent des **littéraux**.

# Les variables

Les littéraux c'est sympa mais comment faire si l'on veut se resservir d'un résultat précédemment calculé ? C'est avec les **variables** que l'on va pouvoir faire ça !

C’est un concept commun à beaucoup de langages de programmation qui permet de stocker une valeur et de lui associer un nom, afin de pouvoir l'identifier et la manipuler facilement.

Nous ne rentrons pas dans le détail de comment sont stockées ces valeurs dans l'ordinateur car ce n'est pas le propos ici.

## Créer une variable

Pour déclarer une variable en **C++**, il faut trois choses:

- Préciser d'abord son **type**, qui indique ce que la variable va stocker (un **entier**, un **flottant**, une **chaîne de caractères**, **etc**)
- Un **nom** qui permer d'identifier la variable
- Enfin, la valeur à stocker dans notre variable. Ceci se fait en mettant le **littéral** entre accolades **{ }**

```cpp
#include <iostream>
#include <string>

int main() {
    int number { 42 };
    char letter { 'A' };
    float pi { 3.141592f };
    double tau { 6.283184 };
    std::string text { "Hello IMAC!" };

    return 0;
}
```

Il est recommandé de faire la distinction entre **float** et **double** en ajoutant le suffixe <kbd>f</kbd> à la fin du nombre:
```cpp
#include <iostream>

int main() {
    float pi { 3.141592f };
    double tau { 6.283184 };

    return 0;
}
```

Pour l'instant ça n'a pas beaucoup d'importance mais essayez de le mettre car c'est une bonne pratique et a son importance avec des concepts plus avancés en C++.

:::info Syntaxe héritée

Il existe également une syntaxe alternative, de la forme ```type nom = valeur;```. Essayez, vous verrez que ça marche.

```cpp
#include <iostream>

int main() {
    int number = 42;
    std::cout << number << std::endl;

    return 0;
}
```

Cette syntaxe est **héritée du C** et est **toujours valable en C++**.
Dans ce cours je vous conseille fortement d'utiliser la syntaxe dite **moderne** utilisant les accolades **{}**.
De plus la syntaxe avec le symbole <kbd>=</kbd> a d'autres subtilités et peut parfois induire en erreur (des conversions implicites non desirées par exemple), c'est pourquoi nous ne l'utiliserons pas dans la majorité des cas.

Ne soyez pas surpris si vous rencontrez cette syntaxe, elle est encore très utilisée et je l'ai moi même utilisé pendant très longtemps.
:::

## Les types

Dans l'exemple précédent j'ai utilisé divers mots-clés qui font chacun référence à un **type** de variable spécifique:

- Pour les **nombres entiers** c'est le mot-clé **int**, (abréviation de l’anglais **int**eger signifiant nombre entier). Grâce à ce type, on peut stocker des entiers **négatifs** ou **positifs**.
- Pour les **flottants**(les nombres à virgule), nous avons le mot-clé **"float"**, (abréviation de **float**ing point numbers en anglais). Il existe aussi le mot clé **"double"** pour stocker des nombres à virgule plus précis quand c'est nécessaire.
- Pour les **caractères**, nous avons **char**.
- Pour les **chaînes de caractères** nous avons **std::string**.

:::caution **Chaîne de caractères**
Pour les chaînes de caractères c'est légèrement différent, nous avons le type **std::string**. 
Ce type est particulier car il n’existe **pas nativement en C++**.
Pour ceux qui sont attentifs à  ```std::``` c'est un type issu de la **bibliothèque standard** dont j'ai déjà parlé.
Ce sont des programmeurs experts qui ont codé ce type afin de manipuler aisément des chaînes de caractères. Afin de pouvoir manipuler des **std::string**, il faut donc inclure le bon fichier, ce que l’on fait grâce à la ligne ```#include <string>```.

```cpp
#include <iostream>
#include <string>

int main() {
    std::string hello { "Hello IMAC!" };
    std::cout << hello << std::endl;

    return 0;
}
```
:::

## Des préfixes modificateurs

Il est possible d'utiliser des mot-clés modificateurs dans le type de la variable pour altérer son fonctionnement (et implicitement la façon dont ils sont stockés en mémoire).

- ```signed```: permet d'indiquer que le nombre est signé (<kbd>+</kbd> ou <kbd>-</kbd>)
- ```unsigned```: permet d'indiquer que le nombre n'a pas de signe (une valeur absolue ou une taille)

- ```short```: le nombre sera stocké sur 16 bits maximum (dans le cas des petits nombres)
- ```long```: le nombre sera stocké sur 32 bits maximum (dans le cas de plus grands nombres)
- ```long long```: le nombre sera stocké sur 64 bits maximum

## Valeurs par défaut

:::caution
Mais qu'est ce qui se passe si je ne précise rien dans les accolades **{}** ?
:::

En C++, si rien n'est précisé la variable va contenir une **valeur par défaut**.

Ce sera par exemple une chaîne de caractères vide (```""```) pour les std::string ou un ```0``` dans le cas d'un entier.
Je vous laisse essayer:

```cpp
#include <iostream>
#include <string>

int main() {
    std::string default_string { };
    std::cout << default_string << std::endl; // ""

    int default_int { };
    std::cout << default_int << std::endl; // 0

    float default_float { };
    std::cout << default_float << std::endl; // 0.0f

    return 0;
}
```

Pour commencer, nous écrirons toujours les valeurs explicitement pour éviter de mauvaise surprise...

Plus tard, avec un peu plus de pratique, vous aurez la liberté d'utiliser l’initialisation par défaut, en connaissance de cause.

## Quelques règles de nommage

Les noms des variables sont tout de même soumis à quelques règles de nommage.

- Premièrement, de son origine américaine, le C++ n’autorise que **les 26 lettres de l’alphabet** anglais (plus les **chiffres** et l’**underscore** <kbd>_</kbd>), on peut donc malheureusement dire adieu à nos jolis accents français. Les espaces et les signes de ponctuation sont aussi interdits (<kbd>'</kbd>, <kbd>?</kbd>, etc).

- Il ne peut pas commencer par un chiffre, c’est **interdit**. L'usage de l'underscore <kbd>_</kbd> au début, bien que possible, est conventionnellement utilisé dans un cadre spécifique et je vous déconseille donc de l'utiliser pour commencer.

- Enfin, il n'est pas possible d'utiliser un **mot-clé** du C++ comme nom de variable. Par exemple, il est **interdit** de déclarer une variable s’appelant **int**.

```cpp title="Quelques exemples"
int main() {
    int variable42 { 42 };

    int 42variable { 42 };
    // Erreur : ne peut pas  commencer par un chiffre.

    int my_variable { 0 };

    int my variable { 0 };
    // Erreur : espace interdit.

    float result { 2.71f };

    float return { 2.71f };
    // Erreur : mot-clé réservé par le C++

    return 0;
}
```

## Un joli petit nom

Au-delà des règles de nommage, **trouver un nom adapté** à une variable est un casse tête que même les programmeurs expérimentés rencontrent.

En effet, respecter les règles ne suffit pas à bien nommer une variable. Le nom d'une variable permet de l'**identifier**, de **comprendre ce qu'elle stocke** et **comment on la manipule**.

:::note
Le nom d'une variable est destiné à un lecteur **humain**. On choisit un nom de variable pour qu'il soit compréhensible pour nous et nos futurs lecteurs, amis, collègues, etc

Une fois le code compilé, l'ordinateur ne fait aucune différence entre un nom ou un autre.
:::

### Quelques mauvais exemples

- lpi: Un acronyme ? Que signifie t'il ?
- value: Que stocke-t-elle ? Dans quel contexte ? Pourquoi existe-t-elle ?
- multiplication_of_two_by_sqrt_of_pi: Clair mais un peu trop long.
- dIsTanCe: Court et compréhensible mais les majuscules / minuscules peuvent rendre la lecture moins facile.
- qsqffqedfqzdjzqoid: Surement un chat qui est passé sur mon clavier.

Avec l'expérience et le temps vous arriverez à trouver plus facilement des noms clairs et simples.

Je vous demande dès maintenant de faire quelques efforts pour réfléchir aux noms des variables. Cela peut vous sembler peu important, jusqu'au jour où vous perdrez une semaine de travail à comprendre ce que votre programme ou variable est supposée faire.

## Un type supplémentaire

Vous allez sûrement le découvrir en pratiquant mais parfois on souhaite stocker un nombre limité de possibilités.

Par exemple les points cardinaux (Nord, Sud, Est, Ouest), les saisons (été, printemps, automne, hiver), les jours de la semaine, etc

On pourrait bien associer un entier à chaque possibilité (c'est une pratique très répandue en **C**) mais ce n'est pas la meilleure façon de faire. Un entier peut stocker des valeurs négatives ou alors être supérieur au nombre de possibilités voulues ce qui n'a pas vraiment de sens.

C'est là qu'entre en jeu les ```enum``` (de l'anglais **Enumeration**).

On le déclare en utilisant le préfixe ```enum class``` puis le nom de notre énumération suivis des valeurs possibles entre accolades.

```cpp title="Un exemple"
enum class Season {
    Spring, 
    Summer, 
    Autumn,
    Winter,
};

int main() {
    Season current_season { Season::Spring };
    return 0;
}
```

:::note
On utilise ici aussi la syntaxe avec <kbd>::</kbd> pour signifier l'appartenance de la valeur à l'**enum** (de la même façon qu'avec la bibliothèque standard comme avec ```std::string```).
:::

:::caution

Mais pourquoi le mot clé **class** ici ?

Il est également possible de l'omettre mais cette syntaxe est un autre "type" d'enum hérité du **C** qui a de nombreux incovénients:
- Il n'est pas possible de déclarer deux enums utilisant la même valeur (mais dans un contexte différent).
- Déclarer une variable ayant le même nom qu'une valeur d'un enum peut avoir des comportements imprévus.

```cpp
enum PrimaryColor {
    Red,
    Yellow,
    Blue
};

enum EyesColor {
    Brown,
    Hazel,
    Blue, // Erreur de compilation ici car la valeur Blue est aussi utilisée dans l'enum PrimaryColor
    Green,
    Grey,
    Amber
};

int main() {
    
    // Ici Red fait référence à la valeur dans l'enum PrimaryColor
    std::cout << Red << std::endl;
    
    int Red { 35 };
    
    // Maintenant, bien que la ligne soit identique, Red fait référence à la variable créée ci-dessus
    std::cout << Red << std::endl;

    return 0;
}
```

On parle de "**Scoped enumerations**" avec ```enum class``` (autrement dit ayant une portée limitée pour éviter les collisions de valeurs).
Pour faire simple on écrira systématiquement ```enum class``` en **C++ moderne** pour s'éviter des problèmes.
:::

## Manipuler nos variables

Il n'est pas seulement possible d'afficher nos variable (via ```std::cout```) mais il est possible de faire des opérations dessus:

```cpp
#include <iostream>

int main() {
    int variable { 42 };
    std::cout << "Ma valeur vaut : " << variable << std::endl;
    
    // Je donne une nouvelle valeur à ma variable 
    variable = 2 + (3 * 9);
    std::cout << "Ma valeur vaut maintenant : " << variable << std::endl;
    
    // J'utilise la valeur de ma variable pour un calcul et réaffecte le résultat à la même variable
    variable = variable + 7;
    std::cout << "Et maintenant " << variable << std::endl;
    
    // Je me sers de ma variable pour en créer une nouvelle
    int other_value { variable * 3 };

    // Je peux utiliser d'autres variables également
    variable = other_value - 1;
    std::cout << "Ma valeur vaut enfin : " << variable << std::endl;
    
    return 0;
}
```

Pour modifier une variable, on utilise l’**opérateur d’affectation <kbd>=</kbd>**, précédé du nom de la variable et suivi de la valeur à affecter : ```nom = valeur;```.

C++ s'occupe en premier lieu de tout ce qui se trouve à droite du signe <kbd>=</kbd>. On peut donc utiliser la valeur d'une variable pour faire un calcul avant de l'assigner à cette même variable.

### Quelques raccourcis

Dans le cas où l'on veut utiliser la variable et l'assigner à elle même il est possible d'avoir une écriture plus courte pour les opérateurs usuels:

```cpp

#include <iostream>

int main() {
    int integer { 42 };

    // équivalent à écrire "integer = integer + 3"
    integer += 3;

    integer -= 1;
    integer *= 4;
    integer /= 2;
    return 0;
}
```

Cela va même plus loin, il existe un raccourci supplémentaire lorsque l'on souhaite ajouter ou soustraire ```1``` à un nombre.
On parle d'**incrémentation** et de **décrémentation**.

- **a++** ou **++a** pour incrémenter de ```1```  la valeur de la variable ```a```.
- **a--** ou **--a** pour décrémenter de ```1```  la valeur de la variable ```a```.

Les deux syntaxes sont quasiment équivalentes, il y a une petite différence dont je ne vais pas parler car elle ne nous intéresse pas à l’heure actuelle.

## Variables constantes

Il existe enfin un dernier mot clé important, le mot clé **```const```**.
Il va permettre, comme son nom l'indique, de rendre constant une variable et ainsi empêcher toute modification de celle-ci.
Si l’on essaye de modifier une constante, on obtient une erreur de compilation.

```cpp
int main()
{
    float const gravity { 9.80665f };
    gravity = 9.0f; // Erreur de compilation

    return 0;
}
```

Pour l'instant cela ne va pas être très utile. Mais c'est une très (très (très)) bonne pratique et permet de protéger des variables et donner des contraintes fortes à notre code.
Je vais l'utiliser régulièrement dans des exemples et on découvrira ensemble plus tard où cela prendra vraiment toute son importance d'utiliser des ```const``` **dès que possible**.

:::info
Vous verrez souvent des codes qui inversent l’ordre de **const** et écrivent **const float variable {};**.
C'est tout à fait possible car le **const** respecte la règle suivante : 
Il s’applique à ce qui est à **sa gauche**, sauf s’il n’y a rien, auquel cas il s’applique à ce qu’il y a à droite.
Je vais donc le placer à droite car c'est le fonctionnement voulu initialement du **const**.
:::

# Entrée / Sortie

Jusque là, nous avons régulièrement rencontré **std::cout** qui nous permet d'afficher des caractères avec la notion de **sortie standard**.

Il est également possible de faire l'inverse en manipulant ce qu'on appelle **l’entrée standard**.

Grâce aux variables, il est possible de demander des informations à l’utilisateur et de stocker cette information afin d'en faire quelque chose.

```cpp
#include <iostream>

int main()
{
    std::cout << "Entre ton age : " << std::endl;
    int age { 0 };
    std::cin >> age;
    std::cout << "Tu as " << age << " ans." << std::endl;

    return 0;
}
```

Ici **std::cin** est très similaire à std::cout et signifie "**c**haracter **in**put".

Il faut le préfixer par ```std::```, car lui aussi appartient à la bibliothèque standard. De plus, on utilise ici les chevrons <kbd>>></kbd> dans le sens inverse pour signifier que l'on "insère"" ce qui vient de notre entrée pour le stocker dans notre variable.

:::caution
Dans notre cas le **C++** comprend que c'est un nombre et le convertit en entier (int).

Mais que se passe t'il si l'on entre des lettres ?

Dans ce cas de figure **la variable (```age``` ici) n'est pas modifiée**. Mais pas seulement, ```std::cin``` n'arrive pas à convertir notre entrée, il passe dans un état invalide, mémorise tous les caractères invalides et toutes les utilisations suivantes de ```std::cin``` seront érronées.

Nous verrons plus tard comment gérer ce cas de figure et détecter si une erreur survient.
:::

## En résumé

Nous venons de découvrir les variables en **C++**. C'est la base de tout programme informatique, ce qui permet d'échanger et de manipuler des informations.

- C++ nous permet de manipuler différents **types** de données:
  - des caractères simples (**char**)
  - des chaînes de caractères (via **std::string**)
  - des nombres entiers (**int**)
  - des nombres réels (**float** ou **double**)
  - Des énumérations (avec **enum class**)

- Il est possible d'utiliser toutes les opérations usuelles qui existent sur les nombres.

- Les **variables** nous permettent de **stocker** des valeurs et d'y **associer un nom** (en tenant compte de certaines règles de nommage).

- Il est **important** de choisir un nom de variable qui a du sens et le plus simple possible.

- Il est possible de spécifier qu'une variable est non modifiable avec le mot-clé ```const```.

- Nous pouvons demander des informations à l’utilisateur grâce à **std::cin**.