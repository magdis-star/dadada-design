// El logo es el C (decidido el 29 sep 2026). El A se queda guardado: para volver, cambia `LOGO` a "A".
// C: «da da da», cada uno un poco más arriba, y el último en lima dando un saltito cada
//   pocos segundos, como quien dice su primera palabra.
// A (28 sep 2026, descartado): «dadada» redondo, en tinta, con una raya hecha a mano en lima.
// Los dos son bocetos con letras de Google hasta que se dibujen en vectores.
const LOGO: "A" | "C" = "C";

function LogoA({ className }: { className: string }) {
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

function LogoC({ className, quieto }: { className: string; quieto: boolean }) {
  return (
    <span
      className={`inline-flex items-baseline gap-[0.08em] pt-[0.3em] font-sans font-semibold leading-none tracking-[-0.03em] ${className}`}
      aria-label="dadada"
    >
      <span aria-hidden="true">da</span>
      <span aria-hidden="true" className="-translate-y-[0.14em]">da</span>
      <span
        aria-hidden="true"
        className={`${quieto ? "inline-block -translate-y-[0.28em]" : "logo-salto"} rounded-[0.1em] bg-lima px-[0.08em]`}
      >
        da
      </span>
    </span>
  );
}

// `quieto`: sin el saltito (en el pie, por ejemplo)
export default function Logo({ className = "", quieto = false }: { className?: string; quieto?: boolean }) {
  return LOGO === "A" ? <LogoA className={className} /> : <LogoC className={className} quieto={quieto} />;
}
