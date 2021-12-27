<script setup lang="ts">
import { search } from '~/api'
import { useSearchStore } from '~/stores/search'

const searchStore = useSearchStore()
const keyword = ref(searchStore.savedKeyword)

const searchData = ref()

const route = useRoute()
const router = useRouter()

onBeforeMount(async() => {
  const data = await search({
    q: route.query.q?.toString(),
  })
  searchData.value = data
})

// const { t } = useI18n()

const logoUrl = 'https://yyj.moe/logo.png'
</script>

<template>
  <div p="l-4" class="flex justify-start items-center">
    <a class="cursor-pointer" @click="()=>{router.push('/')}">
      <img class="w-10 inline-flex" :src="logoUrl" title="Logo">
    </a>
    <InputBox v-model="keyword" class="inline-flex ml-6 shadow transition hover:shadow-md <sm:ml-4" :enter="()=>{searchStore.go(keyword)}" />
  </div>
  <div v-if="searchData" m="l-24 <sm:l-0" p="2" class="max-w-2xl">
    <div v-for="(item, i) in searchData['结果']" :key="i" text="left" m="b-4">
      <cite class="not-italic" text="xs">{{ item['网址'] }}</cite>
      <a :href="item['网址']" target="_blank" class="text-lg text-blue-900 hover:underline">
        <h3 class="top-0">
          {{ item['信息']['标题'] }}
        </h3>
      </a>
      <p text="sm">
        {{ item['信息']['描述'] || item['信息']['文本'] }}
      </p>
    </div>
  </div>
</template>
