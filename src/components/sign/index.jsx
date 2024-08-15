function Sign({ sign, img, name, birth, setSign }) {
	return (
		<button onClick={() => setSign(sign)} className="home__sign-btn">
			<div className="home__sign">
				<img
					src={img}
					alt={`${name} sign`}
				/>
				<p>{name}</p>
				<p>{birth}</p>
			</div>
		</button>
	);
}

export default Sign;
