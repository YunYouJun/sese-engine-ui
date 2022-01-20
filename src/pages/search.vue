<script setup lang="ts">
import { search } from '~/api'
import type { SearchData } from '~/api/types'
import { useEnter } from '~/composables/search'
import { useSearchStore } from '~/stores/search'

import { isDark } from '~/composables'
import { bannerUrl } from '~/config'

const { enter } = useEnter()
const route = useRoute()

const searchStore = useSearchStore()
searchStore.setNewKeyword(route.query.q?.toString() || '')

const keyword = ref(searchStore.savedKeyword)
const slice = ref(route.query.slice?.toString())
const pageNumber = ref(10)

const searchData = ref<SearchData>()

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

/**
 * 显示的页数
 */
const displayedPages = computed(() => {
  if (searchData.value && searchData.value['总数']) {
    const pages = Math.ceil(searchData.value['总数'] / pageNumber.value)
    return pages <= 10 ? pages : 10
  }
  else { return 0 }
})

const searchKeyword = () => {
  // reset
  curPage.value = 1
  slice.value = `0:${pageNumber.value}`
  enter(keyword.value)
}

/**
 * 高亮文本
 */
const highlightedText = (content: string) => {
  let result = content
  const keywords = (searchData.value && searchData.value['分词']) || [keyword.value]
  keywords.forEach((item) => {
    const re = new RegExp(item, 'gi')
    result = result.replace(re, (val: string) => {
      return `<em class="highlight">${val}</em>`
    })
  })
  return result
}
</script>

<template>
  <Loading v-show="searchStore.isLoading" />
  <div p="2">
    <div p="l-2 <sm:l-0" class="flex justify-start items-center <sm:mt-8">
      <a class="cursor-pointer inline-flex justify-center <sm:absolute top-4 left-4" @click="()=>{router.push('/')}">
        <img class="w-16" :src="bannerUrl" alt="Rimo And XiaoYun">
      </a>
      <InputBox v-model="keyword" class="inline-flex ml-4 shadow transition hover:shadow-md <sm:ml-4" :enter="()=>{searchKeyword()}" />
      <button m="l-2" p="2" class="icon-btn flex justify-center items-center border rounded rounded-full !outline-none" @click="searchKeyword()">
        <i-ri-heart-line />
      </button>
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
          <p text="sm" v-html="highlightedText(item['信息']['描述'] || item['信息']['文本'])" />
        </template>
        <div v-else>
          <div class="inline-flex justify-start items-center border" p="1" m="1">
            <i-ri-alert-line />
            <span m="l-1">我们的探测器对这个奇怪的网站没有效果！</span>
          </div>
        </div>
      </div>

      <div v-if="displayedPages" m="t-6 b-4" class="pagination-container flex justify-center items-center">
        <span v-if="curPage > 1" class="page-link" text="sm" p="r-1" m="r-1" @click="goToPage(curPage - 1)">
          <i-ri-arrow-left-line />
        </span>
        <span v-for="i in displayedPages" :key="i" p="1" m="1" class="pagination-page" :class="curPage === i ? 'text-black dark:text-white' : 'text-blue-600 dark:text-blue-500 cursor-pointer hover:underline'" text="sm" @click="curPage === i ? null : goToPage(i)">
          {{ i }}
        </span>
        <span v-if="curPage < displayedPages" class="page-link" text="sm" p="l-1" m="l-1" @click="goToPage(curPage + 1)">
          <i-ri-arrow-right-line />
        </span>
      </div>
    </div>
  </div>
</template>

<style>
.page-link {
  @apply inline-flex justify-center items-center cursor-pointer hover:underline text-blue-600;
}
</style>
