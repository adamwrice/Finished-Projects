var data = {
    "state" : {
        "current_room" : "title",
		"current_enemy" : "null",
		"stats" : {
			"hp" 	: 100,
			"str"	: 5,
			"agl"	: 5,
			"int"	: 5,
			"att"	: 8,
			"dmg"	: 3,
			"def" 	: 5,
			"armor" : 1,
			"lvl"	: 1,
			"xp" 	: 0
		}
    },
	
	"game_map" : {
		"title" : {
			"name" : "13 Panels",
			"description" : "Welcome to 13 Panels! A text based RPG adventure game that will take you on an emotional journey! Are you ready??? Let's begin!",
			"exits" : {
				"Start New Game" : "prologue1"
			}
		},
		"prologue1" : {
			"name" : "Prologue",
			"description" : "The Kingdom of Raedin has been at peace for a hundred years. But, before that, War had torn the country apart for decade after decade. Orcs, Elves, Humans all struggled for influence in the small, diverse Kingdom. Its King was weak-willed and forced into slavery several times before the Champion of Raedin came forth to save him.",
			"exits" : {
				"Continue" : "prologue2"
			}
		},
		"prologue2" : {
			"name" : "Prologue",
			"description" : "The King was grateful for being saved, but his life in servitude tarnished his will and brittled his bones. The stress of all the wars and sicknesses he picked up while imprisoned did not fare well with him. Restrained to his sickbed, the country's wealth and spirit fell into shambles. He died not long after. With no heir, the kingdom had no plan for the next king, so the Kingdom was left in the hands of the Champion.",
			"exits" : {
				"Continue" : "prologue3"
			}
		},
		"prologue3" : {
			"name" : "Prologue",
			"description" : "And within his kind, brave hands, Raedin flourished with wealth and prosperity and peace. He led with honour and trust. He was loved by all his people and mended lots of relationships with other countries. The wars stopped. Diplomacy was always the first option. YOU are that champion. The Champion of Raedin. You married a beautiful queen of the nearby kingdom of Barde that you fell in love with. The night of your wedding was legendary. Perfect in every way. Your honeymoon was even better. Several months passed and she bore you a child.",
			"exits" : {
				"Continue" : "prologue4"
			}
		},
		"prologue4" : {
			"name" : "Prologue",
			"description" : "One night, your Queen began screaming. She's in labour. The baby must be coming. You call for the nurse, but she doesn't come. You call for guards, but they don't come either. You decide to help her yourself. The birth is successful, but you still find it strange that your staff is missing... What would you like to name your child?",
			"exits" : {
				"Continue" : "kingbedroom"
			}
		},
		"kingbedroom" : {
			"name" : "Bedroom",
			"description" : "You are standing in the Queen's chamber. The Queen lies by your feet, still recovering from the birth.",
			"exits" : {
				"Hallway" : "hallway"
			}
		},
		"stairs" : {
			"name" : "Stairs",
			"description" : "You are on the stairs. The sounds of fighting resonate through the entire palace. If the Queen is going to escape, you will need to buy her some time. You realize that you won't be able to go with her if she is going to escape successfully. You silently pray for courage and you whisper a goodbye to your most beloved and her new child. A scream is heard outside. You better go check it out. Someone might need your help. It's time to go greet your uninvited guests.",
			"exits" : {
				"Back" : "hallway",
				"Courtyard" : "courtyard"
			}
		},
		"hallway" : {
			"name" : "Hallway",
			"description" : "The hallway is empty. There are stairs leading down to the east. Something must be wrong. A scream is heard nearby. You instantly think of ways out, but the only way out is through a trapdoor in the Queen's chambers. The only way she will have time to get out is if you distract whoever is attacking the castle.",
			"exits" : {
				"Back" : "kingbedroom",
				"Stairs" : "stairs"
			}
		},
		"courtyard" : {
			"name" : "Courtyard",
			"description" : "THE CASTLE IS UNDER ATTACK! Fighting is all around you. Your guards are putting up a valiant effort, but you are suddenly surrounded. Looks like you have to fight in order to keep them from getting into the castle...",
			"exits" : {
				"Next" : "kingsdeath"
			}
		},
		
		"kingsdeath" : {
			"name" : "fight!",
			"description" : "Wave after wave of enemies pour into the castle. There's obviously too many of them. You are not going down without a fight though! You slash through dozens of them. Left and right your enemies fall before you. You fight your way all the way back up the stairs and through the hallway and then barracade yourself in the queens chambers. You're safe. Or so you thought... A strange pain in your side draws your attention. You're bleeding. A lot. One of them must have got a lucky stab in and in all the adrenaline you didn't notice. So... This is it. Your thoughts, though hazy, turn to your wife and your new child. You hope they made it out on time... You hope that they will be safe... You hope they will be fine without you... You hope...",
			"exits" : {
				"Die" : "prologueend"
			}
		},
		
		"prologueend" : {
			"name" : "The Beginning",
			"description" : "You never really had much growing up. You and your mother live in a small hut that your mother made herself from mud and sticks. Schooling was hard to get but your mother tried her best to teach you what she could. Today is your 18th birthday. The day you get to go off and explore the world and all its wonders! You cannot wait! You have been waiting for the day a long time. You approach your mother.",
			"exits" : {
				"Begin your adventure!" : "hut"
			}
		},
		
		"castlegates" : {
			"name" : "Castle Gates",
			"description" : "So this is where your father lived... It looks like a shell of what it probably was when you were born. Guards man the guard-posts of either side of the gates.",
			"exits" : {
				"Back" : "hut",
				"Attack" : "castleentrance"
			}
		},
		
		"castleentrance" : {
			"name": "Castle Entrance",
			"description" : "Guards swarm you from all directions. You guess it wasn't smart to show up uninvited, but it is supposed to be your castle. Time to take it back.",
			"exits" : {
				"Back" : "castlegates",
				"Courtyard" : "castlecourtyard"
			}
		},
		
		"castlecourtyard" : {
			"name": "Castle Courtyard",
			"description" : "The courtyard is huge! You can only dream of what when on here before your father's assassination... All of the festivals and competitions... Now it is just used as a prison and a barracks. For shame.",
			"exits" : {
				"Back" : "castleentrance",
				"Throne Room" : "throneroom"
			}
		},
		"throneroom" : {
			"name": "Throne Room",
			"description" : "As you push through the heavy gold-plated doors, the shine of jewels bombard your eyes. What you see seems almost impossible. The ceiling towers over you. The room itself is bigger than the house you grew up it. The walls are intricately decorated with faded expensive tapestries and swirls of jewels. Some of them are missing. The recent occupants must of looted the place.",
			"exits" : {
				"Back" : "castlecourtyard"
			}
		},
		
		"hut" : {
			"name" : "Home",
			"description" : "You're home. This is the place you grew up. It is a small, average sized hut your mother created for the two of you from mud and bricks. One would never guess that the people who live there have royal blood.",
			"exits" : {
				"Forest" : "forest",
				"Desert" : "desert",
				"Mountain" : "mountain",
				"Swamp" : "swamp",
				"Plains" : "plains",
				"Castle" : "castlegates"
			}
		},
		
		"forest" : {
			"name" : "Forest",
			"description" : "The entrance to the forest seems dark and foreboding. You feel slightly intimidated as you take in the sights and smells.",
			"exits" : {
				"Home" : "hut",
				"Enter" : "deepforest"
			}
		},
		
		"deepforest" : {
			"name" : "Clearing",
			"description" : "You stand in the furthest part of the forest. Light seeps down from the trees around you and the forest opens up into a large clearing.",
			"exits" : {
				"Return Home" : "hut"
			}
		},
		
		"desert" : {
			"name" : "Desert",
			"description" : "The desert is bright and white hot. The sand falls around your feet with each step.",
			"exits" : {
				"Home" : "hut",
				"Enter" : "dunes"
			}
		},
		
		"dunes" : {
			"name" : "High Dunes",
			"description" : "You stand on the highest point of the desert. The sun burns away at your face. You can see the way out from here.",
			"exits" : {
				"Return Home" : "hut"
			}
		},
		
		"mountain" : {
			"name" : "Mountain",
			"description" : "The mountain is tall and intimidating. You have no doubt creature will try to rob you or kill you.",
			"exits" : {
				"Home" : "hut",
				"Enter" : "peak"
			}
		},
		
		"peak" : {
			"name" : "Mountain Peak",
			"description" : "You're at the highest point of the mountain. Wind whips at your face and the cold nips at your ears. You can see for miles around. You can even see the tiny dot that is your house!",
			"exits" : {
				"Return Home" : "hut"
			}
		},
		
		"swamp" : {
			"name" : "Swamp",
			"description" : "Moisture hangs heavy in the air. Your feet sink inches into the thick mud surrounding the entrance. Bugs of all sizes swarm you. It will be hard to move through this area.",
			"exits" : {
				"Home" : "hut",
				"Enter" : "bog"
			}
		},
		
		"bog" : {
			"name" : "Bog of Stench",
			"description" : "Man it stinks here! The constant buzzing and the stench of the bog are getting to you. Good thing there isn't any further to go.",
			"exits" : {
				"Return Home" : "hut"
			}
		},
		
		"plains" : {
			"name" : "Plains",
			"description" : "The long grasses kiss your legs. Flat land stretches for miles around you. Things will have a hard time sneaking up on you here... without camouflage.",
			"exits" : {
				"Home" : "hut",
				"Enter" : "savannah"
			}
		},
		
		"savannah" : {
			"name" : "Savannah",
			"description" : "The wind gently blows across the plains and you reach the end of them. You can go no further.",
			"exits" : {
				"Return Home" : "hut"
			}
		},
		
		"deadzone" : {
			"name" : "deadzone",
			"description" : "Hacker. Congratulations, you broke the game."  
		},
		
		"inventory" : {
			"name" : "inventory",
			"description" : "This is where your items are stored."
		},
		
		"death" : {
			"name" : "death",
			"description" : "GAME OVER. Refresh to restart."
		},
		
		"win" : {
			"name" : "win",
			"description" : "As your sword is pulled from the lifeless body of the Varaac leader, you feel a calmness wash over you. You stare into his distraught face, it seems to still be in pain even in death. This sight will surely haunt you for the rest of your days. But, it was worth it right? You avenged your father. You reclaimed your family's castle. And you did it all by yourself! You should feel proud! Why don't you?",
			"exits" : {
				"Lead" : "epilogue"
			}
		},
		
		"deathWin" : {
			"name" : "win",
			"description" : "YOU WIN!",
		},
		
		"epilogue" : {
			"name" : "You win!",
			"description" : "As you fit the crown on your head you feel a surge of power. So this is what it's like to be king? You could get used to this. Suddenly, a strange light appears out of the center of the front of the crown. It illuminates the entire throne room. Titles from underneath the blood of the Varaac leader start to glow. 13 of them. One for each of the countries. Is this a fulfilled destiny? You aren't sure, but the light slowly goes around the circle of them. Once they are all illuminated, a gigantic beam explodes out of the room! You are sure that it would be hard to miss from any point on the entire continent! I guess it is time for you, the new Champion of Raedin, to bring forth a new Era.",
			"exits" : {
				"Continue?" : "hut",
				"Finish" : "deathWin"
			}
		}
	
	},
	"game_items" : {
		"kingsword" : {
			"name" : "King's Sword",
			"description" : "It feels cold to the touch and glints brightly in the light. By touching it, you can tell it is sharp and ready for battle, like it always is.",
			"location" : "hallway",
			"stats" : {
				"att" : 10,
				"dmg" : 35,
				"def" : 3
			}
		},
		
		"kingshield" : {
			"name" : "King's Shield",
			"description" : "It's a heavy gold-plated kite shield. It was a gift to you buy the old king's armourer.",
			"location"	: "hallway",
			"stats" : {
				"armor" : 8
			}
		},
		
		"simpledagger" : {
			"name" : "Dagger",
			"description" : "It's a simple dagger that your mother gave you for your birthday.",
			"location"	: "hut",
			"stats" : {
				"att" : 9,
				"dmg" : 7,
				"def" : 1
			}
		},
		
		"sharpdagger" : {
			"name" : "Dagger",
			"description" : "It's a simple dagger that has been sharpened.",
			"location"	: "deadzone",
			"stats" : {
				"att" : 11,
				"dmg" : 15,
				"def" : 3
			}
		},
		
		"dulldagger" : {
			"name" : "Dagger",
			"description" : "It's a simple dagger that has been dulled over use.",
			"location"	: "deadzone",
			"stats" : {
				"att" : 9,
				"dmg" : 4,
				"def" : 3
			}
		},
		
		"dullsword" : {
			"name" : "Sword",
			"description" : "It's a short sword that has been dulled over use.",
			"location"	: "deadzone",
			"stats" : {
				"att" : 19,
				"dmg" : 14,
				"def" : 9
			}
		},
		
		"simplesword" : {
			"name" : "Sword",
			"description" : "It's a basic short sword. That's pretty much it.",
			"location"	: "deadzone",
			"stats" : {
				"att" : 19,
				"dmg" : 21,
				"def" : 5
			}
		},
		
		"sharpsword" : {
			"name" : "Sword",
			"description" : "It's a basic short sword that has been sharpened recently.",
			"location"	: "deadzone",
			"stats" : {
				"att" : 26,
				"dmg" : 21,
				"def" : 5
			}
		},
		
		"baseclothes" : {
			"name" : "Ragged Clothes",
			"description" : "Slightly torn and stained rags. The only clothes you've worn since birth.",
			"location" : "hut",
			"stats" : {
				"armor" : 2
			}
		},
		
		"leatherarmor" : {
			"name" : "Leather Armor",
			"description" : "Tightly strung together pieces of leather made to fit and protect a person's body.",
			"location" : "deadzone",
			"stats" : {
				"armor" : 10
			}
		},
		
		"platearmor" : {
			"name" : "Plate Armor",
			"description" : "Tightly strung together pieces of steel made to fit and protect a person's body.",
			"location" : "deadzone",
			"stats" : {
				"armor" : 15
			}
		},
		
		
		"turtleshell" : {
			"name" : "Turtle Shelld",
			"description" : "A large gleaming turtle shell. You can easily tell remnants of protective magic have been left on it.",
			"location" : "deadzone",
			"stats" : {
				"armor" : 30
			}
		},
		
		//***********************************************************ENEMIES*************************************************************
		"attackers" : {
			"name" : "Unknown Attackers",
			"description" : '\"' + "Prepare to die, foolish king!" + '\"' + " the leader says.",
			"location" : "courtyard",
			"path" : "courtyard",
			"stats" : {
				"maxHp" : 500,
				"hp" : 500,
				"str" : 7,
				"agl" : 9,
				"int" : 11,
				"att" : 9,
				"dmg" : 1,
				"def" : 7,
				"armor" : 20,
				"xp"	: 500,
				"lvl" : 1
			}
		},
		
		"castleguards" : {
			"name" : "Varaac Castle Guards",
			"description" : '\"' + "Welcome home, young prince! What do think you are doing here? Taking back the castle? You make me laugh. You will never be able to overcome the power of the Varaac!" + '\"' + " one of the guards say.",
			"location" : "castleentrance",
			"path" : "castleentrance",
			"stats" : {
				"maxHp" : 150,
				"hp" : 150,
				"str" : 18,
				"agl" : 8,
				"int" : 15,
				"att" : 50,
				"dmg" : 8,
				"def" : 17,
				"armor" : 20,
				"xp"	: 1500,
				"lvl" : 16
			}
		},
		
		"castleguard" : {
			"name" : "Varaac Guard",
			"description" : '\"' + "You??? What are you doing here?" + '\"' + " one of the guards say.",
			"location" : "castlecourtyard",
			"path" : "castlecourtyard",
			"stats" : {
				"maxHp" : 100,
				"hp" : 100,
				"str" : 12,
				"agl" : 17,
				"int" : 18,
				"att" : 14,
				"dmg" : 10,
				"def" : 21,
				"armor" : 10,
				"xp"	: 490,
				"lvl" : 15
			}
		},
		
		"rebelleader" : {
			"name" : "Varaac Leader",
			"description" : '\"' + "I knew this day would come. You came to avenge your father, I assume? Ha. He was weak and so are you. Prepare to fall by my sword just as your father did." + '\"' + " he says.",
			"location" : "throneroom",
			"path" : "throneroom",
			"stats" : {
				"maxHp" : 1000,
				"hp" : 1000,
				"str" : 46,
				"agl" : 67,
				"int" : 48,
				"att" : 14,
				"dmg" : 3,
				"def" : 21,
				"armor" : 30,
				"xp"	: 9000,
				"lvl" : 30
			}
		},
		
		"mercenary" : {
			"name" : "Mercenary",
			"description" : '\"' + "I've been looking for you! Time for you to join your father!" + '\"' + " he says.",
			"location" : "castlegates",
			"path" : [
				"castlegates",
				"deepforest",
				"dunes",
				"peak",
				"bog",
				"savannah",
			],
			"stats" : {
				"maxHp" : 40,
				"hp" : 40,
				"str" : 8,
				"agl" : 1,
				"int" : 1,
				"att" : 2,
				"dmg" : 8,
				"def" : 3,
				"armor" : 5,
				"xp"	: 50,
				"lvl" : 3
			}
		},
		
		"goblin" : {
			"name" : "Goblin",
			"description" : '\"' + "Give me your money!" + '\"' + " it says.",
			"location" : "deadzone",
			"path" : [
				"deepforest",
				"deadzone",
			],
			"stats" : {
				"maxHp" : 20,
				"hp" : 20,
				"str" : 3,
				"agl" : 1,
				"int" : 1,
				"att" : 1,
				"dmg" : 1,
				"def" : 2,
				"armor" : 1,
				"xp"	: 10,
				"lvl" : 1
			}
		},
		
		"snake" : {
			"name" : "Giant Snake",
			"description" : "It hisses at you and shakes it tail. You see its fangs drip with poison and bloodlust.",
			"location" : "deadzone",
			"path" : [
				"deadzone",
				"deepforest",
				"deadzone",
				"deadzone",
				"deadzone",
				"deadzone",
				"deepforest",
				"deadzone",
				"deadzone",
				"bog",
			],
			"stats" : {
				"maxHp" : 25,
				"hp" : 25,
				"str" : 3,
				"agl" : 8,
				"int" : 1,
				"att" : 5,
				"dmg" : 2,
				"def" : 2,
				"armor" : 5,
				"xp"	: 25,
				"lvl" : 2
			}
		},
		
		"bear" : {
			"name" : "Demon Grizzly",
			"description" : "It roars and growls and stands up on both hind legs to intimidate you. You should be careful",
			"location" : "deadzone",
			"path" : [
				"deadzone",
				"deadzone",
				"deadzone",
				"deadzone",
				"deepforest",
				"deadzone",
				"deadzone",
				"deadzone",
				"deadzone",
			],
			"stats" : {
				"maxHp" : 35,
				"hp" : 35,
				"str" : 10,
				"agl" : 4,
				"int" : 3,
				"att" : 11,
				"dmg" : 2,
				"def" : 3,
				"armor" : 5,
				"xp"	: 40,
				"lvl" : 3
			}
		},
		
		"scorpion" : {
			"name" : "Giant Scorpion",
			"description" : "It hisses at you and stabs its tail at you. You quickly dodge it and prepare to fight.",
			"location" : "deadzone",
			"path" : [
				"deadzone",
				"deadzone",
				"dunes",
				"deadzone",
			],
			"stats" : {
				"maxHp" : 60,
				"hp" : 60,
				"str" : 8,
				"agl" : 1,
				"int" : 1,
				"att" : 2,
				"dmg" : 5,
				"def" : 3,
				"armor" : 5,
				"xp"	: 50,
				"lvl" : 3
			}
		},
		
		"sandraider" : {
			"name" : "Sand Raider",
			"description" : '\"' + "You seem lost... Good. Less people will miss you then." + '\"' + " he says.",
			"location" : "deadzone",
			"path" : [
				"deadzone",
				"deadzone",
				"deadzone",
				"deadzone",
				"deadzone",
				"dunes",
			],
			"stats" : {
				"maxHp" : 60,
				"hp" : 60,
				"str" : 5,
				"agl" : 8,
				"int" : 10,
				"att" : 10,
				"dmg" : 4,
				"def" : 3,
				"armor" : 15,
				"xp"	: 70,
				"lvl" : 5
			}
		},
		
		"eagle" : {
			"name" : "Demon Eagle",
			"description" : "The giant eagle flys straight at you!",
			"location" : "mountain",
			"path" : [
				"deadzone",
				"deadzone",
				"deadzone",
				"peak",
				"deadzone",
				"peak",
			],
			"stats" : {
				"maxHp" : 75,
				"hp" : 75,
				"str" : 13,
				"agl" : 20,
				"int" : 4,
				"att" : 12,
				"dmg" : 6,
				"def" : 3,
				"armor" : 5,
				"xp"	: 80,
				"lvl" : 7
			}
		},
		
		"harpy" : {
			"name" : "Harpy",
			"description" : '\"' + "Come fly with me! It'll be fun! I promise! It's just the fall that you might not like... Oh well. I'm going to take you anyway!" + '\"' + " he says.",
			"location" : "mountain",
			"path" : [
				"deadzone",
				"peak",
				"deadzone",
				"peak",
				"deadzone",
				"deadzone",
			],
			"stats" : {
				"maxHp" : 80,
				"hp" : 80,
				"str" : 8,
				"agl" : 28,
				"int" : 20,
				"att" : 12,
				"dmg" : 4,
				"def" : 5,
				"armor" : 10,
				"xp"	: 85,
				"lvl" : 8
			}
		},
		
		"terrorbird" : {
			"name" : "Terror Bird",
			"description" : "KAWWWWWW",
			"location" : "peak",
			"path" : [
				"mountain",
				"deepforest",
				"deadzone",
				"peak",
				"deadzone",
				"deadzone",
			],
			"stats" : {
				"maxHp" : 100,
				"hp" : 100,
				"str" : 8,
				"agl" : 1,
				"int" : 1,
				"att" : 2,
				"dmg" : 5,
				"def" : 3,
				"armor" : 5,
				"xp"	: 50,
				"lvl" : 5
			}
		},
		
		"magmacreature" : {
			"name" : "Magma Creature",
			"description" : '\"' + "Glub glub glub glub" + '\"' + " it says.",
			"location" : "deadzone",
			"path" : [
				"deadzone",
				"peak",
				"deadzone",
				"peak",
				"deadzone",
				"deadzone",
				"deadzone",
			],
			"stats" : {
				"maxHp" : 350,
				"hp" : 350,
				"str" : 8,
				"agl" : 1,
				"int" : 10,
				"att" : 22,
				"dmg" : 20,
				"def" : 3,
				"armor" : 5,
				"xp"	: 250,
				"lvl" : 12
			}
		},
		
		"spider" : {
			"name" : "Giant Spider",
			"description" : "The spider dashes forwards for you and you almost get caught in the webbing behind you. This is a smart spider...",
			"location" : "bog",
			"path" : [
				"deadzone",
				"deadzone",
				"bog",
				"deadzone",
			],
			"stats" : {
				"maxHp" : 110,
				"hp" : 110,
				"str" : 18,
				"agl" : 26,
				"int" : 2,
				"att" : 20,
				"dmg" : 13,
				"def" : 7,
				"armor" : 25,
				"xp"	: 390,
				"lvl" : 14
			}
		},
		
		"frog" : {
			"name" : "Demon Frog",
			"description" : "Its one of the biggest frogs you've ever seen! Its eyes glow a strange color too... Something is off about this frog.",
			"location" : "deadzone",
			"path" : [
				"deadzone",
				"deadzone",
				"deadzone",
				"bog",
			],
			"stats" : {
				"maxHp" : 200,
				"hp" : 200,
				"str" : 10,
				"agl" : 1,
				"int" : 12,
				"att" : 6,
				"dmg" : 38,
				"def" : 21,
				"armor" : 35,
				"xp"	: 510,
				"lvl" : 15
			}
		},
		
		"swarm" : {
			"name" : "Insect Swarm",
			"description" : "What seems like hundreds of insects swarm you from all directions.",
			"location" : "bog",
			"path" : [
				"deadzone",
				"bog",
				"deadzone",
				"deadzone",
				"bog",
				"deadzone",
			],
			"stats" : {
				"maxHp" : 180,
				"hp" : 180,
				"str" : 1,
				"agl" : 36,
				"int" : 1,
				"att" : 60,
				"dmg" : 1,
				"def" : 3,
				"armor" : 5,
				"xp"	: 150,
				"lvl" : 17
			}
		},
		
		"lion" : {
			"name" : "Demon Lion",
			"description" : "This is no normal lion. Its mane seems like its glowing along with its eyes. You can feel the power emanating from it. It's very strong.",
			"location" : "savannah",
			"path" : [
				"savannah",
				"deadzone",
				"deadzone",
			],
			"stats" : {
				"maxHp" : 290,
				"hp" : 290,
				"str" : 31,
				"agl" : 25,
				"int" : 12,
				"att" : 22,
				"dmg" : 8,
				"def" : 26,
				"armor" : 15,
				"xp"	: 880,
				"lvl" : 19
			}
		},
		
		"gnoll" : {
			"name" : "Armored Gnoll",
			"description" : '\"' + "You are trespassing on our land!" + '\"' + " it says.",
			"location" : "plains",
			"path" : [
				"deadzone",
				"plains",
			],
			"stats" : {
				"maxHp" : 420,
				"hp" : 420,
				"str" : 34,
				"agl" : 26,
				"int" : 42,
				"att" : 23,
				"dmg" : 3,
				"def" : 23,
				"armor" : 15,
				"xp"	: 1070,
				"lvl" : 20
			}
		},
		
		"gnollcommander" : {
			"name" : "Gnoll Commander",
			"description" : '\"' + "You have come to the wrong place, trespasser. I will have to kill you." + '\"' + " he says.",
			"location" : "plains",
			"path" : [
				"deadzone",
				"deadzone",
				"deadzone",
				"deadzone",
				"savannah",
			],
			"stats" : {
				"maxHp" : 300,
				"hp" : 300,
				"str" : 40,
				"agl" : 31,
				"int" : 32,
				"att" : 29,
				"dmg" : 8,
				"def" : 23,
				"armor" : 50,
				"xp"	: 2480,
				"lvl" : 23
			}
		},
		
		"gnollchampion" : {
			"name" : "Gnoll Champion",
			"description" : '\"' + "I've battled with the best of the gnolls. What makes you think you even stand a chance?" + '\"' + " it says.",
			"location" : "plains",
			"path" : [
				"deadzone",
				"savannah",
			],
			"stats" : {
				"maxHp" : 300,
				"hp" : 300,
				"str" : 30,
				"agl" : 41,
				"int" : 32,
				"att" : 12,
				"dmg" : 11,
				"def" : 33,
				"armor" : 35,
				"xp"	: 4000
			}
		}
	},
	
	"combat_descriptions" : {
		"player_attacks" : {
			"success" : [
				"Your attack with your |*weapon| crashed into the |*target| and did |*damage| damage.",
				"Your |*weapon| slices into the |*target| for |*damage| damage.",
				"|*target| was hit by your |*weapon| for |*damage| damage.",
				"|*target| took |*damage| damage.",
				"You hit the |*target| for |*damage| damage.",
				"|*target| was hurt by your |*weapon| for |*damage| damage.",
				"Your |*weapon| slams into the |*target| for |*damage| damage."
			],
			
			"failure" : [
				"|*target| dodged your |*weapon|.",
				"You missed.",
				"You attack with your |*weapon| but |*target| dodges it.",
				"Your |*weapon| barely misses the |*target|.",
				"Your |*weapon| grazes the |*target| and doesn't do any damage."
			]
		},
		"enemy_attacks" : {
			"success" : [
				"You were attacked by |*attacker| for |*damage| damage.",
				"You took |*damage| damage from the |*attacker|.",
				"|*attacker| hit you for |*damage| damage.",
				"|*attacker| slashed into you for |*damage| damage.",
				"You were hurt by the |*attacker| for |*damage| damage."
			],
			
			"failure" : [
				"You dodged the attack.",
				"|*attacker| missed.",
				"|*attacker| tried to hit you but you got out of the way.",
				"You nimbly dodged the attack.",
				"|*attacker| lunges at you but misses.",
				"|*attacker| could not get passed your armour!",
				"|*attacker| was not fast enough to hit you."
			]
		}
	}
};	