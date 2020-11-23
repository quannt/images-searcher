import Vue from 'vue'
export const state = () => ({
  lists: {
    'my-list': {
      '31231-3213k#!@#@': null,
    },
    'my-list-02': {
      '31231-3213k#!@#@': null,
    },
    'my-list-03': {
      '31231-3213k#!@#@': null,
    },
  },
})

export const mutations = {
  add(state, { listKey }) {
    Vue.set(state, listKey, {})
  },
  addImage(state, { listKey, image }) {
    if (!state[listKey]) {
      Vue.set(state.lists, listKey, {})
    }
    Vue.set(state.lists, `${listKey}`, { [image.id]: image })
  },
  deleteImage(state, { listKey, image }) {
    Vue.delete(state.lists, `${listKey}.${image.id}`)
  },
}
