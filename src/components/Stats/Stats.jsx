import PropTypes from 'prop-types';
import {StatsContainer, StatsData, NotificationCont} from './Stats.styled'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    if (total) {
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
    function Notification(p) {
        const message = p.message;
        return <>{message}</>;
    }
    return (
        <NotificationCont>
            <Notification message = "There is no feedback"/>    
        </NotificationCont>
    )
}