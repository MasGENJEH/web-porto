# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Website Portofolio Personal

---

## 1. EXECUTIVE SUMMARY

**Nama Produk:** Website Portofolio Personal  
**Tujuan:** Membangun website profesional untuk memamerkan profil, keterampilan, dan karya terbaik kepada calon klien dan employer  
**Target User:** Calon klien, employer, recruitment team  
**Timeline:** 4-6 minggu  
**Status:** Draft - Ready for Development

---

## 2. PRODUCT OVERVIEW

### 2.1 Deskripsi Produk
Website portofolio adalah platform digital yang menampilkan identitas profesional, pengalaman, dan karya terbaik secara visual dan interaktif. Website ini dirancang untuk membuat kesan pertama yang kuat dan profesional.

### 2.2 Nilai & Manfaat
- ✅ Meningkatkan visibilitas profesional online
- ✅ Mempermudah calon klien/employer untuk mengenal Anda
- ✅ Menampilkan karya dan pencapaian secara sistematis
- ✅ Menyediakan cara mudah untuk dihubungi

### 2.3 Success Metrics
- Website loading time < 3 detik
- Mobile responsive 100%
- Minimal bounce rate di halaman utama
- Konversi klik ke contact form

---

## 3. USER PERSONAS

### Persona 1: Calon Klien (Freelance)
- **Nama:** Budi (Project Manager)
- **Usia:** 30-45 tahun
- **Tujuan:** Mencari freelancer untuk project
- **Behavior:** Akan langsung scroll ke portfolio section, cek kontak, dan hubungi

### Persona 2: Recruitment/HR
- **Nama:** Siti (HR Manager)
- **Usia:** 25-40 tahun
- **Tujuan:** Evaluasi calon karyawan
- **Behavior:** Membaca about section, cek portfolio detail, lihat pengalaman

### Persona 3: Potential Collaborators
- **Nama:** Ahmad (Designer/Developer)
- **Usia:** 20-35 tahun
- **Tujuan:** Kolaborasi project
- **Behavior:** Lihat karya terbaik, cek style, dan contact untuk diskusi

---

## 4. FEATURES & COMPONENTS

### 4.1 Header / Navigation
**Deskripsi:** Menu navigasi responsif di bagian atas website

**Fitur:**
- Logo/Brand name di sebelah kiri
- Menu navigasi: Home, About, Portfolio, Contact
- Hamburger menu untuk mobile view
- Sticky navigation (tetap terlihat saat scroll)
- Highlight menu item yang aktif

**Technical Specs:**
- Fixed position pada desktop
- Mobile-friendly hamburger
- Smooth scroll to section

---

### 4.2 Hero Section
**Deskripsi:** Halaman utama yang menarik dengan greeting dan call-to-action

**Fitur:**
- Background visual yang menarik (gradient atau image)
- Greeting/Welcome message
- Slogan/Tagline yang kuat
- Sub-headline dengan deskripsi singkat
- CTA Button (1-2 buttons): "View My Work", "Get in Touch"
- Optional: Hero image/illustration di sebelah kanan (desktop)

**Konten Contoh:**
```
"Hi, I'm [Nama]"
"Transforming Ideas into Digital Reality"
"Full-Stack Designer & Developer | Creating beautiful & functional experiences"
[CTA Buttons]
```

**Elemen Visual:**
- Full viewport height (100vh)
- Animated elements (subtle)
- Clear visual hierarchy

---

### 4.3 Tentang Saya (About Section)
**Deskripsi:** Menampilkan profil lengkap dan latar belakang profesional

**Konten:**
- Foto profil yang profesional
- Paragraf singkat tentang diri (2-3 baris)
- Keahlian/Skills dalam format tag atau list
- Pengalaman kerja (timeline atau list)
- Pendidikan & Sertifikasi

**Layout:**
- Text di sebelah kiri, foto di kanan (desktop)
- Single column untuk mobile
- Skill badges dengan warna yang menarik

**Fitur:**
- Readable typography
- Whitespace yang cukup
- Clear information hierarchy

---

