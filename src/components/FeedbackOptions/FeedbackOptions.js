import Button from '@material-ui/core/Button';


const FeedbackOptions = ({onLeaveFeedback}) => {
    
    return (
        <div>
            <Button variant="contained" type="button" name="good" onClick={onLeaveFeedback} style={{backgroundColor: "green", marginRight: "10px"}}>Good</Button>
            <Button variant="contained" type="button" name="neutral" onClick={onLeaveFeedback} style={{backgroundColor: "yellow", marginRight: "10px"}}>Neutral</Button>
            <Button variant="contained" type="button" name="bad" onClick={onLeaveFeedback} style={{backgroundColor: "red"}}>Bad</Button>
        </div>
    );
}

export default FeedbackOptions;