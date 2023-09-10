"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[6942],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,k=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:i,o[1]=p;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={title:"TD7 - Structures",sidebar_position:7},o=void 0,p={unversionedId:"TDs/Struct",id:"TDs/Struct",title:"TD7 - Structures",description:"Exercice 1",source:"@site/content/TDs/07_Struct.md",sourceDirName:"TDs",slug:"/TDs/Struct",permalink:"/Learn--cpp_programming/TDs/Struct",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"TD7 - Structures",sidebar_position:7},sidebar:"TDs",previous:{title:"TD6 - Fonctions",permalink:"/Learn--cpp_programming/TDs/Functions"},next:{title:"TD8 - Headers",permalink:"/Learn--cpp_programming/TDs/headers"}},l={},u=[{value:"Exercice 1",id:"exercice-1",level:2}],s={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"exercice-1"},"Exercice 1"),(0,i.kt)("p",null,"Vous \xeates le pilote d'un sous-marin, vous avez re\xe7u des ordres de mouvements sous la forme d'une instruction et d'une distance \xe0 parcourir. Vous devez \xe9crire un programme qui permet de calculer la position du sous-marin apr\xe8s avoir effectu\xe9 les mouvements re\xe7us."),(0,i.kt)("p",null,"Votre position initiale est (0, 0) et vous pouvez vous d\xe9placer dans les directions suivantes: Haut, Bas, Avant, Arri\xe8re."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\xc9crire une ",(0,i.kt)("strong",{parentName:"p"},"structure")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Position")," qui permet de stocker les coordonn\xe9es du sous-marin.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\xc9crire un ",(0,i.kt)("strong",{parentName:"p"},"enum")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Direction")," qui permet de stocker les directions possibles.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\xc9crire une structure ",(0,i.kt)("inlineCode",{parentName:"p"},"Move")," qui repr\xe9sente un mouvement sous la forme d'une direction et d'une distance \xe0 parcourir.")),(0,i.kt)("li",{parentName:"ul"}),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\xc9crire une fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"moveSubmarine")," qui permet de d\xe9placer le sous-marin en fonction d'un mouvement. La fonction ne doit rien retourner et doit modifier la position du sous-marin pass\xe9e en param\xe8tre.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\xc9crire une fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"display")," qui permet d'afficher la position du sous-marin pass\xe9e en param\xe8tre."))),(0,i.kt)("p",null,"Le but est d'indiquer la position du sous-marin apr\xe8s avoir effectu\xe9 les mouvements suivants:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Avant 10")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Bas 5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Arri\xe8re 3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Haut 2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Avant 5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Bas 1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Arri\xe8re 2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Avant 3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Bas 1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Haut 3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Avant 1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Bas 5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Arri\xe8re 2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Avant 6"))),(0,i.kt)("p",null,"Vous pouvez repr\xe9senter les mouvements sous la forme d'un vecteur de ",(0,i.kt)("inlineCode",{parentName:"p"},"Move"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector<Move> moves = {\n    {Direction::Forward, 10},\n    {Direction::Down, 5},\n    {Direction::Backward, 3},\n    {Direction::Up, 2},\n    {Direction::Forward, 5},\n    {Direction::Down, 1},\n    {Direction::Backward, 2},\n    {Direction::Forward, 3},\n    {Direction::Down, 1},\n    {Direction::Up, 3},\n    {Direction::Forward, 1},\n    {Direction::Down, 5},\n    {Direction::Backward, 2},\n    {Direction::Forward, 6}\n};\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Exercice inspir\xe9 de de l'\xe9dition ",(0,i.kt)("strong",{parentName:"p"},"2021")," de l'",(0,i.kt)("strong",{parentName:"p"},"advent of code"),": ",(0,i.kt)("a",{parentName:"p",href:"https://adventofcode.com/2021/day/2"},"https://adventofcode.com/2021/day/2"))))}m.isMDXComponent=!0}}]);