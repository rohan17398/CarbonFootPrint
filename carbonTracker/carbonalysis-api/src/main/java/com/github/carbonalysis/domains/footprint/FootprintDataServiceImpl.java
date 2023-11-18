package com.github.carbonalysis.domains.footprint;

import com.github.carbonalysis.exceptions.ResourceNotFound;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

@Service
public class FootprintDataServiceImpl implements FootprintDataService{

  private final Logger logger = LoggerFactory.getLogger(FootprintDataServiceImpl.class);

  @Autowired
  private FootprintRepository footprintRepository;

  @Override
  public List<FootprintData> getAll() {
    List<FootprintData> footprintList = new ArrayList<>();

    try {
      footprintList = footprintRepository.findAll();
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
    }

    return footprintList;
  }

  @Override
  public FootprintData getById(Long id) {
    Optional<FootprintData> footprint = Optional.ofNullable(null);

    try {
      footprint = footprintRepository.findById(id);
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
    }

    if(footprint.isEmpty()) {
      throw new ResourceNotFound();
    } else {
      return footprint.get();
    }
  }

  @Override
  public List<FootprintData> getByUserId(int id) {
    List<FootprintData> footprint = footprintRepository.findByUserId(id);
    return footprint;
  }

  @Override
  public FootprintData createFootprintData(FootprintDataStrings footprintDataStrings) {
    FootprintData footprintData = analyzeStrings(footprintDataStrings);

    FootprintData postedFootprint = new FootprintData();

    try {
      postedFootprint = footprintRepository.save(footprintData);
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
    }

    return postedFootprint;
  }

  @Override
  public FootprintData updateFootprintData(Long id, FootprintData footprintData) {
    FootprintData updatedFootprint = null;

    try {
      Optional<FootprintData> footprintToUpdate = footprintRepository.findById(id);
      if (footprintToUpdate.isEmpty()) {
        throw new ResourceNotFound();
      } else {
        updatedFootprint = footprintRepository.save(footprintData);
      }
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
    }

    return updatedFootprint;
  }

  @Override
  public void deleteFootprintData(Long id) {
    try {
      footprintRepository.deleteById(id);
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
    }
  }

