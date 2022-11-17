package com.wagner.vendasmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wagner.vendasmeta.entities.Sale;
import com.wagner.vendasmeta.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;

	public List<Sale> findSales() {
		return repository.findAll();
	}
}
