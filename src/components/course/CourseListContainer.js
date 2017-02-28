import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import {getCoursesAction} from '../../action/CourseAction';
import CourseList from './CourseList';




class CourseListContainer extends React.Component {

    constructor() {
        super();
        this.goToAddOrEditCourse = this.goToAddOrEditCourse.bind(this);
    }



    componentDidMount() {
        this.props.getCoursesAction();
    }



    goToAddOrEditCourse() {
        browserHistory.push('/course');
    }



    render() {
        const {courses} = this.props;

        if (!courses) {
            return(
                <div>Loading...</div>
            );
        }


        return(
            <div>
                <h1>Courses</h1>
                
                <br/><br/>

                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={this.goToAddOrEditCourse}>
                    Add
                </button>
                
                <br/><br/><br/>
                
                <CourseList courses={courses} />
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
    return bindActionCreators({getCoursesAction}, dispatch);
}



CourseListContainer.propTypes = {
    courses: PropTypes.array,
    getCoursesAction: PropTypes.func.isRequired
};



export default connect(mapStateToProps, mapDispatchToProps)(CourseListContainer);
