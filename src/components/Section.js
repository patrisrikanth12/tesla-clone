import React from 'react'
import styled from 'styled-components';

function Section({title, description, leftButtonText, rightButtonText, bgImage}) {

  return (
    <Wrap bgImage={bgImage}>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        <Buttons>
        <ButtonGroup>
            <LeftButton>
                {leftButtonText}
            </LeftButton>
            {
                (rightButtonText) && <RightButton>
                                        {rightButtonText}
                                    </RightButton>
            }
        </ButtonGroup>
        <DownArrow src="images/down-arrow.svg"/>
        </Buttons>
    </Wrap>
  )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${(props) => `url(images/${props.bgImage})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ItemText = styled.div`
    text-align: center;
    padding-top: 15vh;
`

const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    margin-bottom: 30px;
    gap: 16px;

    @media (max-width: 786px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width:  256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.8;
`

const DownArrow = styled.img`
    height: 40px;
    margin-botton: 10px;
    animation: animateDown infinite 1.5s;
`
const Buttons  =styled.div`
    display: flex;
    flex-direction: column;
    aligh-items: center;
`
export default Section;
