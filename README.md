# 🏡 WanderLust - Property Listing Platform

WanderLust is a full-stack property listing web application inspired by platforms like Airbnb. Users can explore different properties, view detailed information, create listings, upload property images, and manage their own listings.

The project was built using Node.js, Express.js, MongoDB, Mongoose, EJS, Bootstrap, Cloudinary, and Passport.js.

---

## 🚀 Live Demo

🔗 Live Website: https://wanderlust-89wa.onrender.com

🔗 GitHub Repository: https://github.com/shampawar02/WanderLust-Property-Listing-Platform.git
---

## 📌 Features

### 👤 User Authentication
- User signup and login
- User logout
- Password authentication using Passport.js
- Protected routes for logged-in users
- Only listing owners can edit or delete their listings

### 🏠 Property Listings
- View all available properties
- View detailed information about a property
- Create new property listings
- Edit existing listings
- Delete listings
- Display property price, location, country, and description

### 🖼️ Image Upload
- Upload property images using Multer
- Store images using Cloudinary
- Display uploaded images directly from Cloudinary
- Replace property images while editing a listing

### ⭐ Reviews
- Add reviews to listings
- Give ratings from 1 to 5
- Display reviews on listing pages
- Delete reviews

### 🔎 Search
- Search listings by property name
- Display matching listings in a dropdown
- Select a listing from search suggestions
- Open the selected listing directly

### 🛡️ Validation & Error Handling
- Server-side validation using Joi
- Custom error handling
- Async error handling using `wrapAsync`
- Flash messages for success and error notifications
- Protected routes using authentication and authorization middleware

### 📱 Responsive Design
- Responsive property cards
- Bootstrap-based UI
- Mobile-friendly layout
- Responsive navbar
- Sticky footer

---

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- EJS
- EJS-Mate
- Font Awesome

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose
- MongoDB Atlas

### Authentication
- Passport.js
- Passport-Local
- Express Session
- Connect-Mongo

### Image Storage
- Multer
- Cloudinary
- Multer-Storage-Cloudinary

### Validation & Utilities
- Joi
- Method-Override
- Connect-Flash
- WrapAsync
- Custom Express Error Handling

### Deployment
- Render
- Git
- GitHub

---

## 📂 Project Structure

```text
WanderLust/
│
├── controllers/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── views/
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   ├── reviews/
│   └── users/
│
├── public/
│   ├── css/
│   └── js/
│
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── cloudConfig.js
├── middleware.js
├── app.js
├── package.json
├── .env
└── README.md
