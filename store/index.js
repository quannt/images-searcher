import Vue from 'vue'
export const state = () => ({
  lists: {},
})

export const mutations = {
  add(state, { listKey }) {
    if (!state.lists[listKey]) {
      Vue.set(state.lists, listKey, {})
    }
  },
  addImage(state, { listKey, image }) {
    if (!state.lists[listKey]) {
      Vue.set(state.lists, listKey, {})
    }
    Vue.set(state.lists, `${listKey}`, { [image.id]: image })
  },
  deleteImage(state, { listKey, image }) {
    Vue.delete(state.lists, `${listKey}.${image.id}`)
  },
}
