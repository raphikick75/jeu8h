def on_down_pressed():
    global CarProtagPosY
    if CarProtagPosY == 35:
        CarProtagPosY = 45
        carProtag.set_position(30, 45)
    elif CarProtagPosY == 25:
        CarProtagPosY = 35
        carProtag.set_position(30, 35)
    elif CarProtagPosY == 45:
        CarProtagPosY = 55
        carProtag.set_position(30, 55)
    elif CarProtagPosY == 15:
        CarProtagPosY = 25
        carProtag.set_position(30, 25)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_up_pressed():
    global CarProtagPosY
    if CarProtagPosY == 35:
        CarProtagPosY = 25
        carProtag.set_position(30, 25)
    elif CarProtagPosY == 25:
        CarProtagPosY = 15
        carProtag.set_position(30, 15)
    elif CarProtagPosY == 45:
        CarProtagPosY = 35
        carProtag.set_position(30, 35)
    elif CarProtagPosY == 55:
        CarProtagPosY = 45
        carProtag.set_position(30, 45)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

actualEnnemy: Sprite = None
new_ennemy_rand_pos = 0
newEnemyRand = 0
ennemyPassant: Sprite = None
CarProtagPosY = 0
carProtag: Sprite = None
statusbar = statusbars.create(20, 4, StatusBarKind.health)
statusbar.set_label("HP")
statusbar.position_direction(CollisionDirection.TOP)
scene.set_background_color(6)
carProtag = sprites.create(img("""
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
    """),
    SpriteKind.player)
carProtag.set_position(30, 35)
carProtagPosX = 30
CarProtagPosY = 35
ennemyParent1 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
ennemyParent1.set_position(0, 0)
ennemyParent2 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
ennemyParent2.set_position(0, 0)
ennemyDelinquent = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
ennemyPassant.set_position(0, 0)
ennemyPassant = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
ennemyDelinquent.set_position(0, 0)
ennemyObstacle = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
ennemyObstacle.set_position(0, 0)

def on_update_interval():
    global newEnemyRand, new_ennemy_rand_pos, actualEnnemy
    newEnemyRand = randint(0, 6)
    new_ennemy_rand_pos = randint(15, 55)
    if newEnemyRand == 0:
        actualEnnemy = ennemyParent1
        actualEnnemy.set_position(145, new_ennemy_rand_pos)
        actualEnnemy.set_velocity(-50, 0)
    elif newEnemyRand == 1:
        actualEnnemy = ennemyParent2
        actualEnnemy.set_position(145, new_ennemy_rand_pos)
        actualEnnemy.set_velocity(-50, 0)
    elif newEnemyRand == 2:
        actualEnnemy = ennemyDelinquent
        actualEnnemy.set_position(145, new_ennemy_rand_pos)
        actualEnnemy.set_velocity(-50, 0)
    elif newEnemyRand == 3:
        actualEnnemy = ennemyObstacle
        actualEnnemy.set_position(145, new_ennemy_rand_pos)
        actualEnnemy.set_velocity(-50, 0)
    elif newEnemyRand == 4:
        actualEnnemy = ennemyPassant
        actualEnnemy.set_position(145, new_ennemy_rand_pos)
        actualEnnemy.set_velocity(-50, 0)
    elif newEnemyRand == 5:
        actualEnnemy = ennemyParent1
        actualEnnemy.set_position(145, new_ennemy_rand_pos)
        actualEnnemy.set_velocity(-50, 0)
    else:
        pass
game.on_update_interval(4000, on_update_interval)
