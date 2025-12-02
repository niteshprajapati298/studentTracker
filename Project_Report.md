# STUDENT ACTIVITY TRACKER
## A Web-Based Academic Management System

---

### BCA Final Year Project Report

**Submitted in partial fulfillment of the requirements for the degree of**

**Bachelor of Computer Applications (BCA)**

---

**Submitted By:**
[Your Name]
[Roll Number]
[Session: 2023-2024]

**Under the Guidance of:**
[Guide Name]
[Designation]

---

**Department of Computer Applications**
[Your College Name]
[University Name]
[Month, Year]

---

# DECLARATION

I hereby declare that this project report titled **"Student Activity Tracker - A Web-Based Academic Management System"** submitted to [University Name] in partial fulfillment of the requirements for the award of the degree of **Bachelor of Computer Applications (BCA)** is an authentic record of my own work.

The matter presented in this report has not been submitted by me for the award of any other degree of this or any other University. This is to certify that the above statement made by the candidate is true to the best of my knowledge.

**Date:** _______________

**Place:** _______________

**Signature of Student**
[Your Name]
[Roll Number]

---

# CERTIFICATE

This is to certify that the project report titled **"Student Activity Tracker - A Web-Based Academic Management System"** is a bonafide work done by **[Your Name]**, Roll Number: **[Roll Number]** in partial fulfillment of the requirements for the award of the degree of **Bachelor of Computer Applications (BCA)** from **[University Name]** during the academic year **2023-2024**.

The project work has been carried out under my supervision and guidance.

**Date:** _______________

---

**[Guide Name]**
[Designation]
Department of Computer Applications
[College Name]

---

**[Head of Department Name]**
Head of Department
Department of Computer Applications
[College Name]

---

**External Examiner**

---

# ACKNOWLEDGEMENT

First and foremost, I would like to express my sincere gratitude to the Almighty for giving me the strength, knowledge, and opportunity to undertake this project and complete it successfully.

I am deeply grateful to my project guide, **[Guide Name]**, for providing valuable guidance and constant encouragement throughout this project. Without their support and insightful suggestions, this project would not have been possible. They have been extremely patient and helpful during every stage of this project development.

I would like to extend my heartfelt thanks to **[HOD Name]**, Head of the Department of Computer Applications, for providing the necessary facilities and support required for the completion of this project.

I am also thankful to all the faculty members of the Department of Computer Applications for their direct and indirect help during the development of this project. Their teachings and advice have helped me gain the knowledge required to complete this project successfully.

I owe a special thanks to my parents and family members for their continuous support, love, and encouragement. They have always stood by me and motivated me to work hard.

Last but not least, I would like to thank my friends and classmates who have helped me directly or indirectly in completing this project. Their suggestions and feedback have been valuable in improving this project.

**[Your Name]**
[Roll Number]

---

# ABSTRACT

In today's educational environment, students face numerous challenges in managing their academic activities effectively. With multiple subjects, assignments, attendance tracking, and personal goals to manage, students often struggle to keep everything organized. This project, titled "Student Activity Tracker," aims to provide a comprehensive solution to these challenges by offering a centralized platform where students can manage all their academic activities in one place.

The Student Activity Tracker is a modern web application developed using Next.js framework with TypeScript for the frontend and backend, MongoDB as the database, and Tailwind CSS for styling. The application provides various features including task management, attendance tracking, notes management, goal setting, and assignment submission tracking.

The main objective of this project is to help students improve their productivity and academic performance by providing them with tools to organize their daily activities, track their progress, and achieve their academic goals. The application features a user-friendly interface with a modern design that makes it easy for students to navigate and use the various features.

The project follows modern software development practices including the use of RESTful APIs, state management using Redux Toolkit, and secure authentication using JWT tokens. The application is responsive and works seamlessly on both desktop and mobile devices.

Key features of the application include:
- User authentication with secure login and registration
- Dashboard with overview of all activities and statistics
- Task management with priority levels and due dates
- Attendance tracking with calendar view
- Notes management with categories and tags
- Goal setting with progress tracking
- Assignment management with submission tracking

The project demonstrates the practical application of web development technologies and software engineering principles learned during the BCA program. It provides a real-world solution to a common problem faced by students and showcases the ability to develop a complete full-stack web application.

---

# TABLE OF CONTENTS

| Section | Page No. |
|---------|----------|
| Declaration | II |
| Certificate | III |
| Acknowledgement | IV |
| Abstract | V |
| Table of Contents | VI |
| **Chapter 1: Introduction** | 1 |
| 1.1 Project Overview | 1 |
| 1.2 Problem Statement | 2 |
| 1.3 Objectives | 3 |
| 1.4 Scope of the Project | 4 |
| 1.5 Technology Stack | 5 |
| 1.6 Organization of Report | 7 |
| **Chapter 2: Software Requirement Analysis** | 8 |
| 2.1 Introduction | 8 |
| 2.2 Problem Definition | 9 |
| 2.3 Existing System | 10 |
| 2.4 Proposed System | 11 |
| 2.5 Functional Requirements | 12 |
| 2.6 Non-Functional Requirements | 15 |
| 2.7 Hardware Requirements | 16 |
| 2.8 Software Requirements | 17 |
| 2.9 Module Description | 18 |
| **Chapter 3: Software Design** | 22 |
| 3.1 Introduction | 22 |
| 3.2 System Architecture | 23 |
| 3.3 Data Flow Diagrams | 24 |
| 3.4 UML Diagrams | 28 |
| 3.5 Database Design | 35 |
| 3.6 ER Diagram | 38 |
| **Chapter 4: Testing** | 40 |
| 4.1 Introduction | 40 |
| 4.2 Types of Testing | 41 |
| 4.3 Test Cases | 43 |
| 4.4 Black Box Testing | 45 |
| 4.5 White Box Testing | 47 |
| **Chapter 5: Implementation and User Interface** | 49 |
| 5.1 Implementation Details | 49 |
| 5.2 User Interface Screens | 50 |
| 5.3 Output Screens | 58 |
| **Chapter 6: Conclusion and Future Scope** | 62 |
| 6.1 Conclusion | 62 |
| 6.2 Limitations | 63 |
| 6.3 Future Scope | 64 |
| **References** | 65 |
| **Appendix A: Source Code** | 66 |

---

# CHAPTER 1: INTRODUCTION

## 1.1 Project Overview

The Student Activity Tracker is a web-based application designed specifically for students to help them manage their daily academic activities. In the current educational scenario, students have to juggle between multiple responsibilities - attending classes, completing assignments, preparing for exams, and managing personal goals. Keeping track of all these activities manually can be overwhelming and often leads to missed deadlines and poor academic performance.

This project provides a digital solution to this problem by offering a centralized platform where students can manage all their academic activities. The application allows students to create and manage tasks, track their attendance, take notes, set goals, and manage their assignments - all in one place. The intuitive user interface makes it easy for students to quickly add new items and track their progress.

The application has been built using modern web technologies that ensure fast performance, security, and a great user experience. The use of Next.js framework allows for server-side rendering which improves the application's performance and SEO capabilities. MongoDB provides a flexible and scalable database solution that can handle the varying data requirements of different students.

The project demonstrates the practical implementation of various concepts learned during the BCA program including web development, database management, software engineering, and project management. It serves as a comprehensive example of how to build a full-stack web application from scratch.

## 1.2 Problem Statement

Students in today's educational environment face several challenges when it comes to managing their academic activities:

**Scattered Information:** Students often have their tasks written in notebooks, attendance marked in different registers, notes in various applications, and assignments scattered across different platforms. This leads to confusion and difficulty in tracking progress.

**Missed Deadlines:** Without a proper system to track due dates and deadlines, students often miss important submission dates for assignments and projects. This negatively impacts their grades and academic performance.

**Poor Attendance Tracking:** Many students do not keep track of their attendance properly. This becomes a problem when they suddenly realize they have shortage of attendance and face academic penalties.

**Lack of Goal Setting:** Most students do not set clear academic goals for themselves. Even when they do, they don't have a proper system to track their progress towards these goals.

**Inefficient Note Management:** Students take notes in various places - notebooks, mobile phones, and different apps. Finding a specific note when needed becomes time-consuming and frustrating.

**No Centralized System:** There is no single platform that combines all these features together. Students have to use multiple applications for different purposes, which is inefficient and time-consuming.

The Student Activity Tracker addresses all these problems by providing a single, comprehensive platform for managing all academic activities.

## 1.3 Objectives

The main objectives of this project are:

1. **To develop a centralized platform** for students to manage all their academic activities including tasks, attendance, notes, goals, and assignments.

2. **To provide an intuitive user interface** that is easy to use and navigate, ensuring that students can quickly access the features they need.

3. **To implement secure user authentication** that protects student data and ensures that each student can only access their own information.

4. **To create a responsive design** that works well on both desktop computers and mobile devices, allowing students to access the application from anywhere.

5. **To implement real-time statistics and analytics** that help students understand their progress and identify areas that need improvement.

6. **To demonstrate the practical application** of web development technologies and software engineering principles learned during the BCA program.

7. **To create a scalable application** that can handle multiple users and large amounts of data without performance issues.

8. **To provide features for deadline tracking** that help students stay on top of their assignments and never miss important dates.

## 1.4 Scope of the Project

