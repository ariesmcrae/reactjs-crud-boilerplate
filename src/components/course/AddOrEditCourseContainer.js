import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseForm from './CourseForm';
import {saveCourseAction} from '../../action/CourseAction';



class AddOrEditCourseContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            course: Object.assign({}, props.course),
            errors: {}
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }



    //Updates the this.state.course in memory
    updateCourseState(event) {
        const fieldBeingUpdate = event.target.name;
        console.log('xxxxxfieldBeingUpdate=');
        let {course} = this.props;
        course[fieldBeingUpdate] = event.target.value;
        return this.setState({course: course});
    }


    saveCourse(event) {
        event.preventDefault();

        if (!this.isCourseFormValid) {
            return;
        }

        this.props.saveCourseAction(this.state.course)
            .then(() => this.redirect())
            .catch(error => {
                throw(error);
            });
    }

    

    isCourseFormValid() {
        let formIsValid = true;

        let errors = {};

        if (this.state.course.title < 5) {
            errors.title = 'Title must be at least 5 characters';
            formIsValid = false;
        }

        if (!formIsValid) {
            this.setState({errors: errors});
        } 

        return formIsValid;
    }



    redirect() {
        this.context.router.push('/courses');
    }



    render() {
        const heading = this.props.course.id ? 'Edit' : 'Add';

        return(
            <div>
                <CourseForm 
                    heading={heading}
                    course={this.state.course}
                    onChange={this.updateCourseState}
                    onSave={this.saveCourse}
                    errors={this.state.errors}
                />
            </div>                
        );
    }
}



AddOrEditCourseContainer.propTypes = {
    course: PropTypes.object.isRequired,
    saveCourseAction: PropTypes.func.isRequired
};


AddOrEditCourseContainer.contextTypes = {
    router: PropTypes.object
};


function mapStateToProps(state) {
    const course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

    return {course: course};
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({saveCourseAction}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AddOrEditCourseContainer);