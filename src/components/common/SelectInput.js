import React, {PropTypes} from 'react';


const SelectInput = ({input, name, label, defaultOption, options, meta: {touched, error, warning}}) => {

    return(
        <div className="form-group">
            <div htmlFor={name}>{label}</div>
            <div className="field">
                <select
                    {...input}
                    name={name}
                    className="form-control"
                >
                    <option>{defaultOption}</option>
                    {
                        options.map(option => {
                            return <option key={option.value} value={option.value}>{option.text}</option>;
                        })
                    }
                </select>

                    {touched && ((error && <p className="text-danger">{error}</p>) || (warning && <p className="text-danger">{warning}</p>))}

            </div>
        </div>
    );
};



SelectInput.propTypes = {
    input: PropTypes.object.isRequired,
    name: PropTypes.string,    
    label: PropTypes.string.isRequired,
    defaultOption: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
    meta: PropTypes.object.isRequired
};


export default SelectInput;