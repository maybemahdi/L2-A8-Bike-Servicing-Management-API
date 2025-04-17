# Bike Servicing API

## Overview

The Bike Servicing Management API is a RESTful service that simplifies the management of customers, bikes, and their service records. It provides endpoints to create, retrieve, update, and delete customer and bike information, as well as manage service records. Additionally, it includes functionality to track overdue or pending services.

## Live API

The API is hosted on Vercel and can be accessed via the following link:

🔗 [https://bike-servicing.vercel.app](https://bike-servicing.vercel.app)

> **Note**: This is a REST API and can be tested using tools like Postman or integrated with a frontend application.

## Technology Stack

- **Backend**: Node.js with Express.js
- **Database**: PostgreSQL
- **Error Handling**: Consistent and structured error responses
- **API Testing**: Postman

## Getting Started

1. **Clone the repository**:
	```bash
	git clone https://github.com/RittikaDev/bike-servicing-api-postgre
	cd bike-servicing-api-postgre
	```

2. **Install dependencies**:
	```bash
	npm install
	```

3. **Configure environment variables**:
	Create a `.env` file in the root directory and add the following:
	```env
	DATABASE_URL=
	PORT=
	```

4. **Run the application**:
	```bash
	npm start
	```

## Features

### Customer Management

- **Add a Customer**  
  Endpoint: `POST /api/customers`  
  Example Request:
  ```json
  {
	 "name": "John Doe",
	 "email": "john.doe@example.com",
	 "phone": "123-456-7890"
  }
  ```
  Example Response:
  ```json
  {
	 "success": true,
	 "message": "Customer created successfully",
	 "data": {
		"customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194",
		"name": "John Doe",
		"email": "john.doe@example.com",
		"phone": "123-456-7890",
		"createdAt": "2025-04-11T12:34:56.789Z"
	 }
  }
  ```

- **Retrieve All Customers**  
  Endpoint: `GET /api/customers`  
  Example Response:
  ```json
  {
	 "success": true,
	 "message": "Customers fetched successfully",
	 "data": [...]
  }
  ```

- **Retrieve a Customer by ID**  
  Endpoint: `GET /api/customers/:customerId`  
  Example Response:
  ```json
  {
	 "success": true,
	 "message": "Customer fetched successfully",
	 "data": {...}
  }
  ```

- **Update Customer Details**  
  Endpoint: `PUT /api/customers/:customerId`  
  Example Request:
  ```json
  {
	 "name": "Johnathan Doe",
	 "phone": "555-123-9999"
  }
  ```
  Example Response:
  ```json
  {
	 "success": true,
	 "message": "Customer updated successfully",
	 "data": {...}
  }
  ```

- **Delete a Customer**  
  Endpoint: `DELETE /api/customers/:customerId`  
  Example Response:
  ```json
  {
	 "success": true,
	 "message": "Customer deleted successfully"
  }
  ```

### Bike Management

- **Add a Bike**  
  Endpoint: `POST /api/bikes`  
  Example Request:
  ```json
  {
	 "brand": "Yamaha",
	 "model": "R15",
	 "year": 2022,
	 "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
  }
  ```
  Example Response:
  ```json
  {
	 "success": true,
	 "message": "Bike added successfully",
	 "data": {...}
  }
  ```

- **Retrieve All Bikes**  
  Endpoint: `GET /api/bikes`  
  Example Response:
  ```json
  {
	 "success": true,
	 "message": "Bikes fetched successfully",
	 "data": [...]
  }
  ```

- **Retrieve a Bike by ID**  
  Endpoint: `GET /api/bikes/:bikeId`  
  Example Response:
  ```json
  {
	 "success": true,
	 "message": "Bike fetched successfully",
	 "data": {...}
  }
  ```

### Service Management

- **Create a Service Record**  
  Endpoint: `POST /api/services`  
  Example Request:
  ```json
  {
	 "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
	 "serviceDate": "2025-04-11T10:00:00.000Z",
	 "description": "Oil change",
	 "status": "pending"
  }
  ```
  Example Response:
  ```json
  {
	 "success": true,
	 "message": "Service record created successfully",
	 "data": {...}
  }
  ```

- **Retrieve All Service Records**  
  Endpoint: `GET /api/services`  
  Example Response:
  ```json
  {
	 "success": true,
	 "message": "Service records fetched successfully",
	 "data": [...]
  }
  ```

- **Retrieve a Service Record by ID**  
  Endpoint: `GET /api/services/:serviceId`  
  Example Response:
  ```json
  {
	 "success": true,
	 "message": "Service record fetched successfully",
	 "data": {...}
  }
  ```

- **Mark a Service as Completed**  
  Endpoint: `PUT /api/services/:serviceId/complete`  
  Example Request:
  ```json
  {
	 "completionDate": "2025-04-11T15:30:00.000Z"
  }
  ```
  Example Response:
  ```json
  {
	 "success": true,
	 "message": "Service marked as completed",
	 "data": {...}
  }
  ```

- **Retrieve Pending or Overdue Services**  
  Endpoint: `GET /api/services/status`  
  Example Response:
  ```json
  {
	 "success": true,
	 "message": "Overdue or pending services fetched successfully",
	 "data": [...]
  }
  ```

## Error Handling

All errors follow a consistent structure to provide clarity and debugging information.

Example Error Response:
```json
{
  "success": false,
  "status": 404,
  "message": "Customer not found",
  "error": "Not Found"
}
```
