import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import { routes } from './routes';
import store from './vuex/store';
import { sync } from 'vuex-router-sync';

import scrollPage from './scrollPage';
import scrollMonitor from 'scrollMonitor';
import imagesLoaded from 'imagesLoaded';

import ProjectTiles from './components/ProjectTiles.vue';
import ImageUpload from './components/ImageUpload.vue';

window._ = require('lodash');
window.Vue = require('vue');

require('vue-resource');

Vue.use(VueRouter);
Vue.use(Vuex);

const is_production_env = process.env.NODE_ENV == 'production';
Vue.config.devtools = !is_production_env;
Vue.config.debug = is_production_env;
Vue.config.silent = is_production_env;
Vue.http.options.root = is_production_env ? 'http://beantowers.com/' : '';
Vue.http.options.credentials = true;
Vue.http.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json'
    //'Authorization': 'Bearer ' + Vue.cookie.get('session_token')
};

Vue.directive('ontransitionend', {
    inserted: function (el, binding, vnode) {
        el.addEventListener('transitionend', function(event){
            if(binding.arg){
                if(binding.arg === event.propertyName){
                    eventHub.$emit(binding.expression, { el: el })
                }
            } else{
                console.log(el);
            }
        })
    }
})

export const router = new VueRouter({
    mode: 'history',
    routes, // short for routes: routes
    /*scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }*/
})

sync(store, router)

export const eventHub = new Vue();

const app = new Vue({
    
    el: '#app',

    router,

    store,

    data(){
        return {
            pageBottom: 0
            /*mousePos: {
                x: 0,
                y: 0
            }*/
        }
    },

    components: { 
        ProjectTiles,
        ImageUpload
    },

    created(){
        store.dispatch('getProjects')
        store.dispatch('setDimensions')
        
        window.addEventListener('resize', _.debounce(function() {
          store.dispatch('setDimensions')
        }, 400));
        
        eventHub.$on('headerReady', this.onHeaderReady)
        eventHub.$on('imagesLoaded', this.onImagesLoaded)

        /*let scrollers = document.querySelectorAll('[data-scroll]')
        var elementWatcher = scrollMonitor.create( scrollers );

        elementWatcher.enterViewport(function() {
            console.log( 'I have entered the viewport' );
        });
        elementWatcher.exitViewport(function() {
            console.log( 'I have left the viewport' );
        });*/
        //trigger.attach(this.onScroll);
        
        //this.creditsLog();
    },

    mounted() {
        let mousewheelevt=(/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";
        document.addEventListener(mousewheelevt, this.handleMouseWheel, false);
    },

    methods: {

        pageInit(el){
            if(!el) { el = this.$el }

            this.initWatchers()
            
            imagesLoaded( el, function( instance ) {
                eventHub.$emit('imagesLoaded', {})
            });
        },
        initWatchers(){
            this.destroyAllWatchers()
            let elements = document.querySelectorAll('[data-scroll]')
            elements.forEach(this.makeWatcher);
        },
        makeWatcher( element ) {
            let watcher = scrollMonitor.create( element );
            watcher.enterViewport(this.onEnterViewport);
        },
        // custom destroyAll watcher
        // TODO: check this has been merged then use native destroyAll method
        // see: https://github.com/stutrek/scrollMonitor/pull/39/files
        destroyAllWatchers(){
            let watchers = scrollMonitor.watchers,
                eventTypes = scrollMonitor.eventTypes;
            for (var w = 0, x = watchers.length; w < x; w++) {
                for (var i = 0, j = eventTypes.length; i < j; i++) {
                    watchers[w].callbacks[eventTypes[i]].length = 0;
                }
            }
            watchers.length = 0;
        },


        // EVENT RESPONSES
        onHeaderReady(){
            this.addClass('isReady')
            this.removeClass('isAnimating')
            this.pageInit()
    
            //document.body.scrollTop = 1
        },
        onImagesLoaded(){
            store.dispatch('setDocumentHeight')
            this.pageBottom.destroy
            this.pageBottom = scrollMonitor.create( this.$store.getters.dimensions.documentHeight, 200 )
            let self = this
            this.pageBottom.enterViewport ((e, state) => 
                console.log('Reached end of page')
            )
            this.addClass('imageLoaded')
        },
        onEnterViewport(e, el){
            this.addClass('visible', el.watchItem);
        },

        
        /*onScroll(scrollLeft, scrollTop, width, height){
            //console.log( (store.getters.dimensions.documentHeight - height) - scrollTop)
            // if you are done with the callback you can detach it
            // using the ScrollTrigger.detach() method.
            //trigger.detach(callback);
        },*/
        handleMouseWheel(evt){
            if(this.$store.state.route.name !== 'home' || this.$store.getters.projects.length < 2)
                return
            if (!evt) evt = event;
            let direction = (evt.detail<0 || evt.wheelDelta>0) ? 'down' : 'up';

            eventHub.$emit('scroll', { direction: direction })
        },
        addClass(className, el = null){
            if(!el){ el = this.$el }

            if (el.classList)
              el.classList.add(className);
            else
              el.className += ' ' + className;
        },
        removeClass(className){
            if (this.$el.classList)
              this.$el.classList.remove(className);
            else
              this.$el.className = this.$el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        },
        /*handleMouseMove(e) {
            this.mousePos.x = e.clientX / window.innerWidth * 2 - 1,
            this.mousePos.y = e.clientY / window.innerHeight * 2 - 1,
            this.emitter.emit(p.WORKS_MOUSEMOVE, this.mousePos)
        },*/
        creditsLog() {
            console.log("%c", "background: #51FFB7; font-size: 12px; color: #222222"),
            console.log("%c Site designed and built by ", "padding:5px 0; font-size: 12px; color: #222222"),
            console.log("%c", "background: #51FFB7; font-size: 12px; color: #222222"),
            console.log("%c BeanTowers", "background: #51FFB7; padding:15px; font-size: 12px; color: #222222"),
            console.log("%c ", "padding:5px; font-size: 12px; color: #cccccc"),
            console.log("%c Digital first design & development", "padding:5px; font-size: 12px; color: #cccccc"),
            console.log("%c beantowers.com", "padding:5px; font-size: 12px; color: #222222"),
            console.log("%c", "font-size: 12px; color: #f0f0f0")
        }
    }
});

router.beforeEach((to, from, next) => {
    app.removeClass('isReady')
    app.removeClass('imageLoaded')
    app.addClass('isAnimating')
    scrollPage(0, 400, 'easeInQuad',() => next())
    /*if(to.name === 'home'){
        
    } else if(to.name === 'project'){
        //console.log(to);
    }*/
    
});