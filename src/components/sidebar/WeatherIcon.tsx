import type { WeatherCondition } from '../../lib/weather';

interface WeatherIconProps {
  condition: WeatherCondition;
}

const CLOUD_PATH = 'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z';

function Cloud() {
  return (
    <g transform="translate(0,-2)">
      <path d={CLOUD_PATH} fill="currentColor" />
    </g>
  );
}

export function WeatherIcon({ condition }: WeatherIconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 26"
      fill="none"
      stroke="currentColor"
      style={{ color: 'var(--color-text-muted)' }}
      aria-hidden="true"
    >
      {condition === 'clear' && (
        <>
          <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
          <g strokeWidth="1.5" strokeLinecap="round">
            <line x1="12" y1="2" x2="12" y2="5" />
            <line x1="12" y1="19" x2="12" y2="22" />
            <line x1="2" y1="12" x2="5" y2="12" />
            <line x1="19" y1="12" x2="22" y2="12" />
            <line x1="4.9" y1="4.9" x2="7" y2="7" />
            <line x1="17" y1="17" x2="19.1" y2="19.1" />
            <line x1="4.9" y1="19.1" x2="7" y2="17" />
            <line x1="17" y1="7" x2="19.1" y2="4.9" />
          </g>
        </>
      )}

      {condition === 'cloudy' && <Cloud />}

      {condition === 'fog' && (
        <>
          <Cloud />
          <g strokeWidth="1.5" strokeLinecap="round">
            <line x1="4" y1="22" x2="20" y2="22" />
            <line x1="6" y1="25" x2="18" y2="25" />
          </g>
        </>
      )}

      {condition === 'rain' && (
        <>
          <Cloud />
          <g strokeWidth="1.5" strokeLinecap="round">
            <line x1="8" y1="21" x2="6" y2="25" />
            <line x1="12" y1="21" x2="10" y2="25" />
            <line x1="16" y1="21" x2="14" y2="25" />
          </g>
        </>
      )}

      {condition === 'snow' && (
        <>
          <Cloud />
          <g fill="currentColor" stroke="none">
            <circle cx="8" cy="23" r="1.1" />
            <circle cx="12" cy="23" r="1.1" />
            <circle cx="16" cy="23" r="1.1" />
          </g>
        </>
      )}

      {condition === 'storm' && (
        <>
          <Cloud />
          <path
            d="M12.5 19.5l-3 5h2.5l-1.5 4 4.5-6h-2.5z"
            fill="currentColor"
            stroke="none"
          />
        </>
      )}
    </svg>
  );
}
