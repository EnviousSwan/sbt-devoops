import BuildTools._
import ProjectInfo._
import sbt.{Path, ScmInfo}
import org.scoverage.coveralls.Imports.CoverallsKeys._

lazy val writeVersion = inputKey[Unit]("Write Version in File'")

lazy val root = (project in file("."))
  .settings(
    organization := "io.kevinlee"
  , name         := "sbt-devoops"
  , scalaVersion := ProjectScalaVersion
  , version      := ProjectVersion
  , description  := "DevOops - DevOps tool for GitHub"
  , developers   := List(
      Developer("Kevin-Lee", "Kevin Lee", "kevin.code@kevinlee.io", url("https://github.com/Kevin-Lee"))
    )
  , homepage := Some(url("https://github.com/Kevin-Lee/sbt-devoops"))
  , scmInfo :=
      Some(ScmInfo(
        url("https://github.com/Kevin-Lee/sbt-devoops")
      , "git@github.com:Kevin-Lee/sbt-devoops.git"
    ))

  , startYear := Some(2018)
  , sbtPlugin := true
  , sbtVersion in Global := "1.3.3"
  , scalaCompilerBridgeSource := {
      val sv = appConfiguration.value.provider.id.version
      ("org.scala-sbt" % "compiler-interface" % sv % "component").sources
    }
  , crossSbtVersions := CrossSbtVersions
  , scalacOptions ++= crossVersionProps(commonScalacOptions, scalaVersion.value) {
        case Some((2, 12)) =>
          Seq("-Ywarn-unused-import", "-Ywarn-numeric-widen")
        case Some((2, 11)) =>
          Seq("-Ywarn-numeric-widen")
        case _ =>
          Nil
      }
  , scalacOptions in (Compile, console) := scalacOptions.value diff List("-Ywarn-unused-import", "-Xfatal-warnings")
  , wartremoverErrors in (Compile, compile) ++= commonWarts
  , wartremoverErrors in (Test, compile) ++= commonWarts
  , resolvers += Deps.hedgehogRepo
  , addCompilerPlugin("org.typelevel" % "kind-projector" % "0.10.3" cross CrossVersion.binary)
  , libraryDependencies ++=
      crossVersionProps(
          Seq(
            Deps.commonsIo, Deps.githubApi, Deps.justFp
          ) ++ Deps.hedgehogLibs
        , scalaVersion.value
      ) {
        case Some((2, 12)) =>
          Deps.javaxActivation212
        case Some((2, 10)) =>
          Deps.javaxActivation210
      }
  , testFrameworks ++= Seq(TestFramework("hedgehog.sbt.Framework"))

  , licenses += ("MIT", url("http://opensource.org/licenses/MIT"))
  , publishMavenStyle := false

  , bintrayPackageLabels := Seq("sbt", "plugin")
  , bintrayVcsUrl := Some("""git@github.com:Kevin-Lee/sbt-devoops.git""")
  , bintrayRepository := "sbt-plugins"

  , initialCommands in console := """import kevinlee.sbt._"""

  , writeVersion := versionWriter(Def.spaceDelimited("filename").parsed)(ProjectVersion)

  , coverageHighlighting := (CrossVersion.partialVersion(scalaVersion.value) match {
      case Some((2, 10)) =>
        false
      case _ =>
        true
    })

// set up 'scripted; sbt plugin for testing sbt plugins
//  , scriptedLaunchOpts ++=
//      Seq("-Xmx1024M", "-Dplugin.version=" + version.value)

)
