export const carbonFootprintQuestions = [
  {
    label: 'Number of members of your household',
    name: 'householdSize',
    options: [
      '1','2','3','4','5','6','>6'
    ]
  },
  {
    label: 'Size of home',
    name: 'homeSize',
    options: [
      'Apartment',
      'Small house',
      'Medium house',
      'Large house'
    ]
  },
  {
    label: 'Food choices',
    name: 'food',
    options: [
      'Domestic meat daily',
      'Domestic meat few times per week',
      'Vegetarian',
      'Vegan',
      'Mostly prepackaged',
      'Good balance of fresh and convenience food',
      'Only fresh food'
    ]
  },
  {
    label: 'Water consumption',
    name: 'water1',
    options: [
      'Dishwasher/Washing machine 1-3 times per week',
      'Dishwasher/Washing machine 4-9 times per week',
      'Dishwasher/Washing machine >9 times per week',
    ]
  },
  {
    label: 'Do you own a dishwasher/washing machine',
    name: 'water2',
    options: [
      'No dishwasher/washing machine',
      'Own a dishwasher/washing machine'
    ]
  },
  {
    label: 'Household purchases per year (furniture, electronics, other household gadgets)',
    name: 'purchases',
    options: [
      '<3',
      'Between 3 and 5 new items',
      'Between 5 and 7 new items',
      '>7 new items',
      'Nothing or only secondhand items'
    ]
  },
  {
    label: 'Waste',
    name: 'waste',
    options: [
      '0.5 or less garbage can per week',
      '1 garbage can per week',
      '2 garbage cans per week',
      '3 garbage cans per week',
      '4 garbage cans per week'
    ]
  },
  {
    label: 'Transportation',
    name: 'transportation',
    options: [
      '<1,000 miles driven per year',
      '1,000 - 10,000 miles driven per year',
      '10,000 - 15,000 miles driven per year',
      'More than 15,000 miles driven per year',
      'No car'
    ]
  },
  {
    label: 'Public transportation',
    name: 'publicTransit',
    options: [
      '<1,000 miles per year',
      '1,000 - 10,000 miles per year',
      '10,000 - 15,000 miles per year',
      '15,000 - 20,000 miles per year',
      'More than 20,000 miles per year',
      'No public transportation'
    ]
  },
  {
    label: 'Flights',
    name: 'flights',
    options: [
      'Short distances (within your state) only in one year',
      'Further distances (nearby states)',
      'Far (other continents)'
    ]
  },
  {
    label: 'Recycle',
    name: 'recycle'
  }
];

export const recycling = {
  glass: 'Glass',
  plastic: 'Plastic',
  paper: 'Paper',
  aluminum: 'Aluminum',
  steel: 'Steel',
  foodWaste: 'Food waste (composting)',
  none: 'No recycling'
};

export const co2Emissions = [
  {
    label: 'Owns a vehicle',
    name: 'vehicle',
    options: [
      'Hybrid or electric vehicle',
      'Compact/economy-sized car',
      'Medium/sedan car',
      'Large/SUV/Truck'
    ]
  },
  {
    label: 'Total fuel usage',
    name: 'fuel',
  },
  {
    label: 'Monthly utility bills',
    name: 'utility',
  },
  {
    label: 'Carbon offsets',
    name: 'offsets',
  }
];

export const inputQuestions = [
  {
    label: 'Total fuel usage',
    name: 'fuel',
    options: [
      'Total miles driven',
      'Miles per gallon'
    ]
  },
  {
    label: 'Monthly utility bills',
    name: 'utility',
    options: [
      'Kilowatt hours',
      'Natural gas usage (therms)',
      'Propane gallons',
      'Fuel gallons'
    ]
  },
  {
    label: 'Carbon offsets',
    name: 'offsets',
    options: [
      'How many trees have you planted?'
    ]
  },
]