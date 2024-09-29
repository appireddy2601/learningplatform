# Learning Platform

A learning platform where instructors can upload courses, and students can enroll, track progress, and stream video lectures. This project is built using a **React** front-end, **Node.js/Express** back-end, and **MongoDB** for the database. Video streaming is integrated with **AWS S3 + CloudFront**.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Instructor functionality to upload and manage courses.
- Students can enroll in courses and track their progress.
- Video streaming using AWS S3 + CloudFront.
- Progress tracking for each course.
- RESTful API for managing courses, enrollment, and progress.

## Technologies Used

- **Frontend**: React, JavaScript, HTML, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose
- **Video Storage**: AWS S3
- **Video Delivery**: AWS CloudFront

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (local instance or MongoDB Atlas)
- AWS S3 bucket and CloudFront distribution (for video streaming)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/learning-platform.git
Install dependencies for both frontend and backend:
cd server
npm install
