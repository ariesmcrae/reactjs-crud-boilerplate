import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import {getCoursesAction} from '../../action/CourseAction';
import CourseList from './CourseList';

class CourseListContainer extends React.Component {
    // componentDidMount() {
    //     this.props.getCoursesAction();
    // }

    render() {
        // const {courses} = this.props;

        // if (!courses) {
        //     return(
        //         <div></div>
        //     );
        // }
        return(
            <div>
                <h1>Courses</h1>
                <CourseList courses={this.props.courses} />
            </div>            
        );
    }
}



function mapStateToProps(state) {
    return {
        courses: state.courseReducer
    };
}



// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({getCoursesAction}, dispatch);
// }



CourseListContainer.propTypes = {
    courses: PropTypes.array.isRequired
};



export default connect(mapStateToProps)(CourseListContainer);
