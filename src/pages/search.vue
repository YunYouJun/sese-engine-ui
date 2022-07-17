<script setup lang="ts">
import { search } from '~/api'
import type { SearchData } from '~/api/types'
import { useEnter } from '~/composables/search'
import { useSearchStore } from '~/stores/search'

import { bannerUrl } from '~/config'

const { t } = useI18n()
const { enter } = useEnter()
const route = useRoute()
const router = useRouter()

const searchStore = useSearchStore()
const query = computed(() => route.query.q?.toString() || '')

const keyword = ref(query.value)
watch(() => query.value, () => {
  searchStore.setNewKeyword(query.value)
  keyword.value = query.value
})

const slice = ref(route.query.slice?.toString())
const pageNumber = ref(10)

const searchData = ref<SearchData>()
const keywords = computed(() => (searchData.value && searchData.value['分词']) || [keyword.value])

useHead({
  title: computed(() => `${searchStore.savedKeyword} - ${t('sese.title')}`),
})

const searchByParams = async () => {
  searchStore.isLoading = true
  const data = await search({
    q: keyword.value,
    slice: slice.value,
  })
  searchStore.isLoading = false
  searchData.value = data
}

onBeforeMount(async () => {
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
</script>

<template>
  <div p="2" h="screen">
    <Transition>
      <Loading v-if="searchStore.isLoading" />
    </Transition>
    <div p="l-2 lt-sm:l-0" class="relative flex justify-start items-center lt-sm:mt-6">
      <a class="cursor-pointer inline-flex justify-center lt-sm:absolute -top-5 left-5" m="r-3 b-1" @click="() => { router.push('/') }">
        <img class="w-16 filter drop-shadow" :src="bannerUrl" alt="Rimo And XiaoYun">
      </a>
      <InputBox v-model="keyword" class="inline-flex" :enter="() => { searchKeyword() }" />
      <button m="l-2" p="2" class="icon-btn flex justify-center items-center border rounded rounded-full !outline-none" @click="searchKeyword()">
        <div i-ri-heart-line />
      </button>
    </div>
    <div v-if="searchData" m="l-24 lt-sm:l-0" p="2" class="max-w-2xl">
      <div text="left sm gray-500" m="b-2">
        找到约 {{ searchData['总数'] }} 个结果
      </div>
      <template v-if="searchData['总数']">
        <ResultItem v-for="(item, i) in searchData['结果']" :key="i" :keywords="keywords" se :result="item" />
      </template>

      <div v-else text="left" m="t-8">
        找不到和您查询的「<strong text="red-500">{{ keyword }}</strong>」相符的内容或信息！

        <p class="cursor-pointer hover:underline" text="sm" m="t-4" @click="router.go(-1)">
          返回上一页
        </p>

        <p m="t-8" text="left">
          建议：
          <ul p="4">
            <li class="list-circle">
              <a class="hover:underline" :href="`https://www.google.com/search?q=${keyword}`" target="_blank" :title="keyword">
                使用 Google 搜索
              </a>
            </li>
          </ul>

          <img src="/rimo-touch-fish.png" alt="摸鱼">
        </p>
      </div>

      <div v-if="displayedPages" m="t-6 b-4" class="pagination-container flex justify-center items-center">
        <span v-if="curPage > 1" class="page-link" text="sm" p="r-1" m="r-1" @click="goToPage(curPage - 1)">
          <div i-ri-arrow-left-line />
        </span>
        <span v-for="i in displayedPages" :key="i" p="1" m="1" class="pagination-page" :class="curPage === i ? 'text-black dark:text-white' : 'text-blue-600 dark:text-blue-500 cursor-pointer hover:underline'" text="sm" @click="curPage === i ? null : goToPage(i)">
          {{ i }}
        </span>
        <span v-if="curPage < displayedPages" class="page-link" text="sm" p="l-1" m="l-1" @click="goToPage(curPage + 1)">
          <div i-ri-arrow-right-line />
        </span>
      </div>
    </div>
    <div v-else-if="!searchStore.isLoading" m="t-10">
      服务器不……不行了……
    </div>
  </div>
</template>