  public FootprintData analyzeStrings(FootprintDataStrings footprintDataStrings) {
    FootprintData footprintData = new FootprintData();

    footprintData.setUserId(footprintDataStrings.getUserId());

    int total = 0;

    List<String> household = Arrays.asList(footprintDataStrings.getHouseholdSize());
    if(household.contains("1")) {
      total += 14;
      footprintData.setHousehold_size(14);
    } else if(household.contains("2")) {
      total += 12;
      footprintData.setHousehold_size(12);
    } else if(household.contains("3")) {
      total += 10;
      footprintData.setHousehold_size(10);
    } else if(household.contains("4")) {
      total += 8;
      footprintData.setHousehold_size(8);
    } else if(household.contains("5")) {
      total += 6;
      footprintData.setHousehold_size(6);
    } else if(household.contains("6")) {
      total += 4;
      footprintData.setHousehold_size(4);
    } else {
      total += 2;
      footprintData.setHousehold_size(2);
    }

    List<String> homes = Arrays.asList(footprintDataStrings.getHomeSize());
    if(homes.contains("Apartment")) {
      total += 2;
      footprintData.setHome_size(2);
    } else if(homes.contains("Small house")) {
      total += 4;
      footprintData.setHome_size(4);
    } else if(homes.contains("Medium house")) {
      total += 7;
      footprintData.setHome_size(7);
    } else {
      total += 10;
      footprintData.setHome_size(10);
    }

    List<String> food = Arrays.asList(footprintDataStrings.getFood());
    if(food.contains("Domestic meat daily")) {
      total += 10;
      footprintData.setFood(10);
    } else if (food.contains("Domestic meat few times per week")) {
      total += 8;
      footprintData.setFood(8);
    } else if(food.contains("Vegetarian")) {
      total += 4;
      footprintData.setFood(4);
    } else if(food.contains("Vegan")) {
      total += 2;
      footprintData.setFood(2);
    } else if(food.contains("Mostly prepackaged")) {
      total += 12;
      footprintData.setFood(12);
    } else if(food.contains("Good balance of fresh and convenience food")) {
      total += 6;
      footprintData.setFood(6);
    } else {
      total += 2;
      footprintData.setFood(2);
    }

    int machineTotal = 0;
    List<String> water1 = Arrays.asList(footprintDataStrings.getWater1());
    if(water1.contains("Dishwasher/Washing machine 1-3 times per week")) {
      machineTotal += 1;
      footprintData.setWater(1);
    } else if(water1.contains("Dishwasher/Washing machine 4-9 times per week")) {
      machineTotal += 2;
      footprintData.setWater(2);
    } else {
      machineTotal += 3;
      footprintData.setWater(3);
    }

    List<String> water2 = Arrays.asList(footprintDataStrings.getWater2());
    if(water2.contains("No dishwasher/washing machine")) {
      machineTotal = 0;
      footprintData.setWater(0);
    } else {
      machineTotal *= 2;
      footprintData.setWater(footprintData.getWater()*2);
    }

    total += machineTotal;

    List<String> purchases = Arrays.asList(footprintDataStrings.getPurchases());
    if(purchases.contains("<3")) {
      total += 4;
      footprintData.setPurchases(4);
    } else if(purchases.contains("Between 3 and 5 new items")) {
      total += 6;
      footprintData.setPurchases(6);
    } else if(purchases.contains("Between 5 and 7 new items")) {
      total += 8;
      footprintData.setPurchases(8);
    } else if(purchases.contains(">7 new items")) {
      total += 10;
      footprintData.setPurchases(10);
    } else {
      total += 2;
      footprintData.setPurchases(2);
    }

    List<String> waste = Arrays.asList(footprintDataStrings.getWaste());
    if(waste.contains("0.5 or less garbage can per week")) {
      total += 5;
      footprintData.setWaste(5);
    } else if(waste.contains("1 garbage can per week")) {
      total += 20;
      footprintData.setWaste(20);
    } else if(waste.contains("2 garbage cans per week")) {
      total += 30;
      footprintData.setWaste(30);
    } else if(waste.contains("3 garbage cans per week")) {
      total += 40;
      footprintData.setWaste(40);
    } else {
      total += 50;
      footprintData.setWaste(50);
    }

    List<String> transportation = Arrays.asList(footprintDataStrings.getTransportation());
    if(transportation.contains("<1,000 miles driven per year")) {
      total += 4;
      footprintData.setTransportation(4);
    } else if(transportation.contains("1,000 - 10,000 miles driven per year")) {
      total += 6;
      footprintData.setTransportation(6);
    } else if(transportation.contains("10,000 - 15,000 miles driven per year")) {
      total += 10;
      footprintData.setTransportation(10);
    } else if(transportation.contains("More than 15,000 miles driven per year")) {
      total += 12;
      footprintData.setTransportation(12);
    } else {
      total += 0;
      footprintData.setTransportation(0);
    }

    List<String> publicTransit = Arrays.asList(footprintDataStrings.getPublicTransit());
    if(publicTransit.contains("<1,000 miles per year")) {
      total += 2;
      footprintData.setPublic_transit(2);
    } else if(publicTransit.contains("1,000 - 10,000 miles per year")) {
      total += 4;
      footprintData.setPublic_transit(4);
    } else if(publicTransit.contains("10,000 - 15,000 miles per year")) {
      total += 6;
      footprintData.setPublic_transit(6);
    } else if(publicTransit.contains("15,000 - 10,000 miles per year")) {
      total += 10;
      footprintData.setPublic_transit(10);
    } else if(publicTransit.contains("More than 20,000 miles per year")) {
      total += 12;
      footprintData.setPublic_transit(12);
    } else {
      total += 0;
      footprintData.setPublic_transit(0);
    }

    List<String> flights = Arrays.asList(footprintDataStrings.getFlights());
    if(flights.contains("Short distances (within your state) only in one year")) {
      total += 2;
      footprintData.setFlights(2);
    } else if(flights.contains("Further distances (nearby states)")) {
      total += 6;
      footprintData.setFlights(6);
    } else {
      total += 20;
      footprintData.setFlights(20);
    }

    int recyclingTotal = 24 - footprintDataStrings.getRecycling();

    total += recyclingTotal;

    footprintData.setRecycle(recyclingTotal);
    footprintData.setTotal_footprint(total);

    return footprintData;
  }
}
