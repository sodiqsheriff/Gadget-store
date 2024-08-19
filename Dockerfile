FROM openjdk:11-jdk
ARG JAR_FILE=target/*.jar
COPY ./target/StarBestGroup-0.0.1-SNAPSHOT.jar starbest.jar
ENTRYPOINT ["java", "-jar", "/starbest.jar"]


