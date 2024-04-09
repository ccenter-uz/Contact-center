import LoadingUI from '@/@core/components/LoadingUI'
import Banner from '../modal/Banner'
import Cards from '../modal/Cards'
import { DataType } from '../ui/TabContent'

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
        return node.map((item: DataType) => <Banner key={1} data={item} />)
      case 'card':
        return <Cards data={node} />
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
