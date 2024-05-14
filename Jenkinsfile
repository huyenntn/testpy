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
		  sh '''
		  ls
		  cd app
		  ls
          mvn clean install
		  '''
       }    
      }
    }
    stage('Build docker image') {
      steps {
        container('dockercontainer') {
          sh '''
		  docker login -u "huyenntnptit" -p "Chiphoi135!"
		  docker build -t huyenntn/demoapp:v1 .
		  docker push huyenntn/demoapp:v1
          '''
        }
      }
    }
  }
}