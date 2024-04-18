import { FC } from 'react'
import { IUserFormChat } from '../../type'
import { Button, Form, Input } from 'antd'
import './style.scss'
import { useLang } from '@/@core/apps/hooks/useLang'
import { userFormSend } from '../../api'

const UserFormChat: FC<IUserFormChat> = props => {
  const { finishFormData } = props
  const { t } = useLang()
  const [form] = Form.useForm()

  const handleSendData = async (value: { full_name: string; phone: string }) => {
    // const res = await userFormSend(value)
    // if (res.status === 201) {
    //   form.resetFields()
    // }
    console.log(
      {
        full_name: value.full_name,
        phone: `+998${value.phone}`
      },
      'values'
    )
    finishFormData()
  }

  return (
    <Form onFinish={handleSendData} form={form} id='user-form-chatbot' layout='vertical'>
      <Form.Item
        name='full_name'
        label={t('full_name')}
        rules={[{ required: true, message: t('error-name'), whitespace: true, min: 3, max: 80 }]}
      >
        <Input type='text' autoComplete='off' placeholder={t('example_name')} />
      </Form.Item>
      <Form.Item
        name='phone'
        label={t('phone')}
        rules={[{ required: true, min: 9, max: 9, message: t('error-phone'), whitespace: true }]}
      >
        <Input type='number' addonBefore={'+998'} autoComplete='off' placeholder={'971234567'} />
      </Form.Item>
      <Form.Item className='d-flex align-center justify-end'>
        <Button type='primary' htmlType='submit' className='d-flex align-center justify-center'>
          {t('send')}
        </Button>
      </Form.Item>
    </Form>
  )
}
export default UserFormChat
