# Google-forms-clone

## Overview  
This project is a **Google Forms Clone**, a web-based form-building application that allows users to create, manage, and view forms. The application features **user authentication**, **form creation**, and **form viewing**, providing a seamless experience for users. The form URLs are generated using a **mixture of the MongoDB ID** for each record to ensure uniqueness.  

## Features  
✅ **User Authentication**: Login and registration system to manage users.  
✅ **Form Creation**: Users can create custom forms with a title, description, and multiple-choice questions.  
✅ **Form Viewing**: Users can view and access created forms via a unique URL.  
✅ **State Management**: Uses **localStorage** to manage user sessions.  
✅ **Responsive UI**: Styled to resemble Google Forms with a smooth UI/UX.  
✅ **Navigation**: A sidebar navigation system for easy access to different pages.  

## Tech Stack  
### **Frontend**  
- **React.js** (with React Router for navigation)  
- **CSS** for styling  
- **Component-based structure** with reusability in mind  

### **Backend**  
- **Node.js & Express.js**: Handles API requests  
- **MongoDB & Mongoose**: Stores user and form data  
- **CORS & Express Middleware** for secure data handling  

## API Endpoints  
- **`POST /createuser`** → Handles login & registration  
- **`POST /submitform`** → Saves form data to MongoDB  
- **`GET /view/:id`** → Fetches a form based on ID  

## Form URL Generation  
Each form's unique URL is generated by **combining a base URL with the MongoDB ID** of the respective record for simplicity, ensuring uniqueness for each form link.

## Setup & Installation  
1️⃣ Clone the repository:  
   ```bash
   git clone https://github.com/Bahugun0042/google-forms-clone
   cd google-forms-clone
   ```  
2️⃣ Install dependencies:  
   ```bash
   npm install   # For backend  
   cd frontend  
   npm install   # For frontend  
   ```  
3️⃣ Start the backend server:  
   ```bash
   node index.js
   ```  
4️⃣ Start the frontend:  
   ```bash
   npm start
   ```    

---  
This project provides an excellent foundation for a **Google Forms-like application**, allowing users to create and share forms seamlessly. 🚀  




![image alt](https://github.com/Bahugun0042/google-forms-clone/blob/6adc54d7a971ccb2e05ec23908bf22bef191b2f0/Screenshot%20(187).png)
![image alt](https://github.com/Bahugun0042/google-forms-clone/blob/6adc54d7a971ccb2e05ec23908bf22bef191b2f0/Screenshot%20(188).png)
![image alt](https://github.com/Bahugun0042/google-forms-clone/blob/6adc54d7a971ccb2e05ec23908bf22bef191b2f0/Screenshot%20(189).png)
![image alt](https://github.com/Bahugun0042/google-forms-clone/blob/6adc54d7a971ccb2e05ec23908bf22bef191b2f0/Screenshot%20(190).png)
![image alt](https://github.com/Bahugun0042/google-forms-clone/blob/6adc54d7a971ccb2e05ec23908bf22bef191b2f0/Screenshot%20(191).png)
![image alt](https://github.com/Bahugun0042/google-forms-clone/blob/6adc54d7a971ccb2e05ec23908bf22bef191b2f0/Screenshot%20(192).png)
![image alt](https://github.com/Bahugun0042/google-forms-clone/blob/6adc54d7a971ccb2e05ec23908bf22bef191b2f0/Screenshot%20(193).png)
![image alt](https://github.com/Bahugun0042/google-forms-clone/blob/6adc54d7a971ccb2e05ec23908bf22bef191b2f0/Screenshot%20(194).png)
