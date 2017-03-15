import React, {PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form';
import FieldInput from '../common/FieldInput';
import SelectInput2 from '../common/SelectInput2';


class CourseForm2 extends React.Component {

    render() {
        const {handleSubmit, pristine, reset, submitting, heading, authors, handleSave} = this.props;
        //debugger;

        return (
            <form onSubmit={handleSubmit(handleSave)}>
                <h1>{heading}</h1>

                <Field
                    type="text"
                    name="title"
                    label="Title"
                    placeholder="Title of the course"
                    component={FieldInput}
                />

                <Field 
                    name="authorId"
                    label="Author"
                    options={authors}
                    component={SelectInput2}                    
                />                

                <Field 
                    type="text"                    
                    name="category"
                    label="Category"
                    placeholder="Category of the course"
                    component={FieldInput}
                />        

                <Field 
                    type="text"                
                    name="length"
                    label="Length"
                    placeholder="Lenght of course in minutes or hours"
                    component={FieldInput}                    
                />                         

                <div>
                    <button type="submit" disabled={submitting} className="btn btn-primary"><i className="fa fa-paper-plane-o" aria-hidden="true"/> Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default btn-space">Clear Values</button>
                </div>
            </form>
        );
    }
}




const validate = values => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Required';
    }

    if (!values.category) {
        errors.category = 'Required';
    }    

    if (!values.length) {
        errors.length = 'Required';
    }
    
    if (!values.authorId) {
        errors.authorId = 'Required';
    }     

    return errors;
};



CourseForm2.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    heading: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,    
    handleSave: PropTypes.func.isRequired
};



export default reduxForm({
    form: 'CourseForm2',
    validate
})(CourseForm2);
