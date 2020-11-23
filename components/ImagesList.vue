<template>
  <div class="images-container">
    <figure v-for="image in images" :key="image.id" class="item">
      <img :src="image.urls.regular" />
      <figcaption>
        <span
          >Image by @{{ image && image.profile && image.profile.name }}</span
        >
        <div>
          <button>
            <download-icon />
          </button>
          <button>
            <plus-icon />
          </button>
        </div>
      </figcaption>
    </figure>
  </div>
</template>

<script>
import DownloadIcon from '@/assets/icons/download.svg?inline'
import PlusIcon from '@/assets/icons/plus.svg?inline'

export default {
  name: 'ImagesList',

  components: {
    DownloadIcon,
    PlusIcon,
  },

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

<style scoped>
/* https://codepen.io/dudleystorey/pen/yqrhw */
.images-container {
  column-width: 320px;
  column-gap: 15px;
  width: 100%;
}

.images-container figure {
  background: #fefefe;
  border: 2px solid #fcfcfc;
  box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
  margin: 0 2px 15px;
  padding: 15px;
  padding-bottom: 10px;
  transition: opacity 0.4s ease-in-out;
  display: inline-block;
  column-break-inside: avoid;
}

.images-container figure img {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
  margin-bottom: 5px;
}

.images-container figure figcaption {
  font-size: 0.9rem;
  color: #444;
  line-height: 1.5;
}

.images-container small {
  font-size: 1rem;
  float: right;
  text-transform: uppercase;
  color: #aaa;
}

.images-container small a {
  color: #666;
  text-decoration: none;
  transition: 0.4s color;
}

.images-container:hover figure:not(:hover) {
  opacity: 0.4;
}

@media screen and (max-width: 750px) {
  .images-container {
    column-gap: 0px;
  }
  .images-container figure {
    width: 100%;
  }
}
</style>
