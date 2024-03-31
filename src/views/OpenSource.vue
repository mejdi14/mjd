<template>
    <main>
        <secondary-header-component :class="{'slide-top': loading}">Open Source</secondary-header-component>
        <secondary-sub-component :class="{'slide-top': loading}">These are my favorite projects I've worked on for the past few years.</secondary-sub-component>
        <open-source-component></open-source-component>
    </main>
</template>

<script>

import SecondaryHeaderComponent from '../components/SecondaryHeaderComponent'
import SecondarySubComponent from '../components/SecondarySubComponent'
import OpenSourceComponent from '../components/OpenSourceComponent'

export default {
  components: {SecondaryHeaderComponent, SecondarySubComponent, OpenSourceComponent},
    data(){return{
        loading: true
    }},

    mounted()
    {
        setTimeout(() => 
        {
            this.loading = false
        }, 200)
    }
}
</script>

<style lang="scss">

    .slide-top
    {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-5rem)
    }

</style>
