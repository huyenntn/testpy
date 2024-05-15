FROM maven:3.8-jdk-8-slim
COPY app/ .
RUN mvn clean install