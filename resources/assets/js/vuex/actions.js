import * as types from './mutation-types';
import Vue from 'vue';


/************************************
ERRORS 
*************************************/

export const setErrors = ({ commit }, errors) => {
    
    commit(types.SET_ERRORS, { errors: errors });
};

export const clearErrors = ({ commit }) => {
    
    commit(types.CLEAR_ERRORS);
};


/************************************
PROJECTS
*************************************/
export const getProjects = ({ commit }) => {
    Vue.http.get('projects').then(response => {
        commit(types.SET_PROJECTS, { projects: response.body });
    }, error => {
        console.error(error);
    })
};

export const setActiveProject = ({ commit, state, getters }, data) => {
    commit(types.SET_ACTIVE_PROJECT, { index: data.index})
}

export const nextProject = ({ commit, state, getters }) => {
    commit(types.INCREMENT_ACTIVE_PROJECT)
}

export const prevProject = ({ commit, state, getters }) => {
    commit(types.DECREMENT_ACTIVE_PROJECT)
}

/************************************
DIMENSIONS 
*************************************/

export const setDimensions = ({ commit }) => {
    
    let w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth||e.clientWidth||g.clientWidth,
    y = w.innerHeight||e.clientHeight||g.clientHeight,
    img;

    if (x < 400) {
        img ='small';
    }
    else if (x < 900) {
        img ='medium';
    }
    else if (x < 1300) {
        img ='large';
    }
    else {
        img ='xlarge';
    }

    let dimensions = {
        height: y,
        width: x,
        isMobile: x < 768,
        imageSize: img
    }
    commit(types.SET_APP_DIMENSIONS, { dimensions: dimensions });
};

export const setDocumentHeight = ({ commit }) => {

    let b = document.body,
    h = document.documentElement;

    let documentHeight = Math.max( b.scrollHeight, b.offsetHeight, h.clientHeight, h.scrollHeight, h.offsetHeight );
    
    commit(types.SET_DOCUMENT_HEIGHT, { height: documentHeight });
}


/************************************
DEVICE
*************************************/

export const setDeviceInfo = ({ commit }) => {

    let device = {
        isTouchEnabled: (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0))
    }

    commit(types.SET_DEVICE, { device: device });
};