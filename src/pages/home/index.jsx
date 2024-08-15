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

const Home = ({ lang }) => {
	return (
		<div className="home__main">
			<h1>{lang === 'ru' ? 'Выберите знак зодиака' : 'Choose your sign'}</h1>
			<div className="home__sign-wrap">
				<Sign
					sign={capricorn}
					name={lang === 'ru' ? 'Козерог' : 'Capricorn'}
					birth={lang === 'ru' ? 'дек 22 - янв 19' : 'dec 22 - jan 19'}
				/>
				<Sign
					sign={aquarius}
					name={lang === 'ru' ? 'Водолей' : 'Aquarius'}
					birth={lang === 'ru' ? 'янв 20 - фев 18' : 'jan 20 - feb 18'}
				/>
				<Sign
					sign={pisces}
					name={lang === 'ru' ? 'Рыбы' : 'Pisces'}
					birth={lang === 'ru' ? 'фев 19 - мар 20' : 'feb 19 - mar 20'}
				/>
				<Sign
					sign={aries}
					name={lang === 'ru' ? 'Овен' : 'Aries'}
					birth={lang === 'ru' ? 'мар 21 - апр 19' : 'mar 21 - apr 19'}
				/>
				<Sign
					sign={taurus}
					name={lang === 'ru' ? 'Телец' : 'Taurus'}
					birth={lang === 'ru' ? 'апр 20 - май 20' : 'apr 20 - may 20'}
				/>
				<Sign
					sign={gemini}
					name={lang === 'ru' ? 'Близнецы' : 'Gemini'}
					birth={lang === 'ru' ? 'май 21 - июнь 20' : 'may 21 - jun 20'}
				/>
				<Sign
					sign={cancer}
					name={lang === 'ru' ? 'Рак' : 'Cancer'}
					birth={lang === 'ru' ? 'июнь 21 - июль 22' : 'jun 21 - jul 22'}
				/>
				<Sign
					sign={leo}
					name={lang === 'ru' ? 'Лев' : 'Leo'}
					birth={lang === 'ru' ? 'июль 23 - авг 22' : 'jul 23 - aug 22'}
				/>
				<Sign
					sign={virgo}
					name={lang === 'ru' ? 'Дева' : 'Virgo'}
					birth={lang === 'ru' ? 'авг 23 - сен 22' : 'aug 23 - sep 22'}
				/>
				<Sign
					sign={libra}
					name={lang === 'ru' ? 'Весы' : 'Libra'}
					birth={lang === 'ru' ? 'сен 23 - окт 22' : 'sep 23 - oct 22'}
				/>
				<Sign
					sign={scorpio}
					name={lang === 'ru' ? 'Скорпион' : 'Scorpio'}
					birth={lang === 'ru' ? 'окт 23 - ноя 21' : 'oct 23 - nov 21'}
				/>
				<Sign
					sign={sagittarius}
					name={lang === 'ru' ? 'Стрелец' : 'Sagittarius'}
					birth={lang === 'ru' ? 'ноя 22 - дек 21' : 'nov 22 - dec 21'}
				/>
			</div>
		</div>
	);
};

export default Home;
