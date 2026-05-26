# 🌿 GreenBarangay — Environmental Awareness Portfolio Site

A community-driven environmental awareness website built as a final integrative project for **Web Development Fundamentals (AY 2025–2026)**.

## 🔗 Live Site

> [GitHub Pages URL](file:///C:/Users/Ren%20Adrian/Downloads/greenbarangay%20(1)/greenbarangay/index.html)

---

## 📋 Project Overview

GreenBarangay is a multi-section portfolio/landing page for a fictional barangay environmental initiative. It showcases three core community programs — Tree Planting, Waste Segregation, and Clean Drive — and allows residents to sign up as volunteers through a validated contact form.

**Built with:**
- Bootstrap 5.3 (CDN)
- Bootstrap Icons 1.11
- Google Fonts (DM Serif Display, DM Sans)
- Vanilla JavaScript (form validation & animations)
- Supabase (Backend-as-a-Service for form submissions)

---

## 📁 Project Structure

```
greenbarangay/
├── index.html        # Main HTML file
├── css/
│   └── custom.css    # Custom Bootstrap overrides & site styles
├── js/
│   └── main.js       # Scroll animations, form validation & Supabase integration
├── card img/         # Program images
├── .gitignore
└── README.md
```

---

## 🚀 Supabase Integration

The contact form is now connected to Supabase for data storage. This allows the form to work even when hosted on static platforms like GitHub Pages.

### Data Storage

Form submissions are stored in the `submissions` table in Supabase.

### SQL Setup

To recreate the backend table, run the following SQL in your Supabase SQL Editor:

```sql
-- Drop the old table if it exists
drop table if exists records;
drop table if exists submissions;

-- Create the new table
create table submissions (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  subject text not null,
  message text not null
);

-- Enable Row Level Security (RLS)
alter table submissions enable row level security;

-- Create policy to allow anyone to submit the form
create policy "Allow anonymous inserts"
on submissions for insert
to anon
with check (true);
```

---

## 👥 Group Members & Contributions

| Member | Contribution |
|---|---|
| [Member 1 Name] | Navbar, Hero Section, Git setup |
| [Member 2 Name] | Programs Card Grid, CSS Theming |
| [Member 3 Name] | Modal, Bootstrap Form Validation |
| [Member 4 Name] | Supabase Backend Integration |
| [Member 5 Name] | Volunteers Section, Footer, README & Deployment |

---

## 📌 Course Details

- **Course:** Web Development Fundamentals
- **Instructor:** Edward James V. Grageda
- **Academic Year:** 2025–2026
- **Submission Deadline:** May 26, 2026
