import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 

const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const validate = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.phoneNo) newErrors.phoneNo = 'Phone Number is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.panNo) newErrors.panNo = 'PAN No. is required';
    if (!formData.aadharNo) newErrors.aadharNo = 'Aadhar No. is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      history.push('/success', { formData });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>
      <div>
        <label>Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Password</label>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Hide' : 'Show'}
        </button>
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <label>Phone Number</label>
        <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
        {errors.phoneNo && <span>{errors.phoneNo}</span>}
      </div>
      <div>
        <label>Country</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          {/* Add more options as needed */}
        </select>
        {errors.country && <span>{errors.country}</span>}
      </div>
      <div>
        <label>City</label>
        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="">Select City</option>
          {formData.country === 'India' && (
            <>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
            </>
          )}
          {formData.country === 'USA' && (
            <>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
            </>
          )}
          {formData.country === 'Canada' && (
            <>
              <option value="Toronto">Toronto</option>
              <option value="Vancouver">Vancouver</option>
              <option value="Montreal">Montreal</option>
            </>
          )}
          {/* Add more options as needed */}
        </select>
        {errors.city && <span>{errors.city}</span>}
      </div>
      <div>
        <label>PAN No.</label>
        <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
        {errors.panNo && <span>{errors.panNo}</span>}
      </div>
      <div>
        <label>Aadhar No.</label>
        <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
        {errors.aadharNo && <span>{errors.aadharNo}</span>}
      </div>
      <div>
        <button type="submit" disabled={!validate()}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormComponent;







// import React from "react";

// const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const passwordValidator = /^(?=.\d)(?=.[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

// class FormComponent extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       firstName: "",
//       lastName: "",
//       userName: "",
//       emailAddress: "",
//       password: "",
//       passwordConfirmation: "",
//       phoneNo: "",
//       country: "",
//       city: "",
//       panNo: "",
//       aadharNo: "",

//       firstNameError: "",
//       userNameError: "",
//       emailAddressError: "",
//       passwordError: "",
//       passwordConfirmationError: "",
//       phoneNoError: "",
//       panNoError: "",
//       aadharNoError: "",
//       isFormSubmitted: false
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleBlur = this.handleBlur.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.validateFirstName = this.validateFirstName.bind(this);
//     this.validateLastName = this.validateLastName.bind(this);
//     this.validateUserName = this.validateUserName.bind(this);
//     this.validateEmailAddress = this.validateEmailAddress.bind(this);
//     this.validatePassword = this.validatePassword.bind(this);
//     this.validatePasswordConfirmation = this.validatePasswordConfirmation.bind(this);

//     this.validatephoneNo = this.validatephoneNo.bind(this);
//     this.validateCountry = this.validateCountry.bind(this);
//     this.validateCity = this.validateCity.bind(this);
//     this.validatePanNo = this.validatePanNo.bind(this);
//     this.validateAadharNo = this.validateAadharNo.bind(this);

//     this.validateField = this.validateField.bind(this);
//   }

//   handleChange(event) {
//     const { name, value } = event.target;

//     this.setState({
//       [name]: value
//     });

//     return;
//   }

//   handleBlur(event) {
//     const { name } = event.target;

