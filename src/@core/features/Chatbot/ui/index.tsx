import ChatBot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../model/config'
import ActionProvider from '../model/ActionProvider'
import MessageParser from '../model/MessageParser'
import './style.scss'
import { FC } from 'react'
import { useLang } from '@/@core/apps/hooks/useLang'
import { X } from 'react-feather'

type Iprops = {
  open: boolean
  close: () => void
}

const Chatbot: FC<Iprops> = ({ open, close }) => {
  const { t } = useLang()

  return (
    <div className={open ? 'chatbot fade-in' : 'chatbot-close'}>
      <button aria-label='close-chatbot' onClick={close} className='close-bot d-flex align-center justify-center'>
        <X />
      </button>
      <ChatBot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        headerText={t('chatbot-headerText')}
      />
    </div>
  )
}

export default Chatbot
