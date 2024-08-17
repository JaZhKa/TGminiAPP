import { useEffect, useState } from 'react';
import { useGetHoroscopes } from './../../hooks/useGetHoroscope';

const Horoscope = ({ sign, lang }) => {
	const { horoscope, loading, getHoroscope } = useGetHoroscopes();
	// eslint-disable-next-line no-unused-vars
	const [currentDate, setCurrentDate] = useState(new Date());

	// eslint-disable-next-line react-hooks/exhaustive-deps
	async function getData(sign, lang) {
		await getHoroscope(sign, lang);
	}

	useEffect(() => {
		getData(sign, lang);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="horoscope__main">
			<h3>{lang}</h3>
			<p className="horoscope__date">
				{currentDate.toLocaleDateString(lang, {
					day: 'numeric',
					month: 'long',
				})}
			</p>
			{loading ? (
				<p className="horoscope__text">Loading...</p>
			) : (
				<p className="horoscope__text">{horoscope?.horoscope}</p>
			)}
		</div>
	);
};

export default Horoscope;
