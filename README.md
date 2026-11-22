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

![Pipeline Flow](./assets/pipeline.svg)

* **01 · AI Booking Assistant** ![AI API](https://img.shields.io/badge/AI%20Model-API%20Key-6366F1?style=flat-square&logo=openai&logoColor=white) Parses booking intent, slot, party size, and business rules using your configured AI model API key to produce a structured booking request and reply.
* **02 · PostgreSQL Double-Booking Guard** ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Atomic%20Lock-336791?style=flat-square&logo=postgresql&logoColor=white) Runs atomic availability checks and blocks overlapping or duplicate slots to return a confirmed reservation record.
* **03 · Signed Digital Ticket & QR Pass** ![QR Pass](https://img.shields.io/badge/Ticket-Signed%20QR-B45309?style=flat-square&logo=auth0&logoColor=white) Signs the ticket payload and generates a scannable QR pass for verifiable guest entry.
* **04 · QR Check-In & Verification** ![Verify](https://img.shields.io/badge/Check--In-Verified-1D4ED8?style=flat-square&logo=checkmarx&logoColor=white) Scans and verifies signature, validity window, and arrival state to record a checked-in status.
* **05 · Live Staff Dashboard** ![Dashboard](https://img.shields.io/badge/Staff-Live%20View-0F766E?style=flat-square&logo=vercel&logoColor=white) Streams live check-ins, incoming arrivals, and slot or capacity status in real time.
