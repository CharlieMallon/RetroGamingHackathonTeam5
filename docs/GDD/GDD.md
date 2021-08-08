# Web Missiles!

## Game Layout
![basic_layout](missiles.jpg)

## Mechanics
### General
- **Win Scenario**:  None, survive for as long as you can
- Enemies shoot at cities
- Cities hit are destroyed
- **Lose Scenario**: all *cities* are destroyed
- Player can shoot at enemy missiles to destroy them
- Salvaged parts are used to buy upgrades
	
### Player / controls
- *Player* can *left_click* on *air* to shoot a *player_missile*
- *player_missile* always comes out the central city (*city_2*) regardless of its state (*alive/dead*)
- *player_missile* explodes on *click_location*
- Explosion grows to its *max_radius*
- *enemy_missiles* or *light_ufos* hit by explosion are destroyed
- *player_missile* can only be shot after *reload_time*
- Click on an upgrade within the store to purchase if there's enough *salvaged_parts*

### Cities
- Total of 5 cities at start (city_0 | city_1 | city_2 | city_3 | city_4)
- Cities are either *alive* (at game start) or *dead* (when *city_lives* reaches 0)
- Cities start with *city_lives = 0*
- *city_lives* be incremented via upgrades
- *city_lives* are shown on screen by a dot within the city sprite itself
	
### Enemies
#### Heavy UFO
- Appears on screen and travels horizontally left or right at *movement_speed*
- *movement_speed* is constant
- Shoots an *enemy_missile* at a random city
- **Cannot** be killed
- *enemy_missile* can be killed by *player_missile*
- Disappeares when exiting screen

#### Light UFO
- Appears on screen and travels horizontally left or right at *movement_speed*
- *movement-speed* is constant and faster than Heavy UFO
- Does **not** shoot at cities
- Can be killed by *player_missile* and drops *salvaged_parts*

### Upgrades
- Can be purchased with *salvaged_parts*
- There's several levels to each upgrade with increasing cost
- Powerups are:
	- Deadlier: increase explosion radius (1/1.5/2)
	- Safer: add shield to random city, acts as an extra life point for cities(1/1/1/1)
	- Quicker: reduces reload time, so you can shoot more missiles per minute (Per second shots 1/2/5)
	- Faster: *player_missiles* travel faster across the screen (test)
	
	- Dumber: Enemies shoot less often (test)
	- Slower: Make enemies slower on screen (0.9/0.8/0.7)
		
## art style
Pixel | minimalistic | vectorial ?
### environment
Moon | Mars | Alien | Earth ?
### cities

### explosions

### missiles		

### enemies

## technology