import React from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import ShopByStyle from '../components/ShopByStyle';
import RingBuilder from '../components/RingBuilder';
import Deals from '../components/Deals';
import PriceAdvantage from '../components/PriceAdvantage';
import DepositDelivery from '../components/DepositDelivery';
import CustomJewellery from '../components/CustomJewellery';
import Reviews from '../components/Reviews';
import LooseDiamonds from '../components/LooseDiamonds';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <ShopByStyle />
      <RingBuilder />
      <Deals />
      <PriceAdvantage />
      <LooseDiamonds />
      <DepositDelivery />
      <CustomJewellery />
      <Reviews />
    </main>
  );
}
