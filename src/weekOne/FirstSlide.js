import React from 'react';
import { Deck, Slide, Heading } from 'spectacle';
import theme from '../components/theme.json'
import {Link} from 'react-router-dom'

export default function FirstSlide() {
    return (
        <Deck theme={theme}>
          <Slide backgroundColor="nfblue">
            <Heading>Welcome to Week One!</Heading>
            <Link to="/">Link</Link>
          </Slide>
          <Slide backgroundColor="nforange">
            <Heading>Welcome to Spectacle</Heading>
          </Slide>
        </Deck>
      );
}