import { SET_PROJECTS, SET_ACTIVE_PROJECT, INCREMENT_ACTIVE_PROJECT, DECREMENT_ACTIVE_PROJECT } from '../mutation-types';

const state = {
  projects: [],
  activeProjectIndex: 0,
}

const getters = {
    projects: (state) => state.projects,
    projectBySlug: (state, getters) => (slug) => {
      return state.projects.find(project => project.slug === slug)
    },
    activeProjectIndex: (state) => state.activeProjectIndex,
    nextProjectIndex: (state) => state.activeProjectIndex === state.projects.length-1 ? 0 : state.activeProjectIndex+1
}

const mutations = {

  [SET_PROJECTS](state, payload){
    state.projects = payload.projects;
  },

  [SET_ACTIVE_PROJECT](state, payload){
    state.activeProjectIndex = payload.index;
  },

  [INCREMENT_ACTIVE_PROJECT](state, payload){
    state.activeProjectIndex++;
  },

  [DECREMENT_ACTIVE_PROJECT](state, payload){
    state.activeProjectIndex--;
  }

}

export default {
  state,
  getters,
  mutations
}