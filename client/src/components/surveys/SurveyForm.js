// Survey form shows input form
import React,{Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import SurveyField from './SurveyField'
import _ from 'lodash';
import {Link} from "react-router-dom";
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';
class SurveyForm extends Component{
    renderFields(){
        return _.map(formFields, ({label, name}) => {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
        });
    }
    render(){
        return(
         <div> 
            <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                {this.renderFields()}
                <button className="teal btn-flat right white-text" type="submit">
                  Continue
                <i className="material-icons right">done</i>
                </button>
                 <Link to="/surveys" className="red btn-flat left white-text">
                  Cancel
                <i className="material-icons right">cancel</i>
                </Link>
            </form>
         </div>
        );
    }
}

function validate(values){
    const errors = {};
     //will automatically sends it to its place
     errors.recipients = validateEmails(values.recipients || ' ');

    _.each(formFields, ({name, noValueError})=> {
        if(!values[name]){
            errors[name]= noValueError;
        }
    });

    return errors;
} //read documentation, redux form checks for errors

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false  //doesn't clear when you flip back
})(SurveyForm); //reduxForm has many built in function