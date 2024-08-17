import Sign from './../../components/sign';
import capricorn from './../../img/capricorn.png';
import aquarius from './../../img/aquarius.png';
import pisces from './../../img/pisces.png';
import aries from './../../img/aries.png';
import taurus from './../../img/taurus.png';
import gemini from './../../img/gemini.png';
import cancer from './../../img/cancer.png';
import leo from './../../img/leo.png';
import virgo from './../../img/virgo.png';
import libra from './../../img/libra.png';
import scorpio from './../../img/scorpio.png';
import sagittarius from './../../img/sagittarius.png';
import { useEffect } from 'react';
import { useTelegram } from './../../hooks/useTelegram';

const Home = ({ lang, setSign }) => {
	const { tg } = useTelegram();

	useEffect(() => {
		tg.BackButton.show();
		tg.BackButton.setParams({ text: lang === 'ru' ? 'Закрыть' : 'Close' });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// useEffect(() => {
	// 	tg.onEvent('mainButtonClicked', onClose);
	// 	return () => tg.offEvent('mainButtonClicked', onClose);
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);

	return (
		<div className="home__main">
			<h1>{lang === 'ru' ? 'Выберите знак зодиака' : 'Choose your sign'}</h1>
			<div className="home__sign-wrap">
				<Sign
					sign={'capricorn'}
					img={capricorn}
					setSign={setSign}
					name={lang === 'ru' ? 'Козерог' : 'Capricorn'}
					birth={lang === 'ru' ? 'дек 22 - янв 19' : 'dec 22 - jan 19'}
				/>
				<Sign
					sign={'aquarius'}
					img={aquarius}
					setSign={setSign}
					name={lang === 'ru' ? 'Водолей' : 'Aquarius'}
					birth={lang === 'ru' ? 'янв 20 - фев 18' : 'jan 20 - feb 18'}
				/>
				<Sign
					sign={'pisces'}
					img={pisces}
					setSign={setSign}
					name={lang === 'ru' ? 'Рыбы' : 'Pisces'}
					birth={lang === 'ru' ? 'фев 19 - мар 20' : 'feb 19 - mar 20'}
				/>
				<Sign
					sign={'aries'}
					img={aries}
					setSign={setSign}
					name={lang === 'ru' ? 'Овен' : 'Aries'}
					birth={lang === 'ru' ? 'мар 21 - апр 19' : 'mar 21 - apr 19'}
				/>
				<Sign
					sign={'taurus'}
					img={taurus}
					setSign={setSign}
					name={lang === 'ru' ? 'Телец' : 'Taurus'}
					birth={lang === 'ru' ? 'апр 20 - май 20' : 'apr 20 - may 20'}
				/>
				<Sign
					sign={'gemini'}
					img={gemini}
					setSign={setSign}
					name={lang === 'ru' ? 'Близнецы' : 'Gemini'}
					birth={lang === 'ru' ? 'май 21 - июнь 20' : 'may 21 - jun 20'}
				/>
				<Sign
					sign={'cancer'}
					img={cancer}
					setSign={setSign}
					name={lang === 'ru' ? 'Рак' : 'Cancer'}
					birth={lang === 'ru' ? 'июнь 21 - июль 22' : 'jun 21 - jul 22'}
				/>
				<Sign
					sign={'leo'}
					img={leo}
					setSign={setSign}
					name={lang === 'ru' ? 'Лев' : 'Leo'}
					birth={lang === 'ru' ? 'июль 23 - авг 22' : 'jul 23 - aug 22'}
				/>
				<Sign
					sign={'virgo'}
					img={virgo}
					setSign={setSign}
					name={lang === 'ru' ? 'Дева' : 'Virgo'}
					birth={lang === 'ru' ? 'авг 23 - сен 22' : 'aug 23 - sep 22'}
				/>
				<Sign
					sign={'libra'}
					img={libra}
					setSign={setSign}
					name={lang === 'ru' ? 'Весы' : 'Libra'}
					birth={lang === 'ru' ? 'сен 23 - окт 22' : 'sep 23 - oct 22'}
				/>
				<Sign
					sign={'scorpio'}
					img={scorpio}
					setSign={setSign}
					name={lang === 'ru' ? 'Скорпион' : 'Scorpio'}
					birth={lang === 'ru' ? 'окт 23 - ноя 21' : 'oct 23 - nov 21'}
				/>
				<Sign
					sign={'sagittarius'}
					img={sagittarius}
					setSign={setSign}
					name={lang === 'ru' ? 'Стрелец' : 'Sagittarius'}
					birth={lang === 'ru' ? 'ноя 22 - дек 21' : 'nov 22 - dec 21'}
				/>
			</div>
		</div>
	);
};

export default Home;
