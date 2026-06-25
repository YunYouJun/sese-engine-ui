import type { SearchResult } from '~/api/types'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'
import ResultItem from '~/components/ResultItem.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: { template: '<div />' } },
    { path: '/search', component: { template: '<div />' } },
  ],
})

function createResult(overrides: Partial<SearchResult> = {}): SearchResult {
  return {
    分数: 1,
    网址: 'https://example.com/page',
    信息: {
      标题: 'Example Title',
      描述: 'a cat description',
      文本: 'full text',
      文本长度: 9,
    },
    原因: { tf: 0.123 },
    相同域名个数: 3,
    ...overrides,
  }
}

function mountItem(props: { keywords: string[], result: SearchResult }) {
  return mount(ResultItem, {
    props,
    global: { plugins: [router] },
  })
}

describe('resultItem', () => {
  beforeEach(async () => {
    await router.push('/search?q=cat')
    await router.isReady()
  })

  it('renders the title and url', () => {
    const wrapper = mountItem({ keywords: ['cat'], result: createResult() })
    expect(wrapper.text()).toContain('Example Title')
    expect(wrapper.html()).toContain('https://example.com/page')
  })

  it('derives the domain from the url', () => {
    const wrapper = mountItem({ keywords: [], result: createResult() })
    expect(wrapper.text()).toContain('example.com')
  })

  it('highlights keywords inside the description', () => {
    const wrapper = mountItem({ keywords: ['cat'], result: createResult() })
    const em = wrapper.find('em.highlight')
    expect(em.exists()).toBe(true)
    expect(em.text()).toBe('cat')
  })

  it('escapes HTML in the description to prevent XSS injection', () => {
    const result = createResult({
      信息: {
        标题: 'XSS',
        描述: '<img src=x onerror=alert(1)> cat',
        文本: '',
        文本长度: 0,
      },
    })
    const wrapper = mountItem({ keywords: ['cat'], result })
    // the malicious markup must not become a real element
    expect(wrapper.find('img').exists()).toBe(false)
    expect(wrapper.find('em.highlight').exists()).toBe(true)
  })

  it('shows a fallback when the result has no info', () => {
    const result = createResult({ 信息: undefined as unknown as SearchResult['信息'] })
    const wrapper = mountItem({ keywords: [], result })
    expect(wrapper.text()).toContain('我们的探测器对这个奇怪的网站没有效果')
  })
})
