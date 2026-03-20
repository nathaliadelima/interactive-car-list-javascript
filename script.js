const carros = [
  "Uno",
  "Fusca",
  "BMW",
  "Gol",
  "Ferrari",
  "Sandero",
  "Nissan",
  "Audi",
];

let i = 0;

while (i < carros.length) {
  alert(carros[i]);

  let continuar = confirm("Deseja ver o próximo carro?");

  if (!continuar) {
    break;
  }

  i++;
}