The scope of this project includes the following features and functionalities:

**User Management:**
- User registration with email verification
- Secure login and logout functionality
- Password encryption for security
- User profile management

**Dashboard:**
- Overview of all activities
- Statistics and analytics
- Recent activities display
- Upcoming deadlines notification

**Task Management:**
- Create, read, update, and delete tasks
- Set priority levels (low, medium, high)
- Set due dates for tasks
- Mark tasks as complete
- Filter tasks by status

**Attendance Tracking:**
- Mark daily attendance
- Calendar view for attendance
- Attendance statistics and percentage
- Subject-wise attendance tracking

**Notes Management:**
- Create and organize notes
- Categorize notes by subject
- Add tags to notes
- Pin important notes
- Search functionality

**Goals Management:**
- Set academic goals
- Set deadlines for goals
- Track progress percentage
- Mark goals as complete

**Assignment Management:**
- Add assignment details
- Track submission status
- Upload assignment files
- Set due dates
- View grading status

**Limitations:**
- The application does not include real-time notifications via email or SMS
- File upload is limited to URL links only
- No integration with college management systems
- No collaborative features for group work

## 1.5 Technology Stack

The following technologies have been used to develop this project:

### Frontend Technologies

**Next.js 14:**
Next.js is a React framework that enables server-side rendering and static site generation. It provides excellent performance optimization features and a great developer experience. In this project, Next.js is used for both the frontend UI and the backend API routes.

**React 19:**
React is a JavaScript library for building user interfaces. It allows us to create reusable UI components and manage the application state efficiently. React's component-based architecture makes the code more organized and maintainable.

**TypeScript:**
TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds static type checking to JavaScript, which helps catch errors early in the development process and improves code quality.

**Tailwind CSS:**
Tailwind CSS is a utility-first CSS framework that allows us to build custom designs quickly. It provides low-level utility classes that can be composed to build any design directly in the markup.

**Redux Toolkit:**
Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development. It is used for state management across the application, making it easier to manage complex state logic.

### Backend Technologies

**Next.js API Routes:**
Next.js provides a built-in API routing feature that allows us to create serverless API endpoints. This eliminates the need for a separate backend server and simplifies the deployment process.

**MongoDB:**
MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents. It is highly scalable and provides excellent performance for web applications with varying data structures.

**Mongoose:**
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward, schema-based solution to model application data and includes built-in type casting, validation, and query building.

### Other Libraries

**Axios:** For making HTTP requests from the frontend to the backend API.

**React Hook Form:** For efficient form handling with minimal re-renders.

**JWT (JSON Web Tokens):** For secure user authentication.

**bcryptjs:** For password hashing and security.

**Lucide React:** For beautiful and consistent icons throughout the application.

**React Hot Toast:** For displaying notification messages to users.

## 1.6 Organization of Report

This project report is organized into the following chapters:

**Chapter 1 - Introduction:** This chapter provides an overview of the project, including the problem statement, objectives, scope, and technology stack used.

**Chapter 2 - Software Requirement Analysis:** This chapter discusses the detailed requirements of the system including functional requirements, non-functional requirements, hardware and software requirements, and module descriptions.

**Chapter 3 - Software Design:** This chapter covers the design aspects of the system including system architecture, data flow diagrams, UML diagrams, and database design.

**Chapter 4 - Testing:** This chapter describes the testing methodologies used, test cases developed, and the results of black box and white box testing.

**Chapter 5 - Implementation and User Interface:** This chapter showcases the implementation details and includes screenshots of all the user interface screens with descriptions.

**Chapter 6 - Conclusion and Future Scope:** This chapter concludes the report with a summary of achievements, limitations faced, and suggestions for future enhancements.

**References:** Lists all the references and resources used during the development of this project.

**Appendix:** Contains the source code and code templates used in the project.

---

# CHAPTER 2: SOFTWARE REQUIREMENT ANALYSIS

## 2.1 Introduction

Software Requirement Analysis is a crucial phase in the software development life cycle. It involves understanding what the users need from the software and documenting these requirements in a clear and unambiguous manner. This chapter presents the detailed requirement analysis for the Student Activity Tracker application.

The requirement analysis process involved studying the needs of students in managing their academic activities, understanding the limitations of existing solutions, and defining the features that would make this application useful and user-friendly.

The requirements have been categorized into functional requirements (what the system should do) and non-functional requirements (how the system should perform). Additionally, this chapter also covers the hardware and software requirements for running the application.

## 2.2 Problem Definition

The problem that this project aims to solve can be defined as follows:

**Primary Problem:**
Students lack a unified, digital platform to manage their diverse academic activities including tasks, attendance, notes, goals, and assignments. This leads to disorganization, missed deadlines, and overall poor academic performance.

**Secondary Problems:**

1. **Information Fragmentation:** Student data is scattered across multiple platforms, notebooks, and applications, making it difficult to get a holistic view of academic progress.

2. **Manual Tracking Inefficiency:** Manual methods of tracking attendance and tasks are time-consuming and prone to errors.

3. **Lack of Progress Visualization:** Students cannot easily visualize their progress towards academic goals.

4. **No Deadline Alerts:** Without a proper system, students often miss important deadlines for assignments and submissions.

5. **Difficulty in Note Organization:** Finding specific notes when needed is difficult when notes are stored in various places without proper organization.

**Target Users:**
The primary target users for this application are:
- College and university students
- School students (high school level)
- Students preparing for competitive exams
- Anyone who wants to track their learning activities

## 2.3 Existing System

Before developing the Student Activity Tracker, we analyzed the existing systems and methods that students use to manage their academic activities:

**Traditional Methods:**
- Paper notebooks for taking notes
- Physical planners and diaries for tracking tasks
- Manual attendance registers
- Separate folders for different subjects

**Digital Solutions:**
- General note-taking apps like Google Keep, OneNote
- Task management apps like Todoist, Any.do
- Calendar applications for deadline tracking
- Spreadsheets for attendance tracking

**Limitations of Existing Systems:**

1. **No Integration:** Each activity requires a different application or method. There is no single platform that combines all features.

2. **Not Student-Specific:** General productivity apps are not designed specifically for students and lack features like attendance tracking and assignment management.

3. **Limited Analytics:** Most existing solutions do not provide comprehensive analytics and progress tracking specific to academic activities.

4. **Complex Interfaces:** Many existing applications have complex interfaces that require time to learn and use effectively.

5. **No Academic Context:** Existing solutions do not understand the academic context like subjects, semesters, or academic goals.

6. **Data Portability Issues:** Data stored in different applications cannot be easily consolidated or analyzed together.

## 2.4 Proposed System

The proposed Student Activity Tracker system addresses all the limitations of existing systems by providing:

**Unified Platform:**
All academic activities can be managed from a single application. Students don't need to switch between multiple apps or maintain separate records.

**Student-Centric Design:**
The application is designed specifically for students with features that cater to their unique needs like attendance tracking, assignment management, and academic goal setting.

**Intuitive Interface:**
The user interface is designed to be simple and intuitive. Students can start using the application immediately without any learning curve.

**Comprehensive Dashboard:**
The dashboard provides a complete overview of all activities with statistics and analytics that help students understand their progress.

**Modern Technology Stack:**
The application uses modern web technologies that ensure fast performance, security, and reliability.

**Responsive Design:**
The application works seamlessly on all devices including desktops, tablets, and mobile phones.

**Secure Data Storage:**
All student data is stored securely in a cloud database with proper authentication and authorization mechanisms.

**Advantages of Proposed System:**

1. Single platform for all academic activities
2. Easy to use interface
3. Real-time progress tracking
4. Secure and reliable
5. Accessible from any device
6. Helps improve academic performance
7. Reduces chances of missing deadlines
8. Provides valuable insights through analytics

## 2.5 Functional Requirements

Functional requirements describe what the system should do. The following are the detailed functional requirements for the Student Activity Tracker:

### FR-01: User Registration
- The system shall allow new users to register using their name, email, and password.
- The system shall validate that the email is in proper format.
- The system shall ensure that the password is at least 6 characters long.
- The system shall check that the email is not already registered.
- The system shall encrypt the password before storing in the database.

### FR-02: User Login
- The system shall allow registered users to login using email and password.
- The system shall validate the credentials against the database.
- The system shall create a secure session upon successful login.
- The system shall display appropriate error messages for invalid credentials.

### FR-03: User Logout
- The system shall allow logged-in users to logout.
- The system shall destroy the user session upon logout.
- The system shall redirect the user to the login page after logout.

### FR-04: Dashboard
- The system shall display a dashboard with overview statistics.
- The system shall show the count of tasks, notes, goals, and assignments.
- The system shall display attendance percentage for the current month.
- The system shall show recent activities.
- The system shall display upcoming deadlines.

### FR-05: Task Management
- The system shall allow users to create new tasks with title and description.
- The system shall allow users to set priority (low, medium, high) for tasks.
- The system shall allow users to set due dates for tasks.
- The system shall allow users to update task status (pending, in-progress, completed).
- The system shall allow users to edit existing tasks.
- The system shall allow users to delete tasks.
- The system shall allow users to filter tasks by status.

