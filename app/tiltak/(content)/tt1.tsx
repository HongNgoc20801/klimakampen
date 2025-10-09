// app/tiltak/_content/tt1.tsx
import Image from "next/image";
import Link from "next/link";
import Hero from "@/app/components/Hero";

export const meta = {
  id: "tt1",
  title: "Ta beina eller sykkelen fatt",
  excerpt:
    "Bytt til grønn reise i dag – gå, sykle, ta kollektivt eller samkjør. Hver tur teller for klimaet!",
  img: "/bilder/sykkelen.webp",
};

export default function TT1() {
  return (
    <>
      <Hero
        kicker="Klimatiltak"
        title={
          <>
            Velg utslippsfri reise til jobb og fritid{" "}
            <span className="accent">– bedre for deg og klimaet</span>
          </>
        }
        subtitle="Bytt ut korte bilturer med gange, sykkel eller elsykkel. Små daglige valg gir store utslippskutt over tid."
        imageSrc={meta.img}
        imageAlt="Sykkel i byen"
        height={300}
        fullBleed
        align="center"
        actions={[{ href: "#start", label: "Start" }]}
      />

      <article className="container" id="start">
        <Link className="btn" href="/">Tilbake</Link>

        {/* Hvorfor */}
        <section className="mt12">
          <h1>Hvorfor bytte til gåing og sykling?</h1>
          <p className="paragraph">
            Personbil er blant de største kildene til utslipp per person i hverdagen.
            Når du går eller sykler, er de direkte utslippene ≈ 0. For hver kort biltur
            du erstatter, sparer du både CO₂, tid i kø og kostnader til parkering/drivstoff.
          </p>
          <ul>
            <li>Bedre helse: puls, kondisjon, søvn og humør.</li>
            <li>Mindre kø og støy i nabolaget.</li>
            <li>Lavere reisekostnader – spesielt i by.</li>
          </ul>
        </section>

        {/* Estimat og regneeksempler */}
        <section className="mt12">
          <h2>Hvor mye CO₂ kan du spare?</h2>
          <p className="paragraph">
            Som tommelfingerregel kan en erstattet biltur på 5–10 km spare{" "}
            <b>0,5–1,0 kg CO₂</b> (avhengig av biltype og trafikk). Under er tre
            enkle hverdags-scenarier:
          </p>
          <table className="table">
            <thead>
              <tr>
                <th>Vane</th>
                <th>Bytte til</th>
                <th>Utslippskutt (omtrentlig)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2 korte bilturer (á 5 km) pr. dag</td>
                <td>Sykkel/gange</td>
                <td>≈ 1 kg CO₂ per dag → 200–250 kg/år</td>
              </tr>
              <tr>
                <td>Pendling 10 km hver vei, 3 dg/uke</td>
                <td>Elsykkel</td>
                <td>≈ 600–800 kg CO₂/år</td>
              </tr>
              <tr>
                <td>Ukens handling og henting spredt</td>
                <td>Samkjør + lastesykkel</td>
                <td>≈ 150–300 kg CO₂/år</td>
              </tr>
            </tbody>
          </table>
          <p className="paragraph">
            Tallene er veiledende for å illustrere potensialet. Effekten blir størst når
            korte og mellomlange bilturer byttes ut jevnlig gjennom året.
          </p>
        </section>

        {/* Rask sammenligning */}
        <section className="mt12" id="rask-sammenligning">
          <h2>Rask sammenligning</h2>
          <Image
            src="/bilder/rasksammenligning.png"
            alt="Rask sammenligning av transportvalg"
            width={1200}
            height={700}
          />
          <p className="paragraph">
            Elsykkel har særdeles lave indirekte utslipp per km og er ofte raskere enn bil i rushtid.
          </p>
        </section>

        {/* Kom i gang */}
        <section className="mt12" id="kom-i-gang">
          <h2>Slik kommer du i gang – 30 dager</h2>
          <ol>
            <li><b>Uke 1:</b> Bytt 2–3 korte ærender til gange/sykkel.</li>
            <li><b>Uke 2:</b> Test én pendledag med sykkel/elsykkel.</li>
            <li><b>Uke 3:</b> Kombiner sykkel + tog/buss (parkér ved stasjon).</li>
            <li><b>Uke 4:</b> Gjør det fast: planlegg “sykkeldager” i kalenderen.</li>
          </ol>
          <p className="paragraph">
            Sett deg et lavterskelmål: <b>100 km på sykkel denne måneden</b> – fordelt på korte turer.
          </p>
        </section>

        {/* Elsykkel & lastesykkel */}
        <section className="mt12" id="elsykkel-lastesykkel">
          <h2>Elsykkel og lastesykkel</h2>
          <ul>
            <li><b>Elsykkel:</b> Perfekt for kupert terreng eller lengre pendling (10–20 km).</li>
            <li><b>Lastesykkel:</b> Frakt av barn eller dagligvarer uten bil – stabil og trygg.</li>
            <li><b>Økonomi:</b> Lavt vedlikehold, lave “drivstoff”-kostnader, og ofte raskere enn bil i by.</li>
          </ul>
        </section>

        {/* Sikkerhet og komfort */}
        <section className="mt12" id="sikkerhet">
          <h2>Sikkerhet og komfort</h2>
          <ul>
            <li>Hjelm som sitter godt, lys foran/bak, reflekser.</li>
            <li>Skjermer, bagasjebrett/vesker – hold deg tørr og fri for søl.</li>
            <li>Brede dekk (35–45 mm) for komfort og grep på variert underlag.</li>
            <li>Lås med godkjent nivå og smart parkering (fast punkt).</li>
          </ul>
        </section>

        {/* Vedlikehold */}
        <section className="mt12" id="vedlikehold">
          <h2>Enkelt vedlikehold (10 min per uke)</h2>
          <ul>
            <li>Rengjør og smør kjede lett – sykkelen ruller lettere.</li>
            <li>Sjekk dekktrykk (står på dekket) – riktig trykk = mindre punkteringer.</li>
            <li>Test bremser og lys før du drar.</li>
          </ul>
        </section>

        {/* Vinter og vær */}
        <section className="mt12" id="vinter">
          <h2>Sykling året rundt</h2>
          <ul>
            <li><b>Høst/vinter:</b> Piggsko eller vinterdekk, hansker og lag-på-lag.</li>
            <li><b>Vår/sommer:</b> Tynn regnjakke, caps under hjelmen mot sol/regn.</li>
            <li>Parker tørt; lad elsykkel-batteriet inne på kalde dager.</li>
          </ul>
        </section>

        {/* Kombiner med kollektiv */}
        <section className="mt12" id="kollektiv">
          <h2>Kombiner med kollektivtransport</h2>
          <p className="paragraph">
            Bruk sykkel til stasjonen og kollektiv videre. Mange stasjoner har sikker sykkelparkering
            og lademulighet for elsykkel. Sjekk lokale regler for sykkel på tog/buss.
          </p>
        </section>

        {/* Sparetid og penger */}
        <section className="mt12" id="okonomi">
          <h2>Tid og penger</h2>
          <ul>
            <li>I rushtid er elsykkel ofte raskere enn bil på 3–10 km.</li>
            <li>Du sparer parkering, bompenger og drivstoff.</li>
            <li>Mindre bilslitasje og færre verkstedbesøk over tid.</li>
          </ul>
        </section>

        {/* Mini-FAQ */}
        <section className="mt12" id="faq">
          <h2>Vanlige spørsmål</h2>
          <h3>“Jeg er ikke i form – hvor begynner jeg?”</h3>
          <p className="paragraph">
            Start med korte, flate ruter 2–3 ganger i uken. Formen kommer fort, og elsykkel er et godt hjelpemiddel.
          </p>
          <h3>“Hva med regn og snø?”</h3>
          <p className="paragraph">
            Med regntrekk, skjermer og gode dekk går det fint. Ha en enkel “vær-pakke” klar ved døra.
          </p>
          <h3>“Er det trygt i trafikken?”</h3>
          <p className="paragraph">
            Velg rolige gater, gang- og sykkelveier. Bruk lys og reflekser – og gi tegn i god tid.
          </p>
        </section>

        {/* Oppsummering / call to action */}
        <section className="mt12" id="oppsummering">
          <h2>Kort oppsummert</h2>
          <ul>
            <li>Bytt 2–3 korte bilturer pr. uke → merkbar CO₂-reduksjon.</li>
            <li>Bruk elsykkel for lengre pendling og kupert terreng.</li>
            <li>Kombiner med kollektiv og planlegg “sykkeldager”.</li>
            <li>Hold utstyret enkelt: lys, hjelm, lås, regntrekk.</li>
          </ul>
          <p className="paragraph">
            Velg én konkret ting allerede i dag: <b>Ta sykkelen til butikken</b> eller{" "}
            <b>gå til neste ærend</b>. Små skritt – stor effekt.
          </p>
        </section>

        <div className="mt12">
          <Link className="btn" href="/">Tilbake</Link>
        </div>
      </article>
    </>
  );
}
