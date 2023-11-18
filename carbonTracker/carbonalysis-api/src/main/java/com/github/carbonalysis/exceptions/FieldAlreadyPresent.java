package com.github.carbonalysis.exceptions;

public class FieldAlreadyPresent extends RuntimeException{

  public FieldAlreadyPresent() {
  }

  public FieldAlreadyPresent(String message) {
    super(message);
  }

}
