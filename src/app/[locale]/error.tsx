'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='error d-flex align-center justify-center flex-column gap-3'>
      <h1>Ooops, something went wrong, </h1>
      <p>{error.message}</p>
      <button onClick={() => window.location.reload()}>Try again</button>
    </div>
  )
}
