package com.github.carbonalysis.domains.footprint;

import java.sql.Timestamp;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "footprint_data")
public class FootprintData {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotNull
  private int userId;

  @NotNull
  private int household_size;

  @NotNull
  private int home_size;

  @NotNull
  private int food;

  @NotNull
  private int water;

  @NotNull
  private int purchases;

  @NotNull
  private int waste;

  @NotNull
  private int recycle;

  @NotNull
  private int transportation;

  @NotNull
  private int public_transit;

  @NotNull
  private int flights;

  @NotNull
  private int total_footprint;

  public FootprintData() {
  }

  public FootprintData(@NotNull int userId, @NotNull int household_size,
      @NotNull int home_size, @NotNull int food, @NotNull int water,
      @NotNull int purchases, @NotNull int waste, @NotNull int recycle,
      @NotNull int transportation, @NotNull int public_transit,
      @NotNull int flights, @NotNull int total_footprint) {
    this.userId = userId;
    this.household_size = household_size;
    this.home_size = home_size;
    this.food = food;
    this.water = water;
    this.purchases = purchases;
    this.waste = waste;
    this.recycle = recycle;
    this.transportation = transportation;
    this.public_transit = public_transit;
    this.flights = flights;
    this.total_footprint = total_footprint;
  }

  public int getUserId() {
    return userId;
  }

  public void setUserId(int userId) {
    this.userId = userId;
  }

  public int getHousehold_size() {
    return household_size;
  }

  public void setHousehold_size(int household_size) {
    this.household_size = household_size;
  }

  public int getHome_size() {
    return home_size;
  }

  public void setHome_size(int home_size) {
    this.home_size = home_size;
  }

  public int getFood() {
    return food;
  }

  public void setFood(int food) {
    this.food = food;
  }

  public int getWater() {
    return water;
  }

  public void setWater(int water) {
    this.water = water;
  }

  public int getPurchases() {
    return purchases;
  }

  public void setPurchases(int purchases) {
    this.purchases = purchases;
  }

  public int getWaste() {
    return waste;
  }

  public void setWaste(int waste) {
    this.waste = waste;
  }

  public int getRecycle() {
    return recycle;
  }

  public void setRecycle(int recycle) {
    this.recycle = recycle;
  }

  public int getTransportation() {
    return transportation;
  }

  public void setTransportation(int transportation) {
    this.transportation = transportation;
  }

  public int getPublic_transit() {
    return public_transit;
  }

  public void setPublic_transit(int public_transit) {
    this.public_transit = public_transit;
  }

  public int getFlights() {
    return flights;
  }

  public void setFlights(int flights) {
    this.flights = flights;
  }

  public int getTotal_footprint() {
    return total_footprint;
  }

  public void setTotal_footprint(int total_footprint) {
    this.total_footprint = total_footprint;
  }

  @Override
  public String toString() {
    return "FootprintData{" +
        "id=" + id +
        ", user_id=" + userId +
        ", household_size=" + household_size +
        ", home_size=" + home_size +
        ", food=" + food +
        ", water=" + water +
        ", purchases=" + purchases +
        ", waste=" + waste +
        ", recycle=" + recycle +
        ", transportation=" + transportation +
        ", public_transit=" + public_transit +
        ", flights=" + flights +
        ", total_footprint=" + total_footprint +
        '}';
  }
}
