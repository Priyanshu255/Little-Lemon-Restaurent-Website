import React from 'react';
import {Formik, Form, ErrorMessage, Field} from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';

const BookingForm = () => {
    const validate = Yup.object({
        Name : Yup.string()
            .required('Required'),
        email : Yup.string()
            .email("Email is invalid")
            .required('Required'),
        date : Yup.date()
            .required('Required'),
        guests : Yup.number()
            .min(1, 'Minimum is 1.')
            .max(10, 'Must be less than 10.')
            .required('Required'),
    })

  return (
    <Formik
        initialValues={{
            Name : '',
            email : '',
            date : '',
            time : '17:00',
            guests : '1',
            occasion : 'Birthday'
        }}
        validationSchema = {validate}
        onSubmit = {(values , {resetForm}) => {
            alert("Form submitted successfully!!");
            console.log(values);
            resetForm();
        }}
    >
        {formik => (
            <Form>
                <TextField label = "Name:" name = "Name" type = "text" placeholder="Your Name"/>
                <TextField label = "Email:" name = "email" type = "email" placeholder="text@email.com"/>
                <TextField label = "Choose Date" name = "date" type="date"/>
                <div className="field">
                    <label htmlFor="time">Choose Time</label>
                    <Field as = "select" name = "time">
                         <option value="17:00">17:00</option>
                         <option value="18:00">18:00</option>
                         <option value="19:00">19:00</option>
                         <option value="20:00">20:00</option>
                         <option value="21:00">21:00</option>
                         <option value="22:00">22:00</option>
                    </Field>
                    <ErrorMessage component="div" name= 'time' className = "error-message"/>
                </div>
                <TextField label= "Number of Guests" name = 'guests' type="number"/>
                <div className="field">
                    <label htmlFor="occasion">Occasion</label>
                    <Field as = "select" name = "occasion" >
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </Field>
                    <ErrorMessage component="div" name= 'occasion' className = "error-message"/>
                </div>
                <button type='submit'>Make Your reservation</button>
            </Form>
        )}
    </Formik>
  )
}

export default BookingForm
