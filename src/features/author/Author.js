import React from "react";
import { Section } from "../../common/Section";
import { Container } from "../../common/Container";


export const Author = () => (
    <Container>
        <h1>About author</h1>
        <Section
            title={`Sebastian Komorowski`}
            body={
                <>Example tasks</>
            }
        />
    </Container>
);