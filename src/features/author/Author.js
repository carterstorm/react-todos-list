import React from "react";
import { Section } from "../../common/Section";
import { Container } from "../../common/Container";


export const AuthorPage = () => (
    <Container>
        <h1>About author</h1>
        <Section
            title={`Sebastian Komorowski`}
            body={
                <>
                    <p> Hi, I'm Sebastian. I live in Warsaw. I have been learning Frontend technology
                        for some time and... it gives me a lot of pleasure. In the nearest future I would like
                        to work as a Junior Frontend Developer with React.🤙
                    </p>
                    <p>
                        My biggest passion is traveling. I like the most these spontaneous trips on Friday afternoons.
                        In my spare time, I like to ride a bike, walk in parks, play bowling and from time to time go to the theater. 🛫 🚲 🌳 🎳 🎭
                    </p>
                    <p>
                        I like to fix different kind of things. I'm a born handyman, so in the future, I would
                        like to build a small wooden house only by my own hands! 🏠
                    </p>
                </>
            }
        />
    </Container>
);