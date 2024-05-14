pipeline {
  agent {
    kubernetes {
      yamlFile 'demo.yaml'
      idleMinutes 1
    }
  }
  stages {
    stage('Build maven code') {
      steps {
      container('mavencontainer') {  
          sh "mvn clean install"
       }    
      }
    }
    stage('Build docker image') {
      steps {
        container('dockercontainer') {
          sh '''
          docker build -t jsarvabhowma/demoapp:v1 .
          '''
        }
      }
    }
  }
}