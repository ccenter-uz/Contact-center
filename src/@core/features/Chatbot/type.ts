import { ReactNode } from 'react'

export type IUserFormChat = {
  finishFormData: () => void
}

export type IChatbot = {
  open: boolean
  close: () => void
  headerTitle: string
}

export type IChatBody = {
  loading?: ReactNode
  messages: {
    id: number | string
    user?: string
    bot?: any | ReactNode
  }[]
  styles?: {
    wrapper?: React.CSSProperties
    chatItem?: React.CSSProperties
    userMessage?: React.CSSProperties
    botMessage?: React.CSSProperties
  }
}
