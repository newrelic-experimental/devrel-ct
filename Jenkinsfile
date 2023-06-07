pipeline {
    agent any
    environment {
        nrEntityGuid = 'MzY0NzUyM3xBUE18QVBQTElDQVRJT058MTY5NjI2ODY4Mw'
        nrApiCredentialsGuid = '0790bcee-03ed-4c2f-bd0e-3640a1749101'
        nrIsEuropean = false
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
                            apiKey:  "${nrApiCredentialsGuid}",
                            // applicationId: '',
                            user: "jenkins",
                            version: "6.0.0",
                            european: "${nrIsEuropean}",
                            entityGuid: "${nrEntityGuid}",
                            // changelog: '',
                            // commit: '',
                            // deeplink: '',
                            // deploymentType: '',
                            // description: '',
                            // groupId: '',
                            // timestamp: ''
                    ]]
                ])
                }
            }
        }
    }
}