### FR-06: Attendance Tracking
- The system shall allow users to mark attendance for any date.
- The system shall allow users to select attendance status (present, absent, late, excused).
- The system shall allow users to specify subject for attendance.
- The system shall display attendance in a calendar view.
- The system shall calculate and display attendance statistics.
- The system shall allow users to delete attendance records.

### FR-07: Notes Management
- The system shall allow users to create notes with title and content.
- The system shall allow users to categorize notes.
- The system shall allow users to add tags to notes.
- The system shall allow users to pin important notes.
- The system shall allow users to search notes.
- The system shall allow users to edit and delete notes.

### FR-08: Goals Management
- The system shall allow users to create goals with title and deadline.
- The system shall allow users to set goal description and category.
- The system shall allow users to track progress percentage.
- The system shall allow users to update goal status.
- The system shall allow users to edit and delete goals.
- The system shall display progress bar for each goal.

### FR-09: Assignment Management
- The system shall allow users to add assignments with title and subject.
- The system shall allow users to set due dates for assignments.
- The system shall allow users to add file URL for submissions.
- The system shall allow users to update submission status.
- The system shall allow users to view assignment grades.
- The system shall allow users to edit and delete assignments.

## 2.6 Non-Functional Requirements

Non-functional requirements describe how the system should perform. The following are the non-functional requirements for the Student Activity Tracker:

### NFR-01: Performance
- The system shall load any page within 3 seconds under normal conditions.
- The system shall handle at least 100 concurrent users without degradation.
- Database queries shall execute within 1 second.

### NFR-02: Security
- All passwords shall be encrypted using bcrypt hashing algorithm.
- The system shall use JWT tokens for authentication.
- Authentication tokens shall expire after 7 days.
- The system shall use HTTPS for all communications.

### NFR-03: Usability
- The user interface shall be intuitive and easy to navigate.
- The system shall provide clear error messages.
- The system shall be accessible on all modern browsers.
- The system shall provide feedback for all user actions.

### NFR-04: Reliability
- The system shall be available 99% of the time.
- The system shall handle errors gracefully without crashing.
- The system shall maintain data integrity at all times.

### NFR-05: Scalability
- The system architecture shall support horizontal scaling.
- The database shall support large amounts of data.
- The system shall maintain performance as data grows.

### NFR-06: Maintainability
- The code shall be well-documented and organized.
- The system shall follow coding standards and best practices.
- The system shall use modular architecture for easy updates.

### NFR-07: Compatibility
- The system shall work on Chrome, Firefox, Safari, and Edge browsers.
- The system shall be responsive and work on mobile devices.
- The system shall work on screen sizes from 320px to 1920px.

## 2.7 Hardware Requirements

The following hardware is required to run the Student Activity Tracker:

### For Development:
- **Processor:** Intel Core i3 or equivalent (minimum), Intel Core i5 or higher (recommended)
- **RAM:** 4 GB (minimum), 8 GB or higher (recommended)
- **Storage:** 10 GB free disk space
- **Display:** 1366 x 768 resolution (minimum)
- **Internet:** Broadband connection

### For Production Server:
- **Processor:** 2 vCPUs (minimum)
- **RAM:** 4 GB (minimum)
- **Storage:** 20 GB SSD
- **Network:** 1 Gbps connection

### For End Users:
- **Device:** Any device with a modern web browser
- **Processor:** Any processor capable of running a web browser
- **RAM:** 2 GB (minimum)
- **Internet:** Stable internet connection

## 2.8 Software Requirements

The following software is required for the Student Activity Tracker:

### For Development:
- **Operating System:** Windows 10/11, macOS, or Linux
- **Node.js:** Version 18.0 or higher
- **npm:** Version 9.0 or higher
- **Code Editor:** Visual Studio Code (recommended)
- **Browser:** Google Chrome or Firefox (latest version)
- **Database:** MongoDB (local or Atlas)
- **Git:** For version control

### For Production:
- **Runtime:** Node.js 18.x
- **Database:** MongoDB Atlas (cloud database)
- **Hosting:** Vercel, Netlify, or any Node.js compatible host

### For End Users:
- **Browser:** Any modern web browser
  - Google Chrome 90+
  - Mozilla Firefox 90+
  - Microsoft Edge 90+
  - Safari 14+

## 2.9 Module Description

The Student Activity Tracker consists of the following modules:

### Module 1: Authentication Module

**Purpose:** This module handles all user authentication related functionality including registration, login, logout, and session management.

**Features:**
- User registration with validation
- User login with credentials verification
- Secure password hashing
- JWT token generation and validation
- Session management using HTTP-only cookies
- Auto-redirect for authenticated/unauthenticated users

**Input:** User credentials (email, password, name for registration)

**Output:** Authentication token, user information

**Process:**
1. User enters credentials
2. System validates input
3. System verifies credentials against database
4. System generates JWT token
5. System stores token in HTTP-only cookie
6. User is redirected to dashboard

### Module 2: Dashboard Module

**Purpose:** This module provides an overview of all user activities and displays statistics and analytics.

**Features:**
- Display task statistics (total, completed, pending, in-progress)
- Display attendance statistics (percentage, present, absent, late)
- Display notes count
- Display goals statistics (total, active, completed)
- Display assignment statistics (total, pending, submitted)
- Show recent tasks
- Show upcoming deadlines

**Input:** User ID from authentication

**Output:** Dashboard data with statistics

### Module 3: Task Management Module

**Purpose:** This module allows users to create, manage, and track their daily tasks.

**Features:**
- Create new tasks with title, description, priority, and due date
- View all tasks in a grid layout
- Filter tasks by status
- Update task status
- Edit task details
- Delete tasks
- Visual indicators for priority and status

**Input:** Task details (title, description, priority, due date, status)

**Output:** Task list, task operations confirmation

### Module 4: Attendance Tracking Module

**Purpose:** This module allows users to mark and track their attendance.

**Features:**
- Mark attendance for any date
- Select attendance status (present, absent, late, excused)
- Optional subject specification
- Calendar view for attendance visualization
- Attendance statistics calculation
- Monthly attendance view
- Delete attendance records

**Input:** Date, status, subject (optional)

**Output:** Attendance records, statistics, calendar view

### Module 5: Notes Management Module

**Purpose:** This module allows users to create and organize their study notes.

**Features:**
- Create notes with title and content
- Categorize notes by subject
- Add multiple tags to notes
- Pin important notes
- Search notes by title, content, category, or tags
- Edit and delete notes
- Color-coded note cards

**Input:** Note details (title, content, category, tags)

**Output:** Notes list, search results

### Module 6: Goals Management Module

**Purpose:** This module allows users to set academic goals and track progress.

**Features:**
- Create goals with title, description, and deadline
- Set goal category
- Track progress percentage
- Update goal status (not-started, in-progress, completed, abandoned)
- Visual progress bar
- Edit and delete goals
- Filter goals by status

**Input:** Goal details (title, description, deadline, category, progress)

**Output:** Goals list, progress indicators

### Module 7: Assignment Management Module

**Purpose:** This module allows users to manage their assignments and track submissions.

**Features:**
- Create assignments with title and description
- Set subject and due date
- Add file URL for submission
- Track submission status (pending, submitted, graded)
- View grades and feedback
- Edit and delete assignments
- Visual status indicators

**Input:** Assignment details (title, description, subject, due date, file URL)

**Output:** Assignments list, submission status

---

# CHAPTER 3: SOFTWARE DESIGN

## 3.1 Introduction

Software design is a critical phase in the software development process where the software requirements are transformed into a detailed blueprint for building the software. This chapter presents the design documentation for the Student Activity Tracker application.

The design phase involves creating various diagrams and models that represent the structure and behavior of the system. These include the system architecture, data flow diagrams (DFDs), Unified Modeling Language (UML) diagrams, and database design.

Good software design ensures that the system is:
- Easy to understand and implement
- Maintainable and extensible
- Efficient and performant
- Secure and reliable

## 3.2 System Architecture

The Student Activity Tracker follows a modern three-tier architecture:

### Presentation Layer (Frontend)
The presentation layer is responsible for the user interface and user experience. It consists of:
- **React Components:** Reusable UI components for building the interface
- **Redux Store:** For managing application state
- **Tailwind CSS:** For styling the components
- **Next.js Pages:** For routing and page rendering

### Application Layer (Backend)
The application layer handles the business logic and API endpoints. It consists of:
- **Next.js API Routes:** Serverless functions for handling requests
- **Authentication Logic:** JWT token generation and verification
- **Business Logic:** Data validation and processing
- **Mongoose ODM:** For database operations

### Data Layer (Database)
The data layer is responsible for data storage and retrieval. It consists of:
- **MongoDB Database:** NoSQL database for storing data
- **Mongoose Models:** Schema definitions for data structure
- **Indexes:** For optimizing query performance

### Architecture Diagram

