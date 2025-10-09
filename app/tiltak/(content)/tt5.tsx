// app/tiltak/_content/tt5.tsx
import Image from "next/image";
import Link from "next/link";
import Hero from "@/app/components/Hero";

export const meta = {
  id: "tt5",
  title: "Velg energismarte produkter",
  excerpt:
    "Riktig størrelse, lavt standby-forbruk og smart styring – kutt kWh uten å kutte komfort.",
  img: "/bilder/energismarte.jpg",
};

export default function TT5() {
  return (
    <>
      <Hero
        kicker="Klimatiltak"
        title={
          <>
            Velg energismarte produkter{" "}
            <span className="accent">– mindre strøm, samme komfort</span>
          </>
        }
        subtitle="Fra belysning og hvitevarer til varme og hjemmekontor: slik tar du de smarte valgene som varer."
        imageSrc={meta.img}
        imageAlt="Energismarte produkter"
        height={300}
        fullBleed
        align="center"
        actions={[{ href: "#start", label: "Start" }]}
      />

      <article className="container" id="start">
        <Link className="btn" href="/">Tilbake</Link>

        {/* Hvorfor */}
        <section className="mt12" id="hvorfor">
          <h1>Hvorfor energismarte kjøp lønner seg</h1>
          <p className="paragraph">
            Produkter du bruker hver dag påvirker strømregningen og klimaavtrykket ditt
            i mange år. Ved å velge riktig størrelse, høy energieffektivitet og lavt
            standby-forbruk kan du kutte forbruket uten å ofre kvalitet eller komfort.
          </p>
          <ul>
            <li>Mindre kWh hver dag → lavere regning, lavere CO₂.</li>
            <li>Lengre levetid og bedre garanti/service gir færre utskiftninger.</li>
            <li>Smart styring og automasjon utnytter strømmen når den er billigst.</li>
          </ul>
        </section>

        {/* Slik velger du */}
        <section className="mt12" id="slik-velger-du">
          <h2>Slik velger du – sjekkliste før kjøp</h2>
          <ol>
            <li>
              <b>Behov og størrelse:</b> Ikke kjøp større enn nødvendig (kjøl/frys, TV, varmepumpe).
            </li>
            <li>
              <b>Energimerke/datablad:</b> Se årlig kWh (EU-etikett / Energy Star). Sammenlign
              modeller i samme størrelsesklasse.
            </li>
            <li>
              <b>Standby-forbruk:</b> Under 0,5 W er målet. Ekte av/på-bryter er et stort pluss.
            </li>
            <li>
              <b>Smart styring:</b> Termostat/tidsur/app, ukeprogram og sensorer.
            </li>
            <li>
              <b>Levetid og service:</b> Reservedeler, filter og garanti lett tilgjengelig.
            </li>
          </ol>
        </section>

        {/* Prioriter disse kategoriene */}
        <section className="mt12" id="kategorier">
          <h2>Prioritér disse kategoriene først</h2>

          <h3>Belysning</h3>
          <ul>
            <li>Bytt til LED (≥ 90 lm/W). Bruk dimming og bevegelsessensor i gang/ute.</li>
            <li>Riktig fargetemperatur: 2700–3000 K i oppholdsrom for komfort.</li>
            <li>Unngå dekorpærer som trekker mye – se på faktisk lumen/kWh.</li>
          </ul>

          <h3>Kjøl og frys</h3>
          <ul>
            <li>Velg volum etter husholdning (literskapasitet). For stort = unødvendig kWh.</li>
            <li>Hold 4 °C (kjøl) og –18 °C (frys). Avrim regelmessig.</li>
            <li>Se årlig kWh på etiketten – forskjellen mellom to modeller kan være 50–150 kWh/år.</li>
          </ul>

          <h3>Vask og tørk</h3>
          <ul>
            <li>Velg vaskemaskin med <b>eco-program</b> og <b>autodosering</b>.</li>
            <li>Vurder <b>varmepumpetørketrommel</b> – lavere kWh per tørk.</li>
            <li>Bruk natt-/lavprisvinduer om du har tidsdifferensiert strøm.</li>
          </ul>

          <h3>Oppvarming og varmtvann</h3>
          <ul>
            <li>Varmepumpe med høy SCOP, riktig dimensjonert til rommet/huset.</li>
            <li>Termostatsoner, ukeprogram, nattsenking. Sparedusj (6–9 l/min).</li>
            <li>Isoler bereder og rør; vurder smart styring av varmtvann.</li>
          </ul>

          <h3>Småelektronikk og hjemmekontor</h3>
          <ul>
            <li>Skjermer/PC: aktiver strømsparing. Slå helt av etter arbeidstid.</li>
            <li>Ruter/TV-boks på tidsur om natten. Unngå “alltid på”-lading.</li>
            <li>Smarthub + plugger for å kutte standby når du ikke er hjemme.</li>
          </ul>

          <Image
            className="mt12"
            src="/bilder/energismarte1.png"
            alt="Eksempler på forbruksforskjeller"
            width={1200}
            height={700}
          />
        </section>

        {/* Regneeksempel */}
        <section className="mt12" id="regneeksempel">
          <h2>Lite regneeksempel: kjøl/frys</h2>
          <p className="paragraph">
            Modell A bruker 240 kWh/år, modell B bruker 150 kWh/år. Med 1,2 kr/kWh
            sparer du ca. 108 kr/år. Over 12 år er det ~1 300 kr – i tillegg kommer
            CO₂-besparelsen. Tar du flere slike valg i hjemmet, blir effekten stor.
          </p>
        </section>

        {/* Smarte grep etter kjøp */}
        <section className="mt12" id="etter-kjop">
          <h2>Smarte grep etter at du har kjøpt</h2>
          <ul>
            <li>Aktiver <b>eco-/øko-modus</b>, tidsstyring og autoprogrammer.</li>
            <li>Oppdater firmware i appen – ofte gir det bedre styring/forbruk.</li>
            <li>Vedlikehold: rens filter (varmepumpe, tørketrommel), støvsug kjøleribber.</li>
            <li>Mål forbruket med energimåler/AMS-app for å se faktisk effekt.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt12" id="faq">
          <h2>Vanlige spørsmål</h2>
          <h3>“Er A vs. B på energimerket egentlig viktig?”</h3>
          <p className="paragraph">
            Ja, spesielt for produkter som står på døgnet rundt (kjøl/frys) eller
            brukes ofte (vask/tørk). Forskjellen i kWh summeres over mange år.
          </p>
          <h3>“Smartplugg eller innebygd styring?”</h3>
          <p className="paragraph">
            Har produktet allerede god app/ukeprogram, bruk det. Ellers kan smartplugger
            gi fine gevinster på TV-benk, hjemmekontor og ruter/mesh.
          </p>
          <h3>“Når lønner det seg å bytte ut gammelt utstyr?”</h3>
          <p className="paragraph">
            Når årlig kWh er vesentlig høyere enn nye modeller, eller ved hyppige feil.
            Regn på kWh-besparelse × levetid vs. innkjøpspris.
          </p>
        </section>

        {/* Oppsummering */}
        <section className="mt12" id="oppsummering">
          <h2>Kort oppsummert</h2>
          <ul>
            <li>Velg riktig størrelse og <b>lavt årlig kWh</b> fra start.</li>
            <li>Krev <b>standby &lt; 0,5 W</b> og ekte av/på-bryter.</li>
            <li>Aktiver <b>smart styring</b> (termostat/tidsur/app).</li>
            <li>Vedlikehold og mål – justér etter faktiske data.</li>
          </ul>
          <p className="paragraph">
            Velg <b>ett</b> område i dag (lys, kjøl/frys, vask/tørk, varme, hjemmekontor) og gjør ett konkret tiltak – 
            besparelsen starter med det første grepet.
          </p>
        </section>

        <div className="mt12">
          <Link className="btn" href="/">Tilbake</Link>
        </div>
      </article>
    </>
  );
}
