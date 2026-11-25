/**
 * ==============================================================================
 * Noshahi School System - Curriculum & Bookstore Master Logic & Real Dataset
 * Pre Classes to Undergraduate (Official School Prescribed Booklist)
 * ==============================================================================
 */

const WHATSAPP_NUMBER = "923281642297";

/**
 * Master Curriculum & Bookstore Real Dataset
 */
const curriculumData = [
  {
    id: "pre-classes",
    title: "Pre Classes",
    subtitle: "Early Childhood Foundation (PG, Nursery, Prep)",
    icon: "fa-shapes",
    iconClass: "curr-icon-pre",
    defaultOpen: true,
    classes: {
      "PG": [
        { subject: "Urdu", publications: "Arfa SRM Pre 1", price: 330, bg: "92400E", accent: "FBBF24", tag: "Urdu" },
        { subject: "English", publications: "Arfa SRM Pre 1", price: 330, bg: "1E3A8A", accent: "38BDF8", tag: "Language" },
        { subject: "Math", publications: "Arfa SRM Pre 1", price: 330, bg: "065F46", accent: "34D399", tag: "Math" },
        { subject: "GK", publications: "Learning Bridge", price: 450, bg: "075985", accent: "38BDF8", tag: "General Knowledge" }
      ],
      "Nursery": [
        { subject: "Urdu", publications: "Arfa SRM Pre 1", price: 330, bg: "92400E", accent: "FBBF24", tag: "Urdu" },
        { subject: "English", publications: "Arfa SRM Pre 1", price: 300, bg: "1E3A8A", accent: "38BDF8", tag: "Language" },
        { subject: "Math", publications: "Arfa SRM Pre 1", price: 300, bg: "065F46", accent: "34D399", tag: "Math" },
        { subject: "GK", publications: "Learning Bridge", price: 450, bg: "075985", accent: "38BDF8", tag: "General Knowledge" }
      ],
      "Prep": [
        { subject: "Urdu", publications: "Arfa SRM Pre 1", price: 330, bg: "92400E", accent: "FBBF24", tag: "Urdu" },
        { subject: "English", publications: "Arfa SRM Pre 1", price: 330, bg: "1E3A8A", accent: "38BDF8", tag: "Language" },
        { subject: "Math", publications: "Arfa SRM Pre 1", price: 330, bg: "065F46", accent: "34D399", tag: "Math" },
        { subject: "GK", publications: "Learning Bridge", price: 450, bg: "075985", accent: "38BDF8", tag: "General Knowledge" }
      ]
    }
  },
  {
    id: "primary",
    title: "Primary",
    subtitle: "Elementary Education (Class One to Class Five)",
    icon: "fa-book-open-reader",
    iconClass: "curr-icon-primary",
    defaultOpen: false,
    classes: {
      "One": [
        { subject: "Urdu", publications: "Learning Bridge", price: 550, bg: "92400E", accent: "FBBF24", tag: "Language" },
        { subject: "English", publications: "Talent", price: 500, bg: "1E3A8A", accent: "38BDF8", tag: "Language" },
        { subject: "Math", publications: "PTB", price: 181, bg: "065F46", accent: "34D399", tag: "Math" },
        { subject: "GK", publications: "Premier", price: 320, bg: "075985", accent: "38BDF8", tag: "General Knowledge" },
        { subject: "IS", publications: "Gohar", price: 410, bg: "4C1D95", accent: "A78BFA", tag: "Islamic Studies" },
        { subject: "Eng+Urdu Grammar", publications: "Learning Bridge", price: 370, bg: "831843", accent: "F472B6", tag: "Grammar" },
        { subject: "Computer", publications: "Academic Plus", price: 0, bg: "1F2937", accent: "60A5FA", tag: "IT Skills" }
      ],
      "Two": [
        { subject: "Urdu", publications: "Learning Bridge", price: 560, bg: "92400E", accent: "FBBF24", tag: "Language" },
        { subject: "English", publications: "Talent", price: 540, bg: "1E3A8A", accent: "38BDF8", tag: "Language" },
        { subject: "Math", publications: "PTB", price: 185, bg: "065F46", accent: "34D399", tag: "Math" },
        { subject: "GK", publications: "Premier", price: 380, bg: "075985", accent: "38BDF8", tag: "General Knowledge" },
        { subject: "IS", publications: "Gohar", price: 450, bg: "4C1D95", accent: "A78BFA", tag: "Islamic Studies" },
        { subject: "Eng+Urdu Grammar", publications: "Learning Bridge", price: 470, bg: "831843", accent: "F472B6", tag: "Grammar" },
        { subject: "Computer", publications: "Academic Plus", price: 0, bg: "1F2937", accent: "60A5FA", tag: "IT Skills" }
      ],
      "Three": [
        { subject: "Urdu", publications: "Learning Bridge", price: 580, bg: "92400E", accent: "FBBF24", tag: "Language" },
        { subject: "English", publications: "Talent", price: 560, bg: "1E3A8A", accent: "38BDF8", tag: "Language" },
        { subject: "Math", publications: "PTB", price: 206, bg: "065F46", accent: "34D399", tag: "Math" },
        { subject: "GK", publications: "Premier", price: 470, bg: "075985", accent: "38BDF8", tag: "General Knowledge" },
        { subject: "IS", publications: "Gohar", price: 570, bg: "4C1D95", accent: "A78BFA", tag: "Islamic Studies" },
        { subject: "Eng+Urdu Grammar", publications: "Learning Bridge", price: 520, bg: "831843", accent: "F472B6", tag: "Grammar" },
        { subject: "Computer", publications: "Academic Plus", price: 0, bg: "1F2937", accent: "60A5FA", tag: "IT Skills" }
      ],
      "Four": [
        { subject: "Urdu", publications: "Learning Bridge", price: 580, bg: "92400E", accent: "FBBF24", tag: "Language" },
        { subject: "English", publications: "Talent", price: 590, bg: "1E3A8A", accent: "38BDF8", tag: "Language" },
        { subject: "Math", publications: "PTB", price: 238, bg: "065F46", accent: "34D399", tag: "Math" },
        { subject: "Science", publications: "Premier", price: 540, bg: "0E7490", accent: "22D3EE", tag: "Science" },
        { subject: "IS", publications: "Gohar", price: 640, bg: "4C1D95", accent: "A78BFA", tag: "Islamic Studies" },
        { subject: "Eng+Urdu Grammar", publications: "Learning Bridge", price: 560, bg: "831843", accent: "F472B6", tag: "Grammar" },
        { subject: "Computer", publications: "Academic Plus", price: 0, bg: "1F2937", accent: "60A5FA", tag: "IT Skills" }
      ],
      "Five": [
        { subject: "Urdu", publications: "Learning Bridge", price: 0, bg: "92400E", accent: "FBBF24", tag: "Language" },
        { subject: "English", publications: "Talent", price: 0, bg: "1E3A8A", accent: "38BDF8", tag: "Language" },
        { subject: "Math", publications: "PTB", price: 232, bg: "065F46", accent: "34D399", tag: "Math" },
        { subject: "Science", publications: "Premier", price: 570, bg: "0E7490", accent: "22D3EE", tag: "Science" },
        { subject: "IS", publications: "Gohar", price: 590, bg: "4C1D95", accent: "A78BFA", tag: "Islamic Studies" },
        { subject: "Eng+Urdu Grammar", publications: "Learning Bridge", price: 0, bg: "831843", accent: "F472B6", tag: "Grammar" },
        { subject: "Computer", publications: "Academic Plus", price: 0, bg: "1F2937", accent: "60A5FA", tag: "IT Skills" }
      ]
    }
  },
  {
    id: "middle",
    title: "Middle",
    subtitle: "Lower Secondary Education (Class Six, Seven & Eight)",
    icon: "fa-compass-drafting",
    iconClass: "curr-icon-middle",
    defaultOpen: false,
    classes: {
      "Six": [
        { subject: "Urdu", publications: "Learning Bridge", price: 0, bg: "92400E", accent: "FBBF24", tag: "Language" },
        { subject: "English", publications: "Talent", price: 0, bg: "1E3A8A", accent: "38BDF8", tag: "Language" },
        { subject: "Math", publications: "PTB", price: 0, bg: "065F46", accent: "34D399", tag: "Math" },
        { subject: "Science", publications: "PTB", price: 0, bg: "0E7490", accent: "22D3EE", tag: "Science" },
        { subject: "IS", publications: "PTB", price: 0, bg: "4C1D95", accent: "A78BFA", tag: "Islamic Studies" },
        { subject: "Eng Grammar", publications: "Iqbal Grammer", price: 0, bg: "1E3A8A", accent: "38BDF8", tag: "Grammar" },
        { subject: "Urdu Grammar", publications: "Learning Bridge", price: 0, bg: "831843", accent: "F472B6", tag: "Grammar" },
        { subject: "THQ", publications: "PTB", price: 0, bg: "047857", accent: "6EE7B7", tag: "Quranic Studies" },
        { subject: "Geography", publications: "PTB", price: 0, bg: "854D0E", accent: "FDE047", tag: "Social Studies" },
        { subject: "Computer", publications: "Academic Plus", price: 0, bg: "1F2937", accent: "60A5FA", tag: "IT Skills" }
      ],
      "Seven": [
        { subject: "Urdu", publications: "Learning Bridge", price: 0, bg: "92400E", accent: "FBBF24", tag: "Language" },
        { subject: "English", publications: "Talent", price: 0, bg: "1E3A8A", accent: "38BDF8", tag: "Language" },
        { subject: "Math", publications: "PTB", price: 0, bg: "065F46", accent: "34D399", tag: "Math" },
        { subject: "Science", publications: "PTB", price: 0, bg: "0E7490", accent: "22D3EE", tag: "Science" },
        { subject: "IS", publications: "PTB", price: 0, bg: "4C1D95", accent: "A78BFA", tag: "Islamic Studies" },
        { subject: "Eng Grammar", publications: "Iqbal Grammer", price: 0, bg: "1E3A8A", accent: "38BDF8", tag: "Grammar" },
        { subject: "Urdu Grammar", publications: "Learning Bridge", price: 0, bg: "831843", accent: "F472B6", tag: "Grammar" },
        { subject: "THQ", publications: "PTB", price: 0, bg: "047857", accent: "6EE7B7", tag: "Quranic Studies" },
        { subject: "Geography", publications: "PTB", price: 0, bg: "854D0E", accent: "FDE047", tag: "Social Studies" },
        { subject: "Computer", publications: "PTB", price: 0, bg: "1F2937", accent: "60A5FA", tag: "IT Skills" }
      ],
      "Eight": [
        { subject: "Urdu", publications: "Learning Bridge", price: 0, bg: "92400E", accent: "FBBF24", tag: "Language" },
        { subject: "English", publications: "Talent", price: 0, bg: "1E3A8A", accent: "38BDF8", tag: "Language" },
        { subject: "Math", publications: "PTB", price: 0, bg: "065F46", accent: "34D399", tag: "Math" },
        { subject: "Science", publications: "PTB", price: 0, bg: "0E7490", accent: "22D3EE", tag: "Science" },
        { subject: "IS", publications: "PTB", price: 0, bg: "4C1D95", accent: "A78BFA", tag: "Islamic Studies" },
        { subject: "Eng Grammar", publications: "Iqbal Grammer", price: 0, bg: "1E3A8A", accent: "38BDF8", tag: "Grammar" },
        { subject: "Urdu Grammar", publications: "Learning Bridge", price: 0, bg: "831843", accent: "F472B6", tag: "Grammar" },
        { subject: "THQ", publications: "PTB", price: 0, bg: "047857", accent: "6EE7B7", tag: "Quranic Studies" },
        { subject: "History & Geography", publications: "PTB", price: 0, bg: "854D0E", accent: "FDE047", tag: "Social Studies" },
        { subject: "Computer", publications: "PTB", price: 0, bg: "1F2937", accent: "60A5FA", tag: "IT Skills" }
      ]
    }
  },
  {
    id: "matriculation",
    title: "Matriculation",
    subtitle: "Secondary School Certificate (Class Nine & Ten)",
    icon: "fa-flask-vial",
    badgeClass: "badge-matric",
    defaultOpen: false,
    classes: {
      "Nine": [
        { subject: "Urdu", publications: "PTB", price: 0, bg: "92400E", accent: "FBBF24", tag: "Language" },
        { subject: "English", publications: "PTB", price: 0, bg: "1E3A8A", accent: "38BDF8", tag: "Language" },
        { subject: "Math", publications: "PTB", price: 0, bg: "065F46", accent: "34D399", tag: "Math" },
        { subject: "Science", publications: "PTB", price: 0, bg: "0E7490", accent: "22D3EE", tag: "Science" },
        { subject: "IS", publications: "PTB", price: 0, bg: "4C1D95", accent: "A78BFA", tag: "Islamic Studies" },
        { subject: "Eng Grammar", publications: "Sunshine", price: 0, bg: "1E3A8A", accent: "38BDF8", tag: "Grammar" },
        { subject: "Urdu Grammar", publications: "Sharah Sarmaya", price: 0, bg: "831843", accent: "F472B6", tag: "Grammar" },
        { subject: "THQ", publications: "PTB", price: 0, bg: "047857", accent: "6EE7B7", tag: "Quranic Studies" },
        { subject: "Physics", publications: "PTB", price: 0, bg: "075985", accent: "38BDF8", tag: "Science" },
        { subject: "Computer", publications: "PTB", price: 0, bg: "1F2937", accent: "60A5FA", tag: "IT Skills" }
      ],
      "Ten": [
        { subject: "Urdu", publications: "PTB", price: 0, bg: "92400E", accent: "FBBF24", tag: "Language" },
        { subject: "English", publications: "PTB", price: 0, bg: "1E3A8A", accent: "38BDF8", tag: "Language" },
        { subject: "Math", publications: "PTB", price: 0, bg: "065F46", accent: "34D399", tag: "Math" },
        { subject: "Science", publications: "PTB", price: 0, bg: "0E7490", accent: "22D3EE", tag: "Science" },
        { subject: "IS", publications: "PTB", price: 0, bg: "4C1D95", accent: "A78BFA", tag: "Islamic Studies" },
        { subject: "Eng Grammar", publications: "Sunshine", price: 0, bg: "1E3A8A", accent: "38BDF8", tag: "Grammar" },
        { subject: "Urdu Grammar", publications: "Sharah Sarmaya", price: 0, bg: "831843", accent: "F472B6", tag: "Grammar" },
        { subject: "THQ", publications: "PTB", price: 0, bg: "047857", accent: "6EE7B7", tag: "Quranic Studies" },
        { subject: "Physics", publications: "PTB", price: 0, bg: "075985", accent: "38BDF8", tag: "Science" },
        { subject: "Computer", publications: "PTB", price: 0, bg: "1F2937", accent: "60A5FA", tag: "IT Skills" }
      ]
    }
  },
  {
    id: "intermediate",
    title: "Intermediate",
    subtitle: "Higher Secondary (ICS, FA.IT & FA Parts 1 & 2)",
    icon: "fa-atom",
    badgeClass: "badge-inter",
    defaultOpen: false,
    classes: {
      "ICS Part 1": [
        { subject: "Urdu", publications: "PTB", price: 0, bg: "92400E", accent: "FBBF24", tag: "Language" },
        { subject: "English", publications: "PTB", price: 0, bg: "1E3A8A", accent: "38BDF8", tag: "Language" },
        { subject: "Math", publications: "PTB", price: 0, bg: "065F46", accent: "34D399", tag: "Math" },
        { subject: "Economics", publications: "PTB", price: 0, bg: "065F46", accent: "34D399", tag: "Economics" },
        { subject: "IS", publications: "PTB", price: 0, bg: "4C1D95", accent: "A78BFA", tag: "Islamic Studies" },
        { subject: "Eng Grammar", publications: "Advanced Ideal", price: 0, bg: "1E3A8A", accent: "38BDF8", tag: "Grammar" },
        { subject: "Urdu Grammar", publications: "Sharah Sarmaya", price: 0, bg: "831843", accent: "F472B6", tag: "Grammar" },
        { subject: "THQ", publications: "PTB", price: 0, bg: "047857", accent: "6EE7B7", tag: "Quranic Studies" },
        { subject: "Computer", publications: "PTB", price: 0, bg: "1F2937", accent: "60A5FA", tag: "Computer Science" }
      ],
      "FA.IT Part 1": [
        { subject: "Urdu", publications: "PTB", price: 0, bg: "92400E", accent: "FBBF24", tag: "Language" },
        { subject: "English", publications: "PTB", price: 0, bg: "1E3A8A", accent: "38BDF8", tag: "Language" },
        { subject: "IS Elective", publications: "PTB", price: 0, bg: "4C1D95", accent: "A78BFA", tag: "Elective" },
        { subject: "Economics", publications: "PTB", price: 0, bg: "065F46", accent: "34D399", tag: "Economics" },
        { subject: "IS", publications: "PTB", price: 0, bg: "4C1D95", accent: "A78BFA", tag: "Islamic Studies" },
        { subject: "Eng Grammar", publications: "Advanced Ideal", price: 0, bg: "1E3A8A", accent: "38BDF8", tag: "Grammar" },
        { subject: "Urdu Grammar", publications: "Sharah Sarmaya", price: 0, bg: "831843", accent: "F472B6", tag: "Grammar" },
        { subject: "THQ", publications: "PTB", price: 0, bg: "047857", accent: "6EE7B7", tag: "Quranic Studies" },
        { subject: "Computer", publications: "PTB", price: 0, bg: "1F2937", accent: "60A5FA", tag: "Computer Science" }
      ],
      "FA Part 1": [
        { subject: "Urdu", publications: "PTB", price: 0, bg: "92400E", accent: "FBBF24", tag: "Language" },
        { subject: "English", publications: "PTB", price: 0, bg: "1E3A8A", accent: "38BDF8", tag: "Language" },
        { subject: "IS Elective", publications: "PTB", price: 0, bg: "4C1D95", accent: "A78BFA", tag: "Elective" },
        { subject: "Economics", publications: "PTB", price: 0, bg: "065F46", accent: "34D399", tag: "Economics" },
        { subject: "IS", publications: "PTB", price: 0, bg: "4C1D95", accent: "A78BFA", tag: "Islamic Studies" },
        { subject: "Eng Grammar", publications: "Advanced Ideal", price: 0, bg: "1E3A8A", accent: "38BDF8", tag: "Grammar" },
        { subject: "Urdu Grammar", publications: "Sharah Sarmaya", price: 0, bg: "831843", accent: "F472B6", tag: "Grammar" },
        { subject: "THQ", publications: "PTB", price: 0, bg: "047857", accent: "6EE7B7", tag: "Quranic Studies" },
        { subject: "Health & Physical Education", publications: "PTB", price: 0, bg: "0E7490", accent: "22D3EE", tag: "Physical Ed" }
      ],
      "ICS Part 2": [
        { subject: "Urdu", publications: "PTB", price: 0, bg: "92400E", accent: "FBBF24", tag: "Language" },
        { subject: "English", publications: "PTB", price: 0, bg: "1E3A8A", accent: "38BDF8", tag: "Language" },
        { subject: "Math", publications: "PTB", price: 0, bg: "065F46", accent: "34D399", tag: "Math" },
        { subject: "Economics", publications: "PTB", price: 0, bg: "065F46", accent: "34D399", tag: "Economics" },
        { subject: "IS", publications: "PTB", price: 0, bg: "4C1D95", accent: "A78BFA", tag: "Islamic Studies" },
        { subject: "Eng Grammar", publications: "Advanced Ideal", price: 0, bg: "1E3A8A", accent: "38BDF8", tag: "Grammar" },
        { subject: "Urdu Grammar", publications: "Sharah Sarmaya", price: 0, bg: "831843", accent: "F472B6", tag: "Grammar" },
        { subject: "THQ", publications: "PTB", price: 0, bg: "047857", accent: "6EE7B7", tag: "Quranic Studies" },
        { subject: "Computer", publications: "PTB", price: 0, bg: "1F2937", accent: "60A5FA", tag: "Computer Science" }
      ],
      "FA.IT Part 2": [
        { subject: "Urdu", publications: "PTB", price: 0, bg: "92400E", accent: "FBBF24", tag: "Language" },
        { subject: "English", publications: "PTB", price: 0, bg: "1E3A8A", accent: "38BDF8", tag: "Language" },
        { subject: "IS Elective", publications: "PTB", price: 0, bg: "4C1D95", accent: "A78BFA", tag: "Elective" },
        { subject: "Economics", publications: "PTB", price: 0, bg: "065F46", accent: "34D399", tag: "Economics" },
        { subject: "IS", publications: "PTB", price: 0, bg: "4C1D95", accent: "A78BFA", tag: "Islamic Studies" },
        { subject: "Eng Grammar", publications: "Advanced Ideal", price: 0, bg: "1E3A8A", accent: "38BDF8", tag: "Grammar" },
        { subject: "Urdu Grammar", publications: "Sharah Sarmaya", price: 0, bg: "831843", accent: "F472B6", tag: "Grammar" },
        { subject: "THQ", publications: "PTB", price: 0, bg: "047857", accent: "6EE7B7", tag: "Quranic Studies" },
        { subject: "Computer", publications: "PTB", price: 0, bg: "1F2937", accent: "60A5FA", tag: "Computer Science" }
      ],
      "FA Part 2": [
        { subject: "Urdu", publications: "PTB", price: 0, bg: "92400E", accent: "FBBF24", tag: "Language" },
        { subject: "English", publications: "PTB", price: 0, bg: "1E3A8A", accent: "38BDF8", tag: "Language" },
        { subject: "IS Elective", publications: "PTB", price: 0, bg: "4C1D95", accent: "A78BFA", tag: "Elective" },
        { subject: "Economics", publications: "PTB", price: 0, bg: "065F46", accent: "34D399", tag: "Economics" },
        { subject: "IS", publications: "PTB", price: 0, bg: "4C1D95", accent: "A78BFA", tag: "Islamic Studies" },
        { subject: "Eng Grammar", publications: "Advanced Ideal", price: 0, bg: "1E3A8A", accent: "38BDF8", tag: "Grammar" },
        { subject: "Urdu Grammar", publications: "Sharah Sarmaya", price: 0, bg: "831843", accent: "F472B6", tag: "Grammar" },
        { subject: "THQ", publications: "PTB", price: 0, bg: "047857", accent: "6EE7B7", tag: "Quranic Studies" },
        { subject: "Health & Physical Education", publications: "PTB", price: 0, bg: "0E7490", accent: "22D3EE", tag: "Physical Ed" }
      ]
    }
  },
  {
    id: "undergraduate",
    title: "Undergraduate",
    subtitle: "University Degree Programs (BSCS, BS IT, BS IS IT)",
    icon: "fa-university",
    badgeClass: "badge-undergrad",
    defaultOpen: false,
    isComingSoon: true,
    comingSoonPrograms: ["BSCS", "BS IT", "BS IS IT"],
    classes: {}
  }
];

