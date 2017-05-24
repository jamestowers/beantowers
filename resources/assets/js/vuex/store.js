import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import errors from './modules/errors';
import app from './modules/app';
import projects from './modules/projects';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
    actions,
    modules: {
        errors,
        app,
        projects
    },
    strict: debug
});

export default store;