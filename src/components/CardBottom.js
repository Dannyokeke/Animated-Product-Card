import React, {useState} from 'react'
import { Badge, CBottom, CBottomTitle, Sizes, Stars, Title, SizeTitle, Size, ColorTitle, Colors, Price} from '../Style'


const CardBottom = ({currentColor, setCurrentColor}) => {
  
const [greenBackground, setGreenBackground] = useState(false)
const heTouchedMe = () =>{ setGreenBackground(!greenBackground)
  }

  
    return (
    <CBottom> 
        <CBottomTitle>Air Jordan</CBottomTitle>
        <Badge> New </Badge>
        <Title> Summer Collection</Title>
        <Stars>
            <i class='fa-solid fa-star'></i>
            <i class='fa-solid fa-star'></i>
            <i class='fa-solid fa-star'></i>
            <i class='fa-solid fa-star'></i>
            <i class='fa-solid fa-star'></i>
        </Stars>
        <Size>
            <SizeTitle>Size</SizeTitle>
             <Sizes>
                <span onClick={heTouchedMe} className={greenBackground? 'green' : 'white'}>7</span>
                <span onClick={heTouchedMe} className={greenBackground? 'green' : 'white'}>8</span>
                <span onClick={heTouchedMe} className={greenBackground? 'green' : 'white'}>9</span>
                <span onClick={heTouchedMe} className={greenBackground? 'green' : 'white'}>10</span>
                <span onClick={heTouchedMe} className={greenBackground? 'green' : 'white'}>11</span>
             </Sizes>
        </Size>
        <div className='color'>
            <ColorTitle>Color</ColorTitle>
            <Colors>
            <div className='color-1' onClick={() => setCurrentColor(1)}></div>
            <div className='color-2' onClick={() => setCurrentColor(2)}></div>
            </Colors>
        </div>

        <Price currentColor={currentColor}>
            <span>Usd</span>
            <span>350.00</span>

        </Price>
    </CBottom>
  )
}

export default CardBottom;