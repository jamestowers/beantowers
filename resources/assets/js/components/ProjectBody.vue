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
    //import scrollPage from '../scrollPage';
    //import store from '../vuex/store';

    export default {

        data(){
            return {
                lastProject: null
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
                console.log('- watch event called');
                this.init()
                //console.log('Active project changed to index:' + this.$store.getters.activeProjectIndex)
            }
        },

        created(){
            //console.log('- created')
        },

        mounted(){
            console.log('- mounted');
        },

        /*beforeRouteUpdate(to, from, next){
            console.log('going from ' + from.params.slug + ' to ' + to.params.slug);
            next()
        },*/

        beforeUpdate(){
            if(this.lastProject && this.project != this.lastProject){
                console.log('- - - beforeUpdate: changing from ' + this.lastProject.title);
            }
        },

        updated(){
            //console.log('updated called');
            this.setLastProject()
        },

        destroyed() {
            console.log('Destroying');
        },

        methods: {
            init(){
                let index = this.$store.getters.projects.indexOf(this.project)
                this.$store.dispatch('setActiveProject', { index: index })
                //this.lastProject = this.project
            },
            setLastProject(){
                if(!this.project){
                    console.log('- - - - No project, returning');
                    return 
                }

                // have existing project and updating to a new one
                if(this.lastProject && this.project != this.lastProject){
                    console.log('- - - - updating to new project: ' +  this.project.title);
                    this.lastProject = this.project

                // No previous project but got a new one so this is a first time project view 
                }else if(!this.lastProject && this.project){
                    console.log('- - - No last project, setting lastProject to ' + this.project.title);
                    this.lastProject = this.project;

                // have a previous project but no new one so moving away from project page
                }else if(this.project === this.lastProject){
                    console.log('- - - - updated, same project')
                    eventHub.$emit('headerReady')
                }else{
                    console.log('- - - - updated, have project: ' + this.project.title)
                }
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
        & > div{
            transform-origin: 50% 50%;
            transition: all 0.4s $ease-in-out;
        }
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
    .switch-project{
        overflow: hidden;
        .next-project{
            bottom: calc(100% - 300px);
            z-index: 1;
        }
    }
    
</style>