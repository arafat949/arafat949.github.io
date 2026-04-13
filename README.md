# 🚀 Portfolio Website — React + Admin Panel

Dark-themed personal portfolio with a full admin panel to manage all content.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/         # Public website components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── admin/
│   │   ├── components/
│   │   │   └── AdminSidebar.jsx
│   │   └── pages/
│   │       ├── AdminLogin.jsx
│   │       ├── AdminDashboard.jsx
│   │       ├── AdminProfile.jsx
│   │       ├── AdminSkills.jsx
│   │       ├── AdminProjects.jsx
│   │       ├── AdminContact.jsx
│   │       └── AdminSocial.jsx
│   ├── data/
│   │   └── portfolioData.js   ← ✏️ সব content এখানে edit করুন
│   ├── styles/
│   │   ├── global.css
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── Skills.css
│   │   ├── Projects.css
│   │   └── Admin.css
│   ├── App.jsx
│   └── index.js
└── package.json
```

---

## ⚙️ Setup & Run

```bash
# 1. Dependencies install করুন
npm install

# 2. Development server চালু করুন
npm start

# 3. Browser এ দেখুন
# Portfolio →  http://localhost:3000
# Admin    →  http://localhost:3000/admin
```

---

## 🔐 Admin Panel

**URL:** `/admin`  
**Default credentials:**
- Username: `admin`
- Password: `admin123`

> ⚠️ Production-এ `src/admin/pages/AdminLogin.jsx` এর credentials পরিবর্তন করুন।

### Admin থেকে যা manage করা যায়:
| Section | কী করা যায় |
|---------|------------|
| Dashboard | Overview, charts, quick actions |
| Profile | নাম, bio, photo, stats |
| Skills | Add/edit/delete skills, percentage |
| Projects | Add/edit/delete projects, tags |
| Contact | Email, phone, WhatsApp, address |
| Social | Social media links |

---

## ✏️ Content Edit করার সহজ উপায়

`src/data/portfolioData.js` ফাইলটি খুলুন — সব text, projects, skills এখানেই আছে। Edit করে save করলেই website update হবে।

---

## 🚀 GitHub এ Upload

```bash
git init
git add .
git commit -m "Initial commit — portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

---

## 🌐 Deploy (Free)

### Vercel (Recommended)
1. [vercel.com](https://vercel.com) এ sign up করুন
2. "New Project" → GitHub repo connect করুন
3. Deploy! ✅

### Netlify
1. [netlify.com](https://netlify.com) এ sign up করুন
2. "Add new site" → "Import an existing project" → GitHub
3. Build command: `npm run build`
4. Publish directory: `build`

---

## 🎨 Customization

- **Colors** → `src/styles/global.css` এর `:root` variables পরিবর্তন করুন
- **Fonts** → `global.css` এর `@import` লাইন পরিবর্তন করুন
- **Content** → `src/data/portfolioData.js` edit করুন
