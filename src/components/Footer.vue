<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <nav class="text-xl mt-6">
    <router-link class="icon-btn mx-2" to="/about" :title="t('button.about')">
      <i-carbon-dicom-overlay />
    </router-link>

    <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/YunYouJun/yun-search-ui" target="_blank" title="GitHub">
      <i-ri-github-line />
    </a>
  </nav>
</template>
