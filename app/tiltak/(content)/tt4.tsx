// app/tiltak/_content/tt4.tsx
import Image from "next/image";
import Link from "next/link";
import Hero from "@/app/components/Hero";

export const meta = {
  id: "tt4",
  title: "Kutt matsvinn hjemme",
  excerpt:
    "Planlegg, lagre og bruk opp restene – spar penger og kutt CO₂ uten å miste matglede.",
  img: "/bilder/matsvinn.jpg",
};

export default function TT4() {
  return (
    <>
      <Hero
        kicker="Klimatiltak"
        title={
          <>
            Kutt matsvinn <span className="accent">– bra for lommebok og klima</span>
          </>
        }
        subtitle="Smart planlegging, riktig lagring og kreative rester kan halvere matsvinnet hjemme."
        imageSrc={meta.img}
        imageAlt="Kutt matsvinn"
        height={300}
        fullBleed
        align="center"
        actions={[{ href: "#start", label: "Start" }]}
      />

      <article className="container" id="start">
        <Link className="btn" href="/">Tilbake</Link>

        {/* Hvorfor */}
        <section className="mt12" id="hvorfor">
          <h1>Hvorfor betyr matsvinn noe?</h1>
          <p className="paragraph">
            Rundt en tredel av maten som produseres globalt blir aldri spist. 
            All energien til dyrking, foredling, transport og kjøling går til spille – 
            og skaper unødvendige klimagassutslipp. Hjemme kan vi redusere dette kraftig 
            med noen enkle vaner.
          </p>
          <ul>
            <li>Mindre CO₂, metan og ressursbruk i hele verdikjeden.</li>
            <li>Mindre utgifter – et typisk hushold kan spare betydelige beløp per år.</li>
            <li>Bedre måltidsflyt: mindre stress, mer kontroll på hva du har.</li>
          </ul>
        </section>

        {/* 5 grep */}
        <section className="mt12" id="fem-grep">
          <h2>Fem enkle grep som monner</h2>
          <ol>
            <li>
              <b>Planlegg uke-menyer</b> – skriv handleliste etter måltidene og sjekk skapet først.
            </li>
            <li>
              <b>Oppbevar riktig</b> – bruk lufttette bokser, merking med dato, og riktig sone i kjøleskapet.
            </li>
            <li>
              <b>Spis “SE” ikke bare “best før”</b> – lukt, smak og se før du kaster.
            </li>
            <li>
              <b>Frys i små porsjoner</b> – brødskiver, kokt ris, saus, kraft, urter i olje.
            </li>
            <li>
              <b>Rester = nye retter</b> – wok, omelett, suppe, wrap, gryte, “fried rice”.
            </li>
          </ol>
        </section>

        {/* Dato-merking */}
        <section className="mt12" id="datomerking">
          <h2>Datomerking – slik fungerer den</h2>
          <ul>
            <li>
              <b>“Best før”:</b> Kvalitetsdato. Ofte helt fint etter dato – <i>se, lukt, smak</i>.
            </li>
            <li>
              <b>“Siste forbruksdag”:</b> Gjelder fersk fisk/kjøtt/farse. Følg dato og oppbevar kaldt.
            </li>
          </ul>
          <p className="paragraph">
            Mange matvarer holder seg lenger enn du tror: tørrvarer, yoghurt, hardost, syltet varer, 
            egg (test i vann – flyter den, er den gammel), og brød (tørket = ristes, blir til krutonger).
          </p>
        </section>

        {/* Lagringsguide */}
        <section className="mt12" id="lagring">
          <h2>Riktig lagring = lenger holdbarhet</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Matvare</th>
                <th>Oppbevaring</th>
                <th>Tips</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brød</td>
                <td>Romtemp i pose, fryses i skiver</td>
                <td>Rist frosne skiver direkte i brødrister.</td>
              </tr>
              <tr>
                <td>Salat & urter</td>
                <td>Kjøleskap i boks med fuktig papir</td>
                <td>Urter kan også hakkes og fryses i olje.</td>
              </tr>
              <tr>
                <td>Meieri</td>
                <td>Kald sone i kjøleskap</td>
                <td>Hell over i mindre beholdere når lite igjen.</td>
              </tr>
              <tr>
                <td>Frukt</td>
                <td>Epler/pærer for seg; banan ikke i kjøl</td>
                <td>Brune bananer → smoothie eller bananbrød.</td>
              </tr>
              <tr>
                <td>Tilberedt mat</td>
                <td>Kjøl raskt ned, tett boks, merk dato</td>
                <td>Frys i porsjoner for enkel lunsj/middag.</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Restemat-ideer */}
        <section className="mt12" id="rester">
          <h2>Restemat som folk faktisk liker</h2>
          <ul>
            <li>
              <b>“Fried rice”</b>: gårsdagens ris + egg + grønnsaksrester + soyasaus.
            </li>
            <li>
              <b>Wrap/quesadilla</b>: ost + bønner/kjøttrester + salat → stekepanne.
            </li>
            <li>
              <b>Suppe</b>: grønnsaksrester + linser eller potet + kraft/utvannet buljong.
            </li>
            <li>
              <b>Omelett/frittata</b>: kokte poteter, grønnsaker, osteskalker.
            </li>
            <li>
              <b>Pizzafredag</b>: rester som topping; osteskalk rives og brukes opp.
            </li>
          </ul>
          <Image
            className="mt12"
            src="/bilder/matsvinn-idéer.jpg" // valgfritt ekstra illustrasjonsbilde
            alt="Restemat-idéer"
            width={1200}
            height={700}
          />
        </section>

        {/* Handle smartere */}
        <section className="mt12" id="handel">
          <h2>Handle smartere – mindre svinn</h2>
          <ul>
            <li>Spis før du handler – “sulten-handel” gir impulskjøp.</li>
            <li>Kjøp løst og i riktig mengde; unngå “stor pakke” du ikke rekker å bruke.</li>
            <li>Bruk handleliste og stå i ro: først tørrvarer, så kjøl/frys til slutt.</li>
            <li>Velg “reduserte varer i dag” når du uansett skal lage noe nå.</li>
          </ul>
        </section>

        {/* Ukeplan og batch cooking */}
        <section className="mt12" id="ukeplan">
          <h2>Ukeplan + batch-cooking</h2>
          <p className="paragraph">
            Sett 30 min hver uke: planlegg 4–5 middager og hvor restene brukes. 
            Kok dobbel porsjon gryte/suppe og frys ned i bokser merket med dato/innhold.
          </p>
          <ol>
            <li><b>Man:</b> Tomatsuppe + grovt brød → rest som lunsj tirsdag.</li>
            <li><b>Tirs:</b> “Fried rice” av risrester + egg/grønnsaker.</li>
            <li><b>Ons:</b> Wraps med bønner/kjøttrester + salat.</li>
            <li><b>Tors:</b> Linsegryte (dobbel porsjon) → frys halvparten.</li>
            <li><b>Fre:</b> Pizza med “alt i kjøleskapet”-topping.</li>
          </ol>
        </section>

        {/* Barn og familie */}
        <section className="mt12" id="familie">
          <h2>Barnefamilier – slik lykkes dere</h2>
          <ul>
            <li>Server alt “familystyle” – barna tar selv og lærer porsjonskontroll.</li>
            <li>Små bokser i kjøl for skole-/barnehagelunsj av middagsrester.</li>
            <li>Gi mat “ny form”: grønnsaksstaver, minipannekaker av havre, minipizza.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt12" id="faq">
          <h2>Vanlige spørsmål</h2>
          <h3>“Hvordan vet jeg om maten fortsatt er grei?”</h3>
          <p className="paragraph">
            Bruk <b>se–lukt–smak</b> for “best før”-varer. Ved tvil: varm godt opp, 
            og kast ved uvanlig lukt/smak eller mugg (unntak: hardost – skjær godt rundt).
          </p>
          <h3>“Hva med fryseren – hvor lenge holder ting?”</h3>
          <p className="paragraph">
            Mye holder fint i 3–6 mnd i lufttette bokser/poser. Merk alltid dato/innhold. 
            Kvaliteten kan avta, men sikkerheten er som regel god så lenge det har vært frossent.
          </p>
          <h3>“Er dette egentlig klimagevinst?”</h3>
          <p className="paragraph">
            Ja – mindre svinn betyr at råvarer, energi og transport ikke kastes bort. 
            Det reduserer både økonomisk og klimamessig fotavtrykk.
          </p>
        </section>

        {/* Oppsummering */}
        <section className="mt12" id="oppsummering">
          <h2>Kort oppsummert</h2>
          <ul>
            <li>Planlegg 4–5 måltider og handle fornuftig.</li>
            <li>Oppbevar riktig, merk med dato, frys porsjoner.</li>
            <li>Bruk rester kreativt – lag “baser” som kan bli flere retter.</li>
            <li>Se, lukt og smak – kast mindre.</li>
          </ul>
          <p className="paragraph">
            Velg <b>ett grep i dag</b>: rydd kjøl/frys, merk bokser, og planlegg to restemåltider denne uken.
          </p>
        </section>

        <div className="mt12">
          <Link className="btn" href="/">Tilbake</Link>
        </div>
      </article>
    </>
  );
}
