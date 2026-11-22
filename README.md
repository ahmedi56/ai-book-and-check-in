# 🎟️ AI Book & Check-In

> **Multi-business reservation and QR check-in platform with an AI booking assistant, PostgreSQL double-booking protection, signed digital tickets, and a live staff dashboard.**

[![Status](https://img.shields.io/badge/status-active-success?style=for-the-badge)]()
[![Stack](https://img.shields.io/badge/Next.js%20%2B%20PostgreSQL-Ready-black?style=for-the-badge)]()
[![AI Assistant](https://img.shields.io/badge/AI%20Booking-Assistant-6366F1?style=for-the-badge)]()
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)]()

---

## ✨ Overview

**AI Book & Check-In** is a multi-business reservation and entry-management platform designed for smooth bookings and verified arrivals:

* 🤖 **AI Booking Assistant:** Helps guests find open slots, book reservations naturally, and get clear answers about scheduling and business rules.
* 🛡️ **PostgreSQL Double-Booking Protection:** Uses transactional checks and database constraints so overlapping or duplicate reservations are blocked at the data layer.
* 🎫 **Signed Digital Tickets & QR Check-In:** Issues signed digital tickets and QR codes that staff can scan and verify on arrival.
* 📊 **Live Staff Dashboard:** Gives staff real-time visibility into incoming arrivals, check-in status, and capacity activity.

---

## End-to-End Platform & AI Pipeline

| Step | Stage | What Happens | Output |
| :--- | :--- | :--- | :--- |
| **01** | <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg> **AI Booking Assistant** | Parses booking intent, slot, party size, and business rules | Structured booking request & reply |
| **02** | <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg> **PostgreSQL Double-Booking Guard** | Runs atomic availability checks and blocks overlapping slots | Confirmed reservation record |
| **03** | <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg> **Signed Digital Ticket & QR Pass** | Signs ticket payload and generates a scannable QR pass | Verifiable digital ticket |
| **04** | <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect width="8" height="8" x="8" y="8" rx="1"/></svg> **QR Check-In & Verification** | Verifies signature, validity window, and records arrival | Checked-in state transition |
| **05** | <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/></svg> **Live Staff Dashboard** | Streams live check-ins, arrivals, and capacity status | Real-time operational view |