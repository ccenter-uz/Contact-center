import { useState } from 'react'

export const useDisclosure = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const open = () => {
    setOpen(prev => (prev = true))
  }

  const toggle = () => {
    setOpen(prev => !prev)
  }

  const close = () => {
    setOpen(prev => (prev = false))
  }

  return {
    open,
    isOpen,
    toggle,
    close
  }
}
