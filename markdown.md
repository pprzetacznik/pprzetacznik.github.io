# Modelowanie rzeczywistoœci w symulacji i grafice komputerowej

## Projekt zaliczeniowy - modelowanie dobra i z³a / __Piotr Przetacznik__

### Wstêp

Do realizacji projektu u¿y³em biblioteki cellauto.js, któr¹ mo¿na pobraæ ze strony https://sanojian.github.io/cellauto/. Zgodnie z poleceniem zamodelowa³em osobniki (mrówki), które poruszaj¹ siê po planszy. Osobniki te w ka¿dym kolejnym kroku trac¹ jedn¹ jednostkê energii. Suma energii w ca³ym uk³adzie jest równa liczbie:

```
E = world.width * world.height
```

Energia tracona przez wszystkie cz¹steczki akumulowana jest w akumulatorze: `EM`. Suma energii wszystkich cz¹steczek oraz energii zakumulowanej `EM` jest sta³a i wynosi `E`.

Mrówki w ka¿dym kroku oddaj¹ energiê, jednak mog¹ j¹ zwiêkszyæ je¿eli wejd¹ w kolizjê z innymi mrówkami. W takim wypadku energia `EM` jest dzielona na iloœæ kolizji w danej jednostce czasu (I) oraz w obrêbie kolizji jest rozprowadzana zgodnie na cztery sposoby:
* sprawiedliwy - energia `EM / I` dzielona jest po równo na wszystkich uczestników kolizji,
* altruistyczny - uczestnicy kolizji sumuj¹ energiê z energi¹ `EM / I`, a nastêpnie rozdzielaj¹ j¹ równomiernie miêdzy wszystkich uczestników kolizji,
* z³y - uczestnik kolizji z najwiêksz¹ iloœci¹ energii zabiera ca³¹ energiê `EM / I`,
* bardzo z³y - uczestnik kolizji z najwiêksz¹ iloœci¹ energii zabiera ca³¹ energiê `EM / I` oraz energiê pozosta³ych uczestników kolizji zabijaj¹c ich przy tym.

### Realizacja

Mrówki w projekcie poruszaj¹ siê na dwa sposoby:
* za pomoc¹ losowego algorytmu,
* za pomoc¹ algorytmu znanego z automatu Mrówki Langtona.

Aby nie zaciemniaæ przekazu eksperymentu kod Ÿród³owy dla obu rozwi¹zañ zosta³ umieszczony na koñcu sprawozdania. Na uwagê zas³uguj¹ 4 funkcje:
* `fixCollisionsFair()`
* `fixCollisionsAltruistic()`
* `fixCollisionsBad()`
* `fixCollisionsVeryBad()`.
Funkcje te rozwi¹zuj¹ kolizje na 4 ró¿ne sposoby, opisane we wstêpie.

W przyk³adach stworzy³em œwiat o wymiarach 96x64, a liczbê mrówego ustali³em na 100. Mrówki w zale¿noœci od tego czy maj¹ du¿o energii czy ma³o mog¹ byæ bardzo czerwone lub jasnoczerwone.

Demo projektu dostêpne jest pod adresem: http://pprzetacznik.github.io gdzie mo¿na uruchomiæ przyk³ad z Mrówk¹ Langtona z  rozwi¹zywaniem kolizji w sposób altruistyczny.

Kody dostêpne na koñcu sprawozdania mo¿na równie¿ uruchomiæ na stronie https://sanojian.github.io/cellauto.

### Wnioski z projektu

Modele zosta³y przetestowane pod wzglêdem d³ugoœci ¿ycia. Zauwa¿alne jest to, ¿e sposób poruszania mrówek ca³kowicie zmienia wyniki.

| algorytm rozwi¹zywania kolizji | losowy algorytm poruszania | poruszanie wg zasad automatu Mrówki Langtona |
|--------------------------------|----------------------------|----------------------------------------------|
| sprawiedliwy                   | 3215                       | program siê nie koñczy                       |
| altruistyczny                  | 6144                       | program siê nie koñczy                       |
| z³y                            | 1405                       | 5299                                         |
| bardzo z³y                     | 3232                       | 1368                                         |

Wyniki te s¹ przyk³adowe, zdajê sobie sprawê, ¿e iloœæ eksperymentów nie jest wystarczaj¹ca do tego, ¿eby wysuwaæ daleko id¹ce wnioski naukowe niemniej jednak poni¿sze wnioski równie¿ mog¹ wydaæ siê ciekawe.

#### Mrówki poruszaj¹ce siê w sposób losowy