```
+--------------------------------------------------+
|                  Client Browser                    |
|  +----------------------------------------------+ |
|  |              Presentation Layer               | |
|  |  +--------+  +--------+  +--------+         | |
|  |  | React  |  | Redux  |  |Tailwind|         | |
|  |  |Comps   |  | Store  |  |  CSS   |         | |
|  |  +--------+  +--------+  +--------+         | |
|  +----------------------------------------------+ |
+--------------------------------------------------+
                        |
                        | HTTP/HTTPS
                        v
+--------------------------------------------------+
|                   Next.js Server                   |
|  +----------------------------------------------+ |
|  |              Application Layer                | |
|  |  +--------+  +--------+  +--------+         | |
|  |  |  API   |  |  Auth  |  |Business|         | |
|  |  | Routes |  | Logic  |  | Logic  |         | |
|  |  +--------+  +--------+  +--------+         | |
|  +----------------------------------------------+ |
+--------------------------------------------------+
                        |
                        | MongoDB Protocol
                        v
+--------------------------------------------------+
|                  MongoDB Database                  |
|  +----------------------------------------------+ |
|  |                Data Layer                     | |
|  |  +--------+  +--------+  +--------+         | |
|  |  | Users  |  | Tasks  |  | Notes  |         | |
|  |  +--------+  +--------+  +--------+         | |
|  |  +--------+  +--------+  +--------+         | |
|  |  | Goals  |  |Attend. |  |Assign. |         | |
|  |  +--------+  +--------+  +--------+         | |
|  +----------------------------------------------+ |
+--------------------------------------------------+
```

## 3.3 Data Flow Diagrams

Data Flow Diagrams (DFDs) show how data flows through the system. They help in understanding the system's functionality and identifying the processes, data stores, and external entities.

### Level 0 DFD (Context Diagram)

The context diagram shows the system as a single process with its external entities.

```
                    +------------------+
                    |                  |
    User Info       |                  |      Auth Response
    Login Creds  -->|                  |-->   Dashboard Data
    Task Data       |    Student       |      Task List
    Attendance   -->|    Activity      |-->   Attendance Stats
    Notes Data      |    Tracker       |      Notes List
    Goals Data   -->|                  |-->   Goals Progress
    Assignment      |                  |      Assignment Status
                    +------------------+
                           ^
                           |
                           v
                    +------------------+
                    |    Database      |
                    +------------------+
```

### Level 1 DFD

The Level 1 DFD shows the major processes in the system.

```
+------+     Login/Register     +---------------+
|      |----------------------->| Authentication|
| User |                        |    Process    |
|      |<-----------------------|     1.0       |
+------+     Auth Token         +---------------+
    |                                   |
    |                                   v
    |                           +---------------+
    |  Task Operations          |   Database    |
    |-------------------------->|               |
    |                           +---------------+
    |                                   ^
    |                                   |
    |   +---------------+               |
    |-->| Task Manager  |---------------|
    |   |     2.0       |               |
    |   +---------------+               |
    |                                   |
    |   +---------------+               |
    |-->| Attendance    |---------------|
    |   | Tracker 3.0   |               |
    |   +---------------+               |
    |                                   |
    |   +---------------+               |
    |-->| Notes Manager |---------------|
    |   |     4.0       |               |
    |   +---------------+               |
    |                                   |
    |   +---------------+               |
    |-->| Goals Manager |---------------|
    |   |     5.0       |               |
    |   +---------------+               |
    |                                   |
    |   +---------------+               |
    +-->| Assignment    |---------------+
        | Manager 6.0   |
        +---------------+
```

### Level 2 DFD - Task Management

```
+------+                        +---------------+
|      |   Create Task          |   Validate    |
| User |----------------------->|   Task Data   |
|      |                        |    2.1        |
+------+                        +---------------+
    ^                                   |
    |                                   v
    |                           +---------------+
    |   Task Created            |  Store Task   |
    |<--------------------------|   in DB       |
    |                           |    2.2        |
    |                           +---------------+
    |                                   |
    |   +---------------+               v
    |   |   Display     |       +---------------+
    |<--|   Tasks       |<------|   Tasks       |
    |   |    2.3        |       |   Database    |
    |   +---------------+       +---------------+
    |
    |   +---------------+
    |-->|  Update/Delete|
        |   Task 2.4    |
        +---------------+
```

### Level 2 DFD - Attendance Tracking

```
+------+                        +---------------+
|      |   Mark Attendance      |   Validate    |
| User |----------------------->|   Date/Status |
|      |                        |    3.1        |
+------+                        +---------------+
    ^                                   |
    |                                   v
    |                           +---------------+
    |   Confirmation            |    Store      |
    |<--------------------------|   Attendance  |
    |                           |    3.2        |
    |                           +---------------+
    |                                   |
    |   +---------------+               v
    |   |   Display     |       +---------------+
    |<--|   Calendar    |<------|  Attendance   |
    |   |    3.3        |       |   Database    |
    |   +---------------+       +---------------+
    |
    |   +---------------+
    |<--|  Calculate    |
        |   Stats 3.4   |
        +---------------+
```

## 3.4 UML Diagrams

### Use Case Diagram

```
+--------------------------------------------------+
|           Student Activity Tracker                |
|                                                   |
|    +----------+                                   |
|    |          |                                   |
|    |  Student |                                   |
|    |  (Actor) |                                   |
|    +----+-----+                                   |
|         |                                         |
|         |-----> (Register)                        |
|         |                                         |
|         |-----> (Login)                           |
|         |                                         |
|         |-----> (View Dashboard)                  |
|         |                                         |
|         |-----> (Manage Tasks)                    |
|         |           |                             |
|         |           +---> (Create Task)           |
|         |           +---> (Update Task)           |
|         |           +---> (Delete Task)           |
|         |                                         |
|         |-----> (Track Attendance)                |
|         |           |                             |
|         |           +---> (Mark Attendance)       |
|         |           +---> (View Calendar)         |
|         |                                         |
|         |-----> (Manage Notes)                    |
|         |           |                             |
|         |           +---> (Create Note)           |
|         |           +---> (Search Notes)          |
|         |           +---> (Pin Note)              |
|         |                                         |
|         |-----> (Manage Goals)                    |
|         |           |                             |
|         |           +---> (Create Goal)           |
|         |           +---> (Update Progress)       |
|         |                                         |
|         |-----> (Manage Assignments)              |
|         |           |                             |
|         |           +---> (Add Assignment)        |
|         |           +---> (Submit Assignment)     |
|         |                                         |
|         |-----> (Logout)                          |
|                                                   |
+--------------------------------------------------+
```

### Class Diagram

```
+------------------+       +------------------+
|      User        |       |      Task        |
+------------------+       +------------------+
| - _id: ObjectId  |       | - _id: ObjectId  |
| - name: String   |       | - userId: ObjectId
| - email: String  |       | - title: String  |
| - password: String       | - description: String
| - role: String   |       | - status: String |
| - createdAt: Date|       | - priority: String
| - updatedAt: Date|       | - dueDate: Date  |
+------------------+       | - createdAt: Date|
| + register()     |       | - updatedAt: Date|
| + login()        |       +------------------+
| + logout()       |       | + create()       |
| + getProfile()   |       | + update()       |
+------------------+       | + delete()       |
         |                 | + getAll()       |
         |                 +------------------+
         |1                        |*
         +-------------------------+

+------------------+       +------------------+
|   Attendance     |       |      Note        |
+------------------+       +------------------+
| - _id: ObjectId  |       | - _id: ObjectId  |
| - userId: ObjectId       | - userId: ObjectId
| - date: Date     |       | - title: String  |
| - status: String |       | - content: String|
| - subject: String|       | - category: String
| - notes: String  |       | - tags: [String] |
| - createdAt: Date|       | - isPinned: Boolean
| - updatedAt: Date|       | - createdAt: Date|
+------------------+       | - updatedAt: Date|
| + markAttendance()|      +------------------+
| + getByMonth()   |       | + create()       |
| + getStats()     |       | + update()       |
| + delete()       |       | + delete()       |
+------------------+       | + search()       |
                           +------------------+

+------------------+       +------------------+
|      Goal        |       |   Assignment     |
+------------------+       +------------------+
| - _id: ObjectId  |       | - _id: ObjectId  |
| - userId: ObjectId       | - userId: ObjectId
| - title: String  |       | - title: String  |
| - description: String    | - description: String
| - deadline: Date |       | - fileUrl: String|
| - status: String |       | - subject: String|
| - progress: Number       | - dueDate: Date  |
| - category: String       | - status: String |
| - createdAt: Date|       | - grade: String  |
| - updatedAt: Date|       | - submittedAt: Date
+------------------+       | - createdAt: Date|
| + create()       |       | - updatedAt: Date|
| + updateProgress()|      +------------------+
| + delete()       |       | + create()       |
| + getAll()       |       | + submit()       |
+------------------+       | + delete()       |
                           +------------------+
```

### Sequence Diagram - User Login

```
User        LoginPage       AuthAPI        Database
 |              |              |              |
 |--Enter Creds-|              |              |
 |              |              |              |
 |              |--POST /api/auth/login------>|
 |              |              |              |
 |              |              |--Find User-->|
 |              |              |              |
 |              |              |<--User Data--|
 |              |              |              |
 |              |              |--Verify Pwd--|
 |              |              |              |
 |              |              |--Gen Token---|
 |              |              |              |
 |              |<--Set Cookie + User---------|
 |              |              |              |
 |<--Redirect---|              |              |
 |  Dashboard   |              |              |
```

### Sequence Diagram - Create Task

