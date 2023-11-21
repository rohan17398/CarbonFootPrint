package com.github.carbonalysis.domains.emissions;

public class Fuel {
  private Double totalMiles;

  private Double mpg;

  public Fuel() {
  }

  public Fuel(Double totalMiles, Double mpg) {
    this.totalMiles = totalMiles;
    this.mpg = mpg;
  }

  public Double getTotalMiles() {
    return totalMiles;
  }

  public void setTotalMiles(Double totalMiles) {
    this.totalMiles = totalMiles;
  }

  public Double getMpg() {
    return mpg;
  }

  public void setMpg(Double mpg) {
    this.mpg = mpg;
  }

  @Override
  public String toString() {
    return "Fuel{" +
        "totalMiles=" + totalMiles +
        ", mpg=" + mpg +
        '}';
  }
}
