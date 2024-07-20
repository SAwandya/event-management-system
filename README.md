Event Management System

Introduction

Event Management System is a web application designed to efficiently manage events. Users can create,
update, delete, and view events. Attendees can register for events, and administrators can manage the list of events and attendees.

Features
-Create, update, and delete events
-View a list of events
-Register attendees for events
-Manage attendees
-Responsive design

Tech Stack
-Frontend: React, React Router
-Backend: Spring Boot, Spring Data JPA
-Database: MySQL
-Build Tool: Maven

Setup and Installation
-Prerequisites
-Node.js
-Java JDK
-MySQL

Frontend Setup

1. Clone the repository

https://github.com/SAwandya/event-management-system.git

2. Navigate to the frontend directory

cd event-management-system/event-management-system-frontend

3. Install dependencies

npm install

4. Start the development server

npm run dev

Backend Setup

1. Navigate to the backend directory

cd event-management-system/restfull-web-service

3. Build the project

mvn clean install

4. Run the application

mvn spring-boot:run

Usage

1. Open your browser and navigate to http://127.0.0.1:5173/ to access the frontend.
2. Use the interface to create and manage events and attendees.

API Endpoints

Events
-GET /events - Retrieve all events
-POST /event - Create a new event
-PUT /events/{id} - Update an existing event
-DELETE /events/{id} - Delete an event

Attendees
-POST /event/{id}/attendee - Register an attendee for an event

Contact
-Created by Sachila awandya manamperi - feel free to contact me!
