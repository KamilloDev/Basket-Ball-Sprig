/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: Rescue your chinchilla!
@author: KamilloDev
@tags: [Animal, Rescue]
@addedOn: 2024-29-06
*/

const player = "p"
const chinchilla = 'c'
const background = 'g'
const bush = 'b'
const wall = 'w'
const house = 'h'
const coin = 'l'
const teleporter_f = 't'
const teleporter_t = 'f'
const music = tune`
217.3913043478261: C4^217.3913043478261 + C5-217.3913043478261,
217.3913043478261: C4^217.3913043478261 + C5-217.3913043478261,
217.3913043478261: C4^217.3913043478261 + C5-217.3913043478261,
217.3913043478261: C4^217.3913043478261 + B4~217.3913043478261,
217.3913043478261: C4^217.3913043478261 + B4~217.3913043478261 + C5~217.3913043478261 + D5/217.3913043478261,
217.3913043478261: C4^217.3913043478261 + C5~217.3913043478261 + D5/217.3913043478261,
217.3913043478261: C4^217.3913043478261 + C5~217.3913043478261 + B4~217.3913043478261 + D5/217.3913043478261,
217.3913043478261: C4^217.3913043478261 + B4~217.3913043478261 + D5/217.3913043478261,
217.3913043478261: C4^217.3913043478261 + B4~217.3913043478261,
217.3913043478261: C4^217.3913043478261 + B4~217.3913043478261 + C5~217.3913043478261,
217.3913043478261: C5~217.3913043478261 + C4^217.3913043478261,
217.3913043478261: C5~217.3913043478261 + C4^217.3913043478261,
217.3913043478261: B4~217.3913043478261 + C4^217.3913043478261,
217.3913043478261: B4~217.3913043478261 + A4~217.3913043478261 + C4^217.3913043478261,
217.3913043478261: A4~217.3913043478261 + C4^217.3913043478261,
217.3913043478261: B4~217.3913043478261 + C4^217.3913043478261,
217.3913043478261: B4~217.3913043478261 + C5~217.3913043478261 + C4^217.3913043478261,
217.3913043478261: C5~217.3913043478261 + C4^217.3913043478261,
217.3913043478261: C4^217.3913043478261 + C5-217.3913043478261,
217.3913043478261: C4^217.3913043478261 + C5-217.3913043478261,
217.3913043478261: C4^217.3913043478261 + C5-217.3913043478261,
217.3913043478261: C4^217.3913043478261 + C5-217.3913043478261,
217.3913043478261: B4~217.3913043478261 + A4~217.3913043478261 + C4^217.3913043478261,
217.3913043478261: A4~217.3913043478261 + C4^217.3913043478261,
217.3913043478261: A4~217.3913043478261 + C4^217.3913043478261,
217.3913043478261: A4~217.3913043478261 + C4^217.3913043478261,
217.3913043478261: A4~217.3913043478261 + C4^217.3913043478261,
217.3913043478261: A4~217.3913043478261 + B4~217.3913043478261 + C4^217.3913043478261 + C5/217.3913043478261,
217.3913043478261: B4~217.3913043478261 + C4^217.3913043478261 + C5/217.3913043478261,
217.3913043478261: B4~217.3913043478261 + C4^217.3913043478261 + C5/217.3913043478261,
217.3913043478261: B4~217.3913043478261 + C4^217.3913043478261 + C5/217.3913043478261,
217.3913043478261: C4^217.3913043478261 + C5/217.3913043478261`
const movechin = tune`
500: C4~500,
15500`
playTune(music, Infinity)

