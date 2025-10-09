// app/page.tsx
import Hero from "@/app/components/Hero";
import TiltakCard from "@/app/components/TiltakCard";

import { TILTAK } from "@/app/lib/tiltak";

export default function Page() {
  return (
    <>
      <Hero
        kicker="Klimatiltak"
        title={
          <>
            10 små handlinger som gir <span className="accent">stor effekt</span>
          </>
        }
        subtitle="Små grep du kan starte med i dag."
        imageSrc="/bilder/Herotiltak.jpg"
        imageAlt="Herotiltak"
        height={400}
        fullBleed
        align="center"
        actions={[{ href: "#tiltak", label: "Se tiltakene" }]}
      >
        <div className="hero-panel reveal-4">
          <h2>Leve grønnere i hverdagen</h2>
          <p>Her får du en oversikt over ti enkle klimatiltak i hverdagen…</p>
        </div>
      </Hero>

      <section id="tiltak" className="grid mt12">
        {TILTAK.map((t) => (
          <TiltakCard key={t.id} item={t} />
        ))}
      </section>
    </>
  );
}
