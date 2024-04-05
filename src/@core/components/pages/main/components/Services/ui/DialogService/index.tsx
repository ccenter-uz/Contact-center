import { Modal, Row, Col, Button, Flex } from 'antd'
import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react'
import DialogSendData from '../DialogSendData'
import { DataType } from '../TabContent'
import { Link } from '@/navigation'

type Props = {
  open: boolean
  close: Dispatch<SetStateAction<boolean>>
  services: DataType['services']
}

const DialogService: FC<Props> = props => {
  const { open, close, services } = props
  const [sendDataModal, setSendDataModal] = useState<boolean>(false)
  // CLOSE
  const handleClose = () => {
    close(prev => (prev = false))
  }

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
    setSendDataModal(prev => (prev = true))
  }

  return (
    <>
      <Modal
        open={open}
        onCancel={handleClose}
        title='Choose service'
        footer={
          <div className='d-flex flex-column align-center gap-y-1'>
            <Button
              type='primary'
              htmlType='submit'
              form='form-service'
              style={{ background: 'rgba(255, 95, 47, 1)', width: '157px', height: '40px' }}
              onClick={handleClose}
            >
              Отправить
            </Button>
          </div>
        }
      >
        <div className='header-block'>
          <form onSubmit={handleSubmit} id='form-service'>
            <Row align={'bottom'} gutter={[16, 16]} style={{ marginBottom: '1em' }}>
              <Col xs={24} sm={24} md={14} xl={14}>
                <input
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
                    Ёще нет номера нажмите сюда
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
                      <label htmlFor={item.name_ru} style={{ fontSize: '14px', width: '95%' }}>
                        {item.name_ru}
                      </label>
                      <input
                        type='checkbox'
                        id={item.name_ru}
                        name={item.name_ru}
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
