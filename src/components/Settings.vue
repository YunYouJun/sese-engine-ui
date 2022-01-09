<template>
  <div class="absolute top-5 right-5">
    <!-- <a class="icon-btn mx-2" title="GitHub" href="https://github.com/YunYouJun/sese-engine-ui" target="_blank">
      <i-ri-github-line />
    </a> -->

    <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales">
      <i-ri-translate class="transform" :class="isEn ? 'rotate-y-180' : ''" />
    </a>

    <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
      <i-ri-moon-line v-if="isDark" />
      <i-ri-sun-line v-else />
    </button>
  </div>
</template>

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
