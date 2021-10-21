import React, { useState } from 'react';
import './ukazatel-uspechu.css'

// Děláš jednoduchou komponentu, která ukazuje "progress bar",
// proužek, který ukazuje pokrok v nějakém procesu.

// Zadání 1:
// Použij prop `barva` ve style atributu, aby byl proužek barvou
// předanou jako prop do komponenty.

// Zadání 2:
// Přidej komponentě číselný stav od nuly do sta,
// který bude reprezentovat postup.

// Zadání 3:
// Po kliknutí na tlačítko zvětši stav o deset. Nejvýše ale do sta.

// Zadání 4:
// Nastav prvku `ukazatel-uspechu__postup` šířku podle stavové proměnné.

const UkazatelPokroku = ({ barva }) => {
  const [postup, setPostup] = useState(0);
  
	return (
		<div className="ukazatel-uspechu">
			<div className="ukazatel-uspechu__ramecek">
				<div
					className="ukazatel-uspechu__postup"
					style={{
						width: `${postup}%`,
						backgroundColor: `${barva}`,
					}}
				></div>
			</div>
			<button onClick={()=> (postup < 100) ? setPostup(postup + 10) : postup}>postoupit o 10 %</button>
		</div>
	)
}

const Uloha7 = () => {
	return (
		<>
			<UkazatelPokroku barva="blue" />
			<UkazatelPokroku barva="green" />
			<UkazatelPokroku barva="purple" />
		</>
	)
}

export default Uloha7;