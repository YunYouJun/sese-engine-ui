<script setup lang="ts">
import { useSearchStore } from '~/stores/search'

const search = useSearchStore()
const keyword = ref(search.savedKeyword)

// const { t } = useI18n()
</script>

<template>
  <div p="l-16">
    <InputBox v-model="keyword" :enter="()=>{search.go(keyword)}" />
  </div>
</template>
