import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';


export default function CourseForm({heading, course, authors, errors, onChange, onSave, onCancel, isSaving}) {
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

            <SelectInput 
                name="authorId"
                label="Author"
                value={course.authorId}
                defaultOption="Select Author"
                options={authors}
                onChange={onChange}
                error={errors.authorId}
            />

            <TextInput 
                name="category"
                label="Category"
                value={course.category}
                placeholder="Category of the course"
                onChange={onChange}
                error={errors.category}
            />          

            <TextInput 
                name="length"
                label="Length"
                value={course.length}
                placeholder="Lenght of course in minutes or hours"
                onChange={onChange}
                error={errors.length}
            />

            <input 
                type="submit" 
                className="btn btn-primary" 
                onClick={onSave}
                value={isSaving ? 'Saving...' : 'Save'}
                disabled={isSaving}
            />
            
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
    heading:    PropTypes.string.isRequired,
    course:     PropTypes.object.isRequired,
    authors:    PropTypes.array.isRequired,
    errors:     PropTypes.object,
    onChange:   PropTypes.func.isRequired,
    onSave:     PropTypes.func.isRequired,
    onCancel:   PropTypes.func.isRequired,
    isSaving:   PropTypes.bool.isRequired
};
