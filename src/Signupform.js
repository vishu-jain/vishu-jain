import React from 'react';
import { useFormik } from 'formik';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router';

const validate = values => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length < 5 ) {
    errors.firstName = 'Must be 5 characters or More';
  }else if (values.firstName.length > 25 ) {
    errors.firstName = 'Must be 25 characters or less';
  }


  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 5 ) {
    errors.password = 'Must be 5 characters or More';
  }else if (values.password.length > 8 ) {
    errors.password = 'Must be 8 characters or less';
  }

  if (!values.confirmpassword) {
    errors.confirmpassword = 'Required';
  } else if (values.confirmpassword !== values.password ) {
    errors.password = 'Password and Confirm password value should be match';
  }
  return errors;
};

const Signupform = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password:'',
      confirmpassword:'',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
      function sign(){
        axios.post('http://localhost:7600/postData',{
          firstName:formik.values.firstName,
          lastName:formik.values.lastName,
          email:formik.values.email,
          password:formik.values.password,
          confirmpassword:formik.values.confirmpassword
        })
         .then((res) => { console.log(res) })
         .catch((err) => {
           console.log(err);
         });
     }
    let navigate=useNavigate();
     function dd(){
        navigate('/get');
     }
     
   
  return (
    <>
    <div className="image"></div>
    <div className="form-group">
    <form onSubmit={()=>{formik.handleSubmit();sign()}} className="container">
      <h2>Sign Up Form</h2>
      <label htmlFor="firstName">First Name :</label>
      <input className="form-control"
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <p className="pp">{formik.errors.firstName}</p>
      ) : null}
      <label htmlFor="lastName">Last Name :</label>
      <input className="form-control"
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <p className="pp">{formik.errors.lastName}</p>
      ) : null}

      <label htmlFor="email">Email Address :</label>
      <input className="form-control"
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <p className="pp">{formik.errors.email}</p>
      ) : null}

      <label htmlFor="password">Password :</label>
      <input className="form-control"
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <p className="pp">{formik.errors.password}</p>
      ) : null}

       <label htmlFor="confirmpassword">Confirm Password:</label>
      <input className="form-control"
        id="confirmpassword"
        name="confirmpassword"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmpassword}
      />
      {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
        <p className="pp">{formik.errors.confirmpassword}</p>
      ) : null}

      <button type="submit" className="btn btn-primary my-4">Submit</button>
    </form>
      <button type="button" className="btn btn-primary ml-2" onClick={dd}>Get data</button>
    </div>
    </>
  );
};


export default Signupform;