setLegend(
  [ player, bitmap`
.....66666......
....6626266.....
....8866688.....
....8836388.....
.....63336......
.....44444......
....4444444.....
..66444444466...
..66444444466...
....4444444.....
....CCCCCCC.....
....77...77.....
....77...77.....
....77...77.....
....CC...CC.....
...CCC...CCC....` ],
  [ chinchilla, bitmap`
....LL..LL......
...L88LL88L.....
..L888L888LL....
..L111L11111L...
.L11111111111L..
.L110111111111L.
.L111111111111L.
.LH111111111111L
..L22222LL11111L
..L222222LL1111L
..L8282288L1111L
...LLLLLLL1111L.
......LLL11111L.
.....L1111111L..
.....L1111111L..
.....LLLLLLLL...` ],
  [ background, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777` ],
  [ bush, bitmap`
................
.....444444.....
...44444DDD4....
..4D4DD4444444..
.4D444DD444444..
.4D44444D444444.
.44DD4444DD44444
44444D44444DD444
444444D44444DD44
4D4444D444444444
4D4444DD44444D44
4D44444444444DD.
.D44D444444444D.
.4444DDD444444..
..444444DD44D...
....444444DD....` ],
  [ wall, bitmap`
LLLLLLLLLLLLLLLL
11L111111111L111
LLLLLLLLLLLLLLLL
1111L111111111L1
LLLLLLLLLLLLLLLL
11L1111111L11111
LLLLLLLLLLLLLLLL
111L1111L11111L1
LLLLLLLLLLLLLLLL
11111L11111L1111
LLLLLLLLLLLLLLLL
11L11111L1111L11
LLLLLLLLLLLLLLLL
1L111L11111L1111
LLLLLLLLLLLLLLLL
111L11111L1111L1` ],
  [ house, bitmap`
....LLLLLLLL....
...LCCCCCCCCL...
..LCCCCCCCCCCL..
.LCCCCCCCCCCCCL.
LLLLLLLLLLLLLLLL
LCCCCCCCCCCCCCCL
LCCCCCCCCCCCCCCL
LCCCCCCCCCCCCCCL
LCCCCCCCCCCCCCCL
L2222CCCCCC2222L
L2222CCCCCC2222L
L2222C111CC2222L
L2222C111CC2222L
LCCCCCL11CCCCCCL
LCCCCC111CCCCCCL
LLLLLLLLLLLLLLLL` ],
  [coin, bitmap `
....66666666....
...666FFF6666...
..66FFF6666666..
.66FF6666666666.
66FF666666666666
6FF6666666666666
6F66666...666666
6F6666.....66666
666666.....66666
6666666...666FF6
666666666666FF66
66666666666FF666
.666666666FF666.
..6666666FF666..
...6666FFF666...
....66666666....`],
  [teleporter_f, bitmap `
HHHHHHHHHHHHHHHH
H88888888888888H
H8HHHHHHHHHHHH8H
H8H8888888888H8H
H8H8HHHHHHH88H8H
H8H88888888H8H8H
H8H88HHHHH8H8H8H
H8H8H8888H8H8H8H
H8H8H8HH8H8H8H8H
H8H8H8H88H8H8H8H
H8H8H8HHH88H8H8H
H8H88HHHHHH88H8H
H8H8888888888H8H
H8HHHHHHHHHHHH8H
H88888888888888H
HHHHHHHHHHHHHHHH`],
  [teleporter_t, bitmap `
HHHHHHHHHHHHHHHH
H77777777777777H
H7HHHHHHHHHHHH7H
H7H7777777777H7H
H7H7HHHHHHH77H7H
H7H77777777H7H7H
H7H77HHHHH7H7H7H
H7H7H7777H7H7H7H
H7H7H7HH7H7H7H7H
H7H7H7H77H7H7H7H
H7H7H7HHH77H7H7H
H7H77HHHHHH77H7H
H7H7777777777H7H
H7HHHHHHHHHHHH7H
H77777777777777H
HHHHHHHHHHHHHHHH`]
)




setSolids([player, wall, bush, chinchilla])

setPushables({
  [ player ]: [chinchilla, bush]
})

let level = 0
let coins = 0
const levels = [
  map`
...wpw...
wwww.lw..
w...b.w..
w..c.w...
wwww.w...
...w.w...
...wlw...
...whw...`,
  map`
.........
wwww.wwww
...w.w...
...w.wf.h
pctw.w...
...w.w...
wwww.wwww
.........`,
  map`
...b.bw.....
.lw...w.c...
.bw.b.ww....
.ww....w.wb.
.w.b...ww...
.........b..
.www..w.ww..
.b.wbww.....
...w.wpb....
h.bw.w.b...l`,
  map`
...b.bw.....
.lw...w.c...
.bw.b.ww....
.ww....w.wb.
.w.b...ww...
.........b..
.www..w.ww..
.b.wbww.....
...w.wpb....
h.bw.w.b...l`,
  map`
hlwb.l..wwp.
..ww.w..ww..
.bw..b..wwbw
.wwww.w.....
.w..wcw.....
....w.w.....
.w...b.....w
....b..www.w
...w...b....
.....w.b....`
]

setMap(levels[level])

let prechin = {"x": getFirst(chinchilla).x, "y": getFirst(chinchilla).y} 

onInput("s", () => {
  getFirst(player).y += 1
})
onInput("w", () => {
  getFirst(player).y -= 1
})
onInput("a", () => {
  getFirst(player).x -= 1
})
onInput("d", () => {
  getFirst(player).x += 1
})
onInput("j", () => {
  setMap(levels[level])
})

addText('Press J to ', {x:4, y:7, color:color`3`})
addText('reset level', {x:4, y:8, color:color`3`})

afterInput(() => {
  clearText()
  let poschin = {"x": getFirst(chinchilla).x, "y": getFirst(chinchilla).y}
  let obstacles = getAll(coin);
  let playerpos = {"x": getFirst(player).x, "y": getFirst(player).y}
  for (let i = 0; i < obstacles.length; i++) {
    if (obstacles[i].y == playerpos.y && obstacles[i].x == playerpos.x) {
      coins += 1
      obstacles[i].remove();
    }
  }
  
  addText(`${coins} coins`, {x:1, y:1, color:color`8`})
  if(tilesWith(chinchilla, house).length >= 1 && level == 3){
      addText("you've won!", {x:4, y:9, color:color`8`})
      addText(`you've collected`, {x:4, y:10, color:color`8`})
      addText(`${coins} coins`, {x:4, y:11, color:color`8`})
  }else if(tilesWith(chinchilla, house).length >= 1){
    level += 1
    setMap(levels[level])
    
  }
 // Check if the chinchilla overlaps with the teleporter F
  if (tilesWith(chinchilla, teleporter_f).length >= 1) {
    const t_f = getFirst(teleporter_f);
    const t_t = getFirst(teleporter_t);

    // Teleport the chinchilla to the position of teleporter T
    getFirst(chinchilla).x = t_t.x;
    getFirst(chinchilla).y = t_t.y;
  
  }
  if (prechin.x != poschin.x || prechin.y != poschin.y){
    playTune(movechin, 1)
    prechin = poschin
  }

 

  
 


}
)
