import { Modal, Row, Col, Button, Flex } from 'antd'
import { ChangeEvent, FC } from 'react'
import DialogSendData from '../DialogSendData'
import { DataType } from '../TabContent'
import { Link } from '@/navigation'
import { useLang } from '@/@core/service/hooks/useLang'
import { useDisclosure } from '@/@core/service/hooks/useDisclosure'
import { getLng } from '../../utils'

type Props = {
  open: boolean
  close: () => void
  services: DataType['services']
}

const DialogService: FC<Props> = props => {
  const { open, close, services } = props
  const { isOpen: sendDataModal, open: sendDataModalOpen, close: setSendDataModal } = useDisclosure()
  const { t, locale } = useLang()

  // SUBMIT
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const body = Array.from(data.entries())
      .map(([key, _]) => key)
      .filter(item => !item.includes('virtual_number'))
    sessionStorage.setItem(
      'application',
      JSON.stringify({
        virtual_number: data.get('virtual_number'),
        services: body
      })
    )
    e.currentTarget.reset()
    sendDataModalOpen()
  }

  return (
    <>
      <Modal
        className='dialog-service'
        width={'743px'}
        open={open}
        onCancel={close}
        title='Choose service'
        footer={
          <div className='d-flex flex-column align-center gap-y-1'>
            <Button
              type='primary'
              htmlType='submit'
              form='form-service'
              style={{ background: 'rgba(255, 95, 47, 1)', width: '157px', height: '40px' }}
              onClick={close}
            >
              {t('send-btn')}
            </Button>
          </div>
        }
      >
        <div className='header-block'>
          <form onSubmit={handleSubmit} id='form-service'>
            <Row align={'bottom'} gutter={[16, 16]} style={{ marginBottom: '1em' }}>
              <Col xs={24} sm={24} md={14} xl={14}>
                <label htmlFor='virtual-number'>{t('virtual-number')}</label>
                <input
                  id='virtual-number'
                  required
                  name='virtual_number'
                  style={{
                    borderRadius: '8px',
                    height: '40px',
                    boxShadow: '0px 20px 50px 0px rgba(0, 0, 0, 0.1)',
                    border: '1px solid lightgrey',
                    width: '100%',
                    padding: '0 8px',
                    outline: 'none'
                  }}
                  placeholder='99 000 00 00 '
                  type='number'
                />
              </Col>
              <Col xs={24} sm={24} md={10} xl={10}>
                <Link href='https://uztelecom.uz/uz/biznesga/ofis-uchun-telefon/band-qilish' target='_blank'>
                  <Button
                    size='small'
                    style={{
                      width: '100%',
                      height: '40px',
                      fontSize: 'var(--font-size-s)',
                      color: 'rgba(255, 95, 47, 1)',
                      borderColor: 'rgba(255, 95, 47, 1)'
                    }}
                  >
                    {t('not-virtualNumber-yet')}
                  </Button>
                </Link>
              </Col>
            </Row>
            {/* CHECKBOXES */}
            <Row gutter={[16, 16]}>
              {services?.map(item => {
                return (
                  <Col key={item.id} span={24}>
                    <Flex
                      align='center'
                      justify='space-between'
                      style={{ boxShadow: '0px 4px 6px 0px rgba(0, 0, 0, 0.06)', padding: '8px', borderRadius: '8px' }}
                    >
                      <label htmlFor={getLng(locale, item, 'name')} style={{ fontSize: '14px', width: '95%' }}>
                        {getLng(locale, item, 'name')}
                      </label>
                      <input
                        type='checkbox'
                        id={getLng(locale, item, 'name')}
                        name={getLng(locale, item, 'name')}
                        style={{ height: '20px', width: '20px', cursor: 'pointer' }}
                      />
                    </Flex>
                  </Col>
                )
              })}
            </Row>
          </form>
        </div>
      </Modal>
      <DialogSendData open={sendDataModal} close={setSendDataModal} />
    </>
  )
}

export default DialogService
