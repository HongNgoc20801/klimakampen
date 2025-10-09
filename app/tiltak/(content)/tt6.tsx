// app/tiltak/_content/tt6.tsx
import Image from "next/image";
import Link from "next/link";
import Hero from "@/app/components/Hero";

export const meta = {
  id: "tt6",
  title: "Bruk strømmen smart",
  excerpt:
    "Senk 1–2 °C, nattsenking, laststyring, vask/lading utenom topplast og bytt til LED – kutt kWh og CO₂ uten å kutte komfort.",
  img: "/bilder/strømmen.webp",
};

export default function TT6() {
  return (
    <>
      <Hero
        kicker="Klimatiltak"
        title={
          <>
            Bruk strømmen smart{" "}
            <span className="accent">– lavere kWh, samme komfort</span>
          </>
        }
        subtitle="Praktiske grep for varme, varmtvann, belysning, hvitevarer og elbil – slik senker du forbruk og utslipp hver dag."
        imageSrc={meta.img}
        imageAlt="Strømstyring i hjemmet"
        height={300}
        fullBleed
        align="center"
        actions={[{ href: "#start", label: "Start" }]}
      />

      <article className="container" id="start">
        <Link className="btn" href="/">Tilbake</Link>

        {/* Hvorfor */}
        <section className="mt12" id="hvorfor">
          <h1>Hvorfor “strømsmart” hverdag?</h1>
          <p className="paragraph">
            Norske hjem bruker mest strøm på oppvarming og varmtvann, deretter
            lys og hvitevarer. Med noen enkle vaner og smart styring kan du
            redusere toppene (topplast), flytte forbruk til gunstige timer og
            senke total kWh – som gir lavere regning og lavere CO₂-avtrykk.
          </p>
          <ul>
            <li>Små justeringer i temperatur gir stor effekt over tid.</li>
            <li>Laststyring og tidsur sørger for automatikk – du slipper å huske.</li>
            <li>LED og effektive hvitevarer kutter forbruk hver eneste dag.</li>
          </ul>
        </section>

        {/* 10 raske grep */}
        <section className="mt12" id="raske-grep">
          <h2>10 raske grep du kan starte med i dag</h2>
          <ol>
            <li><b>Senk innetemperaturen 1–2 °C.</b> Ca. 5 % lavere oppvarmingsbehov per grad.</li>
            <li><b>Nattsenking 2–3 °C</b> på soverom og oppholdsrom du ikke bruker om natten.</li>
            <li><b>Tidsstyr dusj/bereder</b> og sett varmtvann til lavpris-vinduer.</li>
            <li><b>Vask/tørk og elbillading</b> utenom topplast (morgen/kveld).</li>
            <li><b>Bytt til LED</b> og slå av lys i rom du ikke bruker.</li>
            <li><b>Tett trekk</b> og bruk termostatsoner for riktig varme der du er.</li>
            <li><b>Eco-program</b> på vaskemaskin/oppvaskmaskin.</li>
            <li><b>Slå helt av standby</b> på TV-benk/ruter med tidsur eller smartplugg.</li>
            <li><b>Trekk for gardiner om natta</b> og hold dører lukket til kalde rom.</li>
            <li><b>Mål forbruket</b> i app/AMS – justér etter faktiske data.</li>
          </ol>
        </section>

        {/* Oppvarming */}
        <section className="mt12" id="oppvarming">
          <h2>Oppvarming: store kutt uten å ofre komfort</h2>
          <ul>
            <li><b>Termostat og ukeprogram:</b> Sett egne profiler for hver sone/rom.</li>
            <li><b>Nattsenking:</b> Automatisk 23:00–06:00 gir merkbar reduksjon.</li>
            <li><b>Varmepumpe:</b> Hold jevn viftehastighet, unngå hyppige “boosts”.</li>
            <li><b>Tett lekkasjer:</b> Tetningslister på dører/vinduer gir rask effekt.</li>
          </ul>
        </section>

        {/* Varmtvann */}
        <section className="mt12" id="varmtvann">
          <h2>Varmtvann: mindre liter, smartere timing</h2>
          <ul>
            <li><b>Sparedusj (6–9 l/min)</b> og 5–7 min dusjtid reduserer kWh kraftig.</li>
            <li>
              <b>Styr bereder</b> med tidsur/smartplugg – varm hovedsakelig når strømmen
              er rimelig og behovet er lavt.
            </li>
            <li><b>Isolér bereder/rør</b> og sjekk temperatur (60 °C for legionellasikring).</li>
          </ul>
        </section>

        {/* Belysning */}
        <section className="mt12" id="lys">
          <h2>Belysning: LED + styring</h2>
          <ul>
            <li><b>LED overalt:</b> Sikt mot ≥ 90 lm/W og riktig fargetemperatur 2700–3000 K.</li>
            <li><b>Dimming og bevegelsessensor</b> i gang, bod og ute.</li>
            <li><b>Zonestyring:</b> Slå av hele soner med ett trykk/scenario.</li>
          </ul>
        </section>

        {/* Hvitevarer */}
        <section className="mt12" id="hvitevarer">
          <h2>Hvitevarer: bruk eco og riktig last</h2>
          <ul>
            <li><b>Eco-program</b> på oppvask/vask – lavere temperatur, lenger tid, mindre kWh.</li>
            <li><b>Kjør full maskin</b>, lufttørk når mulig, rens filter jevnlig.</li>
            <li><b>Utenom topplast:</b> Start maskiner etter kl. 22 eller midt på dagen.</li>
          </ul>
        </section>

        {/* Elbil */}
        <section className="mt12" id="elbil">
          <h2>Elbil: smart lading</h2>
          <ul>
            <li><b>Planlagt lading</b> til lavpris-timer (natt/midt på dagen ved sol).</li>
            <li><b>Grense for maks %</b> i hverdagen (f.eks. 70–80 %) og boost kun ved behov.</li>
            <li><b>Dynamisk lastbalansering</b> hvis du har høy last i huset.</li>
          </ul>
        </section>

        {/* Smart styring */}
        <section className="mt12" id="smart">
          <h2>Smart styring som faktisk hjelper</h2>
          <ul>
            <li><b>Termostater/varmestyring</b> per rom + ukeprogram.</li>
            <li><b>Smartplugger/tidsur</b> på TV-benk, ruter/mesh, kontorutstyr.</li>
            <li><b>Scenarier</b> (“Borte”, “Natt”) som senker temp og slår av standby.</li>
          </ul>
          <Image
            className="mt12"
            src="/bilder/strømmen1.png"
            alt="Eksempel på laststyring og forbruksoversikt"
            width={1200}
            height={700}
          />
        </section>

        {/* Regneeksempler */}
        <section className="mt12" id="eksempel">
          <h2>Raske regneeksempler</h2>
          <ul>
            <li>
              <b>–1 °C innendørs:</b> ~5 % lavere oppvarmingsbehov. Har du 10 000 kWh/år til
              varme kan du spare ~500 kWh.
            </li>
            <li>
              <b>Dusj 10 → 6 min:</b> To personer kan spare 400–700 kWh/år avhengig av
              forbruk og bereder.
            </li>
            <li>
              <b>LED bytte:</b> 10 pærer à 7 W som står 4 t/dag ~ 100 kWh/år. Doble antall → ~200 kWh.
            </li>
            <li>
              <b>Standby-kutt:</b> 10 W døgnet rundt = 87,6 kWh/år per enhet. Slår du av tre slike,
              sparer du ~260 kWh/år.
            </li>
          </ul>
        </section>

        {/* Feilkilder */}
        <section className="mt12" id="feil">
          <h2>Vanlige feil – og hvordan unngå dem</h2>
          <ul>
            <li>
              <b>For lav temp på bereder:</b> Hold 60 °C for helse/trygghet, men styr når den varmer.
            </li>
            <li>
              <b>Hyppig “boost” på varmepumpe:</b> Gir høyere forbruk – bruk jevn drift og planlagte profiler.
            </li>
            <li>
              <b>Glemmer vedlikehold:</b> Skitne filtre og tette ventiler øker kWh. Rens jevnlig.
            </li>
          </ul>
        </section>

        {/* Oppsummering */}
        <section className="mt12" id="oppsummering">
          <h2>Kort oppsummert</h2>
          <ul>
            <li>Senk 1–2 °C og bruk nattsenking.</li>
            <li>Styr varmtvann, vask/tørk og lading bort fra topplast.</li>
            <li>Bytt til LED, kutt standby, og bruk eco-program.</li>
            <li>Mål forbruket og justér måned for måned.</li>
          </ul>
          <p className="paragraph">
            Velg <b>ett konkret grep</b> i dag – aktiver nattsenking, sett ladeplan for elbilen,
            eller installer to smartplugger. Gevinsten kommer med én gang.
          </p>
        </section>

        <div className="mt12">
          <Link className="btn" href="/">Tilbake</Link>
        </div>
      </article>
    </>
  );
}
