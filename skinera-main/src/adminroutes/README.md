# Admin Routes

This directory contains all admin-related pages and components for the DSkinova application.

## Structure

```
src/adminroutes/
├── index.js                 # Main exports for admin routes
├── pages/
│   ├── AdminLogin.jsx      # Admin login page
│   └── Dashboard.jsx       # Admin dashboard page (refactored with components)
└── components/
    ├── Login.jsx           # Generic login component
    ├── DashboardHeader.jsx # Dashboard header with title and logout
    ├── NewsManager.jsx     # News form manager container
    ├── NewsForm.jsx        # Form for creating/editing news
    ├── NewsPreview.jsx     # Preview component for news articles
    ├── NewsList.jsx        # List of news articles with pagination
    ├── NewsCard.jsx        # Individual news card component
    └── Pagination.jsx      # Reusable pagination component
```

## Pages

### AdminLogin.jsx

- **Route**: `/admin-login`
- **Description**: Main admin login page with authentication
- **Features**:
  - Form validation
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

### DashboardHeader.jsx

- **Description**: Header section with dashboard title and logout button
- **Props**: `onLogout` (function)

### NewsManager.jsx

- **Description**: Container component for news creation/editing
- **Features**: Form and preview layout, manages news form state
- **Props**: newsForm, editingNews, various handlers

### NewsForm.jsx

- **Description**: Complete form for creating/editing news articles
- **Features**: Title, excerpt, images, paragraphs, tags management
- **Props**: Form data and all form manipulation handlers

### NewsPreview.jsx

- **Description**: Live preview of news article being created/edited
- **Props**: `newsForm` (object)

### NewsList.jsx

- **Description**: Container for displaying news articles with pagination
- **Features**: Add news button, news cards, pagination controls
- **Props**: news data, pagination, and CRUD handlers

### NewsCard.jsx

- **Description**: Individual news article card with edit/delete actions
- **Props**: `news` (object), `onEdit`, `onDelete` (functions)

### Pagination.jsx

- **Description**: Reusable pagination component
- **Features**: Page numbers, previous/next, items count display
- **Props**: pagination data and navigation handlers

### Login.jsx

- **Description**: Generic login component that can be extended
- **Purpose**: Base component for future admin authentication features

## Usage

Import admin components using the centralized index:

```javascript
import { AdminLogin, Dashboard } from "./adminroutes/index.js";
```

## Component Architecture

The Dashboard has been refactored into smaller, reusable components:

- **Separation of Concerns**: Each component has a single responsibility
- **Reusability**: Components like Pagination can be used in other parts of the admin panel
- **Maintainability**: Easier to debug and update individual features
- **Testing**: Smaller components are easier to unit test
- **Props-based**: All components receive data through props, making them predictable

## Authentication Flow

1. User navigates to `/admin-login`
2. Enters credentials
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
