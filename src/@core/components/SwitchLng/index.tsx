'use client'
import React, { FC } from 'react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/navigation'
import { Select } from 'antd'
import './style.scss'

const options = [
  {
    label: 'Eng',
    value: 'en'
  },
  {
    label: 'Рус',
    value: 'ru'
  },
  {
    label: 'Uzb',
    value: 'uz'
  }
]

const LanguageSwitcher: FC = () => {
  const locale = useLocale()
  const router = useRouter()
  const pathName = usePathname()

  const handleChange = (e: string) => {
    router.push(pathName, { locale: e })
  }

  return (
    <div className='language_wrapper'>
      <Select
        suffixIcon={<img src='/assets/languageSvg.svg' alt='language' />}
        className='lang_switcher d-flex align-center'
        value={locale}
        onChange={handleChange}
        options={options}
      />
    </div>
  )
}

export default LanguageSwitcher
