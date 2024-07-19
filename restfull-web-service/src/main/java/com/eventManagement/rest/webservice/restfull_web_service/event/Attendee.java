package com.eventManagement.rest.webservice.restfull_web_service.event;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;

@Entity
public class Attendee {
	
	protected Attendee() {
		
	}
	
	@Id
	@GeneratedValue
	private int id;
	
	private String name;
	
	private String email;
	
	private String phone;
	
	private String registerType;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "event_id")
    private Event event;
	
	public Attendee(String name, String email, String phone, String registerType) {
		super();
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.registerType = registerType;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	

	public Event getEvent() {
		return event;
	}

	public void setEvent(Event event) {
		this.event = event;
	}

	public String getRegisterType() {
		return registerType;
	}

	public void setRegisterType(String registerType) {
		this.registerType = registerType;
	}

	@Override
	public String toString() {
		return "Attendee [name=" + name + ", email=" + email + ", phone=" + phone + ", registerType=" + registerType
				+ "]";
	}
	
	

}
