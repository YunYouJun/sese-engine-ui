<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="fixed left-0 right-0 bottom-0 flex justify-end items-center" dark="bg-dark-700" bg="gray-100" w="full" h="12">
    <div class="inline-flex justify-center items-center" m="x-2">
      <router-link class="icon-btn mx-2" to="/about" :title="t('button.about')">
        <i-ri-information-line />
      </router-link>

      <!-- TODO!咕咕咕！ -->
      <!-- <router-link class="icon-btn mx-2" title="设置" to="/settings">
        <i-ri-settings-2-line />
      </router-link> -->
    </div>
  </div>
</template>
