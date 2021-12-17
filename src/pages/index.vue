<script setup lang="ts">
import { useSearchStore } from '~/stores/search'

const search = useSearchStore()
const keyword = ref(search.savedKeyword)

const router = useRouter()
const go = () => {
  if (keyword.value)
    router.push(`/search?q=${encodeURIComponent(keyword.value)}`)
}

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col justify-center items-center" h="full">
    <Settings />

    <p class="text-6xl">
      <i-ri-cloud-line class="inline-block" />
    </p>

    <div
      class="wrapper relative flex justify-center items-center"
      w="140"
      p="2"
      m="y-4"
      border="~ rounded gray-200 dark:gray-700"
      rounded="full"
    >
      <i-ri-search-line class="inline-flex" />
      <input
        id="input"
        v-model="keyword"
        w="122"
        m="x-3"
        :aria-label="t('placeholder.search')"
        type="text"
        autocomplete="false"
        bg="transparent"
        outline="none active:none"
        @keydown.enter="go"
      >
    </div>

    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!keyword"
        @click="go"
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
