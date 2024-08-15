import { useEffect } from 'react';
import { useGetHoroscopes } from './../../hooks/useGetHoroscope';

const Horoscope = ({sign, lang}) => {
  const {horoscope, getHoroscope} = useGetHoroscopes();

  async function getData(sign, lang) {
    await getHoroscope(sign, lang);
  }

  useEffect(() => {
    getData(sign, lang)
  }, []);

	return (
    <div className='horoscope__main'>
      {/* {horoscope.horoscope} */}
    </div>
  );
};

export default Horoscope;
