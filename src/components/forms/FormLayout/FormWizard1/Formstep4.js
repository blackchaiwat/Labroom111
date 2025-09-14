import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Form, FormGroup, Label } from 'reactstrap'
import { City, Country, Previous, State, Submit } from '../../../../constant';

const Formstep4 = ({ setSteps, setFormdata, formdata }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        if (data) {
            setFormdata(prev => ({ ...prev, ...data }))
            alert('Your Form is Submited');
            setSteps(1);
        }
    }
    return (
        <Fragment>
            <Form onSubmit={handleSubmit(onSubmit)} className="form-bookmark needs-validation">
                <FormGroup className="mb-3">
                    <Label htmlFor="country">{Country}</Label>
                    <input className={`form-control ${errors.country && 'is-invalid'}`} id="country" type="text" name='country' defaultValue={formdata.country || ""} {...register('country', { required: true })} />
                    <span className='text-danger'>{errors.country && 'Countrty Name is required'}</span>
                </FormGroup>
                <FormGroup className="mb-3">
                    <Label htmlFor="State">{State}</Label>
                    <input className={`form-control ${errors.state && 'is-invalid'}`} id="State" type="text" name='state' defaultValue={formdata.state || ""} {...register('state', { required: true })} />
                    <span className='text-danger'>{errors.state && 'State name is required'}</span>
                </FormGroup>
                <FormGroup className="mb-3">
                    <Label htmlFor="City">{City}</Label>
                    <input className={`form-control ${errors.city && 'is-invalid'}`} id="City" type="text" name='city' defaultValue={formdata.city || ""} {...register('city', { required: true })} />
                    <span className='text-danger'>{errors.city && 'City Name is Required'}</span>
                </FormGroup>
                <div className="text-end">
                    <Button color='secondary me-2' onClick={() => setSteps(pre => pre - 1)}>{Previous}</Button>
                    <Button color='primary' type='submit' >{Submit}</Button>
                </div>
            </Form>
        </Fragment>
    )
}
export default Formstep4