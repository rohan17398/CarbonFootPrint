package com.github.carbonalysis.domains.emissions;

public class Utilit {
  private Double kilowatt;

  private Double naturalGas;

  private Double propane;

  private Double fuel;

  public Utilit() {
  }

  public Utilit(Double kilowatt, Double naturalGas, Double propane, Double fuel) {
    this.kilowatt = kilowatt;
    this.naturalGas = naturalGas;
    this.propane = propane;
    this.fuel = fuel;
  }

  public Double getKilowatt() {
    return kilowatt;
  }

  public void setKilowatt(Double kilowatt) {
    this.kilowatt = kilowatt;
  }

  public Double getNaturalGas() {
    return naturalGas;
  }

  public void setNaturalGas(Double naturalGas) {
    this.naturalGas = naturalGas;
  }

  public Double getPropane() {
    return propane;
  }

  public void setPropane(Double propane) {
    this.propane = propane;
  }

  public Double getFuel() {
    return fuel;
  }

  public void setFuel(Double fuel) {
    this.fuel = fuel;
  }

  @Override
  public String toString() {
    return "Utilit{" +
        "kilowatt=" + kilowatt +
        ", naturalGas=" + naturalGas +
        ", propane=" + propane +
        ", fuel=" + fuel +
        '}';
  }
}
