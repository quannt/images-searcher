<template>
  <div>
    <figure v-for="image in images" :key="image.id">
      <img :src="image.urls.regular" />
      <figcaption>
        Image by @{{ image && image.profile && image.profile.name }}
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'ImagesList',

  props: {
    images: {
      type: Array,
      required: false,
      default() {
        return []
      },
    },
  },
}
</script>