### 4.4 Portofolio/Proyek (Portfolio Section)
**Deskripsi:** Menampilkan karya terbaik dalam format card yang menarik

**Fitur Utama:**
- Grid layout card (3 kolom desktop, 2 kolom tablet, 1 kolom mobile)
- Setiap card menampilkan:
  - Project thumbnail/preview image
  - Project title
  - Project category/type
  - Brief description (1-2 lines)
  - Technologies used (tag/badge)
  - CTA: "View Project" atau "Learn More"

**Card Structure:**
```
┌─────────────────────────┐
│  [Project Image]        │
├─────────────────────────┤
│ Project Title           │
│ Category / Type         │
├─────────────────────────┤
│ Brief description...    │
│ Tech: React, Node.js    │
├─────────────────────────┤
│ [View Project Button]   │
└─────────────────────────┘
```

**Interaksi:**
- Hover effect (shadow, scale, overlay)
- Filter by category (opsional)
- Minimimal 6 project cards
- Load more button (jika banyak project)

**Detil Project (Modal/Page):**
- Full project image/gallery
- Detailed description
- Client testimonial (opsional)
- Technologies & tools used
- Project link/demo button
- Related projects

---

### 4.5 Contact Section
**Deskripsi:** Memudahkan calon klien/employer untuk menghubungi

**Fitur:**
- Heading dengan CTA text
- Contact form dengan fields:
  - Nama
  - Email
  - Subject
  - Message
  - Submit button
- Social media links
- Email address
- Optional: Contact info card (email, phone, location)

**Form Validation:**
- Email format validation
- Required fields checking
- Success message setelah submit
- Error handling

**Social Media Icons:**
- LinkedIn
- GitHub
- Twitter/X
- Instagram (opsional)

---

## 5. DESIGN SPECIFICATIONS

### 5.1 Color Palette
```
Primary Dark Purple:    #170C79
Secondary Purple:       #4647AE
Accent Blue:            #4382DF
Light Blue:             #AACCD6

Neutral:
- White:                #FFFFFF
- Dark Gray:            #1A1A1A
- Light Gray:           #F5F5F5
```

### 5.2 Color Usage Guidelines
- **#170C79** (Primary): Header background, main buttons, section backgrounds
- **#4647AE** (Secondary): Secondary buttons, accent elements, borders
- **#4382DF** (Accent): CTA buttons, links, hover states
- **#AACCD6** (Light): Backgrounds alternatif, light text, subtle accents

### 5.3 Typography
- **Font Family:** Inter, Segoe UI, atau modern sans-serif
- **Heading:** Bold weight (600-700)
- **Body:** Regular weight (400), line-height 1.6
- **Font Sizes:**
  - H1: 48px (desktop), 32px (mobile)
  - H2: 36px (desktop), 24px (mobile)
  - H3: 24px (desktop), 20px (mobile)
  - Body: 16px

### 5.4 Spacing & Layout
- **Padding section:** 60px (desktop), 40px (mobile)
- **Margin elements:** 20px-40px
- **Grid:** 12 column grid system
- **Card spacing:** 20px gap

### 5.5 Visual Elements
- Border radius: 8-12px untuk cards
- Box shadow: Subtle (0 4px 12px rgba(0,0,0,0.1))
- Transitions: 0.3s ease-in-out
- Icons: 24px standard size

---

## 6. USER STORIES

### Story 1: Pengunjung Ingin Mengenal Profil
```
AS A: Calon klien
I WANT: Membaca bio dan keahlian Anda
SO THAT: Saya bisa mengevaluasi apakah Anda cocok untuk project saya

Acceptance Criteria:
✓ About section mudah ditemukan via menu
✓ Bio jelas dan ringkas
✓ Skills ditampilkan dengan visual yang jelas
✓ Timeline pengalaman mudah dipahami
```

### Story 2: Pengunjung Ingin Melihat Portofolio
```
AS A: Potential client
I WANT: Melihat karya-karya terbaik dalam format yang menarik
SO THAT: Saya bisa mengukur kualitas dan style Anda

Acceptance Criteria:
✓ Portfolio cards menampilkan gambar project yang jelas
✓ Bisa filter atau sort project
✓ Setiap project memiliki detail page
✓ Ada link ke live project atau case study
```

