// app/tiltak/_content/tt8.tsx
import Image from "next/image";
import Link from "next/link";
import Hero from "@/app/components/Hero";

export const meta = {
  id: "tt8",
  title: "Kildesorter og resirkuler riktig",
  excerpt:
    "Spar ressurser og CO₂ ved å sortere hjemme, levere farlig avfall riktig og gi materialer et nytt liv.",
  img: "/bilder/kildesortering.jpg", 
};

export default function TT8() {
  return (
    <>
      <Hero
        kicker="Klimatiltak"
        title={
          <>
            Kildesorter og resirkuler{" "}
            <span className="accent">– små vaner, stor effekt</span>
          </>
        }
        subtitle="Riktig sortering sparer råvarer og energi, reduserer utslipp og holder farlige stoffer ute av naturen."
        imageSrc={meta.img}
        imageAlt="Kildesortering hjemme"
        height={300}
        fullBleed
        align="center"
        actions={[{ href: "#start", label: "Start" }]}
      />

      <article className="container" id="start">
        <Link className="btn" href="/">Tilbake</Link>

        {/* Hvorfor */}
        <section className="mt12" id="hvorfor">
          <h1>Hvorfor kildesortere?</h1>
          <p className="paragraph">
            Når vi sorterer avfall som papir, metall, glass, plast og matavfall,
            kan materialene brukes på nytt. Det betyr mindre behov for jomfruelige
            råvarer og mindre energi i produksjon – som igjen betyr lavere CO₂.
            I tillegg hindrer vi at farlige stoffer fra batterier, maling og
            elektronikk lekker ut i naturen.
          </p>
          <ul>
            <li>Resirkulert metall og glass kan gjenvinnes nesten uendelig.</li>
            <li>Plast som materialgjenvinnes blir til nye produkter og kutter olje-/gassbehov.</li>
            <li>Matavfall blir til biogass og biogjødsel ved riktig innsamling.</li>
          </ul>
        </section>

        {/* Hva sorteres hvor */}
        <section className="mt12" id="hva-hvor">
          <h2>Hva skal hvor? – rask oversikt</h2>
          <ul>
            <li>
              <b>Papir/papp:</b> aviser, magasiner, pappesker (flat ut). Ikke vått/tilsølt.
            </li>
            <li>
              <b>Plastemballasje:</b> flasker, bokser, poser – <i>tomme, tørre, skrapt rene</i>.
            </li>
            <li>
              <b>Glass- og metallemballasje:</b> syltetøyglass, bokser, lokk. Skyll lett, fjern matrester.
            </li>
            <li>
              <b>Matavfall:</b> matrester, skall, kaffegrut – i grønn pose/biopose der kommunen har ordning.
            </li>
            <li>
              <b>Restavfall:</b> bleier, støvsugerposer, keramikkskår, ødelagte ting uten materialgjenvinning.
            </li>
            <li>
              <b>Tekstiler:</b> hele/rene til gjenbruk; ødelagte til tekstilinnsamling der det finnes.
            </li>
          </ul>
          <p className="paragraph">
            Obs: <b>Lyspærer, batterier, småelektronikk og maling</b> er <b>farlig avfall</b> – <u>aldri</u> i rest! Lever til butikk/returstasjon.
          </p>
        </section>

        {/* Oppsett hjemme */}
        <section className="mt12" id="oppsett">
          <h2>Slik setter du opp et enkelt system hjemme</h2>
          <ol>
            <li>
              <b>Tre beholdere</b> på kjøkken: matavfall, plast, rest. Papir kan stå i gang/bod.
            </li>
            <li>
              <b>Glass/metall</b> i egen bøtte nær utgang – lett å ta med til returpunkt.
            </li>
            <li>
              <b>Mini-stasjon</b> for farlig avfall: eske med rom til batterier, lyspærer, småelektronikk.
            </li>
            <li>
              <b>Plassering</b>: tett på der avfall oppstår (under vask/benk) for å gjøre riktig valg lett.
            </li>
            <li>
              <b>Merking</b> med farger/ikoner – spesielt nyttig for barn/gjester.
            </li>
          </ol>
          
        </section>

        {/* Farlig avfall og EE */}
        <section className="mt12" id="farlig-ee">
          <h2>Farlig avfall og EE-avfall (elektrisk/elektronikk)</h2>
          <ul>
            <li>
              <b>Batterier og lyspærer</b> leveres i butikk som selger samme vare – ofte gratis retur.
            </li>
            <li>
              <b>Småelektronikk</b> (kabler, ladere, mobil) kan leveres til forhandler/returstasjon.
            </li>
            <li>
              <b>Maling/lakk, spraybokser, kjemikalier</b> – alltid til returstasjon (hold originalemballasje om mulig).
            </li>
          </ul>
          <p className="paragraph">
            Tips: Ha en egen “returbag” i boden – når den er full, tar du en tur til returpunktet.
          </p>
        </section>

        {/* Matavfall og kompost */}
        <section className="mt12" id="biomat">
          <h2>Matavfall: mindre matsvinn, mer energi</h2>
          <ul>
            <li>
              Bruk <b>bioposer</b> og knyt godt – hold bøtta tørr (legg litt papir i bunnen).
            </li>
            <li>
              I kommuner med <b>biogassordning</b> blir avfallet til drivstoff og gjødsel.
            </li>
            <li>
              Har du hage? <b>Hjemmekompost</b> gir jord og reduserer restavfall (følg lokale regler).
            </li>
          </ul>
        </section>

        {/* Vanlige feil */}
        <section className="mt12" id="feil">
          <h2>Vanlige feil – og raske løsninger</h2>
          <ul>
            <li>
              <b>Skitten plast i rest:</b> Skrap/tørk – det holder ofte å fjerne synlige matrester.
            </li>
            <li>
              <b>Drikkeglass/keramikk i glassiglo:</b> Nei, lever til returstasjon (annet smeltepunkt).
            </li>
            <li>
              <b>Poser i glass/metall:</b> Tøm ut og kast posen i plast eller rest, ikke ned i iglo.
            </li>
            <li>
              <b>Farlig avfall i rest:</b> Alltid egen retur – bruk “returbag”-trikset.
            </li>
          </ul>
        </section>

        {/* Effekt og regneeksempler (veiledende) */}
        <section className="mt12" id="effekt">
          <h2>Hva monner mest? (veiledende)</h2>
          <ul>
            <li>
              <b>Metall og glass</b>: stor klimaeffekt per kilo – prioriter å levere disse riktig.
            </li>
            <li>
              <b>Plast</b>: høy verdi når ren – tom, tørr, skrapt ren = bedre materialgjenvinning.
            </li>
            <li>
              <b>Matavfall</b>: egen innsamling gir biogass/gjødsel og reduserer utslipp fra deponi.
            </li>
          </ul>
          <p className="paragraph">
            Husk: Det viktigste er <b>jevn, enkel rutine</b>. Et godt oppsett hjemme slår all “avansert teori”.
          </p>
        </section>

        {/* Oppsummering */}
        <section className="mt12" id="oppsummering">
          <h2>Kort oppsummert</h2>
          <ul>
            <li>Gjør det lett å gjøre rett: godt merket system nær der avfall oppstår.</li>
            <li>Lever farlig avfall/EE til butikk eller returstasjon – aldri i rest.</li>
            <li>Prioriter glass, metall, plast og matavfall for størst nytte.</li>
            <li>Hold det ryddig og tøm jevnlig – da henger hele husholdningen med.</li>
          </ul>
          <p className="paragraph">
            Velg ett grep i dag: sett opp en “returbag”, merk beholderne, eller lag en fast ukedag for levering.
          </p>
        </section>

        <div className="mt12">
          <Link className="btn" href="/">Tilbake</Link>
        </div>
      </article>
    </>
  );
}
