FROM maven:3.8-jdk-8-slim
COPY . .
RUN mvn clean install