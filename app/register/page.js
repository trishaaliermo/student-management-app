'use client';

import { useState } from 'react';
import { registerStudent } from '../actions';

export default function RegisterPage() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [weatherError, setWeatherError] = useState('');

  const fetchWeather = async () => {
    if (!city) return;
    setLoadingWeather(true);
    setWeatherError('');
    try {
      const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      if (!res.ok) throw new Error('City not found');
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setWeatherError('Could not fetch weather for this city.');
      setWeather(null);
    } finally {
      setLoadingWeather(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow border my-8 text-gray-900">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Student Registration Form</h2>
      
      <form action={registerStudent} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name *</label>
            <input name="first_name" required className="w-full border bg-white text-gray-900 p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name *</label>
            <input name="last_name" required className="w-full border bg-white text-gray-900 p-2 rounded" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email *</label>
          <input type="email" name="email" required className="w-full border bg-white text-gray-900 p-2 rounded" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
          <input type="tel" name="phone" className="w-full border bg-white text-gray-900 p-2 rounded" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Street Address *</label>
          <input name="street_address" required className="w-full border bg-white text-gray-900 p-2 rounded" />
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">City *</label>
            <div className="flex space-x-1">
              <input 
                name="city" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                required 
                className="w-full border bg-white text-gray-900 p-2 rounded" 
              />
              <button 
                type="button" 
                onClick={fetchWeather}
                className="bg-gray-200 text-gray-800 px-3 py-2 rounded text-xs hover:bg-gray-300 font-medium"
              >
                Test
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Province/State *</label>
            <input name="province_state" required className="w-full border bg-white text-gray-900 p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Country *</label>
            <input name="country" defaultValue="Canada" required className="w-full border bg-white text-gray-900 p-2 rounded" />
          </div>
        </div>

        {/* Weather status section */}
        <div className="bg-gray-50 p-3 rounded border text-sm text-gray-800">
          <p className="font-semibold text-gray-700">City Weather Info:</p>
          {loadingWeather && <p className="text-blue-500">Loading weather...</p>}
          {weatherError && <p className="text-red-500">{weatherError}</p>}
          {weather && (
            <p className="text-green-700 font-medium">
              Current temperature in {weather.name}: {weather.main.temp}°C, {weather.weather[0].description}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Postal Code *</label>
          <input name="postal_code" required className="w-full border bg-white text-gray-900 p-2 rounded" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Program *</label>
            <input name="program" required className="w-full border bg-white text-gray-900 p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Year / Cohort *</label>
            <input name="year" placeholder="e.g., Y1" required className="w-full border bg-white text-gray-900 p-2 rounded" />
          </div>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 font-semibold transition-colors">
          Register Student
        </button>
      </form>
    </div>
  );
}