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
          pwd
          '''
       }    
      }
    }
    stage('Build docker image') {
      steps {
        container('kaniko') {
          sh '''
		  ls
		  /kaniko/executor --context . --destination huyenntnptit/kaniko-demo-image:1.0
          '''
        }
      }
    }
  }
}