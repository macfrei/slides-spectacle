import React from 'react';
import { Deck, Slide, Heading } from 'spectacle';

const theme = {
  colors: {
    primary: "yellow",
    scondary: "green" ,
  }
}

export default function SecondSlide() {
    return (
        <Deck theme={theme}>
          <Slide backgroundColor="hotpink">
            <Heading>Welcome to Week Two</Heading>
          </Slide>
          <Slide backgroundColor="blue">
            <Heading>Welcome to Spectacle</Heading>
          </Slide>
        </Deck>
      );
}