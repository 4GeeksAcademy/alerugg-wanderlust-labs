import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-white text-stone-950">
      <section
        className="relative flex min-h-[min(34rem,calc(100svh-10rem))] items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 text-white lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase">Viaja con curiosidad</p>
          <h1 className="font-serif text-4xl font-semibold sm:text-6xl">
            Wanderlust Labs
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/90">
            Encuentra experiencias que te acerquen a los lugares y las personas que visitas.
          </p>
          <Link
            href="/experiences"
            className="mt-8 inline-flex min-h-12 items-center rounded-md bg-white px-6 text-sm font-semibold text-emerald-950 transition-colors hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Explorar experiencias <span aria-hidden="true" className="ml-3">&rarr;</span>
          </Link>
        </div>
      </section>
     
<section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
  <div className="max-w-3xl">
    <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">
      Encuentra tu próxima historia
    </p>

    <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
      El mundo está lleno de lugares por descubrir y experiencias por vivir.
    </h2>

    <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
      Desde descubrir rincones escondidos y saborear la gastronomía local
      hasta conectar con nuevas culturas y explorar paisajes inolvidables.
      En Wanderlust Labs creemos que viajar es mucho más que visitar un
      destino: es vivir momentos únicos, descubrir nuevas perspectivas y
      crear recuerdos que permanecen contigo.
    </p>

    <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-emerald-800">
      <span className="h-px w-10 bg-emerald-700" />
      Viaja con curiosidad. Descubre sin límites.
    </div>
  </div>
</section>

    </main>
  );
}
