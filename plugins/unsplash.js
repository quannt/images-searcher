/* eslint-disable no-console */
import Unsplash, { toJson } from 'unsplash-js'

const unsplash = new Unsplash({ accessKey: process.env.UNSPLASH_ACCESS_KEY })

export default ({ app }, inject) => {
  // Inject $imageSearch in Vue, context and store.
  inject('imageSearch', ({ keyword, page = 1, perPage = 10 }) => {
    return unsplash.search
      .photos(keyword, page, perPage)
      .then(toJson)
      .then((json) => {
        return json
      })
      .catch((error) => {
        console.error(error)
        return {}
      })
  })
}
