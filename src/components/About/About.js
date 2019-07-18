import React from "react";
import "./about.scss";
import Validate from "../Validate";
import WithOnlineRequire from "../WithOnlineRequire";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Email: "",
      Message: "",
      formErrors: { Email: "", Name: "", Message: "" },
      EmailValid: false,
      NameValid: false,
      MessageValid: false,
      formValid: false
    };
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(
      {
        [name]: value
      },
      () => {
        this.validateField(name, value);
      }
    );
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let EmailValid = this.state.EmailValid;
    let NameValid = this.state.NameValid;
    let MessageValid = this.state.MessageValid;

    switch (fieldName) {
      case "Email":
        EmailValid =
          value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
          value.length > 0;
        fieldValidationErrors.Email = EmailValid ? "" : " is invalid";
        break;
      case "Name":
        NameValid = value.length >= 3;
        fieldValidationErrors.Name = NameValid ? "" : " is too short";
        break;
      case "Message":
        MessageValid = value.length > 10;
        fieldValidationErrors.Message = MessageValid ? "" : " is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        EmailValid: EmailValid,
        NameValid: NameValid,
        MessageValid: MessageValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.EmailValid && this.state.NameValid && this.state.MessageValid
    });
  }

  handleSubmit = event => {
    console.log("Name: " + this.state.Name);
    console.log("Email: " + this.state.Email);
    console.log("Message: " + this.state.Message);
    event.preventDefault();
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const { Email, Message, name, formErrors } = this.state;
    return (
      <div class="row" id="contatti">
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-6 maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d789.6885352909874!2d25.953814230398613!3d48.26081360351484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473408cf1a02b597%3A0x4dd9035e546d5b3e!2sBizico!5e0!3m2!1sru!2sua!4v1563455633908!5m2!1sru!2sua"
                width="400"
                height="300"
                frameborder="0"
                allowfullscreen
              />
            </div>
            <div class="col-md-6">
              <h2 class="text-uppercase mt-3 font-weight-bold">Contact us</h2>
              <form action="" onSubmit={handleSubmit}>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <input
                        class="form-control mt-2"
                        placeholder="Name"
                        name="Name"
                        required
                        value={name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <input
                        class="form-control mt-2"
                        placeholder="Email"
                        name="Email"
                        required
                        value={Email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder="Your wishes"
                        rows="3"
                        name="Message"
                        required
                        value={Message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <button
                      class="btn btn-primary"
                      disabled={!this.state.formValid}
                    >
                      Send a message
                    </button>
                    <Validate formErrors={formErrors} />
                  </div>
                </div>
              </form>
              <div id="information" className="text-white">
                <h2 class="text-uppercase mt-4 font-weight-bold">
                  Our contacts
                </h2>
                <i class="fa fa-phone mt-3" />{" "}
                <a href="tel:+">(+38) 050 678 5686</a>
                <br />
                <i class="fa fa-phone mt-3" />{" "}
                <a href="tel:+">(+38) 066 660 2315</a>
                <br />
                <i class="fa fa-envelope mt-3" /> <a href="">info@bizico.com</a>
                <br />
                <i class="fa fa-envelope mt-3" />{" "}
                <a href="">byaa99@gmail.com</a>
                <br />
                <i class="fa fa-globe mt-3" /> Holovna str 243, 58000
                Chernivtsi, Ukraine
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WithOnlineRequire(About);
