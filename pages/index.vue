<template>
  <div class="container">
    <search-form-input v-model="keyword" />
    <images-list />
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      keyword: '',
    }
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
