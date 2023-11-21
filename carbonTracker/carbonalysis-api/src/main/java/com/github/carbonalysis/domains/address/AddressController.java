package com.github.carbonalysis.domains.address;

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
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/address")
@CrossOrigin(origins = "http://localhost:3000")
public class AddressController {
  private final Logger logger = LoggerFactory.getLogger(AddressController.class);

  @Autowired
  private AddressService addressService;

  @GetMapping
  public ResponseEntity<List<Address>> getAllAddresses() {
    logger.info("Get all request received");
    return new ResponseEntity<>(addressService.getAll(), HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Address> getAddressById(@PathVariable Long id) {
    logger.info(" Get all request received");
    return new ResponseEntity<>(addressService.getById(id), HttpStatus.OK);
  }

  @PostMapping
  public ResponseEntity<Address> createAddress(
      @Valid @RequestBody Address address) {
    logger.info(" Post request received");
    return new ResponseEntity<>(addressService.createAddress(address),
        HttpStatus.CREATED);
  }

  @PutMapping("/{id}")
  public ResponseEntity<Address> updateAddress(@Valid @RequestBody Address address,
      @PathVariable Long id) {
    logger.info(" Put request received");
    return new ResponseEntity<>(addressService.updateAddress(id, address),
        HttpStatus.OK);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Address> deleteAddress(@PathVariable Long id) {
    logger.info(" Delete request received");
    addressService.deleteAddress(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}
