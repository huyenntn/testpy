FROM maven:3.8-jdk-8-slim
WORKDIR app
COPY . .
RUN mvn clean install