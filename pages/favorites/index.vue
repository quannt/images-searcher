<template>
  <div>
    <div v-for="(listValue, listKey) in favoriteLists" :key="listKey">
      <p
        class="mb-2 bg-gray-500 text-white capitalize font-medium rounded p-2 text-2xl"
      >
        {{ listKey }}
      </p>

      <images-list :images="listValue" :masonry="false" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Favorites',

  data() {
    return {}
  },

  computed: {
    favoriteLists() {
      return this.$store.state.lists
    },
  },
}
</script>

<style scoped></style>
