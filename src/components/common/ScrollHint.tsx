import styles from './ScrollHint.module.css';

function handleClick() {
  window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
}

export function ScrollHint() {
  return (
    <button className={styles.scrollHint} onClick={handleClick} aria-label="Scroll down">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );
}
