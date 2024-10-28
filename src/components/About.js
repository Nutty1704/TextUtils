import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'


const lightCSS = {
    color: 'black',
    backgroundColor: 'white',
};

const darkCSS = {
    color: 'white',
    backgroundColor: '#282c34',
};

const getStyle = (mode) => {
    return mode === 'light' ? lightCSS : darkCSS;
}

export default function About(props) {

    const [myStyle, setMyStyle] = useState(getStyle(props.mode));

    useEffect(() => {
        setMyStyle(getStyle(props.mode));
    }, [props.mode]);

    return (
    <div className="container" style={myStyle}>
        <h1 className='my-3'>About TextUtils</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                    How to Use
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>TextUtils</strong> is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit. It also provides functionalitites like changing the case of the text, copying the text to clipboard, etc.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                    About the Developer
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>TextUtils</strong> has been developed to practice React Library. It is developed by <a href="https://github.com/Nutty1704" target="_blank" rel="noreferrer">Abhijit Upadhyay</a>.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                    More
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    To get the source code of this project, visit <a href="https://github.com/Nutty1704/TextUtils" target="_blank" rel="noreferrer">TextUtils</a>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}


About.propTypes = {
    mode: PropTypes.string.isRequired
}