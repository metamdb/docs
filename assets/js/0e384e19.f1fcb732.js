"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},426:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:1,slug:"/"},s={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"About the Documentation",description:"Welcome to the MetAMDB Documentation!",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/CollinStark/docs/edit/master/docs/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"mySidebar",next:{title:"Getting Started",permalink:"/docs/getting-started"}},p=[{value:"Navigation",id:"navigation",children:[]},{value:"Feedback",id:"feedback",children:[]},{value:"Data Sources",id:"data-sources",children:[]},{value:"Atom Mapping Generation",id:"atom-mapping-generation",children:[]}],l={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Welcome to the MetAMDB Documentation!"),(0,a.kt)("h2",{id:"navigation"},"Navigation"),(0,a.kt)("p",null,"You can find different topics in the table of contents. On desktop, you should see it in the left sidebar. On mobile, you should see it after pressing an icon with arrows in the top left corner."),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,"We are always open to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CollinStark/metamdb/issues/new/choose"},"\ud83d\udd17 your feedback"),"."),(0,a.kt)("h2",{id:"data-sources"},"Data Sources"),(0,a.kt)("p",null,"Reaction/Metabolite data as well as Mol Files were collected from the three big reaction databases ",(0,a.kt)("a",{parentName:"p",href:"https://www.brenda-enzymes.org/"},"\ud83d\udd17 BRENDA"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.genome.jp/kegg/"},"\ud83d\udd17 KEGG"),", or ",(0,a.kt)("a",{parentName:"p",href:"https://metacyc.org/"},"\ud83d\udd17 MetaCyc"),"."),(0,a.kt)("h2",{id:"atom-mapping-generation"},"Atom Mapping Generation"),(0,a.kt)("p",null,"Atom mappings were generated with the Reaction Decoder Tool (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/asad/ReactionDecoder"},"\ud83d\udd17 RDT"),"), due to the large quantity of reactions available. RDT is open-source, which makes it easy to modify and integrate in existing pipelines. RDT generates atom mappings in the form of ",(0,a.kt)("a",{parentName:"p",href:"/rxn-file"},"RXN Files")," from unmapped MOL files. A disadvantage of RDT is that only about 90% of atom mappings are correct (with some enzyme categories being better than others)."))}u.isMDXComponent=!0}}]);