```
User        TaskPage        TaskAPI        Database
 |              |              |              |
 |--Click Add---|              |              |
 |              |              |              |
 |--Fill Form---|              |              |
 |              |              |              |
 |--Submit------|              |              |
 |              |              |              |
 |              |--POST /api/tasks----------->|
 |              |              |              |
 |              |              |--Validate----|
 |              |              |              |
 |              |              |--Insert----->|
 |              |              |              |
 |              |              |<--Task Doc---|
 |              |              |              |
 |              |<--Task Created--------------|
 |              |              |              |
 |<--Show Toast-|              |              |
 |<--Update List|              |              |
```

### Activity Diagram - Task Management

```
        +-------+
        | Start |
        +---+---+
            |
            v
    +---------------+
    | View Task List|
    +-------+-------+
            |
            v
    +---------------+
    | Select Action |
    +-------+-------+
            |
    +-------+-------+-------+
    |       |       |       |
    v       v       v       v
+------+ +------+ +------+ +------+
|Create| | Edit | |Delete| |Change|
| New  | | Task | | Task | |Status|
+--+---+ +--+---+ +--+---+ +--+---+
   |        |        |        |
   v        v        v        v
+------+ +------+ +------+ +------+
| Fill | | Load | |Confirm| |Select|
| Form | | Data | |Delete | | New  |
+--+---+ +--+---+ +--+---+ |Status|
   |        |        |     +--+---+
   v        v        v        |
+------+ +------+ +------+    |
|Submit| |Update| |Remove|    |
| API  | | API  | | API  |    |
+--+---+ +--+---+ +--+---+    |
   |        |        |        |
   +--------+--------+--------+
            |
            v
    +---------------+
    | Refresh List  |
    +-------+-------+
            |
            v
        +-------+
        |  End  |
        +-------+
```

### State Diagram - Task Status

```
                    +----------+
                    |          |
          +-------->| Pending  |<--------+
          |         |          |         |
          |         +----+-----+         |
          |              |               |
          |              | Start Work    |
          |              v               |
          |         +----------+         |
    Create Task     |          |   Reopen|
          |         |In Progress         |
          |         |          +---------+
          |         +----+-----+
          |              |
          |              | Complete
          |              v
          |         +----------+
          |         |          |
          +---------|Completed |
         Reset      |          |
                    +----------+
```

## 3.5 Database Design

### Database Schema Overview

The Student Activity Tracker uses MongoDB, a NoSQL document database. The database consists of six collections: Users, Tasks, Attendance, Notes, Goals, and Assignments.

### Collection: Users

| Field | Data Type | Constraints | Description |
|-------|-----------|-------------|-------------|
| _id | ObjectId | Primary Key, Auto | Unique identifier |
| name | String | Required, Min: 2, Max: 50 | User's full name |
| email | String | Required, Unique, Email format | User's email address |
| password | String | Required, Min: 6 | Hashed password |
| role | String | Enum: student, admin | User role |
| createdAt | Date | Auto | Account creation date |
| updatedAt | Date | Auto | Last update date |

### Collection: Tasks

| Field | Data Type | Constraints | Description |
|-------|-----------|-------------|-------------|
| _id | ObjectId | Primary Key, Auto | Unique identifier |
| userId | ObjectId | Required, Foreign Key | Reference to User |
| title | String | Required, Max: 100 | Task title |
| description | String | Max: 500 | Task description |
| status | String | Enum: pending, in-progress, completed | Task status |
| priority | String | Enum: low, medium, high | Priority level |
| dueDate | Date | Optional | Due date |
| createdAt | Date | Auto | Creation date |
| updatedAt | Date | Auto | Last update date |

### Collection: Attendance

| Field | Data Type | Constraints | Description |
|-------|-----------|-------------|-------------|
| _id | ObjectId | Primary Key, Auto | Unique identifier |
| userId | ObjectId | Required, Foreign Key | Reference to User |
| date | Date | Required | Attendance date |
| status | String | Required, Enum: present, absent, late, excused | Attendance status |
| subject | String | Optional, Max: 50 | Subject name |
| notes | String | Optional, Max: 200 | Additional notes |
| createdAt | Date | Auto | Creation date |
| updatedAt | Date | Auto | Last update date |

### Collection: Notes

| Field | Data Type | Constraints | Description |
|-------|-----------|-------------|-------------|
| _id | ObjectId | Primary Key, Auto | Unique identifier |
| userId | ObjectId | Required, Foreign Key | Reference to User |
| title | String | Required, Max: 100 | Note title |
| content | String | Required | Note content |
| category | String | Optional, Max: 30 | Category name |
| tags | Array of String | Optional | Tags for searching |
| isPinned | Boolean | Default: false | Pin status |
| createdAt | Date | Auto | Creation date |
| updatedAt | Date | Auto | Last update date |

### Collection: Goals

| Field | Data Type | Constraints | Description |
|-------|-----------|-------------|-------------|
| _id | ObjectId | Primary Key, Auto | Unique identifier |
| userId | ObjectId | Required, Foreign Key | Reference to User |
| title | String | Required, Max: 100 | Goal title |
| description | String | Optional, Max: 500 | Goal description |
| deadline | Date | Required | Target completion date |
| status | String | Enum: not-started, in-progress, completed, abandoned | Goal status |
| progress | Number | Min: 0, Max: 100, Default: 0 | Progress percentage |
| category | String | Optional, Max: 30 | Category name |
| createdAt | Date | Auto | Creation date |
| updatedAt | Date | Auto | Last update date |

### Collection: Assignments

| Field | Data Type | Constraints | Description |
|-------|-----------|-------------|-------------|
| _id | ObjectId | Primary Key, Auto | Unique identifier |
| userId | ObjectId | Required, Foreign Key | Reference to User |
| title | String | Required, Max: 100 | Assignment title |
| description | String | Optional, Max: 500 | Assignment description |
| fileUrl | String | Optional | URL to submitted file |
| fileName | String | Optional | Name of uploaded file |
| fileType | String | Optional | Type of file |
| subject | String | Optional, Max: 50 | Subject name |
| dueDate | Date | Optional | Submission deadline |
| submittedAt | Date | Optional | Actual submission date |
| status | String | Enum: pending, submitted, graded | Submission status |
| grade | String | Optional | Grade received |
| feedback | String | Optional, Max: 500 | Teacher's feedback |
| createdAt | Date | Auto | Creation date |
| updatedAt | Date | Auto | Last update date |

## 3.6 ER Diagram

```
+------------------+          +------------------+
|      USERS       |          |      TASKS       |
+------------------+          +------------------+
| PK _id           |----+     | PK _id           |
|    name          |    |     | FK userId        |----+
|    email         |    |     |    title         |    |
|    password      |    +-----|    description   |    |
|    role          |    |     |    status        |    |
|    createdAt     |    |     |    priority      |    |
|    updatedAt     |    |     |    dueDate       |    |
+------------------+    |     |    createdAt     |    |
         |              |     |    updatedAt     |    |
         |              |     +------------------+    |
         |              |                             |
         |              |     +------------------+    |
         |              |     |   ATTENDANCE     |    |
         |              |     +------------------+    |
         |              +-----| PK _id           |    |
         |              |     | FK userId        |----+
         |              |     |    date          |    |
         |              |     |    status        |    |
         |              |     |    subject       |    |
         |              |     |    notes         |    |
         |              |     |    createdAt     |    |
         |              |     |    updatedAt     |    |
         |              |     +------------------+    |
         |              |                             |
         |              |     +------------------+    |
         |              |     |      NOTES       |    |
         |              |     +------------------+    |
         |              +-----| PK _id           |    |
         |              |     | FK userId        |----+
         |              |     |    title         |    |
         |              |     |    content       |    |
         |              |     |    category      |    |
         |              |     |    tags          |    |
         |              |     |    isPinned      |    |
         |              |     |    createdAt     |    |
         |              |     |    updatedAt     |    |
         |              |     +------------------+    |
         |              |                             |
         |              |     +------------------+    |
         |              |     |      GOALS       |    |
         |              |     +------------------+    |
         |              +-----| PK _id           |    |
         |              |     | FK userId        |----+
         |              |     |    title         |    |
         |              |     |    description   |    |
         |              |     |    deadline      |    |
         |              |     |    status        |    |
         |              |     |    progress      |    |
         |              |     |    category      |    |
         |              |     |    createdAt     |    |
         |              |     |    updatedAt     |    |
         |              |     +------------------+    |
         |              |                             |
         |              |     +------------------+    |
         |              |     |   ASSIGNMENTS    |    |
         |              |     +------------------+    |
         |              +-----| PK _id           |    |
         |                    | FK userId        |----+
         |                    |    title         |
         |                    |    description   |
         |                    |    fileUrl       |
         |                    |    subject       |
         |                    |    dueDate       |
         |                    |    status        |
         |                    |    grade         |
         |                    |    submittedAt   |
         |                    |    createdAt     |
         |                    |    updatedAt     |
         |                    +------------------+
         |
         +-- One User has Many Tasks (1:N)
         +-- One User has Many Attendance Records (1:N)
         +-- One User has Many Notes (1:N)
         +-- One User has Many Goals (1:N)
         +-- One User has Many Assignments (1:N)
```

---

# CHAPTER 4: TESTING

## 4.1 Introduction

Software testing is an essential phase in the software development life cycle that ensures the quality and reliability of the software product. Testing helps identify defects and bugs in the software before it is deployed to users, thereby improving the overall quality of the product.

