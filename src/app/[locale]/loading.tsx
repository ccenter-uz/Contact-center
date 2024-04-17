import LoadingUI from '@/@core/shared/ui/LoadingUI'
import { CSSProperties, FC } from 'react'

type ILoading = {
  style?: CSSProperties
}

const Loading: FC<ILoading> = ({ style }) => {
  return (
    <section
      className='h-100 d-flex flex-column gap-y-2 align-center justify-center'
      style={style || { height: '100dvh' }}
    >
      <LoadingUI />
    </section>
  )
}

export default Loading
