"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[5109],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),m=i,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3118:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const a={title:"TD8 - Headers",sidebar_position:8},o=void 0,p={unversionedId:"TDs/headers",id:"TDs/headers",title:"TD8 - Headers",description:"Exercice 1 (Fraction)",source:"@site/content/TDs/08_headers.md",sourceDirName:"TDs",slug:"/TDs/headers",permalink:"/Learn--cpp_programming/TDs/headers",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"TD8 - Headers",sidebar_position:8},sidebar:"TDs",previous:{title:"TD7 - Structures",permalink:"/Learn--cpp_programming/TDs/Struct"}},l={},s=[{value:"Exercice 1 (Fraction)",id:"exercice-1-fraction",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"exercice-1-fraction"},"Exercice 1 (Fraction)"),(0,i.kt)("p",null,"Le but de cet exercice est de cr\xe9er une structure permettant de repr\xe9senter une fraction. Cette structure devra contenir deux entiers positifs, un pour le num\xe9rateur et un pour le d\xe9nominateur."),(0,i.kt)("p",null,"On va utiliser un fichier d'en-t\xeate pour d\xe9finir la structure et les fonctions qui vont permettre de manipuler les fractions."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Cr\xe9er un fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"fraction.hpp")," qui contiendra la d\xe9finition de la structure et les prototypes des fonctions.\nLa structure devra s'appeler ",(0,i.kt)("inlineCode",{parentName:"p"},"Fraction")," et contenir deux entiers positifs nomm\xe9s ",(0,i.kt)("inlineCode",{parentName:"p"},"numerator")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"denominator")," de type unsigned int avec comme valeur par d\xe9faut ",(0,i.kt)("inlineCode",{parentName:"p"},"0/1"),".\nLa structure devra contenir les fonctions suivantes :"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- add : prend deux fractions en param\xe8tre et retourne la somme des deux fractions.\n- sub : prend deux fractions en param\xe8tre et retourne la diff\xe9rence des deux fractions.\n- mul : prend deux fractions en param\xe8tre et retourne le produit des deux fractions.\n- div : prend deux fractions en param\xe8tre et retourne le quotient des deux fractions.\n- display : prend une fraction en param\xe8tre et affiche la fraction sous la forme `numerator/denominator`.\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Cr\xe9er un fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"fraction.cpp")," qui contiendra les d\xe9finitions des fonctions.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Impl\xe9menter les fonctions dans le fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"fraction.cpp"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Cr\xe9er un fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"utils.hpp")," qui contiendra les fonctions utilitaires suivantes :"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gcd")," : prend deux entiers positifs en param\xe8tre et retourne le plus grand diviseur commun."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"simplify")," : prend une fraction en param\xe8tre et retourne la fraction simplifi\xe9e."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Cr\xe9er un fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"utils.cpp")," et impl\xe9menter les fonctions."))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Pour simplifier une fraction, il faut diviser le num\xe9rateur et le d\xe9nominateur par le plus grand diviseur commun.\nOn va donc utiliser la fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"gcd")," pour calculer le plus grand diviseur commun et ensuite diviser le ",(0,i.kt)("strong",{parentName:"p"},"num\xe9rateur")," et le ",(0,i.kt)("strong",{parentName:"p"},"d\xe9nominateur")," par ce nombre."),(0,i.kt)("p",{parentName:"admonition"},"la fraction ",(0,i.kt)("inlineCode",{parentName:"p"},"4/6")," devient ",(0,i.kt)("inlineCode",{parentName:"p"},"2/3")," car ",(0,i.kt)("inlineCode",{parentName:"p"},"gcd(4, 6) = 2")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"4/2 = 2")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"6/2 = 3"),"."),(0,i.kt)("p",{parentName:"admonition"},"Il faut importer le fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"fraction.hpp")," dans le fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"utils.hpp")," pour pouvoir utiliser la structure ",(0,i.kt)("inlineCode",{parentName:"p"},"Fraction")," dans la fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"simplify"),".")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Pour trouver le plus grand diviseur commun, on peut utiliser l'algorithme d'Euclide qui consiste \xe0 diviser le plus grand nombre par le plus petit et \xe0 r\xe9p\xe9ter l'op\xe9ration avec le reste de la division jusqu'\xe0 obtenir un reste nul. Dans ce cas, le plus petit nombre non nul est le plus grand diviseur commun."),(0,i.kt)("p",{parentName:"admonition"},"exemple avec 22 et 8:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"22 % 8 = 6 (reste de la division de 22 par 8) 6 est diff\xe9rent de 0 donc on continue"),(0,i.kt)("li",{parentName:"ul"},"8 % 6 = 2 (reste de la division de 8 par 6) 2 est diff\xe9rent de 0 donc on continue"),(0,i.kt)("li",{parentName:"ul"},"6 % 2 = 0 (reste de la division de 6 par 2) 0 est \xe9gal \xe0 0 donc on s'arr\xeate et le plus grand diviseur commun est 2."))),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Cr\xe9er un fichier ",(0,i.kt)("inlineCode",{parentName:"li"},"main.cpp")," qui contiendra le programme principal. Ce programme devra :",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Cr\xe9er deux fractions ",(0,i.kt)("inlineCode",{parentName:"li"},"f1")," et ",(0,i.kt)("inlineCode",{parentName:"li"},"f2")," avec les valeurs de votre choix.(id\xe9alement avec des valeurs al\xe9atoires ou saisies par l'utilisateur)"),(0,i.kt)("li",{parentName:"ul"},"Afficher les deux fractions."),(0,i.kt)("li",{parentName:"ul"},"Afficher la somme des deux fractions."),(0,i.kt)("li",{parentName:"ul"},"Afficher la diff\xe9rence des deux fractions."),(0,i.kt)("li",{parentName:"ul"},"Afficher le produit des deux fractions."),(0,i.kt)("li",{parentName:"ul"},"Afficher le quotient des deux fractions."),(0,i.kt)("li",{parentName:"ul"},"Afficher les r\xe9sultats pr\xe9c\xe9dents sous forme de fraction simplifi\xe9e.")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Vous d\xe9couvrirez au prochain semestre comment am\xe9liorer ce programme en utilisant la surcharge d'op\xe9rateurs \ud83d\udee0\ufe0f.")))}d.isMDXComponent=!0}}]);