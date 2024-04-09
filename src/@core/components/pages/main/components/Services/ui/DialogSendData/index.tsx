import { Button, Form, Modal, Row, Col, Input } from 'antd'
import { FC } from 'react'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import { useLang } from '@/@core/service/hooks/useLang'
import { sendData } from '../../api/clientAction'

type DialogSendDataType = {
  open: boolean
  close: () => void
}

const DialogSendData: FC<DialogSendDataType> = props => {
  const { open, close } = props
  const [form] = Form.useForm()
  const { t } = useLang()

  // SEND
  const handleSendData = async (value: {
    name: string
    organization_name: string
    number: string
    comment: number
  }) => {
    const res = await sendData(value)
    res?.status === 201 &&
      (toast.success('Success', { position: 'bottom-right' }),
      form.resetFields(),
      Swal.fire({
        title: `№${res.data.aplicationNumber}`,
        text: t('swal-identificalNumber-text'),
        icon: 'info',
        allowOutsideClick: false
      })).then(res => {
        if (res.isConfirmed) {
          close()
        }
      })
  }

  return (
    <Modal
      aria-modal={open}
      open={open}
      onCancel={close}
      title={
        <div aria-label='title-modal-card' className='dialog-send-data-header d-flex align-center justify-center'>
          <p style={{ fontSize: 'var(--font-size-l)' }} aria-label={t('service-modal-title')}>
            {t('service-modal-title')}
          </p>
        </div>
      }
      footer={
        <div aria-label={t('send-btn')} className='dialog-send-data-button d-flex align-center justify-center'>
          <Button
            style={{ background: 'rgba(255, 95, 47, 1)', width: '157px', height: '40px' }}
            type='primary'
            form='send-data-form'
            htmlType='submit'
          >
            {t('send-btn')}
          </Button>
        </div>
      }
      className='dialog-send-data'
    >
      <Form form={form} layout='vertical' onFinish={handleSendData} id='send-data-form'>
        <Row gutter={[16, 0]}>
          <Col xs={24} sm={24} md={12} xl={12}>
            <Form.Item name={'name'} label={t('service-modal-fio')} required>
              <Input type='text' style={{ borderRadius: '4px' }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} xl={12}>
            <Form.Item name={'organization_name'} label={t('service-modal-organization')} required>
              <Input type='text' style={{ borderRadius: '4px' }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} xl={12}>
            <Form.Item name={'number'} label={t('service-modal-phone')} required>
              <Input type='text' style={{ borderRadius: '4px' }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} xl={12}>
            <Form.Item name={'comment'} label={t('service-modal-comment')}>
              <Input.TextArea maxLength={100} showCount style={{ borderRadius: '4px' }} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  )
}

export default DialogSendData
