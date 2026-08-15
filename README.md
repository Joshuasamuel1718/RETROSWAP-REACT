# 🛍️ RetroSwap – Second-Hand Marketplace

RetroSwap is a full-stack second-hand marketplace application where users can **buy and sell used products**.

The application consists of a **React frontend** and a **Spring Boot REST API backend**. The backend provides APIs for authentication, product management, search and filtering, cart management, orders, user profiles, categories, and AI-assisted product search.

---

## 🚀 Features

### 👤 Authentication & User Management

* User registration
* User login
* JWT-based authentication
* Secure password handling
* User profile management
* Update user profile
* Delete user account

### 📦 Product Management

* Add products
* View all products
* View product by ID
* Update products
* Delete products
* Product image upload
* Product search
* Product filtering
* Category filtering
* Price range filtering
* Color filtering
* Keyword-based search

### 🛒 Cart Management

* Add products to cart
* View cart
* Update cart quantity
* Remove products from cart

### 📋 Order Management

* Create orders
* View user orders

### 🗂️ Categories

* Browse products by category
* Category-based product filtering

### 🤖 AI Product Search

* Natural-language product search
* Convert user search queries into product filters
* Search products based on extracted criteria

---

# 🛠️ Technologies Used

## Backend

* Java
* Spring Boot
* Spring Security
* JWT
* Spring Data JPA
* Hibernate
* REST APIs
* Maven
* MySQL

## Frontend

* React
* JavaScript
* HTML
* CSS
* Vite
* Axios
* React Router

## Tools

* IntelliJ IDEA
* VS Code
* Postman
* Git
* GitHub

---

# 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │                     │
                    │ React + JavaScript  │
                    │ Axios + Router      │
                    └──────────┬──────────┘
                               │
                               │ HTTP / REST API
                               ▼
                    ┌─────────────────────┐
                    │   Spring Boot API   │
                    │                     │
                    │    Controllers      │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      Services       │
                    │   Business Logic    │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │    Repositories     │
                    │   Spring Data JPA   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │       MySQL         │
                    └─────────────────────┘
```

---

# 📁 Project Structure

```text
RETROSWAP-REACT/
│
├── Frontend/
│   │
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── RetroSwap-Backend/
│   │
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/retroswap/
│   │   │   │       └── RetroSwap_Backend/
│   │   │   │           ├── Config/
│   │   │   │           ├── Controller/
│   │   │   │           ├── Model/
│   │   │   │           ├── Repository/
│   │   │   │           ├── Service/
│   │   │   │           └── RetroSwapBackendApplication.java
│   │   │   │
│   │   │   └── resources/
│   │   │
│   │   └── test/
│   │
│   ├── pom.xml
│   ├── mvnw
│   └── mvnw.cmd
│
└── .gitignore
```

---

# 🔐 Authentication APIs

RetroSwap uses **Spring Security and JWT authentication** to protect authenticated resources.

## Register

Creates a new user account.

```http
POST /retroswap/auth/register
```

### Example Request

```json
{
  "name": "Joshua",
  "email": "joshua@example.com",
  "password": "password123"
}
```

The backend validates the registration details and creates the user account in the database.

---

## Login

Authenticates an existing user.

```http
POST /retroswap/auth/login
```

### Example Request

```json
{
  "email": "joshua@example.com",
  "password": "password123"
}
```

After successful authentication, the backend generates a JWT token.

The token is used to access protected APIs.

```http
Authorization: Bearer <JWT_TOKEN>
```

---

## Authentication Flow

```text
                 REGISTER
                    │
                    ▼
             User Account
                 Created
                    │
                    ▼
                  LOGIN
                    │
                    ▼
          Credentials Validated
                    │
                    ▼
              JWT Generated
                    │
                    ▼
        JWT Sent With Requests
                    │
                    ▼
          Spring Security
          Validates Token
                    │
                    ▼
          Protected API Access
