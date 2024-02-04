import { FC } from 'react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/navigation'

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

  const handleChange = (e: any) => {
    router.push(pathName, { locale: e.target.value })
  }

  return (
    <div className='language_wrapper d-flex align-center  justify-end'>
      <img width={20} height={20} src='/assets/languageSvg.svg' alt='language' />
      <select
        style={{ border: 'none', outline: 'rgb(0, 149, 255)', background: 'transparent', cursor: 'pointer' }}
        aria-label='select-language'
        className='lang_switcher d-flex align-center'
        value={locale}
        onChange={handleChange}
      >
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default LanguageSwitcher
