FROM  java:8
EXPOSE 8082
ADD target/springCRUD-0.0.1-SNAPSHOT.jar springboot-docker-skander.jar
ENTRYPOINT ["java", "-jar", "springboot-docker-skander.jar"]
