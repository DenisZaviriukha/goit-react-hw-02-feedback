import PropTypes from 'prop-types';
import {StatsContainer, StatsData} from './Stats.styled'

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => { 
    return (
        <StatsContainer>
            <StatsData>Good:{good}</StatsData>
            <StatsData>Neutral:{neutral}</StatsData>
            <StatsData>Bad:{bad}</StatsData>
            <StatsData>Total:{total}</StatsData>
            <StatsData>Positive feedback:{positivePercentage}</StatsData>
        </StatsContainer>
    )
}