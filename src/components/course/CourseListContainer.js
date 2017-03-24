import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as courseAction from '../../action/CourseAction';
import CourseList from './CourseList';



export class CourseListContainer extends React.Component {

    constructor() {
        super();
        this.handleAddCourse = this.handleAddCourse.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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


    handleDelete(event) {
        this.props.action.deleteCourseAction(event.target.getAttribute('value'))
            .catch(error => {
                toastr.error(error);
            });
    }



    render() {
        const { courses } = this.props;

        if (!courses) {
            return (
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

                <CourseList courses={courses} handleDelete={this.handleDelete} />
            </div>
        );
    }
}



const mapStateToProps = state => ({
    courses: state.coursesReducer.courses
});



const mapDispatchToProps = dispatch => ({
    action: bindActionCreators(courseAction, dispatch)

});



CourseListContainer.propTypes = {
    courses: PropTypes.array,
    action: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};



export default connect(mapStateToProps, mapDispatchToProps)(CourseListContainer);
