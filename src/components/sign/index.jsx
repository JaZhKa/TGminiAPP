function Sign({ sign, name, birth }) {
	return (
		// eslint-disable-next-line jsx-a11y/anchor-is-valid
		<a href="#" className="home__sign-anchor">
			<div className="home__sign">
				<img
					src={sign}
					alt={`${name} sign`}
				/>
				<p>{name}</p>
				<p>{birth}</p>
			</div>
		</a>
	);
}

export default Sign;
