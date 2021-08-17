import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';

function FAQ(props) {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Accordion expanded={expanded === props.index} onChange={handleChange(props.index)}>
            <AccordionSummary
                expandIcon={expanded === props.index ? <RemoveIcon />:<AddIcon/>}
            >
                <h5>{props.faqQuestion}</h5>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{props.faqAnswer}</Typography>
            </AccordionDetails>
        </Accordion>
    );
}

export default FAQ;