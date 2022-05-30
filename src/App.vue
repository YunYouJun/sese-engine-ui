<script setup lang="ts">
import { isDark } from '~/composables'

const { t } = useI18n()

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: computed(() => t('sese.title')),
  meta: [
    { name: 'description', content: 'SeSe Engine 是一个轻量级的搜索引擎，可以轻松部署在自己的个人服务器上。' },
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
