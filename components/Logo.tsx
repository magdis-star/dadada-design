// Logo A (elegido el 28 sep 2026): «dadada» redondo, en tinta, con una raya
// hecha a mano en lima. Boceto en Bricolage Grotesque hasta que se dibuje en vectores.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-block font-logo font-extrabold leading-none tracking-[-0.045em] ${className}`}>
      dadada
      <svg
        className="absolute -bottom-[0.18em] left-[2%] h-[0.22em] w-[94%]"
        viewBox="0 0 300 20"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M3 13 C 60 5, 120 16, 180 9 S 270 6, 297 11"
          stroke="#DCF24B"
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
