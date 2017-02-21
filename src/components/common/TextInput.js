import React, {PropTypes} from 'react';

export default function TextInput({name, label, placeholder, value, onChange, error}) {
    let formGroup = 'form-group';

    if (error && error.length > 0) {
        formGroup = `${formGroup} has-error`;
    }


    return(
        <div className={formGroup}>
            <div htmlFor={name}>{label}</div>
            <div className="field">
                <input
                    type="text"
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
}


TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
};