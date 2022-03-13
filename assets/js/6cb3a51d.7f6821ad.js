"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[152],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,v=d["".concat(l,".").concat(g)]||d[g]||c[g]||a;return n?r.createElement(v,s(s({ref:t},u),{},{components:n})):r.createElement(v,s({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6173:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=(n(4996),["components"]),i={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",slug:"/"},l=void 0,p={unversionedId:"getting-started",id:"version-1.0.3/getting-started",title:"Getting Started",description:"sbt DevOops",source:"@site/versioned_docs/version-1.0.3/getting-started.md",sourceDirName:".",slug:"/",permalink:"/docs/1.0.3/",tags:[],version:"1.0.3",frontMatter:{id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",slug:"/"},sidebar:"version-1.0.3/docs",next:{title:"Config and Run",permalink:"/docs/1.0.3/gh-release-plugin/config-and-run"}},u=[{value:"<img src='/img/sbt-devoops-logo-64x64.png' /> sbt DevOops",id:"-sbt-devoops",children:[],level:3},{value:"Get sbt-devoops",id:"get-sbt-devoops",children:[{value:"DevOopsGitReleasePlugin",id:"devoopsgitreleaseplugin",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"-sbt-devoops"},(0,a.kt)("img",{src:"/img/sbt-devoops-logo-64x64.png"})," sbt DevOops"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Kevin-Lee/sbt-devoops/actions?workflow=Build+All"},(0,a.kt)("img",{parentName:"a",src:"https://github.com/Kevin-Lee/sbt-devoops/workflows/Build%20All/badge.svg",alt:"Build Status"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Kevin-Lee/sbt-devoops/actions?workflow=Release"},(0,a.kt)("img",{parentName:"a",src:"https://github.com/Kevin-Lee/sbt-devoops/workflows/Release/badge.svg",alt:"Release Status"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://bintray.com/kevinlee/sbt-plugins/sbt-devoops/_latestVersion"}," ",(0,a.kt)("img",{parentName:"a",src:"https://api.bintray.com/packages/kevinlee/sbt-plugins/sbt-devoops/images/download.svg",alt:"Download"})," "),"\n",(0,a.kt)("a",{parentName:"p",href:"https://index.scala-lang.org/kevin-lee/sbt-devoops/sbt-devoops"},(0,a.kt)("img",{parentName:"a",src:"https://index.scala-lang.org/kevin-lee/sbt-devoops/sbt-devoops/latest.svg",alt:"Latest version"}))),(0,a.kt)("p",null,"SBT Plugin to help release artifacts and changelogs"),(0,a.kt)("h2",{id:"get-sbt-devoops"},"Get sbt-devoops"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"project/plugins.sbt"),", add the following line,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'addSbtPlugin("io.kevinlee" % "sbt-devoops" % "1.0.3")\n')),(0,a.kt)("h3",{id:"devoopsgitreleaseplugin"},"DevOopsGitReleasePlugin"),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"DevOopsGitReleasePlugin"),", add the following line to ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"enablePlugins(DevOopsGitReleasePlugin)\n")),(0,a.kt)("p",null,"For more about how to set up and use, please check out the next pages ",(0,a.kt)("a",{parentName:"p",href:"gh-release-plugin/config-and-run"},"DevOopsGitReleasePlugin - Config and Run"),"."))}d.isMDXComponent=!0}}]);