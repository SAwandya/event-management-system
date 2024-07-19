package com.eventManagement.rest.webservice.restfull_web_service.event;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

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
	

	public Event(String name, LocalDate date, String description, String location) {
		super();
		this.name = name;
		this.date = date;
		this.description = description;
		this.location = location;
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
