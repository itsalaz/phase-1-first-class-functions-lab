let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'] 
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
  console.log(selectingDrivers[0](drivers))
  console.log(selectingDrivers[1](drivers))


  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier
    }

  }
    const fareDoubler = createFareMultiplier(2)
    const fareTripler = createFareMultiplier(3)

    const selectDifferentDrivers = function(drivers, driverSelector) {
      return driverSelector(drivers)
    }
    console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers))
    console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers))