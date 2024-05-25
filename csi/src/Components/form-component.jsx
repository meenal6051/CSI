import React from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*]{8,}$/;


const countries = ["US", "India", "UK"];
const cities = {
  US: ["New York", "Los Angeles", "Chicago"],
  India: ["Jaipur", "Delhi", "Bangalore"],
  UK: ["London", "Manchester", "Liverpool"],
};

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      emailAddress: "",
      password: "",
      phoneNo: "",
      country: "",
      city: "",
      panNo: "",
      aadharNo: "",

      firstNameError: "",
      lastNameError: "",
      userNameError: "",
      emailAddressError: "",
      passwordError: "",
      phoneNoError: "",
      countryError: "",
      cityError: "",
      panNoError: "",
      aadharNoError: "",
      isFormSubmitted: false,
      showPassword: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleBlur(event) {
    const { name } = event.target;
    this.validateField(name);
  }

  handlePhoneChange(value) {
    this.setState({ phoneNo: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const formFields = [
      "firstName",
      "lastName",
      "userName",
      "emailAddress",
      "password",
      "phoneNo",
      "country",
      "city",
      "panNo",
      "aadharNo",
    ];
    let isValid = true;
    formFields.forEach((field) => {
      isValid = this.validateField(field) && isValid;
    });

    if (isValid) this.setState({ isFormSubmitted: true });
    else this.setState({ isFormSubmitted: false });

    return isValid;
  }

  validateField(name) {
    let isValid = false;
    switch (name) {
      case "firstName":
        isValid = this.validateFirstName();
        break;
      case "lastName":
        isValid = this.validateLastName();
        break;
      case "userName":
        isValid = this.validateUserName();
        break;
      case "emailAddress":
        isValid = this.validateEmailAddress();
        break;
      case "password":
        isValid = this.validatePassword();
        break;
      case "phoneNo":
        isValid = this.validatePhoneNo();
        break;
      case "country":
        isValid = this.validateCountry();
        break;
      case "city":
        isValid = this.validateCity();
        break;
      case "panNo":
        isValid = this.validatePanNo();
        break;
      case "aadharNo":
        isValid = this.validateAadharNo();
        break;
      default:
        break;
    }
    return isValid;
  }

  validateFirstName() {
    const { firstName } = this.state;
    const firstNameError = firstName.trim() === "" ? "First Name is required" : "";
    this.setState({ firstNameError });
    return firstNameError === "";
  }

  validateLastName() {
    const { lastName } = this.state;
    const lastNameError = lastName.trim() === "" ? "Last Name is required" : "";
    this.setState({ lastNameError });
    return lastNameError === "";
  }

  validateUserName() {
    const { userName } = this.state;
    const userNameError = userName.trim() === "" ? "User Name is required" : "";
    this.setState({ userNameError });
    return userNameError === "";
  }

  validateEmailAddress() {
    const { emailAddress } = this.state;
    let emailAddressError = "";
    if (emailAddress.trim() === "") emailAddressError = "Email Address is required";
    else if (!emailValidator.test(emailAddress)) emailAddressError = "Email is not valid";
    this.setState({ emailAddressError });
    return emailAddressError === "";
  }

  validatePassword() {
    const { password } = this.state;
    let passwordError = "";
    if (password.trim() === "") passwordError = "Password is required";
    else if (!passwordValidator.test(password))
      passwordError = "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";
    this.setState({ passwordError });
    return passwordError === "";
  }

  validatePhoneNo() {
    const { phoneNo } = this.state;
    const phoneNoError = phoneNo.trim() === "" ? "Phone number is required" : "";
    this.setState({ phoneNoError });
    return phoneNoError === "";
  }

  validateCountry() {
    const { country } = this.state;
    const countryError = country.trim() === "" ? "Country is required" : "";
    this.setState({ countryError });
    return countryError === "";
  }

  validateCity() {
    const { city } = this.state;
    const cityError = city.trim() === "" ? "City is required" : "";
    this.setState({ cityError });
    return cityError === "";
  }

  validatePanNo() {
    const { panNo } = this.state;
    const panNoError = panNo.trim() === "" ? "PAN Number is required" : "";
    this.setState({ panNoError });
    return panNoError === "";
  }

  validateAadharNo() {
    const { aadharNo } = this.state;
    const aadharNoError = aadharNo.trim() === "" ? "Aadhar Number is required" : "";
    this.setState({ aadharNoError });
    return aadharNoError === "";
  }

  togglePasswordVisibility() {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  }

  render() {
    return (
      <div className="main">
        <h2>Form</h2>
        {this.state.isFormSubmitted ? (
          <div className="details">
            {/* <div>First Name: {this.state.firstName}</div>
            <div>Last Name: {this.state.lastName}</div>
            <div>User Name: {this.state.userName}</div>
            <div>Email Address: {this.state.emailAddress}</div>
            <div>Phone No: {this.state.phoneNo}</div>
            <div>Country: {this.state.country}</div>
            <div>City: {this.state.city}</div>
            <div>PAN No: {this.state.panNo}</div>
            <div>Aadhar No: {this.state.aadharNo}</div> */}
            <h3>THANK YOU! FOR YOUR DEATILS</h3>
          </div>
        ) : (
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    className="input-field"
                  />
                  {this.state.firstNameError && <div className="errorMsg">{this.state.firstNameError}</div>}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    className="input-field"
                  />
                  {this.state.lastNameError && <div className="errorMsg">{this.state.lastNameError}</div>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="User Name"
                    name="userName"
                    value={this.state.userName}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    className="input-field"
                  />
                  {this.state.userNameError && <div className="errorMsg">{this.state.userNameError}</div>}
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="emailAddress"
                    value={this.state.emailAddress}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    className="input-field"
                  />
                  {this.state.emailAddressError && <div className="errorMsg">{this.state.emailAddressError}</div>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <div className="password-field">
                    <input
                      type={this.state.showPassword ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                      className="input-field"
                    />
                    <span
                      onClick={this.togglePasswordVisibility}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    >
                      {this.state.showPassword ? "Hide" : "Show"}
                    </span>
                  </div>
                  {this.state.passwordError && <div className="errorMsg">{this.state.passwordError}</div>}
                </div>

                <div className="form-group">
                  <PhoneInput
                    country={"us"}
                    value={this.state.phoneNo}
                    onChange={this.handlePhoneChange}
                    inputStyle={{ width: "100%" }}
                  />
                  {this.state.phoneNoError && <div className="errorMsg">{this.state.phoneNoError}</div>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <select
                    name="country"
                    value={this.state.country}
                    onChange={(e) => {
                      this.handleChange(e);
                      this.setState({ city: "" }); // Reset city when country changes
                    }}
                    onBlur={this.handleBlur}
                    className="input-field"
                  >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  {this.state.countryError && <div className="errorMsg">{this.state.countryError}</div>}
                </div>

                <div className="form-group">
                  <select
                    name="city"
                    value={this.state.city}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    disabled={!this.state.country}
                    className="input-field"
                  >
                    <option value="">Select City</option>
                    {this.state.country &&
                      cities[this.state.country].map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                  </select>
                  {this.state.cityError && <div className="errorMsg">{this.state.cityError}</div>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="PAN Number"
                    name="panNo"
                    value={this.state.panNo}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    className="input-field"
                  />
                  {this.state.panNoError && <div className="errorMsg">{this.state.panNoError}</div>}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Aadhar Number"
                    name="aadharNo"
                    value={this.state.aadharNo}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    className="input-field"
                  />
                  {this.state.aadharNoError && <div className="errorMsg">{this.state.aadharNoError}</div>}
                </div>
              </div>

              <div style={{ flexBasis: "100%", textAlign: "center" }}>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default FormComponent;


// import React from "react";
// import "react-phone-input-2/lib/style.css";
// import PhoneInput from "react-phone-input-2";

// const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/;
// const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

// const countries = ["US", "India", "UK"];
// const cities = {
//   US: ["New York", "Los Angeles", "Chicago"],
//   India: ["Jaipur", "Delhi", "Bangalore"],
//   UK: ["London", "Manchester", "Liverpool"],
// };

// class FormComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstName: "",
//       lastName: "",
//       userName: "",
//       emailAddress: "",
//       password: "",
//       phoneNo: "",
//       country: "",
//       city: "",
//       panNo: "",
//       aadharNo: "",

//       firstNameError: "",
//       lastNameError: "",
//       userNameError: "",
//       emailAddressError: "",
//       passwordError: "",
//       phoneNoError: "",
//       countryError: "",
//       cityError: "",
//       panNoError: "",
//       aadharNoError: "",
//       isFormSubmitted: false,
//       showPassword: false,
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleBlur = this.handleBlur.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
//     this.handlePhoneChange = this.handlePhoneChange.bind(this);
//   }

//   handleChange(event) {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   }

//   handleBlur(event) {
//     const { name } = event.target;
//     this.validateField(name);
//   }

//   handlePhoneChange(value) {
//     this.setState({ phoneNo: value });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     const formFields = [
//       "firstName",
//       "lastName",
//       "userName",
//       "emailAddress",
//       "password",
//       "phoneNo",
//       "country",
//       "city",
//       "panNo",
//       "aadharNo",
//     ];
//     let isValid = true;
//     formFields.forEach((field) => {
//       isValid = this.validateField(field) && isValid;
//     });

//     if (isValid) this.setState({ isFormSubmitted: true });
//     else this.setState({ isFormSubmitted: false });

//     return isValid;
//   }

//   validateField(name) {
//     let isValid = false;
//     switch (name) {
//       case "firstName":
//         isValid = this.validateFirstName();
//         break;
//       case "lastName":
//         isValid = this.validateLastName();
//         break;
//       case "userName":
//         isValid = this.validateUserName();
//         break;
//       case "emailAddress":
//         isValid = this.validateEmailAddress();
//         break;
//       case "password":
//         isValid = this.validatePassword();
//         break;
//       case "phoneNo":
//         isValid = this.validatePhoneNo();
//         break;
//       case "country":
//         isValid = this.validateCountry();
//         break;
//       case "city":
//         isValid = this.validateCity();
//         break;
//       case "panNo":
//         isValid = this.validatePanNo();
//         break;
//       case "aadharNo":
//         isValid = this.validateAadharNo();
//         break;
//       default:
//         break;
//     }
//     return isValid;
//   }

//   validateFirstName() {
//     const { firstName } = this.state;
//     const firstNameError = firstName.trim() === "" ? "First Name is required" : "";
//     this.setState({ firstNameError });
//     return firstNameError === "";
//   }

//   validateLastName() {
//     const { lastName } = this.state;
//     const lastNameError = lastName.trim() === "" ? "Last Name is required" : "";
//     this.setState({ lastNameError });
//     return lastNameError === "";
//   }

//   validateUserName() {
//     const { userName } = this.state;
//     const userNameError = userName.trim() === "" ? "User Name is required" : "";
//     this.setState({ userNameError });
//     return userNameError === "";
//   }

//   validateEmailAddress() {
//     const { emailAddress } = this.state;
//     let emailAddressError = "";
//     if (emailAddress.trim() === "") emailAddressError = "Email Address is required";
//     else if (!emailValidator.test(emailAddress)) emailAddressError = "Email is not valid";
//     this.setState({ emailAddressError });
//     return emailAddressError === "";
//   }

//   validatePassword() {
//     const { password } = this.state;
//     let passwordError = "";
//     if (password.trim() === "") passwordError = "Password is required";
//     else if (!passwordValidator.test(password))
//       passwordError = "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";
//     this.setState({ passwordError });
//     return passwordError === "";
//   }

//   validatePhoneNo() {
//     const { phoneNo } = this.state;
//     const phoneNoError = phoneNo.trim() === "" ? "Phone number is required" : "";
//     this.setState({ phoneNoError });
//     return phoneNoError === "";
//   }

//   validateCountry() {
//     const { country } = this.state;
//     const countryError = country.trim() === "" ? "Country is required" : "";
//     this.setState({ countryError });
//     return countryError === "";
//   }

//   validateCity() {
//     const { city } = this.state;
//     const cityError = city.trim() === "" ? "City is required" : "";
//     this.setState({ cityError });
//     return cityError === "";
//   }

//   validatePanNo() {
//     const { panNo } = this.state;
//     const panNoError = panNo.trim() === "" ? "PAN Number is required" : "";
//     this.setState({ panNoError });
//     return panNoError === "";
//   }

//   validateAadharNo() {
//     const { aadharNo } = this.state;
//     const aadharNoError = aadharNo.trim() === "" ? "Aadhar Number is required" : "";
//     this.setState({ aadharNoError });
//     return aadharNoError === "";
//   }

//   togglePasswordVisibility() {
//     this.setState({ showPassword: !this.state.showPassword });
//   }

//   render() {
//     return (
//       <div className="main">
//         <h2>SignUp Form</h2>
//         {this.state.isFormSubmitted ? (
//           <div className="details">
//             <h3>Thanks for signing up, find your details below:</h3>
//             <div>First Name: {this.state.firstName}</div>
//             <div>Last Name: {this.state.lastName}</div>
//             <div>Username: {this.state.userName}</div>
//             <div>Email Address: {this.state.emailAddress}</div>
//             <div>Phone Number: {this.state.phoneNo}</div>
//             <div>Country: {this.state.country}</div>
//             <div>City: {this.state.city}</div>
//             <div>PAN Number: {this.state.panNo}</div>
//             <div>Aadhar Number: {this.state.aadharNo}</div>
//           </div>
//         ) : (
//           <div>
//             <form onSubmit={this.handleSubmit}>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   name="firstName"
//                   value={this.state.firstName}
//                   onChange={this.handleChange}
//                   onBlur={this.handleBlur}
//                   className="input-field"
//                 />
//                 {this.state.firstNameError && <div className="errorMsg">{this.state.firstNameError}</div>}
//               </div>

//               <div className="form-group">
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   name="lastName"
//                   value={this.state.lastName}
//                   onChange={this.handleChange}
//                   onBlur={this.handleBlur}
//                   className="input-field"
//                 />
//                 {this.state.lastNameError && <div className="errorMsg">{this.state.lastNameError}</div>}
//               </div>

//               <div className="form-group">
//                 <input
//                   type="text"
//                   placeholder="User Name"
//                   name="userName"
//                   value={this.state.userName}
//                   onChange={this.handleChange}
//                   onBlur={this.handleBlur}
//                   className="input-field"
//                 />
//                 {this.state.userNameError && <div className="errorMsg">{this.state.userNameError}</div>}
//               </div>

//               <div className="form-group">
//                 <input
//                   type="text"
//                   placeholder="Email Address"
//                   name="emailAddress"
//                   value={this.state.emailAddress}
//                   onChange={this.handleChange}
//                   onBlur={this.handleBlur}
//                   className="input-field"
//                 />
//                 {this.state.emailAddressError && <div className="errorMsg">{this.state.emailAddressError}</div>}
//               </div>

//               <div className="form-group">
//                 <div className="password-field" style={{ position: "relative" }}>
//                   <input
//                     type={this.state.showPassword ? "text" : "password"}
//                     placeholder="Password"
//                     name="password"
//                     value={this.state.password}
//                     onChange={this.handleChange}
//                     onBlur={this.handleBlur}
//                     className="input-field"
//                   />
//                   <span
//                     onClick={this.togglePasswordVisibility}
//                     style={{
//                       position: "absolute",
//                       right: "10px",
//                       top: "50%",
//                       transform: "translateY(-50%)",
//                       cursor: "pointer",
//                     }}
//                   >
//                     {this.state.showPassword ? "Hide" : "Show"}
//                   </span>
//                 </div>
//                 {this.state.passwordError && <div className="errorMsg">{this.state.passwordError}</div>}
//               </div>

//               <div className="form-group">
//                 <PhoneInput
//                   country={"us"}
//                   value={this.state.phoneNo}
//                   onChange={this.handlePhoneChange}
//                   inputStyle={{ width: "100%" }}
//                 />
//                 {this.state.phoneNoError && <div className="errorMsg">{this.state.phoneNoError}</div>}
//               </div>

//               <div className="form-group">
//                 <select
//                   name="country"
//                   value={this.state.country}
//                   onChange={(e) => {
//                     this.handleChange(e);
//                     this.setState({ city: "" }); // Reset city when country changes
//                   }}
//                   onBlur={this.handleBlur}
//                   className="input-field"
//                 >
//                   <option value="">Select Country</option>
//                   {countries.map((country) => (
//                     <option key={country} value={country}>
//                       {country}
//                     </option>
//                   ))}
//                 </select>
//                 {this.state.countryError && <div className="errorMsg">{this.state.countryError}</div>}
//               </div>

//               <div className="form-group">
//                 <select
//                   name="city"
//                   value={this.state.city}
//                   onChange={this.handleChange}
//                   onBlur={this.handleBlur}
//                   disabled={!this.state.country}
//                   className="input-field"
//                 >
//                   <option value="">Select City</option>
//                   {this.state.country &&
//                     cities[this.state.country].map((city) => (
//                       <option key={city} value={city}>
//                         {city}
//                       </option>
//                     ))}
//                 </select>
//                 {this.state.cityError && <div className="errorMsg">{this.state.cityError}</div>}
//               </div>

//               <div className="form-group">
//                 <input
//                   type="text"
//                   placeholder="PAN Number"
//                   name="panNo"
//                   value={this.state.panNo}
//                   onChange={this.handleChange}
//                   onBlur={this.handleBlur}
//                   className="input-field"
//                 />
//                 {this.state.panNoError && <div className="errorMsg">{this.state.panNoError}</div>}
//               </div>

//               <div className="form-group">
//                 <input
//                   type="text"
//                   placeholder="Aadhar Number"
//                   name="aadharNo"
//                   value={this.state.aadharNo}
//                   onChange={this.handleChange}
//                   onBlur={this.handleBlur}
//                   className="input-field"
//                 />
//                 {this.state.aadharNoError && <div className="errorMsg">{this.state.aadharNoError}</div>}
//               </div>

//               <div style={{ flexBasis: "100%", textAlign: "center" }}>
//                 <button type="submit">Signup</button>
//               </div>
//             </form>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default FormComponent;
