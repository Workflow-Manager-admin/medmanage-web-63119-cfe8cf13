import React, { useState } from "react";
import "./App.css";

// Color palette & theme constants as JS objects (for component colors)
const COLORS = {
  primary: "#1976d2",
  accent: "#00bcd4",
  secondary: "#424242",
  bgLight: "#ffffff",
  bgSidebar: "#f4f8fb",
  border: "#eeeeee",
  sidebarSelected: "#e3f2fd"
};

const SIDEBAR_ITEMS = [
  { label: "Dashboard", id: "dashboard" },
  { label: "Appointments", id: "appointments" },
  { label: "Patient Records", id: "patients" },
  { label: "Search", id: "search" },
  { label: "Notifications", id: "notifications" }
];

function Sidebar({ selected, onSelect }) {
  return (
    <aside className="sidebar" data-testid="sidebar">
      <div className="sidebar-title">MedManage</div>
      <nav>
        {SIDEBAR_ITEMS.map(item => (
          <div
            key={item.id}
            className={`sidebar-link${selected === item.id ? " selected" : ""}`}
            onClick={() => onSelect(item.id)}
            tabIndex={0}
            role="button"
            aria-label={item.label}
          >
            {item.label}
          </div>
        ))}
      </nav>
    </aside>
  );
}

function Topbar({ onProfile, onNotifications }) {
  return (
    <header className="topbar" data-testid="topbar">
      <div className="topbar-end">
        <button className="topbar-btn" onClick={onNotifications} aria-label="Notifications">
          🔔
        </button>
        <button className="topbar-btn" onClick={onProfile} aria-label="Profile">
          👤
        </button>
      </div>
    </header>
  );
}

// Feature page stubs (extend these as needed)
function DashboardStub() {
  // PUBLIC_INTERFACE
  return (
    <section className="page">
      <h2>Dashboard</h2>
      <div className="metrics-row">
        <div className="metric-card">
          <span className="metric-label">Today's Appointments</span>
          <span className="metric-value">--</span>
        </div>
        <div className="metric-card">
          <span className="metric-label">Patients</span>
          <span className="metric-value">--</span>
        </div>
        <div className="metric-card">
          <span className="metric-label">Upcoming</span>
          <span className="metric-value">--</span>
        </div>
      </div>
      <p className="page-placeholder">You will soon see quick stats here!</p>
    </section>
  );
}

function AppointmentsStub() {
  // PUBLIC_INTERFACE
  return (
    <section className="page">
      <h2>Appointments</h2>
      <p className="page-placeholder">Appointment list & management features will appear here.</p>
      <div className="appointments-table-placeholder"></div>
    </section>
  );
}

function PatientsStub() {
  // PUBLIC_INTERFACE
  return (
    <section className="page">
      <h2>Patient Records</h2>
      <p className="page-placeholder">View and edit patient records.</p>
      <div className="patients-table-placeholder"></div>
    </section>
  );
}

function SearchStub() {
  // PUBLIC_INTERFACE
  return (
    <section className="page">
      <h2>Search Patients</h2>
      <input
        className="search-input"
        type="search"
        placeholder="Search by name, record, or ID"
        disabled
      />
      <p className="page-placeholder">Patient search results will be shown here.</p>
    </section>
  );
}

function NotificationsStub() {
  // PUBLIC_INTERFACE
  return (
    <section className="page">
      <h2>Notifications</h2>
      <p className="page-placeholder">You have no notifications.</p>
    </section>
  );
}

function MainContent({ selectedPage }) {
  // PUBLIC_INTERFACE
  switch (selectedPage) {
    case "dashboard":
      return <DashboardStub />;
    case "appointments":
      return <AppointmentsStub />;
    case "patients":
      return <PatientsStub />;
    case "search":
      return <SearchStub />;
    case "notifications":
      return <NotificationsStub />;
    default:
      return <DashboardStub />;
  }
}

// Main App component scaffolding sidebar + topbar + main
// PUBLIC_INTERFACE
function App() {
  const [selectedPage, setSelectedPage] = useState("dashboard");

  // These are stubs for notification/profile handlers
  const handleProfile = () => {
    alert("Profile management coming soon.");
  };
  const handleNotifications = () => {
    setSelectedPage("notifications");
  };

  return (
    <div className="doctor-app-root" style={{ "--primary": COLORS.primary, "--accent": COLORS.accent, "--secondary": COLORS.secondary }}>
      <Sidebar selected={selectedPage} onSelect={setSelectedPage} />
      <div className="main-area">
        <Topbar onProfile={handleProfile} onNotifications={handleNotifications} />
        <main className="main-content" role="main">
          <MainContent selectedPage={selectedPage} />
        </main>
      </div>
    </div>
  );
}

export default App;