```

---

# 📦 Product APIs

## Get All Products

```http
GET /retroswap/products
```

Returns the available products.

---

## Get Product by ID

```http
GET /retroswap/products/{id}
```

Returns details of a specific product.

Example:

```http
GET /retroswap/products/10
```

---

## Add Product

```http
POST /retroswap/products
```

Creates a new product.

The product request can contain product information and an image.

---

## Update Product

```http
PUT /retroswap/products/{id}
```

Updates an existing product.

Example:

```http
PUT /retroswap/products/10
```

---

## Delete Product

```http
DELETE /retroswap/products/{id}
```

Deletes a product.

Example:

```http
DELETE /retroswap/products/10
```

---

# 🔎 Product Search & Filtering

RetroSwap provides product search and filtering functionality.

Users can search and filter products using:

* Keyword
* Product name
* Description
* Details
* Category
* Color
* Minimum price
* Maximum price

Example search request:

```json
{
  "keyword": "watch",
  "category": "Watches",
  "color": "black",
  "minPrice": 1000,
  "maxPrice": 10000
}
```

The backend dynamically builds the required query based on the supplied filters and returns matching products.

---

# 🤖 AI Product Search

RetroSwap also provides an AI-assisted product search feature.

```http
POST /retroswap/ai-test
```

The user can provide a natural-language query.

Example:

```text
Find me a black watch under 5000
```

The backend processes the query and extracts relevant search criteria before retrieving matching products.

This allows users to search for products without manually selecting every filter.

---

# 🗂️ Category API

## Get Products by Category

```http
GET /retroswap/product/category/{id}
```

Returns products belonging to a specific category.

Example:

```http
GET /retroswap/product/category/2
```

---

# 🛒 Cart APIs

## Get Cart

```http
GET /retroswap/cart
```

Returns the authenticated user's cart.

---

## Add Product to Cart

```http
POST /retroswap/cart
```

Adds a product to the user's cart.

---

## Update Cart

```http
PUT /retroswap/cart
```

Updates the quantity of a cart item.

---

## Remove From Cart

```http
DELETE /retroswap/cart/{id}
```

Removes an item from the cart.

Example:

```http
DELETE /retroswap/cart/5
```

---

# 📋 Order APIs

## Get Orders

```http
GET /retroswap/orders
```

Returns orders associated with the authenticated user.

---

## Create Order

```http
POST /retroswap/orders/{option}
```

Creates an order based on the user's cart and selected option.

Example:

```http
POST /retroswap/orders/1
```

---

# 👤 User Profile APIs

## Get User Profile

```http
GET /retroswap/user/profile
```

Returns the authenticated user's profile information.

---

## Update User Profile

```http
PUT /retroswap/user/profile
```

Updates the user's profile information.

---

## Delete User Profile

```http
DELETE /retroswap/user/profile
```

Deletes the authenticated user's account.

---

# 🔒 Security

The backend uses **Spring Security with JWT authentication**.

Protected requests require the JWT token in the HTTP Authorization header.

```http
Authorization: Bearer <JWT_TOKEN>
```

The authentication process is:

```text
React Frontend
      │
      │ Login Request
      ▼
Spring Security
      │
      │ Validate Credentials
      ▼
JWT Token
      │
      │ Authorization Header
      ▼
Protected REST API
      │
      ▼
Controller
      │
      ▼
Service
      │
      ▼
Repository
      │
      ▼
Database
```

---

# 🧱 Backend Architecture

The backend follows a layered architecture.

```text
Controller
     ↓
Service
     ↓
Repository
     ↓
Database
```

### Controller Layer

Handles HTTP requests and exposes REST API endpoints.

Main controllers include:

* Authentication Controller
* Product Controller
* Cart Controller
* Order Controller
* Category Controller
* User Controller
* AI Search Controller

### Service Layer

Contains the application's business logic.

Examples include:

* Authentication service
* Product service
* Cart service
* Order service
* Category service
* User service
* AI search service

### Repository Layer

Uses **Spring Data JPA** to communicate with the database.

### Model Layer

Contains entities and request/response models used by the application.

---

# 🗄️ Database

RetroSwap uses **MySQL** as its relational database.

The backend uses:

* Spring Data JPA
* Hibernate ORM
* JPA Entities
* Repository interfaces

The database stores information related to:

* Users
* Products
* Categories
* Cart items
* Orders

---

# 🖼️ Product Image Upload

The application supports product image uploads.

When a seller creates a product, product information and the corresponding image are sent to the backend.

The backend processes the uploaded image and stores the image reference with the product information.

---

# 🔗 Frontend & Backend Communication

The React frontend communicates with the Spring Boot backend through REST APIs using **Axios**.

```text
React
  │
  │ Axios
  ▼
