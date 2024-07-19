package com.eventManagement.rest.webservice.restfull_web_service.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventManagement.rest.webservice.restfull_web_service.event.Attendee;

public interface AttendeeRepository extends JpaRepository<Attendee, Integer>{

}
