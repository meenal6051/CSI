import React from "react";

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      emailAddress: "",
      password: "",
      passwordConfirmation: "",
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
      passwordConfirmationError: "",
      phoneNoError: "",
      countryError: "",
      cityError: "",
      panNoError: "",
      aadharNoError: "",
      isFormSubmitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleBlur(event) {
    const { name } = event.target;
    this.validateField(name);
  }

  handleSubmit(event) {
    event.preventDefault();
    const formFields = [
      "firstName",
      "lastName",
      "userName",
      "emailAddress",
      "password",
      "passwordConfirmation",
      "phoneNo",
      "country",
      "city",
      "panNo",
      "aadharNo"
    ];
    let isValid = true;
    formFields.forEach(field => {
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
      case "passwordConfirmation":
        isValid = this.validatePasswordConfirmation();
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
    else if (!passwordValidator.test(password)) passwordError = "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";
    this.setState({ passwordError });
    return passwordError === "";
  }

  validatePasswordConfirmation() {
    const { password, passwordConfirmation } = this.state;
    const passwordConfirmationError = password !== passwordConfirmation ? "Password does not match Confirmation" : "";
    this.setState({ passwordConfirmationError });
    return passwordConfirmationError === "";
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

  render() {
    return (
      <div className="main" style={{ textAlign: "center" }}>
        <h2>SignUp Form</h2>
        {this.state.isFormSubmitted ? (
          <div className="details" style={{ textAlign: "center" }}>
            <h3>Thanks for signing up, find your details below:</h3>
            <div>First Name: {this.state.firstName}</div>
            <div>Last Name: {this.state.lastName}</div>
            <div>User Name: {this.state.userName}</div>
            <div>Email Address: {this.state.emailAddress}</div>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.firstNameError && (
                <div className="errorMsg">{this.state.firstNameError}</div>
              )}
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.lastNameError && (
                <div className="errorMsg">{this.state.lastNameError}</div>
              )}
              <input
                type="text"
                placeholder="User Name"
                name="userName"
                value={this.state.userName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.userNameError && (
                <div className="errorMsg">{this.state.userNameError}</div>
              )}
              <input
                type="email"
                placeholder="Email Address"
                name="emailAddress"
                value={this.state.emailAddress}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.emailAddressError && (
                <div className="errorMsg">{this.state.emailAddressError}</div>
              )}
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.passwordError && (
                <div className="errorMsg">{this.state.passwordError}</div>
              )}
              <input
                type="password"
                placeholder="Confirm Password"
                name="passwordConfirmation"
                value={this.state.passwordConfirmation}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.passwordConfirmationError && (
                <div className="errorMsg">{this.state.passwordConfirmationError}</div>
              )}
              <input
                type="text"
                placeholder="Phone Number"
                name="phoneNo"
                value={this.state.phoneNo}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.phoneNoError && (
                <div className="errorMsg">{this.state.phoneNoError}</div>
              )}
              <input
                type="text"
                placeholder="Country"
                name="country"
                value={this.state.country}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.countryError && (
                <div className="errorMsg">{this.state.countryError}</div>
              )}
              <input
                type="text"
                placeholder="City"
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.cityError && (
                <div className="errorMsg">{this.state.cityError}</div>
              )}
              <input
                type="text"
                placeholder="PAN Number"
                name="panNo"
                value={this.state.panNo}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.panNoError && (
                <div className="errorMsg">{this.state.panNoError}</div>
              )}
              <input
                type="text"
                placeholder="Aadhar Number"
                name="aadharNo"
                value={this.state.aadharNo}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.aadharNoError && (
                <div className="errorMsg">{this.state.aadharNoError}</div>
              )}
              <button>Signup</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default FormComponent;
