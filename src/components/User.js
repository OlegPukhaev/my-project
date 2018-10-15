import React from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { loggedIn } from './../selectors';
import { Field, reduxForm } from 'redux-form';

let User = props =>  {
    const { handleSubmit, submitting } = props
    // console.log(this.props);
    return (
      <div className="col-xl-4 mx-auto mt-3 bg-light p-3 shadow ">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <Field type="email" name="email" component="input" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <Field type="password" name="password" component="input" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" disabled={submitting} className="btn btn-primary">Submit</button>
        </form>
      </div>

    );
}

User = reduxForm({
  // a unique name for the form
  form: 'userLog'
})(User)

export default User;
