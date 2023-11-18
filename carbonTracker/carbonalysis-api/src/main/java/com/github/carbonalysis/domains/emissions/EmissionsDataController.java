package com.github.carbonalysis.domains.emissions;

import com.github.carbonalysis.domains.footprint.FootprintData;
import java.util.List;
import javax.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/emissions")
@CrossOrigin(origins = "http://localhost:3000")
public class EmissionsDataController {
  private final Logger logger = LoggerFactory.getLogger(EmissionsDataController.class);

  @Autowired
  private EmissionsDataService emissionsDataService;

  @GetMapping
  public ResponseEntity<List<EmissionsData>> getAllEmissions() {
    logger.info("Get all request received");
    return new ResponseEntity<>(emissionsDataService.getAll(), HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<EmissionsData> getEmissionsById(@PathVariable Long id) {
    logger.info(" Get all request received");
    return new ResponseEntity<>(emissionsDataService.getById(id), HttpStatus.OK);
  }

  @GetMapping("/data/{id}")
  public ResponseEntity<List<EmissionsData>> getEmissionsByUserId(@PathVariable int id) {
    logger.info("Get emissions by user id request received");
    return new ResponseEntity<>(emissionsDataService.getByUserId(id), HttpStatus.OK);
  }

  @PostMapping
  public ResponseEntity<EmissionsData> createEmissions(
      @Valid @RequestBody EmissionsDataStrings emissionsData) {
    logger.info(" Post request received");
    return new ResponseEntity<>(emissionsDataService.createEmissionsData(emissionsData),
        HttpStatus.CREATED);
  }

  @PutMapping("/{id}")
  public ResponseEntity<EmissionsData> updateEmissions(@Valid @RequestBody EmissionsData emissionsData,
      @PathVariable Long id) {
    logger.info(" Put request received");
    return new ResponseEntity<>(emissionsDataService.updateEmissionsData(id, emissionsData),
        HttpStatus.OK);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<EmissionsData> deleteEmissions(@PathVariable Long id) {
    logger.info(" Delete request received");
    emissionsDataService.deleteEmissionsData(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}
