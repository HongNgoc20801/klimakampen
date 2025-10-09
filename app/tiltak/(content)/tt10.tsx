// app/tiltak/_content/tt10.tsx
import Image from "next/image";
import Link from "next/link";
import Hero from "@/app/components/Hero";

export const meta = {
  id: "tt10",
  title: "Del, reparer og gjenbruk",
  excerpt:
    "Kutt CO₂ og kostnader ved å dele mer, reparere det du har og kjøpe brukt før nytt.",
  img: "/bilder/gjenbruk.jpg", // Bytt om du har annet bilde
};

export default function TT10() {
  return (
    <>
      <Hero
        kicker="Klimatiltak"
        title={
          <>
            Del, reparer og gjenbruk{" "}
            <span className="accent">– mindre avfall, lavere utslipp</span>
          </>
        }
        subtitle="Forleng levetiden på tingene dine, del ressursene med andre og velg brukt først – bra for lommeboka og klimaet."
        imageSrc={meta.img}
        imageAlt="Gjenbruk og reparasjon"
        height={300}
        fullBleed
        align="center"
        actions={[{ href: "#start", label: "Start" }]}
      />

      <article className="container" id="start">
        <Link className="btn" href="/">Tilbake</Link>

        {/* Hvorfor sirkulært? */}
        <section className="mt12" id="hvorfor">
          <h1>Hvorfor sirkulært forbruk?</h1>
          <p className="paragraph">
            En stor del av klimaavtrykket vårt ligger i <b>produksjon</b> av varer –
            materialer, energi og transport. Hver gang du <b>forlenger levetiden</b>
            til klær, elektronikk eller møbler, sprer du produksjonsutslippet over
            flere år og reduserer behovet for å lage noe nytt.
          </p>
          <ul>
            <li>Mer bruk pr. produkt = lavere utslipp pr. bruk.</li>
            <li>Mindre avfall og færre råvarer fra naturen.</li>
            <li>Store personlige besparelser i kroner og øre.</li>
          </ul>
        </section>

        {/* Raskt i gang */}
        <section className="mt12" id="raskt-i-gang">
          <h2>Kjappe tiltak du kan gjøre i dag</h2>
          <ul>
            <li>Bytt eller lån ting i nabolaget (verktøy, sportsutstyr, barneklær).</li>
            <li>Fiks en liten feil: knapp, søm, glidelås, løse skolisser, møbelskrue.</li>
            <li>Selg eller gi bort det du ikke bruker (Tise, Finn, Facebook-grupper).</li>
            <li>Kjøp <b>brukt først</b> når du trenger noe – spesielt klær og møbler.</li>
            <li>Leie før kjøp til sjeldent bruk (tilhengere, høytrykkspyler, partytelt).</li>
          </ul>
        </section>

        {/* Klær */}
        <section className="mt12" id="klaer">
          <h2>Klær: størst effekt med enkle grep</h2>
          <ul>
            <li>Vask sjeldnere, luft mer. Vask på lav temp og fyll maskinen fornuftig.</li>
            <li>Velg slitesterke materialer og tidløse plagg som passer flere anledninger.</li>
            <li>Reparer småskader tidlig – stopp en rift før den blir stor.</li>
            <li>Organiser klesskap: sesongbytte og rotasjon øker faktisk bruken.</li>
            <li>Bytteparty med venner eller nabolag, spesielt for barneklær.</li>
          </ul>
        </section>

        {/* Elektronikk */}
        <section className="mt12" id="elektronikk">
          <h2>Elektronikk: oppgrader smart, ikke ofte</h2>
          <ul>
            <li>Hold utstyr lenger: bytt batteri/lagring før du bytter hele enheten.</li>
            <li>Bruk etui/skjermbeskytter, og rengjør vifter/porter jevnlig.</li>
            <li>Kjøp <b>refurbished</b> når det passer – bra pris og lavere avtrykk.</li>
            <li>Lever defekt utstyr til faghandel/returpunkt for materialgjenvinning.</li>
          </ul>
        </section>

        {/* Møbler og hjem */}
        <section className="mt12" id="mobler">
          <h2>Møbler og hjem: oppgrader det du har</h2>
          <ul>
            <li>Reparér hengsler, stram skruer, olje treverk, trekk om stoler/sofa.</li>
            <li>Bruk deler og reservedeler – mange produsenter tilbyr dette.</li>
            <li>DIY: maling, nytt håndtak eller ben kan gi “nytt” møbel på en kveld.</li>
            <li>Kjøp brukt kjøkkeninnredning/dører; bland nytt og brukt smart.</li>
          </ul>
        </section>

        {/* Deling og biblioteker */}
        <section className="mt12" id="deling">
          <h2>Delingsløsninger og bibliotek</h2>
          <p className="paragraph">
            Delingstjenester og verktøybibliotek gjør at mange kan bruke det samme
            utstyret i stedet for at alle kjøper hvert sitt.
          </p>
          <ul>
            <li>Verktøybibliotek, fritidsbibliotek, sykkel- og skiutleie.</li>
            <li>Nabolags-apper for lån/bytte; borettslag med felles utstyr.</li>
            <li>Bedrifter: intern “gjenbruksbørs” for møbler/IT/rekvisita.</li>
          </ul>
        </section>

        {/* Sortering og materialgjenvinning */}
        <section className="mt12" id="sortering">
          <h2>Sortering og riktig avhending</h2>
          <ul>
            <li>Sorter tekstil, glass/metall, papir/kartong, plast, EE-avfall og farlig avfall.</li>
            <li>Lever hele plagg til ombruk; ødelagt tekstil til materialgjenvinning der det finnes.</li>
            <li>Metall og glass har høy gjenvinningsgrad – lever til rett fraksjon.</li>
          </ul>
        </section>

        {/* Slik får du det til å vare */}
        <section className="mt12" id="vare-lenger">
          <h2>Slik varer tingene lenger</h2>
          <ul>
            <li>Lag en enkel <b>vedlikeholdsplan</b> (klær, sko, møbler, sykkel).</li>
            <li>Sett av “fiksetid” én kveld i måneden – små grep, stor effekt.</li>
            <li>Ha et lite reparasjonskit: nål/tråd, lim, trelim, skruer, unbrako, multiverktøy.</li>
          </ul>
        </section>

        {/* Vanlige feil */}
        <section className="mt12" id="feil">
          <h2>Vanlige feil – og hvordan unngå dem</h2>
          <ul>
            <li>
              <b>Impulskjøp</b> → ender ubrukt. Løsning: 30-dagers-regel før kjøp av “kjekt å ha”.
            </li>
            <li>
              <b>Overlagring</b> → du glemmer hva du har. Løsning: én inn, én ut – og god orden.
            </li>
            <li>
              <b>Levering i restavfall</b> av brukbare ting. Løsning: gi bort/selg før du kaster.
            </li>
          </ul>
        </section>

        {/* Mål fremgang */}
        <section className="mt12" id="mal">
          <h2>Mål fremgangen din</h2>
          <ul>
            <li>Antall ting reparert per måned.</li>
            <li>Andel kjøp som er brukt vs. nytt.</li>
            <li>Kroner spart på deling/leie vs. kjøp.</li>
          </ul>
          <p className="paragraph">
            Velg ett tiltak i dag: legg ut én ting for salg/gis bort, reparer en
            løs søm – eller bli med i en lokal bytte-/delegruppe.
          </p>
        </section>

        

        <div className="mt12">
          <Link className="btn" href="/">Tilbake</Link>
        </div>
      </article>
    </>
  );
}
