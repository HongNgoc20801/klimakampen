// app/tiltak/_content/tt9.tsx
import Image from "next/image";
import Link from "next/link";
import Hero from "@/app/components/Hero";

export const meta = {
  id: "tt9",
  title: "Installer solceller hjemme",
  excerpt:
    "Produser din egen fornybare strøm, senk strømregningen og kutt CO₂ – på tak, fasade eller carport.",
  img: "/bilder/solceller.webp", // bytt hvis du har et annet bilde
};

export default function TT9() {
  return (
    <>
      <Hero
        kicker="Klimatiltak"
        title={
          <>
            Solceller på eget hus{" "}
            <span className="accent">– ren energi år etter år</span>
          </>
        }
        subtitle="Med riktig dimensjonering, plassering og styring kan du dekke en stor del av eget forbruk og kutte utslipp."
        imageSrc={meta.img}
        imageAlt="Solcellepanel på hustak"
        height={300}
        fullBleed
        align="center"
        actions={[{ href: "#start", label: "Start" }]}
      />

      <article className="container" id="start">
        <Link className="btn" href="/">Tilbake</Link>

        {/* Hvorfor solceller */}
        <section className="mt12" id="hvorfor">
          <h1>Hvorfor solceller?</h1>
          <p className="paragraph">
            Solceller (PV) lar deg produsere egen strøm fra solen. Det gir lavere
            strømregning, mer forutsigbarhet og reduserte utslipp over anleggets
            levetid. I tillegg øker du robustheten i perioder med høye strømpriser
            og kan bidra med overskuddskraft til nettet på solrike dager.
          </p>
          <ul>
            <li>Fornybar energi uten utslipp i drift.</li>
            <li>Levetid typisk 25–30 år med gradvis ytelsesreduksjon.</li>
            <li>Kan kombineres med varmepumpe, elbillading og smart styring.</li>
          </ul>
        </section>

        {/* Slik fungerer det */}
        <section className="mt12" id="slik-fungerer-det">
          <h2>Slik fungerer et anlegg</h2>
          <ul>
            <li>
              <b>Paneler</b> på tak/fasade fanger sollys og lager likestrøm (DC).
            </li>
            <li>
              <b>Vekselretter (inverter)</b> gjør DC om til 230 V vekselstrøm (AC) til huset.
            </li>
            <li>
              <b>Produksjonen</b> brukes først i eget hus; overskudd kan mates ut i strømnettet.
            </li>
            <li>
              <b>Overvåking</b> via app/web gir løpende innsikt i kWh og effekt.
            </li>
          </ul>
          
        </section>

        {/* Potensial og krav til tak */}
        <section className="mt12" id="tak-krav">
          <h2>Er taket ditt egnet?</h2>
          <ul>
            <li>
              <b>Plass</b>: 15–25 m² gir ofte 3–5 kWp. Har du mer areal, kan du gå større.
            </li>
            <li>
              <b>Retning/helling</b>: Sør (±45°) og 20–45° helning er ideelt, men Ø/V fungerer godt.
            </li>
            <li>
              <b>Skade/skygging</b>: Unngå skygge fra piper, trær og nabobygg – bruk evt. effektoptimerere.
            </li>
            <li>
              <b>Tekk/tilstand</b>: Vurder takets levetid. Skal du bytte tekking om få år, gjør det før montering.
            </li>
            <li>
              <b>Last og festing</b>: Følg leverandørens godkjenninger for vind/snowlast og riktig innfesting.
            </li>
          </ul>
        </section>

        {/* Dimensjonering */}
        <section className="mt12" id="dimensjonering">
          <h2>Dimensjonering – hvor stort bør du bygge?</h2>
          <p className="paragraph">
            Start med årsforbruket ditt (kWh) og når på døgnet/året du bruker mest
            (dagtid/sommer). Et anlegg som dekker 20–50% av årsforbruket <i>i snitt</i>
            gir ofte god egenbruk og økonomi. Eksempel (veiledende):
          </p>
          <ul>
            <li>
              <b>3–5 kWp</b> (10–15 paneler) – typisk rekkehus/leilighet i lavblokk med egnet tak.
            </li>
            <li>
              <b>6–10 kWp</b> – vanlig enebolig med oppvarming via varmepumpe/el.
            </li>
            <li>
              <b>10–15 kWp</b> – større enebolig med elbil og høyt forbruk som strekker seg utover dagtid.
            </li>
          </ul>
          <p className="paragraph">
            Hovedregelen er å maksimere <b>egenforbruk</b> (andelen du bruker selv) fremfor kun
            maksimal årsproduksjon. Smart styring og lastflytting (se under) hjelper.
          </p>
        </section>

        {/* Økonomi og støtte */}
        <section className="mt12" id="okonomi">
          <h2>Økonomi, støtte og avtaler</h2>
          <ul>
            <li>
              <b>Investering</b>: Kostnad per kWp avhenger av tak, kabling og komponentvalg.
            </li>
            <li>
              <b>Støtteordninger</b>: Sjekk oppdatert informasjon fra Enova/kommune/borettslag.
            </li>
            <li>
              <b>Plusskunde</b>: Avtale med nettselskap/strømleverandør for salg av overskuddskraft.
            </li>
            <li>
              <b>Forsikring/garanti</b>: Produktgaranti på paneler (ytelse/år), inverter og montasje.
            </li>
          </ul>
          <p className="paragraph">
            Be alltid om <b>totalpris</b> med alle tillegg (stillaser, gjennomføringer, kabling, måler/byråkrati).
          </p>
        </section>

        {/* Smart styring og batteri */}
        <section className="mt12" id="smart">
          <h2>Smart styring, elbil og batteri</h2>
          <ul>
            <li>
              <b>Elbil-lading på dagtid</b> når det er sol gir høy egenbruk.
            </li>
            <li>
              <b>Varmtvann/varmepumpe</b>: Kjør mer når produksjonen er høy (tidsstyring/automatisering).
            </li>
            <li>
              <b>Hjemmebatteri</b>: Kan øke egenbruk og gi noe backup. Vurder nøye mot pris/nytte.
            </li>
          </ul>
        </section>

        {/* Sikkerhet og kvalitet */}
        <section className="mt12" id="sikkerhet">
          <h2>Sikker montering og kvalitet</h2>
          <ul>
            <li>
              Bruk <b>sertifisert installatør</b> og komponenter med relevante godkjenninger.
            </li>
            <li>
              Riktig <b>DC-kabling</b>, pluggkoblinger og gjennomføringer er kritisk for brannsikkerhet.
            </li>
            <li>
              Sørg for <b>dokumentasjon</b>: enlinjeskjema, kursoversikt, samsvarserklæring, bilder.
            </li>
            <li>
              Avtal <b>årlig sjekk</b> av kabler/inverter og hold overflater rene (skånsom vask ved behov).
            </li>
          </ul>
        </section>

        {/* Vanlige feil */}
        <section className="mt12" id="feil">
          <h2>Vanlige feil – og hvordan unngå dem</h2>
          <ul>
            <li>
              <b>Overdimensjonering</b> uten plan for egenbruk → lav lønnsomhet. Løsning: start moderat, bygg ut senere.
            </li>
            <li>
              <b>Skygge</b> fra piper/trær → mindre produksjon. Løsning: riktig layout + optimizere der det trengs.
            </li>
            <li>
              <b>Gammelt tak</b> → rask oppgradering etter montering. Løsning: koordiner takskift før PV.
            </li>
            <li>
              <b>Manglende dokumentasjon</b> → trøbbel ved salg/forsikring. Løsning: krev komplett FDV.
            </li>
          </ul>
        </section>

        {/* Eksempel og bilde */}
        <section className="mt12" id="eksempel">
          <h2>Eksempel (veiledende)</h2>
          <p className="paragraph">
            En enebolig med 7 kWp sørvendt tak kan produsere flere tusen kWh årlig
            (avhengig av sted/innstråling). Med smart styring og egenbruk 50–70%
            får du god nytte i mange år.
          </p>
          
        </section>

        {/* Oppsummering */}
        <section className="mt12" id="oppsummering">
          <h2>Kort oppsummert</h2>
          <ul>
            <li>Start med forbruket ditt og mål høy egenbruk.</li>
            <li>Sørg for god plassering uten skygge og riktig innfesting.</li>
            <li>Bruk kvalifisert installatør og få komplett dokumentasjon.</li>
            <li>Koble på smart styring og vurder elbil/varmtvann for ekstra effekt.</li>
          </ul>
          <p className="paragraph">
            Velg ett første steg i dag: hent tilbud fra to–tre leverandører, sjekk
            takets tilstand, eller planlegg lastflytting for å øke egenbruk.
          </p>
        </section>

        <div className="mt12">
          <Link className="btn" href="/">Tilbake</Link>
        </div>
      </article>
    </>
  );
}
