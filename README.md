# Modelowanie rzeczywistości w symulacji i grafice komputerowej

## Projekt zaliczeniowy - modelowanie dobra i zła / __Piotr Przetacznik__

### Wstęp

Do realizacji projektu użyłem biblioteki cellauto.js, którą można pobrać ze strony https://sanojian.github.io/cellauto/. Zgodnie z poleceniem zamodelowałem osobniki (mrówki), które poruszają się po planszy. Osobniki te w każdym kolejnym kroku tracą jedną jednostkę energii. Suma energii w całym układzie jest równa liczbie:

```
E = world.width * world.height
```

Energia tracona przez wszystkie cząsteczki akumulowana jest w akumulatorze: `EM`. Suma energii wszystkich cząsteczek oraz energii zakumulowanej `EM` jest stała i wynosi `E`.

Mrówki w każdym kroku oddają energię, jednak mogą ją zwiększyć jeżeli wejdą w kolizję z innymi mrówkami. W takim wypadku energia `EM` jest dzielona na ilość kolizji w danej jednostce czasu (I) oraz w obrębie kolizji jest rozprowadzana zgodnie na cztery sposoby:
* sprawiedliwy - energia `EM / I` dzielona jest po równo na wszystkich uczestników kolizji,
* altruistyczny - uczestnicy kolizji sumują energię z energią `EM / I`, a następnie rozdzielają ją równomiernie między wszystkich uczestników kolizji,
* zły - uczestnik kolizji z największą ilością energii zabiera całą energię `EM / I`,
* bardzo zły - uczestnik kolizji z największą ilością energii zabiera całą energię `EM / I` oraz energię pozostałych uczestników kolizji zabijając ich przy tym.

### Realizacja

Mrówki w projekcie poruszają się na dwa sposoby:
* za pomocą losowego algorytmu,
* za pomocą algorytmu znanego z automatu Mrówki Langtona.

Aby nie zaciemniać przekazu eksperymentu kod źródłowy dla obu rozwiązań został umieszczony na końcu sprawozdania. Na uwagę zasługują 4 funkcje:
* `fixCollisionsFair()`
* `fixCollisionsAltruistic()`
* `fixCollisionsBad()`
* `fixCollisionsVeryBad()`.
Funkcje te rozwiązują kolizje na 4 różne sposoby, opisane we wstępie.

W przykładach stworzyłem świat o wymiarach 96x64, a liczbę mrówego ustaliłem na 100. Mrówki w zależności od tego czy mają dużo energii czy mało mogą być bardzo czerwone lub jasnoczerwone.

Demo projektu dostępne jest pod adresem: http://pprzetacznik.github.io gdzie można uruchomić przykład z Mrówką Langtona z  rozwiązywaniem kolizji w sposób altruistyczny.

Kody dostępne na końcu sprawozdania można również uruchomić na stronie https://sanojian.github.io/cellauto.

### Wnioski z projektu

Modele zostały przetestowane pod względem długości życia. Zauważalne jest to, że sposób poruszania mrówek całkowicie zmienia wyniki.

| algorytm rozwiązywania kolizji | losowy algorytm poruszania | poruszanie wg zasad automatu Mrówki Langtona |
|--------------------------------|----------------------------|----------------------------------------------|
| sprawiedliwy                   | 3215                       | program się nie kończy                       |
| altruistyczny                  | 6144                       | program się nie kończy                       |
| zły                            | 1405                       | 5299                                         |
| bardzo zły                     | 3232                       | 1368                                         |

Wyniki te są przykładowe, zdaję sobie sprawę, że ilość eksperymentów nie jest wystarczająca do tego, żeby wysuwać daleko idące wnioski naukowe niemniej jednak poniższe wnioski również mogą wydać się ciekawe.

#### Mrówki poruszające się w sposób losowy

W przypadku losowego algorytmu poruszania się można zauważyć, że altruistyczny model może żyć dłużej. Może to być związane z tym, że dzieląc energię zakumulowaną w taki sposób, żeby wyrównać energię wszystkich mrówek zwiększamy prawdopodobieństwo tego, że mrówki ponownie wejdą z kimś w kolizję i sięgną po energię zakumulowaną. W przypadku podejść egoistycznych faktycznie jakaś mrówka osiągnie większą energię, jednak jeżeli wymrą pozostałe mrówki to najsilniejsza mrówka nie będzie miała z kim wejść w kolizję, żeby sięgnąć do energi zakumulowanej układu i powiększyć swoją energię, aby dłużej przeżyć. W przypadku "bardzo złego" sposobu rozwiązywania konfliktu możemy zauważyć, że jedna mrówka dominuje inne mrówki, żeby przez większość swojego życia być sama i umrzeć w samotności. W obu sposobach rozwiązywania konfliktów za pomocą metod "złej" oraz "bardzo złej" układ bardzo szybko staje się rzadki. W przypadku metod "sprawiedliwej" oraz "altruistycznej" można zaobserwować, że mrówki wymierają wspólnie, ale dlatego, że nie potrafią wejść ze sobą w kolizję.

Poniższy zrzut ekranu prezentuje stadium początkowe modelu.
![first picture](http://student.agh.edu.pl/~smarter/upload/uploads/projekt_random.png)

Poniższy zrzut ekranu prezentuje stadium końcowe modelu.
![first picture](http://student.agh.edu.pl/~smarter/upload/uploads/projekt_random2.png)

#### Mrówki poruszające się zgodnie z automatem Mrowka Langtona

W przypadku rozwiązania z Mrówką Langtona mamy mrówki, które chodzą po trawie. Czasami wpadają na siebie i nadpisuję swoją wzajemną pracę. Z tabeli życia mrówek można wywnioskować, że w przypadku użycia "złego" sposobu rozwiązywania kolizji mrówki żyją dłużej niż w przypadku "bardzo złego". Być może w przypadku tego drugiego sposobu mrówki już na samym początku się eliminują nawzajem nie dając sobie zbyt wiele możliwości do późniejszego stworzenia kolizji i sięgnięcia do energi zakumulowanej układu. W przypadku algorytmów "sprawiedliwego" oraz "altruistycznego" warto zwrócić uwagę na fakt, że dwie mrówki wpadają we wspólny układ kiedy cyklicznie wchodzą ze sobą w kolizję za każdym razem pobierając energię zakumulowaną układu. W przypadku takich układów mrówki zostaną zawsze dokarmione i nigdy nie umrą. Pod adresem: http://pprzetacznik.github.io można samemu wygenerować sobie taki przypadek.

Poniższy zrzut ekranu prezentuje stadium początkowe modelu.
![first picture](http://student.agh.edu.pl/~smarter/upload/uploads/projekt_zdjęcie_2.png)

Poniższy zrzut ekranu prezentuje stadium końcowe modelu (typowe dla algorytmów "złego" oraz "bardzo złego").
![first picture](http://student.agh.edu.pl/~smarter/upload/uploads/projekt_zdjęcie_1.png)

Poniższe zrzuty ekranu prezentują stadium kiedy układ wpada w sytuację w której zawsze sięga do energii zakumulowanej przez co nigdy nie umrze.
![first picture](http://student.agh.edu.pl/~smarter/upload/uploads/projekt_zdjęcie_altruistic_block.png)
![first picture](http://student.agh.edu.pl/~smarter/upload/uploads/projekt_zdjęcie_fair_block.png)


### Kody źródłowe

#### Mrówki poruszają się losowo

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
				console.log("Zaalokowana energia: " + DE);
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
```

#### Mrówki poruszają się zgodnie z zasadami automatu Mrówka Langtona

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
```
