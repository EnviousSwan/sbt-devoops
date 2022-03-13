"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[866],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return v}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),v=a,f=d["".concat(u,".").concat(v)]||d[v]||p[v]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"how-to-use",title:"DevOopsJavaPlugin - How to Use",sidebar_label:"How to Use"},u=void 0,s={unversionedId:"java-plugin/how-to-use",id:"java-plugin/how-to-use",title:"DevOopsJavaPlugin - How to Use",description:"DevOopsJavaPlugin",source:"@site/docs/java-plugin/how-to-use.md",sourceDirName:"java-plugin",slug:"/java-plugin/how-to-use",permalink:"/docs/java-plugin/how-to-use",tags:[],version:"current",frontMatter:{id:"how-to-use",title:"DevOopsJavaPlugin - How to Use",sidebar_label:"How to Use"},sidebar:"docsSidebar",previous:{title:"How to Use",permalink:"/docs/scala-plugin/how-to-use"}},c=[{value:"DevOopsJavaPlugin",id:"devoopsjavaplugin",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"devoopsjavaplugin"},"DevOopsJavaPlugin"),(0,o.kt)("p",null,"To use sbt-devoops for a Java project, add the following line to ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sbt")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sbt"},"enablePlugins(DevOopsJavaPlugin)\n")),(0,o.kt)("p",null,"It has"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"javaVersion")," setting"),(0,o.kt)("li",{parentName:"ul"},"set ",(0,o.kt)("inlineCode",{parentName:"li"},"crossPaths")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"autoScalaLibrary")," to false"),(0,o.kt)("li",{parentName:"ul"},"default ",(0,o.kt)("inlineCode",{parentName:"li"},"javacOptions"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"-source")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"-target")," set to the ",(0,o.kt)("inlineCode",{parentName:"li"},"javaVersion")," above, ",(0,o.kt)("inlineCode",{parentName:"li"},"-Xlint:unchecked"),", and set ",(0,o.kt)("inlineCode",{parentName:"li"},"-encoding")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"UTF-8")," ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'  override lazy val projectSettings: Seq[Setting[_]] = Seq(\n    javaVersion := "1.8", // 1.8 is default if not specified otherwise.\n    crossPaths := false,\n    autoScalaLibrary := false,\n    javacOptions ++= Seq(\n      "-source", javaVersion.value,\n      "-target", javaVersion.value,\n      "-Xlint:unchecked",\n      "-encoding", "UTF-8"\n    )\n  )\n')))}d.isMDXComponent=!0}}]);