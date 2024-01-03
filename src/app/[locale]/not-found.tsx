import React from 'react'
import { useTranslations } from 'next-intl'
import { Settings } from 'react-feather'

const NotFoundPage = () => {
  const t = useTranslations()

  return (
    <div className='not-found d-flex align-center justify-center flex-column gap-3'>
      <h1>{t('NOT_FOUND')}</h1>
      <Settings size={50} />
    </div>
  )
}

export default NotFoundPage
