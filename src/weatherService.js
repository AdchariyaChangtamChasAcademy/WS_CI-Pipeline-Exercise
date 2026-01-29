class WeatherService {
  constructor({ retries = 2, timeout = 3000 } = {}) {
    this.retries = retries;
    this.timeout = timeout;
  }

  async getWeather(city) {
    let attempt = 0;

    while (attempt <= this.retries) {
      try {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), this.timeout);

        const response = await fetch(
          `https://api.weather.example/weather?city=${city}`,
          { signal: controller.signal }
        );

        clearTimeout(id);

        if (!response.ok) {
          throw new Error('API error');
        }

        return await response.json();
      } catch (error) {
        if (attempt === this.retries) {
          throw error;
        }
        attempt++;
      }
    }
  }
}

module.exports = WeatherService;