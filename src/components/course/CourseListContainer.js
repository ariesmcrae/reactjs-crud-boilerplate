import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import * as courseAction from '../../action/CourseAction';
import CourseList from './CourseList';



export class CourseListContainer extends React.Component {

    constructor() {
        super();
        this.handleAddCourse = this.handleAddCourse.bind(this);
    }


    componentDidMount() {
        this.props.action.getCoursesAction()
            .catch(error => {
                toastr.error(error);
            });
    }

    
    handleAddCourse() {
        this.props.history.push('/course');
    }


    render() {
        const {courses} = this.props;

        if (!courses) {
            return(
                <div>Loading...</div>
            );
        }

        return (
            <div className="container">
                <h1>Courses</h1>
                
                

                <button 
                    type="button" 
                    className="btn btn-primary my-5"
                    onClick={this.handleAddCourse}>
                    Add
                </button>
                
             
                
                <CourseList courses={courses}/>
            </div>            
        );
    }
}




function mapStateToProps(state) {
    return {
        courses: state.courseReducer.courses
    };
}



function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(courseAction, dispatch)
    };
}



CourseListContainer.propTypes = {
    courses:    PropTypes.array,
    action:     PropTypes.object.isRequired,
    history:    PropTypes.object.isRequired
};



export default connect(mapStateToProps, mapDispatchToProps)(CourseListContainer);
