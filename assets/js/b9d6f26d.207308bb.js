"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[205],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return i}})},4996:function(e,t,n){n.d(t,{C:function(){return r},Z:function(){return s}});var a=n(2263),i=n(3919);function r(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,s=r.forcePrependBaseUrl,o=void 0!==s&&s,l=r.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(o)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(r,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},6889:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),s=n(4996),o=["components"],l={id:"examples",title:"DevOopsGitReleasePlugin Examples",sidebar_label:"Examples"},c={unversionedId:"gh-release-plugin/examples",id:"version-1.0.3/gh-release-plugin/examples",isDocsHomePage:!1,title:"DevOopsGitReleasePlugin Examples",description:"With GitHub Actions",source:"@site/versioned_docs/version-1.0.3/gh-release-plugin/examples.md",sourceDirName:"gh-release-plugin",slug:"/gh-release-plugin/examples",permalink:"/docs/1.0.3/gh-release-plugin/examples",version:"1.0.3",sidebar_label:"Examples",frontMatter:{id:"examples",title:"DevOopsGitReleasePlugin Examples",sidebar_label:"Examples"},sidebar:"version-1.0.3/docs",previous:{title:"DevOopsGitReleasePlugin - Config and Run",permalink:"/docs/1.0.3/gh-release-plugin/config-and-run"},next:{title:"DevOopsScalaPlugin - How to Use",permalink:"/docs/1.0.3/scala-plugin/how-to-use"}},u=[{value:"With GitHub Actions",id:"with-github-actions",children:[]},{value:"A Single Project",id:"a-single-project",children:[{value:"<code>build.sbt</code>",id:"buildsbt",children:[]},{value:"GitHub Actions Config",id:"github-actions-config",children:[]}]},{value:"A Project with Multiple Sub-projects",id:"a-project-with-multiple-sub-projects",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"with-github-actions"},"With GitHub Actions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PROJECT_ROOT/project/plugins.sbt")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'addSbtPlugin("io.kevinlee" % "sbt-devoops" % "1.0.3")\n')),(0,r.kt)("h2",{id:"a-single-project"},"A Single Project"),(0,r.kt)("p",null,"A single project in the root."),(0,r.kt)("h3",{id:"buildsbt"},(0,r.kt)("inlineCode",{parentName:"h3"},"build.sbt")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PROJECT_ROOT/build.sbt")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'ThisBuild / organization := "com.example"\nThisBuild / scalaVersion := "2.13.3"\nThisBuild / version := "0.1.0"\n\nlazy val root = (project in file("."))\n  .enablePlugins(DevOopsGitReleasePlugin)\n  .settings(\n    name := "test-project",\n    libraryDependencies += "some" %% "lib" % "1.0.0"\n  )\n')),(0,r.kt)("p",null,"Make sure you have changelog in the ",(0,r.kt)("inlineCode",{parentName:"p"},"PROJECT_ROOT/changelogs")," folder."),(0,r.kt)("p",null,"e.g.)\nIf the project version in ",(0,r.kt)("inlineCode",{parentName:"p"},"build.sbt")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"0.1.0"),","),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PROJECT_ROOT/changelogs/0.1.0.md")," "),(0,r.kt)("h3",{id:"github-actions-config"},"GitHub Actions Config"),(0,r.kt)("p",null,"Before setting up GitHub Actions, make sure you have a GitHub\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/settings/tokens"},"personal access token"),"\nwith at least the ",(0,r.kt)("inlineCode",{parentName:"p"},"publis_repo")," scope.  "),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("inlineCode",{parentName:"li"},"public_repo     Access public repositories"),(0,r.kt)("img",{alt:"Person Access Token Scope",src:(0,s.Z)("img/github-personal-access-token.png")}))),(0,r.kt)("p",null,"and add the access token to the project's ",(0,r.kt)("inlineCode",{parentName:"p"},"Secrets"),"."),(0,r.kt)("p",null,"e.g.)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YOUR_USERNAME/YOUR_PROJECT/settings/secrets"},"https://github.com/YOUR_USERNAME/YOUR_PROJECT/settings/secrets")),(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("inlineCode",{parentName:"li"},"New secret")," button"),(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"Name"),", put the access token name you want (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"RELEASE_GITHUB_TOKEN"),")"),(0,r.kt)("li",{parentName:"ul"},"Add the token to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Value"),".")),(0,r.kt)("p",null,"To release whenever tag is created and pushed to the remote repo,\nadd the GitHub Actions config yaml file like the following one to\n",(0,r.kt)("inlineCode",{parentName:"p"},"PROJECT_ROOT/.github/workflows"),"."),(0,r.kt)("p",null,"e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"release.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Release\n\non:\n  push:\n    tags:\n      - '*'\n\njobs:\n  build:\n\n    runs-on: ubuntu-latest\n\n    strategy:\n      matrix:\n        scala:\n          - { version: \"2.12.11\", binary-version: \"2.12\", java-version: \"8\" }\n\n    steps:\n    - uses: actions/checkout@v2\n    - uses: actions/setup-java@v1\n      with:\n        java-version: ${{ matrix.scala.java-version }}\n\n\n    - name: Cache Coursier\n      uses: actions/cache@v1\n      with:\n        path: ~/.cache/coursier\n        key: ${{ runner.os }}-coursier-scala-${{ matrix.scala.binary-version }}-${{ hashFiles('**/*.sbt') }}-${{ hashFiles('**/build.properties') }}\n        restore-keys: |\n          ${{ runner.os }}-coursier-scala-${{ matrix.scala.binary-version }}-\n  \n    - name: Cache Ivy\n      uses: actions/cache@v1\n      with:\n        path: ~/.ivy2/cache\n        key: ${{ runner.os }}-ivy-scala-${{ matrix.scala.binary-version }}-${{ hashFiles('**/*.sbt') }}-${{ hashFiles('**/build.properties') }}\n        restore-keys: |\n          ${{ runner.os }}-ivy-scala-${{ matrix.scala.binary-version }}-\n\n\n    - name: sbt GitHub Release\n      env:\n        GITHUB_TOKEN: ${{ secrets.RELEASE_GITHUB_TOKEN }}\n      run: |\n        echo \"Run] sbt GitHub release\"\n        echo 'sbt -J-Xmx2048m ++${{ matrix.scala.version }}! clean test packagedArtifacts'\n        sbt -J-Xmx2048m \\\n          ++${{ matrix.scala.version }}! \\\n          clean \\\n          test \\\n          packagedArtifacts \\\n          gitHubRelease\n\n")),(0,r.kt)("p",null,"If you want to manually run it, you need run at least the following two tasks."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sbt packagedArtifacts gitHubRelease\n")),(0,r.kt)("h2",{id:"a-project-with-multiple-sub-projects"},"A Project with Multiple Sub-projects"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"NOTE:")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To be added..."))))}d.isMDXComponent=!0}}]);