FROM eclipse-temurin:17-jdk

WORKDIR /app

# Copy pom.xml and download dependencies
COPY pom.xml ./
RUN apt-get update && apt-get install -y maven && mvn dependency:go-offline

# Copy the entire source code and build
COPY . ./
RUN mvn clean package -DskipTests

CMD ["java", "-jar", "target/odyssey.jar"]
