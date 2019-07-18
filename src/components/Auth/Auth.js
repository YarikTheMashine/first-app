import React from "react";
import Cookies from "universal-cookie";
import "./auth.scss";
import WithLoginRequire from "../WithLoginRequire";

const authData = [
  {
    username: "yaroslav",
    password: "123456"
  },
  {
    username: "denus",
    password: "123456"
  },
  {
    username: "andriy",
    password: "123456"
  }
];

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  cookies = new Cookies();

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    const { state, cookies, props } = this;
    event.preventDefault();
    authData.map(value => {
      if (
        state.username === value.username &&
        state.password === value.password
      ) {
        cookies.set(
          "isLogin",
          "Congratulation,_" + state.username + "_is_loggined_now"
        );
        props.loginHandler();
        props.history.push("/");
      }
    });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { password, username } = this.state;
    return (
      <div id="authForm" className="container">
        <div className="wrapper">
          <form className="form-signin" onSubmit={handleSubmit}>
            <h3 className="form-signin-heading">
              Welcome Back! Please Sign In
            </h3>
            <hr className="colorgraph" />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleChange}
            />
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />

            <button
              className="btn btn-lg btn-primary btn-block"
              name="Submit"
              value="Login"
              type="Submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default WithLoginRequire(Auth);
