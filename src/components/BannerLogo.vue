<script lang="ts" setup>
import { isDark } from '~/composables'
import { bannerUrl } from '~/config'
</script>

<template>
  <router-link to="/" title="Sese Engine">
    <img class="w-16" :style="isDark ? 'filter:invert(100%)' : ''" :src="bannerUrl" alt="Rimo And XiaoYun">
  </router-link>
</template>