### Story 3: Pengunjung Ingin Menghubungi
```
AS A: Interested client
I WANT: Menghubungi Anda dengan mudah
SO THAT: Saya bisa discuss project opportunity

Acceptance Criteria:
✓ Contact form mudah diakses
✓ Form validation bekerja dengan baik
✓ Menerima notifikasi email saat ada kontak masuk
✓ Social media links tersedia
```

### Story 4: Pengunjung Mengakses dari Mobile
```
AS A: Mobile user
I WANT: Website berfungsi dengan baik di HP
SO THAT: Saya bisa browse portfolio dengan nyaman

Acceptance Criteria:
✓ Semua layout responsif
✓ Menu mobile user-friendly
✓ Text readable tanpa zoom
✓ Buttons mudah diklik
✓ Load time cepat
```

---

## 7. INFORMATION ARCHITECTURE

### Site Map
```
Home (Landing Page)
├── Header (Navigation)
├── Hero Section
├── About Section
│   ├── Bio
│   ├── Skills
│   └── Experience
├── Portfolio Section
│   ├── Project Card 1
│   │   ├── Project Detail Page
│   │   ├── Gallery
│   │   ├── Description
│   │   ├── Technologies
│   │   └── CTA Links
│   ├── Project Card 2
│   └── Project Card N
├── Contact Section
│   ├── Contact Form
│   └── Social Links
└── Footer
```

---

## 8. WIREFRAME & LAYOUT

### Desktop Layout (1200px+)
```
┌─────────────────────────────────────────┐
│           HEADER / NAVIGATION            │
├─────────────────────────────────────────┤
│                                         │
│            HERO SECTION (full width)    │
│                                         │
├─────────────────────────────────────────┤
│ ABOUT SECTION (2 column layout)         │
│ [Text] | [Photo]                        │
├─────────────────────────────────────────┤
│ PORTFOLIO SECTION                       │
│ [Card] [Card] [Card]                    │
│ [Card] [Card] [Card]                    │
├─────────────────────────────────────────┤
│ CONTACT SECTION                         │
│ [Form] | [Contact Info]                 │
├─────────────────────────────────────────┤
│              FOOTER                     │
└─────────────────────────────────────────┘
```

### Mobile Layout (320px-767px)
```
┌──────────────────┐
│  HEADER/BURGER   │
├──────────────────┤
│  HERO SECTION    │
├──────────────────┤
│ ABOUT SECTION    │
│ (stacked)        │
├──────────────────┤
│ PORTFOLIO        │
│ [Card]           │
│ [Card]           │
│ [Card]           │
├──────────────────┤
│ CONTACT          │
│ [Form - stacked] │
├──────────────────┤
│ FOOTER           │
└──────────────────┘
```

---

## 9. TECHNICAL REQUIREMENTS

### 9.1 Frontend Technology Stack
- **Framework:** React.js
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion / AOS (Animate on Scroll)
- **Forms:** React Hook Form / Formik
- **Icons:** React Icons / Feather Icons
- **Image Optimization:** Next.js Image / Cloudinary

### 9.2 Backend & Services
- **Email Service:** EmailJS / Nodemailer / SendGrid
- **CMS (Optional):** Contentful / Strapi
- **Analytics:** Google Analytics / Plausible

### 9.3 Performance Requirements
- **Lighthouse Score:** 90+ (Performance, Accessibility, Best Practices)
- **Page Load Time:** < 3 detik (3G)
- **CLS (Cumulative Layout Shift):** < 0.1
- **FCP (First Contentful Paint):** < 1.8s
- **LCP (Largest Contentful Paint):** < 2.5s

### 9.4 SEO Requirements
- **Meta tags:** Title, description, og:image
- **Structured Data:** Schema.org markup
- **Mobile friendly:** 100% responsive
- **Sitemap & Robots.txt**
- **Open Graph tags** untuk social sharing

