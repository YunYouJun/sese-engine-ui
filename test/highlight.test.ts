import { describe, expect, it } from 'vitest'
import { escapeRegExp, highlightText } from '~/utils/highlight'

describe('escapeRegExp', () => {
  it('escapes regex special characters', () => {
    expect(escapeRegExp('c++')).toBe('c\\+\\+')
    expect(escapeRegExp('a.b*c')).toBe('a\\.b\\*c')
    expect(escapeRegExp('(test)')).toBe('\\(test\\)')
  })

  it('leaves normal and CJK text unchanged', () => {
    expect(escapeRegExp('hello')).toBe('hello')
    expect(escapeRegExp('色色')).toBe('色色')
  })
})

describe('highlightText', () => {
  it('wraps a matched keyword with an <em>', () => {
    expect(highlightText('hello world', ['world']))
      .toBe('hello <em class="highlight">world</em>')
  })

  it('matches keywords case-insensitively while preserving original case', () => {
    expect(highlightText('Hello World', ['hello']))
      .toBe('<em class="highlight">Hello</em> World')
  })

  it('highlights multiple keywords', () => {
    const result = highlightText('cat and dog', ['cat', 'dog'])
    expect(result).toContain('<em class="highlight">cat</em>')
    expect(result).toContain('<em class="highlight">dog</em>')
  })

  it('highlights CJK keywords', () => {
    expect(highlightText('色色搜索', ['色色']))
      .toBe('<em class="highlight">色色</em>搜索')
  })

  it('escapes angle brackets to prevent XSS', () => {
    const result = highlightText('<script>alert(1)</script>', [])
    expect(result).toBe('&lt;script&gt;alert(1)&lt;/script&gt;')
    expect(result).not.toContain('<script>')
  })

  it('does not throw on keywords containing regex special characters', () => {
    expect(() => highlightText('value c++ here', ['c++'])).not.toThrow()
    expect(highlightText('value c++ here', ['c++']))
      .toContain('<em class="highlight">c++</em>')
  })

  it('ignores empty keywords instead of matching every position', () => {
    expect(highlightText('abc', [''])).toBe('abc')
  })

  it('returns the content unchanged when nothing matches', () => {
    expect(highlightText('nothing here', ['xyz'])).toBe('nothing here')
  })
})
