
    // obiekt książki
    class Ksiazka {
      constructor(tytul, rokWydania, imieAutora, nazwiskoAutora) {
        this.tytul = tytul;
        this.rokWydania = rokWydania;
        this.imieAutora = imieAutora;
        this.nazwiskoAutora = nazwiskoAutora;
      }

      pelneImieINazwisko() {
        return `${this.imieAutora} ${this.nazwiskoAutora}`;
      }
    }

    //tablica książek
    const ksiazki = [
      new Ksiazka("Pan Tadeusz", 1834, "Adam", "Mickiewicz"),
      new Ksiazka("Quo Vadis", 1896, "Henryk", "Sienkiewicz"),
      new Ksiazka("Lalka", 1890, "Bolesław", "Prus"),
      new Ksiazka("Potop", 1886, "Henryk", "Sienkiewicz")
    ];

    
    const wybranyRok = 1834;

    console.log(`Książki wydane w roku ${wybranyRok}:`);
    ksiazki.forEach(ksiazka => {
      if (ksiazka.rokWydania === wybranyRok) {
        console.log(`${ksiazka.tytul} - autor: ${ksiazka.pelneImieINazwisko()}`);
      }
    });
