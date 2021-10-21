import React, { useState } from 'react';
import './ukol.css';

// Děláš jednoduchou komponentu zobrazující úkoly,
// které jdou označit jako splněné.

// Zadání 1:
// Pomocí `map` vypiš v seznamu `ul` všechny úkoly
// pomocí komponenty `Ukol`.

// Zadání 2:
// V komponentě Ukol si nachystej stavovou proměnnou
// s výchozí hodnotou `false`.
// Klikem na tlačítko ji změň na `true` pro splněný úkol.

// Zadání 3:
// Je-li úkol splněný, nerenderuj tlačítko a k `li` přidej navíc třídu `ukol--splnen`.

const Ukol = ({ nazev }) => {

  const [hotovo, setHotovo] = useState(false);

	return (
		<li className={hotovo ? 'ukol--splnen' : 'ukol'}>
			<span className="ukol__nazev">{nazev}</span>
			<button onClick={()=>setHotovo(true)} className="ukol__akce">splnit</button>
		</li>
	)
}

const Uloha6 = () => {
	const ukoly = ['Zamést', 'Pověsit prádlo', 'Umýt okna', 'Vynést koš']

	return (
    <ul>
      {
        ukoly.map(
          (ukol, index) => <Ukol key={index} nazev={ukol}/>
          )
      }
    </ul>
  )
}

export default Uloha6;
