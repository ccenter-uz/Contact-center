export type IUserFormChat = {
  finishFormData: () => void
}

export type IChatbot = {
  open: boolean
  close: () => void
  headerTitle: string
}
