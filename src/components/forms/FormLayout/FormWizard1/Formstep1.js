import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Form, FormGroup, Label } from 'reactstrap';
import { Next } from '../../../../constant';

const Formstep1 = ({ setSteps, setFormdata, formdata }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        setFormdata(prev => ({ ...prev, ...data }))
        setSteps(prev => prev + 1)
    }
    return (
        <Fragment>
            <Form onSubmit={handleSubmit(onSubmit)} className="form-bookmark needs-validation">
                <FormGroup className="mb-3">
                    <Label htmlFor="fname">First Name</Label>
                    <input className={`form-control ${errors.firstName && 'is-invalid'}`} id="fname" type="text" name='firstname' defaultValue={formdata.firstName || ""} {...register('firstName', { required: true })} />
                    <span className='text-danger'>{errors.firstName && 'First name is required'}</span>
                </FormGroup>
                <FormGroup className="mb-3">
                    <Label htmlFor="lname">Last Name</Label>
                    <input className={`form-control ${errors.lastname && 'is-invalid'}`} id="lname" type="text" name='lastname' defaultValue={formdata.lastname || ""} {...register('lastname', { required: true })} />
                    <span className='text-danger'>{errors.lastname && 'Last name is required'}</span>
                </FormGroup>
                <FormGroup className="mb-3">
                    <Label htmlFor="contact">Contact No.</Label>
                    <input className={`form-control ${(errors.contact) && 'is-invalid'}`} id="contact" type="number" name='contact' defaultValue={formdata.contact || ""} {...register('contact', { required: true })} />
                    <span className='text-danger'>{errors.contact && 'Please enter number for phone.'}</span>
                </FormGroup>
                <div className="text-end btn-mb">
                    <Button color='primary'>{Next}</Button>
                </div>
            </Form>
        </Fragment>
    )
}
export default Formstep1