export interface SearchResult {
  分数: any
  网址: string
  信息: {
    标题: string
    描述: string
    文本: string
    文本长度: number
  }
}

export interface SearchData {
  分词: string[]
  结果: SearchResult[]
  总数: number
}
