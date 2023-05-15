import PropTypes from 'prop-types';

export const FeedbackOptions = ({options, onFeedback}) => { 
    return (
        <div>
            <button onClick={() => onFeedback(options[0])}>{options[0]}</button>
            <button onClick={() => onFeedback(options[1])}>{options[1]}</button>
            <button onClick={() => onFeedback(options[2])}>{options[2]}</button>
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired
}