<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div>
            <div class="mt-3 text-center sm:mt-0 sm:text-left">
              <h3
                id="modal-headline"
                class="text-lg leading-6 font-medium text-gray-900"
              >
                Add to Favorite List
              </h3>
            </div>
            <div class="flex mt-2 flex-col">
              <button
                v-for="(listValue, listKey) in favoriteLists"
                :key="listKey"
                class="border mb-4 rounded py-4 px-2 text-left bg-green-600 text-white"
                @click="handleListClick(listKey)"
              >
                <div class="flex space-between">
                  <h4>{{ listKey }}</h4>
                  <div class="flex">
                    <check-bold-icon
                      v-if="imageBelongsToList(listKey)"
                      class="text-3xl"
                    />
                    <plus-icon v-else class="text-3xl" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            @click="$emit('cancel')"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import CheckBoldIcon from '@/assets/icons/check-bold.svg?inline'
import PlusIcon from '@/assets/icons/plus.svg?inline'
import _get from 'lodash.get'

export default {
  name: 'ImageFavoriteModal',

  components: {
    CheckBoldIcon,
    PlusIcon,
  },

  props: {
    image: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  data() {
    return {}
  },

  computed: {
    favoriteLists() {
      return this.$store.state.lists
    },
  },

  methods: {
    ...mapMutations({
      addImage: 'addImage',
    }),
    imageBelongsToList(listKey) {
      const imageId = _get(this.image, 'id', '') || ''
      return !!_get(this.favoriteLists, `${listKey}.${imageId}`)
    },
    handleListClick(listKey) {
      this.addImage({
        listKey,
        image: this.image,
      })
    },
  },
}
</script>

<style scoped>
.space-between {
  justify-content: space-between;
}
</style>
