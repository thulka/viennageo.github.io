import { Fragment, h } from 'preact'

let Tags = ({ children }) => (
  <Fragment>
    {children.split(/\s/).map((tag) => (
      <span class="tag"># {tag}</span>
    ))}
  </Fragment>
)

let MeetupHeader = ({ title, date, topic, location }) => (
  <Fragment>
    <h2>{title}</h2>
    <summary>{topic}</summary>
    <div class="date-location">
      <address>{location}</address>&nbsp;<time>{date}</time>
    </div>
  </Fragment>
)

let PlaceQuestionMark = () =>
  <div class="placequestionmark">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 365 560" enable-background="new 0 0 365 560" width="100%" height="100%">
      <g>
        <path fill="#bb0000" d="M182.9,551.7c0,0.1,0.2,0.3,0.2,0.3S358.3,283,358.3,194.6c0-130.1-88.8-186.7-175.4-186.9 C96.3,7.9,7.5,64.5,7.5,194.6c0,88.4,175.3,357.4,175.3,357.4S182.9,551.7,182.9,551.7z " />
      </g>
    </svg>
    <div>?</div>
  </div>

export let MainPage = () => {
  return (
    <article>
      <section>
        <div class="logo">
          <img src="/img/viennageo-logo_250px.png" />
          <h3 class="desktop">the meetup with the logo</h3>
        </div>
      </section>
      <section>
        <h1>vienna geo</h1>
        <p>die wiener geo community trifft sich zum fachlichen austausch über themen wie</p>
        <br />
        <Tags>openstreetmap open-geodata gis kartografie geodatenanalyse computational-geometry</Tags>

        <p>um über die treffen informiert zu werden folgt uns auf twitter oder schreibt ein email um in den vertail aufgenommen zu werden:</p>
        <br />
        <div class="twitter">
          <a target="_blank" class="twitter-btn" title="follow @viennageomeetup on twitter" href="https://twitter.com/viennageomeetup">
            <i></i><span class="label">@viennageomeetup</span>
          </a>
        </div>
        <br />
        <div class="mail">
          <a href="mailto://viennageo@gmx.at">
            <span>email</span>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="#333" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
            </svg>
          </a>
        </div>

        {/* <p class="aboutlink">
          <a href="about.html">mehr darüber</a>
        </p> */}
      </section>
      {/* <section>
        <h1>das nächste treffen</h1>
        <p>
          veranstalten wir <span class="next">sobald persönliche treffen wieder gut möglich sind.</span>
        </p>
        <p>
          alle sind willkommen, eintritt ist frei. wir freuen uns auch über erfahrungsberichte, forschungs&shy;berichte, neues aus
          der verwaltung - alles was mit geo zu tun hat. vorschläge an viennageo@gmx.at
                </p>
      </section> */}
      <section>

        <MeetupHeader title="viennageo #7" topic="frei und bewegt" date="" location="" />
        <PlaceQuestionMark />

        <p>wir machen weiter <span class="next">sobald persönliche treffen wieder gut möglich sind</span>. dieses treffen ist solange verschoben.</p>
        <p>
        so war und ist unser nächstes treffen geplant und die vorträge sind nach wie vor aktuell, nur die entscheidung bei dancing stars ist gefallen - michaela kirchgasser, wir gratulieren.</p>

        <p>die wiener geo community trifft sich wieder im donau city treff. passend zur soeben gestarteten dancing stars saison, unsere impulsvorträge:</p>
        <ul>
          <li>// frei<br /><i>stephan bösch-plepelits</i> erläutert <a href="https://www.wikidata.org/wiki/Wikidata:Main_Page">wikidata</a></li>
          <li>// bewegt<br /><i>anita graser</i> über die analyse von bewegten objekten mit <a href="https://github.com/anitagraser/movingpandas">movingpandas</a>.
          in diesem repository ist ein link zu einem online notebook auf dem movingpandas ausprobiert werden kann.</li>
          <li>// ausklang<br /> bei fachlichem austausch und gemütlichkeit</li>
        </ul>

        <MeetupHeader title="viennageo #6" date="9.12.2019" topic="vector tiles finale" location="dc-treff" />
        <img src="/img/dctreff.jpg" />
        <p>
          wir vollenden die vektor trilogie: nach <i>theorie</i> und <i>unternehmens&shy;praxis</i> beim letzten treffen freuen wir uns heute auf
          den vienna gis koordinator wolfgang jörg der uns die anwendung von vector tiles im dienst der <i>verwaltung</i> zeigt.
        </p>
        <ul>
          <li>// vector-tiles + basemap.at<br /><i>wolfgang jörg</i> zeigt uns das neue vektor produkt</li>
          <li>// sotm 2019 in heidelberg<br /><i>robert kaiser</i> berichtet von seinem besuch der <a href="https://2019.stateofthemap.org/">sotm 2019</a>.</li>
          <li>// mapathon der ärzte ohne grenzen<br />andreas voit berichtet vom mapathon und gibt einen auszug aus der aktuellen osm wochennotiz</li>
          <li>fachlicher austausch<br />tee, glühwein</li>
        </ul>

        <MeetupHeader title="viennageo #5" date="29.10.2019" topic="vector tiles" location="dc-treff" />
        <img src="/img/dctreff.jpg" />
        technik in theorie und praxis diesmal. die wohl wichtigste neuerung seit es karten im web gibt: vector tiles.
        <ul>
          <li>// technologie und standards<br />präsentiert <i>markus mayr</i>, geoexperte im bev und obmann des osm vereins</li>
          <li>// praxiserfahrungen<br />beim einsatz in seinem <a href="https://www.igutech.at/">unternehmen</a> schildert <i>franz gusenbauer</i></li>
          <li>// postgis, tegola, mbtiles + tileserver-gl<br />erläutert <i>jürgen hahn</i> von <a href="https://www.gisolutions.at">gisolutions</a>.</li>
          <li>fachlicher austausch<br />tee, kaffee und kuchen</li>
        </ul>

        <MeetupHeader title="viennageo #4" date="20.3.2019" topic="alles geo!" location="dc-treff" />
        <img src="/img/dctreff.jpg" />
        <p>zur krönung der ballsaison treffen wir uns wieder im donau city treff und danken für ein buntes programm:</p>
        <ul>
          <li>// workshop overpass<br /><i>stephan bösch-plepelits</i> hält einen workshop zur overpass schnittstelle. <a href="img/plepe-overpass-api.pdf">folien</a></li>
          <li>// mapping united nations sustainability goals<br /><i>jakob listabarth</i> zeigt uns seine visualisierungen zum thema un sustainability goals</li>
          <li>// virtual reality mit openstreetmap<br /><i>robert kaiser</i>, osm veteran und mozilla involvierter zeigt uns "vr map".</li>
          <li>fachlicher austausch<br />hirter, murauer und wasser</li>
        </ul>

        <MeetupHeader
          title="herbert edelsbrunner*"
          date="15.11.2018"
          topic="computational geometry + topology"
          location="tu wien"
        />
        <img src="/img/edelsbrunner.jpg" />
        <p>
          we are delighted to announce that professor herbert edelsbrunner (institute of science and technology austria) will
          visit our group on november 15th! computational geometry is the foundation of our doing. we are very lucky that one of
          the researchers who shaped the research field is back in austria and generously takes the time to visit us. herbert
          will tell us about his involvement in the evolution of computational geometry and the younger research
          field computational topology, he co-founded. starting from the history of academia he will address the related industry
          and the recent application of computational topology to data analysis.</p>
        <p>this will be interactive - bring your topics + questions.</p>
        <p>about professor edelsbrunner - professor at the institute of science and technology austria - worldwide
        leading researcher in computational geometry and topology - founder of raindrop geomagic - wittgensteinpreis 2018 - alan
        t. waterman award 1991 - http://pub.ist.ac.at/~edels/ - https://en.wikipedia.org/wiki/Herbert_Edelsbrunner research
        papers at http://pub.ist.ac.at/~edels/Papers/
          </p>
        <p>
          herbert is austrian. his academic live however was and is in english, so he prefers to talk in english with us.
          </p>

        <MeetupHeader title="viennageo #3" date="19.9.2018" topic="data science + osm" location="dc-treff" />
        <img src="/img/dctreff.jpg" />
        <p>internationals: we held this meetup in German so far. if there is demand we might switch to English.</p>
        <p>wir treffen uns wieder um 18:00 im donau city treff (direkt neben u1 alte donau) und können auf der terrasse fachlich plaudern - zb über</p>
        <ul>
          <li>// analyse verkehrsnetzgeometrie<br /><i>philipp gintensdorfer</i> präsentiert seine <a href="sicheres-verkehrswegemuster.pdf">diplomarbeit</a> über die "analyse der verkehrsnetzgeometrie im hinblick auf verkehrssicherheit"</li>
          <li>// osm datenmodell<br /><i>stefan tiran</i> erläutert das openstreetmap datenmodell</li>
          <li>// sotm 2018<br /><i>thomas hulka</i> berichtet über die state of the map in <a href="https://2018.stateofthemap.org/">mailand</a></li>
        </ul>

        <MeetupHeader title="viennageo #2" date="4.6.2018" topic="linien und räume" location="dc-treff" />
        <img src="/img/dctreff.jpg" />
        <ul>
          <li>// openstreetmap team wien<br />erzählt über aktuelles aus der lokalen community</li>
          <li>// generalisierung<br />von kartografischen daten. im allgemein und von linienzügen. <i>thomas hulka</i></li>
          <li>// visualisierung von routen<br />
            <i>michael birsak</i>, phd student tu wien am institut für computer graphik präsentiert das paper
          &nbsp;<a href="/files/dynamic-path-exploration.pdf">dynamic path exploration on mobile devices</a>&nbsp;
          über die visualisierung von routen.</li>
          <li>// wien gibt raum<br />
            <i>dipl-ing dr lothar eysn</i> (ma 41, stadtvermessung) gibt einblick in dieses aktuelle projekt der stadt wien.
          streetview und vermessung der stadt mit schweizer präzision.
          </li>
          <li>erfrischungsgetränke<br />auf der terrasse</li>
        </ul>

        <MeetupHeader title="viennageo #1" date="10.4.2018" topic="los gehts!" location="raum d, mq" />
        <img src="/img/meetup1-anita-graser.jpg" />
        <ul>
          <li>// willkommen<br />beim geo-meetup! über wiens und österreichs exzellenz auf dem interdisziplinären gebiet "geo" (<i>thomas hulka</i>).</li>
          <li>// basemap.at<br /><i>wolfgang jörg</i>, vienna gis koordinator (stadt wien), stellt uns den wichtigsten öffentlichen geodatendienst vor. <a href="https://basemap.at/">basemap.at</a></li>
          <li>// bewegungsdatenanalyse<br /><i>anita graser</i>, forscherin und österreichs wichtigste geo - open source aktivistin berichtet über ihre forschung am ait.</li>
          <li>// fossgis 2018<br /><i>robert koch</i>, entwickler von <a href="https://www.osmhydrant.org/">osmhydrant</a> erzählt über die <a href="https://www.fossgis-konferenz.de/2018/">fossgis 2018</a>.</li>
          <li>wiener gemütlichkeit<br />und fachlicher austausch im schönen mq.</li>
        </ul>

      </section>

    </article>
  )
}
