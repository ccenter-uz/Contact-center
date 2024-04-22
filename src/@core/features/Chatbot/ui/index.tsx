import './style.scss'
import { FC, memo, useRef, useState, useEffect } from 'react'
import { Input, Spin } from 'antd'
import { Send, X } from 'react-feather'
import { useLang } from '@/@core/apps/hooks/useLang'
import { useDisclosure } from '@/@core/apps/hooks/useDisclosure'
import ChatBody from './ChatBody'
import socketIOClient from 'socket.io-client'
import { IChatBody, IChatbot } from '../type'
import UserFormChat from './UserFormChat'

const messagesBlock: IChatBody['messages'] = [
  {
    id: 1,
    bot: 'Hello I am chatbot for ccenter.uz, how can I help you?'
  }
]

const Chatbot: FC<IChatbot> = ({ open, close, headerTitle }) => {
  const socketRef = useRef()
  const [messages, setMessages] = useState(
    sessionStorage.getItem('message') ? JSON.parse(sessionStorage.getItem('message') || '') : messagesBlock
  )
  const [userValue, setUserValue] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const { t } = useLang()
  const { isOpen: formData, toggle: finishFormData } = useDisclosure()

  // useEffect(() => {
  //   // Initialize Socket.IO connection
  //   socketRef.current = socketIOClient('http://your-backend-url')

  //   // Event listener for receiving messages from the server
  //   socketRef.current.on('message', message => {
  //     setMessages([...messages, { id: messages.length + 1, bot: message }])
  //     setLoading(false)
  //   })

  //   // Cleanup function
  //   return () => {
  //     socketRef.current.disconnect()
  //   }
  // }, [])

  const handleSendMessage = () => {
    setMessages([...messages, { id: messages.length + 1, user: userValue }])
    setLoading(true)
    // socketRef.current.emit('message', userValue)
    setUserValue('')
  }

  const handleClose = async () => {
    sessionStorage.setItem('message', JSON.stringify(messages))
    close()
  }

  return (
    <div className={open ? 'chatbot fade-in' : 'chatbot-close'}>
      <button aria-label='close-chatbot' onClick={handleClose} className='close-bot d-flex align-center justify-center'>
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
        <div id='chat-messages'>
          {!formData ? (
            <UserFormChat finishFormData={finishFormData} />
          ) : (
            <ChatBody messages={messages} loading={loading} />
          )}
        </div>
        <div aria-label='chat-footer' id='chatbot-footer'>
          {formData && (
            <Input
              type='text'
              autoComplete='off'
              value={userValue}
              onChange={e => setUserValue(e.target.value)}
              placeholder={t('enter-message')}
              suffix={<Send color={'var(--btnColor)'} className='send' onClick={handleSendMessage} />}
              bordered={false}
              style={{ height: '100%' }}
              onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
            />
          )}
        </div>
      </section>
    </div>
  )
}

export default memo(Chatbot)
