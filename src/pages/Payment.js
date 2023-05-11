import Bilet from "./Bilet";
import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Payment = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="İsim"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Soyisim"
      name="usersurname"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Phone"
      name="phone"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Kart Üzerindeki İsim"
      name="cardname"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Kart Numarası"
      name="cardnumber"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Son Kullanma Tarihi"
      name="enddate"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="CVC"
      name="cvc"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default Payment;
//export default function Payment() {
//    const refreshPage = ()=>{
//        alert('Bilet Satın Alındı !')
//        window.location.reload();
//     }
//    return(
//        <div>
//                <form className="form">
//                    <h2>Ödeme Sayfası</h2>
//                    <div className="information">
//                        <h3>Kişisel Bilgiler</h3>
//                        <div className="name-margin">
//                            <div>
//                            <label  htmlFor="name">İsim : </label>
//                            <input  id="name" name="name" type="text" />
//                            </div>
//                           <div>
//                           <label  htmlFor="surname">Soyisim : </label>
//                            <input  id="surname" name="surname" type="text" />
//                           </div>
//                            
//                        </div>
//                        <div  className="name-margin">
//                            <div>
//                            <label  htmlFor="email">Email : </label>
//                          <input  id="email" name="surname" type="text" />
//                            </div>
//                            <div>
//                            <label  htmlFor="phone">Telefon : </label>
//                          <input  id="phone" name="phone" type="phone" />
//                            </div>
//                          
//                         
//                        </div>
//                      
//                      
//                    </div>
//                    <div className="information">
//                        <h3>Kart Bilgileri</h3>
//                        <div className="name-margin">
//                            <div>
//                            <label htmlFor="cardname">Kart Üzerindeki İsim : </label>
//                            <input id="cardname" name="cardname"/>
//                            </div>
//                           <div>
//                           <label htmlFor="cardnumber">Kredi Kartı No : </label>
//                            <input id="cardnumber" name="cardnumber"/>
//                           </div>
//                            
//                        </div>
//                        <div className="name-margin">
//                            <div>
//                            <label  htmlFor="enddate">Son Kullanma Tarihi : </label>
//                            <input  id="enddate" name="enddate"/>
//                            </div>
//                            <div>
//                            <label htmlFor="cvc">Kredi Kartı No : </label>
//                            <input id="cvc" name="cvc"/>
//                            </div>
//        
//                            
//                            
//                        </div>
//                        <div className="name-margin">
//                            <label htmlFor="total">Tutar :</label>
//                            <span className="total" name="total">
//                            
//                            </span>
//                        </div>
//                    </div>
//                <button className="payment" onClick={refreshPage}>Satın Al</button>
//            </form>
//        </div>    
//    )
//}