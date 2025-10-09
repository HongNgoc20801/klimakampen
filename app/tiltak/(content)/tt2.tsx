// app/tiltak/_content/tt2.tsx
import Image from "next/image";
import Link from "next/link";
import Hero from "@/app/components/Hero";

export const meta = {
  id: "tt2",
  title: "Velg klimavennlige reisemål",
  excerpt:
    "Reis kortere, reis saktere og velg grønn transport og overnatting. Opplevelsen blir rikere – utslippene lavere.",
  img: "/bilder/reisemål.webp",
};

export default function TT2() {
  return (
    <>
      <Hero
        kicker="Klimatiltak"
        title={
          <>
            Velg klimavennlige reisemål{" "}
            <span className="accent">– lavere CO₂, rikere tur</span>
          </>
        }
        subtitle="Tenk nærmere, lengre opphold og grønnere transport. Små valg i planleggingen gir store kutt i utslipp."
        imageSrc={meta.img}
        imageAlt="Klimavennlig reise i norsk natur"
        height={300}
        fullBleed
        align="center"
        actions={[{ href: "#start", label: "Start" }]}
      />

      <article className="container" id="start">
        <Link className="btn" href="/">Tilbake</Link>

        {/* Hvorfor */}
        <section className="mt12">
          <h1>Hvorfor klimavennlig reising?</h1>
          <p className="paragraph">
            Transport utgjør en stor del av utslippene knyttet til ferie og fritid.
            Ved å velge nærere reisemål, tog/buss fremfor fly, og miljøsertifisert
            overnatting, kan du redusere klimaavtrykket betraktelig – uten å ofre opplevelsen.
          </p>
          <ul>
            <li>Mindre CO₂ per kilometer ved tog og buss.</li>
            <li>Rimeligere totalbudsjett når du reiser saktere og planlegger smart.</li>
            <li>Mer tid på stedet – mindre stress, mer innhold.</li>
          </ul>
        </section>

        {/* Sammenligning transport */}
        <section className="mt12" id="transport-sammenligning">
          <h2>Hva lønner seg klimamessig?</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Transport</th>
                <th>Utslipp (omtrentlig per passasjer-km)</th>
                <th>Kommentar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tog</td>
                <td>Lavt (ofte &lt; 20 g CO₂)</td>
                <td>I Norge er mye togdrift på fornybar strøm.</td>
              </tr>
              <tr>
                <td>Buss/ekspressbuss</td>
                <td>Middels (ca. 60–80 g CO₂)</td>
                <td>Godt alternativ på mellomlange strekninger.</td>
              </tr>
              <tr>
                <td>Bil (1 person)</td>
                <td>Høyere (150–200+ g CO₂)</td>
                <td>Samkjøring eller elbil reduserer per person.</td>
              </tr>
              <tr>
                <td>Bil (2+ personer)</td>
                <td>Middels (delt på antall)</td>
                <td>Del kostnader og utslipp – velg el eller hybrid om mulig.</td>
              </tr>
              <tr>
                <td>Ferge (uten bil)</td>
                <td>Middels–høyt</td>
                <td>Bedre uten bil; vurder kombinasjon tog + ferge.</td>
              </tr>
              <tr>
                <td>Fly (kort–mellomdistanse)</td>
                <td>Høy (200–300+ g CO₂)</td>
                <td>Direktefly er bedre enn mellomlandinger.</td>
              </tr>
            </tbody>
          </table>
          <p className="paragraph">
            Tallene er veiledende. Effekten i praksis avhenger av fyllingsgrad, rutevalg og kjøremønster.
          </p>
        </section>

        {/* Kvikke regneeksempler */}
        <section className="mt12" id="regneeksempler">
          <h2>Kjappe regneeksempler</h2>
          <ul>
            <li>
              <b>Byweekend i stedet for storbyfly:</b> Tog til naboby (200 km)
              kan kutte flere titalls kg CO₂ sammenlignet med fly t/r til kontinentet.
            </li>
            <li>
              <b>Sommerferie i Norge:</b> 2 uker med tog/buss og elsykkel-leie
              kan gi 50–80% lavere utslipp enn fly + leiebil.
            </li>
            <li>
              <b>Fjelltur med samkjøring:</b> 4 personer i én bil halverer–firedobler
              utslipp per person vs. én–to i hver bil.
            </li>
          </ul>
        </section>

        {/* Hvilke reisemål? */}
        <section className="mt12" id="reisemal">
          <h2>Velg reisemål med kortere reise – og rikere innhold</h2>
          <p className="paragraph">
            Tenk «nærmere og dypere»: Flere netter på ett sted i stedet for mange korte hopp.
            Velg steder med gode kollektivtilbud, sykkelleie og nærhet til natur/kultur.
          </p>
          <ul>
            <li>Byer med togstasjon, sykkelnett og bilfrie soner.</li>
            <li>Fjell og fjord-reisemål koblet til tog/buss + transfer.</li>
            <li>Små tettsteder med kort avstand til turstier, badeplasser og lokal kultur.</li>
          </ul>
        </section>

        {/* Overnatting */}
        <section className="mt12" id="overnatting">
          <h2>Grønn overnatting – hva ser du etter?</h2>
          <ul>
            <li>Miljøsertifisering (f.eks. Miljøfyrtårn, Svanemerket eller Green Key).</li>
            <li>Tilgang til kollektiv, sykkelparkering/-utleie, elbillading.</li>
            <li>Lokale råvarer, matsvinn-tiltak, refill av vann og såper i dispenser.</li>
          </ul>
        </section>

        {/* Reiseeksempler */}
        <section className="mt12" id="eksempler">
          <h2>Tre klimavennlige reiseoppsett</h2>
          <ol>
            <li>
              <b>Grønn byhelg:</b> Tog inn fredag, bysykkel + kollektiv,
              2 netter i miljøsertifisert hotell, hjem søndag kveld.
            </li>
            <li>
              <b>Fjelluke uten bil:</b> Tog/buss til stasjon, transfer til hytte,
              dagsturer til fots/elsykkel, lokal mat og langt opphold.
            </li>
            <li>
              <b>Familieferie ved kysten:</b> Tog + ferge uten bil, leilighet
              med kjøkken, strand og aktiviteter i gangavstand.
            </li>
          </ol>
          <Image
            className="mt12"
            src="/bilder/reisemål1.jpg"
            alt="Infografikk om klimavennlig reise"
            width={1200}
            height={700}
          />
        </section>

        {/* Pakk smart & på stedet */}
        <section className="mt12" id="pakke-lokalt">
          <h2>Pakk smart og opplev mer på stedet</h2>
          <ul>
            <li>Lett sekk/koffert, flerbrukstøy, gjenfyllbare flasker.</li>
            <li>Planlegg dager uten motorisert transport (gå, sykle, padle).</li>
            <li>Støtt lokale, små aktører og lavutslippsaktiviteter.</li>
          </ul>
        </section>

        {/* Fly når du må */}
        <section className="mt12" id="fly">
          <h2>Når fly er eneste reelle valg</h2>
          <ul>
            <li>Velg direktefly der det er mulig (færre avganger = lavere utslipp).</li>
            <li>Reis lengre og sjeldnere – samle turer, bli lenger per destinasjon.</li>
            <li>Klimakompensér restutslipp gjennom seriøse ordninger.</li>
            <li>Bruk kollektiv til/fra flyplass – unngå solokjøring.</li>
          </ul>
        </section>

        {/* Bestillings-sjekkliste */}
        <section className="mt12" id="sjekkliste">
          <h2>Sjekkliste før du bestiller</h2>
          <ol>
            <li>Kan turen tas med tog/buss (helt eller delvis)?</li>
            <li>Finnes det gode alternativer nærmere hjemme?</li>
            <li>Har overnattingen en relevant miljøsertifisering?</li>
            <li>Er det sykkelutleie, elbillading eller bilfrie soner?</li>
            <li>Kan du reise i lavsesong og bli lenger?</li>
          </ol>
        </section>

        {/* FAQ */}
        <section className="mt12" id="faq">
          <h2>Vanlige spørsmål</h2>
          <h3>“Blir ikke toget mye dyrere?”</h3>
          <p className="paragraph">
            Med tidlig booking og fleksible tider kan tog og buss være rimeligere enn du tror – 
            og du slipper bagasje-, parkering- og bomkostnader.
          </p>
          <h3>“Mister vi ikke mye tid?”</h3>
          <p className="paragraph">
            Reiser du saktere, får du mer tid <i>på tur</i>: lese, sove, jobbe, se naturen.
            Én lang ferie med tog kan gi mer ro enn to korte flyturer.
          </p>
          <h3>“Hva om vi må ha bil?”</h3>
          <p className="paragraph">
            Samkjør, velg elbil der mulig, og planlegg ruten for færre mil.
            Kombinasjoner som tog + leiebil siste bit kan være et godt kompromiss.
          </p>
        </section>

        {/* Oppsummering */}
        <section className="mt12" id="oppsummering">
          <h2>Kort oppsummert</h2>
          <ul>
            <li>Velg nærere reisemål og bli lenger per sted.</li>
            <li>Foretrekk tog/buss; samkjør eller velg elbil om bil må til.</li>
            <li>Bo miljøsertifisert og bruk lavutslippsaktiviteter.</li>
            <li>Kompensér restutslipp når alternativer mangler.</li>
          </ul>
          <p className="paragraph">
            Start med én konkret endring i år: <b>bytt én flytur til togreise</b> eller{" "}
            <b>legg ferien til et reisemål du når med kollektiv</b>. Opplevelsen vinner – klimaet også.
          </p>
        </section>

        <div className="mt12">
          <Link className="btn" href="/">Tilbake</Link>
        </div>
      </article>
    </>
  );
}
