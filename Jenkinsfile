pipeline{

	agent any

	environment {
		DOCKERHUB_CREDENTIALS=credentials('arun_jenkins')
	}

	stages {

		stage('Build') {

			steps {
				sh 'docker build -t arun/react_app:latest .'
			}
		}

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
                sh 'docker tag arun/react_app:latest 26011998/jenkins:latest'
				sh 'docker push 26011998/jenkins:latest'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}