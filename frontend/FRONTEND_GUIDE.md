# Frontend Development Guide: Unified Skill Verification Platform

As a Senior Frontend Developer, I've reviewed the Product Requirements Document (PRD) for your SIH project. This guide outlines how we should architect, design, and build the frontend to ensure it's scalable, performant, and delivers a premium user experience.

## 1. Technology Stack Selection

Based on the PRD's strict requirement for the MERN stack, here is the recommended frontend toolkit:

*   **Core Framework**: React.js (Initialized with Vite for faster builds and better Developer Experience).
*   **Routing**: `react-router-dom` (V6+) for handling complex role-based navigation.
*   **State Management**: `Zustand` or `Redux Toolkit`. (Zustand is recommended for its simplicity and less boilerplate, perfect for handling user sessions, roles, and global UI states).
*   **API Communication**: `Axios` with interceptors (to handle JWT token injection and auto-refresh mechanisms).
*   **Styling**: Vanilla CSS Modules (to encapsulate styles and prevent clashes) or Styled Components. We will focus on building a custom, premium design system.
*   **Animations**: `Framer Motion` (to add subtle micro-animations, page transitions, and a dynamic feel to the application).
*   **Icons**: `Lucide React` or `Phosphor Icons` for clean, modern iconography.

## 2. Recommended Folder Structure

A scalable folder structure is crucial. I recommend a feature-based or standard organized approach inside the `src` directory:

```text
src/
├── assets/            # Images, fonts, raw SVGs
├── components/        # Reusable UI components (Buttons, Modals, Cards, Inputs)
├── layouts/           # Layout wrappers (e.g., DashboardLayout, AuthLayout)
├── pages/             # Route components grouped by role
│   ├── Auth/          # Login, Register, Forgot Password
│   ├── Student/       # Profile, Assessments, Job Matches
│   ├── Company/       # Dashboard, Create Opportunity, Candidates
│   ├── College/       # Analytics, Skill Trends
│   └── Admin/         # Verification Approvals, Entity Management
├── hooks/             # Custom React hooks (e.g., useAuth, useFetch)
├── services/          # API call functions (e.g., api/auth.js, api/student.js)
├── store/             # Global state definitions (Zustand/Redux)
├── utils/             # Helper functions (date formatting, validators)
├── styles/            # Global CSS variables, reset, and design tokens
├── App.jsx            # Main App component with Routing
└── main.jsx           # React entry point
```

## 3. UI/UX Design Principles (Crucial for SIH)

To make a lasting impression on the judges, the application must feel premium.
*   **Color Palette**: Avoid basic colors. Use a sophisticated palette (e.g., Deep Slate `hsl(210, 20%, 15%)` for dark themes, soft gradients, and an accent color like Electric Blue or Teal for interactive elements).
*   **Typography**: Use a modern, readable sans-serif font like *Inter*, *Outfit*, or *Plus Jakarta Sans*. 
*   **Glassmorphism**: Use subtle backdrop filters (`backdrop-filter: blur(10px)`) on modals, dropdowns, and sticky headers to give a modern, layered feel.
*   **Micro-interactions**: 
    *   Buttons should slightly scale up or change glow on hover.
    *   Use skeleton loaders instead of basic spinners while fetching data.
    *   Transition smoothly between page routes.
*   **Data Visualization**: For the College Analytics dashboard, use a charting library like `Recharts` or `Chart.js` to create beautiful, interactive graphs (not just raw tables).

## 4. Authentication & Role-Based Access Control (RBAC)

Since there are 4 distinct roles (Student, Company, College, Admin), routing must be secure.

1.  **JWT Handling**: Store the JWT in `localStorage` or `httpOnly` cookies.
2.  **Protected Routes**: Create a `<ProtectedRoute />` wrapper component that checks:
    *   Is the user authenticated?
    *   Does the user have the required role to access this route?
3.  **Role Redirection**: Upon login, the system should redirect the user to their specific dashboard (`/student/dashboard`, `/company/dashboard`, etc.).

## 5. Step-by-Step Implementation Plan

### Phase 1: Foundation (Days 1-2)
*   Initialize the React (Vite) app.
*   Set up the global CSS variables (Design System).
*   Build foundational UI components (Button, Input, Card, Modal, Badges for "Verified" / "Unverified" tags).
*   Set up React Router with basic dummy pages for the 4 roles.

### Phase 2: Authentication & Context (Day 3)
*   Implement the Global State (Auth Store).
*   Build the Login and Registration flows.
*   Integrate API services to communicate with your Node.js backend.
*   Implement Protected Routes.

### Phase 3: Student Module (Days 4-6)
*   Build the **Professional Profile** page (view and edit).
*   Build the **Skill Declaration** UI (distinguishing visually between Verified and Unverified).
*   Build the **Assessment Interface** (Timer, questions, submit).
*   Build the **Opportunity Discovery** page, showing Match Scores using visual progress bars or circular indicators.

### Phase 4: Company & College Modules (Days 7-9)
*   **Company**: Verification request UI, Dashboard, and the "Create Opportunity" form (Requires complex validation to ensure only verified companies can publish).
*   **College**: Build the analytics dashboard integrating charts to display skill gaps.

### Phase 5: Polish & AI Integration UI (Day 10)
*   Implement the UI for "AI Learning Recommendations" on the Student Dashboard.
*   Ensure all error handling is user-friendly (Toast notifications for API errors).
*   Audit for responsiveness (must work flawlessly on desktop and mobile).

## 6. Pro-Tips for SIH Judging

1.  **Visual Skill Tags**: Make sure the distinction between a `Verified` and `Unverified` skill is instantly obvious visually. Use a green checkmark icon with a solid background for verified, and a grey, dashed outline for unverified.
2.  **Explainable Match Score**: When showing a student their match score for a job, use a dynamic UI (like an expandable accordion) that explicitly breaks down *why* they got that score (Required vs. Preferred vs. Missing skills). The PRD demands this, and the UI should make it beautiful.
3.  **Demo State**: Ensure the "Acme Corp" (seeded verified company) has a stunning, fully populated profile page to wow the judges immediately without manual data entry during the pitch.

Let me know if you want to dive deeper into any specific component, like how to code the protected routes, or how to design the skill match UI!
