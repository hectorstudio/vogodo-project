import React from "react";
import "./AdditionalContainer.style.scss";
import Breadcrumbs from "../components/Breadcrumbs";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/ExpansionPanel';
import AccordionSummary from '@material-ui/core/ExpansionPanelSummary';
import AccordionDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const FAQContainer = () => {
  const classes = useStyles();
  return (
    <div className="additional-container">
      <Breadcrumbs parent="Home" child="FAQs" />
      <div className={`additional-content ${classes.root}`}>
        <h1>FAQs</h1>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}><b>1. What is Selldealsnow.com?</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We provide exclusive access to off market deals throughout the United States.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}><b>2. Can I list unlimited properties?</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, you can list as many as you want with your monthly subscription.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}><b>3. If I like a property, how can I contact the seller/investor/broker?</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Their contact info will be on the listing.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}><b>4. Can I cancel my membership at anytime?</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, you can cancel at any time.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}><b>5. Are these deals public?</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                No, we check on the properties to make sure they are not public and if
              they are, the member would be in violation and their account can be
              suspended.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}><b>6. Can I list deals if I am a broker/ realtor/ or investor?</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                Yes, as long as you have an agreement with the seller that states that
              you have the right to market it.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQContainer;
