import React, { useState } from 'react';

// Tvoříš jednoduchou komponentu, ve které je textové pole,
// do kterého jde psát. V komponentě se bude zobrazovat
// text napsaný do pole a délka textu (počet znaků).

// Zadání 1:
// Pomocí události `change` na vstupním políčku a vlastnosti
// `event.target.value` ukládej do stavu, co uživatel napsal.

// Zadání 2:
// Mezi tagy `<b></b>` vlož napsaný text.

// Zadání 3:
// V dalším odstavci `<p>` zobraz, kolik má text znaků.

// Zadání 4:
// Poslední odstavec zobraz pouze v případě, že je text kratší než 8 znaků.

const ZaverecnyBonus1 = () => {

  const [obsah, setObsah] = useState(null);
  const [pocet, setPocet] = useState(0);

  const handleChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.value.length);
    setObsah(event.target.value);
    setPocet(event.target.value.length);
    if(event.target.value == 0) {
      console.log('Uživatel nenapsal nic.')
    }
    if(pocet >= 7) {
      document.querySelector(".heslo").style.display="none";
    } else {
      document.querySelector(".heslo").style.display="inline-block";
    }
  }

	return (
		<>
			<label>
				Napiš něco: <input onChange={handleChange} />
			</label>
			<p>
				Do políčka výše uživatel napsal: <b>{obsah}</b>
			</p>
			<p>Počet znaků: {pocet}</p>
			<p className="heslo">Jako heslo by text neobstál.</p>
		</>
	)
}

export default ZaverecnyBonus1;