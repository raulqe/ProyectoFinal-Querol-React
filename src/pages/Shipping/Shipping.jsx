import React from 'react'
import { TitleSection } from '../../components/TitleSection/TitleSection';
import logo1 from '../../images/logo1.png';
import { ShippingSection } from '../../components/ShippingSection/ShippingSection';

export const Shipping = () => {
  return (
    <>
     <TitleSection mesage={"Shipping"} logo={logo1} />
     <ShippingSection/>
    </>
    
  )
}
