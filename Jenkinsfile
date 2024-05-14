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
      container('maven') {  
		  sh '''
          echo pwd
          '''
       }    
      }
    }
    stage('Build docker image') {
      steps {
        container('kaniko') {
          sh '''
		  ls /kaniko/.docker
		  /kaniko/executor --context . --destination huyenntnptit/kaniko-demo-image:1.0
          '''
        }
      }
    }
  }
}