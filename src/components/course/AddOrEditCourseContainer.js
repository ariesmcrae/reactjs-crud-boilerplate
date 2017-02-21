import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseForm from './CourseForm';
import {saveCourseAction} from '../../action/CourseAction';



class AddOrEditCourseContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            course: Object.assign({}, props.course)
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }



    //Updates the this.state.course in memory
    updateCourseState(event) {
        const fieldBeingUpdate = event.target.name;
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
        let formIsValid = false;
        let errors = {};

        if (this.state.course.title < 5) {
            errors.title = 'Title must be at least 5 characters';
        }

        if (errors) {
            this.setState({errors: errors});
        } else {
            formIsValid = true;
        }

        return formIsValid;
    }



    redirect() {
        this.context.router.push('/courses');
    }



    render() {
        return(
            <div>
                <h1>Add Course</h1>
                <CourseForm 
                    onChange={this.updateCourseState}
                    onSave={this.saveCourse}
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

    return { course: course};
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({saveCourseAction}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AddOrEditCourseContainer);