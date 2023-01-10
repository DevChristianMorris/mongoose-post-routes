[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7907139&assignment_repo_type=AssignmentRepo)
# 02 Exercise - Create `POST` routes using Mongoose

## Brief

Complete the following API Specification, and save the data into MongoDB using Mongoose. 

## Getting started

1. Run `npm install`
2. Run `npm start` to start the Express API server
3. Start MongoDB in Docker by opening a terminal and `copy & paste` in the following: 
```shell
docker run --name 02-exercise-mongoose-post-routes-mongo_db \
  -p 27017:27017 \
  -v 02-exercise-run-mongoose-post-routes-mongodb_data_container:/data/db \
  -d \
  mongo
``` 
NOTE: You do not need to import any data, your `POST` routes will create the data!
4. Open `./src/app.js` in VS Code. Note that some `GET` routes already exist.
5. The Mongoose Models are already created and imported to the top of `app.js`. Use them to create new documents in MongoDB. The models also automatically convert `_id` to `id`, so you do not need any transformation steps.
6. Add the `POST` routes to complete the API specification.

---

# User Story #1

- As a shopper
- I want to add a product to my wish list
- So that I can remember to purchase it later

## Acceptance criteria

- The Express route meets the API specification
- The automated tests pass for this route
- A new document is created in MongoDB each time a `POST` request is successful

---

## API specification for User Story #1

Your API should conform to the following specification.

### Create wishlist with a product added

Create a new wishlist with a product added to it.

**URL** : `/wishlists`

**Method** : `POST`

**Example request body**

```json
{
  "productId": "614abf0a93e8e80ace792ac6"
}
```

#### Success Response

**Code** : `200 OK`

**Example response body**

```json
{
  "id": "615911db8c1800bd054da479",
  "productId": "614abf0a93e8e80ace792ac6"
}
```

---

# User Story #2

- As an online grocery shopper
- I want to select and order groceries
- So I can have my groceries delivered to my house

## Acceptance criteria

- The Express route meets the API specification
- The automated tests pass for this route
- A new document is created in MongoDB each time a `POST` request is successful

## API specification for User Story #2

Your API should conform to the following specification.

### Make an order for groceries

Creates a new order with the groceries specified in the request body

**URL** : `/orders`

**Method** : `POST`

**Example request body**

```json
{
  "groceries": [
    {
      "id": "615915303a9ea9532717f95f",
      "qty": 2
    },
    {
      "id": "6159153639d0db80bed5ec74",
      "qty": 1
    }
  ]
}
```

#### Success Response

**Code** : `200 OK`

**Example response body**

```json
{
  "id": "615915933f299435c4e5b26c",
  "groceries": [
    {
      "id": "615915303a9ea9532717f95f",
      "qty": 2
    },
    {
      "id": "6159153639d0db80bed5ec74",
      "qty": 1
    }
  ]
}
```

---

# User Story #3

- As a pet owner
- I want to purchase pet insurance online
- So that I won’t have a large vet bill

## Acceptance criteria

- The Express route meets the API specification
- The automated tests pass for this route
- A new document is created in MongoDB each time a `POST` request is successful

## API specification for User Story #3

Your API should conform to the following specification.

### Create a new policy for insurance

Creates a new pet insurance policy for a customer

**URL** : `/policies`

**Method** : `POST`

**Example request body**

```json
{
  "planType": "Full",
  "petsName": "Rex",
  "customersName": "Mary Poppins",
  "expiry": "2023-03-09T11:00:00.000Z"
}
```

#### Success Response

**Code** : `200 OK`

**Example response body**

```json
{
  "id": "6159182e5a0b9fb37b2e824c",
  "planType": "Full",
  "petsName": "Rex",
  "customersName": "Mary Poppins",
  "expiry": "2023-03-09T11:00:00.000Z"
}
```

---

# Submit your Exercise

- [ ] Commits are pushed to GitHub
- [ ] Automated tests pass in GitHub
- [ ] Exercise is submitted in Google Classroom

