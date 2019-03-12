pipeline {
   agent any

   stages {
      stage('NPM Setup') {
      steps {
         sh 'npm install'
      }
   }
   }

   stages {
      stage('NPM Build') {
      steps {
         sh 'npm build'
      }
   }
 }

}