This chapter describes the various testing methodologies applied to the Student Activity Tracker application, the test cases developed, and the results of the testing process. The testing was performed to ensure that all functional and non-functional requirements are met and the application works as expected.

Testing is important because:
- It identifies bugs and defects early in the development cycle
- It ensures that the software meets the specified requirements
- It improves the quality and reliability of the software
- It increases user confidence in the software
- It helps in maintaining the software in the future

## 4.2 Types of Testing

The following types of testing were performed on the Student Activity Tracker:

### Unit Testing
Unit testing involves testing individual components or modules of the software in isolation. Each function and method is tested to ensure it produces the correct output for given inputs.

### Integration Testing
Integration testing verifies that different modules of the application work correctly when combined. It tests the interfaces between modules and ensures data flows correctly.

### System Testing
System testing tests the complete integrated system to verify that it meets the specified requirements. It tests the system as a whole rather than individual components.

### User Acceptance Testing (UAT)
UAT is performed by end users to verify that the system meets their requirements and is ready for deployment. It ensures the system is user-friendly and performs as expected in real-world scenarios.

### Black Box Testing
Black box testing focuses on testing the functionality of the software without looking at the internal code structure. Test cases are designed based on input-output specifications.

### White Box Testing
White box testing involves testing the internal logic and structure of the code. It requires knowledge of the internal workings of the application.

## 4.3 Test Cases

### Test Case 1: User Registration

| Test Case ID | TC-001 |
|--------------|--------|
| Test Case Name | User Registration |
| Description | Test the user registration functionality |
| Pre-conditions | User is on the registration page |
| Test Steps | 1. Enter name: "John Doe" |
|            | 2. Enter email: "john@example.com" |
|            | 3. Enter password: "password123" |
|            | 4. Confirm password: "password123" |
|            | 5. Click Register button |
| Expected Result | User should be registered and redirected to dashboard |
| Actual Result | User registered successfully and redirected to dashboard |
| Status | Pass |

### Test Case 2: User Login

| Test Case ID | TC-002 |
|--------------|--------|
| Test Case Name | User Login |
| Description | Test the user login functionality |
| Pre-conditions | User is registered in the system |
| Test Steps | 1. Navigate to login page |
|            | 2. Enter email: "john@example.com" |
|            | 3. Enter password: "password123" |
|            | 4. Click Login button |
| Expected Result | User should be logged in and redirected to dashboard |
| Actual Result | Login successful, redirected to dashboard |
| Status | Pass |

### Test Case 3: Invalid Login

| Test Case ID | TC-003 |
|--------------|--------|
| Test Case Name | Invalid Login Attempt |
| Description | Test login with incorrect credentials |
| Pre-conditions | User is on login page |
| Test Steps | 1. Enter email: "john@example.com" |
|            | 2. Enter password: "wrongpassword" |
|            | 3. Click Login button |
| Expected Result | Error message should be displayed |
| Actual Result | "Invalid email or password" error displayed |
| Status | Pass |

### Test Case 4: Create Task

| Test Case ID | TC-004 |
|--------------|--------|
| Test Case Name | Create New Task |
| Description | Test creating a new task |
| Pre-conditions | User is logged in and on tasks page |
| Test Steps | 1. Click "Add Task" button |
|            | 2. Enter title: "Complete Math Assignment" |
|            | 3. Enter description: "Chapter 5 problems" |
|            | 4. Select priority: "High" |
|            | 5. Set due date: "2024-12-15" |
|            | 6. Click "Create Task" button |
| Expected Result | Task should be created and displayed in task list |
| Actual Result | Task created successfully and displayed |
| Status | Pass |

### Test Case 5: Update Task Status

| Test Case ID | TC-005 |
|--------------|--------|
| Test Case Name | Update Task Status |
| Description | Test updating task status to completed |
| Pre-conditions | Task exists in the system |
| Test Steps | 1. Navigate to tasks page |
|            | 2. Click on task options menu |
|            | 3. Click "Mark Complete" |
| Expected Result | Task status should change to completed |
| Actual Result | Task status updated to completed |
| Status | Pass |

### Test Case 6: Mark Attendance

| Test Case ID | TC-006 |
|--------------|--------|
| Test Case Name | Mark Attendance |
| Description | Test marking attendance for a day |
| Pre-conditions | User is logged in and on attendance page |
| Test Steps | 1. Click on a date in calendar |
|            | 2. Select status: "Present" |
|            | 3. Enter subject: "Mathematics" |
|            | 4. Click "Save" |
| Expected Result | Attendance should be marked and displayed |
| Actual Result | Attendance marked successfully |
| Status | Pass |

### Test Case 7: Create Note

| Test Case ID | TC-007 |
|--------------|--------|
| Test Case Name | Create Note |
| Description | Test creating a new note |
| Pre-conditions | User is logged in and on notes page |
| Test Steps | 1. Click "Add Note" button |
|            | 2. Enter title: "Physics Formulas" |
|            | 3. Enter content: "F = ma, E = mc²" |
|            | 4. Enter category: "Physics" |
|            | 5. Enter tags: "formulas, important" |
|            | 6. Click "Create Note" |
| Expected Result | Note should be created and displayed |
| Actual Result | Note created successfully |
| Status | Pass |

### Test Case 8: Create Goal

| Test Case ID | TC-008 |
|--------------|--------|
| Test Case Name | Create Goal |
| Description | Test creating a new goal |
| Pre-conditions | User is logged in and on goals page |
| Test Steps | 1. Click "Add Goal" button |
|            | 2. Enter title: "Complete Semester Project" |
|            | 3. Enter description: "Build web application" |
|            | 4. Set deadline: "2024-12-30" |
|            | 5. Set progress: "25" |
|            | 6. Click "Create Goal" |
| Expected Result | Goal should be created with progress bar |
| Actual Result | Goal created successfully |
| Status | Pass |

### Test Case 9: Create Assignment

| Test Case ID | TC-009 |
|--------------|--------|
| Test Case Name | Create Assignment |
| Description | Test creating a new assignment |
| Pre-conditions | User is logged in and on assignments page |
| Test Steps | 1. Click "Add Assignment" button |
|            | 2. Enter title: "Database Lab Report" |
|            | 3. Enter subject: "DBMS" |
|            | 4. Set due date: "2024-12-20" |
|            | 5. Click "Create Assignment" |
| Expected Result | Assignment should be created |
| Actual Result | Assignment created successfully |
| Status | Pass |

### Test Case 10: Delete Task

| Test Case ID | TC-010 |
|--------------|--------|
| Test Case Name | Delete Task |
| Description | Test deleting an existing task |
| Pre-conditions | Task exists in the system |
| Test Steps | 1. Navigate to tasks page |
|            | 2. Click on task options menu |
|            | 3. Click "Delete" |
|            | 4. Confirm deletion |
| Expected Result | Task should be deleted from the list |
| Actual Result | Task deleted successfully |
| Status | Pass |

## 4.4 Black Box Testing

Black box testing is performed without knowledge of the internal code structure. The following test cases focus on input-output behavior:

### Test Case BB-001: Registration with Invalid Email

| Input | Expected Output | Actual Output | Result |
|-------|-----------------|---------------|--------|
| Name: "Test User" | Error: "Please enter a | Error message | Pass |
| Email: "invalidemail" | valid email" | displayed | |
| Password: "test123" | | | |

### Test Case BB-002: Registration with Short Password

| Input | Expected Output | Actual Output | Result |
|-------|-----------------|---------------|--------|
| Name: "Test User" | Error: "Password must be | Error message | Pass |
| Email: "test@test.com" | at least 6 characters" | displayed | |
| Password: "123" | | | |

### Test Case BB-003: Task with Empty Title

| Input | Expected Output | Actual Output | Result |
|-------|-----------------|---------------|--------|
| Title: "" | Error: "Title is | Error message | Pass |
| Description: "Test" | required" | displayed | |
| Priority: "High" | | | |

### Test Case BB-004: Goal without Deadline

| Input | Expected Output | Actual Output | Result |
|-------|-----------------|---------------|--------|
| Title: "Test Goal" | Error: "Deadline is | Error message | Pass |
| Description: "Desc" | required" | displayed | |
| Deadline: "" | | | |

### Test Case BB-005: Note without Content

| Input | Expected Output | Actual Output | Result |
|-------|-----------------|---------------|--------|
| Title: "Test Note" | Error: "Content is | Error message | Pass |
| Content: "" | required" | displayed | |

## 4.5 White Box Testing

White box testing examines the internal logic and code paths. The following tests verify internal functionality:

### Test Case WB-001: Password Hashing

```javascript
// Test: Password should be hashed before storage
Input: password = "test123"
Process: hashPassword(password)
Expected: Hash string different from original
Actual: "$2a$12$K8E..." (bcrypt hash)
Result: Pass
```

### Test Case WB-002: JWT Token Generation

```javascript
// Test: Token should contain user information
Input: userId = "123", email = "test@test.com"
Process: generateToken({ userId, email, role: "student" })
Expected: Valid JWT token
Actual: "eyJhbGciOiJIUzI1NiIs..."
Result: Pass
```

### Test Case WB-003: Token Verification

