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


# `/api/v1/users/login` Endpoint Documentation

## Endpoint Description
The `/api/v1/users/login` endpoint is used to authenticate an existing user. It accepts the user's email and password, validates the credentials, and generates an authentication token if the login is successful.

## Request Type
`POST`

## Request URL
```
/api/v1/users/login
```

## Request Headers
- `Content-Type: application/json`

## Request Body
The endpoint expects the following JSON payload:

```json
{
  "email": "<string>",
  "password": "<string>"
}
```

### Field Requirements
| Field       | Type   | Required | Description                           |
|-------------|--------|----------|---------------------------------------|
| `email`     | String | Yes      | A valid email address.                |
| `password`  | String | Yes      | The user's account password.          |

## MongoDB Collection Field Requirements
The user data is stored in a MongoDB collection with the following structure:

### Collection Name: `users`

| Field       | Type      | Required | Description                                    |
|-------------|-----------|----------|------------------------------------------------|
| `_id`       | ObjectId  | Yes      | Unique identifier for the user document.      |
| `firstname` | String    | Yes      | The first name of the user.                   |
| `lastname`  | String    | Yes      | The last name of the user.                    |
| `email`     | String    | Yes      | A unique and valid email address for the user.|
| `password`  | String    | Yes      | The hashed password of the user.              |
| `createdAt` | Date      | Yes      | The date and time when the user was created.  |
| `updatedAt` | Date      | No       | The date and time when the user was last updated.|
| `tokens`    | [String]  | No       | An array of authentication tokens issued to the user. |

### Indexes
- `email`: Unique index to ensure no duplicate users are registered with the same email address.

## Response
The endpoint responds with appropriate HTTP status codes and messages.

### Success Response
**Status Code:** `200 OK`

**Body:**
```json
{
  "token": "<authToken>",
  "user": {
    "_id": "<userId>",
    "firstname": "<string>",
    "lastname": "<string>",
    "email": "<string>"
  }
}
```

### Error Responses
1. **Validation Error:**
   **Status Code:** `400 Bad Request`

   **Body:**
   ```json
   {
     "errors": [
       {
         "msg": "<validationErrorMessage>",
         "param": "<fieldName>"
       }
     ]
   }
   ```

2. **Missing Password:**
   **Status Code:** `400 Bad Request`

   **Body:**
   ```json
   {
     "message": "Password is required"
   }
   ```

3. **Invalid Credentials:**
   **Status Code:** `401 Unauthorized`

   **Body:**
   ```json
   {
     "message": "Invalid email or password"
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
  "email": "johndoe@example.com",
  "password": "securePassword123"
}
```

