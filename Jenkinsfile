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
      container('pythoncontainer') {  
          sh "python test.py"
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