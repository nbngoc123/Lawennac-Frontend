import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Mentions,
    Select,
    TreeSelect,
    Segmented,
  } from 'antd';

function FormPage() {
    const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 14 },
        },
      };
  const [form] = Form.useForm();
  const handelSubmit = (value) => {
    console.log(value);
    form.resetFields();
  };



    return (
        <>
<Form
      {...formItemLayout}
      form={form}
      style={{ maxWidth: 600 }}
      initialValues={{ variant: 'filled' }}
      onFinish={handelSubmit}
    >
      <Form.Item label="Form variant" name="variant">
        <Segmented options={['outlined', 'filled', 'borderless']} />
      </Form.Item>

      <Form.Item label="Input" name="Input" rules={[{ required: true, message: 'Please input!' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="InputNumber"
        name="InputNumber"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="TextArea"
        name="TextArea"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Mentions"
        name="Mentions"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Mentions />
      </Form.Item>


      <Form.Item
        label="TreeSelect"
        name="TreeSelect"
        rules={[{ required: false, message: 'Please input!' }]}
      >
        <TreeSelect />
      </Form.Item>

      <Form.Item
        label="DatePicker"
        name="DatePicker"
        rules={[{ required: false, message: 'Please input!' }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        </>
    )
};

export default FormPage;