import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    key: 'image-persist',
  }).plugin(store)
}
