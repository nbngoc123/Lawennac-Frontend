import React, { useState } from 'react';
import { Input, Button, ConfigProvider, Collapse, Form, Select, Slider, Switch, InputNumber, message } from 'antd';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchImageSuccess } from '../../actions/generateImage'
import './style.css';

const { Panel } = Collapse;
const { Option } = Select;

const PromptArea = () => {
  const dispatch = useDispatch();
  const userLogined = useSelector(state => state.userReducer);
  const selectedImage = useSelector((state) => state.imageReducer);
  // console.log(selectedImage)

  // const res = useSelector(state => state.generateImageReducer);
  const [form] = Form.useForm();
  const [loraList, setLoraList] = useState([]);
  const [showSteps, setShowSteps] = useState(false);
  const [showGuidanceScale, setShowGuidanceScale] = useState(false);
  const [showSeed, setShowSeed] = useState(false);
  const [controlNet, setControlNet] = useState(false);
  const [customModel, setCustomModel] = useState(false);

  const handleSubmit = async (url, data, user_id) => {
    const requestImage = {
      ...data,
      user_id: user_id,
    }
    try {
      dispatch(fetchImageSuccess(true))

      const response = await axios.post(url, requestImage, {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
      dispatch(fetchImageSuccess(false))
      if (response.status === 200) {
      dispatch(fetchImageSuccess(false))
          message.success(response.data.message);

      return response.data;

      } else if (response.status === 500) {
         message.error(response.data.message)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Thêm LoRA mới
  const addLoRA = () => {
    setLoraList([...loraList, { model: '', weight: 1 }]);
  };

  // Cập nhật giá trị LoRA
  const handleLoRAChange = (index, field, value) => {
    const updatedList = [...loraList];
    updatedList[index][field] = value;
    setLoraList(updatedList);
  };

  // Xóa LoRA
  const removeLoRA = (index) => {
    setLoraList(loraList.filter((_, i) => i !== index));
  };

  // Xử lý khi Generate
  const handleGenerate = (values) => {
    console.log('Generated Data:', {
      ...values,
      lora: loraList.filter((lora) => lora.model), // Lọc các LoRA đã nhập model
    });
    const data = {
      ...values,
      lora: loraList.filter((lora) => lora.model), // Lọc các LoRA đã nhập model
    }
    handleSubmit('http://localhost:3006/api/image-requests/generate', data, userLogined.userId)
    // form.resetFields();

    

  };

  return (

    <div className='prompt-area' style={{ backgroundColor: '#1a1a1a', padding: '20px', color: '#fff' }}>
          <ConfigProvider
    theme={{
      token: {
        labelColor: '#fff', 
      },
      components: {
        Form: {
          labelColor: '#104bc4', // Add this line to target Form labels specifically
        },
      },
    }}
  >
      <Form form={form} onFinish={handleGenerate}>
        {/* Input TextArea */}
        <Form.Item
          name="positivePrompt"
          label="Prompt"
          rules={[{ required: true, message: 'Please describe your image or upload' }]}
          initialValue={selectedImage?.prompt}
        >
          <Input.TextArea
            placeholder="Describe your image or upload"
            rows={2}
            style={{ backgroundColor: '#333', color: '#fff', borderRadius: '8px', marginBottom: '10px' }}
          />
        </Form.Item>

        {/* Negative Prompt */}
        <Form.Item 
        name="negativePrompt" 
        label="Negative Prompt"
        initialValue={selectedImage?.negativePrompt}
        
        >
          <Input.TextArea
            placeholder="Optional: Describe what to exclude"
            rows={2}
            style={{ backgroundColor: '#333', color: '#fff', borderRadius: '8px', marginBottom: '10px' }}
          />
        </Form.Item>

        {/* Select Model */}
        {/* <Form.Item name="model" label="Model">
          <Switch
            checked={customModel}
            onChange={(checked) => setCustomModel(checked)}
            style={{ marginBottom: '10px' }}
          />
          {customModel ? (
            <Input
              placeholder="Enter custom model name"
              style={{ backgroundColor: '#333', color: '#fff', borderRadius: '8px' }}
            />
          ) : (
            <Select
              placeholder="Select or input model name"
              allowClear
              showSearch
            >
              <Option value="model1">Model 1</Option>
              <Option value="model2">Model 2</Option>
            </Select>
          )}
        </Form.Item> */}

        <Form.Item name="model" label="Model">
          <Switch
            checked={customModel}
            onChange={(checked) => setCustomModel(checked)}
            style={{ marginBottom: '10px' }}
          />
          {customModel ? (
            <Form.Item name="model" noStyle>
              <Input
                placeholder="Enter custom model name"
                style={{ backgroundColor: '#333', color: '#fff', borderRadius: '8px' }}
              />
            </Form.Item>
          ) : (
            <Form.Item name="model" noStyle>
              <Select
                placeholder="Select or input model name"
                allowClear
                showSearch
              >
    <option value="civitai:23900@95489">SD 1.5</option>
              </Select>
            </Form.Item>
          )}
        </Form.Item>

        {/* Generate Button */}
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button type="primary" htmlType="submit" style={{ marginTop: '20px', width: '100%' }}>
            Generate
          </Button>
        </Form.Item>


        <Form.Item name="scheduler" label="scheduler" initialValue={selectedImage?.sampler}>
          
            <Form.Item name="scheduler" noStyle>
              <Select
                placeholder="Select or input scheduler name"
                allowClear
                showSearch
              >
                <option value="DDIM">DDIM</option> 
  <option value="DDPMScheduler">DDPM</option> 
  <option value="DEISMultistepScheduler">DEIS Multistep</option> 
  <option value="DPMSolverSinglestepScheduler">DPM-Solver Single-step</option> 
  <option value="DPMSolverMultistepScheduler">DPM-Solver Multi-step</option> 
  <option value="DPMSolverMultistepInverse">DPM-Solver Multi-step Inverse</option> 
  <option value="DPM++">DPM++</option> 
  <option value="DPM++ Karras">DPM++ Karras</option> 
  <option value="DPM++ 2M">DPM++ 2M</option> 
  <option value="DPM++ 2M Karras">DPM++ 2M Karras</option> 
  <option value="DPM++ 2M SDE Karras">DPM++ 2M SDE Karras</option> 
  <option value="DPM++ 2M SDE">DPM++ 2M SDE</option> 
  <option value="DPM++ 3M">DPM++ 3M</option> 
  <option value="DPM++ 3M Karras">DPM++ 3M Karras</option> 
  <option value="DPM++ SDE Karras">DPM++ SDE Karras</option> 
  <option value="DPM++ SDE">DPM++ SDE</option> 
  <option value="EDMEulerScheduler">EDM Euler</option> 
  <option value="EDMDPMSolverMultistepScheduler">EDM DPM-Solver Multi-step</option> 
  <option value="Euler">Euler</option> 
  <option value="EulerDiscreteScheduler">Euler</option> 
  <option value="Euler Karras">Euler Karras</option> 
  <option value="Euler a">Euler Ancestral</option> 
  <option value="EulerAncestralDiscreteScheduler">Euler Ancestral</option> 
  <option value="FlowMatchEulerDiscreteScheduler">FlowMatch Euler</option> 
  <option value="Heun">Heun</option> 
  <option value="HeunDiscreteScheduler">Heun</option> 
  <option value="Heun Karras">Heun Karras</option> 
  <option value="IPNDMScheduler">IPNDM</option> 
  <option value="KDPM2DiscreteScheduler">KDPM2</option> 
  <option value="KDPM2AncestralDiscreteScheduler">KDPM2 Ancestral</option> 
  <option value="LCMScheduler">LCM</option>  
  <option value="LMSDiscrete">LMS</option> 
  <option value="LMS Karras">LMS Karras</option> 

              </Select>
            </Form.Item>
          
        </Form.Item>




        {/* Advanced Settings */}
        <Collapse style={{ backgroundColor: '#333', borderRadius: '8px', color: '#fff' }}>
          <Panel header="Settings" key="1">
            <Form.Item name="steps" label="Steps"
        initialValue={selectedImage?.steps}
            
            >
              <Switch onChange={(checked) => setShowSteps(checked)} />
              {showSteps && <Slider min={1} max={50} defaultValue={20} />}
            </Form.Item>

            <Form.Item name="guidanceScale" label="Guidance Scale"
        initialValue={selectedImage?.cfgScale}
            
            >
              <Switch onChange={(checked) => setShowGuidanceScale(checked)} />
              {showGuidanceScale && <Slider min={1} max={30} defaultValue={7} />}
            </Form.Item>

            <Form.Item name="clipSkip" label="Clip Skip"
        initialValue={selectedImage?.clipSkip}
            
            >
              <Slider min={0} max={2} step={1} defaultValue={0} />
            </Form.Item>
          </Panel>

          <Panel header="Dimensions" key="2">
            <Form.Item name="width" label="Width">
              <InputNumber min={256} max={2048} defaultValue={512} />
            </Form.Item>
            <Form.Item name="height" label="Height">
              <InputNumber min={256} max={2048} defaultValue={512} />
            </Form.Item>
          </Panel>

          <Panel header="Seed" key="3">
            <Form.Item name="seedToggle"
             label="Seed"
              initialValue={selectedImage?.seed}
             >
              <Switch onChange={(checked) => setShowSeed(checked)} />
              {showSeed && (
                <>
                  <InputNumber min={0} placeholder="Enter seed" />
                  <Input placeholder="Seed Image URL" style={{ marginTop: '10px' }} />
                </>
              )}
            </Form.Item>
          </Panel>

          <Panel header="LoRA & ControlNet" key="4">
            <Form.Item label="LoRA">
              <Button type="dashed" onClick={addLoRA} style={{ marginBottom: '10px' }}>
                + Add LoRA
              </Button>
              {loraList.map((lora, index) => (
                <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <Input
                    placeholder="Model Name"
                    value={lora.model}
                    onChange={(e) => handleLoRAChange(index, 'model', e.target.value)}
                    style={{ flex: 2 }}
                  />
                  <Slider
                    min={0}
                    max={4}
                    step={0.1}
                    value={lora.weight}
                    onChange={(value) => handleLoRAChange(index, 'weight', value)}
                    style={{ flex: 2 }}
                  />
                  <Button type="text" danger onClick={() => removeLoRA(index)}>
                    Remove
                  </Button>
                </div>
              ))}
            </Form.Item>

            <Form.Item label="ControlNet">
              <Switch onChange={(checked) => setControlNet(checked)} />
              {controlNet && (
                <div style={{ marginTop: '10px' }}>
                  <Input placeholder="ControlNet model" />
                  <Input placeholder="ControlNet weight" style={{ marginTop: '10px' }} />
                </div>
              )}
            </Form.Item>
          </Panel>
        </Collapse>

        
      </Form>
      </ConfigProvider>
    </div>
  );
};

export default PromptArea;
