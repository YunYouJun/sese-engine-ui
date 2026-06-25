const REGEXP_SPECIAL_CHARS_RE = /[.*+?^${}()|[\]\\]/g
const LT_RE = /</g
const GT_RE = />/g

/**
 * 转义正则表达式中的特殊字符，
 * 避免关键词包含 `.* + ? ( )` 等字符时构造 `RegExp` 抛出异常。
 */
export function escapeRegExp(text: string): string {
  return text.replace(REGEXP_SPECIAL_CHARS_RE, '\\$&')
}

/**
 * 高亮文本中的关键词。
 *
 * 先对内容做 HTML 转义以防止 XSS，再用 `<em class="highlight">` 包裹命中的关键词。
 *
 * @param content - 原始文本
 * @param keywords - 需要高亮的关键词列表
 * @returns 处理后的 HTML 字符串
 */
export function highlightText(content: string, keywords: string[]): string {
  // 转义尖括号以防止 XSS
  let result = content.replace(LT_RE, '&lt;').replace(GT_RE, '&gt;')

  keywords.forEach((keyword) => {
    // 跳过空关键词，否则空正则会匹配每一个位置
    if (!keyword)
      return

    const re = new RegExp(escapeRegExp(keyword), 'gi')
    result = result.replace(re, (val: string) => `<em class="highlight">${val}</em>`)
  })

  return result
}
