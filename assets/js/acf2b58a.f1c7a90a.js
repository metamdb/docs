"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[965],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(a),h=n,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return a?r.createElement(m,o(o({ref:t},u),{},{components:a})):r.createElement(m,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9387:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],c={sidebar_position:4,slug:"/pathway"},s={unversionedId:"database-query/pathway",id:"database-query/pathway",isDocsHomePage:!1,title:"Pathways",description:"Each pathway page contains pathway names, source identifier, and source database as well as pathway reactions. The following tabs are available:",source:"@site/docs/database-query/pathway.md",sourceDirName:"database-query",slug:"/pathway",permalink:"/docs/pathway",editUrl:"https://github.com/CollinStark/docs/edit/master/docs/database-query/pathway.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/pathway"},sidebar:"mySidebar",previous:{title:"Metabolites",permalink:"/docs/metabolite"},next:{title:"User Management",permalink:"/docs/user-management"}},l=[{value:"Pathway",id:"pathway",children:[]},{value:"Reactions",id:"reactions",children:[{value:"ID",id:"id",children:[]},{value:"Formula",id:"formula",children:[]},{value:"Curation Status",id:"curation-status",children:[]},{value:"Image",id:"image",children:[]}]}],u={toc:l};function p(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Each pathway page contains pathway names, source identifier, and source database as well as pathway reactions. The following tabs are available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/pathway#pathway"},"Pathway")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/pathway#reactions"},"Reactions"))),(0,i.kt)("h2",{id:"pathway"},"Pathway"),(0,i.kt)("p",null,"The pathway tab shows pathway names, identifiers of the source database, and the source database."),(0,i.kt)("h2",{id:"reactions"},"Reactions"),(0,i.kt)("p",null,"Reactions are divided into ",(0,i.kt)("a",{parentName:"p",href:"/docs/pathway#id"},"IDs"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/pathway#formula"},"Formulas"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/pathway#curation-status"},"Curation Status"),", and ",(0,i.kt)("a",{parentName:"p",href:"/docs/pathway#image"},"Images"),"."),(0,i.kt)("h3",{id:"id"},"ID"),(0,i.kt)("p",null,"IDs refer to reaction identifiers of the MetAMDB database, which are displayed with links to the respective ",(0,i.kt)("a",{parentName:"p",href:"/docs/reaction"},"Reaction")," pages. The table is sortable by identifiers."),(0,i.kt)("h3",{id:"formula"},"Formula"),(0,i.kt)("p",null,"Formula of the current reaction."),(0,i.kt)("h3",{id:"curation-status"},"Curation Status"),(0,i.kt)("p",null,"Curation status of the reactions atom mappings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u2714\ufe0f Manually curated"),(0,i.kt)("li",{parentName:"ul"},"\u274c Automatically generated")),(0,i.kt)("h3",{id:"image"},"Image"),(0,i.kt)("p",null,"The reactions image, which can be opened by clicking on the link."))}p.isMDXComponent=!0}}]);