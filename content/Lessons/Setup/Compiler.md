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

Nous allons installer le compilateur **GCC**.

:::note

il existe bien d'autres alternatives comme **MSVC**, **Clang** ou **WSL** mais je ne vais pas les présenter ici. Si vraiment vous êtes à l'aise et que vous savez ce que vous faites, vous êtes libre d'utiliser celui que vous voulez, seulement je serez potentiellement moins à même de vous aider.
Certains compilateurs gèrent pas les choses exactement de la même manière et il est possible donc d'obtenir des warnings ou erreurs différents d'un compilateur à l'autre.

:::

<Tabs groupId="operating-systems">
<TabItem value="Windows" label="Windows">

Dans le cas de Windows, c'est avec MinGW-w64 que nous installerons **GCC**.

// TODO: instllation avec MSYS2 (ou alternative install propre de gcc)
[ici](https://code.visualstudio.com/docs/cpp/config-mingw) et [là](https://www.msys2.org/).

</TabItem>

<TabItem value="Linux" label="Linux">

De manière générale, toutes les distributions Linux sont livrées avec un compilateur installé. Si ce n'est pas le cas, consulte [cet article](https://code.visualstudio.com/docs/cpp/config-linux).
Si ta distrubution Linux n'inclut pas de compilateur c'est sûrement que tu sais très bien ce que tu fais et tu n'as pas du tout besoin de moi :smile: 

</TabItem>

<TabItem value="iOS" label="iOS">
Tu as seulement à exécuter cette commande :

```bash
xcode-select --install
```

Je ne suis pas un expert sur **IOS**, si vous avez un problème n'hésitez pas à venir me voir ou m'envoyer un message ou même à en parler entre vous pour trouvez une solution.
</TabItem>
</Tabs>

---


## Compiler son premier programme

Dans un premier temps, vous allez pouvoir vérifier que le compilateur est bien installé avec la commande suivante:

```bash
g++ --version
```

:::caution
Cela peut ne pas fonctionner si le répertoire contenant le compilateur n'est pas présent dans la variable d'environnement **PATH**.
La variable d'environnement **PATH** est en quelque sorte la liste de tous les endroits dans lesquels le terminal va essayer de trouver la commande que tu essaies d'exécuter.

Pour pouvoir avoir accès à la commande **g++** depuis n'importe où dans ton PC il va donc falloir ajouter le chemin où est installé MinGW (généralement *C:\MinGW\bin*) à cette variable **PATH**.
:::

<Tabs groupId="operating-systems">

<TabItem value="Windows" label="Windows">

Tu peux y accéder en allant dans le **Panneau de configuration** et en cliquant sur le lien **Paramètres système avancés** puis sur **Variables d'environnement**. 

Dans la section Variables système recherche la variable d'environnement **PATH** et sélectionne-la. Clique sur Modifier. 

Dans la fenêtre qui vient de s'ouvrir, ajoute une valeur avec le chemin vers le dossier *bin* d'installation de MinGW. Clique sur OK. Ferme toutes les fenêtres restantes en cliquant sur OK.

C'est également expliqué [ici](https://helpdeskgeek.com/windows-10/add-windows-path-environment-variable/) avec des images.
</TabItem>
<TabItem value="Linux" label="Linux">

Sur Linux, c'est en général bien configuré lors de l'installation.

Mais si tu veux ajouter par exemple */home/user/test* à la variable **PATH**, il faut écrire la cmd `export PATH=$PATH:/home/user/test` pour avoir le répertoire en dernier dans **PATH**.

Maintenant, tu peux utiliser ton programme en écrivant tout simplement son nom et le terminal sera capable de chercher dans ce nouveau répertoire.

À la déconnexion, **PATH** reprendra sa valeur par défaut, donc */home/user/test* n'existera plus dans **PATH**.

### De manière permanente

Si tu veux configurer la variable **PATH** de façon permanente, tu dois éditer le fichier de configuration de ton shell de connexion.
Comme le plus souvent c'est le shell **BASH** qui est utilisé, tu dois éditer ton fichier */home/user/.bashrc*.

Tu peux trouver une explication pour le faire [ici](https://stackabuse.com/how-to-permanently-set-path-in-linux/#:~:text=in%20this%20guide.-,Using%20bashrc%20to%20Set%20your%20PATH,-Instead%20of%20setting)
</TabItem>
</Tabs>

---