Spring Boot REST API
  │
  ▼
Controller
  │
  ▼
Service
  │
  ▼
Repository
  │
  ▼
MySQL
```

---

# 🧪 API Testing

The REST APIs can be tested independently using **Postman**.

Example:

```http
GET http://localhost:8080/retroswap/products
```

For protected APIs:

```http
Authorization: Bearer <JWT_TOKEN>
```

Postman can be used to test:

* Authentication
* Product APIs
* Search and filtering
* Cart APIs
* Order APIs
* Profile APIs

---

# 📌 API Reference

| Module    | Method | Endpoint                           | Description                |
| --------- | ------ | ---------------------------------- | -------------------------- |
| Auth      | POST   | `/retroswap/auth/register`         | Register user              |
| Auth      | POST   | `/retroswap/auth/login`            | Login user                 |
| Products  | GET    | `/retroswap/products`              | Get all products           |
| Products  | GET    | `/retroswap/products/{id}`         | Get product                |
| Products  | POST   | `/retroswap/products`              | Add product                |
| Products  | PUT    | `/retroswap/products/{id}`         | Update product             |
| Products  | DELETE | `/retroswap/products/{id}`         | Delete product             |
| Category  | GET    | `/retroswap/product/category/{id}` | Get products by category   |
| AI Search | POST   | `/retroswap/ai-test`               | AI-assisted product search |
| Cart      | GET    | `/retroswap/cart`                  | Get cart                   |
| Cart      | POST   | `/retroswap/cart`                  | Add to cart                |
| Cart      | PUT    | `/retroswap/cart`                  | Update cart                |
| Cart      | DELETE | `/retroswap/cart/{id}`             | Remove cart item           |
| Orders    | GET    | `/retroswap/orders`                | Get orders                 |
| Orders    | POST   | `/retroswap/orders/{option}`       | Create order               |
| Profile   | GET    | `/retroswap/user/profile`          | Get profile                |
| Profile   | PUT    | `/retroswap/user/profile`          | Update profile             |
| Profile   | DELETE | `/retroswap/user/profile`          | Delete profile             |

---

# ▶️ Running the Backend

Navigate to the backend directory:

```bash
cd RetroSwap-Backend
```

Run the Spring Boot application:

```bash
mvn spring-boot:run
```

Or on Windows:

```bash
mvnw.cmd spring-boot:run
```

The backend runs on:

```text
http://localhost:8080
```

---

# ▶️ Running the Frontend

Navigate to the frontend directory:

```bash
cd Frontend
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

The frontend will run on the Vite development server.

---

# 🎯 Project Objective

The objective of RetroSwap is to build a real-world second-hand marketplace while gaining practical experience in:

* Java
* Spring Boot
* REST API development
* Spring Security
* JWT authentication
* Spring Data JPA
* Hibernate
* MySQL
* React
* Axios
* API integration
* File upload
* Search and filtering
* Layered architecture
* Git and GitHub

---

# 💡 Key Backend Concepts Implemented

* RESTful API design
* Layered architecture
* Dependency Injection
* Spring Data JPA
* Hibernate ORM
* Entity relationships
* Repository pattern
* Service layer
* DTO/request handling
* JWT authentication
* Spring Security
* Dynamic search and filtering
* Multipart file upload
* Exception handling
* Database persistence

---

# 👨‍💻 Author

## Joshua Samuel T

Java Backend Developer | Spring Boot | REST APIs | SQL

---

⭐ If you find this project useful, consider giving it a star.
