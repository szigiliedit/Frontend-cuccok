import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

/*A fenti kód egy React alkalmazás fő komponensét tartalmazza, amelyet általában az App.js fájlban találunk. A kód egy alapértelmezett React komponenst definiál, amelynek neve App.

Az import utasítások a szükséges fájlok importálására szolgálnak. A logo fájlt az ./logo.svg elérési útvonalon található SVG képfájlból importálja be, míg az ./App.css fájlt az alkalmazás stílusainak meghatározásához használja.

A App függvény egy JSX kódot ad vissza, ami a React komponens felépítését írja le. A JSX egy JavaScript kiterjesztés, amely lehetővé teszi a HTML-szerű kódrészletek használatát a React alkalmazásokban.

A return részben a <div> elemmel kezdődik, amelynek az App osztály nevet megkapó CSS osztályt (className) állítja be. Ezután következik a <header> elem, amely szintén egy CSS osztályt kap (App-header).

A következő elem egy <img> elem, amely a logo változóban importált képet jeleníti meg, és a App-logo CSS osztályt kapja.

Ezután van egy <p> elem, amely egy szöveges tartalmat jelenít meg, amely azt mutatja, hogy szerkeszd meg az src/App.js fájlt és mentsd el a frissítéshez.

Végül van egy <a> elem, amely egy hivatkozást jelenít meg a React webhelyére. Ez az elem a App-link CSS osztályt kapja.

Az export default App; utasítás exportálja az App komponenst, hogy más fájlok importálhassák és felhasználhassák azt.

Az noopener és noreferrer két HTML attribútum, amelyeket gyakran használnak hivatkozásokban (<a> elemekben) a biztonsági és adatvédelmi megfontolások miatt.

    noopener: Az noopener attribútum megakadályozza, hogy az újonnan nyitott ablak vagy lap hozzáférjen az eredeti ablakhoz vagy lapra a window.opener objektumon keresztül. Ez megakadályozza a biztonsági sebezhetőségeket, amikor egy rosszindulatú webhely hozzáférhet az eredeti ablakhoz és manipulálhatja azt. Ez a sebezhetőség azzal kapcsolatos, hogy az opener objektum révén az új ablak hozzáférhet az eredeti ablak DOM-jához, és hozzáférhet az ott tárolt adatokhoz vagy akár be is avathatja az eredeti ablakot. Az noopener attribútum használata elzárja ezt az utat.

    noreferrer: Az noreferrer attribútum letiltja a hivatkozó oldal információinak (referer) elküldését az új oldalnak. Ez azt jelenti, hogy az új oldal nem fogja tudni, hogy a látogató melyik oldalon kattintott a hivatkozásra. Ez azzal a céllal történik, hogy védelmet nyújtson a felhasználó adatvédelme szempontjából. Ha az noreferrer attribútumot nem használják, az új oldal hozzáférhet az eredeti oldal címéhez, ami esetleg kényes információkat tartalmazhat.
    
    Ebben az esetben a target="_blank" azt jelenti, hogy az új oldal az eredeti oldaltól függetlenül fog megnyílni új ablakban vagy lapon. Az noopener és noreferrer attribútumok biztosítják a megfelelő biztonsági és adatvédelmi intézkedéseket az újonnan nyitott oldalak számára.*/