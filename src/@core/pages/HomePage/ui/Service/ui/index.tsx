import { FC } from 'react'
import './style.scss'
import { TabButtons } from './TabButtons'
import TabContent from './TabContent'

export const Services: FC = () => {
  return (
    <section id='services' className='services w-100'>
      <TabButtons />
      <TabContent />
    </section>
  )
}
