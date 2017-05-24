<template>
    <section 
        v-if="project" 
        id="content" 
        class="project-page group"
        >
        <div class="project-content group">
            <div class="row flex">
                <div class="project-intro col6 padded" data-scroll>
                    <h1 class="page-title">{{ project.title }}</h1>
                    <h2>{{ project.subtitle }}</h2>
                    {{ project.description }}
                </div>  
                <div class="col6 flex-center pad bg-alt">
                    <img :src="`/images/medium/${project.images[0].url}`" data-scroll data-scroll-delayed />
                </div>
            </div>
            <div v-if="project.images[1]" class="col12 pad bg-dark">
                <img :src="`/images/${$store.getters.dimensions.imageSize}/${project.images[1].url}`" data-scroll />
            </div>

            <div v-if="project.images[2]" class="col12 pad">
                <img v-if="project.images[2]" :src="`/images/${$store.getters.dimensions.imageSize}/${project.images[2].url}`" data-scroll />
            </div>
        </div>

        <div class="next-project flex-center">
            <div class="project-image-cont">
                <div class="project-image" :style="{ 'background-image': `url(/images/header-${$store.getters.dimensions.imageSize}/${nextProject.header_image[0].url})`}"></div>
            </div>
            <div class="next-project-body">
                <h2>Next project</h2>
                <h1 class="text-center huge">{{ nextProject.title }}</h1>
                <router-link 
                    :to="{ name: 'project', params: { slug: nextProject.slug }}" 
                    role="button" 
                    class="btn-clear project-link"><span class="mask"></span><span class="text">View project</span></router-link>
            </div>
        </div>
    </section>
</template>

<script>
    
    import { eventHub } from '../app.js'
    //import store from '../vuex/store';

    export default {

        data(){
            return {
            }
        },

        computed: {
            project(){
                return this.$store.getters.projectBySlug(this.$store.state.route.params.slug)  
            },
            nextProject(){
                return this.$store.getters.projects[this.$store.getters.nextProjectIndex]
            }
        },

        components: {
            //
        },

        watch: {
            project(to, from){
                //this.init()
            }
        },

        mounted(){
            //console.log('mounted');
            this.init()
        },

        beforeUpdate(){

        },

        updated(){
            //console.log('updated');
            if(this.project)
                this.init()
        },

        destroyed() {
            //trigger.destroyAll()
        },

        methods: {
            init(){
                let index = this.$store.getters.projects.indexOf(this.project)
                this.$store.dispatch('setActiveProject', { index: index })
                //this.$root.pageInit(this.$el)
            }
        }

    }

</script>

<style lang="scss">
    
    @import "../../sass/_variables.scss";
    
    [data-scroll]{
        transition: all 0.8s $ease-out-expo;
        opacity:0;
        transform: translateY(20%);
        &[data-scroll-delayed]{
            transition-delay: 0.2s;
        }
        &.visible{
            opacity:1;
            transform: translateY(0%);
        }
    }
    .project-page{
        margin-bottom: 300px;
        .bg-alt{
            background: transparent;
            transition: background 0.8s $ease-out-expo;
        }
    }
    .project-content{
        position: relative;
        z-index: 1;
    }
    .project-intro{

    }
    
    .next-project{
        display: none;
        height:300px;
        position: fixed;
        width:100%;
        bottom:0;
        z-index: 0;
        .next-project-body{
            position: relative;
            z-index: 1;
        }
    }
    .isReady {
        .bg-alt{
            background: $grey3;
        }
        .project-content{
            background: $grey2;
        }
        .next-project{
            display: flex;
        }
    }
    
</style>