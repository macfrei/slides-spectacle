import React from 'react';
import { Deck, Slide, Heading } from 'spectacle';

const theme = {
  colors: {
    primary: "yellow",
    scondary: "green" ,
  }
}

export default function FirstSlide() {
    return (
        <Deck theme={theme}>
          <Slide backgroundColor="primary">
            <Heading>Welcome to Week One!</Heading>
          </Slide>
          <Slide backgroundColor="scondary">
            <Heading>Welcome to Spectacle</Heading>
          </Slide>
        </Deck>
      );
}