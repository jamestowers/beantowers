import { SET_APP_DIMENSIONS, SET_DOCUMENT_HEIGHT, SET_DEVICE, CLEAR_APP_DIMENSIONS } from '../mutation-types';

const state = {
  dimensions: {},
  device: {}
}

const getters = {
    dimensions: (state) => state.dimensions,
    isMobile: (state) => state.dimensions.isMobile
}

const mutations = {

  [SET_APP_DIMENSIONS](state, payload){
    state.dimensions = payload.dimensions;
  },

  [SET_DOCUMENT_HEIGHT](state, payload){
    //console.log(payload.dimensions)
    state.dimensions.documentHeight = payload.height;
  },

  [SET_DEVICE](state, payload){
    state.device = payload.device;
  }

}

export default {
  state,
  getters,
  mutations
}