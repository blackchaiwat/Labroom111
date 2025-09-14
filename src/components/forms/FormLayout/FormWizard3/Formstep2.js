import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Form, FormGroup } from 'reactstrap';

const Formstep2 = ({ setSteps, setFormdata, formdata }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        if (data) {
            setFormdata(prev => ({ ...prev, ...data }))
            setSteps(pre => pre + 1);
        }
    }
    return (
        <Fragment>
            <Form onSubmit={handleSubmit(onSubmit)} className="form-bookmark needs-validation">
                <FormGroup className="mb-3">
                    <input className={`form-control ${errors.email && 'is-invalid'} mb-1`} placeholder='Email...' type="email" name='email' defaultValue={formdata.email || ""} {...register('email', { required: true })} />
                    <span className='text-danger'>{errors.email && 'Email is required'}</span>
                </FormGroup>
                <FormGroup className="mb-3">
                    <input className={`form-control ${errors.password && 'is-invalid'} mb-1`} placeholder='Password...' type="password" name='password' defaultValue={formdata.password || ""} {...register('password', { required: true })} />
                    <span className='text-danger'>{errors.password && 'Password is required'}</span>
                </FormGroup>
                <FormGroup className="mb-3">
                    <input className={`form-control ${errors.confirmPW && 'is-invalid'} mb-1`} placeholder='Repeat Password...' type="password" name='confirmPW' defaultValue={formdata.confirmPW || ""} {...register('confirmPW', { required: true })} />
                    <span className='text-danger'>{errors.confirmPW && 'Confirm your Password.'}</span>
                </FormGroup>
                <div className="text-end">
                    <Button color='primary me-2' onClick={() => setSteps(pre => pre - 1)}>{'Previous'}</Button>
                    <Button color='primary' type='submit' >{'Next'}</Button>
                </div>
            </Form>
        </Fragment>
    )
}

export default Formstep2