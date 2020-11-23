<template>
  <div class="container">
    <search-form-input v-model="keyword" class="mb-8" />
    <images-list :images="images" />
  </div>
</template>

<script>
export default {
  name: 'Home',

  fetch() {
    // TODO: call unsplash API here
    const result = []
    for (let i = 0; i < 100; i++) {
      result.push({
        id: i,
        urls: {
          regular: `https://picsum.photos/${this.getRandomInt(
            800,
            2000
          )}/${this.getRandomInt(800, 2000)}`,
        },
      })
    }
    this.images = result
  },

  data() {
    return {
      keyword: '',
      images: [],
    }
  },

  methods: {
    getRandomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
}
</style>
