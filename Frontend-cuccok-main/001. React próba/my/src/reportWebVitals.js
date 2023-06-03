const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

/*A reportWebVitals.js fájl egy segéd fájl, amelyet a Create React App (CRA) sablon generál a React alkalmazásokhoz. Ez a fájl a webalkalmazás teljesítményéről gyűjt információkat és jelentéseket, amelyeket a fejlesztők használhatnak a webalkalmazás optimalizálásához és monitorozásához.

A reportWebVitals.js fájl feladatai közé tartoznak:

    Teljesítményadatok gyűjtése: A fájl segítségével a React alkalmazás figyeli és rögzíti a webalkalmazás különböző teljesítménymutatóit, mint például az oldal betöltési sebessége, az interakciók válaszideje stb. Ez a mérési adatokat a következőre használhatják:
        Lighthouse jelentések: A reportWebVitals.js fájl generálja az adatokat, amelyeket a Lighthouse segítségével lehet kiértékelni. A Lighthouse egy eszköz, amely az alkalmazás teljesítményét és minőségét elemzi, és jelentéseket készít a fejlesztőknek.
        Egyéni monitorozás: A fejlesztők használhatják ezeket az adatokat saját monitorozási rendszerekben vagy eszközökben a webalkalmazás teljesítményének figyelésére.

    Jelentések generálása: A reportWebVitals.js fájl jelentéseket generál az alkalmazás teljesítményadatairól. Ezek a jelentések általában az alkalmazás konzolára vagy más naplófájlokba kerülnek, és tartalmazhatnak információkat a teljesítményproblémákról, figyelmeztetésekről vagy más hasznos adatokról.

A reportWebVitals.js fájl automatikusan hozzá van adva a Create React App projektekhez, és a szükséges függvényeket tartalmazza a teljesítménymutatók rögzítéséhez és jelentéséhez. Ha nem kívánja használni vagy testre szabni a teljesítményfigyelést, egyszerűen elhagyhatja vagy inaktívvá teheti ezt a fájlt a projektben.

A fenti kód a reportWebVitals függvényt definiálja a reportWebVitals.js fájlban. Ez a függvény felelős a webalkalmazás teljesítményadatainak rögzítéséért és jelentéséért.

A függvény a következő műveleteket hajtja végre:

    Megkapja a onPerfEntry paramétert, amely egy visszahívó függvényt jelöl.
    Ellenőrzi, hogy a onPerfEntry változó létezik és egy függvényt reprezentál-e.
    Ha a onPerfEntry változó létezik és függvény, akkor az import utasítás segítségével importálja a web-vitals modult. Ez a modul a teljesítményadatokat gyűjti és jelenti.
    A web-vitals modul betöltése után a függvény hozzáfér a különböző teljesítménymutatókhoz, mint például a Core Web Vitals (CLS, FID, FCP, LCP, TTFB).
    Az import utasítás then metódusában meghívja az egyes teljesítménymutatókhoz tartozó függvényeket (pl. getCLS, getFID, stb.) a onPerfEntry paraméterrel. Ez az onPerfEntry függvény a teljesítményadatokat fogja fogadni és feldolgozni.

A fenti kód tehát összekapcsolja a web-vitals modult a onPerfEntry függvénnyel, így a teljesítményadatokat lehet rögzíteni és jelenteni a megfelelő teljesítménymutatók esetén.*/