### 9.5 Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 10. RESPONSIVE BREAKPOINTS

| Device | Breakpoint | Layout |
|--------|-----------|--------|
| Mobile | 320px-767px | Single column, hamburger menu |
| Tablet | 768px-1023px | 2 columns for cards, adjusted spacing |
| Desktop | 1024px+ | Full layout, 3 columns for cards |
| Wide | 1440px+ | Maximum content width ~1200px |

---

## 11. ACCEPTANCE CRITERIA

### General
- [ ] Website fully responsive di semua device
- [ ] Semua link berfungsi dengan baik
- [ ] Tidak ada console error
- [ ] Loading time < 3 detik
- [ ] Accessibility score > 90 (WCAG 2.1 AA)

### Header
- [ ] Navigation menu berfungsi di semua breakpoint
- [ ] Sticky behavior bekerja smooth
- [ ] Active state menu highlight terlihat jelas
- [ ] Hamburger menu responsive

### Hero Section
- [ ] Visual eye-catching dan professional
- [ ] CTA buttons clearly visible dan clickable
- [ ] Text readable di semua screen size
- [ ] Background optimized untuk loading speed

### About Section
- [ ] Bio text ringkas dan compelling
- [ ] Skills ditampilkan dengan visual yang jelas
- [ ] Foto profil resolution baik
- [ ] Layout responsive di mobile

### Portfolio Section
- [ ] Cards display dengan baik di grid
- [ ] Hover effects smooth dan subtle
- [ ] Project images optimized
- [ ] Detail page fully functional
- [ ] Dapat sort/filter projects (optional)

### Contact Section
- [ ] Form validation bekerja
- [ ] Email terkirim ke inbox
- [ ] Success message tampil setelah submit
- [ ] Social links open di tab baru
- [ ] reCAPTCHA implemented (optional)

---

## 12. TIMELINE & MILESTONES

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| Design & Planning | 1 week | Wireframe, Design mockup, Content |
| Frontend Development | 2 weeks | All components, Responsive layout |
| Backend Integration | 1 week | Contact form, Email service |
| Testing & QA | 1 week | Bug fixes, Performance optimization |
| Deployment | 2-3 days | Hosting setup, SSL, DNS |

---

## 13. FUTURE ENHANCEMENTS (Phase 2)

- [ ] Blog section untuk content marketing
- [ ] Dark mode toggle
- [ ] Multi-language support (EN/ID)
- [ ] CMS integration untuk mudah update
- [ ] Analytics dashboard
- [ ] Newsletter subscription
- [ ] Project filtering dengan categories
- [ ] Testimonials/Reviews section
- [ ] Download resume/CV
- [ ] Interactive skill showcase

---

## 14. DEPENDENCIES & RISKS

### Dependencies
- Content dari user (bio, project details, images)
- Email service setup
- Domain & hosting

### Risks & Mitigation
| Risk | Impact | Mitigation |
|------|--------|-----------|
| Slow image loading | Poor UX | Image optimization, CDN |
| Contact form spam | Noise | Implement reCAPTCHA |
| Inconsistent branding | Unprofessional look | Design system documentation |
| Mobile responsiveness issues | Lost mobile users | Thorough testing |

---

## 15. REVISION HISTORY

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2024 | [Your Name] | Initial PRD creation |

---

**Approved By:** _______________  
**Date:** _______________

---

## Appendix: Color Reference

### Color Palette Visualization
```
Primary Dark Purple (#170C79)
████████████████████████

Secondary Purple (#4647AE)
████████████████████████

Accent Blue (#4382DF)
████████████████████████

Light Blue (#AACCD6)
████████████████████████
```

### Recommended Usage Per Section
- **Header:** #170C79 background + white text
- **Hero Section:** Gradient #170C79 → #4647AE
- **About Section:** #F5F5F5 background, text #1A1A1A
- **Portfolio Cards:** White background, border #AACCD6, accent #4382DF
- **Contact Section:** #4382DF button, #170C79 heading
- **Footer:** #170C79 background + white text
