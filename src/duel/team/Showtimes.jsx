export default function Showtimes({ times }) {
  if (times.length === 0) return <p className="empty-showtimes">Sin funciones hoy</p>;
  return <ul className="showtimes">{times.map((time) => <li key={time}>{time}</li>)}</ul>;
}
