import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';


export default function CourseForm({heading, course, onChange, onSave, errors, onCancel}) {
    return(
         <form>
            <h1>{heading}</h1>
            <TextInput 
                name="title"
                label="Title"
                placeholder="Title of the course"
                value={course.title}
                onChange={onChange}
                error = {errors.title}
            />

            <TextInput 
                name="category"
                label="Category"
                placeholder="Category of the course"
                onChange={onChange}
                error = {errors.category}
            />          

            <TextInput 
                name="lenght"
                label="Length"
                placeholder="Lenght of course in minutes or hours"
                onChange={onChange}
                error = {errors.length}
            />

            <button 
                type="submit" 
                className="btn btn-primary" 
                onClick={onSave}>
                Save
            </button>
            
            <button 
                type="button" 
                className="btn btn-default btn-space"
                onClick={onCancel}>
                Cancel
            </button>
        </form>        
    );
}



CourseForm.propTypes = {
    heading: PropTypes.string.isRequired,
    course: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    errors: PropTypes.object,
    onCancel: PropTypes.func.isRequired
};
