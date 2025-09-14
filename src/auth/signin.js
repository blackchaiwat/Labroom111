import React, { useEffect, useState } from 'react';
import { Container, CardBody, Form, FormGroup, Label, Button, Card } from 'reactstrap'
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { getLogin } from '../util/profile';

const Logins = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    // username: 'sutee@tritonnt.com',
    // password: '@Plawdx0'
    username: '',
    password: ''
  });
  
  const [error, setError] = useState(false);

  useEffect(() => {
    localStorage.setItem('token', '');
  }, [])

  const onSubmit = async (data) => {
    const res = await getLogin({ ...data });
    if (res?.result === 'error' || !res?.profileinfo?.token) {
      setError(true);
    } else {
      localStorage.setItem('token', res?.profileinfo?.token || '');
      navigate(`${process.env.PUBLIC_URL}/dashboard/main`);
    }
  }
  return (
    <div className="page-wrapper">
      <Container fluid={true} className="p-0">
        <div className="box-login">
          <Card style={{ minWidth: '300px', width: '100%', maxWidth: '500px' }}>
            <CardBody>
              <Form className="needs-validation" noValidate="" onSubmit={handleSubmit(onSubmit)}>
                <h4 className='text-center mb-3'>เข้าสู่ระบบ</h4>
                
                <FormGroup>
                  <Label className="col-form-label pt-0">ผู้ใช้งาน</Label>
                  <input 
                    className={`form-control ${errors.username && 'is-invalid'} mb-1`}
                    placeholder='ผู้ใช้งาน...'
                    type="text"
                    name='username'
                    defaultValue='sutee@tritonnt.com'
                    {...register('username', { required: true })} 
                  />
                  <span className='text-danger'>{errors.username && 'กรุณากรอกผู้ใช้งาน'}</span>
                </FormGroup>
                <FormGroup>
                  <Label className="col-form-label">รหัสผ่าน</Label>
                  <input 
                    className={`form-control ${errors.password && 'is-invalid'} mb-1`}
                    placeholder='ผู้ใช้งาน...'
                    type="password"
                    name='password'
                    defaultValue='@Plawdx0'
                    {...register('password', { required: true })} 
                  />
                  <span className='text-danger'>{errors.password && 'กรุณากรอกรหัสผ่าน'}</span>
                </FormGroup>

                {error && (
                  <p className='text-center text-danger mt-3'>ผู้ใช้งาน หรือ รหัสผ่าน ไม่ถูกต้อง</p>
                )}

                <div className="mt-4">
                  <div className="btn-showcase">
                      <Button color="primary d-block w-100">
                        เข้าสู่ระบบ
                      </Button>
                  </div>
                </div>
              </Form>
            </CardBody>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default Logins;