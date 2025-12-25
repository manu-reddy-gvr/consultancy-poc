// University data for India
const universitiesData = [
  {
    id: 1,
    name: "Indian Institute of Technology (IIT)",
    location: "Mumbai, Maharashtra",
    state: "Maharashtra",
    flag: "Top Rated"
  },
  {
    id: 2,
    name: "Indian Institute of Management (IIM)",
    location: "Ahmedabad, Gujarat",
    state: "Gujarat",
    flag: "Top Rated"
  },
  {
    id: 3,
    name: "University of Delhi",
    location: "New Delhi, Delhi",
    state: "Delhi",
    flag: "Top Rated"
  },
  {
    id: 4,
    name: "Anna University",
    location: "Chennai, Tamil Nadu",
    state: "Tamil Nadu",
    flag: "Admissions Open"
  },
  {
    id: 5,
    name: "Banaras Hindu University",
    location: "Varanasi, Uttar Pradesh",
    state: "Uttar Pradesh",
    flag: "Top Rated"
  },
  {
    id: 6,
    name: "Jawaharlal Nehru University",
    location: "New Delhi, Delhi",
    state: "Delhi",
    flag: "Admissions Open"
  },
  {
    id: 7,
    name: "Jadavpur University",
    location: "Kolkata, West Bengal",
    state: "West Bengal",
    flag: "Top Rated"
  },
  {
    id: 8,
    name: "University of Hyderabad",
    location: "Hyderabad, Telangana",
    state: "Telangana",
    flag: "Admissions Open"
  },
  {
    id: 9,
    name: "Aligarh Muslim University",
    location: "Aligarh, Uttar Pradesh",
    state: "Uttar Pradesh",
    flag: "Admissions Open"
  },
  {
    id: 10,
    name: "University of Calcutta",
    location: "Kolkata, West Bengal",
    state: "West Bengal",
    flag: "Top Rated"
  },
  {
    id: 11,
    name: "Savitribai Phule Pune University",
    location: "Pune, Maharashtra",
    state: "Maharashtra",
    flag: "Admissions Open"
  },
  {
    id: 12,
    name: "University of Mumbai",
    location: "Mumbai, Maharashtra",
    state: "Maharashtra",
    flag: "Top Rated"
  }
];

// Function to get flag styling based on flag type
function getFlagStyle(flag) {
  if (flag === "Top Rated") {
    return {
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      ringColor: "ring-green-600/20",
      icon: "stars"
    };
  } else if (flag === "Admissions Open") {
    return {
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      ringColor: "ring-blue-600/20",
      icon: "schedule"
    };
  }
  // Default fallback
  return {
    bgColor: "bg-slate-50",
    textColor: "text-slate-700",
    ringColor: "ring-slate-600/20",
    icon: "info"
  };
}

// Function to create a university card element
function createUniversityCard(university) {
  const flagStyle = getFlagStyle(university.flag);
  
  const card = document.createElement('div');
  card.className = 'group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col justify-between h-48 cursor-pointer';
  
  card.innerHTML = `
    <div class="flex justify-between items-start">
      <span class="inline-flex items-center gap-1 rounded-md ${flagStyle.bgColor} px-2 py-1 text-xs font-medium ${flagStyle.textColor} ring-1 ring-inset ${flagStyle.ringColor}">
        <span class="material-symbols-outlined text-[14px]">${flagStyle.icon}</span>
        ${university.flag}
      </span>
      <div class="h-8 w-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
        <span class="material-symbols-outlined text-lg">school</span>
      </div>
    </div>
    <div>
      <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
        ${university.name}
      </h3>
      <div class="flex items-center gap-1 text-slate-500 text-sm font-medium">
        <span class="material-symbols-outlined text-lg">location_on</span>
        ${university.location}
      </div>
    </div>
  `;
  
  return card;
}

// Function to render all universities
function renderUniversities(universities = universitiesData, containerId = 'universities-grid') {
  const container = document.getElementById(containerId);
  
  if (!container) {
    console.error(`Container with id "${containerId}" not found`);
    return;
  }
  
  // Clear existing content
  container.innerHTML = '';
  
  // Create and append cards
  universities.forEach(university => {
    const card = createUniversityCard(university);
    container.appendChild(card);
  });
}

// Function to filter universities by state
function filterByState(state) {
  if (!state) {
    renderUniversities(universitiesData);
    return;
  }
  const filtered = universitiesData.filter(uni => uni.state === state);
  renderUniversities(filtered);
}

// Function to filter universities by flag
function filterByFlag(flag) {
  if (!flag) {
    renderUniversities(universitiesData);
    return;
  }
  const filtered = universitiesData.filter(uni => uni.flag === flag);
  renderUniversities(filtered);
}

// Function to search universities
function searchUniversities(query) {
  if (!query) {
    renderUniversities(universitiesData);
    return;
  }
  
  const searchLower = query.toLowerCase();
  const filtered = universitiesData.filter(uni => 
    uni.name.toLowerCase().includes(searchLower) ||
    uni.location.toLowerCase().includes(searchLower) ||
    uni.state.toLowerCase().includes(searchLower)
  );
  
  renderUniversities(filtered);
}

// Initialize on DOM load
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    renderUniversities();
  });
}
