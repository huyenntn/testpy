pipeline {
  agent {
    kubernetes {
      yamlFile 'demo.yaml'
      idleMinutes 1
    }
  }
  stages {
    stage('Build python code') {
      steps {
      container('pythoncontainer') {  
          sh "python test.py"
       }    
      }
    }
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
          docker --version
          '''
        }
      }
    }
  }
}