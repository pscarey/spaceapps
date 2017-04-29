import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';

class PostcodeForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        this.props.onSubmit(values);
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props
        return (
            <form onSubmit={handleSubmit(this.onSubmit)} autoComplete="off">
                <div style={{textAlign: 'center', display: 'block'}}>
                    <Field 
                        name="postcode"
                        component={TextField}
                        hintText="2000"
                        floatingLabelText="Your Postcode" 
                    /><br />
                    <RaisedButton
                        primary
                        disabled={pristine || submitting}
                        label="Show Me Recipes"
                        type="submit"
                    />
                </div>
            </form>
        );
    }
}

function mapStateToProps(state) {
    const postcode = state.postcode;
    return {
        initialValues: {
            postcode: state.postcode
        }
    };
}

const PostcodeReduxForm = reduxForm({
    form: 'postcode'
})(PostcodeForm);

export default connect(mapStateToProps)(PostcodeReduxForm);
