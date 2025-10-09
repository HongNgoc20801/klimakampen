// app/tiltak/_content/tt3.tsx
import Image from "next/image";
import Link from "next/link";
import Hero from "@/app/components/Hero";

export const meta = {
  id: "tt3",
  title: "Spis mer plantebasert",
  excerpt:
    "Bytt ut noe kjøtt og meieri med plantekost. Sunnere hverdager, lavere CO₂, like mye smak.",
  img: "/bilder/vegetable.jpeg", // ← đổi nếu tên ảnh khác
};

export default function TT3() {
  return (
    <>
      <Hero
        kicker="Klimatiltak"
        title={
          <>
            Spis mer plantebasert{" "}
            <span className="accent">– bra for deg og klimaet</span>
          </>
        }
        subtitle="Små bytter i hverdagsmaten kan kutte utslipp betydelig og samtidig gi god helse og lommebok."
        imageSrc={meta.img}
        imageAlt="vegetable bilder"
        height={300}
        fullBleed
        align="center"
        actions={[{ href: "#start", label: "Start" }]}
      />

      <article className="container" id="start">
        <Link className="btn" href="/">Tilbake</Link>

        {/* Hvorfor */}
        <section className="mt12" id="hvorfor">
          <h1>Hvorfor mer plantebasert?</h1>
          <p className="paragraph">
            Kosthold står for en betydelig del av husholdningenes klimaavtrykk. 
            Kjøtt og meieri har ofte høyest utslipp per porsjon, mens belgfrukter, korn 
            og grønnsaker er langt lavere. Når du gradvis bytter ut noen kjøttmåltider 
            hver uke, får du mye klimagevinst – uten å ofre smak, protein eller metthetsfølelse.
          </p>
          <ul>
            <li>Betydelig lavere CO₂ per måltid med belgfrukter og fullkorn.</li>
            <li>Helsegevinster: fiber, antioksidanter, umettet fett.</li>
            <li>Ofte billigere per porsjon enn kjøtt- og meieritunge retter.</li>
          </ul>
        </section>

        {/* Sammenligning per måltid */}
        <section className="mt12" id="sammenligning">
          <h2>Omtrentlig klimaeffekt per måltid</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Rett</th>
                <th>Type</th>
                <th>Relativt utslipp</th>
                <th>Kommentar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Biff m/ potet</td>
                <td>Rødt kjøtt</td>
                <td>Høyt</td>
                <td>Ofte høyest per porsjon.</td>
              </tr>
              <tr>
                <td>Kyllingwok</td>
                <td>Hvitt kjøtt</td>
                <td>Middels</td>
                <td>Lavere enn rødt kjøtt.</td>
              </tr>
              <tr>
                <td>Fisk m/ fullkorn</td>
                <td>Fisk</td>
                <td>Middels–lav</td>
                <td>Avhenger av art og produksjon.</td>
              </tr>
              <tr>
                <td>Linsegryte</td>
                <td>Belgfrukt</td>
                <td>Lav</td>
                <td>Godt protein/fiber-forhold.</td>
              </tr>
              <tr>
                <td>Kikertcurry</td>
                <td>Belgfrukt</td>
                <td>Lav</td>
                <td>Billig, mettende.</td>
              </tr>
              <tr>
                <td>Tofu-bowl</td>
                <td>Soya</td>
                <td>Lav</td>
                <td>Komplett protein, allsidig.</td>
              </tr>
            </tbody>
          </table>
          <p className="paragraph">
            Tallene er veiledende og varierer med råvarevalg, transport, sesong og porsjonsstørrelse. 
            Poenget: hver gang du bytter fra rødt kjøtt til belgfrukter/fisk/kylling eller helt plantebasert, 
            faller utslippet per måltid typisk markant.
          </p>
        </section>

        {/* Bytteliste */}
        <section className="mt12" id="bytteliste">
          <h2>Enkle bytter i hverdagen</h2>
          <ul>
            <li><b>Kjøttdeig → linser/bønner/soya-granulat:</b> Taco, pastasaus, lasagne.</li>
            <li><b>Fløte/rømme → havre- eller soyavariant:</b> Gryter, supper, dressinger.</li>
            <li><b>Smør på brød → nøttesmør/avokado/hummus:</b> Fiber + umettet fett.</li>
            <li><b>Pølser → plantepølser/kikertboller:</b> Grill, pølserett, barnevennlig.</li>
            <li><b>Ost “alt mulig” → sparsommere + moden smak:</b> Mindre mengde, mer smak.</li>
          </ul>
        </section>

        {/* Handle- og basisliste */}
        <section className="mt12" id="handel">
          <h2>Basislager for plantevennlig uke</h2>
          <ul>
            <li>Belgfrukter: linser, kikerter, sorte bønner (tørre eller på boks).</li>
            <li>Fullkorn: havregryn, fullkornspasta, byggris, naturris.</li>
            <li>Protein: tofu/tempeh, soyagranulat, edamame, peanøtt-/tahini.</li>
            <li>Smaksbyggere: løk, hvitløk, tomat på boks, kokosmelk, krydder, urter.</li>
            <li>Pålegg: hummus, bønnepostei, nøttesmør, syltet rødløk.</li>
          </ul>
        </section>

        {/* Protein og næring */}
        <section className="mt12" id="naring">
          <h2>Protein & næringsdekning – enkelt forklart</h2>
          <ul>
            <li>
              <b>Protein:</b> Kombiner belgfrukt + korn i løpet av dagen (f.eks. brød + hummus, ris + bønner). 
              Tofu/tempeh gir komplett protein i én matvare.
            </li>
            <li>
              <b>Jern:</b> Bønner, linser, spinat. Øk opptaket med C-vitamin (paprika/sitron) i samme måltid.
            </li>
            <li>
              <b>Omega-3:</b> Linfrø, valnøtter, rapsolje – eller fet fisk hvis du er fleksitarianer.
            </li>
            <li>
              <b>B12 & D-vitamin:</b> Velg berikede planteprodukter om du kutter mye meieri/egg; 
              vurder tilskudd ved helgrønn kost.
            </li>
          </ul>
        </section>

        {/* Ukemeny idéer */}
        <section className="mt12" id="ukemeny">
          <h2>Ukemeny – lett, rimelig og grønn</h2>
          <ol>
            <li><b>Man:</b> Linse-bolognese med fullkornspasta.</li>
            <li><b>Tirs:</b> Kikerter i tomat–kokos curry + ris.</li>
            <li><b>Ons:</b> Tofu-wok med grønnsaker og nudler.</li>
            <li><b>Tors:</b> Byggrynsalat med bønner, urter og sitrondressing.</li>
            <li><b>Fre:</b> Tacoaften: 50/50 kjøttdeig + linser, eller 100% bønner.</li>
            <li><b>Lør:</b> Ovnsbakt grønnsaksform med potet og “plantefløte”.</li>
            <li><b>Søn:</b> Stor gryte minestrone – restemat til mandag!</li>
          </ol>
          <p className="paragraph">
            Lag dobbelt porsjon av gryter – frys ned. Billig, praktisk og klimavennlig.
          </p>
        </section>

        {/* Ute og på farten */}
        <section className="mt12" id="ute">
          <h2>Ute, reise og kantine</h2>
          <ul>
            <li>Se etter “veggie/vegan” symboler, suppe + brød, bowls med belgfrukt.</li>
            <li>Velg vann/kaffe/te fremfor sukkerrike drikker – bra for helse og miljø.</li>
            <li>Bytt én fast take-away i uka til et plantealternativ — lett gevinst.</li>
          </ul>
        </section>

        {/* Oppskriftseksempler (kort) */}
        <section className="mt12" id="oppskrifter">
          <h2>3 superenkle oppskrifter (skisse)</h2>
          <h3>1) Linse-bolo (30 min)</h3>
          <p className="paragraph">
            Surr løk/hvitløk, tilsett røde linser, hakket tomat, urter og litt soyasaus. 
            Kok til møre linser. Server med fullkornspasta og salat.
          </p>
          <h3>2) Kikertrøre til brød</h3>
          <p className="paragraph">
            Mos kikerter med tahini, sitron, hvitløk og spisskummen → pålegg eller dip.
          </p>
          <h3>3) Tofu-wok</h3>
          <p className="paragraph">
            Sprøstek terninger av fast tofu. Wok grønnsaker, vend inn saus (soyasaus + lime + honning/agave). 
            Server med ris eller nudler.
          </p>
          <Image
            className="mt12"
            src="/bilder/plant-based-plate.jpg" // ← dersom du har et ekstra illustrasjonsbilde
            alt="Plantebasert tallerken"
            width={1200}
            height={700}
          />
        </section>

        {/* Klimaregnskap – kjapp guide */}
        <section className="mt12" id="regnskap">
          <h2>Kjapp klimakalkyle for én uke</h2>
          <ul>
            <li>
              Bytt <b>2 rødt-kjøtt middager</b> → <b>linse-/bønneretter</b>:
              ofte størst reduksjon.
            </li>
            <li>
              Bytt <b>2 meieritunge sauser</b> → <b>havre-/soyabasert</b>.
            </li>
            <li>
              Legg inn <b>1 fiskemiddag</b> (om du spiser fisk) i stedet for kjøtt.
            </li>
          </ul>
          <p className="paragraph">
            Små skift hver uke = stor effekt gjennom året. Start med noe du faktisk
            har lyst på – vaner endres best med matglede.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt12" id="faq">
          <h2>Vanlige spørsmål</h2>
          <h3>“Får jeg nok protein?”</h3>
          <p className="paragraph">
            Ja – med variert plantekost (belgfrukt, korn, nøtter/frø) eller tofu/tempeh dekker du behovet lett. 
            Idrettsutøvere bruker ofte belgfrukter, soyaprodukter og nøtter for å nå målene sine.
          </p>
          <h3>“Blir det dyrere?”</h3>
          <p className="paragraph">
            Tvert imot: Tørre belgfrukter og fullkorn er blant de billigste protein- og energikildene. 
            Ferdigprodukter kan være dyrere – bruk dem som “innsteg”, lag mer fra bunnen etter hvert.
          </p>
          <h3>“Smaker det like godt?”</h3>
          <p className="paragraph">
            Med krydder, urter og gode sauser får du fylde og umami. Start med retter du allerede liker (taco, pasta, curry) og gjør enkle bytter.
          </p>
        </section>

        {/* Oppsummering */}
        <section className="mt12" id="oppsummering">
          <h2>Kort oppsummert</h2>
          <ul>
            <li>Bytt ut noen kjøttmåltider i uka med belgfrukt/tofu.</li>
            <li>Bruk plantebaserte alternativer til fløte/rømme/ost når det passer.</li>
            <li>Bygg et rimelig basislager for raske, gode hverdagsretter.</li>
            <li>Lag store porsjoner – frys ned, spar tid og penger.</li>
          </ul>
          <p className="paragraph">
            Velg ett konkret bytte i dag: <b>linse-bolo i stedet for kjøttsaus</b> – enkelt, billig og klimavennlig.
          </p>
        </section>

        <div className="mt12">
          <Link className="btn" href="/">Tilbake</Link>
        </div>
      </article>
    </>
  );
}
