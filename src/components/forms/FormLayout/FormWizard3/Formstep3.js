import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Form, FormGroup } from 'reactstrap';

const Formstep3 = ({ setSteps, setFormdata, formdata }) => {
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
                    <input className={`form-control ${errors.day && 'is-invalid'} mb-1`} placeholder='DD' type="number" min={1} max={31} name='day' defaultValue={formdata.day || ""} {...register('day', { required: true })} />
                    <span className='text-danger'>{errors.day && 'Enter Valid day'}</span>
                </FormGroup>
                <FormGroup className="mb-3">
                    <input className={`form-control ${errors.month && 'is-invalid'} mb-1`} placeholder='MM' type="month" name='month' defaultValue={formdata.month || ""} {...register('month', { required: true })} />
                    <span className='text-danger'>{errors.month && 'Select month'}</span>
                </FormGroup>
                <FormGroup className="mb-3">
                    <input className={`form-control ${errors.year && 'is-invalid'} mb-1`} placeholder='YYYY' min={1980} max={2023} type="number" name='year' defaultValue={formdata.year || ""} {...register('year', { required: true })} />
                    <span className='text-danger'>{errors.year && 'Enter valid year'}</span>
                </FormGroup>
                <div className="text-end">
                    <Button color='primary me-2' onClick={() => setSteps(pre => pre - 1)}>{'Previous'}</Button>
                    <Button color='primary' type='submit'>{'Submit'}</Button>
                </div>
            </Form>
        </Fragment>
    )
}

export default Formstep3