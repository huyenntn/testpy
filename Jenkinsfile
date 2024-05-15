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
		  cat /kaniko/.docker/config.json
		  ls app/
		  /kaniko/executor --context app/ --destination huyenntnptit/app-demo:v2
          '''
        }
      }
    }
  }
}