<template>
  <div class="images-container">
    <figure v-for="image in images" :key="image.id" class="item">
      <img :src="image.urls.regular" />
      <figcaption class="caption">
        <a :href="_get(image, 'user.links.html')" target="_blank">
          <span class="text-sm text-gray-700"
            >Image by @{{ _get(image, 'user.name') }}</span
          >
        </a>
        <div>
          <button class="border p-1 mr-1 hover:bg-gray-100" role="button">
            <download-icon />
          </button>
          <button class="border p-1 rounded hover:bg-gray-100" role="button">
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
import _get from 'lodash.get'

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

  methods: {
    _get,
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

.images-container .item {
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

.images-container img {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
  margin-bottom: 10px;
}

.images-container .caption {
  font-size: 0.9rem;
  color: #444;
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
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

@media screen and (max-width: 750px) {
  .images-container {
    column-gap: 0px;
  }
  .images-container figure {
    width: 100%;
  }
}
</style>
