// University data for India
const universitiesData = [
  {
    id: 1,
    name: "VIT",
    location: "All India",
    state: "All India",
    topRated: true,
    admissionsOpen: true
  },
  {
    id: 2,
    name: "SRM",
    location: "All India",
    state: "All India",
    topRated: true,
    admissionsOpen: true
  },
  {
    id: 3,
    name: "Saveetha University (SSE)",
    location: "Chennai",
    state: "Tamil Nadu",
    topRated: true,
    admissionsOpen: true
  },
  {
    id: 4,
    name: "Sathyabama University",
    location: "Chennai",
    state: "Tamil Nadu",
    topRated: true,
    admissionsOpen: true
  },
  {
    id: 5,
    name: "Veltech University",
    location: "Chennai",
    state: "Tamil Nadu",
    topRated: false,
    admissionsOpen: true
  },
  {
    id: 6,
    name: "Bharath University",
    location: "Chennai",
    state: "Tamil Nadu",
    topRated: false,
    admissionsOpen: true
  },
  {
    id: 7,
    name: "Hindustan University",
    location: "Chennai",
    state: "Tamil Nadu",
    topRated: false,
    admissionsOpen: true
  },
  {
    id: 8,
    name: "Dr. MGR University",
    location: "Chennai",
    state: "Tamil Nadu",
    topRated: false,
    admissionsOpen: true
  },
  {
    id: 9,
    name: "Kalasalingam University",
    location: "Krishnankoil, Tamil Nadu",
    state: "Tamil Nadu",
    topRated: true,
    admissionsOpen: true
  },
  {
    id: 10,
    name: "Amrita Vishwa Vidyapeetham",
    location: "All India",
    state: "All India",
    topRated: true,
    admissionsOpen: true
  },
  {
    id: 11,
    name: "Panimalar Engineering College",
    location: "Chennai",
    state: "Tamil Nadu",
    topRated: false,
    admissionsOpen: true
  },
  {
    id: 12,
    name: "Rajalakshmi Institute of Technology (RIT)",
    location: "Chennai",
    state: "Tamil Nadu",
    topRated: false,
    admissionsOpen: true
  },
  {
    id: 13,
    name: "Sai University",
    location: "Chennai",
    state: "Tamil Nadu",
    topRated: false,
    admissionsOpen: true
  },
  {
    id: 14,
    name: "Prathusha Engineering College",
    location: "Chennai",
    state: "Tamil Nadu",
    topRated: false,
    admissionsOpen: true
  },
  {
    id: 15,
    name: "Takshashila University",
    location: "Tindivanam, Tamil Nadu",
    state: "Tamil Nadu",
    topRated: false,
    admissionsOpen: true
  },
  {
    id: 16,
    name: "Vinayaka Missions University",
    location: "Chennai",
    state: "Tamil Nadu",
    topRated: false,
    admissionsOpen: true
  },
  {
    id: 17,
    name: "SCSVMV (Kanchi University)",
    location: "Kancheepuram",
    state: "Tamil Nadu",
    topRated: false,
    admissionsOpen: true
  },
  {
    id: 18,
    name: "Sri Ramachandra University",
    location: "Chennai",
    state: "Tamil Nadu",
    topRated: false,
    admissionsOpen: true
  },
  {
    id: 19,
    name: "Karunya Institute of Technology",
    location: "Coimbatore",
    state: "Tamil Nadu",
    topRated: false,
    admissionsOpen: true
  },
  {
    id: 20,
    name: "Vels Institute of Science",
    location: "Chennai",
    state: "Tamil Nadu",
    topRated: false,
    admissionsOpen: true
  },
  {
    id: 21,
    name: "M. S. Ramaiah University",
    location: "Bangalore",
    state: "Karnataka",
    topRated: true,
    admissionsOpen: true
  },
  {
    id: 22,
    name: "CHRIST University",
    location: "Bangalore",
    state: "Karnataka",
    topRated: true,
    admissionsOpen: true
  },
  {
    id: 23,
    name: "RV University",
    location: "Bangalore",
    state: "Karnataka",
    topRated: true,
    admissionsOpen: true
  },
  {
    id: 24,
    name: "Manipal University",
    location: "Bangalore",
    state: "Karnataka",
    topRated: true,
    admissionsOpen: true
  },
  {
    id: 25,
    name: "BMS College of Engineering",
    location: "Bangalore",
    state: "Karnataka",
    topRated: true,
    admissionsOpen: true
  },
  {
    id: 26,
    name: "Alliance University",
    location: "Bangalore",
    state: "Karnataka",
    topRated: false,
    admissionsOpen: true
  },
  {
    id: 27,
    name: "CMR University",
    location: "Bangalore",
    state: "Karnataka",
    topRated: true,
    admissionsOpen: true
  },
  {
    id: 28,
    name: "Dayananda Sagar University",
    location: "Bangalore",
    state: "Karnataka",
    topRated: true,
    admissionsOpen: true
  },
  {
    id: 29,
    name: "Jain University",
    location: "Bangalore",
    state: "Karnataka",
    topRated: true,
    admissionsOpen: true
  },
  {
    id: 30,
    name: "PES University",
    location: "Bangalore",
    state: "Karnataka",
    topRated: true,
    admissionsOpen: true
  },
  {
    id: 31,
    name: "Nitte University",
    location: "Bangalore",
    state: "Karnataka",
    topRated: true,
    admissionsOpen: true
  },
  {
    id: 32,
    name: "Acharya University",
    location: "Bangalore",
    state: "Karnataka",
    topRated: false,
    admissionsOpen: true
  },
  {
    id: 33,
    name: "New Horizon College of Engineering",
    location: "Bangalore",
    state: "Karnataka",
    topRated: true,
    admissionsOpen: true
  },
  {
    id: 34,
    name: "REVA University",
    location: "Bangalore",
    state: "Karnataka",
    topRated: true,
    admissionsOpen: true
  },
  {
    id: 35,
    name: "Presidency University",
    location: "Bangalore",
    state: "Karnataka",
    topRated: false,
    admissionsOpen: true
  },
  {
    id: 36,
    name: "GITAM University",
    location: "Bangalore",
    state: "Karnataka",
    topRated: false,
    admissionsOpen: true
  }
];

// Function to create badge HTML for flags
function createBadges(university) {
  const badges = [];

  if (university.topRated) {
    badges.push(`
      <span class="inline-flex items-center gap-1 rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
        <span class="material-symbols-outlined text-[14px]">stars</span>
        Top Rated
      </span>
    `);
  }

  if (university.admissionsOpen) {
    badges.push(`
      <span class="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
        <span class="material-symbols-outlined text-[14px]">schedule</span>
        Admissions Open
      </span>
    `);
  }

  return badges.join('');
}

// Function to create a university card element
function createUniversityCard(university) {
  const card = document.createElement('div');
  card.className = 'group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col justify-between h-48 cursor-pointer';

  card.innerHTML = `
    <div class="flex justify-between items-start">
      <div class="flex flex-wrap gap-1.5">
        ${createBadges(university)}
      </div>
      <div class="h-8 w-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors flex-shrink-0">
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

// Function to filter universities by top rated
function filterByTopRated() {
  const filtered = universitiesData.filter(uni => uni.topRated === true);
  renderUniversities(filtered);
}

// Function to filter universities by admissions open
function filterByAdmissionsOpen() {
  const filtered = universitiesData.filter(uni => uni.admissionsOpen === true);
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
