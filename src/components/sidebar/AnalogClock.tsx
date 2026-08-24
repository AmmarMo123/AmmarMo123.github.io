import { useMemo } from 'react';
import styles from './AnalogClock.module.css';

const SPIN = 'clock-hand-spin';

function getZonedTime(date: Date, timeZone: string) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).formatToParts(date);

  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value ?? 0);
  const hours = get('hour') % 24;

  return { hours, minutes: get('minute'), seconds: get('second') };
}

function useHandDelays(timeZone: string) {
  return useMemo(() => {
    const now = new Date();
    const { hours, minutes, seconds } = getZonedTime(now, timeZone);
    const ms = now.getMilliseconds();

    const secondsProgress = seconds + ms / 1000;
    const minutesProgress = minutes + secondsProgress / 60;
    const hoursProgress = (hours % 12) + minutesProgress / 60;

    return {
      second: (secondsProgress / 60) * 60,
      minute: (minutesProgress / 60) * 3600,
      hour: (hoursProgress / 12) * 43200,
    };
  }, [timeZone]);
}

interface AnalogClockProps {
  timeZone: string;
}

export function AnalogClock({ timeZone }: AnalogClockProps) {
  const delays = useHandDelays(timeZone);

  return (
    <svg
      className={styles.clock}
      viewBox="0 0 100 100"
      width="52"
      height="52"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="47" className={styles.face} />
      {Array.from({ length: 12 }, (_, i) => (
        <line
          key={i}
          x1="50"
          y1="6"
          x2="50"
          y2={i % 3 === 0 ? 12 : 9}
          className={styles.tick}
          transform={`rotate(${i * 30} 50 50)`}
        />
      ))}
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="28"
        className={styles.hourHand}
        style={{
          transformBox: 'view-box',
          transformOrigin: '50px 50px',
          animationName: SPIN,
          animationDuration: '43200s',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationDelay: `-${delays.hour}s`,
        }}
      />
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="18"
        className={styles.minuteHand}
        style={{
          transformBox: 'view-box',
          transformOrigin: '50px 50px',
          animationName: SPIN,
          animationDuration: '3600s',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationDelay: `-${delays.minute}s`,
        }}
      />
      <line
        x1="50"
        y1="56"
        x2="50"
        y2="15"
        className={styles.secondHand}
        style={{
          transformBox: 'view-box',
          transformOrigin: '50px 50px',
          animationName: SPIN,
          animationDuration: '60s',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationDelay: `-${delays.second}s`,
        }}
      />
      <circle cx="50" cy="50" r="2.5" className={styles.pivot} />
    </svg>
  );
}
