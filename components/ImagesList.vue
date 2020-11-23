<template>
  <div>
    <div class="images-container">
      <figure v-for="image in images" :key="image.id" class="item">
        <img :src="image.urls.regular" />
        <figcaption class="caption">
          <a :href="_get(image, 'user.links.html')" target="_blank">
            <span class="text-sm text-gray-700"
              >Image by @{{ _get(image, 'user.name') }}</span
            >
          </a>
          <div class="flex">
            <a
              class="border p-1 mr-1 hover:bg-gray-100"
              role="button"
              title="Download photo"
              :href="_get(image, 'urls.full')"
              download
              rel="nofollow"
              target="blank"
              @click="trackDownload(image)"
            >
              <download-icon />
            </a>
            <button class="border p-1 rounded hover:bg-gray-100" role="button">
              <plus-icon />
            </button>
          </div>
        </figcaption>
      </figure>
    </div>
    <div class="flex justify-center items-center mt-3">
      <button
        v-if="hasMoreImages"
        type="button"
        class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-100"
        @click="$emit('load-more')"
      >
        <arrow-down-icon class="mr-2" />
        Load More
      </button>
    </div>
  </div>
</template>

<script>
import DownloadIcon from '@/assets/icons/download.svg?inline'
import PlusIcon from '@/assets/icons/plus.svg?inline'
import ArrowDownIcon from '@/assets/icons/arrow-down.svg?inline'
import _get from 'lodash.get'

export default {
  name: 'ImagesList',

  components: {
    DownloadIcon,
    PlusIcon,
    ArrowDownIcon,
  },

  props: {
    images: {
      type: Array,
      required: false,
      default() {
        return []
      },
    },
    hasMoreImages: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    _get,
    async trackDownload(image) {
      // try {
      //   await this.$imageDownload({
      //     photoId: _get(image, 'id'),
      //   })
      // } catch (error) {
      //   console.log(error)
      // }
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
