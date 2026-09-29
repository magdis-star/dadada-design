import Image from "next/image";

// Un portátil dibujado con CSS sobre un fondo liso: da aire a las capturas
// sin fotos de banco de imágenes. Las capturas van a 1440×900, la misma
// proporción que la pantalla (16:10), para que se vean enteras.
export default function Portatil({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="grid aspect-[4/3] place-items-center bg-[#ECE6DA] px-[9%]">
      <div className="w-full transition-transform duration-500 group-hover:-translate-y-1">
        <div className="rounded-t-[10px] bg-tinta p-[2.2%] pb-[3%]">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] bg-blanco">
            <Image src={src} alt={alt} fill className="object-cover object-top" unoptimized />
          </div>
        </div>
        <div className="relative -mx-[7%] h-[9px] rounded-b-[10px] bg-[#CFC8BB] sm:h-[11px]">
          <div className="absolute left-1/2 top-0 h-[40%] w-[16%] -translate-x-1/2 rounded-b-md bg-[#BDB5A6]" />
        </div>
      </div>
    </div>
  );
}
