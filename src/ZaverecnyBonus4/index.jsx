import React, { useState } from 'react';

// Zadání:
// Pomocí dvou stavových proměnných s výchozí hodnotou 0,
// které se budou měnit podle vstupních políček,
// vypiš do `<output></output>` jejich součet.

const ZaverecnyBonus4 = () => {
  const [prvni, setPrvni] = useState(0);
  const [druhy, setDruhy] = useState(0);

  const handleChangePrvni = (event) => {
    setPrvni(event.target.value);
  }
  const handleChangeDruhy = (event) => {
    setDruhy(event.target.value);
  }

  const soucet = parseInt(prvni) + parseInt(druhy);

  
	return (
		<>
			<input onChange={handleChangePrvni} type="number" defaultValue="0" /> +{' '}
			<input onChange={handleChangeDruhy} type="number" defaultValue="0" /> = <output>{soucet}</output>
		</>
	)
}

export default ZaverecnyBonus4;