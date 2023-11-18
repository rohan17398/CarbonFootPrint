package com.github.carbonalysis.domains.address;

import java.util.List;

public interface AddressService {
  List<Address> getAll();

  Address getById(Long id);

  Address createAddress(Address address);

  Address updateAddress(Long id, Address address);

  void deleteAddress(Long id);
}
