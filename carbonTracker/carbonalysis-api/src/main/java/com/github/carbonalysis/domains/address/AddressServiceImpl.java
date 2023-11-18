package com.github.carbonalysis.domains.address;

import com.github.carbonalysis.exceptions.ResourceNotFound;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
//import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AddressServiceImpl implements AddressService{

  private final Logger logger = LoggerFactory.getLogger(AddressServiceImpl.class);

  @Autowired
  private AddressRepository addressRepository;

  @Override
  public List<Address> getAll() {
    List<Address> addressList = new ArrayList<>();

    try {
      addressList = addressRepository.findAll();
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
    }

    return addressList;
  }

  @Override
  public Address getById(Long id) {
    Optional<Address> address = Optional.ofNullable(null);

    try {
      address = addressRepository.findById(id);
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
    }

    if(address.isEmpty()) {
      throw new ResourceNotFound();
    } else {
      return address.get();
    }
  }

  @Override
  public Address createAddress(Address address) {
    Address postedAddress = null;

    try {
      postedAddress = addressRepository.save(address);
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
    }

    return postedAddress;
  }

  @Override
  public Address updateAddress(Long id, Address address) {
    Address updatedAddress = null;

    try {
      Optional<Address> addressToUpdate = addressRepository.findById(id);
      if(addressToUpdate.isEmpty()) {
        throw new ResourceNotFound();
      } else {
        updatedAddress = addressRepository.save(address);
      }
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
    }

    return updatedAddress;
  }

  @Override
  public void deleteAddress(Long id) {
    try {
      addressRepository.deleteById(id);
    } catch (DataAccessException e) {
      logger.error(e.getMessage());
    }
  }
}