```javascript
// Test: Valid token should return user payload
Input: token = "eyJhbGciOiJIUzI1NiIs..."
Process: verifyToken(token)
Expected: { userId: "123", email: "test@test.com" }
Actual: { userId: "123", email: "test@test.com" }
Result: Pass
```

### Test Case WB-004: Database Connection

```javascript
// Test: Database connection should be established
Input: MONGODB_URI = "mongodb://..."
Process: connectDB()
Expected: Connection successful
Actual: "MongoDB connected successfully"
Result: Pass
```

### Test Case WB-005: User Query Filtering

```javascript
// Test: Tasks should only return for current user
Input: userId = "user123"
Process: Task.find({ userId: "user123" })
Expected: Only tasks belonging to user123
Actual: Array of tasks for user123 only
Result: Pass
```

---

# CHAPTER 5: IMPLEMENTATION AND USER INTERFACE

## 5.1 Implementation Details

The Student Activity Tracker was implemented using modern web development technologies and best practices. This section describes the key implementation details and decisions made during development.

### Project Structure

The project follows a modular structure that separates concerns and makes the codebase maintainable:

```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   ├── api/               # API routes
│   └── dashboard/         # Dashboard pages
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── layout/           # Layout components
│   └── [feature]/        # Feature-specific components
├── lib/                   # Utility functions
├── models/               # Mongoose models
├── store/                # Redux store and slices
└── types/                # TypeScript type definitions
```

### Key Implementation Features

**Server-Side Rendering:**
Next.js provides server-side rendering which improves initial page load time and SEO. API routes run on the server, keeping sensitive logic secure.

**State Management:**
Redux Toolkit is used for global state management. Each feature has its own slice with actions and reducers. Async thunks handle API calls with loading and error states.

**Authentication Flow:**
JWT tokens are stored in HTTP-only cookies for security. The auth middleware verifies tokens on each protected API request. Auto-redirect handles unauthenticated access.

**Database Operations:**
Mongoose ODM provides schema validation and type safety. Connection pooling ensures efficient database connections. Indexes are used for query optimization.

**Form Handling:**
React Hook Form provides efficient form state management with minimal re-renders. Validation rules are defined inline with helpful error messages.

**Responsive Design:**
Tailwind CSS utility classes enable responsive design. Mobile-first approach ensures compatibility across devices. Sidebar collapses on mobile with hamburger menu.

## 5.2 User Interface Screens

### Screen 1: Landing Page

**Description:** The landing page is the first page users see when they visit the application. It provides an overview of the application features and encourages users to sign up or login.

**Features:**
- Hero section with application title and tagline
- Feature highlights with icons
- Call-to-action buttons for Sign Up and Login
- Modern gradient background design
- Responsive layout for all devices

**Input:** None (informational page)

**Output:** Navigation to login or register pages

---

### Screen 2: Registration Page

**Description:** The registration page allows new users to create an account in the system.

**Features:**
- Form fields for name, email, password, and confirm password
- Real-time validation with error messages
- Password visibility toggle
- Terms and conditions checkbox
- Link to login page for existing users

**Input:**
- Full Name (required)
- Email Address (required, valid email format)
- Password (required, minimum 6 characters)
- Confirm Password (must match password)

**Output:** Account created, redirect to dashboard

---

### Screen 3: Login Page

**Description:** The login page allows registered users to access their account.

**Features:**
- Email and password input fields
- Remember me checkbox
- Forgot password link
- Password visibility toggle
- Link to registration page

**Input:**
- Email Address
- Password

**Output:** Successful login, redirect to dashboard

---

### Screen 4: Dashboard

**Description:** The dashboard provides an overview of all user activities with statistics and analytics.

**Features:**
- Statistics cards for Tasks, Attendance, Notes, Goals, and Assignments
- Task progress visualization with progress bars
- Attendance percentage with circular progress
- Recent tasks list
- Upcoming deadlines section

**Input:** User authentication token

**Output:** Statistics and activity data

---

### Screen 5: Tasks Page

**Description:** The tasks page allows users to manage their daily tasks.

**Features:**
- Grid view of all tasks
- Task cards with title, description, status, and priority
- Filter buttons for status (All, Pending, In Progress, Completed)
- Add Task button
- Task options menu (Edit, Mark Complete, Delete)
- Color-coded priority indicators

**Input:** Task operations (create, update, delete)

**Output:** Updated task list

---

### Screen 6: Task Form Modal

**Description:** Modal form for creating or editing tasks.

**Features:**
- Title input field
- Description textarea
- Status dropdown (Pending, In Progress, Completed)
- Priority dropdown (Low, Medium, High)
- Due date picker
- Cancel and Submit buttons

**Input:** Task details

**Output:** Task created or updated

---

### Screen 7: Attendance Page

**Description:** The attendance page allows users to track their daily attendance.

**Features:**
- Statistics cards for Present, Absent, Late, Excused
- Interactive calendar view
- Color-coded attendance indicators on calendar
- Recent attendance records list
- Mark Today button

**Input:** Date, status, subject selection

**Output:** Attendance marked, statistics updated

---

### Screen 8: Attendance Form Modal

**Description:** Modal for marking attendance.

**Features:**
- Date picker
- Status dropdown (Present, Absent, Late, Excused)
- Subject input (optional)
- Notes field (optional)

**Input:** Attendance details

**Output:** Attendance record created

---

### Screen 9: Notes Page

**Description:** The notes page allows users to create and organize study notes.

**Features:**
- Search bar for finding notes
- Grid view of note cards
- Color-coded notes
- Pinned notes section
- Category and tag display
- Note options menu

**Input:** Search query, note operations

**Output:** Filtered notes list

---

### Screen 10: Note Form Modal

**Description:** Modal for creating or editing notes.

**Features:**
- Title input
- Content textarea (larger for notes)
- Category input
- Tags input (comma-separated)
- Pin toggle option

**Input:** Note details

**Output:** Note created or updated

---

### Screen 11: Goals Page

**Description:** The goals page allows users to set and track academic goals.

**Features:**
- Statistics cards for Total, Completed, In Progress, Not Started
- Goal cards with progress bars
- Filter by status
- Visual progress indicators
- Deadline display with days remaining

**Input:** Goal operations

**Output:** Goal list with progress

---

### Screen 12: Goal Form Modal

**Description:** Modal for creating or editing goals.

**Features:**
- Title input
- Description textarea
- Deadline date picker
- Status dropdown
- Progress slider (0-100%)
- Category input

**Input:** Goal details

**Output:** Goal created or updated

---

### Screen 13: Assignments Page

**Description:** The assignments page allows users to manage their assignments.

**Features:**
- Statistics cards for Total, Pending, Submitted, Graded
- Assignment cards with status indicators
- Due date display
- File link display
- Grade display (if graded)
- Mark as Submitted option

**Input:** Assignment operations

**Output:** Assignment list

---

### Screen 14: Assignment Form Modal

**Description:** Modal for creating or editing assignments.

**Features:**
- Title input
- Description textarea
- Subject input
- Due date picker
- Status dropdown
- File URL input

**Input:** Assignment details

**Output:** Assignment created or updated

---

### Screen 15: Sidebar Navigation

**Description:** The sidebar provides navigation to all sections of the application.

**Features:**
- Application logo and name
- User profile card with avatar
- Quick statistics
- Navigation menu with icons
- Active state highlighting
- Settings and help options
- Logout button
- Collapsible on mobile

**Input:** Navigation clicks

**Output:** Page navigation

---

### Screen 16: Navbar

**Description:** The top navigation bar provides quick actions and user information.

**Features:**
- Hamburger menu for mobile
- Welcome message with user name
- Notifications icon
- User dropdown menu
- Profile and settings links
- Logout option

**Input:** User actions

**Output:** Menu operations

## 5.3 Output Screens

### Output 1: Dashboard Statistics Display

When a user logs in and views the dashboard, the following statistics are displayed:

**Tasks Statistics:**
- Total Tasks: 15
- Completed: 8
- In Progress: 4
- Pending: 3

**Attendance Statistics:**
- Attendance Percentage: 85%
- Present Days: 17
- Absent Days: 2
- Late Days: 1

**Recent Activities:**
- Latest task updates
- Upcoming deadlines

---

### Output 2: Task List Display

The tasks page displays all user tasks in a grid format:

**Task Card Example:**
```
+----------------------------------+
| [High Priority] [Pending]        |
|                                  |
| Complete Database Assignment     |
| Submit the ER diagram and        |
| normalization report             |
|                                  |
| Due: Dec 15, 2024               |
| Created: Dec 10, 2024           |
+----------------------------------+
```

---

### Output 3: Attendance Calendar View

The attendance calendar shows monthly attendance with color coding:

```
        December 2024
  Sun Mon Tue Wed Thu Fri Sat
   1   2   3   4   5   6   7
  [●] [●] [●] [○] [●] [●] [ ]
   8   9  10  11  12  13  14
  [ ] [●] [●] [●] [●] [●] [ ]
  
  ● Present  ○ Absent  ◐ Late
```

---

### Output 4: Notes Display

Notes are displayed in a grid with color-coded cards:

```
+------------------+ +------------------+
| 📌 Physics       | | Chemistry        |
|                  | |                  |
| Important        | | Organic          |
| Formulas         | | Chemistry        |
|                  | | Notes            |
| F = ma           | |                  |
| E = mc²          | | Carbon compounds |
|                  | | basics...        |
| #formulas #exam  | | #organic         |
| Dec 10           | | Dec 8            |
+------------------+ +------------------+
```

