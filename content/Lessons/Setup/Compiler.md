---
title: Installer le compilateur
tags:
    - Tools
    - C++

sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Button, Chip } from "@mui/material";

## Installation d'un compilateur

<Tabs groupId="operating-systems">
<TabItem value="Windows" label="Windows">

Dans le cas de Windows, nous installerons **MSVC** via l'outil d'installation de **Microsoft Visual Studio**.

:::note

Il existe d'autres alternatives comme **GCC** (via MinGW-w64 et MSYS2 ou WSL), **Clang** mais je ne vais pas les présenter ici. Si vous êtes à l'aise et que vous savez ce que vous faites, vous êtes libre d'utiliser celui que vous voulez, seulement je serais potentiellement moins à même de vous aider.
Certains compilateurs ne gèrent pas les choses exactement de la même manière et il est possible donc d'obtenir des warnings ou erreurs différentes d'un compilateur à l'autre.

:::

Il vous suffit pour cela de télécharger l'installateur des outils Microsoft via ce lien
**[Visual Studio Download](https://visualstudio.microsoft.com/fr/downloads/)**
et de choisir la version **Community**

**MSVC** fait partie de l'éditeur **Microsoft Visual Studio** mais il est possible d'installer seulement les outils de compilation sans l'éditeur et c'est ce que nous allons faire car nous allons nous utiliser **Visual Studio Code** (:warning: différent de **Microsoft Visual Studio**).

Une fois l'installateur téléchargé il faut le lancer et choisir **"Desktop development with C++"** (vous devriez voir **MSVC** dans la liste à droite).

Vous trouverez des infos supplémentaires ici dans la section pré-requis si nécessaire :
- [visualstudio:config-msvc](https://code.visualstudio.com/docs/cpp/config-msvc#_prerequisites)

</TabItem>

<TabItem value="Linux" label="Linux">

De manière générale, toutes les distributions Linux sont livrées avec un compilateur installé. Si ce n'est pas le cas, consultez [cet article](https://code.visualstudio.com/docs/cpp/config-linux).

</TabItem>

<TabItem value="iOS" label="iOS">
Vous avez seulement à exécuter cette commande :

```bash
xcode-select --install
```

Je pratique plus rarement ce genre d'installation sur **IOS**, n'hésitez pas à venir me voir ou m'envoyer un message ou même à en parler entre vous pour trouver une solution.
</TabItem>
</Tabs>

---


## Vérifier que le compilateur est installé

Dans un premier temps, vous allez pouvoir vérifier que le compilateur est bien installé avec la commande suivante:

<Tabs groupId="operating-systems">
<TabItem value="Windows" label="Windows">

```powershell
cl
```

Avec **MSVC** c'est un peu particulier et la commande du compilateur ne sera accessible qu'à travers un terminal particulier.

Vous pouvez le trouver en cherchant **"developer powershell"** ou **"developer Command Prompt"** dans le **Menu Windows**.

Vous pouvez ouvrir un terminal développeur et essayer d'exécuter la commande précédente.

Vous devriez voir un retour comme celui là :

> ```powershell
> C:\Program Files\Microsoft Visual Studio\2022\Community> cl
> Microsoft (R) C/C++ Optimizing Compiler Version 19.31.31105 for x86
> Copyright (C) Microsoft Corporation.  All rights reserved.
> 
> usage: cl [ option... ] filename... [ /link linkoption... ]
> ```

</TabItem>

<TabItem value="Linux" label="Linux">

```bash
g++ --version
```

</TabItem>

<TabItem value="iOS" label="iOS">

```bash
g++ --version
```

</TabItem>
</Tabs>

:::caution
Cela peut ne pas fonctionner si le répertoire contenant le compilateur n'est pas "accessible".

Les **commandes** sont elles-mêmes des exécutables sous forme de fichiers situés quelque part sur votre ordinateur.

Depuis un terminal, l'ordinateur a une liste de tous les endroits dans lesquels il va essayer de chercher les dits fichiers (commandes) à exécuter. Ces endroits (sous forme de chemins de dossier) sont listés dans ce qu'on appelle des **variables d'environnement** et particulièrement la variable d'environnement **PATH**.

Pour pouvoir avoir accès à la commande du compilateur depuis n'importe où dans votre ordinateur il va donc falloir ajouter le chemin où est installé l'exécutable (les outils de compilation dans notre cas) à cette variable **PATH**.

<Tabs groupId="operating-systems">

<TabItem value="Windows" label="Windows">

Vous pouvez y accéder en allant dans le **Panneau de configuration** et en cliquant sur le lien **Paramètres système avancés** puis sur **Variables d'environnement**. 

Dans la section Variables système recherchez la variable d'environnement **PATH** et sélectionnez-la. Cliquez sur Modifier. 

- Dans la fenêtre qui vient de s'ouvrir, ajoutez une valeur avec le chemin vers le dossier contenant la commande.
  (Pour **MSVC** par exemple c'est quelque chose comme : *"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC\19.09.26726\bin\HostX86\x64"*)
- Cliquez sur OK.
- Fermez toutes les fenêtres restantes en cliquant sur OK.

C'est également expliqué [ici](https://helpdeskgeek.com/windows-10/add-windows-path-environment-variable/) avec des illustrations si nécessaire.
</TabItem>
<TabItem value="Linux" label="Linux">

C'est en général bien configuré lors de l'installation de votre OS.

Mais si vous voulez ajouter par exemple */home/user/test* à la variable **PATH**, il faut écrire la cmd `export PATH=$PATH:/home/user/test` pour ajouter temporairement ce nouveau dossier à la variable **PATH**.

Maintenant, vous pouvez utiliser votre commande en écrivant tout simplement son nom et le terminal sera capable de chercher dans ce nouveau répertoire.

:warning: À la fermeture du terminal, **PATH** reprendra sa valeur par défaut, donc */home/user/test* n'existera plus dans **PATH**.

### De manière permanente

Si vous voulez configurer la variable **PATH** de façon permanente, vous devez éditer le fichier de configuration de votre terminal/shell.
Comme le plus souvent c'est le shell **BASH** qui est utilisé, vous devez éditer votre fichier */home/user/.bashrc*.

Des explications pour le faire sont disponible [ici](https://stackabuse.com/how-to-permanently-set-path-in-linux/#:~:text=in%20this%20guide.-,Using%20bashrc%20to%20Set%20your%20PATH,-Instead%20of%20setting)
</TabItem>

<TabItem value="iOS" label="iOS">

Je suis moins familier d'iOS mais c'est également possible de modifier la variable **PATH**.

Vous trouverez des instructions pour le faire [ici](https://support.apple.com/fr-fr/guide/terminal/apd382cc5fa-4f58-4449-b20a-41c53c006f8f/mac) et [ici](https://apical.xyz/fiches/configurer_son_mac/ajuster_la_variable_d_environnement_path_sous_macos)

N'hésitez pas à revenir vers moi si vous avez des difficultés.
</TabItem>

</Tabs>

:::
