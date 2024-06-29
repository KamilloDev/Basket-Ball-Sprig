// Spirg game about retrieving your chinchilla!
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
LLLLLLLLLLLLLLLL` ]
)

setSolids([player, wall, bush, chinchilla])

setPushables({
  [ player ]: [chinchilla, bush]
})

let level = 0
const levels = [
  map`
...b.bw....
..w...w.c..
.bw.b.ww...
.ww....w.wb
ww.b...ww..
.........b.
.www..w.ww.
..hwbww....
b..w.wpb...
..bw.w.b...`,
  map`
......ww...
..w...w....
.bw.b.wwc.w
.ww....w..w
ww.b...ww.w
......b...w
.www..www..
..hw.w.b...
...w.wpb...`,
  map`
wwwwwwwwwww
w...w.w...w
wb..b.w.c.w
w.w.w.www.w
w..bw.....w
ww.w.wwwwbw
w..w...w..w
wh.....w.pw
wwwwwwwwwww`,
  map`
wwwwwwwwwww
w...w.w...w
wb..b.w.c.w
w.w.w.www.w
w..bw.....w
ww.w.wwwwbw
w..w...w..w
wh.....w.pw
wwwwwwwwwww`
]

setMap(levels[level])



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

addText('Press J to ', {x:4, y:7, color:`3`})
addText('reset level', {x:4, y:8, color:`3`})

afterInput(() => {
  clearText()
  if(tilesWith(chinchilla, house).length >= 1){
      addText("you've won!", {x:4, y:8, color:`1`})
  }
})
