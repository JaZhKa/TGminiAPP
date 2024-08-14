import { useState } from 'react';

export const useGetHoroscopes = () => {
	const [horoscope, setHoroscope] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const getHoroscope = async (sign, language = 'orginal') => {
		fetch('https://poker247tech.ru/get_horoscope/', {
			method: 'POST',
			body: JSON.stringify({ sign, language }),
			headers: {
				'Content-Type': 'application/json',
			},
		}).catch((error) => {
				setError(error);
				throw new Error(error);
			}).then((response) => {
				response.json();
			}).then((response) => {
				setHoroscope(response);
			}).finally(() => {
				setLoading(false);
			});
	};

	return {
		horoscope,
		loading,
		error,
		getHoroscope
	};
};
