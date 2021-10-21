import React, { useState } from 'react';

// Děláš počítadlo, kde jde tlačítky zvětšovat nebo zmenšovat hodnota.

// Zadání 1:
// Z proměnné `cislo` udělej stavovou proměnnou.
// Nezapomeň na všechno, co musíš udělat, když chceš použít useState.

// Zadání 2:
// Nastav, aby jednotlivá tlačítka měnila stav `cislo`
// Tlačíítko +1 aby přičítalo jedničku, +5 přičítalo pětku,
// tlačítko Vynulovat nastavovalo číslo na nulu apod.

const Pocitadlo = () => {

  const [cislo, setCislo] = useState(0);

  const handleClickM5 = () => setCislo(cislo - 5);
  const handleClickM1 = () => setCislo(cislo - 1);
  const handleClick = () => setCislo(0);
  const handleClickP1 = () => setCislo(cislo + 1);
  const handleClickP5 = () => setCislo(cislo + 5);


	return (
		<>
			<h3>Počítadlo: {cislo}</h3>
			<button onClick={handleClickM5}>-5</button>
			<button onClick={handleClickM1}>-1</button>
			<button onClick={handleClick}>Vynulovat</button>
			<button onClick={handleClickP1}>+1</button>
			<button onClick={handleClickP5}>+5</button>
		</>
	)
}

const Uloha2 = () => {
	return (
		<>
			<Pocitadlo />
			<Pocitadlo />
		</>
	)
}

export default Uloha2;