# JSON Web Token (JWT)

JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. The token is digitally signed and contains a payload that can be verified and trusted.

## Key Components

### Header

Contains the type of token (JWT) and the algorithm used for signing.

### Payload

Claims or data that the token carries, such as user identity or permissions.

### Signature

A digital signature generated using the header and payload, along with a secret key.

## How JWT Works

### Token Generation

A server generates a JWT by creating a header, payload, and signature.

### Token Verification

A server verifies the token by checking the signature and payload claims.

## Advantages

### Stateless

No need to store user session information on the server.

### Scalable

Easy to distribute and verify tokens across multiple servers.

### Secure

Digitally signed and tamper-proof.

## Note

This is done without any database set-up so that i can be able to learn the basics.
