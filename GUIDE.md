# HelpDesk Pro - Implementation Guide

HelpDesk Pro is a dual-styled IT Support platform designed to showcase both traditional corporate reliability and futuristic AI-driven automation.

## 🚀 Project Overview
This application is a single-page React application that manages a full IT ticketing lifecycle. It features two distinct "Home" visual styles and two functional "Dashboard" perspectives.

---

## 📂 Core Architecture

### 1. The Controller (`App.tsx`)
- **State Management**: Handles the logged-in user, the ticket database, and the current "view" (Landing, Login, Register, or Dashboard).
- **Theme Engine**: Manages the light/dark mode and transitions between "Corporate" (Home 1) and "Modern" (Home 2) styles.
- **Routing**: Switches components based on the `view` state without page reloads.

### 2. The Landing Zone (`views/LandingPage.tsx`)
This file contains both homepage implementations:
- **Corporate Edition (Home 1)**: Focuses on "Trust" and "Reliability". Uses a clean blue/white palette with relatable client testimonials.
- **Modern AI Edition (Home 2)**: Focuses on "Autonomy". Uses a dark/indigo palette, a live "system ticker," and mentions of neural triage nodes.
- **Navigation**: The header features specific dropdowns:
    - **Home Dropdown**: Switch instantly between style variants.
    - **Dashboards Dropdown**: Quick links to the User or Admin login entry points.

### 3. The Dashboards
- **User Station (`views/UserDashboard.tsx`)**: 
    - **Signal Request**: Users can "broadcast" new IT tickets.
    - **Neural Diagnostic**: Users can run Gemini-3-Pro logic on their tickets to find root causes.
    - **Veo Topology**: Users can upload a screenshot to generate an AI-powered "network topology" animation.
- **Admin Core (`views/AdminDashboard.tsx`)**:
    - **Dispatch Queue**: A list of all global system signals.
    - **AI Triage**: Admins get instant AI insights on how to fix a specific ticket.
    - **System Health**: A Gemini-generated summary of the entire fleet's status.

---

## 🤖 AI Integrations (`services/gemini.ts`)

- **Gemini 3 Pro**: Used for "Deep Thinking" sessions in the User Dashboard. It provides high-level architectural reasoning.
- **Gemini 3 Flash**: Used for fast triage and categorizing tickets in the Admin view.
- **Veo (Video Gen)**: Takes a static system image and generates a high-quality video loop representing the "active topology" of the issue.

---

## 🛠 Navigation Flow

1.  **Landing**: Explore the two home versions via the **Home** dropdown.
2.  **Contact Us**: Accessible directly from the main menu for support information.
3.  **Login**: Click the bordered **Login** button. Choose "Employee" (User) or "Admin".
4.  **Action**:
    - As a **User**: Create a ticket, then try "Run Neural Pass" for a diagnostic.
    - As an **Admin**: Click a ticket in the table to see the AI Triage suggestion.

---

## 🎨 Design Philosophy
- **Centering**: All sections use `text-center` and `items-center` for a balanced, premium feel.
- **Typography**: Uses the `Inter` font family for high legibility.
- **Responsiveness**: The mobile menu (hamburger) flattens the dropdowns into an easy-to-use vertical list.