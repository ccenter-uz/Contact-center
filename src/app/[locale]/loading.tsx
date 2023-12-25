import { useLang } from '@/@core/service/hooks/useLang'
import { Spin } from 'antd'
import { CSSProperties, FC } from 'react'

type ILoading = {
  style?: CSSProperties
}

const Loading: FC<ILoading> = ({ style }) => {
  const { t } = useLang()

  return (
    <section
      className='h-100 d-flex flex-column gap-y-2 align-center justify-center'
      style={style || { height: '100dvh' }}
    >
      <Spin size='large' />
      <em style={{ fontSize: '18px', letterSpacing: '2.5px' }}>{t('Loading')}</em>
    </section>
  )
}

export default Loading
