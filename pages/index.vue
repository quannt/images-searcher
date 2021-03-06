<template>
  <div class="container">
    <search-form-input
      v-model="keyword"
      class="mb-8"
      @input="handleKeywordChange"
    />
    <images-list
      v-if="images.length > 0"
      :images="images"
      :has-more-images="hasMoreImages"
      @load-more="handleLoadMoreImages"
    />
    <div v-else class="flex flex-col justify-items-center items-center">
      <label class="mb-10 text-lg leading-6 font-medium text-gray-700">
        There's no image. Please start searching with a new keyword.
      </label>
      <empty-image
        class="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto"
      />
    </div>
  </div>
</template>

<script>
import _debounce from 'lodash.debounce'
import EmptyImage from '@/assets/empty.svg?inline'

export default {
  name: 'Home',

  components: {
    EmptyImage,
  },

  data() {
    return {
      keyword: '',
      page: 1,
      perPage: 30,
      total: 0,
      totalPages: 4,
      images: [],
      isLoading: false,
    }
  },

  computed: {
    hasMoreImages() {
      return this.page < this.totalPages
    },
  },

  methods: {
    async handleLoadMoreImages() {
      this.page = this.page + 1
      await this.searchImages({
        keyword: this.keyword,
        page: this.page,
        overwrite: false,
      })
    },
    handleKeywordChange: _debounce(async function (keyword) {
      await this.searchImages({ keyword, page: this.page, overwrite: true })
    }, 500),
    async searchImages({ keyword, page, overwrite }) {
      this.isLoading = true
      try {
        const result = await this.$imageSearch({
          keyword,
          page,
          perPage: this.perPage,
        })
        if (overwrite) {
          this.images = result.results || []
        } else {
          this.images = [...this.images, ...(result.results || [])]
        }

        this.total = result.total || 0
        this.totalPages = result.total_pages || 0
      } catch (error) {
        // TODO: display error
        alert('Error getting data from Unsplash')
        console.log(error)
      }
      this.isLoading = false
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
}
</style>
