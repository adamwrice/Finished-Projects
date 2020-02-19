function GameController() {
    var self = this;
    var game_data;  // ALL the game data, including all the sub objects like map, items, etc.
	var playerName = "NaN";
	var playerGender = "it";
	var tickCount = 0;
	var maxHp = 100;
	var foundInfo = false;

    this.run = function() {
        game_data = self.load_new_game();
        self.begin_game();
    }

    this.load_new_game = function() {
        // basically, this makes a copy of the "new game" data and returns it for use
        return JSON.parse(JSON.stringify(data));
    }

    this.begin_game = function() {
		document.getElementById("player").style.visibility = "hidden";
        state = game_data.state;  // state now holds the game variables
        view = new GameView();
        map = new GameMap(game_data.game_map);
        items = new GameItems(room, game_data.game_items);
		combat = new Combat(game_data.combat_descriptions);
		//console.log(Object.keys(game_data.game_items).length);
        // etc
        view.enter_room();
		view.add_paragraph("This game was created as part of a Senior Capstone Project by Adam Rice with the help of Dave Corboy, Samantha Tate, and feedback from the students of the Center for Information Technology at Deep Run High School.", room);
		view.add_paragraph("Art by:  Adam Rice.", room);
		view.add_paragraph("Special Thanks To: Lynne Norris, Christopher Neville for being my Advisor through this process, and Dave Corboy for mentoring me and giving everything I need to complete this game.", room);
		view.add_paragraph("If you have any questions, comments, or useful feedback you can contact me using my email: adamwrice8@gmail.com.", room);
	}
	
	this.null = function(){
	}

    // Below here are the functions that are called by user action through onclick events

    // move
    // Used to move to different rooms
    // Game logic can be added here to decide if the move should actually happen or not
    // (e.g., the exit is blocked, needs unlocking, whatever)
    this.move = function(to_room, from_room) {
		if (to_room == "kingbedroom"){
			if (from_room == "prologue4"){
			game.setPlayerGender(document.getElementById("genderSelect").value);
			game.setPlayerName(document.getElementById("inputName").value);
				if (playerGender == "choose"){
				}
				else if (playerGender == "it"){
				}
				else if (playerName == "NAME"){
				}
				else if (playerName == "NaN"){
				}
				else {
					var old_name = document.getElementById("playerStats").rows[0].cells;
					old_name[1].innerHTML = playerName;
					var old_gender = document.getElementById("playerStats").rows[1].cells;
					old_gender[1].innerHTML = playerGender;
					state.current_room = to_room;
					view.enter_room();
					view.clear_node(buttons);
						if (playerGender == "Male"){
						view.add_paragraph("Your beautiful baby boy lies in her arms.", room);
						view.add_paragraph('\"' + playerName + " looks a lot like you. He will be a strong young man one day. Just like his father." + '\"' +  " she says.", room);
						}
						else {
							view.add_paragraph("Your beautiful baby girl lies in her arms.", room);
							view.add_paragraph('\"' + playerName + " is such a pretty name. She even has your eyes! She will be a strong young woman one day." + '\"' +  " she says.", room);
						}
				}
			}
		}
		else if (to_room == "prologue4"){
			state.current_room = to_room;
			view.enter_room();
			view.clear_node(buttons);
			var name = document.createElement("INPUT");
			name.setAttribute("id", "inputName");
			name.setAttribute("type","text");
			name.setAttribute("value", "NAME");
			room.appendChild(name);
			var gender = document.createElement("SELECT");
			gender.setAttribute("id","genderSelect");
			room.appendChild(gender);
			
			//Choose option
				var choose = document.createElement("option");
				choose.setAttribute("value", "choose");
				var chose = document.createTextNode("Choose");
				choose.appendChild(chose);
			//Male option
				var genderMale = document.createElement("option");
				genderMale.setAttribute("value", "Male");
				var male = document.createTextNode("Male");
				genderMale.appendChild(male);
			//Female option
				var genderFemale = document.createElement("option");
				genderFemale.setAttribute("value", "Female");
				var female = document.createTextNode("Female");
				genderFemale.appendChild(female);
			
			document.getElementById("genderSelect").appendChild(choose);			
			document.getElementById("genderSelect").appendChild(genderMale);
			document.getElementById("genderSelect").appendChild(genderFemale);
			//playerGender = (document.getElementById("genderSelect").value);			
		}
		else if (to_room == "courtyard" && player_has("kingsword") == false && player_has("kingshield") == false){
			view.add_paragraph("You can tell that moving there would be dangerous. Perhaps you should find a weapon first?", room);
		}
		else if (to_room == "courtyard" && player_has("kingshield") == true && player_has("kingsword") == false){
			view.add_paragraph("You can tell that moving there would be dangerous. A shield may not be enough to defend yourself. You are sure that your sword should be around here somewhere...", room);
		}
		else if (to_room == "kingsdeath"){
			view.clear_node(inventoryWrapper);
			if (item_in_room("kingshield", "inventory")){
				game.change_stats("armor", -8);
			}
			add_to_room("kingsword", "deadzone");
			add_to_room("kingshield", "deadzone");
			state.current_room = to_room;
			view.clear_node(buttons);
			view.enter_room();
		}
		else if (to_room == "prologueend"){
			document.getElementById("player").style.visibility = "visible";
			self.reset_health("player");
			state.current_room = to_room;
			view.enter_room();
			view.clear_node(buttons);
			view.add_paragraph('\"' + playerName + ',\"' + " she says. " + '\"' + "There is something you need to know..." + '\"', room);
			view.add_paragraph("She tells you all about who you are and where you came from. You can't believe that people so poor could be royalty. She tells you about the night you were born and how your father was killed by the attackers. She also tells you that it is time for you to begin your own journey and gives you your birthday present. It is a simple dagger that she bought with the money she made from selling the meal you and her were going to eat last night. She tells you to get dressed and to be safe.", room);
			add_to_inventory("simpledagger");
			view.update_inventory_items();
		}
		else if (to_room == "hut" && foundInfo == true){
			state.current_room = to_room;
			view.enter_room();
			view.clear_node(buttons);
			view.add_paragraph("You ask your mom about the bounty.", room);
			view.add_paragraph('\"' + "Varaac? How did you find out about them???" + '\"' + " she says. " + '\"' + "The Varaac are the ones who stormed the castle when you were born. They must still be up in the castle. Please never go there. It's far too dangerous." + '\"', room);
		}
		else if (to_room == "win"){
			state.current_room = to_room;
			view.enter_room();
			view.add_paragraph("You look away in shame and look around the room. You see a door covered in cobwebs and rust and mouldy wood. What is this room? You easily break off the rusted lock and elect to open it. To your horror, the remains of your father lie in the corner of the room. His sword and shield lie by his side, along with a note. You pick it up.", room);
			if (playerGender == "Male"){
			view.add_paragraph('\"' + "Dear " + playerName + ", As I lay here dying, I can only think of you and your mother. Although you may never see this, I want you to know that I love you both with all my heart. If you are reading this, then you must have regained control of the kingdom. I am so proud of you, my boy. You really must be a lot like me. Your mother was right. I just wish I could have been there to watch you grow up. But alas, I cannot. Take my crown. You are the new King of Raedin! I trust you to treat everyone with love and respect and to lead this country in a peaceful and wealthy era. Good luck, " + playerName + ". You have a long life ahead of you. Don't forget to have fun and don't be afraid to stand up for yourself.", room);
			}
			else {
			view.add_paragraph('\"' + "Dear" + playerName + ", As I lay here dying, I can only think of you and your mother. Although you may never see this, I want you to know that I love you both with all my heart. If you are reading this, then you must have regained control of the kingdom. I am so proud of you, my little princess. You really must be a lot like me. Your mother was right. I just wish I could have been there to watch you grow up. But alas, I cannot. Take my crown. You are the new Queen of Raedin! I trust you to treat everyone with love and respect and to lead this country in a peaceful and wealthy era. Good luck, " + playerName + ". You have a long life ahead of you. Don't forget to have fun and don't be afraid to stand up for yourself.", room);
			}
			view.add_paragraph("Love, your father,", room);
			view.add_paragraph("King Thorin" + '\"', room);
			view.add_paragraph("With tears in your eyes you gently lift his crown from his head and take his weapons. With one last look, you leave the rotting room. It's time to lead your country.", room);
			add_to_inventory("kingsword");
			add_to_inventory("kingshield");
		}
		else {
			state.current_room = to_room;
			view.enter_room();
			view.clear_node(buttons);
		}
    }
	
	this.room_items = function(item){
		view.display_room_text(items.get_items_description(item));
		if (isEnemy(item)){
			view.enter_combat(item);
			view.update_item_actions(item);
		}
		else {
			view.update_item_actions(item);
		}
	}
	
	this.pick_up = function(item){
		if (items.get_inventory_size() > 2){
			view.add_paragraph("Your inventory is full!", room);
		}
		else {
			add_to_inventory(item);
			if (isArmor(item)){
				add_item_stats(item, "player");
			}
			view.clear_node(navigator);
			view.update_navigator();
			view.update_items();
			view.update_room_description();
			view.clear_node(inventoryWrapper);
			view.update_inventory_items();
			view.clear_node(buttons);
		}
	}
	
	this.drop = function(item){
		if (state.current_room == "prologueend"){
		}
		else {
			add_to_room(item, state.current_room);
			if (isArmor(item)){
				delete_item_stats(item, "player");
			}
			view.update_room_description();
			view.clear_node(inventoryWrapper);
			view.clear_node(navigator);
			view.update_navigator();
			view.update_items();
			view.update_inventory_items();
			view.clear_node(buttons);
		}
	}
	
	/*this.swing = function(item, target){
		console.log("You swung the " + item);
		killEnemy("attackers");
		view.update_items();
		view.update_navigator();
		view.add_paragraph("You killed the " + get_item_name(target) + ".", room);
	}*/
	
	this.setPlayerGender = function(gender){
		var inputgender = gender;
		playerGender = inputgender;
	}
	
	this.setPlayerName = function(name){
		playerName = name;
	}
	
	this.tick = function(){ //This function controls random events
		tickCount++;
		//console.log(tickCount);
		if (tickCount%10==0){
			add_to_room("magmacreature", (getItemPath("magmacreature")[tickCount%5]));
			add_to_room("gnollcommander", (getItemPath("gnollcommander")[tickCount%6]));
			add_to_room("gnollchampion", (getItemPath("gnollchampion")[tickCount%3]));
		}
		add_to_room("mercenary", (getItemPath("mercenary")[tickCount%5]));
		add_to_room("snake", (getItemPath("snake")[tickCount%11]));
		add_to_room("goblin", (getItemPath("goblin")[tickCount%2]));
		add_to_room("bear", (getItemPath("bear")[tickCount%10]));
		add_to_room("scorpion", (getItemPath("scorpion")[tickCount%5]));
		add_to_room("sandraider", (getItemPath("sandraider")[tickCount%7]));
		add_to_room("eagle", (getItemPath("eagle")[tickCount%7]));
		add_to_room("harpy", (getItemPath("harpy")[tickCount%7]));
		add_to_room("spider", (getItemPath("spider")[tickCount%5]));
		add_to_room("frog", (getItemPath("frog")[tickCount%5]));
		add_to_room("swarm", (getItemPath("swarm")[tickCount%7]));
		add_to_room("lion", (getItemPath("lion")[tickCount%4]));
		add_to_room("gnoll", (getItemPath("gnoll")[tickCount%3]));
		if (tickCount%45 == 0){
		add_to_room("terrorbird", (getItemPath("terrorbird")[tickCount%7]));
		}
		if (item_in_room("simpledagger", "inventory")) {
		}
		else{
		add_to_room("simpledagger", "deadzone");
		}
		if ((item_in_room("baseclothes", "inventory")) || (item_in_room("baseclothes", "hut"))) {
		}
		else{
		add_to_room("baseclothes", "deadzone");
		}
		if (tickCount%15 == 0 && (item_in_room("dullsword", "inventory")==false)){
		add_to_room("dullsword", "dunes");
		}
		else if (item_in_room("dullsword", "inventory")) {
		}
		else{
		add_to_room("dullsword", "deadzone");
		}
		if (tickCount%20 == 0 && (item_in_room("leatherarmor", "inventory")==false)){
		add_to_room("leatherarmor", "deepforest");
		}
		else if (item_in_room("leatherarmor", "inventory")){
		}
		else {
		add_to_room("leatherarmor", "deadzone");
		}
		if (tickCount%36 == 0 && (item_in_room("platearmor", "inventory")==false)){
		add_to_room("platearmor", "peak");
		}
		else if (item_in_room("platearmor", "inventory")){
		}
		else {
		add_to_room("platearmor", "deadzone");
		}
		if (tickCount%50 == 0 && (item_in_room("turtleshell", "inventory")==false)){
		add_to_room("turtleshell", "bog");
		}
		else if (item_in_room("turtleshell", "inventory")){
		}
		else {
		add_to_room("turtleshell", "deadzone");
		}
		if (tickCount%30 == 0 && (item_in_room("simplesword", "inventory")==false)){
		add_to_room("simplesword", "peak");
		}
		else if (item_in_room("simplesword", "inventory")){
		}
		else {
		add_to_room("simplesword", "deadzone");
		}
		if (tickCount%38 == 0 && (item_in_room("sharpsword", "inventory")==false)){
		add_to_room("sharpsword", "bog");
		}
		else if (item_in_room("sharpsword", "inventory")){
		}
		else {
		add_to_room("sharpsword", "deadzone");
		}
		if ((tickCount%(Math.floor((Math.random()*250)) == 0)) && (item_in_room("sharpdagger", "inventory")==false)){
		add_to_room("sharpdagger", "forest");
		}
		if (state.stats.hp < maxHp){
			if ((maxHp - state.stats.hp)< 5 ){
				self.change_stats("hp", (maxHp - state.stats.hp));
			}
			else {
				self.change_stats("hp", 5);
			}
		}
	}
	
	this.change_stats = function(stat, amount){ //This should be the only function to modify the player stats
		state.stats[stat] += amount;
		view.clear_node(buttons);
		view.update_stats();
	}
	
	this.reset_health = function(character){ //This is used to put health back at the MaxHp
		if (character == "player"){
			if (state.current_room == "hut"){
				view.add_paragraph("You rest for a couple of hours and regain your health.", room);
			}
			self.change_stats("hp", maxHp-state.stats.hp);
			view.update_stats();
			view.update_navigator();
			view.update_items();
			self.tick();
		}
		else {
			reset_enemy_health(character);
		}
	}
	
	this.level_up = function(){ //Used to increased stats at certain xp values
		view.clear_node(navigator);
		view.clear_node(buttons);
		maxHp += 10;
		self.change_stats("hp", 10);
		self.change_stats("att", 10);
		self.change_stats("dmg", 5);
		self.change_stats("def", 3);
		self.change_stats("xp", 0-state.stats.lvl*100);
		self.change_stats("lvl", 1);
		if (state.stats.str < 100){
			var str = "STR"
			var strincrease = "game.change_stats(" + '\"str\"' + ", 5)";
			var strbutton = view.make_action_button(str, strincrease, "level-button");
			buttons.appendChild(strbutton);
		}
		if (state.stats.agl < 100){
			var agl = "AGL"
			var aglincrease = "game.change_stats(" + '\"agl\"' + ", 5)";
			var aglbutton = view.make_action_button(agl, aglincrease, "level-button");
			buttons.appendChild(aglbutton);
		}
		if (state.stats.int < 100){
			var intel = "INT"
			var intelincrease = "game.change_stats(" + '\"int\"' + ", 10)";
			var intelbutton = view.make_action_button(intel, intelincrease, "level-button");
			buttons.appendChild(intelbutton);	
		}
		view.update_navigator();
		view.update_items();
		view.update_stats();
	}
	
	this.set_foundInfo = function(value){
		foundInfo = value;
	}
	
}
// Starts up the game controller object
function GameView() {
    var self = this;
    var room_output = document.getElementById("room");
    var story_output = document.getElementById("story");
    var navigator = document.getElementById("navigatorScreen");
	var item_actions = document.getElementById("buttons");
	var inventory_items = document.getElementById("inventoryWrapper");
	var inCombat = false;

    this.enter_room = function() {
        self.update_room_description();
        self.update_navigator();
		game.tick();
		self.update_items();
		self.update_stats();
		if (state.current_room == "hut" && state.stats.hp < (100+(10*state.stats.lvl)-10)){
			var label = "Rest";
			var action = 'game.reset_health("player");';
			var button = self.make_action_button(label, action, "rest-button");
			navigator.appendChild(button);
		}
    }
	
	this.enter_combat = function(enemy){
		state.current_enemy = enemy;
		inCombat = true;
		self.update_room_description();
		self.clear_node(navigator);
		self.update_inventory_items();
		self.add_paragraph("You are fighting a " + get_item_name(state.current_enemy) + ".", room_output);
		self.add_paragraph(items.get_items_description(state.current_enemy), room);
		if (state.stats.int > 25){
			var enemyStats = get_combatant_stats(state.current_enemy);
			if ((state.stats.lvl - enemyStats.lvl) < -10){
				self.add_paragraph("Your intelligence tells you that this enemy will be almost impossible to beat.", room);
			}
			else if ((state.stats.lvl - enemyStats.lvl) < -5){
				self.add_paragraph("Your intelligence tells you that this enemy will be really hard to beat.", room);
			}
			else if ((state.stats.lvl - enemyStats.lvl) < -3){
				self.add_paragraph("Your intelligence tells you that this enemy will be difficult to beat.", room);
			}
			else if ((state.stats.lvl - enemyStats.lvl) > -1 && (state.stats.lvl - enemyStats.lvl) < 2){
				self.add_paragraph("Your intelligence tells you that this enemy will be not be much of a challenge to beat.", room);
			}
			else {
				self.add_paragraph("Your intelligence tells you that this enemy will be easy to beat.", room);
			}
		}
	}
	
	this.exit_combat = function(enemy){
		inCombat = false;
		//self.update_room_description();
		self.update_navigator();
		self.update_items();
		self.update_inventory_items();
		self.update_stats();
		state.current_enemy = "null";
		if (state.stats.xp >= state.stats.lvl*100){
			self.clear_node(navigator);
			self.clear_node(buttons);
			var label = "Level Up!";
			var action = "game.level_up();";
			var button = self.make_action_button(label, action, "level-button");
			buttons.appendChild(button);
		}
	}
	
	this.update_stats = function(){
		var old_lvl = document.getElementById("playerStats").rows[2].cells;
		old_lvl[1].innerHTML = state.stats.lvl;
		var old_hp = document.getElementById("playerStats").rows[3].cells;
		old_hp[2].innerHTML = state.stats.hp;
		var old_str = document.getElementById("playerStats").rows[4].cells;
		old_str[2].innerHTML = state.stats.str;
		var old_agl = document.getElementById("playerStats").rows[5].cells;
		old_agl[2].innerHTML = state.stats.agl;
		var old_int = document.getElementById("playerStats").rows[6].cells;
		old_int[2].innerHTML = state.stats.int;
		var old_att = document.getElementById("playerStats").rows[7].cells;
		old_att[2].innerHTML = state.stats.att;
		var old_dmg = document.getElementById("playerStats").rows[8].cells;
		old_dmg[2].innerHTML = state.stats.dmg;
		var old_def = document.getElementById("playerStats").rows[9].cells;
		old_def[2].innerHTML = state.stats.def;
		var old_armor = document.getElementById("playerStats").rows[10].cells;
		old_armor[2].innerHTML = state.stats.armor;
		var old_xp = document.getElementById("playerStats").rows[11].cells;
		old_xp[2].innerHTML = state.stats.xp;
		var player_stats = document.getElementById("playerStats");
		self.draw_stat_graph(player_stats.rows[3], state.stats.hp, (90 + (10*state.stats.lvl)));
		self.draw_stat_graph(player_stats.rows[4], state.stats.str, 100);
		self.draw_stat_graph(player_stats.rows[5], state.stats.agl, 100);
		self.draw_stat_graph(player_stats.rows[6], state.stats.int, 100);
		self.draw_stat_graph(player_stats.rows[7], state.stats.att, 500);
		self.draw_stat_graph(player_stats.rows[8], state.stats.dmg, 250);
		self.draw_stat_graph(player_stats.rows[9], state.stats.def, 200);
		self.draw_stat_graph(player_stats.rows[10], state.stats.armor, 50);
		self.draw_stat_graph(player_stats.rows[11], state.stats.xp, 100 * state.stats.lvl);
	}
	
	this.draw_stat_graph = function(row, value, max) {
		var graph_cell = row.cells[1];
		graph_cell.firstChild.style.width = (value / max * 100) + '%';
	}

    this.update_room_description = function() {
        self.clear_node(room_output);
        self.display_room_text(map.get_room_description(state.current_room));
		if (item_in_room("kingsword", state.current_room)){
			view.add_paragraph("A sword you recognize only as your own lies on the ground near you.", room_output);
		}
		if (item_in_room("kingshield", state.current_room)){
			view.add_paragraph("A heavy looking, gold-plated shield lies on the groud near you.", room_output);
		}
		if (item_in_room("simpledagger", state.current_room)){
			view.add_paragraph("A simple dagger that you got for your birthday sits neatly on the floor.", room_output);
		}
		if (item_in_room("baseclothes", state.current_room)){
			view.add_paragraph("Your clothes lie in a pile on the floor.", room_output);
		}
    }

    this.update_navigator = function() {
        self.clear_node(navigator);
        var exits = map.get_room_exits(state.current_room);
		if (enemyInRoom(state.current_room) && state.current_room != "courtyard"){
			view.add_paragraph("You will have to fight your way out of here to move on.", room_output);
		}
		else  if (enemyInRoom(state.current_room) && state.current_room == "courtyard"){
		}
        else if (exits) {
            var keys = Object.keys(exits);
            var length = keys.length;
            for (var i = 0; i < length; i++) {
                var label = keys[i];  // this is the first value in the datafile, the key
                var room = exits[label];  // this the the value for that key, the room destination
				var action = "game.move('" + room + "', '" + state.current_room + "');";  // this will be the onclick
				var button = self.make_action_button(label, action, "exit-button");
				navigator.appendChild(button);
            }
        }
    }
	
	this.update_items = function() {
		//self.clear_node(navigator);
		if (inCombat){
		}
		else {
			var room_items = items.get_room_items(state.current_room);
			if (room_items) {
					var length = Object.keys(room_items).length;
					var keys = Object.keys(room_items);
				if (length == 0) {
					view.clear_node(navigator);
					view.update_navigator();
				}
				for (var i = 0; i < length; i++){
					var label = room_items[keys[i]].name;
					var item = keys[i];
					var action = "game.room_items('" + item + "');";
					//console.log(item.player_has(item));
					if (isEnemy(item)){
						var button = self.make_action_button(label, action, "enemy-button");
					}
					else{
						var button = self.make_action_button(label, action, "item-button");
					}
					navigator.appendChild(button);
				}
			}
		}
	}
	
	this.update_inventory_items = function() {
		view.clear_node(inventoryWrapper);
		//self.clear_node(navigator);
		var inventory_items = items.get_room_items("inventory");
		//console.log(room_items);
		if (inventory_items) {
				var length = Object.keys(inventory_items).length;
				var keys = Object.keys(inventory_items);
			if (length == 0){
				view.clear_node(inventoryWrapper);
				view.add_paragraph("Inventory", inventoryWrapper);
			}
			for (var i = 0; i < length; i++){
				var label = inventory_items[keys[i]].name;
				var item = keys[i];
				var action;
				if (inCombat) {
					action = "game.null();";
				}
				else {
					action = "game.room_items('" + item + "');";
				}
				var button = self.make_action_button(label, action, (inCombat == false) ? "item-button":"disabled");
				inventoryWrapper.appendChild(button);
			}
			if (inCombat){
				update_combat_actions();
			}
		}
	}
	
	update_combat_actions = function() {
		var inventory_items = items.get_room_items("inventory");
		var numberOfItems = Object.keys(inventory_items).length;
		var keys = Object.keys(inventory_items);
		var combat_actions = [];
		var runAction = "combat.run()";
		var runButton = self.make_action_button("Run!", runAction, "exit-button");
		navigator.appendChild(runButton);
		for (var i = 0; i < numberOfItems; i++){
			combat_actions.push(get_item_actions(keys[i], true));
				if (combat_actions) {
					var length = combat_actions[i].length;
					for (var j = 0; j < length; j++){
						var label = combat_actions[i][j].name + '\n' + get_item_name(keys[i]);
						var action = combat_actions[i][j].method + "('" + "player" + "', '" + state.current_enemy + "', '" + keys[i] + "');";
						var button = self.make_action_button(label, action, "enemy-button");
						navigator.appendChild(button);
					}
				}
		}
		combat_actions = [];
	}
	
	this.update_item_actions = function(item){
		var combatOnly;
		if (inCombat == true){
			combatOnly = true;
		}
		else {
			combatOnly = false;
		}
		var item_actions = get_item_actions(item, combatOnly);
		var target = items.get_room_items(state.current_room);
		view.clear_node(buttons);
		//console.log(item_actions);
		if (item_actions && !combatOnly) {
				var length = item_actions.length;
			for (var i = 0; i < length; i++){
				var label = item_actions[i].name;
				var action = "game." + item_actions[i].method + "('" + item + "');";
				var button = self.make_action_button(label, action, "item-button");
				buttons.appendChild(button);
			}
		}
	}
	
	scroll_top = function (view){
		view.scrollTop = view.scrollHeight;
	}

    this.make_action_button = function(label, click_action, class_name) {
        var button = document.createElement("SPAN");  // the button itself
        button.className = class_name;
        button.setAttribute("onclick", click_action);
        self.add_text_node(label, button); // the linked word that appears on the page
        return button;
    }

    this.display_story_text = function(text) {  // a general output function for story output
        self.display_text(text, story_output);
    }

    this.display_room_text = function(text) {  // a general output function for room output
        self.display_text(text, room_output);
    }

    this.display_text = function(text, view) {  // a general output function for any game output
        self.add_paragraph(text, view);
    }

    // HTML stuff
    this.clear_node = function(el) {
        while(el.firstChild) el.removeChild(el.firstChild);
    }

    this.add_paragraph = function(text, el) {
        var par = document.createElement("P");
        self.add_text_node(text, par);
        el.appendChild(par);
    }

    this.add_text_node = function(text, el) {
        var node = document.createTextNode(text);
        el.appendChild(node);
    }
}


