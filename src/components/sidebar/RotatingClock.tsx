import { useCallback, useEffect, useRef, useState } from 'react';
import { CITY_CLOCKS } from '../../data/cityClocks';
import { fetchWeather, type WeatherReading } from '../../lib/weather';
import { AnalogClock } from './AnalogClock';
import { WeatherIcon } from './WeatherIcon';
import styles from './RotatingClock.module.css';

const SWAP_INTERVAL_MS = 6000;

type WeatherState = Record<string, WeatherReading | 'error' | undefined>;

export function RotatingClock() {
  const [index, setIndex] = useState(0);
  const [weather, setWeather] = useState<WeatherState>({});
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;
    CITY_CLOCKS.forEach((city) => {
      fetchWeather(city.latitude, city.longitude)
        .then((reading) => {
          if (!cancelled) setWeather((prev) => ({ ...prev, [city.label]: reading }));
        })
        .catch(() => {
          if (!cancelled) setWeather((prev) => ({ ...prev, [city.label]: 'error' }));
        });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const scheduleNext = useCallback(() => {
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setIndex((current) => (current + 1) % CITY_CLOCKS.length);
    }, SWAP_INTERVAL_MS);
  }, []);

  useEffect(() => {
    scheduleNext();
    return () => window.clearTimeout(timeoutRef.current);
  }, [index, scheduleNext]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        setIndex((current) => (current - 1 + CITY_CLOCKS.length) % CITY_CLOCKS.length);
      } else if (event.key === 'ArrowRight') {
        setIndex((current) => (current + 1) % CITY_CLOCKS.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const city = CITY_CLOCKS[index];
  const reading = weather[city.label];

  return (
    <div className={styles.wrapper}>
      <div key={city.label} className={styles.fade}>
        <div className={styles.clockRow}>
          <AnalogClock timeZone={city.timeZone} />
          <div className={styles.weather}>
            {reading && reading !== 'error' ? (
              <>
                <WeatherIcon condition={reading.condition} />
                <span className={styles.temp}>{reading.temperatureC}°</span>
              </>
            ) : (
              <span className={styles.temp}>--°</span>
            )}
          </div>
        </div>
        <span className={styles.label}>{city.label}</span>
      </div>

      <div className={styles.dots}>
        {CITY_CLOCKS.map((c, i) =>
          i === index ? (
            <span key={`${c.label}-${index}`} className={styles.dotActive}>
              <span
                className={styles.dotFill}
                style={{ animationDuration: `${SWAP_INTERVAL_MS}ms` }}
              />
            </span>
          ) : (
            <span key={c.label} className={styles.dot} />
          ),
        )}
      </div>
    </div>
  );
}
