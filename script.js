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
let Rick = new Team(1,"WHEEEEEEEEE",4,2,6,3,9,8,2);
let Why = new Team(1,"Gae",4,2,6,3,4,6,2);
let participants = [JohnCena,"fkajhfalhf"];


participants.sort((a, b) => {
    if (a.tb1 > b.tb1)
        return -1;
    if (a.tb1 < b.tb1)
        return 1;
    return 0;
});
console.log(participants);

let table = document.querySelector('table');

let name = 'jahdb';
let age = 's';
let country = 't';


let x = 0;

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


