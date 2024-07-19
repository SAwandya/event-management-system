package com.eventManagement.rest.webservice.restfull_web_service.event;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eventManagement.rest.webservice.restfull_web_service.jpa.EventRepository;



@RestController
public class EventResorce {
	
	private EventRepository eventRepository;
	
	public EventResorce(EventRepository eventRepository) {
		
		this.eventRepository = eventRepository;
	}
	
	@GetMapping(path="/events")
	public List<Event> retriveAllEvents(){
		
		return eventRepository.findAll();
	}

}