function GameMap(game_map) {
    var map = game_map;

    this.get_room_description = function(room) {
        return map[room].description;
    }

    this.get_room_exits = function(room) {
        return map[room].exits;
    }
	
}

function GameItems(room, game_items) {
	var self = this;
	var items = game_items;

	this.get_items_description = function(item) {
		//console.log(item);
		return items[item].description;
	}
	
	get_item_name = function(item){
		return items[item].name;
	}
	
	add_to_inventory = function(item){
		add_to_room(item, "inventory");
	}
	
	add_to_room = function(item, room){
		items[item].location = room;
	}
	
	this.get_room_items = function(room) {
		var room_items = {};
		var keys = Object.keys(items);
		//console.log(keys);
		var length = Object.keys(items).length;
		//console.log(Object.keys(items).length);
		
		for (var i = 0; i < length; i++){
			var this_item = items[keys[i]];
			if (this_item.location == room){
				var item_key = keys[i];
				room_items[item_key] = items[item_key];				
			}
		}
		return room_items;
	}
	
	this.get_inventory_size = function(){
		var inventory_items = {};
		var keys = Object.keys(items);
		var length = Object.keys(items).length;
		var size = 0;
		for (var i = 0; i < length; i++){
			var this_item = items[keys[i]];
			if (this_item.location == "inventory"){
				size++;
			}
		}
		return size;
	}
	
	item_in_room = function(item, room) {
		if (items[item].location == room){
			return true;
		}
		else {
			return false;
		}
	}
	
	get_enemy_in_room = function(room){
		var itemsInRoom = self.get_room_items(room);
		var keys = Object.keys(itemsInRoom);
		var length = Object.keys(itemsInRoom).length;
			for (var i = 0; i < length; i++){
				if (isEnemy(keys[i])){
					return keys[i];//itemsInRoom[i];
				}
			}
	}
	
	get_item_actions = function(item, combatOnly){
		var actions = [];
		if (combatOnly == false){
			if (player_has(item)){
				actions.push({"name" : "Drop", "method" : "drop"});
			}
			else if (cant_pickup(item)) {
			}
			else if (player_has(item) == false){
				actions.push({"name" : "Pick Up", "method" : "pick_up"});
			}
		}
		else {
			if (isWeapon(item)){
				actions.push({"name" : "Swing", "method" : "attack"});
			}
			else {
			}
		}
		return actions;
	}
	
	cant_pickup = function(item){
		if (isEnemy(item)){
			return true;
		}
		else {
			return false;
		}
	}
	
	player_has = function(item){
		var res;
		if (item_in_room(item, "inventory")){
			res = true;
		}
		else {
			res = false;
		}
		return res;
	}
	
	isEnemy = function(item){
		if (items[item].stats.xp){
			return true;
		}
		/*
		if (item == "attackers"){
			return true;
		}
		else if (item =="mercenary"){
			return true;
		}
		else if (item == "castleguards"){
			return true;
		}
		else if (item == "castleguard"){
			return true;
		}
		else if (item == "rebelleader"){
			return true;
		}
		else if (item == "goblin"){
			return true;
		}
		else if (item == "snake"){
			return true;
		}
		else if (item == "bear"){
			return true;
		}
		else if (item == "scorpion"){
			return true;
		}
		else if (item == "sandraider"){
			return true;
		}
		else if (item == "eagle"){
			return true;
		}
		else if (item == "harpy"){
			return true;
		}
		else if (item == "terrorbird"){
			return true;
		}
		else if (item == "magmacreature"){
			return true;
		}
		else if (item == "spider"){
			return true;
		}
		else if (item == "frog"){
			return true;
		}
		else if (item == "swarm"){
			return true;
		}
		else if (item == "lion"){
			return true;
		}
		else if (item == "gnoll"){
			return true;
		}
		else if (item == "gnollcommander"){
			return true;
		}
		else if (item == "gnollchampion"){
			return true;
		}*/
		else {
			return false;
		}
	}
	
	isWeapon = function(item){
		if (item == "kingsword"){
			return true;
		}
		else if (item == "simpledagger"){
			return true;
		}
		else if (item == "dulldagger"){
			return true;
		}
		else if (item == "sharpdagger"){
			return true;
		}
		else if (item == "simplesword"){
			return true;
		}
		if (item == "dullsword"){
			return true;
		}
		else if (item == "sharpsword"){
			return true;
		}
		else {
			return false;
		}
	}
	
	isArmor = function(item){
		if (items[item].stats.armor){
			return true;
		}/*
		if (item == "baseclothes"){
			return true;
		}
		else if (item == "turtleshell"){
			return true;
		}*/
		else {
			return false;
		}
	}
	
	enemyInRoom = function(room){
		if (item_in_room("attackers", room)){
			return true;
		}
		else if (item_in_room("mercenary", room)){
			return true;
		}
		else if (item_in_room("castleguards", room)){
			return true;
		}
		else if (item_in_room("castleguard", room)){
			return true;
		}
		else if (item_in_room("rebelleader", room)){
			return true;
		}
		else if (item_in_room("goblin", room)){
			return true;
		}
		else if (item_in_room("snake", room)){
			return true;
		}
		else if (item_in_room("bear", room)){
			return true;
		}
		else if (item_in_room("scorpion", room)){
			return true;
		}
		else if (item_in_room("sandraider", room)){
			return true;
		}
		else if (item_in_room("eagle", room)){
			return true;
		}
		else if (item_in_room("harpy", room)){
			return true;
		}
		else if (item_in_room("terrorbird", room)){
			return true;
		}
		else if (item_in_room("magmacreature", room)){
			return true;
		}
		else if (item_in_room("spider", room)){
			return true;
		}
		else if (item_in_room("frog", room)){
			return true;
		}
		else if (item_in_room("swarm", room)){
			return true;
		}
		else if (item_in_room("lion", room)){
			return true;
		}
		else if (item_in_room("gnoll", room)){
			return true;
		}
		else if (item_in_room("gnollcommander", room)){
			return true;
		}
		else if (item_in_room("gnollchampion", room)){
			return true;
		}
		else {
			return false;
		}
	}
	
	get_combatant_stats = function (character){
		//console.log(character);
		var charStats = [];
		if (character == "player") {
			charStats = state.stats;
		}
		else {
			charStats = items[character].stats;
		}
		return charStats;
	}
	
	get_weapon_stats = function (weapon){
		var weaponStats = [];
		if (weapon == "null"){
			weaponStats = 0;
		}
		else{
			weaponStats = items[weapon].stats;
		}
		return weaponStats;
	}

	
	getItemPath = function(item){
		return items[item].path;
	}
	
	doDamage = function (thing, amount){
		var health = get_combatant_stats(thing);
		damage = Math.round(amount);
		//console.log(thing + " took " + damage + " damage");
		if (thing == "player"){
			health.hp -= amount;
		}
		else {
			items[thing].stats.hp -= amount;
		}
		view.update_stats();
	}
	
	isDead = function (character){
	var characterStats = get_combatant_stats(character);
		if (character == "player"){
			if (characterStats.hp <= 0){
				if (state.current_room == "courtyard"){
					view.exit_combat("attackers");
					game.move("kingsdeath", state.current_room);
				}
				else {
					game.move("death", state.current_room);
				}
			}
		}
		else {
			if (characterStats.hp <= 0){
				game.change_stats("xp", items[character].stats.xp);
				killEnemy(character);
				view.update_stats();
				if (get_item_name(character) == "Varaac Leader"){
					game.move("win", state.current_room);
				}
			}
		}
		
	}
	
	killEnemy = function(item){
		if (isEnemy(item)){
			game.reset_health(item);
			add_to_room(item, "deadzone");
			view.update_stats();
			view.exit_combat(item);
			if (item == "mercenary" && state.stats.int > 15){
				view.add_paragraph("You look through the assassins belongings and find a parchment with your name on it. It seems someone has placed a bounty on you! The other name seems to be " + '\"Varaac.\"' + " You wonder what that means... Maybe you should ask your mom?", room);
				game.set_foundInfo(true);
			}
			view.add_paragraph("The " + get_item_name(item) + " died.", room);
			scroll_top(room);
		}
	}
	
	reset_enemy_health = function(enemy){
		var health = items[enemy].stats.maxHp;
		items[enemy].stats.hp = health;
	}
	
	add_item_stats = function(item, target){
		var statsToAdd = get_weapon_stats(item);
		if (target == "player"){
			if (isArmor(item)){
				game.change_stats("armor", statsToAdd.armor);
			}
		}
	}
	
	delete_item_stats = function(item, target){
		var statsToDelete = get_weapon_stats(item);
		if (target == "player"){
			if (isArmor(item)){
				game.change_stats("armor", (0-statsToDelete.armor));
			}
		}
	}
	/*moveMonsterOnPath = function(item){
		getItemPath(item);
		
	}*/
}

