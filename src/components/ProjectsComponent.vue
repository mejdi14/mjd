<template>
    <div class="portfolio">
        <div class="row">
            <project-component :project="projects.honeywell" :class="{'slide-left': loading}">

            </project-component>

            <project-component :project="projects.decathlon" :class="{'slide-right': loading}">

            </project-component>
        </div>
        <div class="row">
            <project-component :project="projects.tait" :class="{'slide-left': loading}">

            </project-component>

            <project-component :project="projects.comikey" :class="{'slide-right': loading}">

            </project-component>
        </div>
        <div class="row">
            <project-component :project="projects.mybus" :class="{'slide-left': loading}">

            </project-component>
            <project-component :project="projects.waiter" :class="{'slide-right': loading}">

            </project-component>
        </div>
        <div class="row">
        <project-component :project="projects.proinventory" :class="{'slide-left': loading}">

        </project-component>
            <project-component :project="projects.proresto" :class="{'slide-right': loading}">

        </project-component>
    </div>
        <div class="row">
            <project-component :project="projects.rating" :class="{'slide-left': loading}">

            </project-component>
            <project-component :project="projects.profile" :class="{'slide-right': loading}">

            </project-component>
        </div>
    </div>
</template>

<script>

import ProjectComponent from '../components/ProjectComponent'

