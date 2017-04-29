import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';

class PostcodeForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
        <form onSubmit={handleSubmit} autoComplete="off">
        <Field 
            name="postcode" 
            component={TextField}
            hintText="2000"
            floatingLabelText="Your Postcode" 
        />
        <RaisedButton
            disabled={pristine || submitting}
            label="Show Me Recipes"
        />
        </form>
    );
  }
}

function mapStateToProps(state) {
    const postcode = state.postcode;
    return {
        initialValues: state
    };
}

const PostcodeReduxForm = reduxForm({
    form: 'postcode'
})(PostcodeForm);

export default connect(mapStateToProps)(PostcodeReduxForm);
