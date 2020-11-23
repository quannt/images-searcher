<template>
  <div class="mt-1 flex rounded-xl shadow-sm">
    <span
      class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-500 text-xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        focusable="false"
        role="img"
        class="iconify iconify--mdi-light"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
        style="transform: rotate(360deg)"
      >
        <path
          d="M9.5 4a6.5 6.5 0 0 1 4.932 10.734l5.644 5.644l-.707.707l-5.645-5.645A6.5 6.5 0 1 1 9.5 4zm0 1a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11z"
          fill="currentColor"
        ></path>
      </svg>
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
export default {
  name: 'SearchFormInput',

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
