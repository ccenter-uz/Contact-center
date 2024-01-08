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
    <div className='language_wrapper d-flex align-center '>
      <img width={20} height={20} src='/assets/languageSvg.svg' alt='language' />
      <Select
        suffixIcon
        className='lang_switcher d-flex align-center'
        value={locale}
        onChange={handleChange}
        options={options}
      />
    </div>
  )
}

export default LanguageSwitcher
