const car = {
  make: "Ferrari ",
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
