import { exampleData } from './example'
import { apiFetch } from './fetch'

interface SearchParams {
  q: string
  start: number
  end: number
  // slice: string
}

export async function search(params: Partial<SearchParams>) {
  // const data = await apiFetch('/search', {
  //   params: {
  //     q: params.q || '',
  //     slice: `${params.start || 0}:${params.end || 5}`,
  //   },
  // })
  console.log(params)
  return exampleData
}
