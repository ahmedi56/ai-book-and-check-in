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

### 01 · AI Booking Assistant
![Stage 01](https://img.shields.io/badge/01-AI%20Assistant-6366F1?style=flat-square)
* **What happens:** Parses booking intent, requested slot, party size, and business rules.
* **Output:** Structured booking request and clear assistant reply.

### 02 · PostgreSQL Double-Booking Guard
![Stage 02](https://img.shields.io/badge/02-PostgreSQL%20Guard-0F766E?style=flat-square)
* **What happens:** Runs atomic availability checks and blocks overlapping or duplicate slots.
* **Output:** Confirmed reservation record locked in PostgreSQL.

### 03 · Signed Digital Ticket & QR Pass
![Stage 03](https://img.shields.io/badge/03-Digital%20Ticket-B45309?style=flat-square)
* **What happens:** Signs the ticket payload and generates a scannable QR pass.
* **Output:** Tamper-evident digital ticket with QR payload.

### 04 · QR Check-In & Verification
![Stage 04](https://img.shields.io/badge/04-QR%20Check--In-1D4ED8?style=flat-square)
* **What happens:** Scans and verifies the ticket signature, validity window, and arrival state.
* **Output:** Checked-in state transition.

### 05 · Live Staff Dashboard
![Stage 05](https://img.shields.io/badge/05-Staff%20Dashboard-374151?style=flat-square)
* **What happens:** Streams live check-ins, incoming arrivals, and slot/capacity status.
* **Output:** Real-time operational view for staff.