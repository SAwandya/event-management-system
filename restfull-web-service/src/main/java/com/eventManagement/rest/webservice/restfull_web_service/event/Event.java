package com.eventManagement.rest.webservice.restfull_web_service.event;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.JoinColumn;


@Entity
public class Event {
	
	protected Event() {
		
	}
	
	@Id
	@GeneratedValue
	private Integer id;
	
	private String name;
	
	private LocalDate date;
	
	private String description;
	
	private String location;
	
	@OneToMany(mappedBy = "event", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Attendee> attendees = new ArrayList<>();

	public Event(String name, LocalDate date, String description, String location) {
		super();
		this.name = name;
		this.date = date;
		this.description = description;
		this.location = location;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public List<Attendee> getAttendees() {
		return attendees;
	}

	public void setAttendees(List<Attendee> attendees) {
		this.attendees = attendees;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	@Override
	public String toString() {
		return "Event [name=" + name + ", date=" + date + ", description=" + description + ", location=" + location
				+ "]";
	}
	
	

}
