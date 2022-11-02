import React from 'react'

const carprops=(props)=> {
  return (
    <div>
 <h5>Model:{props.car.model}</h5>
 <h5>Company:{props.car.company}</h5>
 <h5>Price:{props.car.price}</h5>
 <h5>Congiguration:color:{props.car.configuration.color}</h5>
 <h5>fule:{props.car.configuration.fuel}</h5>
 <h5>cylinder:{props.car.configuration.cylinder}</h5>
 <h5>fuelTankCapacity:{props.car.configuration.fuelTankCapacity}</h5>
 <h5>mileage:city:{props.car.configuration.mileage.city}</h5>
 <h5>highway:{props.car.configuration.mileage.highway}</h5>
 <h5>features:{props.car.features}</h5>
 
 

    </div>
  )
}

export default carprops
