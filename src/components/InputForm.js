import React, {useState} from 'react'
import PropTypes from 'prop-types'


const formatTime = (seconds) => {
	const minutes = Math.floor(seconds / 60) % 60;
	const secondsLeft = seconds % 60;
	const hours = Math.floor(minutes / 3600);

	if (hours > 0) {
		return `${hours} hours ${minutes} minutes ${secondsLeft} seconds`;
	} else if (minutes > 0) {
		return `${minutes} minutes ${secondsLeft} seconds`;
	} else {
		return `${secondsLeft} seconds`;
	}
}

const getTextSummary = (text) => {
	const words = text.split(' ');
	const wordCount = text ? words.length : 0;
	const characterCount = text.length;
	const timeToRead = formatTime(Math.ceil(wordCount * 0.2));
	return {
		wordCount,
		characterCount,
		timeToRead
	}
}

const invertCase = (text) => {
	return text.split('').map((char) => {
		if (char === char.toUpperCase()) {
			return char.toLowerCase();
		} else {
			return char.toUpperCase();
		}
	}).join('');
}

export default function InputForm(props) {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState(getTextSummary(text));

  const handleUpClick = () => {
	setText(text.toUpperCase());
	setSummary(getTextSummary(text));
	props.showAlert('Text converted to uppercase', 'success');
  };

  const handleLowClick = () => {
	setText(text.toLowerCase());
	setSummary(getTextSummary(text));
	props.showAlert('Text converted to lowercase', 'success');
  };

  const handleInvertClick = () => {
	setText(invertCase(text));
	setSummary(getTextSummary(text));
	props.showAlert('Text case inverted', 'success');
  }

  const handleClearClick = () => {
	setText('');
	setSummary(getTextSummary(''));
	props.showAlert('Text cleared', 'success');
  };

  const handleCopyClick = () => {
	navigator.clipboard.writeText(text);
	props.showAlert('Text copied to clipboard', 'success');
  }

  const handleOnChange = (event) => {
	setText(event.target.value);
	setSummary(getTextSummary(event.target.value));
  };


  const getTextAreaStyle = (mode) => {
	return {
		backgroundColor: mode === 'light' ? 'white' : 'rgb(90,90,90)',
		color: mode === 'light' ? 'black' : 'white',
		'::placeholder': {
			color: mode === 'light' ? 'black' : 'white'
		},
	}
  };

  const getPlaceholderStyle = (mode) => {
	return mode === 'light' ? 'textarea-light' : 'textarea-dark';
  }

  return (
	<>
	  <div className="container">
		  <h1>{props.heading}</h1>
		  <div className="mb-3">
			<textarea className={`form-control ${getPlaceholderStyle(props.mode)}`}
					value={text} onChange={handleOnChange}
					id="myBox" rows="8"
					placeholder='Enter text here' style={getTextAreaStyle(props.mode)}></textarea>
		  </div>
		  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
		  <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
		  <button className="btn btn-primary mx-2" onClick={handleInvertClick}>Invert Case</button>
		  <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy to Clipboard</button>
		  <button className="btn btn-outline-danger mx-2" onClick={handleClearClick}>Clear Text</button>
	  </div>
	  <div className="container my-3">
		<h3>Text Summary</h3>
		<p>{summary.wordCount} words, {summary.characterCount} characters</p>
		<p>Estimated Read Time: {summary.timeToRead}</p>
		<h3>Preview</h3>
		<p>{text.length === 0 ? 'Nothing to preview' : text}</p>
	  </div>
	</>
  );
}

InputForm.propTypes = {
	heading: PropTypes.string.isRequired,
	showAlert: PropTypes.func.isRequired,
	mode: PropTypes.string.isRequired
}

InputForm.defaultProps = {
	heading: 'Set heading here'
}
