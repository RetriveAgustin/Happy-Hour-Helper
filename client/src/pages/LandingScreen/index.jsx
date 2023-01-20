import React from 'react'
import { ImageBackground, Background } from './index.styles';

import { Header } from '../../components/Header';
import { SectionContainer } from '../../components/SectionContainer';
import { Footer } from '../../components/Footer';

export const LandingScreen = () => {
  return (
    <Background>
      <Header />
      <ImageBackground>
        <h1>Bienvenido a Happy Hour Helper</h1>
      </ImageBackground>
      <SectionContainer />
      <SectionContainer />
      <SectionContainer />
      <Footer />
    </Background>
  )
};
