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
		width: 96,
		height: 64,
		cellSize: 6
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
	];
	
	var ants = [];
	for (var i = 0; i < M; ++i) {
		ants.push({
			x: getRandomInt(0, world.width),
			y: getRandomInt(0, world.height),
			energy: Math.floor(Energy / M),
			moved: false,
			alive: true,
		});
	}
	
	var pixels;
	var collisions;
	
	world.registerCellType('living', {
		getColor: function () {
			if (this.alive == 0)
				return 0;
			var proportion = this.alive / Energy;
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
		},
		process: function (neighbors) {
			if (pixels[[this.x, this.y]] != null) {
				var pixel = pixels[[this.x, this.y]];
				for (var key in pixel) {
					this.alive += ants[pixel[key]].energy;
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
					switch(getRandomInt(0, 4)) {
						case 0:
							if (ants[i].x > 0)
								ants[i].x -= 1;							
							break;
						case 1:
							if (ants[i].x < world.width - 1)
								ants[i].x += 1;
							break;
						case 2:
							if (ants[i].y > 0)
								ants[i].y -= 1;	
							break;
						case 3:
							if (ants[i].y < world.height - 1)
								ants[i].y += 1;
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
						fixCollisionsVeryBad(pixels[key], energy_per_collision);
				}
				if (I > 0)
					DE = DE % I;
				console.log("Zalokowana energia: " + DE);
				if (M == 0)
					console.log("MINĘŁO: " + step + " kroków od początku");
				else
					step += 1;
			}
		}
	}, function () {
		this.alive = Math.random() > 1;
	});

	world.initialize([
		{ name: 'living', distribution: 100 }
	]);

	return world;
}