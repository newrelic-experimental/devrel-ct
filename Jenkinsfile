pipeline {
    agent any
    environment {
        API_KEY = credentials('API_KEY')
        entityGuid = 'MzY0NzUyM3xBUE18QVBQTElDQVRJT058MTY5NjI2ODY4Mw'
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
                            apiKey: '$API_KEY',
                            version: '6.0.0',
                            description: 'triggered by jenkins',
                            entityGuid: "MzY0NzUyM3xBUE18QVBQTElDQVRJT058MTY5NjI2ODY4Mw"
                    ]]
                ])
                }
            }
        }
    }
}