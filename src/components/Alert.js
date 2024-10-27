import React from 'react'
import PropTypes from 'prop-types'

export default function Alert(props) {

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <div style={{height: '50px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
            </div>}
        </div>
    )
}


Alert.propTypes = {
    alert: {
        message: PropTypes.string,
        type: PropTypes.string
    },
}
