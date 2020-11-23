<template>
  <div class="mt-1 flex rounded-xl shadow-sm">
    <span
      class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-500 text-xl"
    >
      <search-icon />
    </span>
    <input
      v-model="keyword"
      type="text"
      class="bg-gray-100 p-4 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 border"
      placeholder="Search free high-resolution photos"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
import SearchIcon from '@/assets/icons/search.svg?inline'

export default {
  name: 'SearchFormInput',

  components: {
    SearchIcon,
  },

  props: {
    value: {
      type: String,
      require: true,
      default: '',
    },
  },

  data() {
    return {
      keyword: '',
    }
  },

  watch: {
    value: {
      handler(newValue) {
        this.keyword = newValue
      },
      immediate: true,
    },
  },
}
</script>
