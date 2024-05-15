import { Link } from '@/navigation'
import './style.scss'
import { useSearchParams } from 'next/navigation'

type Props = {
  title: string
  id: string
}

const TabButtonItem = (props: Props) => {
  const { title, id } = props
  const searchParams = useSearchParams()

  return (
    <main id='tab-button-item'>
      <Link
        href={`?service=${id}`}
        scroll={false}
        onClick={() => sessionStorage.setItem('serviceType', JSON.stringify(title))}
      >
        <button className={`${searchParams.get('service') === id ? 'active-tab' : ''}`}>{title}</button>
      </Link>
    </main>
  )
}

export default TabButtonItem
