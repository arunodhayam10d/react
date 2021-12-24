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

		stage('Local_Deploy') {

			steps {
                
                sh 'docker run -d --name react_app -p 3002:3000 arun/react_app:latest '
                sh 'echo ${BUILD_STATUS}'
                
			}
		}
        stage('Push') {

            steps {
                sh 'docker tag arun/react_app:latest 26011998/jenkins:new-$BUILD_NUMBER'
				sh 'docker push 26011998/jenkins:new-$BUILD_NUMBER'

            }
        }
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}