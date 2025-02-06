# Captain Authentication Endpoints

## Login Captain
`POST /api/v1/captains/login`

Authenticates a captain and returns a JWT token.

### Request Body
```json
{
    "email": "string",
    "password": "string"
}
```

### Validation
- `email`: Must be a valid email address
- `password`: Minimum 6 characters

### Response
**Success (201)**
```json
{
    "token": "JWT_TOKEN",
    "captain": {
        // Captain object details
    }
}
```

**Error (400/401)**
```json
{
    "message": "Invalid email and password"
}
```

## Get Captain Profile
`GET /api/v1/captains/profile`

Retrieves the profile of the authenticated captain.

### Headers
```
Authorization: Bearer <JWT_TOKEN>
```

### Response
**Success (200)**
```json
{
    "captain": {
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "status": "active|inactive",
        "vehicle": {
            "color": "string",
            "plate": "string",
            "capacity": "number",
            "vehicleType": "car|motorcycle|auto"
        }
    }
}
```

**Error (401)**
```json
{
    "message": "Unauthorized"
}
```

## Logout Captain
`GET /api/v1/captains/logout`

Logs out the captain by invalidating the JWT token.

### Headers
```
Authorization: Bearer <JWT_TOKEN>
```

### Response
**Success (200)**
```json
{
    "message": "Captain logged out"
}
```

**Error (401)**
```json
{
    "message": "Unauthorized"
}
```

> Note: All endpoints may return a 401 status if the token is invalid or blacklisted.
