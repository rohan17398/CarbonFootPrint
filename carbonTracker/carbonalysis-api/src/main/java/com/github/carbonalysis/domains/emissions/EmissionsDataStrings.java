package com.github.carbonalysis.domains.emissions;

public class EmissionsDataStrings {
  private int userId;

  private String car;

  private Fuel fuel;

  private Utilit utility;

  private Double offsets;

  public EmissionsDataStrings() {
  }

  public EmissionsDataStrings(int userId, String car,
      Fuel fuel, Utilit utility, Double offsets) {
    this.userId = userId;
    this.car = car;
    this.fuel = fuel;
    this.utility = utility;
    this.offsets = offsets;
  }

  public int getUserId() {
    return userId;
  }

  public void setUserId(int userId) {
    this.userId = userId;
  }

  public String getCar() {
    return car;
  }

  public void setCar(String car) {
    this.car = car;
  }

  public Fuel getFuel() {
    return fuel;
  }

  public void setFuel(Fuel fuel) {
    this.fuel = fuel;
  }

  public Utilit getUtility() {
    return utility;
  }

  public void setUtility(Utilit utility) {
    this.utility = utility;
  }

  public Double getOffsets() {
    return offsets;
  }

  public void setOffsets(Double offsets) {
    this.offsets = offsets;
  }

  @Override
  public String toString() {
    return "EmissionsDataStrings{" +
        "user_id=" + userId +
        ", car='" + car + '\'' +
        ", fuel=" + fuel +
        ", utility=" + utility +
        ", offsets=" + offsets +
        '}';
  }
}
