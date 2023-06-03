// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

/*A setupTest.js fájl általában a tesztelési környezet beállítására és konfigurálására szolgál a JavaScript alapú projektekben. Ez a fájl lehetőséget nyújt a tesztek előtt végrehajtandó konfigurációs feladatok elvégzésére, például a teszt keretrendszer beállításaira, teszteléshez szükséges könyvtárak importálására, tesztadatok inicializálására stb.

A setupTest.js fájl feladatai közé tartozhatnak:

    Tesztkeretrendszer beállítása: A fájlban lehetőség van a tesztekhez használt keretrendszer (pl. Jest, Mocha stb.) beállításaira és konfigurációjára. Ez lehetővé teszi a tesztek futtatását a megfelelő környezetben és a szükséges beállításokkal.

    Globális beállítások: A setupTest.js fájlban definiálhatók globális beállítások vagy globális változók, amelyeket a tesztekben használhatnak. Ez megkönnyítheti a tesztek közötti információátadást vagy a közös konfiguráció kezelését.

    Modul importálása és inicializálása: A fájlban importálhatók és inicializálhatók azok a könyvtárak, modulok vagy szolgáltatások, amelyeket a tesztekhez használnak. Ez magában foglalhatja például a tesztelési segédprogramokat, a tesztadatok kezelésére szolgáló eszközöket vagy más szükséges függőségeket.

    Tesztesetek előtti felkészítés: A setupTest.js fájlban végrehajthatók előzetes felkészítő lépések a tesztek futtatása előtt. Ez lehet például a tesztadatok inicializálása, a teszteszközök konfigurálása, a szimulált környezet beállítása vagy más előkészítő tevékenységek.

A setupTest.js fájl általában a tesztekben történő ismétlődő beállítások, inicializációk és konfigurációk központi helye, hogy megkönnyítse a tesztek karbantarthatóságát és konszisztenciáját. A fájl tartalma és funkciója projekt-specifikus lehet, és a használt tesztkeretrendszertől és tesztelési gyakorlatoktól függhet.

A fenti kód a setupTest.js fájlban található, és az @testing-library/jest-dom modul importálását végzi. Ez a kód a teszteléshez szükséges speciális Jest matcher-eket (egyeztetőket) ad hozzá a DOM elemekre, amelyeket a Testing Library tesztelési keretrendszerrel való használatra terveztek.

A kódhoz tartozó kommentárok magyarázzák, hogy a jest-dom modul hozzáadja a saját egyedi Jest matchereit, amelyek lehetővé teszik a DOM elemekre vonatkozó különböző ellenőrzések végrehajtását a tesztekben. Például az expect(element).toHaveTextContent(/react/i) kifejezés segítségével ellenőrizhető, hogy az adott element tartalmazza-e a "react" szöveget, és az i jelölő miatt nem érzékeny a kis- és nagybetűkre.

Az @testing-library/jest-dom modul a Testing Library egyik kiegészítője, amely széles körű DOM manipulációs és ellenőrzési lehetőségeket biztosít a tesztek során. Ez a modul segít a tesztelőknek könnyen és olvasható módon ellenőrizni a DOM elemek tulajdonságait, tartalmát és viselkedését.

A setupTest.js fájlban történő importálás lehetővé teszi, hogy a tesztekben használhassuk a jest-dom modul által nyújtott matchereket és funkciókat anélkül, hogy külön-külön importálnánk vagy konfigurálnánk azokat minden egyes tesztfájlban. Ez elősegíti a tesztek egyszerűségét, olvashatóságát és újrafelhasználhatóságát.*/
