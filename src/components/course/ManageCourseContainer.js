import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';



class ManageCourseContainer extends React.Component {
    render() {
        return(
            <div>ManageCoursesContainer</div>
        );
    }
}



function mapStateToProps(state) {
    return { state: state};
}


// function mapDispatchToProps(dispatch) {

// }


export default connect(mapStateToProps)(ManageCourseContainer);