//     this.validateField(name);
//     return;
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     let formFields = [
//       "firstName",
//       "lastName",
//       "username",
//       "emailAddress",
//       "password",
//       "passwordConfirmation",
//       "phoneNo",
//       "country",
//       "city",
//       "panNo",
//       "aadharNo"
//     ];
//     let isValid = true;
//     formFields.forEach(field => {
//       isValid = this.validateField(field) && isValid;
//     });

//     if (isValid) this.setState({ isFormSubmitted: true });
//     else this.setState({ isFormSubmitted: false });

//     return this.state.isFormSubmitted;
//   }

//   validateField(name) {
//     let isValid = false;

//     if (name === "firstName") isValid = this.validateFirstName();
//     else if (name === "lastName") isValid = this.validateLastName();
//     else if (name === "userName") isValid = this.validateUserName();
//     else if (name === "emailAddress") isValid = this.validateEmailAddress();
//     else if (name === "password") isValid = this.validatePassword();
//     else if (name === "passwordConfirmation") isValid = this.validatePasswordConfirmation();

//     else if (name === "phoneNo") isValid = this.validatephoneNo();
//     else if (name === "country") isValid = this.validateCountry();
//     else if (name === "city") isValid = this.validateCity();
//     else if (name === "panNo") isValid = this.validatePanNo();
//     else if (name === "aadharNo") isValid = this.validateAadharNo();

//     return isValid;
//   }

//   validateFirstName() {
//     let firstNameError = "";
//     const value = this.state.firstName;
//     if (value.trim() === "") firstNameError = "First Name is required";

//     this.setState({
//       firstNameError
//     });
//     return firstNameError === "";
//   }

//   validateLastName() {
//     let lastNameError = "";
//     const value = this.state.lastName;
//     if (value.trim() === "") lastNameError = "Last Name is required";

//     this.setState({
//       lastNameError
//     });
//     return lastNameError === "";
//   }

//   validateUserName() {
//     let userNameError = "";
//     const value = this.state.userName;
//     if (value.trim() === "") userNameError = "User Name is required";
//     // else if (!userNameValidator.test(value))
//     //   userNameError = "Email is not valid";
//     this.setState({
//       userNameError
//     });
//     return userNameError === "";
//   }

//   validateEmailAddress() {
//     let emailAddressError = "";
//     const value = this.state.emailAddress;
//     if (value.trim === "") emailAddressError = "Email Address is required";
//     else if (!emailValidator.test(value))
//       emailAddressError = "Email is not valid";

//     this.setState({
//       emailAddressError
//     });
//     return emailAddressError === "";
//   }

//   validatePassword() {
//     let passwordError = "";
//     const value = this.state.password;
//     if (value.trim === "") passwordError = "Password is required";
//     else if (!passwordValidator.test(value))
//       passwordError =
//         "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";

//     this.setState({
//       passwordError
//     });
//     return passwordError === "";
//   }

//   validatePasswordConfirmation() {
//     let passwordConfirmationError = "";
//     if (this.state.password !== this.state.passwordConfirmation)
//       passwordConfirmationError = "Password does not match Confirmation";

//     this.setState({
//       passwordConfirmationError
//     });
//     return passwordConfirmationError === "";
//   }
  
//   validatephoneNo() {
//     let phoneNoError = "";
//     const value = this.state.phoneNo;
//     if (value.trim === "") phoneNoError = "Phone number is required";
//     // else if (!phoneNoValidator.test(value))
//     //   phoneNoError = "Phone Number is not valid";

//     this.setState({
//       phoneNoError
//     });
//     return phoneNoError === "";
//   }

//   render() {
//     return (
//       <div className="main" style={{textAlign:"center"}}>
//         <h2>SignUp Form</h2>
//         {this.state.isFormSubmitted ? (
//           <div className="details" style={{textAlign:"center"}}>
//             <h3>Thanks for signing up, find your details below:</h3>
//             <div>First Name: {this.state.firstName}</div>
//             <div>Last Name: {this.state.lastName}</div>
//             <div>User Name: {this.state.userName}</div>
//             <div>Email Address: {this.state.emailAddress}</div>
//           </div>
//         ) : (
//           <div style={{textAlign:"center"}}>
//           <form onSubmit={this.handleSubmit} >
//             <input
//               type="text"
//               placeholder="First Name"
//               name="firstName"
//               value={this.state.firstName}
//               onChange={this.handleChange}
//               onBlur={this.handleBlur}
//               autoComplete="off"
//             />
//             <br />
//             {this.state.firstNameError && (
//               <div className="errorMsg">{this.state.firstNameError}</div>
//             )}
//             <input
//               type="text"
//               placeholder="Last Name"
//               name="lastName"
//               value={this.state.lastName}
//               onChange={this.handleChange}
//               onBlur={this.handleBlur}
//               autoComplete="off"
//             />
//             <br />
//             {this.state.lastNameError && (
//               <div className="errorMsg">{this.state.lastNameError}</div>
//             )}
//             <input
//               type="text"
//               placeholder="User Name"
//               name="userName"
//               value={this.state.userName}
//               onChange={this.handleChange}
//               onBlur={this.handleBlur}
//               autoComplete="off"
//             />
//             <br />
//             {this.state.lastNameError && (
//               <div className="errorMsg">{this.state.lastNameError}</div>
//             )}

//             <input
//               type="email"
//               placeholder="Email Address"
//               name="emailAddress"
//               value={this.state.emailAddress}
//               onChange={this.handleChange}
//               onBlur={this.handleBlur}
//               autoComplete="off"
//             />
//             <br />
//             {this.state.emailAddressError && (
//               <div className="errorMsg">{this.state.emailAddressError}</div>
//             )}
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               value={this.state.password}
//               onChange={this.handleChange}
//               onBlur={this.handleBlur}
//               autoComplete="off"
//             />
//             <br />
//             {this.state.passwordError && (
//               <div className="errorMsg">{this.state.passwordError}</div>
//             )}
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               name="passwordConfirmation"
//               value={this.state.passwordConfirmation}
//               onChange={this.handleChange}
//               onBlur={this.handleBlur}
//               autoComplete="off"
//             />
//             <br />
//             {this.state.passwordConfirmationError && (
//               <div className="errorMsg">
//                 {this.state.passwordConfirmationError}
//               </div>
//             )}
//             <button>Signup</button>
//           </form>
//           </div>
//         )}
//       </div>
//     );
//   }
// }
// export default FormComponent;