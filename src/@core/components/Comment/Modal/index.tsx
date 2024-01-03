import { FC } from 'react'
import './style.scss'
import { Col, Form, Input, Modal, Row, Select } from 'antd'
import { useLang } from '@/@core/service/hooks/useLang'
import { Button } from '../../reusables/Button'
import { api } from '@/@core/utils/api'
import { toast } from 'react-toastify'

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

export const ModalService: FC<IModal> = ({ open, close }) => {
  const { t } = useLang()
  const [form] = Form.useForm()
  const serviceOptions = [
    {
      label: t('service-modal-type-first'),
      value: t('service-modal-type-first')
    },
    {
      label: t('service-modal-type-second'),
      value: t('service-modal-type-second')
    },
    {
      label: t('service-modal-type-third'),
      value: t('service-modal-type-third')
    },
    {
      label: t('service-modal-type-fourth'),
      value: t('service-modal-type-fourth')
    },
    {
      label: t('service-modal-type-fiveth'),
      value: t('service-modal-type-fiveth')
    }
  ]

  // handleFinish
  const handleFinish = async (values: valuesForm) => {
    try {
      const body = {
        type_of_service: values.service_type + '',
        organization_name: values.organization_name,
        name: values.fio,
        number: values.applicant_phone,
        comment: values.comment
      }
      const res = await api.post('Application/create', body)

      res.status === 201 && toast.success('Отправлено', { position: 'bottom-right' })
    } catch (err) {
      console.log(err, 'err')
    } finally {
      form.resetFields()
      close(false)
    }
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
