package com.wagner.vendasmeta.services;


import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.wagner.vendasmeta.entities.Sale;
import com.wagner.vendasmeta.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;

	public Page<Sale> findSales(String minDate, String maxDate, Pageable pageable) {
		
		LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
		
		LocalDate min = minDate.equals("")? today.minusMonths(36) : LocalDate.parse(minDate);
		LocalDate max = maxDate.equals("")? today : LocalDate.parse(maxDate);
		
		
		return repository.findSales(min, max, pageable);
	}
}
