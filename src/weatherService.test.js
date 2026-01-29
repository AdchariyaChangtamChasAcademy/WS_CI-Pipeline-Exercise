const WeatherService = require('../src/weatherService');

beforeEach(() => {
  global.fetch = jest.fn();
});

test('getWeather returns data (success path)', async () => {
  fetch.mockResolvedValue({
    ok: true,
    json: async () => ({ temperature: 20, condition: 'Sunny' })
  });

  const service = new WeatherService();
  const weather = await service.getWeather('Stockholm');

  expect(weather.temperature).toBe(20);
});

test('handles API error and max retries', async () => {
  // Simulera att fetch alltid failar (covers catch + retries)
  fetch.mockRejectedValue(new Error('Network down'));

  const service = new WeatherService({ retries: 1 });

  await expect(service.getWeather('Stockholm')).rejects.toThrow('Network down');

  // 1 initial + 1 retry
  expect(fetch).toHaveBeenCalledTimes(2);
});
