# `/api/v1/users/register` Endpoint Documentation

## Endpoint Description
The `/api/v1/users/register` endpoint is used to register a new user. It accepts user details as input, validates the data, and creates a new user in the database if all requirements are met.

## Request Type
`POST`

## Request URL
```
/api/v1/users/register
```

## Request Headers
- `Content-Type: application/json`

## Request Body
The endpoint expects the following JSON payload:

```json
{
  "name": "<string>",
  "email": "<string>",
  "password": "<string>",
  "confirmPassword": "<string>"
}
```

### Field Requirements
| Field            | Type   | Required | Description                         |
|------------------|--------|----------|-------------------------------------|
| `name`           | String | Yes      | The full name of the user.          |
| `email`          | String | Yes      | A valid email address.              |
| `password`       | String | Yes      | A secure password for the account.  |
| `confirmPassword`| String | Yes      | Must match the `password` field.    |

## Response
The endpoint responds with appropriate HTTP status codes and messages.

### Success Response
**Status Code:** `201 Created`

**Body:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "id": "<userId>",
    "name": "<string>",
    "email": "<string>"
  }
}
```

### Error Responses
1. **Invalid Input:**
   **Status Code:** `400 Bad Request`

   **Body:**
   ```json
   {
     "success": false,
     "message": "Invalid input data"
   }
   ```

2. **Email Already Exists:**
   **Status Code:** `409 Conflict`

   **Body:**
   ```json
   {
     "success": false,
     "message": "Email is already registered"
   }
   ```

3. **Passwords Do Not Match:**
   **Status Code:** `400 Bad Request`

   **Body:**
   ```json
   {
     "success": false,
     "message": "Passwords do not match"
   }
   ```

4. **Internal Server Error:**
   **Status Code:** `500 Internal Server Error`

   **Body:**
   ```json
   {
     "success": false,
     "message": "An error occurred. Please try again later."
   }
   ```

## Example Request
### Request Body:
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "securePassword123",
  "confirmPassword": "securePassword123"
}
```

### Example Success Response:
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "id": "63f21a7b6c3d2c1b4e234567",
    "name": "John Doe",
    "email": "johndoe@example.com"
  }
}
```

## Notes
- Ensure that the `Content-Type` header is set to `application/json`.
- Passwords should meet security requirements (e.g., minimum length, special characters) if applicable.
- Use proper error handling to provide clear feedback to users.
