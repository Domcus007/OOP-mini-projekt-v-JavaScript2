// Exportujeme třídu, abychom ji mohli použít v jiném souboru
export class Student {

    // KONSTRUKTOR: To je metoda, která se zavolá, když "rodíme" nového studenta.
    // Nastavuje základní vlastnosti.
    constructor(jmeno, rocnik) {
        this.jmeno = jmeno;       // 1. vlastnost (Jméno)
        this.rocnik = rocnik;     // 2. vlastnost (Ročník)
        this.znamky = [];         // 3. vlastnost (Seznam hodnot - zatím prázdný)
    }

    // METODA 1 (Mění vnitřní stav + ZAPOUZDŘENÍ):
    // Přidá známku, ale jen pokud je platná (1 až 5).
    pridatZnamku(novaZnamka) {
        // ZAPOUZDŘENÍ: Tady kontrolujeme, jestli nám tam někdo nepe cpe nesmysl.
        if (novaZnamka >= 1 && novaZnamka <= 5) {
            this.znamky.push(novaZnamka); // Přidá známku do seznamu
            console.log(`Studentu ${this.jmeno} byla zapsána známka: ${novaZnamka}`);
        } else {
            console.error(`Chyba: Známka ${novaZnamka} není platná! Musí být 1-5.`);
        }
    }

    // METODA 2 (Výpočet):
    // Spočítá průměr všech známek.
    spocitatPrumer() {
        if (this.znamky.length === 0) {
            return 0; // Když nemá známky, průměr je 0
        }
        
        let soucet = 0;
        // Projdeme všechny známky a sečteme je
        for (let znamka of this.znamky) {
            soucet += znamka;
        }
        
        // Vydělíme součet počtem známek
        return soucet / this.znamky.length;
    }

    // METODA 3 (Vrací textový popis):
    // Řekne nám, kdo to je a jak na tom je.
    predstavitSe() {
        const prumer = this.spocitatPrumer();
        // .toFixed(2) zaokrouhlí číslo na 2 desetinná místa
        return `Student ${this.jmeno} (ročník ${this.rocnik}) má průměr: ${prumer.toFixed(2)}.`;
    }
}