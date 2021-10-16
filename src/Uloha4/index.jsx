import React, { useState } from 'react';
import './carousel.css';

const obrazky = [
  'https://source.unsplash.com/WLUHO9A_xik/880x500',
  'https://source.unsplash.com/DA1eGglMmlg/880x500',
  'https://source.unsplash.com/kTxL6le0Wgk/880x500',
  'https://source.unsplash.com/7go5UASxmDY/880x500',
  'https://source.unsplash.com/YmATDIFsCmQ/880x500',
];



// Tvoříš jednoduchou galerii, kde se jde klikáním
// na tlačítka přesouvat na další nebo předchozí obrázky.

// Zadání 1:
// Nachystej si adresy obrázků uvedené níže do pole.

/*
Adresy obrázků:
https://source.unsplash.com/WLUHO9A_xik/880x500
https://source.unsplash.com/DA1eGglMmlg/880x500
https://source.unsplash.com/kTxL6le0Wgk/880x500
https://source.unsplash.com/7go5UASxmDY/880x500
https://source.unsplash.com/YmATDIFsCmQ/880x500
*/

// Zadání 2:
// Přidej komponentě stavovou proměnnou, ve které bude index
// právě aktivního obrázku. Na začátku to bude 0.

// Zadání 3:
// Pro `src` v tagu `img` použij adresu z pole pod správným indexem.

// Zadání 4:
// Tlačítky ← a → měň index.

// Bonus:
// Pozor na krajní hodnoty. Pokud dojdeš na konec nebo začátek pole,
// tak už v daném směru neměň index, aby ti neutekl mimo položky v poli.
// Nastav tlačítkům atribut `disabled`, pokud v jejich směru už není
// žádný obrázek.

  

const Uloha4 = () => {
  const [cisloObrazku, setCisloObrazku] = useState(0);
  //const [dalsi, setDalsi] = useState(true);

  const handleClickRight = () => {
    setCisloObrazku(cisloObrazku + 1);
 
  }

  const handleClickLeft = () => {
    setCisloObrazku(cisloObrazku - 1);
   
  }



	return (
		<div className="carousel">
			<button onClick={handleClickLeft} className="carousel__predchozi" aria-label="předchozí" >
				←
			</button>
			<div className="carousel__media">
				<img
					className="carousel__image"
					src={obrazky[cisloObrazku]}
					alt={"Obrázek číslo " + {cisloObrazku}}
				/>
			</div>
			<button onClick={handleClickRight} className="carousel__dalsi" aria-label="další" >
				→
			</button>
		</div>
	)
}

export default Uloha4;