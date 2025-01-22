import { useLang } from '@/@core/apps/hooks/useLang'
import Link from 'next/link'
import './style.scss'

export const PDFButton = () => {
  const { t } = useLang()

  return (
    <Link href='/assets/pdf.pdf' target='_blank' className='current-price'>
      {t('current-price')}
    </Link>
  )
}
