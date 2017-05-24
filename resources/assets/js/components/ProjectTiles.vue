<template>
    
    <section 
        v-if="projects.length && firstImageLoaded"
        transition
        v-ontransitionend:height="headerReady"
        class="projects"
        :class="{ 'idle' : !animating && $store.state.route.name == 'home'}"
        :style="{ height: this.height }"
        >
        <transition-group 
            name="slide" 
            tag="div"
            mode="out-in"
            v-on:before-enter="beforeEnter"
            v-on:after-enter="afterEnter"
            v-on:before-leave="beforeLeave"
            v-on:after-leave="afterLeave"
            :duration="700"
            >
            <project-tile
                v-for="(project, index) in projects"
                v-show="index == $store.getters.activeProjectIndex"
                key="index"
                :project="projects[index]"
                :is-active="index == $store.getters.activeProjectIndex && !animating && $store.state.route.name == 'home'"
                >
                </project-tile>
        </transition-group>
        <a @click.prevent="next" href="#" class="slider-nav slider-nav-right">
            <svg height="50" width="50">
                <circle cx="25" cy="25" r="24.5" fill="rgba(255,255,255,0.2)" style="fill: rgba(255,255,255,0.2);"></circle> 
                <circle class="stroke" cx="25" cy="25" r="24" stroke="white" stroke-width="2" fill="transparent" style="fill: rgb(255,255,255,0.2); stroke-dashoffset: 200px;"></circle>
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(18.5,24) rotate(-45)" stroke-linecap="round" stroke-linejoin="round"><path d="M3.26849658e-13,8.84328471 L3.26849658e-13,-4.19220214e-13" stroke="#FFFFFF" stroke-width="2"></path> <path d="M2.27373675e-13,8.84328471 L8.84328471,8.84328471" stroke="#FFFFFF" stroke-width="2"></path></g>
            </svg>
        </a>

    </section>

    <loading-indicator v-else></loading-indicator>

    

</template>

<script>
    
    import { eventHub } from '../app.js'
    import ProjectTile from './ProjectTile.vue';
    import LoadingIndicator from './Loading.vue';

    export default {

        data(){
            return {
                animating: false,
                headerReady: false, // needed to avoid console error
                scrollDirection: 'up',
                cycleInterval: null,
                loadedImages: [],
                firstImageLoaded: false
            }
        },

        computed: {
            projects(){
                return this.$store.getters.projects || [];
            },
            images(){
                return this.projects.map((project) => { return project.header_image[0].url; });
            },
            height(){
                return this.$store.state.route.name == 'home' ? this.$store.getters.dimensions.height - (this.$store.getters.dimensions.height/5.6) : 400
            },
            width(){
                //return this.$store.state.route.name == 'home' ? this.$store.getters.dimensions.width - 120 : this.$store.getters.dimensions.width
            },
            activeProject(){
                return this.projects ? this.projects[0] : null
            }
        },

        components: {
            ProjectTile,
            LoadingIndicator
        },

        watch: {
            '$route': function(to, from, next){
                if(from.name === 'home'){
                    clearInterval(this.cycleInterval);
                }
                if(to.name === 'home'){
                    //console.log(this.$store.getters.activeProjectIndex)
                    this.cycleProjects()
                }
            },
            images(){
                this.preloadImages()
            }
        },

        created(){
            eventHub.$on('scroll', this.handleScroll)
            if(this.$store.state.route.name == 'home'){
                this.cycleProjects()
            }
        },

        mounted(){
            //eventHub.$emit('headerReady')
        },

        methods: {
            handleScroll(scroll){

                if(this.animating)
                    return 

                this.cycleProjects()

                this.scrollDirection = scroll.direction

                if(scroll.direction == 'down'){
                    this.prev()
                }else{
                    this.next()
                }
            },
            preloadImages(){
                var self = this
                for(let i=0; i < this.images.length; i++){
                    let img = new Image();
                    img.src = `/images/header-${this.$store.getters.dimensions.imageSize}/${this.images[i]}`
                    img.onload = function(){
                        if(i == 0){
                            eventHub.$emit('headerReady')
                            self.firstImageLoaded = true
                        }
                        self.loadedImages.push(i)
                    }
                }
            },
            cycleProjects(){
                let self = this
                clearInterval(this.cycleInterval)
                this.cycleInterval = setInterval(function(){ self.next() }, 8000)
            },
            next(){
                if(this.$store.getters.activeProjectIndex === this.$store.getters.projects.length-1){
                    this.$store.dispatch('setActiveProject', { index: 0 })
                }else{
                    this.$store.dispatch('nextProject')
                }
            },
            prev(){
                if(this.$store.getters.activeProjectIndex === 0){
                    this.$store.dispatch('setActiveProject', { index: this.$store.getters.projects.length-1 })
                }else{
                    this.$store.dispatch('prevProject')
                }
            },
            beforeEnter(el) {
                el.dataset.slideDirection = `slide-${this.scrollDirection}`
                this.animating = true
            },
            afterEnter(el) {
                this.animating = false
                delete el.dataset.slideDirection
            },
            beforeLeave(el) {
                el.dataset.slideDirection = `slide-${this.scrollDirection}`
            },
            afterLeave(el) {
                delete el.dataset.slideDirection
            },
        }
    }

</script>

<style lang="scss">
    
    @import "../../sass/_variables.scss";
    
    
    [data-page="home"]{
        .projects{
            top: $padding;
            .project-link{
                max-width:100%;
                overflow: hidden;
                position: relative;
                animation: wipe 0.8s $ease-in-out 0s;
                span.mask{
                    animation: mask 0.8s $ease-in-out 0.8s forwards;
                    width: 100%;
                }
            }
        }
    }
    [data-page="project"]{
        .projects{
            margin: auto 0;
            transition-delay: 0.8s;
            .project-image-cont{
                transform: scale(1.1);
                transition-duration: 0.8s;
            }
            .project-link{
                animation: wipe 0.8s $ease-in-out 0.8s reverse forwards;
                span.mask{
                    animation: mask 0.8s $ease-in-out 0s;
                }
            }
            .slider-nav{
                opacity:0;
            }
        }
    }
    .projects{
        height:100%;
        margin: auto $padding;
        overflow: hidden;
        position: relative;
        top:0;
        max-width: 100%;
        transition: all 0.8s $ease-in-out;
        //transition-property: height, margin, top, opacity;
        z-index: 1;
        .project-link{
            padding-left:0;
            padding-right:0;
            span.text{
                margin: 0 20px;
            }
            span.mask{
                background: white;
                display: block;
                height:100%;
                width:0;
                position: absolute;
                top:0;
                right:0;
                transition: width 0.4s $ease-in-out 1s;
            }
        }
    }

    .slider-nav{
        display: block;
        position: absolute;
        bottom: 10px;
        left:50%;
        text-align: center;
        transform: translateX(-50%);
        transition: opacity 0.6s $ease-in-out 1s;
        &:hover{
            svg .stroke{
                stroke-dashoffset: 0;
            }
        }
    }

    svg .stroke{
        stroke-dasharray: 154,200;
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
        transition: stroke-dashoffset 0.4s $ease-in-out;
    }

    .idle{
        svg .stroke{
            animation-name: draw;
            animation-duration: 8s;
            animation-fill-mode: forwards; // Stay on the last frame
            animation-iteration-count: 1; // Run only once
            animation-timing-function: linear;
        }
    }

    @keyframes draw {
      to {
        stroke-dashoffset: 0;
      }
    }
    
</style>