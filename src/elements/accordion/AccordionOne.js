import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';

const AccordionOne = ({customStyle}) => {
    return (
        <Accordion className={`rn-accordion-style ${customStyle}`} defaultActiveKey="none">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    When will minting begin?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Release Date: October 24, 6:00 PM EST</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    How can I get a Bubbly Booty?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Bubbly Booties will be available for minting on our website.<br /> At the time of purchase, a randomly selected Bubbly Booty will be minted on the blockchain and delivered to your wallet and OpenSea account.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    How do I actually purchase a Bubbly Booty?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>The easiest way is to install a MetaMask extension in your browser and link your crypto wallet to it.<br /> Ensure you have enough ETH in your wallet to cover the cost of a Bubbly Booty plus the associated gas fees.<br /> Approve the desired transaction on MetaMask and you are all set.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    What will be the price of a Bubbly Booty?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>The pricing model is flat rate throughout the entire sale. <br />No FOMO curve or escalating prices.<br /> The cost of each Bubbly Booty is set at 0.069 ETH.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                    How many Bubbly Booties can I purchase in one transaction?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                    <Card.Body>There is a limit of 20 (subject to change) Bubbly Booties that can be purchased in 1 transaction and you can hold no more than 20 per wallet.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                    When will my Bubbly Booty be revealed?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                    <Card.Body>All Bubbly Booties will be revealed 24 hours after start of sale.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="6">
                    How do I contact the team?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="6">
                    <Card.Body>Jump into our <a href="https://discord.gg/5VBwRHZeRa" target="_blank"><u>Discord</u>.</a> All direct communication will happen there or on <a href="https://twitter.com/bubblybooties" target="_blank"><u>Twitter</u></a>.</Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>
    )
}
export default AccordionOne

