const form = document.getElementById("game-form");
form.addEventListener("submit", generateStory);

function generateStory(event) {
	event.preventDefault();

	var storyType = document.getElementById("storyType").value;
	var astronaut = document.getElementById("astronaut").value;
	var alienSpecies = document.getElementById("alienSpecies").value;
	var planet = document.getElementById("planet").value;
	var verb = document.getElementById("verb").value;
	var adjective = document.getElementById("adjective").value;
	var spaceObject = document.getElementById("spaceObject").value;
	var story = "";

	switch (storyType) {
		case "story1":
			story = `Astronaut ${astronaut} performed a ${adjective} spacewalk, only to ${verb} into an extraterrestrial called ${alienSpecies} from the hitherto unknown planet ${planet}. They shared cosmic ice cream. End of encounter.`;
			break;
		case "story2":
			story = `In a daring twist of events, astronaut ${astronaut} found a ${adjective} ${spaceObject} on planet ${planet}. Upon closer examination, they realized it was a space-pizza delivery from the ${alienSpecies}! ${
				verb.charAt(0).toUpperCase() + verb.slice(1)
			}ing never tasted so cosmic.`;
			break;
		case "story3":
			story = `Stranded on the ${adjective} landscape of ${planet}, astronaut ${astronaut} had to ${verb} to communicate with the mysterious ${alienSpecies}. In return, they taught ${astronaut} the secret art of intergalactic origami.`;
			break;
		case "story4":
			story = `During their journey through the cosmos, astronaut ${astronaut} stumbled upon a ${adjective} ${spaceObject}, a gift from the ${alienSpecies} of planet ${planet}. This encounter would lead to the universe's first space Olympics, where Earth's chosen sport was ${verb}ing.`;
			break;
		case "story5":
			story = `${astronaut} travelled lightyears to reach the far-off corners of ${planet} where they discovered a ${adjective} cosmic ${spaceObject}. Turns out, it was a high-tech radio for inter-species karaoke, a favourite pastime of the ${alienSpecies}. Time to ${verb} to the music!`;
			break;
		case "story6":
			story = `On a quest to ${verb} across the galaxy, astronaut ${astronaut} discovered the secret recipe for the ${alienSpecies}'s ${adjective} space stew, a delicacy on planet ${planet}. It's made of ${spaceObject}, who would've guessed?`;
			break;
		case "story7":
			story = `Astronaut ${astronaut} came face to face with a ${adjective} space ${spaceObject} during their expedition to ${planet}. It was a cosmic map, leading them to the grand library of the ${alienSpecies}. Time to ${verb} in some extraterrestrial literature!`;
			break;
		case "story8":
			story = `During a breathtaking space sunrise, astronaut ${astronaut} spotted a ${adjective} ${spaceObject}. As they reached out to ${verb} it, a hologram of the ${alienSpecies} from planet ${planet} appeared, inviting Earth to their universal potluck.`;
			break;
		case "story9":
			story = `In the distant orbits of planet ${planet}, ${astronaut} encountered a group of ${alienSpecies} playing a game of ${adjective} space-football with a ${spaceObject}. They couldn't resist joining in, proving humans could ${verb} in zero gravity.`;
			break;
		case "story10":
			story = `Lost in the ${adjective} abyss of space, astronaut ${astronaut} found a ${spaceObject}, a beacon from the ${alienSpecies}. It guided them to a planet made entirely of ${planet}, where their mission was to master the art of interstellar ${verb}ing.`;
			break;
		default:
			story = "Please select a valid story.";
	}

	document.getElementById("result-story").innerHTML = story;

	form.reset();
}
