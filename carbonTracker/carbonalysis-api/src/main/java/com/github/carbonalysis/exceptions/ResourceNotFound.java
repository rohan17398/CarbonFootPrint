package com.github.carbonalysis.exceptions;

public class ResourceNotFound extends RuntimeException {
  public ResourceNotFound() {
  }

  public ResourceNotFound(String message) {
    super(message);
  }
}
