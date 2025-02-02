function osszesOszto(szam: number): number[] {
    var osztok: number[] = [];
  
    for (var i = 1; i <= szam; i++) {
      if (szam % i === 0) {
        osztok.push(i);
      }
    }
  
    return osztok;
    }

function parosDarab(szamok: number[]): number {
    return szamok.filter(szam => szam % 2 === 0).length;
    }


function fuggvenyhivasPalindrom(fuggveny: () => string): boolean {
    var eredetiSzoveg = fuggveny();
    var tisztitottSzoveg = eredetiSzoveg.replace(/\s/g, "").toLowerCase();
    var forditottSzoveg = tisztitottSzoveg.split("").reverse().join("");
  
    return tisztitottSzoveg === forditottSzoveg;
     }  
   