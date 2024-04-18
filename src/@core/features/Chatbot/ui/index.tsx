import './style.scss'
import { FC } from 'react'
import { useLang } from '@/@core/apps/hooks/useLang'
import { Send, X } from 'react-feather'
import { IChatbot } from '../type'
import { Input } from 'antd'
import UserFormChat from './UserFormChat'
import { useDisclosure } from '@/@core/apps/hooks/useDisclosure'

const Chatbot: FC<IChatbot> = ({ open, close, headerTitle }) => {
  const { t } = useLang()
  const { isOpen: formData, toggle: finishFormData } = useDisclosure()

  return (
    <div className={open ? 'chatbot fade-in' : 'chatbot-close'}>
      <button aria-label='close-chatbot' onClick={close} className='close-bot d-flex align-center justify-center'>
        <X />
      </button>
      <section aria-label='chatbot-section' className='chatbot-section d-flex flex-column justify-between'>
        <div id='chatbot-header'>
          {headerTitle}
          <button
            aria-label='close-chatbot'
            onClick={close}
            className='close-btn-inside-header d-flex align-center justify-center'
          >
            <X />
          </button>
        </div>
        <div id='chat-messages'>{!formData && <UserFormChat finishFormData={finishFormData} />}</div>
        <div aria-label='chat-footer' id='chatbot-footer'>
          {formData && (
            <Input
              type='text'
              placeholder={t('enter-message')}
              suffix={<Send color={'var(--btnColor)'} className='send' />}
              bordered={false}
              style={{ height: '100%' }}
            />
          )}
        </div>
      </section>
    </div>
  )
}

export default Chatbot
