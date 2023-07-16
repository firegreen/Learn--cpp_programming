"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[417],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(7462),a=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=m(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=g({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),k=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var k=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==l&&(p(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function C(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(h,(0,r.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return a.createElement(C,(0,r.Z)({key:String(t)},e))}},2012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={title:"Premier programme",tags:["C++"],sidebar_position:3},s="Compiler votre premier programme",u={unversionedId:"Lessons/Setup/HelloImac",id:"Lessons/Setup/HelloImac",title:"Premier programme",description:"C'est maintenant le moment de compiler votre premier programme !",source:"@site/content/Lessons/Setup/HelloImac.md",sourceDirName:"Lessons/Setup",slug:"/Lessons/Setup/HelloImac",permalink:"/Learn--cpp_programming/Lessons/Setup/HelloImac",draft:!1,tags:[{label:"C++",permalink:"/Learn--cpp_programming/tags/c"}],version:"current",sidebarPosition:3,frontMatter:{title:"Premier programme",tags:["C++"],sidebar_position:3},sidebar:"sidebar",previous:{title:"CMake",permalink:"/Learn--cpp_programming/Lessons/Setup/Cmake"},next:{title:"Un monde de variables",permalink:"/Learn--cpp_programming/Lessons/Variables"}},c={},p=[{value:"Utiliser CMake et VSCode",id:"utiliser-cmake-et-vscode",level:2},{value:"Quelques explications sur le programme",id:"quelques-explications-sur-le-programme",level:2},{value:"#include ?",id:"include-",level:3},{value:"La fonction main",id:"la-fonction-main",level:3},{value:"Hello and welcome to IMAC !",id:"hello-and-welcome-to-imac-",level:3}],m=(d="VSCodeExtension",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const g={toc:p},f="wrapper";function k(e){let{components:t,...l}=e;return(0,a.kt)(f,(0,r.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"compiler-votre-premier-programme"},"Compiler votre premier programme"),(0,a.kt)("p",null,"C'est maintenant le moment de compiler votre premier programme !"),(0,a.kt)("p",null,"Vous pouvez cr\xe9er un fichier d'extension ",(0,a.kt)("em",{parentName:"p"},"cpp")," avec le code suivant:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="helloImac.cpp"',title:'"helloImac.cpp"'},'#include <iostream>\n\nint main() {\n    std::cout << "Hello and welcome to IMAC !" << std::endl;\n    return 0;\n}\n')),(0,a.kt)("p",null,"Une fois le fichier cr\xe9\xe9, il suffit d'ex\xe9cuter la commande suivante pour produire l'ex\xe9cutable compil\xe9:"),(0,a.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cl helloImac.cpp\n")),(0,a.kt)("p",null,"Cela va produire un ex\xe9cutable du m\xeame nom que le fichier cpp."),(0,a.kt)("p",null,"Une fois compil\xe9 il suffit de l'ex\xe9cuter avec la commande suivante :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./helloImac.exe\n"))),(0,a.kt)(i.Z,{value:"Linux&iOS",label:"Linux et iOS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"g++ helloImac.cpp -o helloImac\n")),(0,a.kt)("p",null,"Une fois compil\xe9 il suffit de l'ex\xe9cuter avec la commande suivante :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./helloImac\n")))),(0,a.kt)("h2",{id:"utiliser-cmake-et-vscode"},"Utiliser CMake et VSCode"),(0,a.kt)("p",null,"C'est donc possible de le faire uniquement avec des lignes de commandes mais par simplicit\xe9 nous allons d\xe8s maintenant utiliser ",(0,a.kt)("strong",{parentName:"p"},"CMake")," dont j'ai parl\xe9 pr\xe9c\xe9demment qui s'int\xe8gre facilement avec ",(0,a.kt)("strong",{parentName:"p"},"VSCode"),"."),(0,a.kt)("p",null,"Pour utiliser ",(0,a.kt)("strong",{parentName:"p"},"CMake")," il faut tout d'abord cr\xe9er un fichier nomm\xe9 ",(0,a.kt)("strong",{parentName:"p"},"CMakeLists.txt"),"\nVoici le premier qu'on va utiliser (quelques explications en commentaire ",(0,a.kt)("strong",{parentName:"p"},'"#"')," du fichier):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cmake",metastring:'title="CMakeLists.txt"',title:'"CMakeLists.txt"'},'# Nous voulons un cmake "r\xe9cent" pour utiliser les derni\xe8res fonctionnalit\xe9s\ncmake_minimum_required(VERSION 3.0)\n\n# La version du C++ que l\'on souhaite utiliser (dans notre cas C++17 pour faire du C++ moderne)\nset(CMAKE_CXX_STANDARD 17)\n\n# Le nom du projet\nproject(IMAC_project)\n\n# On indique que l\'on veut cr\xe9er un ex\xe9cutable "helloImac" compil\xe9 \xe0 partir du fichier helloImac.cpp\nadd_executable(helloImac helloImac.cpp)\n')),(0,a.kt)("p",null,"Ce fichier ",(0,a.kt)("strong",{parentName:"p"},"CMakeLists.txt")," va \xeatre bien pratique car il est reconnu par divers ",(0,a.kt)("strong",{parentName:"p"},"IDE")," et en ce qui nous concerne on va l'utiliser avec ",(0,a.kt)("strong",{parentName:"p"},"VSCode"),"."),(0,a.kt)("p",null,"Il suffit d'avoir au pr\xe9alable installer l'extension dont je vous ai parl\xe9 ",(0,a.kt)(m,{id:"twxs.cmake",mdxType:"VSCodeExtension"})," et d'ouvrir le dossier contenant le fichier ",(0,a.kt)("strong",{parentName:"p"},"CMakeLists.txt"),' dans VSCode (il est recommand\xe9 de cr\xe9er un dossier d\xe9di\xe9 au "projet" contenant les fichiers sources et le fichier ',(0,a.kt)("strong",{parentName:"p"},"CMakeLists.txt"),").\nL'extension devrait normalement reconnaitre automatiquement qu'il y a un fichier cmake et vous proposer d'initialiser celui-ci automatiquement."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9602).Z,width:"546",height:"126"})),(0,a.kt)("p",null,"Si c'est la premi\xe8re fois que vous l'ouvrez ce qui est s\xfbrement le cas il devrait vous demander de choisir un ",(0,a.kt)("strong",{parentName:"p"},"kit")," de compilation et faudra donc selectionner ",(0,a.kt)("strong",{parentName:"p"},"MSVC")," ou ",(0,a.kt)("strong",{parentName:"p"},"GCC")," en fonction de votre platforme."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3474).Z,width:"649",height:"139"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Si ce n'est pas le cas vous pouvez toujours utiliser le racourci ",(0,a.kt)("kbd",null,"Ctrl"),"+",(0,a.kt)("kbd",null,"Shift"),"+",(0,a.kt)("kbd",null,"P"),' puis taper et selectionner "CMake: select a kit"')),(0,a.kt)("p",null,"Une fois tout initialis\xe9, vous devriez voir des logs dans un terminal ressemblant \xe0 cela (dans mon cas sous ",(0,a.kt)("strong",{parentName:"p"},"Linux")," avec le compilateur ",(0,a.kt)("strong",{parentName:"p"},"GCC")," ici):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[variant] Loaded new set of variants\n[kit] Successfully loaded 1 kits from /home/user/.local/share/CMakeTools/cmake-tools-kits.json\n[proc] Executing command: /usr/bin/cmake --version\n[proc] Executing command: /usr/bin/gcc -v\n[proc] The command: ninja --version failed with error: Error: spawn ninja ENOENT\n[proc] The command: ninja-build --version failed with error: Error: spawn ninja-build ENOENT\n[proc] Executing command: /usr/bin/cmake "-S/home/user/DATA/Cours IMAC1/helloImac" "-B/home/user/DATA/Cours IMAC1/helloImac/build" -G "Unix Makefiles"\n[main] Configuring project: helloImac \n[proc] Executing command: /usr/bin/cmake --no-warn-unused-cli -DCMAKE_EXPORT_COMPILE_COMMANDS:BOOL=TRUE -DCMAKE_BUILD_TYPE:STRING=Debug -DCMAKE_C_COMPILER:FILEPATH=/usr/bin/gcc -DCMAKE_CXX_COMPILER:FILEPATH=/usr/bin/g++ "-S/home/user/DATA/Cours IMAC1/helloImac" "-B/home/user/DATA/Cours IMAC1/helloImac/build" -G "Unix Makefiles"\n[cmake] Not searching for unused variables given on the command line.\n[cmake] -- Configuring done\n[cmake] -- Generating done\n[cmake] -- Build files have been written to: /home/user/DATA/Cours IMAC1/helloImac/build\n')),(0,a.kt)("p",null,'Vous pouvez maintenant cliquer sur le bouton "play" dans la barre en bas pour lancer et ex\xe9cuter le programme. \ud83e\udd73'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9937).Z,width:"1012",height:"748"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Cmake devrait normalement cr\xe9er un dossier ",(0,a.kt)("strong",{parentName:"p"},"build"),", c'est normal.\nCMake est un outil de compilation mais ne compile pas directement, il permet de g\xe9n\xe9rer des fichiers permettant ensuite de compiler un projet.\nVous n'avez pas besoin d'aller voir ce qui s'y trouve, CMake g\xe8re automatiquement ce dossier build pour vous.")),(0,a.kt)("h2",{id:"quelques-explications-sur-le-programme"},"Quelques explications sur le programme"),(0,a.kt)("h3",{id:"include-"},"#include ?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <iostream>\n")),(0,a.kt)("p",null,"Le but de notre programme est d\u2019afficher un message. Des d\xe9veloppeurs experts ont d\xe9j\xe0 cr\xe9\xe9 un outil qui permet de le faire facilement. Il se trouve dans un fichier nomm\xe9 ",(0,a.kt)("strong",{parentName:"p"},"iostream"),", acronyme de ",(0,a.kt)("strong",{parentName:"p"},'"Input Output Stream"'),", soit ",(0,a.kt)("strong",{parentName:"p"},'"Flux d\u2019Entr\xe9es Sorties"'),". Ce fichier fait partie de la biblioth\xe8que standard C++ ",(0,a.kt)("strong",{parentName:"p"},"STD"),' (pour "C++ ',(0,a.kt)("strong",{parentName:"p"},"ST"),"andar",(0,a.kt)("strong",{parentName:"p"},"D"),' library"), un ensemble de fonctionnalit\xe9s d\xe9j\xe0 pr\xe9-cod\xe9es et inclues partout avec chaque compilateur C++.'),(0,a.kt)("p",null,'Pour utiliser les fonctionnalit\xe9s offertes par ce fichier, notamment \xe9crire un message, on doit l\u2019importer dans notre programme. On dit qu\u2019on l\u2019inclut, d\u2019o\xf9 l\u2019anglais "',(0,a.kt)("strong",{parentName:"p"},"include"),'". Nous utiliserons beaucoup cette fonctionnalit\xe9 en C++.'),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Retenez que ",(0,a.kt)("strong",{parentName:"p"},"#include")," nous permet d\u2019importer des fichiers pour les inclure dans le programme que l'on est en train d'\xe9crire, et je le d\xe9taillerai plus tard dans le semestre.")),(0,a.kt)("h3",{id:"la-fonction-main"},"La fonction main"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int main() {\n    // ...\n    return 0;\n}\n")),(0,a.kt)("p",null,"Lorsqu\u2019on lance le programme, celui-ci doit savoir par o\xf9 commencer. On parle de point d\u2019entr\xe9e. Ce point d'entr\xe9e doit \xeatre une fonction nomm\xe9e ",(0,a.kt)("strong",{parentName:"p"},"main")," et renvoyer une valeur avec le mot cl\xe9 ",(0,a.kt)("strong",{parentName:"p"},"return"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"La valeur de retour (de type int) du main indique si le programme s\u2019est termin\xe9 sans erreur. Si tout se passe bien, il faut retourner ",(0,a.kt)("strong",{parentName:"p"},"0"),". N\u2019importe quelle autre valeur indique une erreur.")),(0,a.kt)("h3",{id:"hello-and-welcome-to-imac-"},"Hello and welcome to IMAC !"),(0,a.kt)("p",null,"L\u2019instruction ci-dessous permet d\u2019afficher la cha\xeene de caract\xe8res \u201cHello and welcome to IMAC !\u201d sur la sortie standard du programme."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'std::cout << "Hello and welcome to IMAC !" << std::endl;\n')),(0,a.kt)("p",null,'Premi\xe8rement "',(0,a.kt)("strong",{parentName:"p"},"std"),'" fait r\xe9f\xe9fence \xe0 la biblioth\xe8que standard C++ dont je parlais pr\xe9c\xe9demment.'),(0,a.kt)("p",null,"std",(0,a.kt)("strong",{parentName:"p"},"::")," permet d'indiquer que l'on veut utiliser une fonctionnalit\xe9 particuli\xe8re de cette biblioth\xe8que ici ",(0,a.kt)("strong",{parentName:"p"},"cout"),":"),(0,a.kt)("p",null,"Il s\u2019agit de l'objet (on parle de stream dans le jargon C++) permettant d'\xe9crire sur la sortie standard du programme, g\xe9n\xe9ralement le terminal. Le ",(0,a.kt)("strong",{parentName:"p"},"'c'")," fait r\xe9f\xe9rence \xe0 ",(0,a.kt)("strong",{parentName:"p"},"caract\xe8re")," et ",(0,a.kt)("strong",{parentName:"p"},"\u2018out\u2019")," indique ",(0,a.kt)("strong",{parentName:"p"},"\u2018sortie\u2019"),"."),(0,a.kt)("p",null,"Enfin, ",(0,a.kt)("strong",{parentName:"p"},"std::endl"),' indique ici "end-line" soit la ',(0,a.kt)("strong",{parentName:"p"},"'fin de ligne'"),"."),(0,a.kt)("p",null,"Et voil\xe0 ! Vous avez ex\xe9cut\xe9 votre premier programme C++ \xe0 l'aide de VSCode ! \ud83c\udf89"))}k.isMDXComponent=!0},9937:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/VSCode_cmakePlay-5b08b23b777ac96df677a6ec32d8223e.png"},9602:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/VSCode_projectConfiguration-5840585681a0ba059bed424adc4df340.png"},3474:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/VSCode_selectKit-585c5c632ed4e181b85d7f7898f7cd4c.png"}}]);