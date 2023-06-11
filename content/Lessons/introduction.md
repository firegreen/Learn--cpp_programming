---
title: Introduction
slug: /Lessons
sidebar_position: 0
---

## Un peu d'histoire

C'est dans les années 1970 que l'histoire commence. À cette époque, **Dennis Ritchie**, programmeur aux États-Unis, invente le langage **C**, conçu pour programmer le système d’exploitation **UNIX**. Ce langage devient très populaire et est encore beaucoup utilisé aujourd’hui, dans l’écriture de **Linux** par exemple. Puis un peu plus tard, au début des années 1980, **Bjarne Stroustrup**, lui aussi développeur aux États-Unis, décide de prendre le langage **C** comme base et de lui **ajouter des fonctionalités** et le nomme **C++**.

Le **C++** continue d’évoluer et au début des années 1990 il est décidé de le normaliser, c’est-à-dire d’en établir les **règles officielles**. Ce travail de longue haleine s’achève en 1998 ; cette version est ainsi souvent nommée **C++98**. Ensuite, en 2003, des corrections sont apportées et l'on obtient le **C++03**.

Ces traveaux de normalisation et d'améliorations sont poursuivis pour améliorer encore plus le **C++**, ce qui aboutit 8 ans plus tard, en 2011, à la sortie de **C++11**, jugée par beaucoup de développeurs comme étant le nouveau standard du C++.

Ensuite, des corrections et ajustements ont été faits pour donner de nouvelles version **C++14**, **C++17** et très récement **C++20**, encore en train de voir le jour.

:::info

On utilise généralement le terme de « **C++ moderne** » pour parler de **C++11** et au-delà.

:::

## Pourquoi apprendre C++ ?

- **Sa popularité** : le C++ est un langage qui est utilisé dans de nombreux projets important de développement logiciel. Il est également beaucoup utilisé dans l'industrie du jeu vidéo. Il est l'objet de nombreuses formations en informatiques. Il possède une communauté très importante, beaucoup de documentation et d’aide en ligne.
  
- **Sa rapidité** : C++ offre un grand contrôle sur la rapidité des programmes. C’est cette caractéristique qui fait de lui un des langages de choix pour les programmes scientifiques et le domaine du jeu vidéo.

- **Son ancienneté** : C++ est un langage ancien d’un point de vue informatique (30 ans, c’est énorme), il a fait l'objet de plusieurs mise à jour ce qui donne une certaine garantie de maturité, de stabilité et de pérennité (il ne disparaîtra pas dans quelques années).

- **Sa facilité d’apprentissage** : depuis sa version de 2011, C++ est beaucoup plus facile à apprendre. la verion **C++11** le rend plus facile à utiliser et plus puissant dans les fonctionnalités qu’il propose. Et ça tombe bien, c’est sur cette version et les suivantes que va se baser ce cours.

## Language diffcile ?

Tout n’est tout de même pas parfait et le **C++** a aussi ses défauts.

**Son héritage du C** : **C++** est un descendant du langage **C**, inventé dans les années 1970. Certains choix de conception, surement pertinent pour l’époque, sont plus problématiques aujourd’hui, et C++ les traine avec lui.

**Sa complexité** : La liberté et les performences qu'il offre viennent avec leur lot de complexité. Avoir une certaine maîtrise du **C++** est "long" et demandera des années d’expérience, notamment parce que certaines des fonctionnalités les plus puissantes du C++ requièrent de bien connaître les bases.

Mais je vous rassure, nous allons commencer par les bases pour aborder pas à pas ce language, que vous ayez déjà programmé ou non. Nous allons découvrir les notions petit à petit et votre apprentissage va être progressif pour que ce soit le plus compréhensible possible (certaines notions plus complexes ne seront d'ailleurs vu qu'en deuxième année).

## La documentation

En programmation, un bon réflexe à adopter est d'aller consulter la documentation de l’outil concerné, et ce avant de demander de l’aide sur un forum par exemple.

Voici un lien vers [une excellente documentation C++](http://en.cppreference.com/w/cpp). Elle est en anglais, mais pas de soucis, je suis également là pour vous aider. Je vous donnerai des liens, vous expliquerai comment comprendre et exploiter les informations fournies pour que, par la suite, vous puissiez le faire vous-mêmes.

Enfin, sachez qu’il existe une référence ultime appelée la norme, produit par un organisme de validation international appelé l'**ISO**, qui explique tous les détails et les règles du C++ mais qui est un document (trop) complexe, même pour des professionels, et est donc largement hors de portée nous concernant.
Je le mentionne simplement pour que vous soyez au courant de son existence, sans être surpris si, lors de vos recherches sur Internet, des réponses mentionnent ou citent la norme.

## Compilé vs interprété

Il existe deux grands types de langages informatiques, les langages **interprétés** et **compilés**.

Dans un langage interprété, le même code source pourra marcher directement sur tout ordinateur disposant de **l'interpréteur** nécessaire, c'est le cas du Python par exemple.

:::note
L'interpréteur est un programme en lui même qui interprète le code pour le convertir en instructions compréhensibles pour la machine.
:::

Avec un langage **compilé**, il faut compiler son programme (entièrement ou recompiler partiellement) à chaque fois pour pouvoir obtenir un **exécutable** utilisable sur la machine sur laquelle on veut lancer celui-ci.

Cela nécessite donc une étape supplémentaire (plus ou moins rapide): **la compilation**. Mais cela apporte également l'avantage de pouvoir optimiser et adapter l'exécutable pour une ou des machines spécifiques.
Dans la majorité des cas, l'exécutable compilé sera plus performant et plus rapide qu'un équivalent dans un langage interprété.

Dans votre cas, vous allez coder en **C++** qui est un langage compilé et ce sera donc la première étape de ce cours.

Nous allons voir ensemble comment installer tous les outils nécessaire à tout développeur C++ sur votre machine afin d'exécuter votre premier programme C++.