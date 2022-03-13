"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),v=s(t),d=a,f=v["".concat(u,".").concat(d)]||v[d]||p[d]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=v;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},2702:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={id:"how-to-use",title:"DevOopsJavaPlugin - How to Use",sidebar_label:"How to Use"},u=void 0,s={unversionedId:"java-plugin/how-to-use",id:"version-1.0.3/java-plugin/how-to-use",title:"DevOopsJavaPlugin - How to Use",description:"DevOopsJavaPlugin",source:"@site/versioned_docs/version-1.0.3/java-plugin/how-to-use.md",sourceDirName:"java-plugin",slug:"/java-plugin/how-to-use",permalink:"/docs/1.0.3/java-plugin/how-to-use",tags:[],version:"1.0.3",frontMatter:{id:"how-to-use",title:"DevOopsJavaPlugin - How to Use",sidebar_label:"How to Use"},sidebar:"version-1.0.3/docs",previous:{title:"How to Use",permalink:"/docs/1.0.3/scala-plugin/how-to-use"}},c=[{value:"DevOopsJavaPlugin",id:"devoopsjavaplugin",children:[],level:2}],p={toc:c};function v(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"devoopsjavaplugin"},"DevOopsJavaPlugin"),(0,o.kt)("p",null,"To use sbt-devoops for a Java project, add the following line to ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sbt")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sbt"},"enablePlugins(DevOopsJavaPlugin)\n")),(0,o.kt)("p",null,"It has"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"javaVersion")," setting"),(0,o.kt)("li",{parentName:"ul"},"set ",(0,o.kt)("inlineCode",{parentName:"li"},"crossPaths")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"autoScalaLibrary")," to false"),(0,o.kt)("li",{parentName:"ul"},"default ",(0,o.kt)("inlineCode",{parentName:"li"},"javacOptions"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"-source")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"-target")," set to the ",(0,o.kt)("inlineCode",{parentName:"li"},"javaVersion")," above, ",(0,o.kt)("inlineCode",{parentName:"li"},"-Xlint:unchecked"),", and set ",(0,o.kt)("inlineCode",{parentName:"li"},"-encoding")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"UTF-8")," ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'  override lazy val projectSettings: Seq[Setting[_]] = Seq(\n    javaVersion := "1.8", // 1.8 is default if not specified otherwise.\n    crossPaths := false,\n    autoScalaLibrary := false,\n    javacOptions ++= Seq(\n      "-source", javaVersion.value,\n      "-target", javaVersion.value,\n      "-Xlint:unchecked",\n      "-encoding", "UTF-8"\n    )\n  )\n')))}v.isMDXComponent=!0}}]);