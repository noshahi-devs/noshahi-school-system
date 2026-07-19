# 🔧 Quick Edit Guide - Educational Programs Section

اگر آپ کو کوئی change کرنی ہے تو یہ guide استعمال کریں۔

---

## 🎨 رنگ تبدیل کریں

### کسی Program کا رنگ تبدیل کرنے کے لیے:

```html
<!-- موجودہ (Play Group - Orange)-->
<div class="program-header" style="background: linear-gradient(135deg, #FF8C00, #FFB347);">

<!-- نیا رنگ لگانے کے لیے-->
<div class="program-header" style="background: linear-gradient(135deg, #NewColor1, #NewColor2);">
```

### مختلف رنگ Options:

```
🟧 Orange:      #FF8C00 → #FFB347
🟦 Blue:        #3B82F6 → #60A5FA
🟪 Purple:      #8B5CF6 → #A78BFA
🟩 Green:       #10B981 → #34D399
🟨 Amber:       #F59E0B → #FBBF24
🟥 Red:         #EF4444 → #F87171
🟦 Sky Blue:    #0EA5E9 → #38BDF8
🟨 Rose:        #F43F5E → #FB7185
🟪 Violet:      #7C3AED → #A78BFA
🟩 Teal:        #14B8A6 → #2DD4BF
```

---

## 📝 مواد میں تبدیلی

### Program کا نام تبدیل کریں:

```html
<!-- تلاش کریں یہ لائن -->
<h3>Play Group</h3>

<!-- تبدیل کریں اس سے -->
<h3>Pre-Nursery</h3>
```

### عمر میں تبدیلی:

```html
<!-- تلاش کریں -->
<span class="badge age">Age 3-4</span>

<!-- تبدیل کریں -->
<span class="badge age">Age 2-3</span>
```

### وضاحت میں تبدیلی:

```html
<!-- تلاش کریں -->
<p class="program-desc">A nurturing, play-based environment where young learners develop social skills...</p>

<!-- تبدیل کریں -->
<p class="program-desc">آپ کی نئی وضاحت یہاں۔</p>
```

### Features میں تبدیلی:

```html
<!-- تلاش کریں -->
<ul class="program-features">
  <li><i class="fas fa-check-circle"></i> Creative Learning through Play</li>
  <li><i class="fas fa-check-circle"></i> Social Development</li>
  <li><i class="fas fa-check-circle"></i> Basic Literacy & Numeracy</li>
</ul>

<!-- تبدیل کریں -->
<ul class="program-features">
  <li><i class="fas fa-check-circle"></i> نیا Feature 1</li>
  <li><i class="fas fa-check-circle"></i> نیا Feature 2</li>
  <li><i class="fas fa-check-circle"></i> نیا Feature 3</li>
</ul>
```

---

## 🎯 Icon تبدیل کریں

### Program Icons:

```html
<!-- موجودہ -->
<i class="fas fa-child"></i>          <!-- Play Group -->

<!-- دیگر Options -->
<i class="fas fa-baby"></i>           <!-- Baby -->
<i class="fas fa-flower"></i>         <!-- Flower -->
<i class="fas fa-tree"></i>           <!-- Tree -->
<i class="fas fa-sun"></i>            <!-- Sun -->
<i class="fas fa-star"></i>           <!-- Star -->
<i class="fas fa-heart"></i>          <!-- Heart -->
```

### تمام 6 Programs کے icons:

```
Play Group:     fas-child              (موجودہ) ✓
Nursery:        fas-heart              (موجودہ) ✓
Prep:           fas-book               (موجودہ) ✓
Primary:        fas-chalkboard-user    (موجودہ) ✓
Middle:         fas-microscope         (موجودہ) ✓
Secondary:      fas-graduation-cap     (موجودہ) ✓
```

### دیگر مفید Icons:

```
📚 Study Related:
fas-book-open, fas-book, fas-bookmark, fas-pen, fas-pencil

🧠 Knowledge:
fas-brain, fas-lightbulb, fas-flask, fas-beaker

👥 Social:
fas-users, fas-person, fas-people-group, fas-handshake

🎨 Creative:
fas-palette, fas-brush, fas-paint-brush, fas-crayon

💻 Technology:
fas-computer, fas-laptop, fas-keyboard, fas-mouse

🏆 Achievement:
fas-trophy, fas-medal, fas-award, fas-star
```

---

## 🔗 Links تبدیل کریں

### Specialized Programs میں Links:

```html
<!-- Computer Education -->
<a href="computer-education.html" class="spec-link">

<!-- Science Education -->
<a href="academics.html#science" class="spec-link">

<!-- Islamic Education -->
<a href="islamic-education.html" class="spec-link">
```

### Link Text تبدیل کریں:

```html
<!-- موجودہ -->
<a href="..." class="spec-link">Learn More <i class="fas fa-arrow-right"></i></a>

<!-- تبدیل کریں -->
<a href="..." class="spec-link">مزید جانیں <i class="fas fa-arrow-right"></i></a>
```

---

## 📱 Text Sizes (Mobile Optimization)

اگر text بہت بڑا یا چھوٹا لگ رہا ہے:

### Program Description:
```css
.program-desc {
    font-size: 0.95rem;          /* Desktop */
}

@media (max-width: 768px) {
    .program-desc {
        font-size: 0.9rem;       /* Tablet */
    }
}

@media (max-width: 480px) {
    .program-desc {
        font-size: 0.85rem;      /* Mobile */
    }
}
```

### Program Title:
```css
.program-header h3 {
    font-size: 1.5rem;           /* Desktop */
}

@media (max-width: 768px) {
    .program-header h3 {
        font-size: 1.2rem;       /* Tablet */
    }
}

@media (max-width: 480px) {
    .program-header h3 {
        font-size: 1.1rem;       /* Mobile */
    }
}
```

