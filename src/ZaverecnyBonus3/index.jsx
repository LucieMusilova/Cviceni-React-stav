import React from 'react'
import { useCasVSekundach } from './hodiny'

// Zadání:
// Pomocí předchystané stavové proměnné, která se mění každou sekundu,
// zobraz aktuální čas ve formátu 7:49:05.

const ZaverecnyBonus3 = () => {
	const casVSekundach = useCasVSekundach()

  let h = Math.floor(casVSekundach / 3600);
  let m = Math.floor(casVSekundach % 3600 / 60);
  let s = Math.floor(casVSekundach % 3600 % 60);

  let timeString = h.toString().padStart(2, '0') + ':' + 
      m.toString().padStart(2, '0') + ':' + 
      s.toString().padStart(2, '0');

  

	return (
		<>
			Čas právě teď: <b>{timeString}</b>
		</>
	)
}

export default ZaverecnyBonus3;