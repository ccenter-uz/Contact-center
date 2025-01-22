import LoadingUI from '@/@core/shared/ui/LoadingUI'
import { DataType } from '../ui/TabContent'
import { Suspense } from 'react'
import Banner from '../model/Banner'
import Cards from '../model/Cards'

// getLanguage
export const getLng = (locale: string, item: any, lng: string) => {
  switch (locale) {
    case 'en':
      return item[`${lng}_en`]
    case 'ru':
      return item[`${lng}_ru`]
    case 'uz':
      return lng !== 'title' ? item[`${lng}_uz`] : item[`${lng}`]
    default:
      return item[`${lng}_ru`]
  }
}

// renderNode
export const renderNode = (node: DataType[], loading: boolean) => {
  if (Array.isArray(node) && node.length > 0) {
    switch (node[0]?.type) {
      case 'banner':
        return node.map((item: DataType) => (
          <Suspense key={1} fallback={<LoadingUI />}>
            <Banner data={item} />{' '}
          </Suspense>
        ))
      case 'card':
        return (
          <Suspense key={1} fallback={<LoadingUI />}>
            <Cards data={node} />
          </Suspense>
        )
    }
  } else if (loading) {
    return (
      <div
        className='d-flex justify-center align-center'
        style={{ height: '350px' }}
        aria-label='loading-section'
        aria-hidden={loading}
      >
        <LoadingUI />
      </div>
    )
  }
}
