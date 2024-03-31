<template>
    <div class="portfolio">
        <div class="row">
            <project-component :project="projects.switcher" :class="{'slide-left': loading}">

            </project-component>

            <project-component :project="projects.stanley" :class="{'slide-right': loading}">

            </project-component>
        </div>
        <div class="row">
            <project-component :project="projects.lean" :class="{'slide-left': loading}">

            </project-component>

            <project-component :project="projects.calculator" :class="{'slide-right': loading}">

            </project-component>
        </div>
        <div class="row">
            <project-component :project="projects.mutlisearch" :class="{'slide-left': loading}">

            </project-component>
            <project-component :project="projects.colorpicker" :class="{'slide-right': loading}">

            </project-component>
        </div>
        <div class="row">
        <project-component :project="projects.music" :class="{'slide-left': loading}">

        </project-component>
            <project-component :project="projects.books" :class="{'slide-right': loading}">

        </project-component>
    </div>
    <div class="row">
            <project-component :project="projects.portfolio" :class="{'slide-left': loading}">

            </project-component>
            <project-component :project="projects.arcore" :class="{'slide-right': loading}">

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
            blob: 
            {
                name: 'Blob Stepper',
                summary: "A native Android library made with Jetpack Compose to create a circular stepper component which indicate going from one step to another using animation.",
                img: 'demo.gif',
                demo: 'https://github.com/mejdi14/Blob-Stepper',
                code: 'https://github.com/mejdi14/Blob-Stepper',
                technologies: 
                [
                     {name: 'Android'},
                    {name: 'Kotlin'},
                    {name: 'Jetpack Compose'},
                    {name: 'UI/UX'},
                ]
            },

 stanley: 
            {
                name: 'Stanly Kubrick',
                summary: " My tribute for my favorite movie director Stanley Kubrick, a list of the movies he made in his career presented with animation in a speacial way.",
                img: 'stanley.webp',
                demo: 'https://www.youtube.com/watch?v=DIl8lEsTYTM',
                code: 'https://github.com/mejdi14/Stanley-Kubrick-Archive',
                technologies: 
                [
                {name: 'Android'},
                    {name: 'Kotlin'},
                    {name: 'Jetpack Compose'},
                    {name: 'UI/UX'},
                     {name: 'CI/CD'},
                      {name: 'Animation'},
                ]
            },
            lean: 
            {
                name: 'Lean Dialog',
                summary: "Yet another dialog library made with Jetpack Compose and Kotlin. \n\n I have tried to make it pretty and useful in the same time and provide as much functions to make it modifiable.",
                img: 'dialog.png',
                demo: 'https://github.com/mejdi14/Lean-Dialog',
                code: 'https://github.com/mejdi14/Lean-Dialog',
                technologies: 
                [
                {name: 'Android'},
                    {name: 'Kotlin'},
                    {name: 'Jetpack Compose'},
                    {name: 'UI/UX'},
                     {name: 'CI/CD'},
                      {name: 'Animation'},
                ]
            },
            switcher: 
            {
                name: 'Card Switcher',
                summary: "Switching between two cards with animation, each one represent a view and a type of information, made with Android and Jetpack Compose.",
                img: 'stepper.gif',
                demo: 'https://github.com/mejdi14/Card-Switcher',
                code: 'https://github.com/mejdi14/Card-Switcher',
                technologies: 
                [
                {name: 'Android'},
                    {name: 'Kotlin'},
                    {name: 'Jetpack Compose'},
                    {name: 'UI/UX'},
                     {name: 'CI/CD'},
                      {name: 'Animation'},
                ]
            },
             calculator: 
            {
                name: 'Multi Day Calculator',
                summary: "This is my attempt to create a design i saw on dribbble using Jetpack Compose and Canvas, i was able to get the right calculation for the circle movement so that it look the same as the design.",
                img: 'calculator.gif',
                demo: 'https://github.com/mejdi14/mutli-day-calculator',
                code: 'https://github.com/mejdi14/mutli-day-calculator',
                technologies: 
                [
                {name: 'Android'},
                    {name: 'Kotlin'},
                    {name: 'Jetpack Compose'},
                    {name: 'UI/UX'},
                     {name: 'CI/CD'},
                     {name: 'Canvas'},
                      {name: 'Animation'},
                ]
            },
            switcher: 
            {
                name: 'Card Switcher',
                summary: "Switching between two cards with animation, each one represent a view and a type of information, made with Android and Jetpack Compose.",
                img: 'stepper.gif',
                demo: 'https://github.com/mejdi14/Card-Switcher',
                code: 'https://github.com/mejdi14/Card-Switcher',
                technologies: 
                [
                {name: 'Android'},
                    {name: 'Kotlin'},
                    {name: 'Jetpack Compose'},
                    {name: 'UI/UX'},
                     {name: 'CI/CD'},
                      {name: 'Animation'},
                ]
            },
            mutlisearch: 
            {
                name: 'Multi Search',
                summary: "I created the Flutter version of one of my favorite libraries on Android, this library allows you to use a search component with multiple parts.",
                img: 'multisearch.gif',
                demo: 'https://github.com/mejdi14/flutter_multi_search',
                code: 'https://github.com/mejdi14/flutter_multi_search',
                technologies: 
                [
                {name: 'Fluter'},
                    {name: 'Dart'},
                    {name: 'Search'},
                    {name: 'UI/UX'},
                     {name: 'CI/CD'},
                      {name: 'Animation'},
                ]
            },
            colorpicker: 
            {
                name: 'Color Picker',
                summary: "Android library made to make picking colors in Android easier for app makers and to give users more options.",
                img: 'colorpicker.png',
                demo: 'https://github.com/mejdi14/AndroidColorPicker',
                code: 'https://github.com/mejdi14/AndroidColorPicker',
                technologies: 
                [
                {name: 'Android'},
                    {name: 'Kotlin'},
                    {name: 'XML'},
                    {name: 'UI/UX'},
                     {name: 'CI/CD'},
                      {name: 'Animation'},
                ]
            },
            portfolio: 
            {
                name: 'Android Flat Dialog',
                summary: 'The idea behind this project was to contribute to the android cummunity and give something back. i decided to create a simple but beautiful dialog and i called it flat dialog. \n\n The full process of making this library was a total joy and a great experience for me.',
                img: 'flatdialog.png',
                demo: 'https://github.com/mejdi14/Flat-Dialog-Android',
                code: 'https://github.com/mejdi14/Flat-Dialog-Android',
                technologies: 
                [
                    {name: 'Android'},
                    {name: 'Java'},
                    {name: 'Xml'},
                    {name: 'Gitlab'},
                    {name: 'Jitpack'},
                    {name: 'UI/UX'},
                ]
            },
            books:
                {
                    name: 'Books swipe exemple',
                    summary: 'my first open source project with kotlin, i learned with this project how to work with complex animations and how to use git flow and kraken to boost my work',
                    img: 'preview.gif',
                    demo: 'https://github.com/mejdi14/BooksSwipe',
                    code: 'https://github.com/mejdi14/BooksSwipe',
                    technologies:
                        [
                            {name: 'Android'},
                            {name: 'Kotlin'},
                            {name: 'Xml'},
                            {name: 'Github'},
                            {name: 'Jitpack'},
                            {name: 'UI/UX'},
                            {name: 'Constraint Layout'},
                            {name: 'Git Flow'},
                            {name: 'Git kraken'},
                            {name: 'Github Actions'},
                        ]
                },
            profile:
                {
                    name: 'Android Profile Design',
                    summary: 'the goal with this project was simple, i had to create a pretty profile page with constraint layout and use motion layout to make it more alive',
                    img: 'profile.jpg',
                    demo: 'https://github.com/mejdi14/ProfileDesign',
                    code: 'https://github.com/mejdi14/ProfileDesign',
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
                            {name: 'ShapeableImageView'},
                            {name: 'circle-ci'},
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
