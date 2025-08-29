# Admin Routes

This directory contains all admin-related pages and components for the DSkinova application.

## Structure

```
src/adminroutes/
├── index.js              # Main exports for admin routes
├── pages/
│   ├── AdminLogin.jsx    # Admin login page
│   └── Dashboard.jsx     # Admin dashboard page
└── components/
    └── Login.jsx         # Generic login component
```

## Pages

### AdminLogin.jsx

- **Route**: `/admin-login`
- **Description**: Main admin login page with authentication
- **Features**:
  - Form validation
  - Demo credentials (admin/admin123)
  - Loading states
  - Error handling
  - Redirects to dashboard on successful login

### Dashboard.jsx

- **Route**: `/admin-dashboard`
- **Description**: Admin dashboard with news management
- **Features**:
  - Authentication check
  - News article management (CRUD)
  - Image upload handling
  - Pagination for news list
  - Form validation
  - Real-time preview

## Components

### Login.jsx

- **Description**: Generic login component that can be extended
- **Purpose**: Base component for future admin authentication features

## Usage

Import admin components using the centralized index:

```javascript
import { AdminLogin, Dashboard } from "./adminroutes/index.js";
```

## Authentication Flow

1. User navigates to `/admin-login`
2. Enters credentials (demo: admin/admin123)
3. On success, `adminAuthenticated` is stored in localStorage
4. User is redirected to `/admin-dashboard`
5. Dashboard checks authentication on mount
6. If not authenticated, redirects back to login

## Routes Configuration

The admin routes are configured in `src/App.jsx`:

```javascript
<Route path="/admin-login" element={<AdminLogin />} />
<Route path="/admin-dashboard" element={<Dashboard />} />
```

## Dependencies

- React Router DOM (for navigation)
- Tailwind CSS (for styling)
- Header and Footer components from main components directory
