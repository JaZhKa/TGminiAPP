import { useState } from 'react';

export const useGetHoroscopes = () => {
	const [horoscope, setHoroscope] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const getHoroscope = async (sign, lang) => {
		console.log(sign, lang);
		await fetch('https://poker247tech.ru/get_horoscope/', {
			method: 'POST',
			body: JSON.stringify({ sign: sign, language: lang, period: 'today' }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.catch((error) => {
				setError(error);
				throw new Error(error);
			})
			.then((response) => response.json())
			.then((json) => {
				setHoroscope(json);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return {
		horoscope,
		loading,
		error,
		getHoroscope,
	};
};
