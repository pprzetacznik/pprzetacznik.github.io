# Modelowanie rzeczywisto�ci w symulacji i grafice komputerowej

## Projekt zaliczeniowy - modelowanie dobra i z�a / __Piotr Przetacznik__

### Wst�p

Do realizacji projektu u�y�em biblioteki cellauto.js, kt�r� mo�na pobra� ze strony https://sanojian.github.io/cellauto/. Zgodnie z poleceniem zamodelowa�em osobniki (mr�wki), kt�re poruszaj� si� po planszy. Osobniki te w ka�dym kolejnym kroku trac� jedn� jednostk� energii. Suma energii w ca�ym uk�adzie jest r�wna liczbie:

```
E = world.width * world.height
```

Energia tracona przez wszystkie cz�steczki akumulowana jest w akumulatorze: `EM`. Suma energii wszystkich cz�steczek oraz energii zakumulowanej `EM` jest sta�a i wynosi `E`.

Mr�wki w ka�dym kroku oddaj� energi�, jednak mog� j� zwi�kszy� je�eli wejd� w kolizj� z innymi mr�wkami. W takim wypadku energia `EM` jest dzielona na ilo�� kolizji w danej jednostce czasu (I) oraz w obr�bie kolizji jest rozprowadzana zgodnie na cztery sposoby:
* sprawiedliwy - energia `EM / I` dzielona jest po r�wno na wszystkich uczestnik�w kolizji,
* altruistyczny - uczestnicy kolizji sumuj� energi� z energi� `EM / I`, a nast�pnie rozdzielaj� j� r�wnomiernie mi�dzy wszystkich uczestnik�w kolizji,
* z�y - uczestnik kolizji z najwi�ksz� ilo�ci� energii zabiera ca�� energi� `EM / I`,
* bardzo z�y - uczestnik kolizji z najwi�ksz� ilo�ci� energii zabiera ca�� energi� `EM / I` oraz energi� pozosta�ych uczestnik�w kolizji zabijaj�c ich przy tym.

### Realizacja

Mr�wki w projekcie poruszaj� si� na dwa sposoby:
* za pomoc� losowego algorytmu,
* za pomoc� algorytmu znanego z automatu Mr�wki Langtona.

Aby nie zaciemnia� przekazu eksperymentu kod �r�d�owy dla obu rozwi�za� zosta� umieszczony na ko�cu sprawozdania. Na uwag� zas�uguj� 4 funkcje:
* `fixCollisionsFair()`
* `fixCollisionsAltruistic()`
* `fixCollisionsBad()`
* `fixCollisionsVeryBad()`.
Funkcje te rozwi�zuj� kolizje na 4 r�ne sposoby, opisane we wst�pie.

W przyk�adach stworzy�em �wiat o wymiarach 96x64, a liczb� mr�wego ustali�em na 100. Mr�wki w zale�no�ci od tego czy maj� du�o energii czy ma�o mog� by� bardzo czerwone lub jasnoczerwone.

Demo projektu dost�pne jest pod adresem: http://pprzetacznik.github.io gdzie mo�na uruchomi� przyk�ad z Mr�wk� Langtona z  rozwi�zywaniem kolizji w spos�b altruistyczny.

Kody dost�pne na ko�cu sprawozdania mo�na r�wnie� uruchomi� na stronie https://sanojian.github.io/cellauto.

### Wnioski z projektu

Modele zosta�y przetestowane pod wzgl�dem d�ugo�ci �ycia. Zauwa�alne jest to, �e spos�b poruszania mr�wek ca�kowicie zmienia wyniki.

| algorytm rozwi�zywania kolizji | losowy algorytm poruszania | poruszanie wg zasad automatu Mr�wki Langtona |
|--------------------------------|----------------------------|----------------------------------------------|
| sprawiedliwy                   | 3215                       | program si� nie ko�czy                       |
| altruistyczny                  | 6144                       | program si� nie ko�czy                       |
| z�y                            | 1405                       | 5299                                         |
| bardzo z�y                     | 3232                       | 1368                                         |

Wyniki te s� przyk�adowe, zdaj� sobie spraw�, �e ilo�� eksperyment�w nie jest wystarczaj�ca do tego, �eby wysuwa� daleko id�ce wnioski naukowe niemniej jednak poni�sze wnioski r�wnie� mog� wyda� si� ciekawe.

#### Mr�wki poruszaj�ce si� w spos�b losowy

