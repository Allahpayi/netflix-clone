import React from "react";
import { Accordion } from '../components';
import OptForm from "../components/opt-form";
import useContent from "../hooks/use-content";

export function FaqsContainer() {
    const faqs = useContent('fags');
    const faqsData = faqs.fags.length > 0 ? faqs.fags : []
    console.log(faqsData)
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsData && faqsData.map(item => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            <OptForm>
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button>Get Started</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>
                    Ready to watch? Enter your email to create or restart your membership.
                </OptForm.Text>
            </OptForm>
        </Accordion>
    )
}