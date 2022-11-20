class Team {
  constructor(sno,team,games,won,draw,lost,tb1,tb2,tb3) {
    this.rank = 0;
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
let participants = [JohnCena,Rick,Why];


participants.sort((a, b) => {
    if (a.tb1 > b.tb1)
        return -1;
    if (a.tb1 < b.tb1)
        return 1;
    return 0;
});

let x = 0;
while (x <= participants.length){
  participants[x].rank = x+1 ;
  x ++ ;
}

let table = document.querySelector('table');



let x = 0;

while (x <= participants.length){


let template = `
                <tr>
                    <td>${participants[x].rank}</td>
                    <td>${participants[x].sno}</td>
                    <td>${participants[x].team}</td>
                    <td>${participants[x].games}</td>
                    <td>${participants[x].won}</td>
                    <td>${participants[x].draw}</td>
                    <td>${participants[x].lost}</td>
                    <td>${participants[x].tb1}</td>
                    <td>${participants[x].tb2}</td>
                    <td>${participants[x].tb3}</td>
                    
                </tr>`;
table.innerHTML += template;
x ++ ;
 
}


