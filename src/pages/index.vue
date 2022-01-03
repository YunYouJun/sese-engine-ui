<script setup lang="ts">
import { useEnter } from '~/composables/search'
import { useSearchStore } from '~/stores/search'

const { enter } = useEnter()
const search = useSearchStore()
const keyword = ref(search.savedKeyword)

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col justify-center items-center" h="full">
    <p class="text-6xl">
      <i-ri-font-color class="inline-block" />
    </p>

    <InputBox v-model="keyword" :enter="()=>{enter(keyword)}" />

    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!keyword"
        @click="enter(keyword)"
      >
        {{ t('button.search') }}
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