const curriculumState = {
  openSections: new Set(["pre-classes"]),
  activeClasses: {
    "pre-classes": "PG",
    "primary": "One",
    "middle": "Six",
    "matriculation": "Nine",
    "intermediate": "ICS Part 1"
  }
};

function formatPrice(amount) {
  if (amount === 0) return "Contact for Price";
  return `Rs. ${Number(amount).toLocaleString('en-PK')}/-`;
}

function formatTotalPrice(amount) {
  if (amount === 0) return "Inquire on WhatsApp";
  return `Rs. ${Number(amount).toLocaleString('en-PK')}/-`;
}

function getSingleBookWhatsAppUrl(levelTitle, className, book) {
  const priceDisplay = book.price > 0 ? formatPrice(book.price) : "Contact Office for Latest Price";
  const message = 
    `Hello Ramzan Book Depo!\n` +
    `I would like to order this prescribed book:\n\n` +
    `• Academic Level: ${levelTitle}\n` +
    `• Class: ${className}\n` +
    `• Subject: ${book.subject}\n` +
    `• Publication: ${book.publications}\n` +
    `• Price: ${priceDisplay}\n\n` +
    `Please confirm availability and delivery.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getCompleteCourseWhatsAppUrl(levelTitle, className, totalBooks, totalPrice) {
  const priceDisplay = totalPrice > 0 ? formatPrice(totalPrice) : "Inquire for Latest Course Set Price";
  const message = 
    `Hello Ramzan Book Depo!\n` +
    `I would like to order:\n` +
    `Class: ${className} Complete Course\n\n` +
    `• Level: ${levelTitle}\n` +
    `• Total Books: ${totalBooks} Books\n` +
    `• Total Course Price: ${priceDisplay}\n\n` +
    `Please share delivery and payment details for this complete set.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getComingSoonWhatsAppUrl(program) {
  const message = 
    `Hello Ramzan Book Depo!\n` +
    `I am inquiring about the Undergraduate Program:\n` +
    `• Program: ${program}\n` +
    `Please notify me when curriculum, books, and admissions details are announced.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function generateBookCoverSVG(subject, className, publications, bgHex, accentHex) {
  const safeSubject = subject.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const safeClass = className.replace(/&/g, "&amp;");
  const safePub = publications.replace(/&/g, "&amp;");

  let line1 = safeSubject;
  let line2 = "";
  if (safeSubject.length > 18) {
    const words = safeSubject.split(" ");
    const mid = Math.ceil(words.length / 2);
    line1 = words.slice(0, mid).join(" ");
    line2 = words.slice(mid).join(" ");
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 520" width="400" height="520">
    <defs>
      <linearGradient id="bg_${bgHex}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#${bgHex}"/>
        <stop offset="100%" stop-color="#102A43"/>
      </linearGradient>
      <linearGradient id="spine3D" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#000000" stop-opacity="0.38"/>
        <stop offset="3%" stop-color="#ffffff" stop-opacity="0.22"/>
        <stop offset="7%" stop-color="#000000" stop-opacity="0.18"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="400" height="520" fill="url(#bg_${bgHex})"/>
    <circle cx="340" cy="80" r="140" fill="#ffffff" fill-opacity="0.04"/>
    <circle cx="80" cy="440" r="160" fill="#${accentHex}" fill-opacity="0.06"/>
    <line x1="30" y1="40" x2="370" y2="40" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1"/>
    <line x1="30" y1="475" x2="370" y2="475" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1"/>

    <rect x="35" y="55" width="330" height="28" rx="6" fill="#ffffff" fill-opacity="0.12"/>
    <text x="200" y="74" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="1.5" text-anchor="middle">NOSHAHI SCHOOL SYSTEM</text>

    <g transform="translate(160, 115)">
      <circle cx="40" cy="40" r="36" fill="#${accentHex}" fill-opacity="0.2" stroke="#${accentHex}" stroke-width="2"/>
      <circle cx="40" cy="40" r="28" fill="#102A43" stroke="#ffffff" stroke-width="1" stroke-opacity="0.3"/>
      <text x="40" y="46" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" text-anchor="middle">NSS</text>
    </g>

    <rect x="70" y="210" width="260" height="32" rx="16" fill="#ffffff" fill-opacity="0.95"/>
    <text x="200" y="231" fill="#102A43" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" letter-spacing="1" text-anchor="middle">${safeClass}</text>

    <text x="200" y="295" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="800" text-anchor="middle">
      <tspan x="200" dy="0">${line1}</tspan>
      ${line2 ? `<tspan x="200" dy="28">${line2}</tspan>` : ''}
    </text>

    <line x1="160" y1="365" x2="240" y2="365" stroke="#${accentHex}" stroke-width="3" stroke-linecap="round"/>

    <g transform="translate(35, 410)">
      <rect width="330" height="42" rx="8" fill="#000000" fill-opacity="0.28" stroke="#ffffff" stroke-opacity="0.12"/>
      <text x="165" y="20" fill="#FF8C00" font-family="'Inter', sans-serif" font-size="9" font-weight="700" letter-spacing="1" text-anchor="middle">PRESCRIBED TEXTBOOK</text>
      <text x="165" y="34" fill="#ffffff" font-family="'Inter', sans-serif" font-size="12" font-weight="600" text-anchor="middle">${safePub}</text>
    </g>

    <rect width="24" height="520" fill="url(#spine3D)"/>
  </svg>`;

  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function toggleCurriculumAccordion(sectionId) {
  const sectionCard = document.getElementById(`acc-card-${sectionId}`);
  const headerBtn = document.getElementById(`acc-header-${sectionId}`);

  if (curriculumState.openSections.has(sectionId)) {
    curriculumState.openSections.delete(sectionId);
    if (sectionCard) sectionCard.classList.remove('is-open');
    if (headerBtn) headerBtn.setAttribute('aria-expanded', 'false');
  } else {
    curriculumState.openSections.add(sectionId);
    if (sectionCard) sectionCard.classList.add('is-open');
    if (headerBtn) headerBtn.setAttribute('aria-expanded', 'true');

    renderCurriculumSectionArea(sectionId);
  }
}

function selectCurriculumClass(sectionId, className) {
  curriculumState.activeClasses[sectionId] = className;
  renderCurriculumSectionArea(sectionId);
}

function renderCurriculumSectionArea(sectionId) {
  const section = curriculumData.find(s => s.id === sectionId);
  if (!section) return;

  const targetContainer = document.getElementById(`dynamic-area-${sectionId}`);
  if (!targetContainer) return;

  if (section.isComingSoon) {
    targetContainer.innerHTML = `
      <div style="text-align:center; padding:36px 20px; background:#fff; border-radius:16px; border:1px dashed rgba(31,42,68,0.15);">
        <div style="width:64px; height:64px; border-radius:20px; background:rgba(255,140,0,0.12); color:#FF8C00; display:inline-flex; align-items:center; justify-content:center; font-size:1.8rem; margin-bottom:16px;">
          <i class="fas fa-university"></i>
        </div>
        <h3 style="font-size:1.4rem; font-weight:800; color:#1F2A44; margin:0 0 10px;">Undergraduate Degree Programs (Coming Soon)</h3>
        <p style="color:#64748B; max-width:600px; margin:0 auto 28px; font-size:0.95rem; line-height:1.6;">Our upcoming Bachelor of Science degree programs are launching soon. Prescribed syllabi, textbooks, and course outlines will be available prior to commencement.</p>
        <div style="display:flex; flex-wrap:wrap; gap:16px; justify-content:center; max-width:800px; margin:0 auto;">
          ${section.comingSoonPrograms.map(prog => `
            <div style="background:#F8FAFC; border:1px solid rgba(31,42,68,0.08); border-radius:14px; padding:20px 24px; text-align:center; min-width:220px; flex:1;">
              <div style="font-size:1.2rem; font-weight:800; color:#1F2A44; margin-bottom:4px;">${prog}</div>
              <span style="font-size:0.75rem; font-weight:700; text-transform:uppercase; color:#FF8C00; background:rgba(255,140,0,0.1); padding:3px 10px; border-radius:6px; display:inline-block; margin-bottom:12px;">Curriculum Coming Soon</span>
              <br>
              <a href="${getComingSoonWhatsAppUrl(prog)}" target="_blank" style="display:inline-flex; align-items:center; gap:6px; background:#25D366; color:#fff; font-size:0.85rem; font-weight:700; padding:8px 16px; border-radius:8px; text-decoration:none;">
                <i class="fab fa-whatsapp"></i> Inquire on WhatsApp
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    return;
  }

  const classNames = Object.keys(section.classes);
  const activeClass = curriculumState.activeClasses[sectionId] || classNames[0];
  const books = section.classes[activeClass] || [];

  const totalBooks = books.length;
  const totalPrice = books.reduce((sum, item) => sum + item.price, 0);

  const filterTabsHTML = `
    <div class="curr-filter-bar" role="tablist" aria-label="${section.title} Classes">
      <span class="curr-filter-label">
        <i class="fas fa-layer-group"></i> Select Class:
      </span>
      ${classNames.map(cls => {
        const isActive = cls === activeClass;
        return `
          <button 
            type="button"
            role="tab"
            aria-selected="${isActive}"
            class="curr-filter-btn ${isActive ? 'active' : ''}"
            onclick="selectCurriculumClass('${sectionId}', '${cls}')"
          >
            ${cls}
          </button>
        `;
      }).join('')}
    </div>
  `;

  const bookCardsHTML = `
    <div class="curr-books-grid">
      ${books.map(book => {
        const coverSvg = generateBookCoverSVG(book.subject, activeClass, book.publications, book.bg, book.accent);
        const waBookLink = getSingleBookWhatsAppUrl(section.title, activeClass, book);
        const priceDisplay = book.price > 0 ? formatPrice(book.price) : '<span style="color:#FF8C00; font-size:0.85rem; font-weight:700;">Contact for Price</span>';

        return `
          <div class="curr-book-card">
            <div>
              <div class="curr-book-cover-wrap">
                <span class="curr-book-spine"></span>
                <span class="curr-book-tag">${book.tag}</span>
                <span class="curr-book-class-pill">${activeClass}</span>
                <img 
                  src="${coverSvg}" 
                  alt="${book.subject} - ${activeClass}" 
                  class="curr-book-cover-img"
                  loading="lazy"
                />
              </div>

              <div class="curr-book-body">
                <div class="curr-book-subject-meta">Subject</div>
                <h4 class="curr-book-title" title="${book.subject}">${book.subject}</h4>
                
                <div class="curr-book-meta-list">
                  <div class="curr-book-meta-row">
                    <span class="curr-book-meta-label">Publisher:</span>
                    <span class="curr-book-meta-val">${book.publications}</span>
                  </div>
                  <div class="curr-book-meta-row curr-book-price-row">
                    <span class="curr-book-meta-label">Price:</span>
                    <span class="curr-book-price-tag">${priceDisplay}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="curr-book-action">
              <a 
                href="${waBookLink}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="curr-btn-buy"
                title="Order ${book.subject} via WhatsApp"
              >
                <i class="fab fa-whatsapp"></i> Buy Now
              </a>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  const bundleWaLink = getCompleteCourseWhatsAppUrl(section.title, activeClass, totalBooks, totalPrice);
  const totalDisplay = totalPrice > 0 ? formatPrice(totalPrice) : 'Inquire on WhatsApp';

  const summaryCardHTML = `
    <div class="curr-summary-card">
      <div class="curr-summary-inner">
        <div class="curr-summary-info">
          <div class="curr-summary-icon">
            <i class="fas fa-boxes-stacked"></i>
          </div>
          <div>
            <span class="curr-summary-badge">Complete Course Bundle</span>
            <h4 class="curr-summary-title">Class: ${activeClass} Complete Course</h4>
            <p class="curr-summary-sub">Includes all ${totalBooks} prescribed textbooks for Class ${activeClass}.</p>
          </div>
        </div>

        <div class="curr-summary-metrics-wrap">
          <div class="curr-summary-stat">
            <span class="curr-summary-stat-label">Total Books</span>
            <span class="curr-summary-stat-val">${totalBooks} Books</span>
          </div>

          <div class="curr-summary-divider"></div>

          <div class="curr-summary-stat">
            <span class="curr-summary-stat-label">Complete Course Price</span>
            <span class="curr-summary-stat-val price">${totalDisplay}</span>
          </div>

          <a 
            href="${bundleWaLink}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="curr-btn-complete-course"
            title="Order complete course bundle for Class: ${activeClass}"
          >
            <i class="fab fa-whatsapp"></i> Buy Complete Course
          </a>
        </div>
      </div>
    </div>
  `;

  targetContainer.innerHTML = filterTabsHTML + bookCardsHTML + summaryCardHTML;
}

function initCurriculumApp() {
  const accordionRoot = document.getElementById("curriculumAccordionRoot");
  if (!accordionRoot) return;

  accordionRoot.innerHTML = curriculumData.map(section => {
    const isOpen = curriculumState.openSections.has(section.id);
    const classCount = section.isComingSoon ? 'Coming Soon' : `${Object.keys(section.classes).length} Classes`;

    return `
      <div class="curr-accordion-card ${isOpen ? 'is-open' : ''}" id="acc-card-${section.id}">
        <button 
          type="button"
          class="curr-acc-header"
          id="acc-header-${section.id}"
          aria-expanded="${isOpen}"
          aria-controls="acc-body-${section.id}"
          onclick="toggleCurriculumAccordion('${section.id}')"
        >
          <div class="curr-acc-header-left">
            <div class="curr-acc-icon ${section.iconClass}">
              <i class="fas ${section.icon}"></i>
            </div>
            <div class="curr-acc-title-group">
              <div class="curr-acc-title-row">
                <h3 class="curr-acc-title">${section.title}</h3>
                <span class="curr-acc-count-badge">${classCount}</span>
              </div>
              <p class="curr-acc-subtitle">${section.subtitle}</p>
            </div>
          </div>

          <div class="curr-acc-header-right">
            <span class="curr-acc-chevron-btn" aria-hidden="true">
              <i class="fas fa-chevron-down"></i>
            </span>
          </div>
        </button>

        <div class="curr-acc-body" id="acc-body-${section.id}">
          <div class="curr-acc-body-content">
            <div class="curr-acc-inner" id="dynamic-area-${sectionId}">
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('').replace(/\$\{sectionId\}/g, '${section.id}');

  // Fix replacement string for section.id
  accordionRoot.innerHTML = curriculumData.map(section => {
    const isOpen = curriculumState.openSections.has(section.id);
    const classCount = section.isComingSoon ? 'Coming Soon' : `${Object.keys(section.classes).length} Classes`;

    return `
      <div class="curr-accordion-card ${isOpen ? 'is-open' : ''}" id="acc-card-${section.id}">
        <button 
          type="button"
          class="curr-acc-header"
          id="acc-header-${section.id}"
          aria-expanded="${isOpen}"
          aria-controls="acc-body-${section.id}"
          onclick="toggleCurriculumAccordion('${section.id}')"
        >
          <div class="curr-acc-header-left">
            <div class="curr-acc-icon ${section.iconClass}">
              <i class="fas ${section.icon}"></i>
            </div>
            <div class="curr-acc-title-group">
              <div class="curr-acc-title-row">
                <h3 class="curr-acc-title">${section.title}</h3>
                <span class="curr-acc-count-badge">${classCount}</span>
              </div>
              <p class="curr-acc-subtitle">${section.subtitle}</p>
            </div>
          </div>

          <div class="curr-acc-header-right">
            <span class="curr-acc-chevron-btn" aria-hidden="true">
              <i class="fas fa-chevron-down"></i>
            </span>
          </div>
        </button>

        <div class="curr-acc-body" id="acc-body-${section.id}">
          <div class="curr-acc-body-content">
            <div class="curr-acc-inner" id="dynamic-area-${section.id}">
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  curriculumData.forEach(section => {
    renderCurriculumSectionArea(section.id);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCurriculumApp);
} else {
  initCurriculumApp();
}
