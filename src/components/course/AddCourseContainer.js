import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import * as courseAction from '../../action/CourseAction';
import * as authorAction from '../../action/AuthorAction';
import CourseForm2 from './CourseForm2';
import {authorsFormattedForDropdown} from '../../selectors/selectors';


export class AddCourseContainer extends React.Component {

    constructor() {
        super();
        this.handleSave = this.handleSave.bind(this);
    }


    componentDidMount() {
        this.props.action.getAuthorsAction()
            .catch(error => {
                toastr.error(error);
            });
    }



    handleSave(values) {
        const course = {
            id: values.id,
            title: values.title,
            authorId: values.authorId,
            category: values.category,
            length: values.length
        };

        this.props.action.saveCourseAction(course)
            .then(() => {
                toastr.success('Course saved');
                this.props.history.push('/courses');
            }).catch(error => {
                toastr.error(error);
            });     
    }


    
    render() {
        const {initialValues} = this.props;
        const heading = initialValues && initialValues.id ? 'Edit' : 'Add';

        return(
            <div className="container">
                <CourseForm2 
                    heading={heading}
                    authors={this.props.authors}                    
                    handleSave={this.handleSave}
                    initialValues={this.props.initialValues}
                />
            </div> 
        );
    }
}



function mapStateToProps(state, ownProps) {
    const courseId = ownProps.match.params.id; //from the path '/course/:id'

    if (courseId && state.courseReducer.courses.length > 0) {
        const course = getCourseById(state.courseReducer.courses, courseId);

        return {
            initialValues: course,
            authors: authorsFormattedForDropdown(state.authorReducer.authors)
        };
    } else {
        return {
            authors: authorsFormattedForDropdown(state.authorReducer.authors)
        };
    }
}



function getCourseById(courses, courseId) {
    const course = courses.filter(course => course.id == courseId); //since filter returns an array, have to grab the first.

    if (course) {
        return course[0];
    } else {
        return null;
    }
}


function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators({...authorAction, ...courseAction}, dispatch)
    };
}


AddCourseContainer.propTypes = {
    action: PropTypes.object.isRequired,
    history: PropTypes.object,
    authors: PropTypes.array,
    initialValues: PropTypes.object
};



export default connect(mapStateToProps, mapDispatchToProps)(AddCourseContainer);
