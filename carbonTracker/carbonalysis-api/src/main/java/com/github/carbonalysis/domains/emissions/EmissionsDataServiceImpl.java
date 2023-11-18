package com.github.carbonalysis.domains.emissions;

import com.github.carbonalysis.exceptions.ResourceNotFound;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

@Service
public class EmissionsDataServiceImpl implements EmissionsDataService{

  private final Logger logger = LoggerFactory.getLogger(EmissionsDataServiceImpl.class);

  @Autowired
  private EmissionsRepository emissionsRepository;

  @Override
  public List<EmissionsData> getAll() {
    List<EmissionsData> emissionsList = new ArrayList<>();

    try {
      emissionsList = emissionsRepository.findAll();
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
    }

    return emissionsList;
  }

  @Override
  public EmissionsData getById(Long id) {
    Optional<EmissionsData> emissions = Optional.ofNullable(null);

    try {
      emissions = emissionsRepository.findById(id);
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
    }

    if(emissions.isEmpty()) {
      throw new ResourceNotFound();
    } else {
      return emissions.get();
    }
  }

  @Override
  public List<EmissionsData> getByUserId(int id) {
    List<EmissionsData> emissions = emissionsRepository.findByUserId(id);
    return emissions;
  }

  @Override
  public EmissionsData createEmissionsData(EmissionsDataStrings emissionsDataStrings) {
    EmissionsData emissionsData = analyzeStrings(emissionsDataStrings);

    EmissionsData postedEmissions = null;

    try {
      postedEmissions = emissionsRepository.save(emissionsData);
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
    }

    return postedEmissions;
  }

  @Override
  public EmissionsData updateEmissionsData(Long id, EmissionsData emissionsData) {
    EmissionsData updatedEmissionsData = null;

    try {
      Optional<EmissionsData> emissionsToUpdate = emissionsRepository.findById(id);
      if(emissionsToUpdate.isEmpty()) {
        throw new ResourceNotFound();
      } else {
        updatedEmissionsData = emissionsRepository.save(emissionsData);
      }
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
    }

    return updatedEmissionsData;
  }

  @Override
  public void deleteEmissionsData(Long id) {
    try {
      emissionsRepository.deleteById(id);
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
    }
  }

  public EmissionsData analyzeStrings(EmissionsDataStrings emissionsDataStrings) {
    EmissionsData emissionsData = new EmissionsData();

    emissionsData.setUserId(emissionsDataStrings.getUserId());

    Double total = 0.0;

    if(emissionsDataStrings.getCar().equals("Hybrid or electric vehicle")) {
      total += 2;
      emissionsData.setCar(2.0);
    } else if(emissionsDataStrings.getCar().equals("Compact/economy-sized car")){
      total += 5;
      emissionsData.setCar(5.0);
    } else if(emissionsDataStrings.getCar().equals("Medium/sedan car")) {
      total += 9;
      emissionsData.setCar(9.0);
    } else {
      total += 12;
      emissionsData.setCar(12.0);
    }

    Double fuelUsage = emissionsDataStrings.getFuel().getTotalMiles() / emissionsDataStrings.getFuel().getMpg();

    Double EmissionsPounds = fuelUsage * 22;

    total += EmissionsPounds / 2000;

    emissionsData.setFuel(EmissionsPounds / 2000);

    if(emissionsDataStrings.getUtility().getFuel() != 0) {
      Double pounds = emissionsDataStrings.getUtility().getFuel() * 22;
      total += pounds / 2000;
      emissionsData.setUtility(pounds / 2000);
    } else if(emissionsDataStrings.getUtility().getKilowatt() != 0) {
      Double pounds = emissionsDataStrings.getUtility().getKilowatt() * 1.85;
      total += pounds / 2000;
      emissionsData.setUtility(pounds / 2000);
    } else if(emissionsDataStrings.getUtility().getNaturalGas() != 0) {
      Double pounds = emissionsDataStrings.getUtility().getNaturalGas() * 13.466;
      total += pounds / 2000;
      emissionsData.setUtility(pounds / 2000);
    } else {
      Double pounds = emissionsDataStrings.getUtility().getPropane() * 13;
      total += pounds / 2000;
      emissionsData.setUtility(pounds / 2000);
    }

    total -= emissionsDataStrings.getOffsets();
    emissionsData.setOffsets(emissionsDataStrings.getOffsets());
    emissionsData.setTotal_emissions(total);

    return emissionsData;
  }
}
