function project_ants() {
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	function Create2DArray(x, y) {
		var arr = [];
		for (var i=0; i<x; i++) {
			arr[i] = [];
			for (var j=0; j<y; j++) {
				arr[i][j] = 0.0;
			}
		}
		return arr;
	}

	function fixCollisionsFair(antsInCollisions, energy) {
		gained_energy = Math.floor(energy / antsInCollisions.length);
		gained_energy_rest = energy % antsInCollisions.length;
		for (var i in antsInCollisions) {
			ants[antsInCollisions[i]].energy += gained_energy;
			console.log("Mrówka " + antsInCollisions[i] + " otrzymała " + gained_energy + " energii");
		}
		ants[antsInCollisions[0]].energy += gained_energy_rest;
		console.log("Reszta energii z kolizji: " + gained_energy_rest);
	}

	function fixCollisionsAltruistic(antsInCollisions, energy) {
		sum_of_energy = energy;
		for (var i in antsInCollisions) {
			sum_of_energy += ants[antsInCollisions[i]].energy;
		}
		gained_energy = Math.floor(sum_of_energy / antsInCollisions.length);
		gained_energy_rest = sum_of_energy % antsInCollisions.length;
		for (var i in antsInCollisions) {
			ants[antsInCollisions[i]].energy = gained_energy;
			console.log("Mrówka " + antsInCollisions[i] + " otrzymała " + gained_energy + " energii");
		}
		ants[antsInCollisions[0]].energy += gained_energy_rest;
		console.log("Reszta energii z kolizji: " + gained_energy_rest);
	}

	function fixCollisionsBad(antsInCollisions, energy) {
		strongest_ant = 0;
		for (var i in antsInCollisions) {
			if (ants[antsInCollisions[i]].energy > ants[antsInCollisions[strongest_ant]].energy)
				strongest_ant = i;
		}
		ants[antsInCollisions[strongest_ant]].energy += energy;
		console.log("Mrówka " + antsInCollisions[strongest_ant] + " otrzymała " + energy + " energii");
	}

	function fixCollisionsVeryBad(antsInCollisions, energy) {
		strongest_ant = 0;
		for (var i in antsInCollisions) {
			if (ants[antsInCollisions[i]].energy > ants[antsInCollisions[strongest_ant]].energy)
				strongest_ant = i;
		}
		for (var i in antsInCollisions) {
			energy += ants[antsInCollisions[i]].energy;
			ants[antsInCollisions[i]].energy = 0;
		}
		ants[antsInCollisions[strongest_ant]].energy = energy;
		console.log("Mrówka " + antsInCollisions[strongest_ant] + " otrzymała " + energy + " energii");
	}

	var world = new CAWorld({
		//width: 96,
		//height: 64,
		width: Math.floor(window.innerWidth / 20),
		height: Math.floor(window.innerHeight / 20),
		cellSize: 20
	});

	var M = 100;
	var Energy = world.width * world.height;
	var I;
	var DE = Energy % M;
	var step = 0;

	world.palette = [
		'128, 0, 0, 0',
		'128, 0, 0, ' + 1/9,
		'128, 0, 0, ' + 2/9,
		'128, 0, 0, ' + 3/9,
		'128, 0, 0, ' + 4/9,
		'128, 0, 0, ' + 5/9,
		'128, 0, 0, ' + 6/9,
		'128, 0, 0, ' + 7/9,
		'128, 0, 0, ' + 8/9,
		'128, 0, 0, 1',
		'125, 255, 125, 1',
	];

	var ants = [];
	for (var i = 0; i < M; ++i) {
		ants.push({
			x: getRandomInt(0, world.width),
			y: getRandomInt(0, world.height),
			energy: Math.floor(Energy / M),
			direction: getRandomInt(0, 4),
			alive: true,
		});
	}

	var pixels;
	var collisions;

	world.registerCellType('living', {
		getColor: function () {
			var proportion = this.alive / Energy;
			if (proportion > 0) {
				if (proportion < 0.001) {
					return 1;
				} else if (proportion < 0.002) {
					return 2;
				} else if (proportion < 0.004) {
					return 3;
				} else if (proportion < 0.007) {
					return 4;
				} else if (proportion < 0.01) {
					return 5;
				} else if (proportion < 0.05) {
					return 6;
				} else if (proportion < 0.1) {
					return 7;
				} else if (proportion < 0.5) {
					return 8;
				}
				return 9;
			}
			if (this.background)
				return 10;
			return 0;
		},
		process: function (neighbors) {
			if (pixels[[this.x, this.y]] != null) {
				var pixel = pixels[[this.x, this.y]];
				for (var key in pixel) {
					this.alive += ants[pixel[key]].energy;
					var current_ant = ants[pixel[key]];
					if (this.background) {
						this.background = false;
						current_ant.direction += 1;
						if (current_ant.direction > 3)
							current_ant.direction = 0;
					} else {
						this.background = true;
						current_ant.direction -= 1;
						if (current_ant.direction < 0)
							current_ant.direction = 3;
					}
				}
			} else {
				this.alive = 0;
			}
		},
		reset: function () {
			if (this.x == 0 && this.y == 0) {
				pixels = Object();
				var ants_new = [];
				for (var i = 0; i < M; ++i) {
					switch(ants[i].direction) {
						case 0:
							ants[i].x -= 1;
							if (ants[i].x < 0)
								ants[i].x = world.width - 1;
							break;
						case 1:
							ants[i].y -= 1;
							if (ants[i].y < 0)
								ants[i].y = world.height - 1;
							break;
						case 2:
							ants[i].x += 1;
							if (ants[i].x >= world.width)
								ants[i].x = 0;
							break;
						case 3:
							ants[i].y += 1;
							if (ants[i].y >= world.height)
								ants[i].y = 0;
							break;
					}
					if (ants[i].energy > 0) {
						ants[i].energy -= 1;
						DE += 1;
						ants_new.push(ants[i]);
						new_i = ants_new.length - 1;
						if (pixels[[ants_new[new_i].x, ants_new[new_i].y]] == null)
							pixels[[ants_new[new_i].x, ants_new[new_i].y]] = [new_i];
						else
							pixels[[ants_new[new_i].x, ants_new[new_i].y]].push(new_i);
					}
				}
				ants = ants_new;
				M = ants_new.length;
				console.log("Liczba obiektów: " + M);
				I = 0;
				for (var key in pixels) {
					if (pixels[key].length > 1)
						I += 1;
				}
				console.log("Liczba kolizji: " + I);
				energy_per_collision = Math.floor(DE / I);
				for (var key in pixels) {
					if (pixels[key].length > 1)
						fixCollisionsAltruistic(pixels[key], energy_per_collision);
				}
				if (I > 0)
					DE = DE % I;
				console.log("Zalokowana energia: " + DE);
				if (DE >= Energy)
					console.log("MINĘŁO: " + step + " kroków od początku");
				else
					step += 1;
			}
		}
	}, function () {
		this.background = false;
		this.alive = Math.random() > 1;
	});

	world.initialize([
		{ name: 'living', distribution: 100 }
	]);

	return world;
}
