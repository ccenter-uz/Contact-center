import { FC } from 'react'
import './style.scss'
import { IChatBody } from '../../type'
import { Spin } from 'antd'

const ChatBody: FC<IChatBody> = ({ messages, styles, loading }) => {
  return (
    <div className='chat-body' style={styles?.wrapper}>
      {messages.map(({ user, bot }, index) => (
        <div key={index} className='chat-item' style={styles?.chatItem}>
          {user ? (
            <div className='user-message' style={styles?.userMessage}>
              {user}
            </div>
          ) : null}
          <div className='bot-message' style={styles?.botMessage}>
            {bot}
          </div>
        </div>
      ))}
      <div className='chatbody-loading d-flex align-center justify-center m-y-1' aria-label='chatbody-loading'>
        {loading && <Spin />}
      </div>
    </div>
  )
}

export default ChatBody