### Example Success Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjIxYTdiNmMzZDJjMWI0ZTIzNDU2NyIsImlhdCI6MTY4NzA3NzAwMH0.l7HkBnz5WupcYX6aTk0Okp3tNcdJ93Ck0U8URrA9Gzg",
  "user": {
    "_id": "63f21a7b6c3d2c1b4e234567",
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com"
  }
}
```

## Notes
- Ensure that the `Content-Type` header is set to `application/json`.
- Make sure the password is correct and matches the one stored in the database.
- Use the token in the `Authorization` header for subsequent authenticated requests.

# `/api/v1/users/logout` Endpoint Documentation

## Endpoint Description
The `/api/v1/users/logout` endpoint allows authenticated users to log out from their account. It clears the authentication token from cookies and blacklists the token to prevent further use.

## Request Type
`GET`

## Request URL
```
/api/v1/users/logout
```

## Request Headers
- `Authorization: Bearer <token>` (required if the token is not stored in cookies)

## Request
This endpoint does not require a request body.

## MongoDB Collection Field Requirements
The blacklisted token is stored in a MongoDB collection with the following structure:

| Field       | Type     | Required | Description                                |
|-------------|----------|----------|--------------------------------------------|
| `_id`       | ObjectId | Yes      | Unique identifier for the blacklist entry. |
| `token`     | String   | Yes      | The token that has been blacklisted.       |
| `createdAt` | Date     | Yes      | The date and time when the token was added.|

## Response
The endpoint responds with appropriate HTTP status codes and messages.

### Success Response
**Status Code:** `200 OK`

**Body:**
```json
{
  "message": "Logged out"
}
```

### Error Responses
1. **Unauthorized Access:**
   **Status Code:** `401 Unauthorized`

   **Body:**
   ```json
   {
     "message": "Authentication required"
   }
   ```

2. **Internal Server Error:**
   **Status Code:** `500 Internal Server Error`

   **Body:**
   ```json
   {
     "success": false,
     "message": "An error occurred. Please try again later."
   }
   ```

## Notes
- Ensure the `Authorization` header or cookie containing the token is provided.
- The endpoint clears the `token` cookie and blacklists the token in the database.
- Blacklisted tokens cannot be reused for authentication.

## Example Request
### Request Headers:
```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjIxYTdiNmMzZDJjMWI0ZTIzNDU2NyIsImlhdCI6MTY4NzA3NzAwMH0.l7HkBnz5WupcYX6aTk0Okp3tNcdJ93Ck0U8URrA9Gzg"
}
```

### Example Success Response:
```json
{
  "message": "Logged out"
}
```

# Captain API Documentation

## `/api/v1/captains/register` Endpoint Documentation

### Endpoint Description
The `/api/v1/captains/register` endpoint is used to register a new captain. It accepts captain and vehicle details as input, validates the data, and creates a new captain account in the database.

### Request Type
`POST`

### Request URL
```
/api/v1/captains/register
```

### Request Headers
- `Content-Type: application/json`

### Request Body
The endpoint expects the following JSON payload:

```json
{
  "fullname": {
    "firstname": "<string>",
    "lastname": "<string>"
  },
  "email": "<string>",
  "password": "<string>",
  "vehicle": {
    "color": "<string>",
    "plate": "<string>",
    "capacity": "<number>",
    "vehicleType": "car" | "motorcycle" | "auto"
  }
}
```

### Field Requirements
| Field                 | Type   | Required | Description                                    |
|----------------------|--------|----------|------------------------------------------------|
| `fullname.firstname` | String | Yes      | Min length: 3 characters                       |
| `fullname.lastname`  | String | No       | Min length: 3 characters if provided           |
| `email`             | String | Yes      | Valid email format                             |
| `password`          | String | Yes      | Min length: 6 characters                       |
| `vehicle.color`     | String | Yes      | Min length: 3 characters                       |
| `vehicle.plate`     | String | Yes      | Min length: 3 characters                       |
| `vehicle.capacity`  | Number | Yes      | Minimum value: 1                               |
| `vehicle.vehicleType`| String | Yes      | Must be one of: "car", "motorcycle", "auto"    |

### Response
The endpoint responds with appropriate HTTP status codes and messages.

### Success Response
**Status Code:** `200 OK`

**Body:**
```json
{
  "token": "<authToken>",
  "newCaptain": {
    "_id": "<captainId>",
    "fullname": {
      "firstname": "<string>",
      "lastname": "<string>"
    },
    "email": "<string>",
    "vehicle": {
      "color": "<string>",
      "plate": "<string>",
      "capacity": "<number>",
      "vehicleType": "<string>"
    },
    "status": "inactive",
    "createdAt": "<timestamp>",
    "updatedAt": "<timestamp>"
  }
}
```

### Error Responses
1. **Validation Error:**
   **Status Code:** `400 Bad Request`

   **Body:**
   ```json
   {
     "errors": [
       {
         "msg": "<validationErrorMessage>",
         "param": "<fieldName>",
         "location": "body"
       }
     ]
   }
   ```

2. **Captain Already Exists:**
   **Status Code:** `400 Bad Request`

   **Body:**
   ```json
   {
     "message": "Captain already exist"
   }
   ```

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secure123",
  "vehicle": {
    "color": "Blue",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Example Success Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "newCaptain": {
    "_id": "63f21a7b6c3d2c1b4e234567",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Blue",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive",
    "createdAt": "2023-07-20T10:30:00.000Z",
    "updatedAt": "2023-07-20T10:30:00.000Z"
  }
}
```

### Notes
- The password is automatically hashed before storing in the database
- A JWT token is generated and returned upon successful registration
- The captain's initial status is set to "inactive"
- The system prevents duplicate email registrations

# Captain Authentication Endpoints

## Login Captain
Authenticate a captain and receive an authentication token.

### Endpoint
`POST /api/v1/captains/login`

### Request Headers
- `Content-Type: application/json`

### Request Body
```json
{
  "email": "string",
  "password": "string"
}
```

### Field Requirements
| Field      | Type   | Required | Description                    |
|------------|--------|----------|--------------------------------|
| `email`    | String | Yes      | Valid email format            |
| `password` | String | Yes      | Min length: 6 characters      |

### Success Response
**Status Code:** `201 Created`

**Body:**
```json
{
  "token": "<authToken>",
  "captain": {
    "_id": "<captainId>",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "status": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleType": "string"
    }
  }
}
```

### Error Responses
**Status Code:** `400/401`
```json
{
  "message": "Invalid email and password"
}
```

## Get Captain Profile
Retrieve the authenticated captain's profile information.

### Endpoint
`GET /api/v1/captains/profile`

### Request Headers
- `Authorization: Bearer <token>`

### Success Response
**Status Code:** `200 OK`

**Body:**
```json
{
  "captain": {
    "_id": "<captainId>",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "status": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleType": "string"
    }
  }
}
```

### Error Response
**Status Code:** `401 Unauthorized`
```json
{
  "message": "Unauthorized"
}
```

## Logout Captain
End the captain's authenticated session.

### Endpoint
`GET /api/v1/captains/logout`

### Request Headers
- `Authorization: Bearer <token>`

### Success Response
**Status Code:** `200 OK`
```json
{
  "message": "Captain logged out"
}
```

### Error Response
**Status Code:** `401 Unauthorized`
```json
{
  "message": "Unauthorized"
}
```

### Notes
- All authenticated endpoints require a valid JWT token in the Authorization header
- Tokens are automatically blacklisted upon logout
- The system maintains session state through cookies and token validation
