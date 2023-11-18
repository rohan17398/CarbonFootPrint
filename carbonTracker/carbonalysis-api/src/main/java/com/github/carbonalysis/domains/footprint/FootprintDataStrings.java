package com.github.carbonalysis.domains.footprint;

import java.util.Arrays;

public class FootprintDataStrings {
  private int userId;

  private String householdSize;

  private String homeSize;

  private String food;

  private String water1;

  private String water2;

  private String purchases;

  private String waste;

  private String transportation;

  private String publicTransit;

  private String flights;

  private int recycling;

  public FootprintDataStrings() {
  }

  public FootprintDataStrings(int userId, String householdSize, String homeSize,
      String food, String water1, String water2, String purchases, String waste,
      String transportation, String publicTransit, String flights, int recycling) {
    this.userId = userId;
    this.householdSize = householdSize;
    this.homeSize = homeSize;
    this.food = food;
    this.water1 = water1;
    this.water2 = water2;
    this.purchases = purchases;
    this.waste = waste;
    this.transportation = transportation;
    this.publicTransit = publicTransit;
    this.flights = flights;
    this.recycling = recycling;
  }

  @Override
  public String toString() {
    return "FootprintDataStrings{" +
        "userId=" + userId +
        ", householdSize='" + householdSize + '\'' +
        ", homeSize='" + homeSize + '\'' +
        ", food='" + food + '\'' +
        ", water1='" + water1 + '\'' +
        ", water2='" + water2 + '\'' +
        ", purchases='" + purchases + '\'' +
        ", waste='" + waste + '\'' +
        ", transportation='" + transportation + '\'' +
        ", publicTransit='" + publicTransit + '\'' +
        ", flights='" + flights + '\'' +
        ", recycling=" + recycling +
        '}';
  }

  public int getUserId() {
    return userId;
  }

  public void setUserId(int userId) {
    this.userId = userId;
  }

  public String getHouseholdSize() {
    return householdSize;
  }

  public void setHouseholdSize(String householdSize) {
    this.householdSize = householdSize;
  }

  public String getHomeSize() {
    return homeSize;
  }

  public void setHomeSize(String homeSize) {
    this.homeSize = homeSize;
  }

  public String getFood() {
    return food;
  }

  public void setFood(String food) {
    this.food = food;
  }

  public String getWater1() {
    return water1;
  }

  public void setWater1(String water1) {
    this.water1 = water1;
  }

  public String getWater2() {
    return water2;
  }

  public void setWater2(String water2) {
    this.water2 = water2;
  }

  public String getPurchases() {
    return purchases;
  }

  public void setPurchases(String purchases) {
    this.purchases = purchases;
  }

  public String getWaste() {
    return waste;
  }

  public void setWaste(String waste) {
    this.waste = waste;
  }

  public String getTransportation() {
    return transportation;
  }

  public void setTransportation(String transportation) {
    this.transportation = transportation;
  }

  public String getPublicTransit() {
    return publicTransit;
  }

  public void setPublicTransit(String publicTransit) {
    this.publicTransit = publicTransit;
  }

  public String getFlights() {
    return flights;
  }

  public void setFlights(String flights) {
    this.flights = flights;
  }

  public int getRecycling() {
    return recycling;
  }

  public void setRecycling(int recycling) {
    this.recycling = recycling;
  }
}
