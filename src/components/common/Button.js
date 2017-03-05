import React, {PropTypes} from 'react';
import {withRouter} from 'react-router-dom';



class Button extends React.Component {

    render() {
        //note: history is injected into this.props by withRouter
        const {history, className, value, goToPath} = this.props;

        return(
            <button 
                type="button"
                className={className}
                onClick={() => {history.push(goToPath);}} //eslint-disable-line react/jsx-no-bind
            >
                {value}
            </button>            
        );
    }
}



Button.propTypes = {
    history: PropTypes.object.isRequired,
    className: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    goToPath: PropTypes.string.isRequired,
};



export default withRouter(Button);
