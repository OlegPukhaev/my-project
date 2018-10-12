import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { loggedIn } from './../selectors';
import { Field, reduxForm } from 'redux-form';

class User extends Component {
  render() {
    const { handleSubmit } = this.props;
    console.log(this.props);
    return (
      <div className="col-xl-4 mx-auto mt-3 bg-light p-3 shadow ">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address - {this.props.loggedIn}</label>
            <Field type="email" name="email" component="input" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <Field type="password" name="password" component="input" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

    );
  }
}

User = reduxForm({
  // a unique name for the form
  form: 'contact'
})(User)

export default User;
