const apiKey = process.env.WEATHER_API;

const api = {
	key: apiKey,
	baseUrl: 'https://api.openweathermap.org/data/2.5/',
};

export default api;
