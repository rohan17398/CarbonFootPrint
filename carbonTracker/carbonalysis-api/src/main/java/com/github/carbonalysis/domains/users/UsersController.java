package com.github.carbonalysis.domains.users;

import java.security.NoSuchAlgorithmException;
import java.util.List;
import javax.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UsersController {
  private final Logger logger = LoggerFactory.getLogger(UsersController.class);

  @Autowired
  private UsersService userService;

  @GetMapping
  public ResponseEntity<List<Users>> getAllUsers() {
    logger.info("Get all request received");
    return new ResponseEntity<>(userService.getAll(), HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Users> getUsersById(@PathVariable Long id) {
    logger.info(" Get all request received");
    return new ResponseEntity<>(userService.getById(id), HttpStatus.OK);
  }

  @PostMapping
  public ResponseEntity<Users> createUser(
      @Valid @RequestBody Users user) throws NoSuchAlgorithmException {
    logger.info(" Post request received");
    return new ResponseEntity<>(userService.createUser(user),
        HttpStatus.CREATED);
  }

  @PutMapping("/{id}")
  public ResponseEntity<Users> updateUser(@Valid @RequestBody Users user,
      @PathVariable Long id) {
    logger.info(" Put request received");
    return new ResponseEntity<>(userService.updateUser(id, user),
        HttpStatus.OK);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Users> deleteUser(@PathVariable Long id) {
    logger.info(" Delete request received");
    userService.deleteUser(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}
