import { Button, Form, Modal, Row, Col, Input } from 'antd'
import { useSearchParams } from 'next/navigation'
import { Dispatch, FC, SetStateAction } from 'react'
import { api } from '@/@core/utils/api'
import { toast } from 'react-toastify'

type DialogSendDataType = {
  open: boolean
  close: Dispatch<SetStateAction<boolean>>
}

const DialogSendData: FC<DialogSendDataType> = props => {
  const { open, close } = props
  const [form] = Form.useForm()
  const searchParams = useSearchParams()

  // CLOSE
  const handleClose = () => {
    close(prev => (prev = false))
  }

  // SEND
  const handleSendData = async (value: {
    name: string
    organization_name: string
    number: string
    comment: number
  }) => {
    try {
      const data = JSON.parse(sessionStorage.getItem('application') as string)
      const type_of_service = JSON.parse(sessionStorage.getItem('serviceType') as string)
      const tarif = JSON.parse(sessionStorage.getItem('selectedTarif') as string)
      let body
      if (searchParams.has('tarif')) {
        body = {
          ...value,
          type_of_service,
          text: {
            type: 'card',
            tarif
          }
        }
      } else {
        body = {
          ...value,
          type_of_service,
          text: {
            type: 'banner',
            ...data
          }
        }
      }
      const res = await api.post(`Application/create`, body)

      res.status === 201 && (toast.success('Success', { position: 'bottom-right' }), form.resetFields(), handleClose())
    } catch (err) {
      console.error(err, 'err')
    }
  }

  return (
    <Modal
      open={open}
      onCancel={handleClose}
      title={
        <div className='dialog-send-data-header d-flex align-center justify-center'>
          <p style={{ fontSize: 'var(--font-size-l)' }}>Онлайн заявка</p>
        </div>
      }
      footer={
        <div className='dialog-send-data-button d-flex align-center justify-center'>
          <Button
            style={{ background: 'rgba(255, 95, 47, 1)', width: '157px', height: '40px' }}
            type='primary'
            form='send-data-form'
            htmlType='submit'
          >
            Отправить
          </Button>
        </div>
      }
      className='dialog-send-data'
    >
      <Form form={form} layout='vertical' onFinish={handleSendData} id='send-data-form'>
        <Row gutter={[16, 0]}>
          <Col xs={24} sm={24} md={12} xl={12}>
            <Form.Item name={'name'} label='Ф.И.О' required>
              <Input type='text' style={{ borderRadius: '4px' }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} xl={12}>
            <Form.Item name={'organization_name'} label='Название организации' required>
              <Input type='text' style={{ borderRadius: '4px' }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} xl={12}>
            <Form.Item name={'number'} label='Контактный номер' required>
              <Input type='text' style={{ borderRadius: '4px' }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} xl={12}>
            <Form.Item name={'comment'} label='Комментария'>
              <Input.TextArea maxLength={100} showCount style={{ borderRadius: '4px' }} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  )
}

export default DialogSendData
