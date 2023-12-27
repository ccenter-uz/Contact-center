import { FC } from 'react'
import './style.scss'
import { Col, Form, Input, Modal, Row, Select } from 'antd'
import { useLang } from '@/@core/service/hooks/useLang'
import { Button } from '../../reusables/Button'

type IModal = {
  open: boolean
  close: any
}
type valuesForm = {
  service_type: string
  organization_name: string
  fio: string
  applicant_phone: string
  comment: string
}

const serviceOptions = [
  {
    label: 'Nimadurni 1-turi',
    value: 1
  },
  {
    label: 'Nimadurni 2-turi',
    value: 2
  },
  {
    label: 'Nimadurni 3-turi',
    value: 3
  }
]

export const ModalService: FC<IModal> = ({ open, close }) => {
  const { t } = useLang()
  const [form] = Form.useForm()

  // handleFinish
  const handleFinish = (values: valuesForm) => {
    console.log(values, 'values')
    form.resetFields()
  }

  return (
    <Modal
      width={910}
      className='modal-service'
      title={
        <div className='modal-title d-flex align-center justify-center'>
          <h1>{t('service-modal-title')}</h1>
        </div>
      }
      open={open}
      onCancel={() => close(false)}
      footer={
        <div className='modal_footer d-flex justify-center align-center'>
          <Button form='modal-form'>{t('left-application')}</Button>
        </div>
      }
    >
      <Form onFinish={handleFinish} form={form} id='modal-form' layout='vertical'>
        <Row justify={'space-between'}>
          <Col xs={24} sm={24} md={11} lg={11} xl={11} xxl={11}>
            <Form.Item
              name={'service_type'}
              label={t('service-modal-type')}
              rules={[{ required: true, message: 'Xizmat turini tanlang!' }]}
            >
              <Select options={serviceOptions} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <Form.Item
              name={'organization_name'}
              label={t('service-modal-organization')}
              rules={[{ required: true, message: 'Tashkilot nomini kiriting!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row justify={'space-between'}>
          <Col xs={24} sm={24} md={11} lg={11} xl={11} xxl={11}>
            <Form.Item
              name={'fio'}
              label={t('service-modal-fio')}
              rules={[{ required: true, message: 'F.I.Sh ni kiriting' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <Form.Item
              name={'applicant_phone'}
              label={t('service-modal-phone')}
              rules={[{ required: true, message: 'Telefon raqam kiriting' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item name={'comment'} label={t('service-modal-comment')}>
              <Input.TextArea rows={4} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  )
}
