package com.github.carbonalysis.domains.address;

import com.github.carbonalysis.domains.users.Users;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "address")
public class Address {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank
  private String street_address;

  @NotBlank
  private String city;

  @NotBlank
  private String state;

  @NotBlank
  private String country;

  @NotBlank
  private String post_code;

  @OneToMany(targetEntity = Users.class, mappedBy = "address", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
  private Set<Users> user;

  public Address() {}

  public Address(@NotBlank String street_address,
      @NotBlank String city, @NotBlank String state,
      @NotBlank String country, @NotBlank String post_code) {
    this.street_address = street_address;
    this.city = city;
    this.state = state;
    this.country = country;
    this.post_code = post_code;
  }

  public String getStreet_address() {
    return street_address;
  }

  public void setStreet_address(String street_address) {
    this.street_address = street_address;
  }

  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public String getState() {
    return state;
  }

  public void setState(String state) {
    this.state = state;
  }

  public String getCountry() {
    return country;
  }

  public void setCountry(String country) {
    this.country = country;
  }

  public String getPost_code() {
    return post_code;
  }

  public void setPost_code(String post_code) {
    this.post_code = post_code;
  }

  @Override
  public String toString() {
    return "Address{" +
        "id=" + id +
        ", street_address='" + street_address + '\'' +
        ", city='" + city + '\'' +
        ", state='" + state + '\'' +
        ", country='" + country + '\'' +
        ", post_code='" + post_code + '\'' +
        '}';
  }
}
