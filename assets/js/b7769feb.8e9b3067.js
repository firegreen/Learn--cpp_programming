"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[5852],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(l,".").concat(d)]||c[d]||m[d]||s;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={title:"Structure: organiser nos donn\xe9es",tags:["C++"],sidebar_position:7},o=void 0,i={unversionedId:"Lessons/S1/Struct",id:"Lessons/S1/Struct",title:"Structure: organiser nos donn\xe9es",description:'En C++, on a parl\xe9 de structure de donn\xe9es avec les tableaux. Il est \xe9galement possible de cr\xe9er notre propre structure de donn\xe9es en regroupant plusieurs variables en un seul bloc appel\xe9 "structure" (ou "struct").',source:"@site/content/Lessons/S1/Struct.md",sourceDirName:"Lessons/S1",slug:"/Lessons/S1/Struct",permalink:"/Learn--cpp_programming/Lessons/S1/Struct",draft:!1,tags:[{label:"C++",permalink:"/Learn--cpp_programming/tags/c"}],version:"current",sidebarPosition:7,frontMatter:{title:"Structure: organiser nos donn\xe9es",tags:["C++"],sidebar_position:7},sidebar:"Lessons",previous:{title:"Fonctions : D\xe9couper son code",permalink:"/Learn--cpp_programming/Lessons/S1/Functions"},next:{title:"Compilation et Headers: S\xe9parer en plusieurs fichiers",permalink:"/Learn--cpp_programming/Lessons/S1/Headers"}},l={},p=[{value:"D\xe9claration",id:"d\xe9claration",level:2},{value:"Initialisation",id:"initialisation",level:2},{value:"Valeurs par d\xe9faut",id:"valeurs-par-d\xe9faut",level:3},{value:"Utilisation",id:"utilisation",level:2},{value:"Passage par r\xe9f\xe9rence",id:"passage-par-r\xe9f\xe9rence",level:2},{value:"Des m\xe9thodes",id:"des-m\xe9thodes",level:2},{value:"Prototype de m\xe9thodes",id:"prototype-de-m\xe9thodes",level:3},{value:"M\xe9thode constante",id:"m\xe9thode-constante",level:3},{value:"Conflit de noms",id:"conflit-de-noms",level:3},{value:"Aller plus loin: Forward Declaration",id:"aller-plus-loin-forward-declaration",level:2},{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"En ",(0,r.kt)("strong",{parentName:"p"},"C++"),", on a parl\xe9 de ",(0,r.kt)("strong",{parentName:"p"},"structure de donn\xe9es")," avec les ",(0,r.kt)("strong",{parentName:"p"},"tableaux"),". Il est \xe9galement possible de cr\xe9er notre propre structure de donn\xe9es en ",(0,r.kt)("strong",{parentName:"p"},"regroupant")," plusieurs variables en un seul ",(0,r.kt)("strong",{parentName:"p"},"bloc"),' appel\xe9 "',(0,r.kt)("strong",{parentName:"p"},"structure"),'" (ou "',(0,r.kt)("strong",{parentName:"p"},"struct"),'").'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'\xc0 partir de maintenant, j\u2019emploierai le terme "',(0,r.kt)("strong",{parentName:"p"},"structure"),'" ou "',(0,r.kt)("strong",{parentName:"p"},"struct"),'" pour d\xe9signer ces ',(0,r.kt)("strong",{parentName:"p"},"structures"),' et le terme de "',(0,r.kt)("strong",{parentName:"p"},"structure de donn\xe9es"),'" pour d\xe9signer des formes plus complexes de donn\xe9es de mani\xe8re g\xe9n\xe9rale comme le ',(0,r.kt)("inlineCode",{parentName:"p"},"std::vector")," par exemple.")),(0,r.kt)("h2",{id:"d\xe9claration"},"D\xe9claration"),(0,r.kt)("p",null,"C'est en utilisant le mot-cl\xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," que l'on va cr\xe9er une nouvelle ",(0,r.kt)("strong",{parentName:"p"},"structure"),".\nLa syntaxe de d\xe9claration est la suivante:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"struct nom\n{\n    // liste des membres\n    // type nom;\n    // type nom;\n};\n")),(0,r.kt)("p",null,"Cette structure est ensuite utilisable comme n'importe quel autre ",(0,r.kt)("strong",{parentName:"p"},"type")," de variable."),(0,r.kt)("p",null,"Un exemple de d\xe9claration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"struct People\n{\n    std::string name;\n    std::string lastName;\n    unsigned int age;\n};\n")),(0,r.kt)("h2",{id:"initialisation"},"Initialisation"),(0,r.kt)("p",null,"Pour initialiser une ",(0,r.kt)("strong",{parentName:"p"},"structure"),", il y a plusieurs fa\xe7ons de faire similaire \xe0 la d\xe9claration des ",(0,r.kt)("strong",{parentName:"p"},"variables"),' "classiques".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// Initialisation avec des valeurs (elles doivent \xeatre ordonn\xe9es comme les membres de la structure)\nPeople people { "name", "lastName", 42 };\n\n// Syntaxe possible utilisant le signe = (comme en C)\nPeople people = { "name", "lastName", 42 };\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Lors de l'initialisation avec des valeurs, elles doivent \xeatre ordonn\xe9es dans l\u2019ordre dans lequel elles sont d\xe9finies dans la structure. On ne peut pas donner juste un entier comme premi\xe8re valeur pour l'age dans notre cas.")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Comme pour les variables, ne pas initialiser une ",(0,r.kt)("strong",{parentName:"p"},"structure")," est un ",(0,r.kt)("strong",{parentName:"p"},"comportement ind\xe9termin\xe9"),"."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Initialisation ind\xe9termin\xe9e\nPeople defaultPeople;\n")),(0,r.kt)("p",{parentName:"admonition"},"Dans ce cas, il faut s'",(0,r.kt)("strong",{parentName:"p"},"assurer")," de bien d\xe9finir les membres de la structure ensuite !")),(0,r.kt)("h3",{id:"valeurs-par-d\xe9faut"},"Valeurs par d\xe9faut"),(0,r.kt)("p",null,"Lors de l'initialisation, si il n'y a pas de valeur fournie entre ",(0,r.kt)("strong",{parentName:"p"},"accolades")," (",(0,r.kt)("kbd",null,"{}"),") pour les membres de la structure, ils seront initialis\xe9s avec une valeur par d\xe9faut. Pour les ",(0,r.kt)("strong",{parentName:"p"},"types primitifs")," (comme ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"float"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"double"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"char"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bool"),", etc.) la valeur par d\xe9faut est ",(0,r.kt)("strong",{parentName:"p"},"z\xe9ro"),". Pour les ",(0,r.kt)("strong",{parentName:"p"},"objets")," (comme ",(0,r.kt)("inlineCode",{parentName:"p"},"std::string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"std::vector"),", etc.) la valeur par d\xe9faut est ",(0,r.kt)("strong",{parentName:"p"},"l'objet vide"),"."),(0,r.kt)("p",null,"Si une ",(0,r.kt)("strong",{parentName:"p"},"valeur")," est fournie en m\xeame temps que la d\xe9claration d'un membre, c'est cette valeur qui sera utilis\xe9e lors de l'initialisation par d\xe9faut de la structure."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="un exemple"',title:'"un','exemple"':!0},'#include <iostream>\n#include <string>\n\nstruct Product\n{\n    std::string name {"unknown"};\n    float price {0.f};\n    unsigned int quantity {1};\n};\n\nvoid Display(Product const& product)\n{\n    std::cout << "Name: " << product.name << std::endl;\n    std::cout << "Price: " << product.price << std::endl;\n    std::cout << "Quantity: " << product.quantity << std::endl;\n}\n\nint main()\n{\n    Product unknownProduct {};\n\n    Display(unknownProduct);\n\n    return 0;\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Name: unknown\nPrice: 0     \nQuantity: 1 \n")),(0,r.kt)("admonition",{title:"R\xe9sum\xe9 de toutes les possibilit\xe9s d'initialisation",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Si une structure est initialis\xe9e ",(0,r.kt)("strong",{parentName:"p"},"avec accolades")," (ce qu'il fait faire tout le temps comme pour les variables) :"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"S'il existe une valeur d'initialisation explicite dans les accolades, cette valeur explicite est utilis\xe9e."),(0,r.kt)("li",{parentName:"ul"},"Si une valeur est manquante dans les accolades et qu'il existe une valeur de variable membre par d\xe9faut, cette valeur est utilis\xe9e. (c'est l'exemple de la structure ",(0,r.kt)("inlineCode",{parentName:"li"},"Product")," ci-dessus)"),(0,r.kt)("li",{parentName:"ul"},"Si une valeur est manquante dans les accolades et qu'il n'y a pas valeur par d\xe9faut dans la structure, l'initialisation par d\xe9faut pour le type de la variable est utilis\xe9e.")),(0,r.kt)("p",{parentName:"admonition"},"Si une structure est initialis\xe9e ",(0,r.kt)("strong",{parentName:"p"},"sans accolades")," (ce qui est \xe0 \xe9viter) :"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"S'il existe une valeur d'initialisation explicite dans les accolades, cette valeur est utilis\xe9e."),(0,r.kt)("li",{parentName:"ul"},"Si une valeur est manquante dans les accolades, la variable membre reste non initialis\xe9e. (",(0,r.kt)("strong",{parentName:"li"},"comportement ind\xe9termin\xe9"),")"))),(0,r.kt)("h2",{id:"utilisation"},"Utilisation"),(0,r.kt)("p",null,"Pour manipuler un ",(0,r.kt)("strong",{parentName:"p"},"membre"),", c\u2019est-\xe0-dire une ",(0,r.kt)("strong",{parentName:"p"},"variable")," appartenant \xe0 la structure, il suffit d\u2019utiliser la syntaxe ",(0,r.kt)("inlineCode",{parentName:"p"},"structure.membre"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include <string>\n\nstruct People\n{\n    std::string name;\n    std::string lastName;\n    unsigned int age;\n};\n\nint main()\n{\n    People people { "name", "lastName", 42 };\n\n    // Modification de l\'age\n    people.age = 19;\n\n    // Lecture des membres\n    std::cout << "My name is " << people.name << " " << people.lastName << " and i\'m " << people.age << " years old." << std::endl;\n\n    return 0;\n}\n')),(0,r.kt)("h2",{id:"passage-par-r\xe9f\xe9rence"},"Passage par r\xe9f\xe9rence"),(0,r.kt)("p",null,"Une ",(0,r.kt)("strong",{parentName:"p"},"structure")," \xe9tant un agr\xe9gat de donn\xe9es (plus ou moins gros) il est int\xe9ressant d'utiliser des ",(0,r.kt)("strong",{parentName:"p"},"r\xe9f\xe9rences")," pour passer en ",(0,r.kt)("strong",{parentName:"p"},"param\xe8tres")," nos ",(0,r.kt)("strong",{parentName:"p"},"structures")," afin d'\xe9viter des ",(0,r.kt)("strong",{parentName:"p"},"copies"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <string>\n#include <iostream>\n\nstruct Product\n{\n    std::string name;\n    float price;\n    unsigned int quantity;\n};\n\nfloat GetTotalPrice(Product const& product)\n{\n    return product.price * product.quantity;\n}\n\nint main()\n{\n    Product product { "Tomatos", 0.32, 12 };\n\n    // Lecture des membres\n    std::cout << "The total price for " << product.name << " is " << GetTotalPrice(product) << " \u20ac." << std::endl;\n\n    return 0;\n}\n')),(0,r.kt)("h2",{id:"des-m\xe9thodes"},"Des m\xe9thodes"),(0,r.kt)("p",null,"Maintenant que nous avons nos propres ",(0,r.kt)("strong",{parentName:"p"},"structures")," cela va devenir int\xe9ressant d'utiliser des ",(0,r.kt)("strong",{parentName:"p"},"m\xe9thodes"),".\nEn effet, dans mon exemple pr\xe9c\xe9dent j'ai cr\xe9\xe9 des fonctions ",(0,r.kt)("inlineCode",{parentName:"p"},"GetTotalPrice")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"Display"),". Mais j'aurais bien aim\xe9 pouvoir faire : ",(0,r.kt)("inlineCode",{parentName:"p"},"product.TotalPrice()"),". Autrement dit, cr\xe9er et utiliser une m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"TotalPrice()")," pour ma structure ",(0,r.kt)("inlineCode",{parentName:"p"},"Product"),". "),(0,r.kt)("p",null,"Il suffit simplement de d\xe9clarer notre fonction au sein m\xeame des ",(0,r.kt)("strong",{parentName:"p"},"accolades")," de notre structure comme cela:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"struct Product\n{\n    std::string name;\n    float price;\n    unsigned int quantity;\n\n    float TotalPrice()\n    {\n        return price * quantity;\n    }\n};\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Vous pouvez remarquer qu'ici je peux acc\xe9der aux membres de ma struct sans avoir \xe0 faire ",(0,r.kt)("inlineCode",{parentName:"p"},"struct.membre"),". En effet, la ",(0,r.kt)("strong",{parentName:"p"},"m\xe9thode")," a ",(0,r.kt)("strong",{parentName:"p"},"connaissance")," de la ",(0,r.kt)("strong",{parentName:"p"},"structure")," elle-m\xeame et peut ",(0,r.kt)("strong",{parentName:"p"},"manipuler")," ses ",(0,r.kt)("strong",{parentName:"p"},"membres")," directement.")),(0,r.kt)("h3",{id:"prototype-de-m\xe9thodes"},"Prototype de m\xe9thodes"),(0,r.kt)("p",null,"Comme pour les fonctions, il est possible de d\xe9clarer seulement le ",(0,r.kt)("strong",{parentName:"p"},"prototype")," de la m\xe9thode et d'impl\xe9menter le ",(0,r.kt)("strong",{parentName:"p"},"corps")," de la m\xe9thode plus tard. Il y a juste un petit d\xe9tail en plus, il faut indiquer \xe0 l'aide du ",(0,r.kt)("strong",{parentName:"p"},"nom")," de la structure et des caract\xe8res ",(0,r.kt)("kbd",null,"::")," ,l'",(0,r.kt)("strong",{parentName:"p"},"appartenance")," de la m\xe9thode \xe0 la structure (comme avec ",(0,r.kt)("inlineCode",{parentName:"p"},"std::"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"struct Product\n{\n    std::string name;\n    float price;\n    unsigned int quantity;\n\n    float TotalPrice();\n};\n\nfloat Product::TotalPrice()\n{\n    return price * quantity;\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"C'est une notion qui va \xeatre utile quand on verra la s\xe9paration du code en plusieurs fichiers.")),(0,r.kt)("h3",{id:"m\xe9thode-constante"},"M\xe9thode constante"),(0,r.kt)("p",null,"Ici, il est aussi possible de pr\xe9ciser qu'une m\xe9thode ne modifie pas la structure, on parle de ",(0,r.kt)("strong",{parentName:"p"},"m\xe9thode constante"),". Il faut ajouter le mot-cl\xe9 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"const"))," \xe0 la fin de la d\xe9claration de la m\xe9thode, avant le point virgule ",(0,r.kt)("kbd",null,";"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"struct Product\n{\n    std::string name;\n    float price;\n    unsigned int quantity;\n\n    float TotalPrice() const;\n};\n\nfloat Product::TotalPrice() const\n{\n    return price * quantity;\n}\n")),(0,r.kt)("p",null,"C'est important car si on ne le fait pas on ne pourra pas appeler une ",(0,r.kt)("strong",{parentName:"p"},"m\xe9thode non constante")," d'une ",(0,r.kt)("strong",{parentName:"p"},"variable constante")," car celle-ci est susceptible de modifier la structure alors que c'est interdit par la variable constante."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <iostream>\n#include <string>\n\nstruct Product\n{\n    std::string name;\n    float price;\n    unsigned int quantity;\n\n    float TotalPrice();\n};\n\nfloat Product::TotalPrice()\n{\n    return price * quantity;\n}\n\nint main()\n{\n    Product const tomatos { \"Tomatos\", 0.32, 12 };\n\n    // erreur ici: la variable tomatos est constante mais la m\xe9thode 'TotalPrice' ne l'est pas\n    // highlight-next-line\n    float tomatosPrice { tomatos.TotalPrice() };\n\n    return 0;\n}\n")),(0,r.kt)("p",null,"Il faut donc indiquer que la m\xe9thode est constante:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// le prototype\nfloat GetTotalPrice() const;\n\n// et la fonction\nfloat Product::GetTotalPrice() const\n{\n    return price * quantity;\n}\n")),(0,r.kt)("h3",{id:"conflit-de-noms"},"Conflit de noms"),(0,r.kt)("p",null,"Comme pour les fonctions, il est possible de passer des ",(0,r.kt)("strong",{parentName:"p"},"param\xe8tres")," \xe0 notre m\xe9thode."),(0,r.kt)("p",null,"Mais si le param\xe8tre a le m\xeame nom qu'un des ",(0,r.kt)("strong",{parentName:"p"},"membres")," de la structure il y a un conflit de noms."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"struct Product\n{\n    std::string name;\n    float price;\n    unsigned int quantity;\n\n    void ChangePrice(float price)\n    {\n        price = price;\n    }\n};\n")),(0,r.kt)("p",null,"Ici la variable ",(0,r.kt)("inlineCode",{parentName:"p"},"price")," manipul\xe9e dans la fonction n'est plus le ",(0,r.kt)("strong",{parentName:"p"},"membre")," mais le ",(0,r.kt)("strong",{parentName:"p"},"param\xe8tre"),", les ",(0,r.kt)("strong",{parentName:"p"},"param\xe8tres")," ont la ",(0,r.kt)("strong",{parentName:"p"},"priorit\xe9")," sur les ",(0,r.kt)("strong",{parentName:"p"},"membres")," de la structure."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Sur certains compilateurs bien configur\xe9s on peut avoir des ",(0,r.kt)("strong",{parentName:"p"},"warnings")," :"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Warning g\xe9n\xe9r\xe9 par clang"',title:'"Warning',"g\xe9n\xe9r\xe9":!0,par:!0,'clang"':!0},"Explicitly assigning value of variable of type 'float' to itself; did you mean to assign to member 'price'?\n")),(0,r.kt)("p",{parentName:"admonition"},"Mais ce n'est pas toujours le cas. Avec un ",(0,r.kt)("strong",{parentName:"p"},"param\xe8tre constant")," on aurait g\xe9n\xe9r\xe9 des erreurs de compilation et pas seulement un warning et c'est donc ",(0,r.kt)("strong",{parentName:"p"},"pr\xe9f\xe9rable")," pour mieux se rendre compte des erreurs."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"- Cannot assign to variable 'price' with const-qualified type 'const float'\n- assignment of read-only parameter 'price'\n"))),(0,r.kt)("p",null,"Pour \xe9viter la confusion, il est pr\xe9f\xe9rable d'utiliser le mot cl\xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," suivi des caract\xe8res ",(0,r.kt)("kbd",null,"->")," devant le nom d'un membre de la structure comme cela:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"struct Product\n{\n    std::string name;\n    float price;\n    unsigned int quantity;\n\n    void ChangePrice(float const price)\n    {\n        this->price = price;\n    }\n};\n")),(0,r.kt)("p",null,"Ici, plus de probl\xe8me, ",(0,r.kt)("inlineCode",{parentName:"p"},"this->price")," fait r\xe9f\xe9rence \xe0 notre ",(0,r.kt)("strong",{parentName:"p"},"membre")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"price")," est le ",(0,r.kt)("strong",{parentName:"p"},"param\xe8tre constant")," de la m\xe9thode."),(0,r.kt)("p",null,"Une ",(0,r.kt)("strong",{parentName:"p"},"autre solution")," pr\xe9f\xe9rable et ",(0,r.kt)("strong",{parentName:"p"},"recommand\xe9e")," est de ",(0,r.kt)("strong",{parentName:"p"},"renommer")," le nom du ",(0,r.kt)("strong",{parentName:"p"},"param\xe8tre")," pour \xe9viter cette confusion:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"struct Product\n{\n    std::string name;\n    float price;\n    unsigned int quantity;\n\n    void ChangePrice(float const newPrice)\n    {\n        price = newPrice;\n        // this->price = newPrice;\n    }\n};\n")),(0,r.kt)("p",null,"Vous \xeates libre de laisser ou non le ",(0,r.kt)("inlineCode",{parentName:"p"},"this->")," pour indiquer plus explicitement l'utilisation du ",(0,r.kt)("strong",{parentName:"p"},"membre")," de la structure surtout si c'est ",(0,r.kt)("strong",{parentName:"p"},"plus compr\xe9hensible")," pour vous."),(0,r.kt)("p",null,"Je ne rentre pas dans le d\xe9tail ici. Je reviendrai sur le fonctionnement du mot-cl\xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," dans un autre chapitre. Retenez simplement ici que cela permet d'indiquer explicitement que l'on souhaite ",(0,r.kt)("strong",{parentName:"p"},"manipuler la structure"),"."),(0,r.kt)("h2",{id:"aller-plus-loin-forward-declaration"},"Aller plus loin: Forward Declaration"),(0,r.kt)("p",null,"Parfois deux structures ont besoin l'une de l'autre, on veut utiliser une struct ",(0,r.kt)("strong",{parentName:"p"},"A")," dans une struct ",(0,r.kt)("strong",{parentName:"p"},"B")," et inversement."),(0,r.kt)("p",null,"Probl\xe8me, l'une est d\xe9finie avant l'autre et donc dans la premi\xe8re structure ",(0,r.kt)("strong",{parentName:"p"},"A")," il y a une erreur, ",(0,r.kt)("strong",{parentName:"p"},"B")," est encore inconnue."),(0,r.kt)("mermaid",{value:"classDiagram\n    A <|-- B\n    B <|-- A\n\n    class A {\n        <<struct>>\n        B b // B n'est pas encore d\xe9finie ici\n    }\n    class B {\n        <<struct>>\n        A a\n    }"}),(0,r.kt)("p",null,"Pour r\xe9soudre ce probl\xe8me on va faire une ",(0,r.kt)("strong",{parentName:"p"},"d\xe9claration anticip\xe9e")," (",(0,r.kt)("strong",{parentName:"p"},"Forward Declaration")," en anglais)."),(0,r.kt)("p",null,"Un peu \xe0 la mani\xe8re d'un ",(0,r.kt)("strong",{parentName:"p"},"prototype")," on va indiquer que la structure existe, sans en d\xe9finir pr\xe9cis\xe9ment encore son contenu."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <vector>\n// D\xe9claration anticip\xe9e de la structure Book\n// highlight-next-line\nstruct Book;\n\nstruct Author {\n    std::string name;\n    // Je peux donc l'utiliser ici\n    // highlight-next-line\n    std::vector<Book> books;\n\n    void Display();\n    void AddBook(std::string title);\n};\n\nstruct Book\n{\n    std::string title;\n    Author& author;\n\n    void Display();\n};\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Cela ne permet pas de manipuler la structure vu que l'on ne sait pas encore ce qu'elle contient. De ce fait, les ",(0,r.kt)("strong",{parentName:"p"},"m\xe9thodes")," de la structure ",(0,r.kt)("inlineCode",{parentName:"p"},"Author")," qui utilisent la structure ",(0,r.kt)("inlineCode",{parentName:"p"},"Book")," doivent se trouver ",(0,r.kt)("strong",{parentName:"p"},"apr\xe8s")," la d\xe9claration compl\xe8te de la structure ",(0,r.kt)("inlineCode",{parentName:"p"},"Book"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Un exemple plus complet"',title:'"Un',exemple:!0,plus:!0,'complet"':!0},'#include <iostream>\n#include <vector>\n#include <string>\n\nstruct Book;\n\nstruct Author {\n    std::string name;\n    std::vector<Book> books;\n\n    void Display();\n    void AddBook(std::string title);\n};\n\nstruct Book\n{\n    std::string title;\n    Author& author;\n\n    void Display();\n};\n\nvoid Author::Display()\n{\n    std::cout << "Author: " << name << std::endl;\n    std::cout << "Books: " << std::endl;\n    for (Book const& book : books)\n    {\n        std::cout << "\\t" << book.title << std::endl;\n    }\n}\n\nvoid Author::AddBook(std::string title)\n{\n    // le "*this" permet de r\xe9cup\xe9rer une r\xe9f\xe9rence vers l\'objet courant\n    // Ce m\xe9canisme sera d\xe9taill\xe9 dans un prochain chapitre\n    Book book {title, *this};\n    // Ici une copie de l\'objet book est faite dans le vecteur\n    books.push_back(book);\n    // La variable book va \xeatre d\xe9truite \xe0 la fin de la fonction\n    // mais le vecteur books contient une copie de l\'objet book donc pas de probl\xe8me\n}\n\nvoid Book::Display()\n{\n    std::cout << "Title: " << title << std::endl;\n    std::cout << "Author: " << author.name << std::endl;\n}\n\nint main()\n{\n    Author author {"Jules Verne", {}};\n    author.AddBook("Vingt mille lieues sous les mers");\n\n    author.Display();\n\n    return 0;\n}\n')),(0,r.kt)("h2",{id:"r\xe9sum\xe9"},"R\xe9sum\xe9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Une ",(0,r.kt)("strong",{parentName:"p"},"structure")," est un ",(0,r.kt)("strong",{parentName:"p"},"agr\xe9gat de donn\xe9es"),", on la d\xe9clare avec le mot-cl\xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"struct"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Les ",(0,r.kt)("strong",{parentName:"p"},"membres")," de la structure sont les variables qui la composent. On y acc\xe8de avec un point ",(0,r.kt)("kbd",null,".")," apr\xe8s le nom de la variable.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Une structure peut avoir des ",(0,r.kt)("strong",{parentName:"p"},"m\xe9thodes")," qui se d\xe9clarent comme pour les fonctions mais au sein m\xeame des accolades de la structure.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Le ",(0,r.kt)("strong",{parentName:"p"},"corps")," d'une ",(0,r.kt)("strong",{parentName:"p"},"m\xe9thode")," peut \xeatre ",(0,r.kt)("strong",{parentName:"p"},"d\xe9clar\xe9 plus tard")," (du moment que le ",(0,r.kt)("strong",{parentName:"p"},"prototype")," de la m\xe9thode est dans la structure). Il faut utiliser le ",(0,r.kt)("strong",{parentName:"p"},"nom")," de la structure suivi des ",(0,r.kt)("strong",{parentName:"p"},"caract\xe8res ",(0,r.kt)("kbd",null,"::"))," pour indiquer l'",(0,r.kt)("strong",{parentName:"p"},"appartenance")," de la m\xe9thode \xe0 la structure si elle est d\xe9clar\xe9e en ",(0,r.kt)("strong",{parentName:"p"},"dehors")," des ",(0,r.kt)("strong",{parentName:"p"},"accolades")," d\xe9limitant la structure.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Une ",(0,r.kt)("strong",{parentName:"p"},"m\xe9thode")," peut \xeatre ",(0,r.kt)("strong",{parentName:"p"},"constante")," pour indiquer qu'elle ne va pas modifier la structure. Il faut ajouter le mot-cl\xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," ",(0,r.kt)("strong",{parentName:"p"},"apr\xe8s les param\xe8tres")," de la fonction et avant le point virgule ",(0,r.kt)("kbd",null,";"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On peut utiliser le mot-cl\xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," pour ",(0,r.kt)("strong",{parentName:"p"},"expliciter")," que l'on souhaite manipuler la structure et ",(0,r.kt)("strong",{parentName:"p"},"\xe9viter des conflits")," de nommages entre les ",(0,r.kt)("strong",{parentName:"p"},"membres")," et les ",(0,r.kt)("strong",{parentName:"p"},"param\xe8tres")," d'une m\xe9thode."))))}m.isMDXComponent=!0}}]);