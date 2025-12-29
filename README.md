# 🎯 Career Code - Job Portal Client

A modern, full-featured job portal application built with React that connects job seekers with employers. This platform offers a seamless experience for job searching, application management, and job posting with Bengali language support.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-38B2AC?logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-12.7.0-FFCA28?logo=firebase&logoColor=black)

## ✨ Features

### 🔍 For Job Seekers

- **Job Search & Browse**: Search jobs by title, location, and category
- **Job Details**: View comprehensive job descriptions, requirements, and company information
- **Job Applications**: Apply to jobs with resume and cover letter submission
- **Application Tracking**: Track all your job applications in one place
- **Salary Tools**:
  - Salary calculator for compensation estimates
  - Salary tips and negotiation advice
- **Company Directory**: Browse and explore different companies

### 💼 For Employers

- **Post Jobs**: Create and publish job listings with detailed descriptions
- **Manage Jobs**: View, update, and manage all your posted jobs
- **Application Management**: Review and manage job applications
- **Company Profile**: Showcase your company and opportunities

### 🔐 Authentication & Security

- **Email/Password Authentication**: Secure user registration and login
- **Google Sign-In**: Quick authentication with Google account
- **Protected Routes**: Secure access to authenticated pages
- **User Context**: Global authentication state management

### 🎨 User Experience

- **Modern UI**: Beautiful, responsive design with Tailwind CSS
- **Bengali Language Support**: Full Bengali interface for local users
- **Loading States**: Smooth loading indicators and transitions
- **Error Handling**: User-friendly error pages and messages
- **Toast Notifications**: Real-time feedback with react-toastify
- **Sweet Alerts**: Elegant alert dialogs for important actions

## 🛠️ Technology Stack

### Core Technologies

- **React 19.2.0** - Modern UI library
- **Vite 7.2.4** - Fast build tool and dev server
- **React Router 7.11.0** - Client-side routing
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **DaisyUI 5.5.14** - Tailwind CSS component library

### Authentication & Backend

- **Firebase 12.7.0** - Authentication service
- **Axios 1.13.2** - HTTP client for API requests

### UI/UX Libraries

- **Lucide React 0.562.0** - Beautiful icon library
- **React Icons 5.5.0** - Popular icon library
- **React Spinners 0.17.0** - Loading spinner components
- **React Toastify 11.0.5** - Toast notification library
- **SweetAlert2 11.26.17** - Elegant alert dialogs
- **Motion 12.23.26** - Animation library

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Getting Started

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Job-Portal-Client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add your Firebase configuration:

   ```env
   VITE_apiKey=your-firebase-api-key
   VITE_authDomain=your-firebase-auth-domain
   VITE_projectId=your-firebase-project-id
   VITE_storageBucket=your-firebase-storage-bucket
   VITE_messagingSenderId=your-firebase-messaging-sender-id
   VITE_appId=your-firebase-app-id
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📁 Project Structure

```
Job-Portal-Client/
├── public/                 # Static assets
├── src/
│   ├── Components/        # Reusable React components
│   │   ├── FeaturedJobs.jsx
│   │   ├── JobCard.jsx
│   │   ├── JobDetails.jsx
│   │   ├── JobApply.jsx
│   │   ├── MyApplication.jsx
│   │   ├── MyPostedJobs/
│   │   ├── PostJob.jsx
│   │   ├── UpdatePostJob.jsx
│   │   ├── SalaryCalculator.jsx
│   │   ├── SalaryTips.jsx
│   │   ├── SignIn.jsx
│   │   ├── SignUp.jsx
│   │   └── GoogleSignUp.jsx
│   ├── Contexts/          # React Context providers
│   │   └── AuthContext/
│   │       ├── AuthContext.jsx
│   │       └── AuthProvider.jsx
│   ├── Pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── FindJob.jsx
│   │   ├── Companies.jsx
│   │   ├── PostJob.jsx
│   │   ├── Salaries.jsx
│   │   └── Errorpage.jsx
│   ├── Layout/            # Layout components
│   │   ├── RootLayout.jsx
│   │   └── SalaryLayout.jsx
│   ├── Router/            # Routing configuration
│   │   └── router.jsx
│   ├── Shared/            # Shared components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── firebase/          # Firebase configuration
│   │   └── firebase.init.js
│   ├── PrivateRoute.jsx/  # Protected route component
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

## 🔌 API Integration

This application connects to a backend API hosted at:

```
https://job-portal-server-y6ck.onrender.com
```

### Main API Endpoints Used:

- `GET /jobs` - Fetch all jobs
- `GET /jobs/:id` - Get job details
- `GET /job-post` - Fetch all job posts
- `GET /job-post/:id` - Get specific job post
- `POST /job-post` - Create new job post
- `GET /job-applications?email=...` - Get user's applications
- `POST /job-applications` - Submit job application

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🌐 Deployment

This project is configured for deployment on **Vercel**. The deployment configuration is in `vercel.json`.

### Deploy to Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## 🔒 Environment Variables

Make sure to set the following environment variables in your hosting platform:

- `VITE_apiKey`
- `VITE_authDomain`
- `VITE_projectId`
- `VITE_storageBucket`
- `VITE_messagingSenderId`
- `VITE_appId`

## 🎨 Key Features Breakdown

### Authentication System

- Email/password authentication
- Google OAuth integration
- Protected routes for authenticated users
- Global auth state management with Context API

### Job Management

- **For Employers**: Post, update, and manage job listings
- **For Job Seekers**: Search, view, and apply to jobs
- Real-time job listings
- Application tracking

### User Interface

- Fully responsive design (mobile, tablet, desktop)
- Modern UI with Tailwind CSS
- Smooth animations and transitions
- Bengali language support
- Intuitive navigation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built with ❤️ for the job seekers and employers community.

## 🙏 Acknowledgments

- Firebase for authentication services
- React community for excellent documentation
- All contributors and users of this project

## 📞 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

⭐ If you found this project helpful, please consider giving it a star!
