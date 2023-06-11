---
title: Premier programme
tags:
    - C++
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Compiler votre premier programme

C'est maintenant le moment de compiler votre premier programme !

Vous pouvez créer un fichier d'extension *cpp* avec le code suivant:

```cpp title="helloImac.cpp"
#include <iostream>

int main() {
    std::cout << "Hello and welcome to IMAC !" << std::endl;
    return 0;
}
```

Une fois le fichier créé, il suffit d'executer la commande suivante pour produire l'executble compilé:

<Tabs groupId="operating-systems">
<TabItem value="Windows" label="Windows">

```bash
g++ helloImac.cpp -o helloImac.exe
```

Une fois compilé il suffit de l'exécuter avec la commande suivante :

```bash
./helloImac.exe
```

</TabItem>

<TabItem value="Linux&iOS" label="Linux et iOS">

```bash
g++ helloImac.cpp -o helloImac
```

Une fois compilé il suffit de l'exécuter avec la commande suivante :

```bash
./helloImac
```
</TabItem>
</Tabs>

## Utiliser vsCode

Pour se simplifier la vie on va utiliser l'extension <VSCodeExtension id="formulahendry.code-runner"/> que je vous ai demandé d'ajouter à VSCode.

l'extension ajoute un bouton "play" (:arrow_forward:) en haut à droite de l'interface lorsqu'un fichier cpp est ouvert.

// TODO add img

Cela permet automatiquement d'exécuter la commande de compilation avec **g++** sur le fichier ouvert et d'executer le programme le programme compilé.

## Quelques explications

### #include ?

```cpp

#include <iostream>

```

Le but de notre programme est d’afficher un message. Des développeurs experts ont déjà créé un outil qui permet de le faire facilement. Il se trouve dans un fichier nommé **iostream**, acronyme de "Input Output Stream", soit "Flux d’Entrées Sorties". Ce fichier fait partie de la bibliothèque standard C++ **STD** (pour "C++ **ST**andar**D** library"), un ensemble de fonctionnalités déjà pré-codées et inclues partout avec chaque compilateur C++ (dont on reparlera plus tard).

Pour utiliser les fonctionnalités offertes par ce fichier, notamment écrire un message, on doit l’importer dans notre programme. On dit qu’on l’inclut, d’où l’anglais "**include**". Nous utiliserons beaucoup cette fonctionnalité en C++ et je le détaillerai plus tard dans le semestre.

:::info

Retenez que **#include** nous permet d’importer des fichiers pour les inclure dans le programme que l'on est en train d'écrire.

:::


### La fonction main

```cpp
int main() {
    // ...
    return 0;
}
```

Lorsqu’on lance le programme, celui-ci doit savoir pas où commencer. On parle de point d’entrée. Ce point d'entrée doit être une fonction nommée **main** et renvoyer une valeur avec le mot clé **return** (de type int).

:::note
La valeur de retour du main indique si le programme s’est terminé sans erreur. Si tout se passe bien, il faut retourner **0**. N’importe quelle autre valeur indique une erreur.
:::

### Hello and welcome to IMAC !

L’instruction ci-dessous permet d’afficher la chaîne de caractère “Hello and welcome to IMAC !” sur la sortie standard du programme.

```cpp
std::cout << "Hello and welcome to IMAC !" << std::endl;
```

premièrement "**std**" fait réféfence à la bibliothèque standard C++  dont je parlais précédement.

std**::** permet d'indiquer que l'on veux utiliser une foctionnalitée particulière de cette bibliothèque ici **cout**:

Il s’agit de la variable permettant d'écrire sur la sortie standard du programme, généralement le termial. le **'c'** fait référence à **caractère** et **‘out’** indique **‘sortie’**.

enfin, **std::endl** indique ici end-line soit la **'fin de ligne'**.

Et voilà ! Vous avez exécuté votre premier programme C++ à l'aide de VSCode ! 🎉