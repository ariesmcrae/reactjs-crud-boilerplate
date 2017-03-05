import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import toastr from 'toastr';
import CourseForm from './CourseForm';
import * as courseAction from '../../action/CourseAction';
import * as authorAction from '../../action/AuthorAction';
import {authorsFormattedForDropdown} from '../../selectors/selectors';


// lifecycle:
//      1. mapStateToProps
//      2. mapDispatchToProps
//      3. constructor

export class AddOrEditCourseContainer extends React.Component {
    constructor(props) {
        super(props);

        //get props.course that was set by mapStateToProps
        this.state = {
            course: Object.assign({}, props.course),
            errors: {},
            isSaving: false
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }



    componentDidMount() {
        this.props.action.getAuthorsAction()
            .catch(error => {
                toastr.error(error);
            });
    }



    componentWillReceiveProps(nextProps) {
        if (this.props.course.id != nextProps.course.id) {
            this.setState({course: Object.assign({}, nextProps.course)});
        }
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

        const isCourseFormValid = this.isCourseFormValid();

        if (!isCourseFormValid) {
            return;
        }

        this.setState({isSaving: true});                

        this.props.action.saveCourseAction(this.state.course)
            .then(() => {
                this.setState({isSaving: false});                                
                toastr.success('Course saved');
                this.redirect();
            }).catch(error => {
                this.setState({isSaving: false});                
                toastr.error(error);
            });
    }



    isCourseFormValid() {
        let formIsValid = false;

        let errors = {};

        if (this.state.course.title.length < 5) {
            errors.title = 'Title must be at least 5 characters.';
        }

        if (_.isEmpty(errors)) {
            //error is empty, therefore form is valid.
            formIsValid = true;
        } else {
            this.setState({errors: errors});            
        }

        return formIsValid;
    }



    redirect() {
        this.context.router.push('/courses');
    }



    render() {
        if (!this.props.authors) {
            return (
                <div>Loading...</div>
            );
        }

        const heading = this.props.course.id ? 'Edit' : 'Add';

        return(
            <div>
                <CourseForm 
                    heading={heading}
                    course={this.state.course}
                    authors={this.props.authors}
                    errors={this.state.errors}                    
                    onChange={this.updateCourseState}
                    onSave={this.saveCourse}
                    isSaving={this.state.isSaving}
                />
            </div>                
        );
    }
}



AddOrEditCourseContainer.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array,
    action: PropTypes.object.isRequired
};


//Pull in the React Router context so router is available on this.context.router.
AddOrEditCourseContainer.contextTypes = {
    router: PropTypes.object
};



function mapStateToProps(state, ownProps) {
    const courseId = ownProps.match.params.id; //from the path '/course/:id'

    let course = null;

    if (courseId && state.courseReducer.courses.length > 0) {
        //for 'edit'.
        course = getCourseById(state.courseReducer.courses, courseId);
    } else {
        //essential during 'add'.
        course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};        
    }

    return {
        course: course,
        authors: authorsFormattedForDropdown(state.authorReducer.authors)
    };
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


export default connect(mapStateToProps, mapDispatchToProps)(AddOrEditCourseContainer);



