<script setup lang="ts">
import { bannerUrl } from '~/config'

const { t } = useI18n()
</script>

<template>
  <div class="fixed left-0 right-0 bottom-0 flex justify-center items-center" dark="bg-dark-700" bg="gray-100" w="full" h="12" text="xs">
    <div class="inline-flex justify-center items-center" m="x-2" opacity="75">
      <a href="http://sese.yyj.moe" target="_blank">
        <img width="28" height="16" class="filter grayscale" m="x-2" style="margin-top: -2px" :src="bannerUrl" alt="Rimo And XiaoYun">
      </a>
      ©️ 2022-{{ new Date().getFullYear() }}
      <a class="mx-1" href="https://github.com/RimoChan" target="_blank">RimoChan</a>
      <span>❤️</span>
      <a class="mx-1" href="https://github.com/YunYouJun" target="_blank">YunYouJun</a>
    </div>
    <div class="inline-flex justify-center items-center" m="x-2">
      <a class="icon-btn mr-2" title="GitHub" href="https://github.com/YunYouJun/sese-engine-ui" target="_blank">
        <div i-ri-github-line />
      </a>
      <a class="icon-btn mx-2" title="GitHub" href="https://github.com/RimoChan/sese-engine" target="_blank">
        <div i-ri-github-fill />
      </a>
      <router-link class="icon-btn mx-2" to="/about" :title="t('button.about')">
        <div i-ri-information-line />
      </router-link>

      <!-- TODO!咕咕咕！ -->
      <!-- <router-link class="icon-btn mx-2" title="设置" to="/settings">
        <div i-ri-settings-2-line />
      </router-link> -->
    </div>
  </div>
</template>
