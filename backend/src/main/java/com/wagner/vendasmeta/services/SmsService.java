package com.wagner.vendasmeta.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import com.wagner.vendasmeta.entities.Sale;
import com.wagner.vendasmeta.repositories.SaleRepository;

@Service
public class SmsService {

	@Value("${twilio.sid}")
	private String twilioSid;

	@Value("${twilio.key}")
	private String twilioKey;

	@Value("${twilio.phone.from}")
	private String twilioPhoneFrom;

	@Value("${twilio.phone.to}")
	private String twilioPhoneTo;

	@Autowired
	private SaleRepository saleRepository;
	
	public void sendSms(Long saleId) {
		
		Sale sale = saleRepository.findById(saleId).get();
		String date = sale.getDate().getMonthValue() + "/" + sale.getDate().getYear();
		String msg = "O (a) vendedor (a) " + sale.getSellerName() + " foi o destaque da empresa AC comunicações em " + date
				+ " com um total de R$ " + String.format("%.2f", sale.getAmount()); 

		Twilio.init(twilioSid, twilioKey);

		PhoneNumber to = new PhoneNumber(twilioPhoneTo);
		PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

		Message message = Message.creator(to, from, msg).create();

		System.out.println(message.getSid());
	}
}