---

## 🎨 ہوور Effects تبدیل کریں

### Card کو زیادہ اٹھانا:

```css
/* موجودہ - 12px اٹھتا ہے */
.program-card:hover {
    transform: translateY(-12px);
}

/* زیادہ اٹھانے کے لیے - 20px */
.program-card:hover {
    transform: translateY(-20px);
}

/* کم اٹھانے کے لیے - 8px */
.program-card:hover {
    transform: translateY(-8px);
}
```

### Animation Speed تبدیل کریں:

```css
/* موجودہ - 0.35 سیکنڈ */
.program-card {
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

/* تیز - 0.2 سیکنڈ */
transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

/* سست - 0.5 سیکنڈ */
transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 🏠 Section Title میں تبدیلی

### عنوان تبدیل کریں:

```html
<!-- تلاش کریں -->
<div class="eyebrow"><i class="fas fa-graduation-cap"></i> Comprehensive Education</div>
<h2>Our <span>Educational</span> Programs</h2>
<p>We offer comprehensive educational programs...</p>

<!-- تبدیل کریں -->
<div class="eyebrow"><i class="fas fa-graduation-cap"></i> آپ کا eyebrow text</div>
<h2>ہمارے <span>تعلیمی</span> پروگرام</h2>
<p>آپ کی نئی وضاحت...</p>
```

### Specialized Section Title:

```html
<!-- تلاش کریں -->
<h2>Specialized <span>Programs</span></h2>

<!-- تبدیل کریں -->
<h2>خصوصی <span>پروگرام</span></h2>
```

---

## ⬜ Grid Layout تبدیل کریں

### Desktop میں columns:

```css
/* موجودہ - 3 columns */
.programs-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}

/* 2 columns بنانے کے لیے */
grid-template-columns: repeat(2, 1fr);

/* 4 columns بنانے کے لیے */
grid-template-columns: repeat(4, 1fr);
```

### Tablet میں columns:

```css
@media (max-width: 1024px) {
    .programs-grid {
        grid-template-columns: repeat(2, 1fr);  /* موجودہ */
        /* 1 column بنانے کے لیے */
        /* grid-template-columns: 1fr; */
    }
}
```

---

## 🎓 Specialized Cards میں تبدیلی

### Icon اور Theme تبدیل کریں:

```html
<!-- Computer - موجودہ -->
<div class="spec-icon" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.05));">
    <i class="fas fa-laptop-code"></i>
</div>

<!-- نیا Theme (Orange) -->
<div class="spec-icon" style="background: linear-gradient(135deg, rgba(255, 140, 0, 0.15), rgba(255, 140, 0, 0.05));">
    <i class="fas fa-laptop-code"></i>
</div>
```

### Features List میں تبدیلی:

```html
<!-- موجودہ -->
<ul class="spec-list">
    <li>Basic Computer Skills & Fundamentals</li>
    <li>Typing and Keyboard Proficiency</li>
</ul>

<!-- تبدیل کریں -->
<ul class="spec-list">
    <li>نیا Feature 1</li>
    <li>نیا Feature 2</li>
</ul>
```

---

## 🐛 عام مسائل اور حل

### مسئلہ: Cards سیدھے نہیں ہیں

```css
/* حل: Grid کو ٹھیک کریں */
.programs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;  /* اس gap کو بڑھا سکتے ہیں */
}
```

### مسئلہ: Text بہت چھوٹا ہے

```css
/* حل: Font size بڑھائیں */
.program-desc {
    font-size: 1rem;  /* پہلے 0.95rem تھا */
}
```

### مسئلہ: Colors کی contrast خراب ہے

```css
/* حل: Lighter background استعمال کریں */
.program-header {
    background: linear-gradient(135deg, #FF8C00, #FFD699);  /* ہلکا رنگ */
}
```

### مسئلہ: Mobile پر text overlapping ہے

```css
/* حل: Padding بڑھائیں */
.program-body {
    padding: 2rem;  /* پہلے 1.75rem تھا */
}
```

---

## 📋 Common Tags & Utilities

### Font Awesome Icons List (Useful):

```
Academic:       fas-graduation-cap, fas-book, fas-lightbulb
Social:         fas-users, fas-handshake, fas-heart
Science:        fas-flask, fas-beaker, fas-microscope
Technology:     fas-laptop, fas-computer, fas-code
Achievement:    fas-trophy, fas-award, fas-star
Activities:     fas-play, fas-music, fas-sports
```

### Common CSS Values:

```
Transitions:    0.2s, 0.3s, 0.35s, 0.5s
Transforms:     translateY(-8px), translateY(-12px), scale(1.1)
Border Radius:  8px, 12px, 16px, 20px, 30px
Gaps:          0.75rem, 1rem, 1.25rem, 1.5rem, 2rem
Padding:       0.5rem, 0.75rem, 1rem, 1.25rem, 1.5rem, 2rem
```

---

## ✅ Checklist قبل Save کریں

- [ ] تمام رنگ صحیح ہیں
- [ ] تمام icons موجود ہیں  
- [ ] Text خوبصورتی سے دیکھ رہا ہے
- [ ] Links کام کر رہے ہیں
- [ ] Mobile پر test کیا ہے
- [ ] Typos چیک کیے ہیں
- [ ] HTML tag بند ہیں

---

## 🔗 مزید معلومات

- **Full Documentation**: PROGRAMS_REDESIGN_DOCUMENTATION.md
- **Visual Guide**: PROGRAMS_VISUAL_GUIDE.md  
- **Complete Summary**: REDESIGN_SUMMARY.md

---

یاد رکھیں: ہمیشہ ایک backup لیں قبل تبدیلی سے! 🔐

