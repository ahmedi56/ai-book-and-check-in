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

Powered by an **AI model API key** for conversational booking assistance, **PostgreSQL** for concurrency protection, signed QR passes for arrival verification, and a live staff dashboard:

<p align="center">
  <img alt="Pipeline Flow" src="https://img.shields.io/badge/01%C2%B7AI%20Assistant-Intent%20%26%20Rules-6366F1?style=for-the-badge&logo=openai&logoColor=white" />
  <img alt="Arrow" src="https://img.shields.io/badge/%E2%9E%9C-%20-334155?style=flat-square" />
  <img alt="PG Guard" src="https://img.shields.io/badge/02%C2%B7PG%20Guard-Atomic%20Lock-336791?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img alt="Arrow" src="https://img.shields.io/badge/%E2%9E%9C-%20-334155?style=flat-square" />
  <img alt="QR Ticket" src="https://img.shields.io/badge/03%C2%B7QR%20Ticket-Signed%20Pass-B45309?style=for-the-badge&logo=auth0&logoColor=white" />
  <img alt="Arrow" src="https://img.shields.io/badge/%E2%9E%9C-%20-334155?style=flat-square" />
  <img alt="Check-In" src="https://img.shields.io/badge/04%C2%B7Check--In-Verified-1D4ED8?style=for-the-badge&logo=checkmarx&logoColor=white" />
  <img alt="Arrow" src="https://img.shields.io/badge/%E2%9E%9C-%20-334155?style=flat-square" />
  <img alt="Staff View" src="https://img.shields.io/badge/05%C2%B7Staff%20View-Live%20Capacity-0F766E?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

| Stage | Component | Guarantee / Output |
| :---: | :--- | :--- |
| **01** | **AI Booking Assistant** | Parses booking intent, slot, party size, and business rules via configured AI model API key |
| **02** | **PostgreSQL Double-Booking Guard** | Runs atomic availability checks and blocks overlapping or duplicate reservations at the database layer |
| **03** | **Signed Digital Ticket & QR Pass** | Issues a cryptographically signed digital ticket and scannable QR code for verifiable guest entry |
| **04** | **QR Check-In & Verification** | Validates signature, check-in window, and arrival state to mark guests checked in |
| **05** | **Live Staff Dashboard** | Streams live arrivals, check-in status, and real-time slot capacity for front-desk/venue staff |
