package com.github.carbonalysis.domains.footprint;

import java.util.List;

public interface FootprintDataService {
  List<FootprintData> getAll();

  FootprintData getById(Long id);

  List<FootprintData> getByUserId(int id);

  FootprintData createFootprintData(FootprintDataStrings footprintDataStrings);

  FootprintData updateFootprintData(Long id, FootprintData footprintData);

  void deleteFootprintData(Long id);
}
