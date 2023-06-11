---
title: CMake
tags:
    - Tools
    - C++
sidebar_position: 2
---

import { Chip } from "@mui/material";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introduction

CMake est un outil **additionnel** permettant de gérer la compilation d'un **projet**.
En effet, lorsqu'il s'agit de compiler un seul fichier il est possible de le faire manuellement avec les commandes du compilateur mais la tâche va vite se complexifier lorsqu'il va s'agir de compiler plusieurs fichiers et de gérer des dépendances.
C'est alors qu'interviennent des outils comme CMake pour vous simplifier la tâche. Celui-ci va très bien s'intégrer à des IDE comme VisualStudio Code par exemple.

:::note

Il en existe bien d'autres comme makefile que nous ne verrons pas car moins moderne et que je vous déconseille fortement d'utiliser.

:::

# Installation

Vous pouvez vous rendre <Chip label="ici" component="a" href="https://cmake.org/download/" size="small" variant="contained" color="primary" clickable/> et sélectionner l'installeur qui correspond à votre OS.

<Tabs groupId="operating-systems">

<TabItem value="Windows" label="Windows">
Choisi <b>Windows x64 Installer</b>.
</TabItem>
<TabItem value="Linux" label="Linux">
Vous pouvez également passer par votre gestionnaire de paquets et simplement taper la commande suivante :

```bash
sudo apt-get install cmake
```
</TabItem>
<TabItem value="IOS" label="IOS">
Vous devriez également pouvoir l'installer via le gestionnaire de paquets <a href="https://brew.sh/">Brew</a> avec la commande suivante : 

```bash
brew install cmake
```
</TabItem>
</Tabs>

Vous pouvez ensuite vérifier que c'est bien installé en exécutant la commande suivante dans un terminal :

```bash
cmake --version
```

---
