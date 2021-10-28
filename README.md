# proj_ExploreAndTravel

_Source:_ https://github.com/Ninni-cfm/proj_ExploreAndTravel

_Front-End:_

---

## MERN - Projekt lev3_1: Projekt Explore and Travel

### Aufgabenstellung

Wir erstellen eine Explore and Travel in MERN.<br><br>

---

### Front-End Teil

-   Erzeuge mit Hilfe des Terminals eine React App.
-   Arbeite mit Components und props um die Seite zu erstellen!
-   Wir erweitern die Landingpage um eine weitere Seite.
-   Erstelle bitte eine Website und binde diese in das Projekt ein.
-   Füge das Routing ein und verlinke die Seiten korrekt.

#### Assets:

Link zum Shop Design: [Explore and Travel (Figma)](https://www.figma.com/file/TLqyztwWLAJVHQLSupYe7z/travelz-Copy?node-id=0%3A1)

Fonts:

-   Playfair Display
-   Mulish
-   Inter

<br>

---

### Back-End Teil

-   Cors initialisieren
-   Erstelle eine Database:

    ```
    [{
        _id:608eddb4a969fd1e5218e4a7,
        location:Indonesia,
        activity:Yoga,
        image_url:
        Description
    },.....]
    ```

-   zeig deine Database wie ein Json:

    ```
    app.get('/', (req, res) =>{
        Holiday.find()
            .then(data => {
                console.log(data);
                res.json(data);
            })
        .catch(err => console.log(err))
    });
    ```

-   Falls du kein Backend erstellen willst, erstelle eine json-Datei

    ```
    [{
        "id":"1",
        "location":"Indonesia",
        "activity":"Yoga",
        "image_url":
        "Description"
    },.....]
    ```

#### Hinweis

-   [cors](https://www.npmjs.com/package/cors) (um Cross-Origin zu ermöglichen)
