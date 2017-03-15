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
        return(
            <div className="container">
                <CourseForm2 
                    heading={'Add'}
                    authors={this.props.authors}                    
                    handleSave={this.handleSave}
                />
            </div> 
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        authors: authorsFormattedForDropdown(state.authorReducer.authors)
    };
}


function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators({...authorAction, ...courseAction}, dispatch)
    };
}


AddCourseContainer.propTypes = {
    action: PropTypes.object.isRequired,
    history: PropTypes.object,
    authors: PropTypes.array    
};



export default connect(mapStateToProps, mapDispatchToProps)(AddCourseContainer);
