<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'

const { t, availableLocales, locale } = useI18n()

const isEn = computed(() => locale.value === 'en')

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <div class="absolute z-1 top-5 right-5 inline-flex justify-center items-center">
    <button class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales">
      <div i-ri-translate class="transform" :class="isEn ? 'rotate-y-180' : ''" />
    </button>

    <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
      <div v-if="isDark" i-ri-moon-line />
      <div v-else i-ri-sun-line />
    </button>
  </div>
</template>