W przypadku losowego algorytmu poruszania si� mo�na zauwa�y�, �e altruistyczny model mo�e �y� d�u�ej. Mo�e to by� zwi�zane z tym, �e dziel�c energi� zakumulowan� w taki spos�b, �eby wyr�wna� energi� wszystkich mr�wek zwi�kszamy prawdopodobie�stwo tego, �e mr�wki ponownie wejd� z kim� w kolizj� i si�gn� po energi� zakumulowan�. W przypadku podej�� egoistycznych faktycznie jaka� mr�wka osi�gnie wi�ksz� energi�, jednak je�eli wymr� pozosta�e mr�wki to najsilniejsza mr�wka nie b�dzie mia�a z kim wej�� w kolizj�, �eby si�gn�� do energi zakumulowanej uk�adu i powi�kszy� swoj� energi�, aby d�u�ej prze�y�. W przypadku "bardzo z�ego" sposobu rozwi�zywania konfliktu mo�emy zauwa�y�, �e jedna mr�wka dominuje inne mr�wki, �eby przez wi�kszo�� swojego �ycia by� sama i umrze� w samotno�ci. W obu sposobach rozwi�zywania konflikt�w za pomoc� metod "z�ej" oraz "bardzo z�ej" uk�ad bardzo szybko staje si� rzadki. W przypadku metod "sprawiedliwej" oraz "altruistycznej" mo�na zaobserwowa�, �e mr�wki wymieraj� wsp�lnie, ale dlatego, �e nie potrafi� wej�� ze sob� w kolizj�.

Poni�szy zrzut ekranu prezentuje stadium pocz�tkowe modelu.
![first picture](http://student.agh.edu.pl/~smarter/upload/uploads/projekt_random.png)

Poni�szy zrzut ekranu prezentuje stadium ko�cowe modelu.
![first picture](http://student.agh.edu.pl/~smarter/upload/uploads/projekt_random2.png)

#### Mr�wki poruszaj�ce si� zgodnie z automatem Mrowka Langtona

W przypadku rozwi�zania z Mr�wk� Langtona mamy mr�wki, kt�re chodz� po trawie. Czasami wpadaj� na siebie i nadpisuj� swoj� wzajemn� prac�. Z tabeli �ycia mr�wek mo�na wywnioskowa�, �e w przypadku u�ycia "z�ego" sposobu rozwi�zywania kolizji mr�wki �yj� d�u�ej ni� w przypadku "bardzo z�ego". By� mo�e w przypadku tego drugiego sposobu mr�wki ju� na samym pocz�tku si� eliminuj� nawzajem nie daj�c sobie zbyt wiele mo�liwo�ci do p�niejszego stworzenia kolizji i si�gni�cia do energi zakumulowanej uk�adu. W przypadku algorytm�w "sprawiedliwego" oraz "altruistycznego" warto zwr�ci� uwag� na fakt, �e dwie mr�wki wpadaj� we wsp�lny uk�ad kiedy cyklicznie wchodz� ze sob� w kolizj� za ka�dym razem pobieraj�c energi� zakumulowan� uk�adu. W przypadku takich uk�ad�w mr�wki zostan� zawsze dokarmione i nigdy nie umr�. Pod adresem: http://pprzetacznik.github.io mo�na samemu wygenerowa� sobie taki przypadek.

Poni�szy zrzut ekranu prezentuje stadium pocz�tkowe modelu.
![first picture](http://student.agh.edu.pl/~smarter/upload/uploads/projekt_zdj�cie_2.png)

Poni�szy zrzut ekranu prezentuje stadium ko�cowe modelu (typowe dla algorytm�w "z�ego" oraz "bardzo z�ego").
![first picture](http://student.agh.edu.pl/~smarter/upload/uploads/projekt_zdj�cie_1.png)

Poni�sze zrzuty ekranu prezentuj� stadium kiedy uk�ad wpada w sytuacj� w kt�rej zawsze si�ga do energii zakumulowanej przez co nigdy nie umrze.
![first picture](http://student.agh.edu.pl/~smarter/upload/uploads/projekt_zdj�cie_altruistic_block.png)
![first picture](http://student.agh.edu.pl/~smarter/upload/uploads/projekt_zdj�cie_fair_block.png)


### Kody �r�d�owe

#### Mr�wki poruszaj� si� losowo

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
			console.log("Mr�wka " + antsInCollisions[i] + " otrzyma�a " + gained_energy + " energii");
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
			console.log("Mr�wka " + antsInCollisions[i] + " otrzyma�a " + gained_energy + " energii");
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
		console.log("Mr�wka " + antsInCollisions[strongest_ant] + " otrzyma�a " + energy + " energii");
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
		console.log("Mr�wka " + antsInCollisions[strongest_ant] + " otrzyma�a " + energy + " energii");
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
				console.log("Liczba obiekt�w: " + M);
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
					console.log("MINʣO: " + step + " krok�w od pocz�tku");
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

#### Mr�wki poruszaj� si� zgodnie z zasadami automatu Mr�wka Langtona

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
			console.log("Mr�wka " + antsInCollisions[i] + " otrzyma�a " + gained_energy + " energii");
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
			console.log("Mr�wka " + antsInCollisions[i] + " otrzyma�a " + gained_energy + " energii");
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
		console.log("Mr�wka " + antsInCollisions[strongest_ant] + " otrzyma�a " + energy + " energii");
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
		console.log("Mr�wka " + antsInCollisions[strongest_ant] + " otrzyma�a " + energy + " energii");
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
				console.log("Liczba obiekt�w: " + M);
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
					console.log("MINʣO: " + step + " krok�w od pocz�tku");
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