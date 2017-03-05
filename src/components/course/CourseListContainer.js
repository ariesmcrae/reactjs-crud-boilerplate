import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route} from 'react-router-dom';
import toastr from 'toastr';
import * as courseAction from '../../action/CourseAction';
import CourseList from './CourseList';
import Button from '../common/Button';



export class CourseListContainer extends React.Component {

    componentDidMount() {
        this.props.action.getCoursesAction()
            .catch(error => {
                toastr.error(error);
            });
    }

    

    render() {
        const {courses} = this.props;

        if (!courses) {
            return(
                <div>Loading...</div>
            );
        }

        return (
            <div>
                <h1>Courses</h1>
                
                <br/><br/>

                <Button
                    className={'btn btn-primary'}
                    value={'Add'}
                    goToPath={'/course'}
                />
                
                <br/><br/><br/>
                
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
    courses: PropTypes.array,
    action: PropTypes.object.isRequired
};



export default connect(mapStateToProps, mapDispatchToProps)(CourseListContainer);
