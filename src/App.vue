<script setup lang="ts">
import { isDark } from '~/composables'

const { t } = useI18n()

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: t('sese.title'),
  meta: [
    { name: 'description', content: 'Sese Engine' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
})
</script>

<template>
  <router-view />
</template>
