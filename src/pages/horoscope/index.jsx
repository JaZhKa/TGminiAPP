import { useEffect, useState } from 'react';
import { useGetHoroscopes } from './../../hooks/useGetHoroscope';
import { useNavigate } from 'react-router-dom';
import { tg } from './../../hooks/useTelegram';

const Horoscope = ({ sign, lang }) => {
	const { horoscope, loading, getHoroscope } = useGetHoroscopes();
	// eslint-disable-next-line no-unused-vars
	const [currentDate, setCurrentDate] = useState(new Date());
	const navigate = useNavigate();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	async function getData(sign, lang) {
		await getHoroscope(sign, lang);
	}

	const onBack = () => {
		navigate('/');
	};

	useEffect(() => {
		tg.BackButton.show();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		tg.onEvent('backButtonClicked', onBack);
		return () => {
			tg.offEvent('backButtonClicked', onBack);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		getData(sign, lang);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="horoscope__main">
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