export default {
    components: {ProjectComponent},
    data(){return{
        loading: true,
        projects: 
        {
            honeywell: 
            {
                name: 'Honeywell',
                summary: "Honeywell wanted a custom native app for it's hardware mobile phone with custom parts like the talkie walkie systeme they made \n With a team of engineer i worked on creating a communication app with a banch of features like Voip call, Messaging, Video calls, Group calls and location.",
                img: 'honeywell.png',
                demo: 'https://play.google.com/store/apps/details?id=procleanmobility.asmtunis.com.proresteauwaiter&hl=en',
                code: 'private',
                technologies: 
                [
                     {name: 'Android'},
                    {name: 'Kotlin'},
                    {name: 'Jetpack Compose'},
                    {name: 'Sentry'},
                    {name: 'Junit'},
                    {name: 'Expresso'},
                    {name: 'WorkManager'},
                    {name: 'SDK'},
                    {name: 'Mavean'},
                    {name: 'Coroutines'},
                    {name: 'Flow'},
                    {name: 'Github'},
                     {name: 'Github actions'},
                      {name: 'SonarQube'},
                    {name: 'UI/UX'},
                ]
            },

 decathlon: 
            {
                name: 'Decathlon',
                summary: " This is one of my favorite projects, we were trying to help the owners of big restaurants and coffee shops with customers service. \n\n This app allow the waiter to take the customer order directly on a tablette or a phone and the app will send this order to the kitchen at the moment by sending a request to the printer which will print a ticket.",
                img: 'decathlon1.jpeg',
                demo: 'https://play.google.com/store/apps/details?id=procleanmobility.asmtunis.com.proresteauwaiter&hl=en',
                code: 'private',
                technologies: 
                [
                     {name: 'Android'},
                    {name: 'Java'},
                    {name: 'Xml'},
                    {name: 'Kotlin'},
                    {name: 'PHP'},
                    {name: 'Laravel'},
                    {name: 'SqlServer'},
                    {name: 'Gitlab'},
                     {name: 'CI/CD'},
                      {name: 'SonarQube'},
                    {name: 'UI/UX'},
                ]
            },
            waiter: 
            {
                name: 'Pro Waiter',
                summary: " This is one of my favorite projects, we were trying to help the owners of big restaurants and coffee shops with customers service. \n\n This app allow the waiter to take the customer order directly on a tablette or a phone and the app will send this order to the kitchen at the moment by sending a request to the printer which will print a ticket.",
                img: 'waiter.png',
                demo: 'https://play.google.com/store/apps/details?id=procleanmobility.asmtunis.com.proresteauwaiter&hl=en',
                code: 'private',
                technologies: 
                [
                     {name: 'Android'},
                    {name: 'Java'},
                    {name: 'Xml'},
                    {name: 'Kotlin'},
                    {name: 'PHP'},
                    {name: 'Laravel'},
                    {name: 'SqlServer'},
                    {name: 'Gitlab'},
                     {name: 'CI/CD'},
                      {name: 'SonarQube'},
                    {name: 'UI/UX'},
                ]
            },
             tait: 
            {
                name: 'Tait',
                summary: "Working with the USA company Tait on their product to handle communication for their employees and to manage big teams within the company itself. \n\n We worked with a third party company to use their SDK for some feature like voip calls, video calls and group calls.",
                img: 'tait.png',
                demo: 'https://play.google.com/store/apps/details?id=procleanmobility.asmtunis.com.proresteauwaiter&hl=en',
                code: 'private',
                technologies: 
                [
                     {name: 'Android'},
                    {name: 'Kotlin'},
                    {name: 'Xml'},
                    {name: 'Mavean'},
                    {name: 'SDK'},
                    {name: 'Gradle'},
                    {name: 'Firebase'},
                    {name: 'Github'},
                     {name: 'CI/CD'},
                      {name: 'SonarQube'},
                    {name: 'UI/UX'},
                ]
            },
            dux: 
            {
                name: 'Dux Mobile',
                summary: "This was the biggest project i have worked on yet. The goal was to help commercials in their daily work, this project gave me the chance to try many new features and technologies. \n\n I bounced many hats during this project and worked a lot on things like MVVM design pattern, rxJava, live data, view models, WebSocket for realtime notifications and more.",
                img: 'duxmobile.png',
                demo: 'https://photos.app.goo.gl/GbqD2zX1PMq6hi4p8',
                code: 'private',
                technologies: 
                [
                     {name: 'Android'},
                    {name: 'Java'},
                    {name: 'Xml'},
                    {name: 'Kotlin'},
                    {name: 'PHP'},
                    {name: 'Laravel'},
                    {name: 'SqlServer'},
                    {name: 'Gitlab'},
                     {name: 'CI/CD'},
                      {name: 'SonarQube'},
                    {name: 'UI/UX'},
                ]
            },
            comikey: 
            {
                name: 'Comikey',
                summary: "Another USA company i worked with as a freelancer, we were a team of two people working on the mobile app for both Android and IOS. The goal of the app is to provide a degital way to read manga and comics, The app was published to play store and app store and had a lot of users within the first weeks.",
                img: 'comikey.jpeg',
                demo: 'https://play.google.com/store/apps/details?id=com.comikey.banagher&hl=en&gl=US',
                code: 'private',
                technologies: 
                [
                     {name: 'Flutter'},
                    {name: 'RiverPod'},
                    {name: 'Very_Good_Analytics'},
                    {name: 'GRPC'},
                    {name: 'Protobuf'},
                    {name: 'Go Router'},
                    {name: 'Cryptography'},
                    {name: 'In App Purchase'},
                     {name: 'CI/CD'},
                      {name: 'Dio'},
                    {name: 'UI/UX'},
                ]
            },
            mybus: 
            {
                name: 'MyBus',
                summary: 'Working remotely to make an app which works on both Android and IOS with Ionic. the app is made to make using public transport in France even easier by providing real time localisation and online ticket purchase. \n\n It was a good apportunity to learn ionic and how to communicate with french teams.',
                img: 'mybus.jpeg',
                demo: 'https://play.google.com/store/apps/details?id=fr.monkeystudio.mybusgeneric&hl=fr',
                code: 'private',
                technologies: 
                [
                    {name: 'Android'},
                    {name: 'IOS'},
                    {name: 'Ionic'},
                    {name: 'TypeScript'},
                    {name: 'MapBox'},
                    {name: 'Bitrise'},
                    {name: 'Jasmin'},
                    {name: 'NestJs'},
                ]
            },
            proinventory:
                {
                    name: 'ProInventory',
                    summary: 'An Android native app used to use stock workers to register goods using a bar-code scanner, we worked with custom Android phones with have a bar-code scanner device integrated which we used services and communicate with them.',
                    img: 'proinventory.png',
                    demo: 'https://play.google.com/store/apps/details?id=com.asmtunis.proinventory&hl=ln',
                    code: 'private',
                    technologies:
                        [
                            {name: 'Android'},
                            {name: 'Java'},
                            {name: 'Xml'},
                            {name: 'Android Service'},
                            {name: 'Room'},
                            {name: 'SQL Server'},
                            {name: 'Retrofit'},
                            {name: 'Github'},
                            {name: 'Git kraken'},
                        ]
                },
            proresto:
                {
                    name: 'ProResto Mobile',
                    summary: 'A native Android app used to help restaurants owners to see how much money they made in a specific periode of time, also see how many table is occopied and performance of each waiter working in the restaurant.',
                    img: 'proresto.png',
                    demo: 'https://play.google.com/store/apps/details?id=tn.asm.ProResto&hl=en&gl=US',
                    code: 'private',
                    technologies:
                        [
                        {name: 'Android'},
                            {name: 'Java'},
                            {name: 'Xml'},
                            {name: 'Android Service'},
                            {name: 'Room'},
                            {name: 'SQL Server'},
                            {name: 'Retrofit'},
                            {name: 'Github'},
                            {name: 'Git kraken'},
                        ]
                },
            rating:
                {
                    name: 'Rate My App',
                    summary: 'an open source project which helps you asking the user to rate your application',
                    img: 'feedback.gif',
                    demo: 'https://github.com/mejdi14/AndroidFeedBack',
                    code: 'https://github.com/mejdi14/AndroidFeedBack',
                    technologies:
                        [
                            {name: 'Android'},
                            {name: 'Java'},
                            {name: 'Xml'},
                            {name: 'Github'},
                            {name: 'Jitpack'},
                            {name: 'UI/UX'},
                            {name: 'Constraint Layout'},
                            {name: 'Github Actions'},
                        ]
                },
            music:
                {
                    name: 'Music Design App',
                    summary: 'this is a music application which shows my favorite music list !',
                    img: 'music.png',
                    demo: 'https://github.com/mejdi14/music-app-design',
                    code: 'https://github.com/mejdi14/music-app-design',
                    technologies:
                        [
                            {name: 'Android'},
                            {name: 'Java'},
                            {name: 'Xml'},
                            {name: 'Github'},
                            {name: 'Jitpack'},
                            {name: 'UI/UX'},
                            {name: 'Constraint Layout'},
                            {name: 'Motion layout'},
                            {name: 'shared items'},
                            {name: 'Github Actions'},
                        ]
                },
            arcore:
                {
                    name: 'Green Forest ARCore',
                    summary: 'now you can make your house look live an beautiful using android ARCore !',
                    img: 'forest.png',
                    demo: 'https://www.youtube.com/watch?v=zb6w-m6mEz8',
                    code: 'https://github.com/mejdi14/ARGreenForest',
                    technologies:
                        [
                            {name: 'Android'},
                            {name: 'Java'},
                            {name: 'Xml'},
                            {name: 'Github'},
                            {name: 'ARCore'},
                            {name: 'Github Actions'},
                        ]
                }
        }
    }},
    mounted()
    {
        setTimeout(() => 
        {
            this.loading = false
        }, 400)
    }
}
</script>

<style lang="scss">
    .portfolio {margin-top: 4rem}

    .slide-left
    {
        opacity: 0;
        visibility: hidden;
        transform: translateX(-5rem)
    }
    .slide-right
    {
        opacity: 0;
        visibility: hidden;
        transform: translateX(5rem)
    }
</style>
