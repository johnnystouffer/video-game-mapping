FROM eclipse-temurin:17-jdk as build

WORKDIR /app

COPY . .

RUN apt-get update && apt-get install -y maven && mvn clean package -DskipTests


FROM eclipse-temurin:17-jdk

WORKDIR /app

COPY --from=build /app/target/odyssey-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]
