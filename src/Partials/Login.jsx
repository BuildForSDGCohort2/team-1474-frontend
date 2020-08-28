import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../Actions/authentication';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      email: '',
      password: '',
      pending: false,
    };
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.setState({ pending: true });
    const result = await login({ email, password });
    if (result && !result.error) { localStorage.setItem('user', result); } else if (result.error) this.setState({ error: result.error.data.msg, pending: false });
    else this.setState({ error: 'Mot de passe ou nom d\'utilisateur incorrecte', pending: false });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const {
      error, email, password, pending,
    } = this.state;
    return (

      <div className="loginForm">
        <div className=" mx-auto my-auto text-center w-100">
          <h3 className="text-center mb-4 login-title"> Login </h3>
          <hr />
          {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
          )}
          <form onSubmit={this.handleSubmit}>
            <div className="form-label-group mt-4 w-100">
              <input
                type="text"
                name="email"
                className="form-control classic-input"
                onChange={this.handleChange}
                placeholder="Email address"
                required
                value={email}
              />
            </div>
            <div className="form-label-group mt-4">
              <input
                type="password"
                name="password"
                className="form-control classic-input"
                onChange={this.handleChange}
                placeholder="Password"
                required
                value={password}
              />
            </div>
            <br />
            <p>
              <Link to="/reset-password" activeclassname="active">
                {' '}
                Mot de passe oublié ?
                {' '}
              </Link>
              {' '}
            </p>
            <button className="btn-block btn-primary my-3 form-control" type="submit">
              Login
              {' '}
              {pending && <div className="spinner-grow spinner-grow-sm text-light "> </div>}
            </button>
          </form>
        </div>
      </div>
    );
  }
}
