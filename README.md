# 💼 Job Board Platform

A modern job board platform developed using the **MERN stack** 🌐. This platform connects job seekers with employers, streamlining the hiring process through intuitive features and real-time updates.

## ✨ Features

- 📝 **Resume Upload**: Seamless resume upload and profile creation for job seekers.
- 🗂️ **Job Management**: Employers can post, and manage job listings easily.
- 🛠️ **Secure Authentication**: Role based ,Powered by **JWT** and **bcrypt.js**.
- 📊 **Dashboard Analytics**: Employer can see the applications for a given job.

## 🛠️ Tech Stack

- **Frontend**: React.js, Redux, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT), bcrypt.js

## 🚀 Installation

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the project directory**:
    ```bash
    cd job-board/Frontend/HireSphere
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Start the development server**:
    ```bash
    npm start
    ```

5. **Open the application**:
    Open your browser and navigate to `http://localhost:3000`.

6. **Set up backend**:
    Ensure you have the backend server running on `http://localhost:3000` for API requests.
💡 Usage
**🖥️ Employers:**
- Post job listings and manage applications.
- Track analytics on the dashboard.
**👩‍💼 Job Seekers:**
- Browse job opportunities.
- Apply with uploaded resumes and track application status.
## Additional Information

- **Local Storage**: The application uses local storage to store the authentication token.
- **Protected Routes**: Ensure that routes are protected based on user roles.
- **Form Handling**: Forms are managed using React's state and event handling.

# Job board Backend

## Functionalities

- **User Registration**: Allows users to register with their details and role.
- **User Login**: Authenticates users and provides a JWT token.
- **Job Form Creation**: Employers can create job listings.
- **Job Listing**: Retrieves a list of available jobs.
- **Job Application Submission**: Job seekers can submit applications for jobs.
- **Applicants List**: Employers can view a list of applicants for their job listings.

## Models

- **User Model**: Defines the schema for user data.
- **Form Model**: Defines the schema for job listings.
- **Candidate Model**: Defines the schema for job applications.

## Middlewares

- **User Authentication Middleware**: Verifies JWT tokens for protected routes.
- **Upload Middleware**: Handles file uploads for resumes.
- **Role Authorization Middleware**: Authorizes access based on user roles.

## Cloning Guidelines

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the backend directory**:
    ```bash
    cd job-board/backend
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Set up environment variables**:
    Create a `.env` file in the root of the backend directory and add the following:
    ```
    MONGODB_URI=mongodb://localhost:27017/hireSphere
    JWT_SECRET=your_jwt_secret
    ```

5. **Start the backend server**:
    ```bash
    npm start
    ```

6. **Ensure MongoDB is running**:
    Make sure you have MongoDB installed and running on your local machine.

## Additional Information

- **JWT Authentication**: The backend uses JWT for authentication and authorization.
- **File Uploads**: Resumes are uploaded and stored using Multer.
- **Error Handling**: Proper error handling is implemented for various operations.

