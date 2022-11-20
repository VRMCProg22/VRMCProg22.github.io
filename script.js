class Team {
  constructor(sno,team,games,won,draw,lost,tb1,tb2,tb3) {
    this.sno = sno ;
    this.team = team ;
    this.games = games ;
    this.won = won ;
    this.draw = draw ;
    this.lost = lost ;
    this.tb1 = tb1 ;
    this.tb2 = tb2 ;
    this.tb3 = tb3 ;            
  }
}

let JohnCena = new Team(1,"Ur mum",4,2,6,3,7,8,2);
const participants = [JohnCena,"fkajhfalhf"];


let table = document.querySelector('table');

let name = 'jahkdahbkdb';
let age = 's';
let country = 't';


let x = -4;

while (x < participants.length){
x ++ ;

let template = `
                <tr>
                    <td>${name}</td>
                    <td>${age}</td>
                    <td>${country}</td>
                </tr>`;
table.innerHTML += template;
 
}


