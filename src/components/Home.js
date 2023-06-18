import React from 'react'
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section 
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftButtonText="Custom Delivery"
        rightButtonText="Existing Inventory"
        bgImage="model-s.jpg"
        />
        <Section 
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftButtonText="Custom Delivery"
        rightButtonText="Existing Inventory"
        bgImage="model-x.jpg"
        />
        <Section 
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftButtonText="Custom Delivery"
        rightButtonText="Existing Inventory"
        bgImage="model-y.jpg"
        />
        <Section 
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftButtonText="Custom Delivery"
        rightButtonText="Existing Inventory"
        bgImage="model-3.jpg"
        />
        <Section 
        title="Lowest Cost solar panels in America"
        description="Money-back guarantee"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
        bgImage="solar-panel.jpg"
        />
        <Section 
        title="Solar For New Roofs"
        description="Solar roof costs less than roof plus solar panels"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
        bgImage="solar-roof.jpg"
        />

        <Section 
        title="Accessories"
        description=""
        leftButtonText="Shop Now"
        bgImage="accessories.jpg"
        />

    </Container>
  )
}

const Container = styled.div`
    height: 100vh;
`

export default Home;
