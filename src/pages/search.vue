<script setup lang="ts">
import { search } from '~/api'
import { useSearchStore } from '~/stores/search'

const route = useRoute()

const searchStore = useSearchStore()
searchStore.setNewKeyword(route.query.q?.toString() || '')

const keyword = ref(searchStore.savedKeyword)
const slice = ref(route.query.slice?.toString())
const pageNumber = ref(7)

const searchData = ref()

const router = useRouter()

const searchByParams = async() => {
  searchStore.isLoading = true
  const data = await search({
    q: keyword.value,
    slice: slice.value,
  })
  searchStore.isLoading = false
  searchData.value = data
}

onBeforeMount(async() => {
  searchByParams()
})

const curPage = ref(slice.value ? (parseInt(slice.value?.split(':')[0]) / pageNumber.value) + 1 : 1)

const goToPage = (page: number) => {
  curPage.value = page
  slice.value = `${(curPage.value - 1) * pageNumber.value}:${curPage.value * pageNumber.value}`

  router.push({
    path: '/search',
    query: {
      q: keyword.value,
      slice: slice.value,
    },
  })
  searchByParams()
}

watch(() => searchStore.savedKeyword, () => {
  searchByParams()
})
</script>

<template>
  <Loading v-show="searchStore.isLoading" />
  <div p="2">
    <div p="l-4" class="flex justify-start items-center <sm:mt-8">
      <a class="cursor-pointer inline-flex justify-center" @click="()=>{router.push('/')}">
        <i-ri-font-color text="2xl" />
      <!-- <img class="w-10 inline-flex" :src="logoUrl" title="Logo"> -->
      </a>
      <InputBox v-model="keyword" class="inline-flex ml-6 shadow transition hover:shadow-md <sm:ml-4" :enter="()=>{searchStore.go(keyword)}" />
    </div>
    <div v-if="searchData" m="l-24 <sm:l-0" p="2" class="max-w-2xl">
      <div text="left sm gray-500" m="b-2">
        找到约 {{ searchData['总数'] }} 个结果
      </div>
      <div v-for="(item, i) in searchData['结果']" :key="i" text="left" m="b-4">
        <a :href="item['网址']" target="_blank" class="block truncate"><cite class="not-italic" text="xs">{{ item['网址'] }}</cite></a>
        <template v-if="item['信息']">
          <a :href="item['网址']" target="_blank" class="text-lg text-blue-900 hover:underline dark:text-blue-500">
            <h3 class="top-0 truncate">
              {{ item['信息']['标题'] }}
            </h3>
          </a>
          <p text="sm">
            {{ item['信息']['描述'] || item['信息']['文本'] }}
          </p>
        </template>
        <div v-else>
          <div class="inline-flex justify-start items-center border" p="1" m="1">
            <i-ri-alert-line />
            <span m="l-1">我们的探测器对这个奇怪的网站没有效果！</span>
          </div>
        </div>
      </div>

      <div m="t-6" class="pagination-container">
        <span v-for="i in 10" :key="i" p="1" m="1" class="pagination-page" :class="curPage === i ? 'text-black dark:text-white' : 'text-blue-800 dark:text-blue-500 cursor-pointer hover:underline'" text="sm" @click="goToPage(i)">
          {{ i }}
        </span>
      </div>
    </div>
  </div>
</template>
