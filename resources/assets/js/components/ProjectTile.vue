<template>
    <div class="project-tile" 
        :class="classObject">
        <div class="project-image-cont">
            <div class="project-image" :style="{ 'background-image': `url(/images/header-${$store.getters.dimensions.imageSize}/${project.header_image[0].url})`}"></div>
        </div>
        <div class="project-title-content">
            <div class="project-title-cont">
                <h1 class="project-title">{{ project.title }}</h1>
            </div>
            <div class="underline"></div>
            <div class="project-title-cont">
                <h2 class="project-subtitle"><span>{{ project.subtitle }} </span></h2>
            </div>
            <router-link 
                :to="{ name: 'project', params: { slug: project.slug }}" 
                role="button" 
                class="btn-clear project-link"><span class="mask"></span><span class="text">View project</span></router-link>
        </div>
    </div>
</template>

<script>

    export default {

        props: {
            project: {
                type: Object,
                required: true
            },
            isActive: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            classObject(){
                return {
                    active: this.isActive
                }
            }
        }

    }

</script>

<style lang="scss">
    
    @import "../../sass/_variables.scss";
    
    .slide-enter[data-slide-direction="slide-up"] {
        .project-image-cont{
            transform: translateY(100%)
        }
    }
    .slide-enter[data-slide-direction="slide-down"] {
        .project-image-cont{
            transform: translateY(-100%)
        }
    }

    .slide-leave-to[data-slide-direction="slide-down"] {
        .project-image-cont{
            transform: translateY(100%)
        }
    }
    .slide-leave-to[data-slide-direction="slide-up"] {
        .project-image-cont{
            transform: translateY(-100%)
        }
    }

    .slide-enter-to,
    .slide-leave {
        .project-image-cont{
            transform: translateY(0)
        }
    }
    .slide-leave-to {
        .underline{
            width:0;
        }
    }

    .slide-enter-active,
    .slide-leave-active{
        .project-image-cont{
            transition: all .6s cubic-bezier(.86,0,.07,1);
        }
    }

    
    .project-tile,
    .project-image-cont,
    .project-image{
        width:100%;
        height:100%;
    }
    .project-tile{
        display: flex;
        align-content: center;
        position: absolute;
        top:0;
        left:0;
        padding: $padding;
        &.active{
            .project-title,
            .project-subtitle{
                transform: translateY(0%);
            }
            .project-subtitle{
                transition-delay: 0.8s;
            }
            .underline{
                width:100%;
            }
        }
    }
    .project-image-cont{
        position: absolute;
        top:0;
        left:0;
        transition: all 0.8s $ease-out-expo 0s;
        z-index: 0;
    }
    .project-image{
        background-size: cover;
        background-position: 50% 50%;
    }
    .project-title-content{
        align-self: center;
        color: $white;
        position: relative;
        width: 100%;
        z-index: 2;
    }
    .project-title-cont{
        overflow: hidden;
    }
    .project-title{
        color: $white;
        font-size: 8vw;
        transform: translateY(100%);
        transition: all 0.8s $ease-in-out;
        margin: 0;
        line-height: 1;
    }
    .project-subtitle{
        position: relative;
        transform: translateY(-100%);
        transition: all 0.4s $ease-out-expo 0s;
        /* &:after{
            background: white;
            display: block;
            content: '';
            height:100%;
            width:0;
            position: absolute;
            top:0;
            right:0;
            animation: wipe 0.8s $ease-in-out 0.6s;
        } */
    }
    .underline{
        background: $white;
        height:2px;
        width:0px;
        transition: width 0.8s $ease-out-expo 0.6s;
    }
    
</style>