import React, { createContext, useState } from 'react';

export const carbonFootprintContext = createContext();

export const MainProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [householdSize, setHouseholdSize] = useState('');
  const [homeSize, setHomeSize] = useState('');
  const [food, setFood] = useState('');
  const [water1, setWater1] = useState('');
  const [water2, setWater2] = useState('');
  const [purchases, setPurchases] = useState('');
  const [waste, setWaste] = useState('');
  const [transportation, setTransportation] = useState('');
  const [publicTransit, setPublicTransit] = useState('');
  const [flights, setFlights] = useState('');
  const [totalFootprint, setTotalFootprint] = useState('');
  const [recycle, setRecycle] = useState({
    none: false,
    glass: false,
    plastic: false,
    paper: false,
    aluminum: false,
    steel: false,
    foodWaste: false
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [recycling, setRecycling] = useState(0);
  const [user, setUser] = useState({});

  const [car, setCar] = useState('');
  const [fuel, setFuel] = useState({
    totalMiles: 0,
    mpg: 0
  });
  const [utility, setUtility] = useState({
    kilowatt: 0,
    naturalGas: 0,
    propane: 0,
    fuel: 0
  });
  const [offsets, setOffsets] = useState('0');
  const [totalEmissions, setTotalEmissions] = useState('');

  return (
    <carbonFootprintContext.Provider
      value={{
        token, setToken,
        householdSize, setHouseholdSize,
        homeSize, setHomeSize,
        food, setFood,
        water1, setWater1,
        water2, setWater2,
        purchases, setPurchases,
        waste, setWaste,
        transportation, setTransportation,
        publicTransit, setPublicTransit,
        flights, setFlights,
        totalFootprint, setTotalFootprint,
        recycle, setRecycle,
        recycling, setRecycling,
        car, setCar,
        fuel, setFuel,
        utility, setUtility,
        offsets, setOffsets,
        totalEmissions, setTotalEmissions,
        user, setUser,
        loggedIn, setLoggedIn
      }}
    >
      {children}
    </carbonFootprintContext.Provider>
  )
};
