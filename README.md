# Bike Servicing API

## Project Summary

The Bike Service Management API is a RESTful service designed to handle the management of customers, bikes, and service records. It enables adding, retrieving, updating, and deleting customers and bikes, as well as creating, retrieving, and updating service records for bikes. The API also includes a feature for tracking overdue or pending services.

## Live Backend Link

## Tech Stack

- **Backend Framework**: Node.js with Express.js
- **Database**: PostgreSQL
- **Error Handling**: Standardized error responses
- **API Testing**: Postman

## Setup Guide

1. **Clone the repository**:
   ```bash
   git clone https://github.com/RittikaDev/bike-servicing-api-postgre
   cd bike-servicing-api-postgre
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up environment variables (create a .env file in the root directory)**:
   ```bash
   npm install
   ```
4. **Install dependencies**:
   ```bash
   DATABASE_URL=
   PORT=
   ```

## Key Features

### 1. **Customer Management**

- **Create a new customer**

  - `POST /api/customers`
  - **Request Body**:
    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "123-456-7890"
    }
    ```
  - **Response**:
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

- **Get all customers**

  - `GET /api/customers`
  - **Response**:
    ```json
    {
      "success": true,
      "message": "Customers fetched successfully",
      "data": [
        {
          "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194",
          "name": "John Doe",
          "email": "john.doe@example.com",
          "phone": "123-456-7890",
          "createdAt": "2025-04-11T12:34:56.789Z"
        },
        {...}
      ]
    }
    ```

- **Get a specific customer by ID**

  - `GET /api/customers/{customerId}`
  - **Response**:
    ```json
    {
      "success": true,
      "message": "Customer fetched successfully",
      "data": {
        "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone": "123-456-7890",
        "createdAt": "2025-04-11T12:34:56.789Z"
      }
    }
    ```

- **Update customer details**

  - `PUT /api/customers/{customerId}`
  - **Request Body**:
    ```json
    {
      "name": "Johnathan Doe",
      "phone": "555-123-9999"
    }
    ```
  - **Response**:
    ```json
    {
      "success": true,
      "message": "Customer updated successfully",
      "data": {
        "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194",
        "name": "Johnathan Doe",
        "email": "john.doe@example.com",
        "phone": "555-123-9999",
        "createdAt": "2025-04-11T12:34:56.789Z"
      }
    }
    ```

- **Delete a customer**
  - `DELETE /api/customers/{customerId}`
  - **Response**:
    ```json
    {
      "success": true,
      "message": "Customer deleted successfully"
    }
    ```

### 2. **Bike Management**

- **Add a new bike**

  - `POST /api/bikes`
  - **Request Body**:
    ```json
    {
      "brand": "Yamaha",
      "model": "R15",
      "year": 2022,
      "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
    }
    ```
  - **Response**:
    ```json
    {
      "success": true,
      "message": "Bike added successfully",
      "data": {
        "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
        "brand": "Yamaha",
        "model": "R15",
        "year": 2022,
        "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
      }
    }
    ```

- **Get all bikes**

  - `GET /api/bikes`
  - **Response**:
    ```json
    {
      "success": true,
      "message": "Bikes fetched successfully",
      "data": [
        {
          "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
          "brand": "Yamaha",
          "model": "R15",
          "year": 2022,
          "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
        }
      ]
    }
    ```

- **Get a specific bike by ID**
  - `GET /api/bikes/{bikeId}`
  - **Response**:
    ```json
    {
      "success": true,
      "message": "Bike fetched successfully",
      "data": {
        "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
        "brand": "Yamaha",
        "model": "R15",
        "year": 2022,
        "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
      }
    }
    ```

### 3. **Service Management**

- **Create a service record**

  - `POST /api/services`
  - **Request Body**:
    ```json
    {
      "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
      "serviceDate": "2025-04-11T10:00:00.000Z",
      "description": "Oil change",
      "status": "pending"
    }
    ```
  - **Response**:
    ```json
    {
      "success": true,
      "message": "Service record created successfully",
      "data": {
        "serviceId": "a1e4a182-c80d-4ff7-9a3d-873929f9d0e6",
        "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
        "serviceDate": "2025-04-11T10:00:00.000Z",
        "completionDate": null,
        "description": "Oil change",
        "status": "pending"
      }
    }
    ```

- **Get all service records**

  - `GET /api/services`
  - **Response**:
    ```json
    {
      "success": true,
      "message": "Service records fetched successfully",
      "data": [
        {
          "serviceId": "a1e4a182-c80d-4ff7-9a3d-873929f9d0e6",
          "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
          "serviceDate": "2025-04-11T10:00:00.000Z",
          "completionDate": null,
          "description": "Oil change",
          "status": "pending"
        }
      ]
    }
    ```

- **Get a specific service record**

  - `GET /api/services/{serviceId}`
  - **Response**:
    ```json
    {
      "success": true,
      "message": "Service record fetched successfully",
      "data": {
        "serviceId": "a1e4a182-c80d-4ff7-9a3d-873929f9d0e6",
        "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
        "serviceDate": "2025-04-11T10:00:00.000Z",
        "completionDate": null,
        "description": "Oil change",
        "status": "pending"
      }
    }
    ```

- **Mark a service as completed**

  - `PUT /api/services/{serviceId}/complete`
  - **Request Body (optional: custom completionDate, else default to now)**:
    ```json
    {
      "completionDate": "2025-04-11T15:30:00.000Z"
    }
    ```
  - **Response**:
    ```json
    {
      "success": true,
      "message": "Service marked as completed",
      "data": {
        "serviceId": "a1e4a182-c80d-4ff7-9a3d-873929f9d0e6",
        "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
        "serviceDate": "2025-04-11T10:00:00.000Z",
        "completionDate": "2025-04-11T15:30:00.000Z",
        "description": "Oil change",
        "status": "done"
      }
    }
    ```

- **Get Pending or Overdue Services (older than 7 days)**
  - `GET /api/services/status`
  - **Response**:
    ```json
    {
      "success": true,
      "message": "Overdue or pending services fetched successfully",
      "data": [
        {
          "serviceId": "a1e4a182-c80d-4ff7-9a3d-873929f9d0e6",
          "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
          "serviceDate": "2025-04-01T10:00:00.000Z",
          "completionDate": null,
          "description": "Oil change",
          "status": "pending"
        },
        {
          "serviceId": "c9bce2ff-44a2-4b3f-bef7-04f5e35d21d2",
          "bikeId": "a3d2d3cb-f72f-4b63-a7d6-20e57bc30ef1",
          "serviceDate": "2025-04-02T12:00:00.000Z",
          "completionDate": null,
          "description": "Engine tuning",
          "status": "in-progress"
        }
      ]
    }
    ```

## Error Handling

### Standardized Error Response Structure

When an error occurs, the response will follow a standardized structure to provide relevant information.

#### Example:

```json
{
  "success": false,
  "status": 404,
  "message": "Customer not found",
  "error": "Not Found"
}
```
