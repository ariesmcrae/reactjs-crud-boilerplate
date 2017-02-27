import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseForm from './CourseForm';
import {saveCourseAction} from '../../action/CourseAction';

// lifecycle:
//      1. mapStateToProps
//      2. mapDispatchToProps
//      3. constructor

class AddOrEditCourseContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log('xxxxxxxxxconstructor');
        this.state = {
            course: Object.assign({}, props.course),
            errors: {}
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }



    componentWillReceiveProps(nextProps) {
        console.log('xxxxxxxxxcomponentWillReceiveProps nextProps.course.id=' + nextProps.course.id);
        if (this.props.course.id != nextProps.course.id) {
            this.setState({course: Object.assign({}, nextProps.course)});
        }
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


//Pull in the React Router context so router is available on this.context.router.
AddOrEditCourseContainer.contextTypes = {
    router: PropTypes.object
};



function mapStateToProps(state, ownProps) {
    const courseId = ownProps.params.id; //from the path '/course/:id'
    console.log('xxxxxxxxxxxxxxmapStateToProps courseId = ' + courseId);
    let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

    if (courseId && state.courseReducer.courses.length > 0) {
        course = getCourseById(state.courseReducer.courses, courseId);
        console.log('xxxxxexisting course found. course = ' + course);
    }

    return {course: course};
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
    console.log('xxxxxxxxxxxxxxxxxxmapDispatchToProps');
    return bindActionCreators({saveCourseAction}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AddOrEditCourseContainer);
