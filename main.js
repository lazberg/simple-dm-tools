var g_Monsters = [
	"goblins",
	"a lost sheep",
	"a foreigner",
	"a noble",
	"a mad spellcaster",
	"a clan",
	"cultists",
	"a loved one",
	"a child"
];
var g_Objects = [
	"a strange energy",
	"a talisman",
	"a painting",
	"a curse",
	"a gemstone",
	"a magical artifact",
	"a scroll",
	"a body"
];
var g_Goal = [
	g_Monsters,
	g_Objects
];
var g_Location = [
	"a cave",
	"a mine",
	"a guard tower",
	"a wizard's tower",
	"a garrison",
	"a campsite",
	"a village",
	"a crypt",
	"a house",
	"a lodge",
	"a monestary"
];
var g_Length = [
	"nearby",
	"faraway"
];
var g_Objective = [
	"retrieve",
	"put",
	"eliminate",
	"investigate",
	"take care of",
	"remove"
];
var g_NPC = [
	"a noble",
	"an organization",
	"a village officer",
	"a city general",
	"a trader",
	"an elder",
	"a priest",
	"a farmer"
];

var c_Monsters = [
	"thieves",
	"criminals",
	"thugs",
	"goblins",
	"a slavetrader",
	"a foreigner",
	"an artisan",
	"a charlatan",
	"a noble",
	"a child"
];
var c_Objects = [
	"strange noises",
	"a relic",
	"currency",
	"a body",
	"a cult",
	"a cake",
	"a wedding",
	"an omen",
	"a carriage"
];
var c_Goal = [
	c_Monsters,
	c_Objects
];
var c_Location = [
	"a wizard's tower",
	"a garrison",
	"a magic shop",
	"a smith's shop",
	"a graveyard",
	"a temple",
	"a tavern"
];
var c_Length = [
	"nearby",
	"somewhere in this city",
	"in another district",
	"near the city centre",
	"right outside the city walls",
	"at the harbour",
	"in the underbelly",
	"in an alley",
	"at a city gate"
];
var c_Objective = [
	"retrieve",
	"put",
	"eliminate",
	"investigate",
	"remove",
	"take care of"
];
var c_NPC = [
	"a noble",
	"an organization",
	"a guard",
	"an officer",
	"a government figure",
	"an elder",
	"a priest",
	"a shopkeep",
	"an innkeeper",
	"a family",
	"a wizard",
	"a scholar"
];

var vowels = [ "a", "e", "i", "o", "u" ];
var consonants = [ "q", "w", "r", "t", "p", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m" ];
var alphabet = [ "a", "e", "i", "o", "u", "w", "r", "t", "p", "s", "d", "f", "g", "h", "j", "k", "l", "c", "v", "b", "n", "m" ];
var letterSecond = [ "q", "p", "b", "g", "m", "j", "c", "x", "f", "d", "k", "v", "z", "w" ];
var alphabet50 = [vowels, consonants, vowels, consonants, alphabet];

var goals = [ g_Goal, c_Goal ];
var locations = [ g_Location, c_Location ];
var lengths = [ g_Length, c_Length ];
var objectives = [ g_Objective, c_Objective ];
var NPCs = [ g_NPC, c_NPC ];

function RollGeneral() {
	document.getElementById("objective").innerHTML = "There is "+Random(g_NPC)+ " that wants you to "+Random(g_Objective)+" "+Random(g_Goal)+" in "+Random(g_Location)+" "+Random(g_Length)+".";
}

function RollCity() {
	document.getElementById("objective").innerHTML = "There is "+Random(c_NPC)+ " that wants you to "+Random(c_Objective)+" "+Random(c_Goal)+" in "+Random(c_Location)+" "+Random(c_Length)+".";
}

function RollAll() {
	document.getElementById("objective").innerHTML = "There is "+Random(NPCs)+ " that wants you to "+Random(objectives)+" "+Random(goals)+" in "+Random(locations)+" "+Random(lengths)+".";
}

/*
function RollNames(num=1){
	clear();
	for (var w = 0; w < num; w++) {
		RollName();
	}
}
*/

function RollName() {
	var letterCount = 0;
	var nameRoll = [];
	for (var i = 0; i < 1; i ) {
		var letterCount = RandomNumber(8);
		if (letterCount >= 2) {
			i = 1;
		}
		else {
			i = 0;
		}
	}
	nameRoll.push(Random(alphabet));
	for (var i = 0; i < letterCount; i++) {
		if(vowels.includes(nameRoll[i])) {
			if(vowels.includes(nameRoll[i-1])){
				nameRoll.push(Random(consonants));
			}
			else {
				nameRoll.push(Random(alphabet50));
			}
		}
		else if(consonants.includes(nameRoll[i])) {
			if (i == 0) {
				for (var t = 0; t < 1; t ) {
					var firstLetter = Random(alphabet50);
					if (!letterSecond.includes(firstLetter)) {
						t++;
						nameRoll.push(firstLetter);
					}
				}
			}
			else if(consonants.includes(nameRoll[i-1])){
				nameRoll.push(Random(vowels));
			}
			else {
				nameRoll.push(Random(alphabet50));
			}
		}
	}
	nameRoll[0] = nameRoll[0].toUpperCase();
	//console.log(nameRoll.join(""));
	document.getElementById("name").innerHTML = nameRoll.join("");
}

function Random(list) {
	var rng = list[Math.floor((Math.random()*list.length))];
	if (Array.isArray(rng)) {
		// Checks if the randomized array item is actually an array, rolling again for that array.
		rng = rng[Math.floor((Math.random()*rng.length))];
		if (Array.isArray(rng)) {
			// The same thing again.
			rng = rng[Math.floor((Math.random()*rng.length))];
		}
	}
	return rng;
}

function RandomNumber(max) {
	return Math.floor((Math.random()*max));
}

function ArrayLength(list) {
	var listlength = [];
	for (var i = 0;i<list.length;i++) {
		listlength.push(i);
	}
	return listlength;
}