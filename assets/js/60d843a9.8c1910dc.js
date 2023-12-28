"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[153],{3905:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>N});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=n.createContext({}),l=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},i=function(e){var a=l(e.components);return n.createElement(o.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),c=l(t),d=s,N=c["".concat(o,".").concat(d)]||c[d]||u[d]||r;return t?n.createElement(N,m(m({ref:a},i),{},{components:t})):n.createElement(N,m({ref:a},i))}));function N(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,m=new Array(r);m[0]=d;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[c]="string"==typeof e?e:s,m[1]=p;for(var l=2;l<r;l++)m[l]=t[l];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1962:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>m,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var n=t(7462),s=(t(7294),t(3905));const r={title:"TD5 - Hachage et tableaux associatifs"},m=void 0,p={unversionedId:"TDs/S2/hashAndAssociativeTables",id:"TDs/S2/hashAndAssociativeTables",title:"TD5 - Hachage et tableaux associatifs",description:"Dans ce TD nous allons mettre en pratique les notions vues en cours sur les tables de hachage et les tables associatives.",source:"@site/content/TDs/S2/05_hashAndAssociativeTables.md",sourceDirName:"TDs/S2",slug:"/TDs/S2/hashAndAssociativeTables",permalink:"/Learn--cpp_programming/TDs/S2/hashAndAssociativeTables",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"TD5 - Hachage et tableaux associatifs"},sidebar:"TDs",previous:{title:"TD4 - D\xe9duction de type et biblioth\xe8que standard",permalink:"/Learn--cpp_programming/TDs/S2/AutoAndAlgorithm"},next:{title:"TD6 - Arbres binaires",permalink:"/Learn--cpp_programming/TDs/S2/binaryTree"}},o={},l=[{value:"Exercice 1 (fonction de hachage)",id:"exercice-1-fonction-de-hachage",level:2},{value:"Exercice 2 (R\xe9paration de Robots)",id:"exercice-2-r\xe9paration-de-robots",level:2},{value:"Exercice 3 (hash sur une structure)",id:"exercice-3-hash-sur-une-structure",level:2}],i={toc:l},c="wrapper";function u(e){let{components:a,...t}=e;return(0,s.kt)(c,(0,n.Z)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Dans ce TD nous allons mettre en pratique les notions vues en cours sur les tables de hachage et les tables associatives."),(0,s.kt)("h2",{id:"exercice-1-fonction-de-hachage"},"Exercice 1 (fonction de hachage)"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\xc9crire une fonction de hachage qui prend en param\xe8tre une cha\xeene de caract\xe8res, fait la somme des valeurs ASCII des caract\xe8res et renvoie un entier compris entre 0 et un maximum donn\xe9 nomm\xe9 ",(0,s.kt)("inlineCode",{parentName:"li"},"max"),".",(0,s.kt)("blockquote",{parentName:"li"},(0,s.kt)("p",{parentName:"blockquote"},"Nous utiliserons une simple somme des codes ASCII des caract\xe8res suivie d'un modulo pour obtenir un entier compris entre 0 et ",(0,s.kt)("inlineCode",{parentName:"p"},"max"),".")))),(0,s.kt)("p",null,"Ce que nous venons de faire s'appel la technique dite de ",(0,s.kt)("strong",{parentName:"p"},"folding")," (pliage en fran\xe7ais). Cela consiste \xe0 d\xe9couper notre donn\xe9e (ici une cha\xeene de caract\xe8res) en plusieurs parties, calculer une valeur pour chacune de ces parties, sommer ces valeurs et enfin appliquer un modulo pour obtenir un entier compris entre 0 et ",(0,s.kt)("inlineCode",{parentName:"p"},"max"),"."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"On veux se ramener \xe0 un entier compris entre 0 et ",(0,s.kt)("inlineCode",{parentName:"p"},"max"),' car cette valeur hach\xe9e sert g\xe9n\xe9ralement d\'index dans un tableau (table de hachage). Hors on souhaite un tableau de taille "raisonnable" en m\xe9moire, donc on limite la taille de ce tableau \xe0 ',(0,s.kt)("inlineCode",{parentName:"p"},"max"),".\nLe choix de ",(0,s.kt)("inlineCode",{parentName:"p"},"max")," d\xe9pend du contexte d'utilisation de la table de hachage, g\xe9n\xe9ralement on choisit une valeur qui est une puissance de 2 (par exemple 1024, 2048, 4096, etc.).")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},'\xc9crire une nouvelle fonction de hachage sur une cha\xeene de caract\xe8res pour laquelle l\'ordre des caract\xe8res a de l\'importance. Par exemple, les cha\xeenes de caract\xe8res "abc" et "cba" ne doivent pas avoir la m\xeame valeur hach\xe9e. Ce qui est le cas avec la fonction de hachage pr\xe9c\xe9dente.'),(0,s.kt)("blockquote",{parentName:"li"},(0,s.kt)("p",{parentName:"blockquote"},"Utiliser par exemple la somme des codes ASCII des caract\xe8res multipli\xe9e par leur position dans la cha\xeene de caract\xe8res."))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\xc9crire une fonction de hachage sur une cha\xeene de caract\xe8res utilisant la technique de ",(0,s.kt)("strong",{parentName:"p"},"polynomial rolling hash"),"."))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Voila le prototype de la fonction \xe0 \xe9crire: ",(0,s.kt)("inlineCode",{parentName:"p"},"size_t polynomialRollingHash(const std::string& s, size_t p, size_t m)"),".")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Nous allons utiliser la technique dite de ",(0,s.kt)("strong",{parentName:"p"},"polynomial rolling hash"),". Cette technique consiste \xe0 calculer le hash d'une cha\xeene de caract\xe8res en fonction du hash de la cha\xeene de caract\xe8res pr\xe9c\xe9dente. Cela permet de prendre en compte l'ordre des caract\xe8res dans la cha\xeene de caract\xe8res."),(0,s.kt)("p",{parentName:"blockquote"},"Pour cela, nous allons utiliser la formule suivante:"),(0,s.kt)("span",{parentName:"blockquote",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mtext",{parentName:"mrow"},"hash"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("munderover",{parentName:"mrow"},(0,s.kt)("mo",{parentName:"munderover"},"\u2211"),(0,s.kt)("mrow",{parentName:"munderover"},(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"0")),(0,s.kt)("mrow",{parentName:"munderover"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"1"))),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow"},"\xd7"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"p"),(0,s.kt)("mi",{parentName:"msup"},"i")),(0,s.kt)("mspace",{parentName:"mrow"}),(0,s.kt)("mspace",{parentName:"mrow",width:"1em"}),(0,s.kt)("mrow",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"m"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"o"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"d")),(0,s.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,s.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{hash}(s) = \\sum_{i=0}^{n-1} (s[i] \\times p^i \\mod m)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"hash")),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"3.0788em",verticalAlign:"-1.2777em"}}),(0,s.kt)("span",{parentName:"span",className:"mop op-limits"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.8011em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-1.8723em",marginLeft:"0em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,s.kt)("span",{parentName:"span",className:"mrel mtight"},"="),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,s.kt)("span",{parentName:"span"},(0,s.kt)("span",{parentName:"span",className:"mop op-symbol large-op"},"\u2211"))),(0,s.kt)("span",{parentName:"span",style:{top:"-4.3em",marginLeft:"0em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,s.kt)("span",{parentName:"span",className:"mbin mtight"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.2777em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0691em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8747em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.113em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))))))),(0,s.kt)("span",{parentName:"span",className:"mspace allowbreak"}),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"1em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathrm"},"mod"))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),(0,s.kt)("p",{parentName:"blockquote"},"Avec:"),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("span",{parentName:"li",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"s")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"))))," la cha\xeene de caract\xe8res"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("span",{parentName:"li",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))," la taille de la cha\xeene de caract\xe8res"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("span",{parentName:"li",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s[i]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"))))," le code ASCII du caract\xe8re \xe0 l'index ",(0,s.kt)("span",{parentName:"li",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"i")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"))))," dans la cha\xeene de caract\xe8res"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("span",{parentName:"li",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"p")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"))))," un nombre (g\xe9n\xe9ralement un nombre premier)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("span",{parentName:"li",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"m")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"m")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"))))," un nombre (g\xe9n\xe9ralement une puissance de 2)"))),(0,s.kt)("h2",{id:"exercice-2-r\xe9paration-de-robots"},"Exercice 2 (R\xe9paration de Robots)"),(0,s.kt)("p",null,"l'id\xe9e de cet exercice est d'utiliser une ",(0,s.kt)("strong",{parentName:"p"},"table associative")," pour r\xe9soudre un probl\xe8me."),(0,s.kt)("p",null,"Nous avons des robots qui sont en panne. Chaque robot est identifi\xe9 par son nom compos\xe9 de 2 lettres majuscules. Je vous donne la liste des robots en panne et les diff\xe9rentes d\xe9penses pour les r\xe9parer."),(0,s.kt)("p",null,"Voil\xe0 la fonction qui g\xe9n\xe8re la liste des r\xe9parations effectu\xe9es en donnant sous forme de ",(0,s.kt)("inlineCode",{parentName:"p"},"std::pair")," le nom du robot et le co\xfbt de la r\xe9paration:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <iostream>\n#include <vector>\n\nstd::vector<std::pair<std::string, float>> getRobotsFix(size_t size) {\n    std::vector<std::pair<std::string, float>> robotsFix;\n    robotsFix.reserve(size);\n    for (size_t i {0}; i < size; ++i) {\n        // random name \n        std::string robotName {\"\"};\n        robotName.reserve(2);\n        for(size_t j {0}; j < 2; ++j) {\n            robotName.push_back('A' + rand() % 26);\n        }\n\n        // random cost\n        float cost {static_cast<float>(rand()) / RAND_MAX * 1000.0f};\n        robotsFix.push_back(std::make_pair(robotName, cost));\n    }\n    return robotsFix;\n}\n")),(0,s.kt)("p",null,"J'aimerai \xeatre capable de lister pour un robot donn\xe9 l'ensemble des r\xe9parations effectu\xe9es pour ce robot. Par exemple, pour le robot \"AB\", j'aimerai avoir la liste des r\xe9parations effectu\xe9es pour ce robot."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Pour cela, je vous demande d'\xe9crire une fonction qui prend en param\xe8tre la liste des r\xe9parations effectu\xe9es et qui retourne une table associative (un ",(0,s.kt)("inlineCode",{parentName:"p"},"std::unordered_map"),") qui associe \xe0 chaque robot la liste des r\xe9parations effectu\xe9es pour ce robot (sous forme de ",(0,s.kt)("inlineCode",{parentName:"p"},"std::vector<float>"),").")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\xc9crire une fonction qui prend en un ",(0,s.kt)("inlineCode",{parentName:"p"},"std::vector<float>")," et qui retourne la somme des \xe9l\xe9ments de ce vecteur.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Utiliser les deux fonctions pr\xe9c\xe9dentes pour afficher la somme des r\xe9parations effectu\xe9es pour chaque robot. (\xe0 partir de la liste des r\xe9parations effectu\xe9es obtenue avec la fonction ",(0,s.kt)("inlineCode",{parentName:"p"},"getRobotsFix"),")."))),(0,s.kt)("h2",{id:"exercice-3-hash-sur-une-structure"},"Exercice 3 (hash sur une structure)"),(0,s.kt)("p",null,"Donnons nous les enums et structures suivantes:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"enum class CardKind {\n    Heart,\n    Diamond,\n    Club,\n    Spade,\n};\n\nenum class CardValue {\n    Two,\n    Three,\n    Four,\n    Five,\n    Six,\n    Seven,\n    Eight,\n    Nine,\n    Ten,\n    Jack,\n    Queen,\n    King,\n    Ace,\n};\n\nstruct Card {\n    CardKind kind;\n    CardValue value;\n};\n")),(0,s.kt)("p",null,"L'id\xe9e de cet exercice est de cr\xe9er une fonction de hachage pour la structure ",(0,s.kt)("inlineCode",{parentName:"p"},"Card")," pour que l'on puisse utiliser cette structure comme cl\xe9 dans une table de hachage."),(0,s.kt)("p",null,"la biblioth\xe8que standard C++ fournit une fonction de hachage pour les types de base (entiers, flottants, etc.) et les cha\xeenes de caract\xe8res. Mais elle ne fournit pas de fonction de hachage pour nos structures."),(0,s.kt)("p",null,"De la m\xeame fa\xe7on que l'on a surcharg\xe9 les op\xe9rateurs pour nos structures, on va pouvoir surcharger la fonction de hachage de notre structure."),(0,s.kt)("p",null,"Il faut deux choses pour pouvoir utiliser une ",(0,s.kt)("strong",{parentName:"p"},"structure")," comme cl\xe9 dans une table de hachage:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"une fonction de hachage de cette structure"),(0,s.kt)("li",{parentName:"ul"},"un op\xe9rateur ",(0,s.kt)("inlineCode",{parentName:"li"},"==")," pour comparer deux structures")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Surchargez l'op\xe9rateur")," ",(0,s.kt)("inlineCode",{parentName:"p"},"==")," pour la structure ",(0,s.kt)("inlineCode",{parentName:"p"},"Card")," (deux cartes sont \xe9gales si elles ont la m\xeame valeur et la m\xeame couleur).")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\xc9crire une ",(0,s.kt)("strong",{parentName:"p"},"m\xe9thode")," ",(0,s.kt)("inlineCode",{parentName:"p"},"hash")," pour la structure ",(0,s.kt)("inlineCode",{parentName:"p"},"Card")," qui retourne un entier;"))),(0,s.kt)("p",null,"Voil\xe0 le code qui va faire en sorte que la biblioth\xe8que standard utilise notre m\xe9thode ",(0,s.kt)("inlineCode",{parentName:"p"},"hash")," pour la structure ",(0,s.kt)("inlineCode",{parentName:"p"},"Card"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"namespace std {\n    template<>\n    struct hash<Card> {\n        size_t operator()(const Card& card) const {\n            return card.hash();\n        }\n    };\n}\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Je ne vous demande pas de comprendre ce code, il y a des notions plus complexes que vous d\xe9couvrirez l'ann\xe9e prochaine. Gardez simplement en t\xeate que ce code permet de faire en sorte que la biblioth\xe8que standard utilise notre m\xe9thode ",(0,s.kt)("inlineCode",{parentName:"p"},"hash")," pour la structure ",(0,s.kt)("inlineCode",{parentName:"p"},"Card"),".")),(0,s.kt)("p",null,"Je vous donne \xe9galement une fonction qui permet de g\xe9n\xe9rer une liste de cartes al\xe9atoires:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <vector>\nstd::vector<Card> getCards(size_t size) {\n    std::vector<Card> cards;\n    cards.reserve(size);\n    for (size_t i {0}; i < size; ++i) {\n        Card card;\n        card.kind = static_cast<CardKind>(rand() % 4);\n        card.value = static_cast<CardValue>(rand() % 13);\n        cards.push_back(card);\n    }\n    return cards;\n}\n")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Utiliser la fonction ",(0,s.kt)("inlineCode",{parentName:"p"},"getCards")," pour g\xe9n\xe9rer une liste de 100 cartes al\xe9atoires. Utiliser une table de hachage ",(0,s.kt)("inlineCode",{parentName:"p"},"std::unordered_map")," pour compter le nombre de fois que chaque carte appara\xeet dans la liste et afficher le r\xe9sultat.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Trouver une fonction de hachage de notre structure ",(0,s.kt)("inlineCode",{parentName:"p"},"Card")," revient \xe0 trouver une fa\xe7on de transformer une carte en un entier. Il y a de nombreuses fa\xe7on se s'y prendre mais pour ce cas pr\xe9cis il existe une fonction de hachage dite ",(0,s.kt)("strong",{parentName:"p"},"parfaite"),". On peux se rendre compte qu'il y a seulement ",(0,s.kt)("strong",{parentName:"p"},"52")," cartes diff\xe9rentes. On peux donc utiliser une fonction de hachage qui retourne un entier compris entre 0 et 51 avec un nombre diff\xe9rent pour chaque carte et donc sans collision."),(0,s.kt)("p",{parentName:"li"},"Trouvez un moyen simple (\xe0 l'aide d'une simple multiplication et des cast) d'am\xe9liorer la fonction de hachage de notre structure ",(0,s.kt)("inlineCode",{parentName:"p"},"Card")," pour quelle soit ",(0,s.kt)("strong",{parentName:"p"},"parfaite"),"."))))}u.isMDXComponent=!0}}]);