package com.eventManagement.rest.webservice.restfull_web_service.event;

import java.net.URI;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.eventManagement.rest.webservice.restfull_web_service.jpa.AttendeeRepository;
import com.eventManagement.rest.webservice.restfull_web_service.jpa.EventRepository;


@RestController
public class EventResorce {
	
	private EventRepository eventRepository;
	
	private AttendeeRepository attendeeRepository;
	
	public EventResorce(EventRepository eventRepository) {
		
		this.eventRepository = eventRepository;
	}
	
	@GetMapping(path="/events")
	public List<Event> retriveAllEvents(){
		
		return eventRepository.findAll();
	}
	
	@GetMapping(path="/events/{id}/attendees")
	public List<Attendee> retriveAllAttendeesForEvent(@PathVariable int id){
		
		Optional<Event> event = eventRepository.findById(id);
		
		return event.get().getAttendees();
		
	}
	
	@PostMapping("/event")
	public Event createEvent(@RequestBody Event event) {
		
		Event saveEvent = eventRepository.save(event);

		return saveEvent;
		
	}
	
	@DeleteMapping("/events/{id}")
	public void deleteEvent(@PathVariable int id) {
		
		eventRepository.deleteById(id);
	}
	
	@PostMapping("/event/{id}/attendee")
	public Attendee registerAttendee(@RequestBody Attendee attendee, @PathVariable int id) {

	    Optional<Event> optionalEvent = eventRepository.findById(id);
	    
//	    if (!optionalEvent.isPresent()) {
//	        throw new ResourceNotFoundException("Event not found with id " + id);
//	    }
	    
	    Event event = optionalEvent.get();

//	    attendee.getEvents().add(event);

	    Attendee savedAttendee = attendeeRepository.save(attendee);

	    event.getAttendees().add(savedAttendee);
	    eventRepository.save(event);

	    return savedAttendee;
	}
	

}
