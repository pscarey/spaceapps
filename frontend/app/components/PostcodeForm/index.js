import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { setPostcode } from '../../actions/postcode';
import { getRecipes } from '../../actions/recipes';
import { browserHistory } from 'react-router';
import Card from 'material-ui/Card';

class PostcodeForm extends Component {
    constructor(props) {
        super(props)
        this.onPostcodeSubmit = this.onPostcodeSubmit.bind(this);
    }

    onPostcodeSubmit(values) {
        console.log(values.postcode);
        this.props.dispatch(setPostcode(values.postcode));
        this.props.dispatch(getRecipes(values.postcode));
        browserHistory.push('/recipes');
    };
    
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props
        return (
            <div style={{width: '100%', textAlign: 'center'}}>
                <Card style={{height:140, width: 200, margin: 'auto'}}>
                    <form onSubmit={handleSubmit(this.onPostcodeSubmit)} autoComplete="off">
                        <div style={{textAlign: 'center', display: 'block'}}>
                            <Field 
                                name="postcode"
                                component={TextField}
                                hintText="2000"
                                floatingLabelFixed
                                floatingLabelText="Your Postcode" 
                                style={{width: 160, marginRight: 15, marginBottom: 20}}
                            /><br />
                            <RaisedButton
                                primary
                                disabled={pristine || submitting}
                                label="Show Recipes"
                                type="submit"
                                style={{width: 160, position: 'relative', top: -10}}
                            />
                        </div>
                    </form>
                </Card>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const postcode = state.postcode;
    return {
        initialValues: {
            postcode: undefined
        }
    };
}

const PostcodeReduxForm = reduxForm({
    form: 'postcode'
})(PostcodeForm);

export default connect(mapStateToProps)(PostcodeReduxForm);
