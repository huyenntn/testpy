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
          mvn clean install
		  '''
       }    
      }
    }
    stage('Build docker image') {
      steps {
        container('dockercontainer') {
          sh '''
		  docker login https://registry.vnpay.vn --username "vhud" --password "EBtNhJ4Sc98r+yf+"
		  docker build -t huyenntn/demoapp:v1 .
		  docker tag huyenntn/demoapp:v1 registry.vnpay.vn/vhud/maven-demo:v1
		  docker push registry.vnpay.vn/vhud/maven-demo:v1
          '''
        }
      }
    }
  }
}