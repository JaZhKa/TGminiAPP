import { useEffect, useState } from 'react';
import { useGetHoroscopes } from './../../hooks/useGetHoroscope';

const Horoscope = ({ sign, lang }) => {
	const { horoscope, loading, getHoroscope } = useGetHoroscopes();
	const [currentDate, setCurrentDate] = useState(new Date());

	async function getData(sign, lang) {
		await getHoroscope(sign, lang);
	}

	useEffect(() => {
		getData(sign, lang);
	}, []);

	return (
			<div className="horoscope__main">
				<p className='horoscope__date'>{currentDate.toLocaleDateString(lang, {day: 'numeric', month: 'long'})}</p>
				{loading ? <p className='horoscope__text'>Loading...</p> : <p className='horoscope__text'>{horoscope?.horoscope}</p>}
			</div>
	);
};

export default Horoscope;
