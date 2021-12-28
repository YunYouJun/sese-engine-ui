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
  结果: SearchData[]
  总数: number
}
