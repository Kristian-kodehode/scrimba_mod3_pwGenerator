const cars = [0, 1, 2, 3];
cars[0] = "volvo";
cars[1] = "Ford";
cars[2] = "Mercedes";
cars[3] = "Opel";

const car = {
  make: cars[0],
  model: "F40",
  year: 1994,
};

function presentingCard(car) {
  console.log(
    "My dreamcar is a " +
      car.make +
      car.model +
      " that was made in " +
      car.year +
      " ! "
  );
}

presentingCard(car);
