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
            <Typography className={classes.heading}><b>1. Why Should I Choose Sell Deals Now Over Other Real Estate Sites? </b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Being successful in real estate is all about being ahead of the curve. Sell Deals Now focuses on providing high-value real estate that isn’t listed anywhere else. 
You might’ve had a feeling that professional real estate agents know something you don’t. Sell Deals Now allows you to gain the same insight into buying opportunities that top-tier professionals receive through their network. 
If you’re a professional real estate seller or developer, diversifying your sources is always useful. Knowing that you can access a multitude of properties that will attract buyers due to their low cost is a powerful asset. 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}><b>2. What Kinds of People Can Benefit from Sell Deals Now?</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Sell Deals Now is founded on an inclusive philosophy that brings together all of the essential components of the real estate buying and selling market to form a modern, streamlined, and optimized platform. 

Below are the types of people we gear our services toward: 

<li>Agents</li>
<li>Property owners</li>
<li>Landlords</li>
<li>Developers </li>
<li>Brokerages </li>
<li>Real estate investor </li>

Utilizing our platform allows you to leverage off-market and wholesale deals to turn a profit. 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}><b>3. Why Should I Buy from Sell Deals Now?</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            We observed that successful real estate websites such as Zillow allow prospective buyers to browse tons of real estate options.

Instead of just copying and pasting what other real estate websites are doing, we took things one step further and designed a platform that gives buyers plenty of options that are strictly wholesale and off-market deals. 
The result is more bang for your buck. 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}><b>4. Why Should I Sell My Property on Sell Deals Now? </b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            We understand that listing and selling your property can be a stressful process. Our platform utilizes a minimalist nature to guide you through the essential components of listing your property. 

Sell Deals Now subscribers can post as many properties as they wish—a perk that’s invaluable to people in businesses that include house flipping. 

Marketing your property well is half the battle. 

We help you disclose all the essential information buyers need to help you complete a sale while the modern aesthetic of our site helps present your property in the best light possible.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}><b>5. What Should I Ask Myself When Browsing Properties to Buy on Sell Deals Now?</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Have you been pre-approved by your bank to look at properties? Consulting professionals at a banking institution can help you narrow your search by pointing you toward options within your budget. 

Banks can also help outline other costs that will be associated with your property purchase. 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}><b>6. Should I Buy a Home Before Selling?</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            It’s generally good to buy a home before you sell to lessen the pressure of having to house hunt once your property on the market gets sold. It’s preferable to skip out on sale contingency, a term that indicates your purchase offer being linked to the sale of your current home. 
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQContainer;
