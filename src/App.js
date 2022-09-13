import React, { useState } from 'react';
import { Card, CardWrapper, Container, CTop, CTopText, CTopTitle, Description, Logo, Wrapper, Shoes, ShoeOne, ShoeTwo,} from './Style';
import Brand from './assets/nike_logo.png';
import Shoe_1 from './assets/shoe_1.png';
import Shoe_2 from './assets/shoe_2.png';
import CardBottom from './components/CardBottom';
import { useMotionValue, useTransform } from 'framer-motion';

const App = () => {
  const[currentColor,setCurrentColor]= useState(1);

  const x =useMotionValue(0);
  const y =useMotionValue(0);

  const rotateX = useTransform(y,[-100,100],[30,-30]);
  const rotateY = useTransform(x,[-100,100],[30,-30]);

  //shoe animate
  const variants = {
    default: {
      translateX:0,
      rotateZ:0,
    },

    firstShoeAnimation: {
      translateX: -700,
      rotateZ: -90,
    },

    secondShoeAnimation: {
      translateX: -700,
      rotateZ: -90,
    },
  };  

  return (
      <Wrapper>
        <Container>
          <CardWrapper style={{ x,y, rotateX, rotateY, z:100 }} drag dragConstraints={{top:0,bottom:0, right:0, left:0}} dragElastic={0.16} whileTap={{ cursor: 'grabbing'}}>
            <Card>
              <CTop currentColor={currentColor}>
                <Logo src={Brand} alt='logo'/>
                <Shoes style={{ x,y,rotateX,rotateY,z:10000}}>
                  <ShoeOne src={Shoe_1} alt='shoe-1' animate={currentColor ===2 ? variants.firstShoeAnimation : variants.default} variants={variants} />
                  <ShoeTwo src={Shoe_2} alt='shoe-2' animate={currentColor ===1 ? variants.secondShoeAnimation : variants.default} variants={variants}/>
                </Shoes>
                <CTopText>
                  <CTopTitle>Nike Air Jordan</CTopTitle>
                  <Description>
                  Air Jordan is a line of basketball shoes and athletic clothing produced by American corporation Nike.
                  </Description>
                </CTopText>
                
              </CTop>
              <CardBottom
                currentColor={currentColor}
                setCurrentColor={setCurrentColor}
                />
            </Card>
          </CardWrapper>
        </Container>

      </Wrapper>
  );
}

export default App