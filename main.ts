controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CarProtagPosY == 35) {
        CarProtagPosY = 45
        carProtag.setPosition(30, 45)
    } else if (CarProtagPosY == 25) {
        CarProtagPosY = 35
        carProtag.setPosition(30, 35)
    } else if (CarProtagPosY == 45) {
        CarProtagPosY = 55
        carProtag.setPosition(30, 55)
    } else if (CarProtagPosY == 15) {
        CarProtagPosY = 25
        carProtag.setPosition(30, 25)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CarProtagPosY == 35) {
        CarProtagPosY = 25
        carProtag.setPosition(30, 25)
    } else if (CarProtagPosY == 25) {
        CarProtagPosY = 15
        carProtag.setPosition(30, 15)
    } else if (CarProtagPosY == 45) {
        CarProtagPosY = 35
        carProtag.setPosition(30, 35)
    } else if (CarProtagPosY == 55) {
        CarProtagPosY = 45
        carProtag.setPosition(30, 45)
    }
})
let mySprite3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
let mySprite4 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
let mySprite7 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
let mySprite5 = sprites.create(img`
.....eeeeeee444444...........
.fffffffffff555555...........
.fffffffffff555555d..........
.ffff.ffeefe555dffd2.........
.....2ffeeee5fddddd222.......
....2211eee51f1ddd11122......
...22111eee11f1ddd111122.....
22222ffffffffffffffffff222244
44422f2222222f2f2222222222244
44422f2222222f2f2222222222222
2222222222222f222222222222222
2222222222222f222222222222222
2222fff222222f2222222fff22222
222fffff222222222222fffff2222
..fffffff..........fffffff...
..fffbfff..........fffbfff...
..fffffff..........fffffff...
...fffff............fffff....
....fff..............fff.....
.............................
`)
let mySprite6 = sprites.create(img`
. . 1 1 1 1 1 . . 
. 1 1 1 1 1 1 1 . 
8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 
8 1 1 1 1 1 1 8 8 
8 1 2 2 2 1 1 8 8 
8 1 2 2 1 8 1 8 8 
8 1 2 1 8 8 1 8 8 
8 1 1 8 8 8 1 8 8 
8 1 1 1 1 1 1 8 8 
8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 
1 1 1 1 1 1 1 1 1 
`)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -10
    actualEnnemy.setPosition(0, 0)
})
let new_ennemy_rand_pos = 0
let newEnemyRand = 0
let actualEnnemy: Sprite = null
let CarProtagPosY = 0
let carProtag: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . 1 . . . . . 1 . . . . . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    . . . 8 1 1 1 1 1 1 8 8 . . . . 
    . . . 8 1 2 2 2 1 1 8 8 . . . . 
    . . . 8 1 2 2 1 8 1 8 8 . . . . 
    . . . 8 1 2 1 8 8 1 8 8 . . . . 
    . . . 8 1 1 8 8 8 1 8 8 . . . . 
    . . . 8 1 1 1 1 1 1 8 8 . . . . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    `, 0)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 0)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.setLabel("HP")
statusbar.positionDirection(CollisionDirection.Top)
carProtag = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
carProtag.setPosition(30, 35)
let carProtagPosX = 30
CarProtagPosY = 35
let ennemySpeed = -50
let ennemyParent1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Enemy)
ennemyParent1.setPosition(0, 0)
let ennemyParent2 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
ennemyParent2.setPosition(0, 0)
let ennemyObstacle = sprites.create(img`
    ..............ffffff....
    .............f2feeeeff..
    ............f222feeeeff.
    .......cc...feeeeffeeef.
    .......cdc.fe2222eeffff.
    .......cddcf2effff222ef.
    ........cddcffeeefffffff
    .........cddce44fbe44eff
    ..........cdceddf14d4eef
    ..........cccdeddd4eeef.
    ...........edd4e44eeff..
    ............ee442222f...
    .............f2e2222f...
    .............f554444f...
    ..............ffffff....
    ................fff.....
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
ennemyObstacle.setPosition(0, 0)
let ennemyPassant = sprites.create(img`
    ...............cc...............
    ............ccc65c66............
    ............c6c55c76............
    ...........6cc7557c66...........
    ..........cc77777577c6..........
    .........666c677776cc66.........
    ........c7776c7c67657576........
    ........ccc666c666655666........
    ......c66cc7666667777c6766......
    .....c777c77667667767767776.....
    .....cc66cccc77c677cc666666.....
    ....c6766666c7c6767677777766....
    ...cc777666666677767777667c66...
    .666cc6677666667777777776677666.
    .67776677c676677777776677677776.
    cc6666ccc67767776777776cc7767666
    c666777667766776c776777c67776c66
    .c6777666ccc667c676cc666667776c.
    .cc6666766666cc66666666776cc666.
    ...66776c666666666677667766cccc.
    ...cc76c66766666667677667776c...
    ...6cccc677666666776777c77666...
    ......6ccc7c67767776c776cc......
    ........ccc6777c67776cc6........
    ...........cc77c67766...........
    .............6c6666.............
    ............ffeeeef.............
    ..........ffeeeeeeeef...........
    .............feeeffe............
    ..............fef...............
    ..............fef...............
    ...............f................
    `, SpriteKind.Enemy)
ennemyPassant.setPosition(0, 0)
let ennemyDelinquent = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    . . . 6 9 6 6 6 6 6 6 c 6 . . . 
    . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
    . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
    . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
    . 6 6 8 b b 1 b b b 8 8 b 9 6 6 
    . 6 8 b b b 8 b b b b 8 6 6 6 6 
    . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
    . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
    . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
    . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
    . 8 f f f f 8 8 8 8 f f f 8 8 8 
    . . f f f f f 8 8 f f f f f 8 . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
ennemyDelinquent.setPosition(0, 0)
game.onUpdateInterval(1000, function () {
    let timeFrame = 0
    if (timeFrame == 20000) {
        ennemySpeed = ennemySpeed + -10
    }
})
game.onUpdateInterval(4000, function () {
    newEnemyRand = randint(0, 6)
    new_ennemy_rand_pos = randint(15, 55)
    if (newEnemyRand == 0) {
        actualEnnemy = ennemyParent1
        actualEnnemy.setPosition(145, new_ennemy_rand_pos)
        actualEnnemy.setVelocity(ennemySpeed, 0)
    } else if (newEnemyRand == 1) {
        actualEnnemy = ennemyParent2
        actualEnnemy.setPosition(145, new_ennemy_rand_pos)
        actualEnnemy.setVelocity(ennemySpeed, 0)
    } else if (newEnemyRand == 2) {
        actualEnnemy = ennemyDelinquent
        actualEnnemy.setPosition(145, new_ennemy_rand_pos)
        actualEnnemy.setVelocity(ennemySpeed, 0)
    } else if (newEnemyRand == 3) {
        actualEnnemy = ennemyObstacle
        actualEnnemy.setPosition(145, new_ennemy_rand_pos)
        actualEnnemy.setVelocity(ennemySpeed, 0)
    } else if (newEnemyRand == 4) {
        actualEnnemy = ennemyPassant
        actualEnnemy.setPosition(145, new_ennemy_rand_pos)
        actualEnnemy.setVelocity(ennemySpeed, 0)
    } else if (newEnemyRand == 5) {
        actualEnnemy = ennemyParent1
        actualEnnemy.setPosition(145, new_ennemy_rand_pos)
        actualEnnemy.setVelocity(ennemySpeed, 0)
    } else {
    	
    }
})
