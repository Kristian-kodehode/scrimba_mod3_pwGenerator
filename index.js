const car = {
  make: "Ford",
  model: "GT40",
  year: 1972,
  color: "Sky-blue",
  mileage: 1200,
};

function drive(car) {
  console.log(
    "The " +
      car.make +
      car.model +
      " is driving. The mileage is now " +
      car.mileage
  );
}

drive(car);
