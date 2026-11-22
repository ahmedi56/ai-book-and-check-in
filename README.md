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

## 🔄 End-to-End Platform & AI Pipeline

```text
+-------------------------------------------------------------------+
|                     1. GUEST & AI BOOKING LAYER                  |
|  [Guest Request] ──▶ [AI Booking Assistant] ──▶ [Parsed Booking]  |
+---------------------------------+---------------------------------+
                                  │
                                  ▼
+-------------------------------------------------------------------+
|                 2. POSTGRESQL DOUBLE-BOOKING GUARD                |
|  [Slot Availability Check] ──▶ [Atomic Transaction / Constraint]  |
|                            ──▶ [Confirmed Reservation Record]   |
+---------------------------------+---------------------------------+
                                  │
                                  ▼
+-------------------------------------------------------------------+
|                 3. SIGNED DIGITAL TICKET & QR PASS                |
|  [Ticket Payload] ──▶ [Cryptographic Signature] ──▶ [QR Pass]    |
+---------------------------------+---------------------------------+
                                  │
                                  ▼
+-------------------------------------------------------------------+
|                  4. QR CHECK-IN & STAFF DASHBOARD                 |
|  [QR Scan & Verify] ──▶ [Check-In State Update]                   |
|                     ──▶ [Live Staff Dashboard Sync]               |
+-------------------------------------------------------------------+