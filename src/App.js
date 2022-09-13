import React, { useState } from 'react';
import { Card, CardWrapper, Container, CTop, CTopText, CTopTitle, Description, Logo, Wrapper, Shoes, ShoeOne, ShoeTwo, ShoeThree} from './Style';
import Brand from './assets/nike_logo.png';
import Shoe_1 from './assets/shoe_1.png';
import Shoe_2 from './assets/shoe_2.png';
import Shoe_3 from './assets/shoe_3.png';
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
      rotateZ: 45,
    },

    secondShoeAnimation: {
      translateX: -400,
      rotateZ: -45,
    },
  };  

  return (
      <Wrapper>
        <Container>
          <CardWrapper style={{ x,y, rotateX, rotateY, z:100 }} drag dragConstraints={{top:0,bottom:0, right:0, left:0}} dragElastic={0.16} whileTap={{ cursor: 'grabbing'}}>
            <Card>
              <CTop currentColor={currentColor}>
                <Logo src={Brand} alt='logo'/>
                <CTopText>
                  <CTopTitle>React 55</CTopTitle>
                  <Description>
                    The Nike React Element 55 SE is a balanced blend of classic design and forward-looking innovation
                  </Description>
                </CTopText>
                <Shoes style={{ x,y,rotateX,rotateY,z:0}}>
                  <ShoeOne src={Shoe_1} alt='shoe-1' variants={variants} animate={currentColor ===2 ? variants.firstShoeAnimation : variants.default} />
                  <ShoeTwo src={Shoe_2} alt='shoe-2' animate={currentColor ===1 ? variants.secondShoeAnimation : variants.default} variants={variants}/>
                  {/* <ShoeThree src={Shoe_3} alt='shoeThree' /> */}
                </Shoes>
              </CTop>
              <CardBottom
                currentColor={currentColor}
                setCurrentColor={setCurrentColor}/>
            </Card>
          </CardWrapper>
        </Container>

      </Wrapper>
  );
}

export default App