W przypadku losowego algorytmu poruszania siê mo¿na zauwa¿yæ, ¿e altruistyczny model mo¿e ¿yæ d³u¿ej. Mo¿e to byæ zwi¹zane z tym, ¿e dziel¹c energiê zakumulowan¹ w taki sposób, ¿eby wyrównaæ energiê wszystkich mrówek zwiêkszamy prawdopodobieñstwo tego, ¿e mrówki ponownie wejd¹ z kimœ w kolizjê i siêgn¹ po energiê zakumulowan¹. W przypadku podejœæ egoistycznych faktycznie jakaœ mrówka osi¹gnie wiêksz¹ energiê, jednak je¿eli wymr¹ pozosta³e mrówki to najsilniejsza mrówka nie bêdzie mia³a z kim wejœæ w kolizjê, ¿eby siêgn¹æ do energi zakumulowanej uk³adu i powiêkszyæ swoj¹ energiê, aby d³u¿ej prze¿yæ. W przypadku "bardzo z³ego" sposobu rozwi¹zywania konfliktu mo¿emy zauwa¿yæ, ¿e jedna mrówka dominuje inne mrówki, ¿eby przez wiêkszoœæ swojego ¿ycia byæ sama i umrzeæ w samotnoœci. W obu sposobach rozwi¹zywania konfliktów za pomoc¹ metod "z³ej" oraz "bardzo z³ej" uk³ad bardzo szybko staje siê rzadki. W przypadku metod "sprawiedliwej" oraz "altruistycznej" mo¿na zaobserwowaæ, ¿e mrówki wymieraj¹ wspólnie, ale dlatego, ¿e nie potrafi¹ wejœæ ze sob¹ w kolizjê.

Poni¿szy zrzut ekranu prezentuje stadium pocz¹tkowe modelu.
![first picture](http://student.agh.edu.pl/~smarter/upload/uploads/projekt_random.png)

Poni¿szy zrzut ekranu prezentuje stadium koñcowe modelu.
![first picture](http://student.agh.edu.pl/~smarter/upload/uploads/projekt_random2.png)

#### Mrówki poruszaj¹ce siê zgodnie z automatem Mrowka Langtona

W przypadku rozwi¹zania z Mrówk¹ Langtona mamy mrówki, które chodz¹ po trawie. Czasami wpadaj¹ na siebie i nadpisujê swoj¹ wzajemn¹ pracê. Z tabeli ¿ycia mrówek mo¿na wywnioskowaæ, ¿e w przypadku u¿ycia "z³ego" sposobu rozwi¹zywania kolizji mrówki ¿yj¹ d³u¿ej ni¿ w przypadku "bardzo z³ego". Byæ mo¿e w przypadku tego drugiego sposobu mrówki ju¿ na samym pocz¹tku siê eliminuj¹ nawzajem nie daj¹c sobie zbyt wiele mo¿liwoœci do póŸniejszego stworzenia kolizji i siêgniêcia do energi zakumulowanej uk³adu. W przypadku algorytmów "sprawiedliwego" oraz "altruistycznego" warto zwróciæ uwagê na fakt, ¿e dwie mrówki wpadaj¹ we wspólny uk³ad kiedy cyklicznie wchodz¹ ze sob¹ w kolizjê za ka¿dym razem pobieraj¹c energiê zakumulowan¹ uk³adu. W przypadku takich uk³adów mrówki zostan¹ zawsze dokarmione i nigdy nie umr¹. Pod adresem: http://pprzetacznik.github.io mo¿na samemu wygenerowaæ sobie taki przypadek.

Poni¿szy zrzut ekranu prezentuje stadium pocz¹tkowe modelu.
![first picture](http://student.agh.edu.pl/~smarter/upload/uploads/projekt_zdjêcie_2.png)

Poni¿szy zrzut ekranu prezentuje stadium koñcowe modelu (typowe dla algorytmów "z³ego" oraz "bardzo z³ego").
![first picture](http://student.agh.edu.pl/~smarter/upload/uploads/projekt_zdjêcie_1.png)

Poni¿sze zrzuty ekranu prezentuj¹ stadium kiedy uk³ad wpada w sytuacjê w której zawsze siêga do energii zakumulowanej przez co nigdy nie umrze.
![first picture](http://student.agh.edu.pl/~smarter/upload/uploads/projekt_zdjêcie_altruistic_block.png)
![first picture](http://student.agh.edu.pl/~smarter/upload/uploads/projekt_zdjêcie_fair_block.png)


### Kody Ÿród³owe

#### Mrówki poruszaj¹ siê losowo

```JavaScript
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
			console.log("Mrówka " + antsInCollisions[i] + " otrzyma³a " + gained_energy + " energii");
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
			console.log("Mrówka " + antsInCollisions[i] + " otrzyma³a " + gained_energy + " energii");
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
		console.log("Mrówka " + antsInCollisions[strongest_ant] + " otrzyma³a " + energy + " energii");
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
		console.log("Mrówka " + antsInCollisions[strongest_ant] + " otrzyma³a " + energy + " energii");
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
				console.log("Zaalokowana energia: " + DE);
				if (M == 0)
					console.log("MINÊ£O: " + step + " kroków od pocz¹tku");
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
```

#### Mrówki poruszaj¹ siê zgodnie z zasadami automatu Mrówka Langtona

```JavaScript
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
			console.log("Mrówka " + antsInCollisions[i] + " otrzyma³a " + gained_energy + " energii");
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
			console.log("Mrówka " + antsInCollisions[i] + " otrzyma³a " + gained_energy + " energii");
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
		console.log("Mrówka " + antsInCollisions[strongest_ant] + " otrzyma³a " + energy + " energii");
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
		console.log("Mrówka " + antsInCollisions[strongest_ant] + " otrzyma³a " + energy + " energii");
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
				console.log("Zaalokowana energia: " + DE);
				if (DE >= Energy)
					console.log("MINÊ£O: " + step + " kroków od pocz¹tku");
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
```