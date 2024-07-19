package com.eventManagement.rest.webservice.restfull_web_service.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventManagement.rest.webservice.restfull_web_service.event.Event;

public interface EventRepository extends JpaRepository<Event, Integer>{

	
}
