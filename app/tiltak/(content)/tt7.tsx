// app/tiltak/_content/tt7.tsx
import Image from "next/image";
import Link from "next/link";
import Hero from "@/app/components/Hero";

export const meta = {
  id: "tt7",
  title: "Reparer og vedlikehold – få ting til å vare",
  excerpt:
    "Forleng levetiden på klær, elektronikk, sykkel, møbler og hvitevarer med enkel service og små reparasjoner.",
  img: "/bilder/reparasjon.jpg", 
};

export default function TT7() {
  return (
    <>
      <Hero
        kicker="Klimatiltak"
        title={
          <>
            Reparer og vedlikehold{" "}
            <span className="accent">– mer bruk, mindre utslipp</span>
          </>
        }
        subtitle="Enkle rutiner og et lite reparasjonskit kan forlenge levetiden med år – sparer både CO₂ og penger."
        imageSrc={meta.img}
        imageAlt="Vedlikehold og reparasjon"
        height={300}
        fullBleed
        align="center"
        actions={[{ href: "#start", label: "Start" }]}
      />

      <article className="container" id="start">
        <Link className="btn" href="/">Tilbake</Link>

        {/* Hvorfor vedlikehold? */}
        <section className="mt12" id="hvorfor">
          <h1>Hvorfor vedlikehold monner</h1>
          <p className="paragraph">
            Mesteparten av klimaavtrykket til tingene våre ligger i{" "}
            <b>produksjonen</b>. Når du får klær, elektronikk eller møbler til å
            vare 2–3 år lenger, sprer du produksjonsutslippet over flere år og
            reduserer behovet for å kjøpe nytt. Det er sirkularitet i praksis.
          </p>
          <ul>
            <li>Mindre behov for ny-produksjon = lavere CO₂.</li>
            <li>Bedre drift og sikkerhet – færre feil og uhell.</li>
            <li>Store besparelser over tid, spesielt på elektronikk og hvitevarer.</li>
          </ul>
        </section>

        {/* Hurtig sjekkliste per kategori */}
        <section className="mt12" id="sjekkliste">
          <h2>Hurtig sjekkliste etter kategori</h2>

          <h3>Klær & sko</h3>
          <ul>
            <li>Sy knapp/søm tidlig; stopp små rifter før de blir store.</li>
            <li>Impregner yttertøy og lær; puss sko jevnlig.</li>
            <li>Vask på lav temperatur, bruk vaskepose for delikate plagg.</li>
          </ul>

          <h3>Elektronikk</h3>
          <ul>
            <li>Bytt batteri/lagring før du bytter hele enheten.</li>
            <li>Rens vifter/porter, oppdater programvare, bruk etui/skjermbeskytter.</li>
            <li>Unngå dyputlading, ikke la ligge og “koke” på lader unødig.</li>
          </ul>

          <h3>Sykkel</h3>
          <ul>
            <li>Rengjør og smør kjede, sjekk dekktrykk hver 2.–3. uke.</li>
            <li>Stram skruer og juster bremser/gir ved behov.</li>
            <li>Vinterlagring: høytrykk = nei; tørk og smør etter våte turer.</li>
          </ul>

          <h3>Møbler</h3>
          <ul>
            <li>Stram hengsler/skruer, lim løse skjøter, olje treverk.</li>
            <li>Trekk om stol/sofa fremfor å kjøpe nytt.</li>
            <li>Bruk møbelknotter og teppe under bord/stoler for å unngå slitasje.</li>
          </ul>

          <h3>Hvitevarer</h3>
          <ul>
            <li>Rens filter (oppvask/vask/tørk), avrim fryser, hold pakninger rene.</li>
            <li>Rett belastning og riktig program = lavere slitasje.</li>
            <li>Vannfilter/avkalking der det er relevant.</li>
          </ul>
        </section>

        {/* Vedlikeholdsplan */}
        <section className="mt12" id="plan">
          <h2>Lag en enkel vedlikeholdsplan</h2>
          <ul>
            <li>
              <b>Månedlig:</b> Støvsug filter (PC/ruter), smør sykkelkjede, stram løse skruer,
              sjekk sømmer/knapper, rydd og se over klær for småskader.
            </li>
            <li>
              <b>Hver 3. måned:</b> Rens avløp/siler, avkalk kaffemaskin, rens vaskemaskin,
              olje treverk, sjekk pakninger på kjøl/frys.
            </li>
            <li>
              <b>Hver 6.–12. måned:</b> Storservice sykkel, full rens av hvitevarer,
              bytt PC-batteri ved kraftig kapasitetsfall, oppgrader RAM/SSD om mulig.
            </li>
          </ul>
          <p className="paragraph">
            Sett på kalenderpåminnelser – 30 minutter i måneden holder overraskende langt.
          </p>
        </section>

        {/* Reparasjonskit */}
        <section className="mt12" id="kit">
          <h2>Bygg et lite reparasjonskit hjemme</h2>
          <ul>
            <li>Nål/tråd, knapper, sylerke, tekstillim, lapper for yttertøy.</li>
            <li>Multibit-skrutrekker, unbrako, tang, små skruer, trelim.</li>
            <li>Kontakt-rens, trykkluft på boks, mikrofiberkluter.</li>
            <li>Sykkel-essentials: umbrako, kjedeolje, lappesaker, minipumpe.</li>
          </ul>
          <p className="paragraph">
            Med dette fikser du 80% av “småtingene” på minutter – før de blir dyre problemer.
          </p>
        </section>

        {/* Feilsøking */}
        <section className="mt12" id="feilsoking">
          <h2>Slik feilsøker du smart</h2>
          <ul>
            <li>Start enkelt: strøm, sikring, kabler, filter, låser, pakninger.</li>
            <li>Se etter feilkoder/LED-blink; sjekk brukermanual eller produsent-nettside.</li>
            <li>Søk modellnummer + symptom; finn deler/guider før du gir opp.</li>
            <li>Vurder profesjonell hjelp for gass, høyspent og tette rør.</li>
          </ul>
        </section>

        {/* Vanlige feil */}
        <section className="mt12" id="feil">
          <h2>Vanlige feil – og hvordan unngå dem</h2>
          <ul>
            <li><b>Utsetter småreparasjoner</b> → blir dyrt senere. Løsning: “fiksekveld” hver måned.</li>
            <li><b>Kaster for tidlig</b> → glemte garanti/reservedeler. Løsning: sjekk garanti og deler først.</li>
            <li><b>Mangler verktøy</b> → stoppes av en skrue. Løsning: ha et minimums-kit tilgjengelig.</li>
          </ul>
        </section>

        {/* Mål fremgang */}
        <section className="mt12" id="mal">
          <h2>Mål fremgangen</h2>
          <ul>
            <li>Antall ting reparert per måned.</li>
            <li>År ekstra du får ut av mobil/PC/hvitevarer.</li>
            <li>Kroner spart vs. å kjøpe nytt.</li>
          </ul>
          <p className="paragraph">
            Velg én ting å fikse i dag – en knapp, et møbel som knirker eller en sykkel som trenger kjedeolje.
          </p>
        </section>

        

        <div className="mt12">
          <Link className="btn" href="/">Tilbake</Link>
        </div>
      </article>
    </>
  );
}
