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
          ls
          '''
       }    
      }
    }
    stage('Build docker image') {
      steps {
        container('kaniko') {
          sh '''
		  cat /kaniko/.docker/config.json
		  ls
		  /kaniko/executor --context . --no-push
          '''
        }
      }
    }
  }
}