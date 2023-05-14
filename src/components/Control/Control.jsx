import PropTypes from 'prop-types';  
import {ControlContainer, ControlHeader, ControlBtn} from './Control.styled'

export const FeedbackOptions = ({options, onFeedback}) => { 
    return (
        <ControlContainer>
            <ControlHeader></ControlHeader>
            <ControlBtn onClick={() => onFeedback(options[0])}>{options[0]}</ControlBtn>
            <ControlBtn onClick={() => onFeedback(options[1])}>{options[1]}</ControlBtn>
            <ControlBtn onClick={() => onFeedback(options[2])}>{options[2]}</ControlBtn>
        </ControlContainer>
    )
}