---

### Output 5: Goal Progress Display

Goals show visual progress indicators:

```
+------------------------------------+
| 🎯 Complete Semester Project       |
|    Academic                        |
|                                    |
| Build a full-stack web application |
|                                    |
| Progress: 75%                      |
| [████████████████░░░░░░] 75%      |
|                                    |
| [In Progress]  Due: Dec 30, 2024  |
+------------------------------------+
```

---

### Output 6: Assignment Status Display

Assignments show submission status and grades:

```
+----------------------------------------+
| 📄 Database Lab Report                  |
|    [DBMS] [Submitted]                   |
|                                         |
| ER diagram and normalization report     |
|                                         |
| Due: Dec 20, 2024                       |
| ✓ Submitted: Dec 18, 2024              |
|                                         |
| Grade: A                                |
| [Download Submission]                   |
+----------------------------------------+
```

---

# CHAPTER 6: CONCLUSION AND FUTURE SCOPE

## 6.1 Conclusion

The Student Activity Tracker project has been successfully developed and implemented as a comprehensive web application for managing academic activities. The project meets all the objectives that were defined at the beginning of the development process.

**Key Achievements:**

1. **Centralized Platform:** Successfully created a single platform where students can manage all their academic activities including tasks, attendance, notes, goals, and assignments.

2. **User-Friendly Interface:** Developed an intuitive and modern user interface that is easy to navigate and use. The dark theme with emerald accents provides a pleasant viewing experience.

3. **Secure Authentication:** Implemented secure user authentication using JWT tokens stored in HTTP-only cookies, ensuring user data protection.

4. **Responsive Design:** The application works seamlessly on all devices including desktops, tablets, and mobile phones.

5. **Real-Time Statistics:** The dashboard provides comprehensive statistics and analytics that help students understand their progress.

6. **Modern Technology Stack:** Successfully implemented the application using modern technologies including Next.js 14, React 19, TypeScript, MongoDB, and Tailwind CSS.

**Technical Accomplishments:**

- Developed over 15 API endpoints for various functionalities
- Created 6 database models with proper relationships
- Implemented Redux Toolkit for efficient state management
- Built over 20 reusable React components
- Achieved responsive design for all screen sizes

**Learning Outcomes:**

Through this project, significant practical knowledge was gained in:
- Full-stack web development
- Database design and management
- API development and REST architecture
- State management in React applications
- User authentication and security
- Software engineering principles
- Project documentation

The project demonstrates the practical application of concepts learned during the BCA program and provides a working solution to a real-world problem faced by students.

## 6.2 Limitations

While the Student Activity Tracker successfully meets its primary objectives, there are some limitations that were identified:

1. **No Real-Time Notifications:** The application does not send email or SMS notifications for upcoming deadlines or reminders.

2. **Limited File Upload:** Currently, file uploads are handled through URL links only. Direct file upload functionality is not implemented.

3. **No Offline Support:** The application requires an internet connection to function. Offline access is not available.

4. **Single User Focus:** The application is designed for individual use. Collaborative features for group projects are not available.

5. **No Integration with College Systems:** The application does not integrate with existing college management systems or learning management systems.

6. **Limited Analytics:** While basic statistics are provided, advanced analytics and insights are not available.

7. **No Mobile App:** The application is web-based only. Native mobile applications for iOS and Android are not available.

8. **No Data Export:** Users cannot export their data in formats like PDF or Excel.

## 6.3 Future Scope

The Student Activity Tracker has significant potential for future enhancements. The following features can be added in future versions:

1. **Push Notifications:** Implement browser push notifications and email reminders for upcoming deadlines and tasks.

2. **Direct File Upload:** Add functionality to upload files directly to the server or cloud storage services like Google Drive or Dropbox.

3. **Progressive Web App (PWA):** Convert the application to a PWA for offline support and mobile app-like experience.

4. **Collaboration Features:** Add features for group projects, shared tasks, and team goals.

5. **Calendar Integration:** Integrate with Google Calendar or Outlook for better schedule management.

6. **Advanced Analytics:** Add detailed analytics with charts and graphs showing trends, productivity patterns, and performance insights.

7. **Teacher Portal:** Create a separate portal for teachers to assign tasks, track student progress, and provide feedback.

8. **Mobile Applications:** Develop native mobile applications for iOS and Android platforms.

9. **Data Export/Import:** Allow users to export their data in various formats and import data from other applications.

10. **AI-Powered Suggestions:** Implement AI to provide study suggestions, predict deadlines, and recommend focus areas.

11. **Gamification:** Add achievement badges, streaks, and rewards to motivate students.

12. **Multi-Language Support:** Add support for multiple languages to cater to a wider audience.

13. **Dark/Light Theme Toggle:** Allow users to switch between dark and light themes.

14. **Study Timer/Pomodoro:** Add a built-in study timer with Pomodoro technique support.

15. **Resource Library:** Add a section for storing and organizing study resources and links.

---

# REFERENCES

1. Next.js Documentation - https://nextjs.org/docs

2. React Documentation - https://react.dev/

3. MongoDB Documentation - https://www.mongodb.com/docs/

4. Mongoose Documentation - https://mongoosejs.com/docs/

5. Tailwind CSS Documentation - https://tailwindcss.com/docs

6. Redux Toolkit Documentation - https://redux-toolkit.js.org/

7. TypeScript Documentation - https://www.typescriptlang.org/docs/

8. JWT.io - JSON Web Tokens Introduction - https://jwt.io/introduction

9. bcrypt.js Documentation - https://www.npmjs.com/package/bcryptjs

10. Axios Documentation - https://axios-http.com/docs/intro

11. React Hook Form Documentation - https://react-hook-form.com/

12. Lucide Icons - https://lucide.dev/

13. Pressman, R.S. (2014). Software Engineering: A Practitioner's Approach. McGraw-Hill Education.

14. Sommerville, I. (2015). Software Engineering. Pearson Education.

15. Silberschatz, A., Korth, H.F., & Sudarshan, S. (2019). Database System Concepts. McGraw-Hill Education.

---

# APPENDIX A: SOURCE CODE

## A.1 Database Connection (lib/db.ts)

```typescript
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

const cached: MongooseCache = { conn: null, promise: null };

async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      console.log('MongoDB connected successfully');
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
```

## A.2 User Model (models/User.ts)

```typescript
import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  role: 'student' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    role: {
      type: String,
      enum: ['student', 'admin'],
      default: 'student',
    },
  },
  { timestamps: true }
);

const User: Model<IUser> = mongoose.models.User || 
  mongoose.model<IUser>('User', UserSchema);

export default User;
```

## A.3 Task Model (models/Task.ts)

```typescript
import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ITask extends Document {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const TaskSchema: Schema<ITask> = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      enum: ['pending', 'in-progress', 'completed'],
      default: 'pending',
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
    dueDate: Date,
  },
  { timestamps: true }
);

const Task: Model<ITask> = mongoose.models.Task || 
  mongoose.model<ITask>('Task', TaskSchema);

export default Task;
```

## A.4 Authentication API (api/auth/login/route.ts)

```typescript
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/User';
import { verifyPassword, generateToken, setAuthCookie } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password required' },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const isValid = await verifyPassword(password, user.password);
    if (!isValid) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const token = generateToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    });

    await setAuthCookie(token);

    return NextResponse.json({
      success: true,
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
```

## A.5 Tasks API (api/tasks/route.ts)

```typescript
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Task from '@/models/Task';
import { getAuthUser } from '@/lib/auth';

export async function GET() {
  try {
    const authUser = await getAuthUser();
    if (!authUser) {
      return NextResponse.json(
        { success: false, message: 'Not authenticated' },
        { status: 401 }
      );
    }

    await connectDB();
    const tasks = await Task.find({ userId: authUser.userId })
      .sort({ createdAt: -1 });

    return NextResponse.json({ success: true, tasks });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const authUser = await getAuthUser();
    if (!authUser) {
      return NextResponse.json(
        { success: false, message: 'Not authenticated' },
        { status: 401 }
      );
    }

    await connectDB();
    const { title, description, status, priority, dueDate } = 
      await request.json();

    if (!title) {
      return NextResponse.json(
        { success: false, message: 'Title required' },
        { status: 400 }
      );
    }

    const task = await Task.create({
      userId: authUser.userId,
      title,
      description,
      status,
      priority,
      dueDate,
    });

    return NextResponse.json(
      { success: true, task },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
```

## A.6 Redux Task Slice (store/slices/taskSlice.ts)

```typescript
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/tasks');
      return response.data.tasks;
    } catch (error) {
      return rejectWithValue('Failed to fetch tasks');
    }
  }
);

export const createTask = createAsyncThunk(
  'tasks/createTask',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/tasks', data);
      return response.data.task;
    } catch (error) {
      return rejectWithValue('Failed to create task');
    }
  }
);

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = action.payload;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.tasks.unshift(action.payload);
      });
  },
});

export default taskSlice.reducer;
```

---

**END OF PROJECT REPORT**

---

*Note: Replace [Your Name], [Roll Number], [Guide Name], [College Name], [University Name], and other placeholder text with actual information before submission.*

