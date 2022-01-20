<script setup lang="ts">
import { useEnter } from '~/composables/search'
import { useSearchStore } from '~/stores/search'

import { bannerUrl } from '~/config'

const { enter } = useEnter()
const search = useSearchStore()
const keyword = ref(search.savedKeyword)

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col justify-center items-center" h="full">
    <img class="w-70 filter drop-shadow" m="-b-4" :src="bannerUrl" alt="Rimo And XiaoYun">

    <InputBox v-model="keyword" :enter="()=>{enter(keyword)}" />

    <div m="b-18">
      <button
        class="sese-btn m-3 text-sm btn "
        bg="gradient-to-r"
        @click="enter(keyword)"
      >
        {{ t('button.search') }}
      </button>
    </div>
  </div>
  <div class="fixed left-0 right-0 bottom-0 flex justify-end items-center" dark="bg-dark-700" bg="gray-100" w="full" h="12">
    <div class="inline-flex justify-center items-center" m="x-2">
      <router-link class="icon-btn mx-2" to="/about" :title="t('button.about')">
        <i-ri-information-line />
      </router-link>

      <router-link class="icon-btn mx-2" title="设置" to="/settings">
        <i-ri-settings-2-line />
      </router-link>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
