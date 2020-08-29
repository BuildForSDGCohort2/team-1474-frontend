import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../Actions/authentication';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      email: '',
      password: '',
      lastname: '',
      name: '',
      pending: false,
    };
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ pending: true });
    const {
      password, lastname, email, name,
    } = this.state;
    const result = await signup({
      email, lastname, name, password,
    });
    if (result && !result.error) { window.location = '/dashboard'; } else if (result.error) this.setState({ error: result.error.data.msg, pending: false });
    else this.setState({ error: 'erreur lors de la creation du compte', pending: false });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const {
      error, email, password, lastname, name, pending,
    } = this.state;
    return (

      <div className="signupForm">
        <div className=" mx-auto my-auto text-center w-100">
          <h3 className="text-center mb-4 login-title"> Signup </h3>
          <hr />
          {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
          )}
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="form-label-group mt-4 w-100 col-6">
                <input
                  type="text"
                  name="name"
                  className="form-control classic-input"
                  onChange={this.handleChange}
                  placeholder="Fistname"
                  required
                  value={name}
                />
              </div>
              <div className="form-label-group mt-4 w-100 col-6">
                <input
                  type="text"
                  name="lastname"
                  className="form-control classic-input"
                  onChange={this.handleChange}
                  placeholder="Lastname"
                  required
                  value={lastname}
                />
              </div>
            </div>
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
              <Link to="/reset-password" activeclassname="active" className="condition">
                {' '}
                By signning up I agree to
                {' '}
                <strong>Confition and terms </strong>
                {' '}
              </Link>
              {' '}
            </p>
            <button className="btn-block btn-primary my-3 form-control" type="submit">
              Signup
              {' '}
              {pending && <div className="spinner-grow spinner-grow-sm text-light "> </div>}
            </button>
          </form>
        </div>
      </div>
    );
  }
}