function Combat(combat_descriptions){
	var strings = combat_descriptions;

	attack = function (attacker, target, weapon){
		var attackerStats = get_combatant_stats(attacker);
		var targetStats = get_combatant_stats(target);
		var weaponStats = get_weapon_stats(weapon);
		var d20 = Math.floor((Math.random()*20)+1);
		var d10 = Math.floor((Math.random()*10)+1);
		var damage;
		var offense;
		var defense;
		var combat_info = {
			"attacker" : attacker,
			"target" : target,
			"weapon" : weapon,
			"damage" : damage
		}
		if (combat_info.attacker == "player"){
			combat_info.target = get_item_name(combat_info.target);
			combat_info.weapon = get_item_name(combat_info.weapon);
			offense = weaponStats.att + (0.5 * attackerStats.str) + (attackerStats.agl) + (0.25 * attackerStats.int) + weaponStats.dmg + d20;
			defense = (0.25 * targetStats.str) + (targetStats.agl) + (0.75 * targetStats.int) + targetStats.armor + d10;
				if(damage < 0){
					doDamage(attacker, 0);
						combat_info.damage = 0;
						generate_outcome(combat_info, 0)
				}
				if (offense > defense){
				damage = Math.floor(weaponStats.dmg + (attackerStats.str - targetStats.armor) + (Math.random()*10));
					if (d20 == 20){
						doDamage(target, damage*2);
						combat_info.damage = damage*2;
						view.add_paragraph("CRIT", room);
						generate_outcome(combat_info, (offense-defense));
					}
					if (d10 == 10){
						doDamage(attacker, 10);
						combat_info.damage = 10;
						view.add_paragraph("Crit defend!", room);
						generate_outcome(combat_info, 0);
					}
					else {
						doDamage(target, damage);
						combat_info.damage = damage;
						generate_outcome(combat_info, (offense-defense));
					}
				}
				else {
					combat_info.damage = 0;
					generate_outcome(combat_info, 0);
				}
				attack(target, "player", "null");
		}
		else {
			combat_info.attacker = get_item_name(combat_info.attacker);
			offense = (0.5 * attackerStats.str) + (attackerStats.agl) + (0.25 * attackerStats.int) + d20;
			defense = (0.25 * targetStats.str) + (targetStats.agl) + (0.75 * targetStats.int) + (0.75*targetStats.armor) + d10;
				if (offense > defense){
				damage = Math.floor(attackerStats.dmg + attackerStats.str - (0.25*targetStats.armor) + (Math.random()*10));
					if(damage < 0){
					doDamage(attacker, 0);
						combat_info.damage = 0;
						generate_outcome(combat_info, 0)
					}
					else {
					//generate_outcome(attacker, Math.floor(damage));
							if (d20 == 20){
								doDamage(target, damage*2);
								combat_info.damage = damage*2;
								view.add_paragraph("CRIT", room);
								generate_outcome(combat_info, 20);
							}
							if (d10 == 10){
								doDamage(attacker, 10);
								combat_info.damage = 10;
								view.add_paragraph("Crit defend!", room);
								generate_outcome(combat_info, 0);
							}
							else {
								doDamage(target, damage);
								combat_info.damage = damage;
								generate_outcome(combat_info, 1);
							}
					}
				}
				else {
						doDamage(attacker, 0);
						combat_info.damage = 0;
						generate_outcome(combat_info, 0);
				}
		}
		isDead(target);
	}
	
	this.run = function(){
		if (state.current_room == "courtyard"){
			view.add_paragraph("Your courage prevents you from running from this battle.", room);
		}
		else {
			var player = get_combatant_stats("player");
			var playerAgl = player.agl;
			if (playerAgl + Math.floor(Math.random()*50) >= 50){
				view.exit_combat(state.current_enemy);
				game.move("hut", state.current_room);
				reset_enemy_health(state.current_enemy);
				view.update_stats();
			}
			else {
				view.add_paragraph("You tried to run, but you were caught!", room);
				attack(state.current_enemy, "player", "null");
			}
		}
	}
		
	generate_outcome = function(combat_info, threshold){
		if (threshold >= 1){
			view.add_paragraph(construct_string(combat_info, "success"), room);
		}
		else if (threshold <= 0) {
			view.add_paragraph(construct_string(combat_info, "failure"), room);
		}
		if (state.stats.int > 40){
			if (combat_info.attacker == "player"){
				var enemyStats = get_combatant_stats(state.current_enemy);
				view.add_paragraph("Your knowledge tells you it has " + enemyStats.hp + " hp left.", room);
			}
		}
		scroll_top(room);
	}
	
	construct_string = function(combat_info, efficiency){
		var string;
		if (combat_info.attacker == "player"){
			if (efficiency == "success"){
				string = strings.player_attacks.success;
			}
			else {
				string = strings.player_attacks.failure;
			}
		}
		else {
			if (efficiency == "success"){
				string = strings.enemy_attacks.success;
			}
			else {
				string = strings.enemy_attacks.failure;
			}
		}
		var res = string[Math.floor((Math.random()*string.length))];
		var finalres = "";
		var res_array = res.split("|");
		for (var i = 0; i <= res_array.length-1; i++){
			if (res_array[i].charAt(0) == "*"){
				var varName= res_array[i].slice(1);
				finalres += combat_info[varName];
			}
			else {
				finalres += res_array[i];
			}
		}
		return finalres;
	}
}


var game = null;
var state = null;
var view = null;
var map = null;
var items = null;
var item_actions = null;
var inventory_items = null;

function init() {
    game = new GameController();
    game.run();
}
