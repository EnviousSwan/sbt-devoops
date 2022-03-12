"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[812],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return g}});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(a),g=s,v=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return a?n.createElement(v,i(i({ref:t},c),{},{components:a})):n.createElement(v,i({ref:t},c))}));function g(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,i=new Array(o);i[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1134:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return u}});var n=a(7462),s=a(3366),o=(a(7294),a(3905)),i=["components"],r={id:"config-and-run",title:"DevOopsGitHubReleasePlugin - Config and Run",sidebar_label:"Config and Run"},l=void 0,p={unversionedId:"gh-release-plugin/config-and-run",id:"gh-release-plugin/config-and-run",title:"DevOopsGitHubReleasePlugin - Config and Run",description:"devOopsLogLevel",source:"@site/docs/gh-release-plugin/config-and-run.md",sourceDirName:"gh-release-plugin",slug:"/gh-release-plugin/config-and-run",permalink:"/docs/gh-release-plugin/config-and-run",tags:[],version:"current",frontMatter:{id:"config-and-run",title:"DevOopsGitHubReleasePlugin - Config and Run",sidebar_label:"Config and Run"},sidebar:"docsSidebar",previous:{title:"Getting Started",permalink:"/docs/"},next:{title:"Examples",permalink:"/docs/gh-release-plugin/examples"}},c={},u=[{value:"<code>devOopsLogLevel</code>",id:"devoopsloglevel",level:2},{value:"Enable DevOopsGitHubReleasePlugin",id:"enable-devoopsgithubreleaseplugin",level:2},{value:"Tag",id:"tag",level:2},{value:"<code>devOopsGitTagFrom</code>",id:"devoopsgittagfrom",level:3},{value:"<code>devOopsGitTagDescription</code> (Optional)",id:"devoopsgittagdescription-optional",level:3},{value:"<code>devOopsGitTagName</code>",id:"devoopsgittagname",level:3},{value:"<code>devOopsGitTagPushRepo</code>",id:"devoopsgittagpushrepo",level:3},{value:"<code>devOopsGitTag</code>",id:"devoopsgittag",level:3},{value:"Artifacts",id:"artifacts",level:2},{value:"<code>devOopsCiDir</code>",id:"devoopscidir",level:3},{value:"<code>devOopsPackagedArtifacts</code>",id:"devoopspackagedartifacts",level:3},{value:"<code>devOopsCopyReleasePackages</code>",id:"devoopscopyreleasepackages",level:3},{value:"Changelog",id:"changelog",level:2},{value:"<code>devOopsChangelogLocation</code>",id:"devoopschangeloglocation",level:3},{value:"GitHub Release",id:"github-release",level:2},{value:"<code>devOopsGitHubAuthTokenEnvVar</code>",id:"devoopsgithubauthtokenenvvar",level:3},{value:"<code>devOopsGitHubAuthTokenFile</code>",id:"devoopsgithubauthtokenfile",level:3},{value:"<code>devOopsGitHubRequestTimeout</code>",id:"devoopsgithubrequesttimeout",level:3},{value:"<code>devOopsGitHubRelease</code>",id:"devoopsgithubrelease",level:3},{value:"<code>devOopsGitTagAndGitHubRelease</code>",id:"devoopsgittagandgithubrelease",level:3},{value:"<code>devOopsGitHubReleaseUploadArtifacts</code>",id:"devoopsgithubreleaseuploadartifacts",level:3}],d={toc:u};function g(e){var t=e.components,a=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"devoopsloglevel"},(0,o.kt)("inlineCode",{parentName:"h2"},"devOopsLogLevel")),(0,o.kt)("p",null,"To set the log level for GitHub release tasks (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"info"),").\nIf it's ",(0,o.kt)("inlineCode",{parentName:"p"},"debug"),", the log may contain the HTTP request headers which may also contain some confidential info like auth token."),(0,o.kt)("p",null,"It should be one of"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"debug")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"info")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"warn")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"error"))),(0,o.kt)("h2",{id:"enable-devoopsgithubreleaseplugin"},"Enable DevOopsGitHubReleasePlugin"),(0,o.kt)("p",null,"To use ",(0,o.kt)("inlineCode",{parentName:"p"},"DevOopsGitHubReleasePlugin"),", add the following line to ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sbt"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sbt"},"enablePlugins(DevOopsGitHubReleasePlugin)\n")),(0,o.kt)("p",null,"e.g.) This is an example of the minimal settings."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'ThisBuild / organization := "com.example"\nThisBuild / scalaVersion := "2.13.4"\nThisBuild / version := "0.1.0"\nThisBuild / crossScalaVersions := Seq("2.11.12", "2.12.12", "2.13.4")\n\nlazy val root = (project in file("."))\n  .enablePlugins(DevOopsGitHubReleasePlugin)\n  .settings(\n    name := "test-project",\n    libraryDependencies += "some" %% "lib" % "1.0.0"\n  )\n')),(0,o.kt)("h2",{id:"tag"},"Tag"),(0,o.kt)("h3",{id:"devoopsgittagfrom"},(0,o.kt)("inlineCode",{parentName:"h3"},"devOopsGitTagFrom")),(0,o.kt)("p",null,"The name of the branch from which it tags. So if the current branch is not the same as the ",(0,o.kt)("inlineCode",{parentName:"p"},"devOopsGitTagFrom")," value, ",(0,o.kt)("inlineCode",{parentName:"p"},"devOopsGitTag")," does not tag but throws an exception. "),(0,o.kt)("p",null,"Default: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'devOopsGitTagFrom := "main"\n')),(0,o.kt)("h3",{id:"devoopsgittagdescription-optional"},(0,o.kt)("inlineCode",{parentName:"h3"},"devOopsGitTagDescription")," (Optional)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"devOopsGitTagDescription")," is the setting to specify the tag description. If not set, it tags without any tag description."),(0,o.kt)("p",null,"Default:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"devOopsGitTagDescription := None\n")),(0,o.kt)("p",null,"Wihtout the description, it's equivalent to "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git tag ${devOopsGitTagFrom.value}\n")),(0,o.kt)("p",null,"With the description, it's equivalent to "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git tag -a ${devOopsGitTagFrom.value}, -m ${devOopsGitTagDescription.value}\n")),(0,o.kt)("h3",{id:"devoopsgittagname"},(0,o.kt)("inlineCode",{parentName:"h3"},"devOopsGitTagName")),(0,o.kt)("p",null,"This setting decides how to name the tag. It uses the project's version (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"version.value"),") with the suffix 'v'"),(0,o.kt)("p",null,"e.g.) If ",(0,o.kt)("inlineCode",{parentName:"p"},'version := "1.0.0"'),", the tag name is ",(0,o.kt)("inlineCode",{parentName:"p"},"v1.0.0"),"."),(0,o.kt)("p",null,"Default:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import just.semver.SemVer\n// ...\ndevOopsGitTagName := s"v${SemVer.render(SemVer.parseUnsafe(version.value))}"\n')),(0,o.kt)("h3",{id:"devoopsgittagpushrepo"},(0,o.kt)("inlineCode",{parentName:"h3"},"devOopsGitTagPushRepo")),(0,o.kt)("p",null,"This tells which remote repository to push. It's usually ",(0,o.kt)("inlineCode",{parentName:"p"},"origin"),". If there are multiple repositories, you can change it to the one you want."),(0,o.kt)("p",null,"e.g.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'devOopsGitTagPushRepo := "github"\n')),(0,o.kt)("p",null,"Default:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'devOopsGitTagPushRepo := "origin"\n')),(0,o.kt)("h3",{id:"devoopsgittag"},(0,o.kt)("inlineCode",{parentName:"h3"},"devOopsGitTag")),(0,o.kt)("p",null,"It is an sbt task to create a git tag from the branch set in ",(0,o.kt)("inlineCode",{parentName:"p"},"devOopsGitTagFrom"),". It may fail if the project version is no GA."),(0,o.kt)("p",null,"e.g.) "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Success Case")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sbtshell"},"sbt:test-project> devOopsGitTag\ntask success>\n>> non sbt task success> The semantic version from the project version has been parsed. version: 0.1.0\n>> git rev-parse --abbrev-ref HEAD => master\n>> git fetch --tags\n>> git tag v0.1.0\n>> git push origin v0.1.0\n  |  To github.com:Kevin-Lee/test-project.git\n  |   * [new tag]         v0.1.0 -> v0.1.0\n\n[success] Total time: 7 s, completed 16 Oct. 2019, 5:19:31 pm\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Failure Case")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sbtshell"},"sbt:test-project> devOopsGitTag\nFailure]\n>> sbt task failed after finishing the following tasks\ntask success>\n>> non sbt task success> The semantic version from the project version has been parsed. version: 0.1.0-SNAPSHOT\n\n  This version is not eligible for tagging. [version: 0.1.0-SNAPSHOT]\n  It should be GA version with any pre-release or meta-info suffix\n    e.g.)\n    * 1.0.0 (\u2b55\ufe0f)\n    * 1.0.0-SNAPSHOT (\u274c)\n    * 1.0.0-beta (\u274c)\n    * 1.0.0+123 (\u274c)\n    * 1.0.0-beta+123 (\u274c)\n\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sbtshell"},"sbt:test-project> devOopsGitTag\nFailure]\n>> sbt task failed after finishing the following tasks\ntask success>\n>> non sbt task success> The semantic version from the project version has been parsed. version: 0.1.0\n>> git rev-parse --abbrev-ref HEAD => master\n>> git fetch --tags\n  | => root / gitTag 2s\n>> [cmd: git tag v0.1.0], [code: 128], [errors: fatal: tag 'v0.1.0' already exists]\n\n")),(0,o.kt)("h2",{id:"artifacts"},"Artifacts"),(0,o.kt)("h3",{id:"devoopscidir"},(0,o.kt)("inlineCode",{parentName:"h3"},"devOopsCiDir")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"devOopsCiDir")," is the ci directory which contains the files created in build to upload to GitHub release (e.g. packaged jar files) It can be either an absolute or relative path. When running ",(0,o.kt)("inlineCode",{parentName:"p"},"devOopsCopyReleasePackages"),", all the jar files with prefixed with the project name (",(0,o.kt)("inlineCode",{parentName:"p"},"devOopsPackagedArtifacts.value"),") are copied to ",(0,o.kt)("inlineCode",{parentName:"p"},"${devOopsCiDir.value}/dist"),"."),(0,o.kt)("p",null,"Default:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'devOopsCiDir := "ci"\n// so the artifactsare copied to ci/dist\n')),(0,o.kt)("h3",{id:"devoopspackagedartifacts"},(0,o.kt)("inlineCode",{parentName:"h3"},"devOopsPackagedArtifacts")),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"List")," of packaged artifacts to be copied to ",(0,o.kt)("inlineCode",{parentName:"p"},"PROJECT_HOME/${devOopsCiDir.value}/dist"),"."),(0,o.kt)("p",null,"Default:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'devOopsPackagedArtifacts := List(s"target/scala-*/${name.value}*.jar")\n')),(0,o.kt)("p",null,"So for Java projects, change it to "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'devOopsPackagedArtifacts := List(s"target/${name.value}*.jar")\n')),(0,o.kt)("h3",{id:"devoopscopyreleasepackages"},(0,o.kt)("inlineCode",{parentName:"h3"},"devOopsCopyReleasePackages")),(0,o.kt)("p",null,"It is an sbt task to copy packaged artifacts to the location specified (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"devOopsPackagedArtifacts.value")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"PROJECT_HOME/${devOopsCiDir.value}/dist"),")."),(0,o.kt)("p",null,"e.g.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sbtshell"},"sbt:test-project> devOopsCopyReleasePackages\n>> copyPackages - Files copied from:\n  - /user/home/test-project/target/scala-2.12/test-project_2.12-0.1.0.jar\n  - /user/home/test-project/target/scala-2.12/test-project_2.12-0.1.0-sources.jar\n  - /user/home/test-project/target/scala-2.12/test-project_2.12-0.1.0-javadoc.jar\n\n  to\n  - ci/dist/test-project_2.12-0.1.0-javadoc.jar\n  - ci/dist/test-project_2.12-0.1.0-sources.jar\n  - ci/dist/test-project_2.12-0.1.0.jar\n\n\n[success] Total time: 0 s, completed 6 Apr. 2019, 11:32:21 pm\n")),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("h3",{id:"devoopschangeloglocation"},(0,o.kt)("inlineCode",{parentName:"h3"},"devOopsChangelogLocation")),(0,o.kt)("p",null,"The location of changelog file. The change log filename should be the project version with the extension of ",(0,o.kt)("inlineCode",{parentName:"p"},".md"),"."),(0,o.kt)("p",null,"e.g.) ",(0,o.kt)("inlineCode",{parentName:"p"},'version.value := "1.0.0"')," then the changelog file should be ",(0,o.kt)("inlineCode",{parentName:"p"},"1.0.0.md")," at the location set in ",(0,o.kt)("inlineCode",{parentName:"p"},"devOopsChangelogLocation"),"."),(0,o.kt)("p",null,"Default:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'changelogLocation := "changelogs"\n')),(0,o.kt)("h2",{id:"github-release"},"GitHub Release"),(0,o.kt)("h3",{id:"devoopsgithubauthtokenenvvar"},(0,o.kt)("inlineCode",{parentName:"h3"},"devOopsGitHubAuthTokenEnvVar")),(0,o.kt)("p",null,"The name of environment variable to get the GitHub auth token. It is required to do GitHub release. If the envvar is not found, it will try to read the auth token file set in ",(0,o.kt)("inlineCode",{parentName:"p"},"devOopsGitHubAuthTokenFile"),"."),(0,o.kt)("p",null,"Default:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'devOopsGitHubAuthTokenEnvVar := "GITHUB_TOKEN"\n')),(0,o.kt)("h3",{id:"devoopsgithubauthtokenfile"},(0,o.kt)("inlineCode",{parentName:"h3"},"devOopsGitHubAuthTokenFile")),(0,o.kt)("p",null,"The path to GitHub OAuth token file. The file should contain oauth=OAUTH_TOKEN (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"Some($USER/.github)"),") If you want to have a different filename in user's home, do ",(0,o.kt)("inlineCode",{parentName:"p"},'Some(new File(Io.getUserHome, "your_filename"))'),"."),(0,o.kt)("p",null,"Default:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'devOopsGitHubAuthTokenFile := Some(new File(Io.getUserHome, ".github"))\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE: This is optional and if there's a value for the environment variable set in ",(0,o.kt)("inlineCode",{parentName:"strong"},"devOopsGitHubAuthTokenEnvVar"),", The envvar will be used instead of using the value from the auth token file. It will not even try to read the file if the envvar is set.")),(0,o.kt)("h3",{id:"devoopsgithubrequesttimeout"},(0,o.kt)("inlineCode",{parentName:"h3"},"devOopsGitHubRequestTimeout")),(0,o.kt)("p",null,"Timeout for the GitHub release tasks. If it exceeds, the task may fail. (Default: 2 minutes) "),(0,o.kt)("h3",{id:"devoopsgithubrelease"},(0,o.kt)("inlineCode",{parentName:"h3"},"devOopsGitHubRelease")),(0,o.kt)("p",null,"It is an sbt task to release the current version by uploading the changelog to GitHub.\nIt does"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copy packaged files (",(0,o.kt)("inlineCode",{parentName:"li"},"devOopsCopyReleasePackages"),")"),(0,o.kt)("li",{parentName:"ul"},"Upload the changelog to GitHub release, but it does not upload any packaged artifacts.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE: It does not create any tag and if the tag with the project version (e.g. version: 1.0.0 => tag: v1.0.0) does not exist, ",(0,o.kt)("inlineCode",{parentName:"strong"},"devOopsGitHubRelease")," fails"),"\nTo also upload the packaged artifacts please have a look at ",(0,o.kt)("a",{parentName:"p",href:"#devoopsgithubreleaseuploadartifacts"},"devOopsGitHubReleaseUploadArtifacts"),"."),(0,o.kt)("p",null,"e.g.) ",(0,o.kt)("inlineCode",{parentName:"p"},"devOopsGitHubRelease")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sbtshell"},"sbt:test-project> devOopsGitHubRelease\ntask success>\n>> git fetch --tags\n>> git tag\n  |  v0.1.0\n  |  v0.1.1\n>> task success>\n>> Get GitHub OAuth token\n\n>> task success>\n>> Get changelog\n\n>> task success>\n>> git remote get-url origin => git@github.com:Kevin-Lee/test-project.git\n\n>> task success>\n>> Get GitHub repo org and name: Kevin-Lee/test-project\n\n>> task success>\n>> GitHub release: v0.1.1\n\n>> task success>\n>> Changelog uploaded:\n    # 0.1.0 - 2021-01-31\n\n    Another Test Release\n\n[success] Total time: 4 s, completed 17 Feb. 2021, 7:06:11 pm\n")),(0,o.kt)("p",null,"e.g.) When there's no tag with the current version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sbtshell"},'sbt:test-project> devOopsGitHubRelease\n[error] Failure]\n[error] >> sbt task failed after finishing the following tasks\n[error] task success>\n[error] >> git fetch --tags\n[error] >> git tag\n[error]   v0.1.0\n[error]   v0.1.1\n[error] >> task success>\n[error] >> Get GitHub OAuth token\n[error]\n[error] >> task success>\n[error] >> Get changelog\n[error]\n[error] >> task success>\n[error] >> git remote get-url origin => git@github.com:Kevin-Lee/test-project.git\n[error]\n[error] >> task success>\n[error] >> Get GitHub repo org and name: Kevin-Lee/test-project\n[error]\n[error]\n[error] ---\n[error] >> Failed:\n[error] Unprocessable Entity:\n[error] responseBody: {\n[error]   "message" : "Validation Failed",\n[error]   "documentation_url" : "https://docs.github.com/rest/reference/repos#create-a-release"\n[error] }\n')),(0,o.kt)("h3",{id:"devoopsgittagandgithubrelease"},(0,o.kt)("inlineCode",{parentName:"h3"},"devOopsGitTagAndGitHubRelease")),(0,o.kt)("p",null,"Is it an sbt task to release the current version by uploading the changelog to GitHub after git tagging.\nIt does"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Git tag with the current version (",(0,o.kt)("inlineCode",{parentName:"li"},"devOopsGitTag"),")"),(0,o.kt)("li",{parentName:"ul"},"Upload the changelog to GitHub, but it does not upload any packaged artifacts.")),(0,o.kt)("p",null,"e.g.) ",(0,o.kt)("inlineCode",{parentName:"p"},"devOopsGitTagAndGitHubRelease")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sbtshell"},"sbt:test-project> devOopsGitTagAndGitHubRelease\ntask success>\n>> task success>\n>> Get GitHub OAuth token\n\n>> non sbt task success> The semantic version from the project version has been parsed. version: 0.1.1\n>> git rev-parse --abbrev-ref HEAD => some-branch\n>> git fetch --tags\n>> git tag v0.1.1\n>> git push origin v0.1.1\n  |  To github.com:Kevin-Lee/test-project.git\n  |   * [new tag]         v0.1.1 -> v0.1.1\n>> task success>\n>> Get changelog\n\n>> task success>\n>> git remote get-url origin => git@github.com:Kevin-Lee/test-project.git\n\n>> task success>\n>> Get GitHub repo org and name: Kevin-Lee/test-project\n\n>> task success>\n>> GitHub release: v0.1.1\n\n>> task success>\n>> Changelog uploaded:\n    # 0.1.0 - 2021-01-31\n\n    Another Test Release\n\n[success] Total time: 10 s, completed 17 Feb. 2021, 7:16:59 pm\n")),(0,o.kt)("h3",{id:"devoopsgithubreleaseuploadartifacts"},(0,o.kt)("inlineCode",{parentName:"h3"},"devOopsGitHubReleaseUploadArtifacts")),(0,o.kt)("p",null,"This is an sbt task to upload packaged artifacts to the existing GitHub release.\nIt can fail if the release for the tag named with the current project version does not exist."),(0,o.kt)("p",null,"e.g.)\nYou probably want to package the artifacts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sbtshell"},"sbt:test-project> packagedArtifacts\n[info] Wrote /Users/some.user/test-project/target/scala-2.13/test-project_2.13-0.1.1.pom\n[info] Main Scala API documentation to /Users/some.user/test-project/target/scala-2.13/api...\n[warn] multiple main classes detected: run 'show discoveredMainClasses' to see the list\n[info] Main Scala API documentation successful.\n[success] Total time: 3 s, completed 17 Feb. 2021, 7:20:58 pm\n")),(0,o.kt)("p",null,"Now let's upload the artifacts to GitHub release."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sbtshell"},"sbt:test-project> devOopsGitHubReleaseUploadArtifacts\n>> copyPackages - Files copied from:\n  - /Users/some.user/test-project/target/scala-2.13/test-project_2.13-0.1.1-javadoc.jar\n  - /Users/some.user/test-project/target/scala-2.13/test-project_2.13-0.1.1-sources.jar\n  - /Users/some.user/test-project/target/scala-2.13/test-project_2.13-0.1.1.jar\n\n  to\n  - ci/dist/test-project_2.13-0.1.1-javadoc.jar\n  - ci/dist/test-project_2.13-0.1.1-sources.jar\n  - ci/dist/test-project_2.13-0.1.1.jar\n\ntask success>\n>> git fetch --tags\n>> git tag\n  |  v0.1.0\n  |  v0.1.1\n>> task success>\n>> Get GitHub OAuth token\n\n>> task success>\n>> git remote get-url origin => git@github.com:Kevin-Lee/test-project.git\n\n>> task success>\n>> Get GitHub repo org and name: Kevin-Lee/test-project\n\n>> task success>\n>> try to find a GitHub release with the given tag: v0.1.1\n\n>> task success>\n>> GitHub release: v0.1.1\n\n>> task success>\n>> Files uploaded:\n    - test-project_2.13-0.1.1-javadoc.jar @ https://github.com/Kevin-Lee/test-project/releases/download/v0.1.1/test-project_2.13-0.1.1-javadoc.jar\n    - test-project_2.13-0.1.1-sources.jar @ https://github.com/Kevin-Lee/test-project/releases/download/v0.1.1/test-project_2.13-0.1.1-sources.jar\n    - test-project_2.13-0.1.1.jar @ https://github.com/Kevin-Lee/test-project/releases/download/v0.1.1/test-project_2.13-0.1.1.jar\n\n[success] Total time: 16 s, completed 17 Feb. 2021, 7:21:18 pm\n")))}g.isMDXComponent=!0}}]);