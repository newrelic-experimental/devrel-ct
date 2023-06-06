pipeline {
    agent any
    environment {
        USER_KEY = credentials('USER_KEY')
        GUID = credentials('GUID')
    }
    stages {
        stage("build") {
            steps {
                echo 'building the application'
            }
        }

        stage("deploy") {
            steps {
                echo 'deploying the application'
            }
        }
        stage("Post to NR") {
            steps {
                script {
                    step([$class: 'NewRelicDeploymentNotifier',
                        notifications: [[
                        apiKey: '$USER_KEY',
                        version: '6.0.0',
                        description: 'triggered by jenkins',
                        entityGuid: '$GUID'
                    ]]
                ])
                }
            }
        }
    }
}