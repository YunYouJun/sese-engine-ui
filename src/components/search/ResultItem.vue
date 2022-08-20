<script lang="ts" setup>
import type { SearchResult } from '~/api/types'

const props = defineProps<{
  keywords: string[]
  result: SearchResult
}>()

const route = useRoute()
const query = computed(() => {
  const q = route.query.q?.toString()
  if (q?.startsWith('site:'))
    return q.split(' ').slice(1).join(' ')
  else
    return q
})

/**
 * 高亮文本
 */
const highlightedText = (content: string, keywords: string[]) => {
  // to solve xss
  let result = content.replace(/</g, '&lt;').replace(/>/g, '&gt;')
  keywords.forEach((item) => {
    const re = new RegExp(item, 'gi')
    result = result.replace(re, (val: string) => {
      return `<em class="highlight">${val}</em>`
    })
  })
  return result
}

const domain = computed(() => {
  const url = new URL(props.result['网址'])
  return url.hostname
})

const siteString = computed(() => `site:${domain.value}`)
const domainUrl = computed(() =>
  `/search?q=${siteString.value} ${query.value?.trim()}`,
)
</script>

<template>
  <div class="result-item relative overflow-visible" flex="~ col" text="left" m="b-4">
    <span class="flex justify-between items-center">
      <a :href="result['网址']" target="_blank" class="truncate">
        <cite class="not-italic" text="xs">{{ result['网址'] }}</cite>
      </a>
      <a :href="domainUrl" class="cursor-pointer related-info sese-link transition truncate">
        <cite text="xs">在 {{ domain }}  中找到 {{ result['相同域名个数'] }} 个相关页面</cite>
      </a>
    </span>
    <template v-if="result['信息']">
      <a
        :href="result['网址']" target="_blank"
        class="text-lg text-blue-900 hover:underline dark:text-blue-500"
      >
        <h3 class="top-0 truncate">
          {{ result['信息']['标题'] }}
        </h3>
      </a>
      <p text="sm" v-html="highlightedText(result['信息']['描述'] || result['信息']['文本'], keywords)" />
    </template>
    <div v-else>
      <div class="inline-flex justify-start items-center border" p="1" m="1">
        <div i-ri-alert-line />
        <span m="l-1">我们的探测器对这个奇怪的网站没有效果！</span>
      </div>
    </div>

    <Transition>
      <div
        class="reason-container absolute top-0 left-180 min-h-full justify-center hidden transition"
        w="64"
        opacity="0"
        flex="~ col"
      >
        <blockquote class="search-reason" p="l-2" text="xs">
          <span v-for="value, key in result['原因']" :key="key" class="block">
            {{ key }}：{{ value.toFixed(3) }}
          </span>
        </blockquote>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss">
.result-item {
  .related-info {
    opacity: 0;
  }

  &:hover {
    .related-info {
      opacity: 1;
    }
    .reason-container {
      opacity: 1;
    }
  }
}

.search-reason {
  color: var(--se-c-text-light);
  border-left: 4px solid var(--se-c-text-light);
}
</style>
