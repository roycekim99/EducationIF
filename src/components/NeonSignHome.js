import React, { useRef, useEffect } from 'react';

function NeonSignHome() {
	return(
		<video playsInline autoPlay muted loop>
			<source src='neonsign-home.mp4' type='video/mp4' />
		</video>
	)
}

export default NeonSignHome;