export interface CityClock {
  label: string;
  timeZone: string;
  latitude: number;
  longitude: number;
}

export const CITY_CLOCKS: CityClock[] = [
  { label: 'San Francisco', timeZone: 'America/Los_Angeles', latitude: 37.7749, longitude: -122.4194 },
  { label: 'Toronto', timeZone: 'America/Toronto', latitude: 43.6532, longitude: -79.3832 },
  { label: 'Cairo', timeZone: 'Africa/Cairo', latitude: 30.0444, longitude: 31.2357 },
  { label: 'Taipei', timeZone: 'Asia/Taipei', latitude: 25.033, longitude: 121.5654 },
  { label: 'Vancouver', timeZone: 'America/Vancouver', latitude: 49.2827, longitude: -123.1207 },
  { label: 'New York', timeZone: 'America/New_York', latitude: 40.7128, longitude: -74.006 },
];
