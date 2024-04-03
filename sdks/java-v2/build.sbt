lazy val root = (project in file(".")).
  settings(
    organization := "com.dropbox.sign",
    name := "dropbox-sign",
    version := "2.0.0",
    scalaVersion := "2.11.4",
    scalacOptions ++= Seq("-feature"),
    Compile / javacOptions ++= Seq("-Xlint:deprecation"),
    Compile / packageDoc / publishArtifact := false,
    resolvers += Resolver.mavenLocal,
    libraryDependencies ++= Seq(
      "com.google.code.findbugs" % "jsr305" % "3.0.0",
      "io.swagger" % "swagger-annotations" % "1.6.5",
      "org.glassfish.jersey.core" % "jersey-client" % "3.0.4",
      "org.glassfish.jersey.inject" % "jersey-hk2" % "3.0.4",
      "org.glassfish.jersey.media" % "jersey-media-multipart" % "3.0.4",
      "org.glassfish.jersey.media" % "jersey-media-json-jackson" % "3.0.4",
      "org.glassfish.jersey.connectors" % "jersey-apache-connector" % "3.0.4",
      "com.fasterxml.jackson.core" % "jackson-core" % "2.13.4" % "compile",
      "com.fasterxml.jackson.core" % "jackson-annotations" % "2.13.4" % "compile",
      "com.fasterxml.jackson.core" % "jackson-databind" % "2.13.4.2" % "compile",
      "com.fasterxml.jackson.datatype" % "jackson-datatype-jsr310" % "2.13.2" % "compile",
      "com.github.joschi.jackson" % "jackson-datatype-threetenbp" % "2.12.5" % "compile",
      "jakarta.annotation" % "jakarta.annotation-api" % "2.1.0" % "compile",
      "junit" % "junit" % "4.13.2" % "test"
    )
  )
