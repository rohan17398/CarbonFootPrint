package com.github.carbonalysis.domains.footprint;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FootprintRepository extends JpaRepository<FootprintData, Long> {
  List<FootprintData> findByUserId(int id);
}
