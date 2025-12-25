// Services data
const servicesData = [
  {
    id: 1,
    name: "Dedicated Counselor",
    description: "One-on-one mentorship from start to finish, ensuring you never feel lost in the process.",
    icon: "support_agent",
    colorScheme: {
      bgGradient: "bg-sky-50",
      textColor: "text-sky-600",
      hoverBg: "group-hover:bg-sky-500",
      hoverText: "group-hover:text-sky-600",
      blurBg: "bg-sky-50",
      blurHover: "group-hover:bg-sky-100/60",
      shadowColor: "group-hover:shadow-sky-500/30",
      hoverShadow: "hover:shadow-[0_20px_40px_-4px_rgba(14,165,233,0.1)]"
    }
  },
  {
    id: 2,
    name: "Course Selection",
    description: "Expert guidance to help you choose the right course that aligns with your career aspirations.",
    icon: "menu_book",
    colorScheme: {
      bgGradient: "bg-emerald-50",
      textColor: "text-emerald-600",
      hoverBg: "group-hover:bg-emerald-600",
      hoverText: "group-hover:text-emerald-600",
      blurBg: "bg-emerald-50",
      blurHover: "group-hover:bg-emerald-100/60",
      shadowColor: "group-hover:shadow-emerald-500/30",
      hoverShadow: "hover:shadow-[0_20px_40px_-4px_rgba(16,185,129,0.1)]"
    }
  },
  {
    id: 3,
    name: "University Shortlisting",
    description: "Curated lists of universities perfectly matched to your academic profile and career goals.",
    icon: "format_list_bulleted",
    colorScheme: {
      bgGradient: "bg-indigo-50",
      textColor: "text-indigo-600",
      hoverBg: "group-hover:bg-indigo-600",
      hoverText: "group-hover:text-indigo-600",
      blurBg: "bg-indigo-50",
      blurHover: "group-hover:bg-indigo-100/60",
      shadowColor: "group-hover:shadow-indigo-500/30",
      hoverShadow: "hover:shadow-[0_20px_40px_-4px_rgba(79,70,229,0.1)]"
    }
  },
  {
    id: 4,
    name: "Application Submissions",
    description: "End-to-end management of your applications to ensure error-free and timely submissions.",
    icon: "send",
    colorScheme: {
      bgGradient: "bg-teal-50",
      textColor: "text-teal-600",
      hoverBg: "group-hover:bg-teal-600",
      hoverText: "group-hover:text-teal-600",
      blurBg: "bg-teal-50",
      blurHover: "group-hover:bg-teal-100/60",
      shadowColor: "group-hover:shadow-teal-500/30",
      hoverShadow: "hover:shadow-[0_20px_40px_-4px_rgba(13,148,136,0.1)]"
    }
  },
  {
    id: 5,
    name: "SOP Support",
    description: "Crafting your unique story through personalized Statement of Purpose editing and feedback.",
    icon: "edit_note",
    colorScheme: {
      bgGradient: "bg-violet-50",
      textColor: "text-violet-600",
      hoverBg: "group-hover:bg-violet-600",
      hoverText: "group-hover:text-violet-600",
      blurBg: "bg-violet-50",
      blurHover: "group-hover:bg-violet-100/60",
      shadowColor: "group-hover:shadow-violet-500/30",
      hoverShadow: "hover:shadow-[0_20px_40px_-4px_rgba(124,58,237,0.1)]"
    }
  },
  {
    id: 6,
    name: "Visa Support",
    description: "Comprehensive guidance for visa interviews and documentation with a 99% success rate.",
    icon: "badge",
    colorScheme: {
      bgGradient: "bg-rose-50",
      textColor: "text-rose-600",
      hoverBg: "group-hover:bg-rose-600",
      hoverText: "group-hover:text-rose-600",
      blurBg: "bg-rose-50",
      blurHover: "group-hover:bg-rose-100/60",
      shadowColor: "group-hover:shadow-rose-500/30",
      hoverShadow: "hover:shadow-[0_20px_40px_-4px_rgba(225,29,72,0.1)]"
    }
  }
  // {
  //   id: 7,
  //   name: "IELTS Preparation",
  //   description: "Access to expert coaching resources and materials to help you achieve your target score.",
  //   icon: "school",
  //   colorScheme: {
  //     bgGradient: "bg-amber-50",
  //     textColor: "text-amber-600",
  //     hoverBg: "group-hover:bg-amber-500",
  //     hoverText: "group-hover:text-amber-600",
  //     blurBg: "bg-amber-50",
  //     blurHover: "group-hover:bg-amber-100/60",
  //     shadowColor: "group-hover:shadow-amber-500/30",
  //     hoverShadow: "hover:shadow-[0_20px_40px_-4px_rgba(217,119,6,0.1)]"
  //   }
  // }
];

// Predefined color schemes for easy assignment
const colorSchemes = {
  indigo: {
    bgGradient: "bg-indigo-50",
    textColor: "text-indigo-600",
    hoverBg: "group-hover:bg-indigo-600",
    hoverText: "group-hover:text-indigo-600",
    blurBg: "bg-indigo-50",
    blurHover: "group-hover:bg-indigo-100/60",
    shadowColor: "group-hover:shadow-indigo-500/30",
    hoverShadow: "hover:shadow-[0_20px_40px_-4px_rgba(79,70,229,0.1)]"
  },
  teal: {
    bgGradient: "bg-teal-50",
    textColor: "text-teal-600",
    hoverBg: "group-hover:bg-teal-600",
    hoverText: "group-hover:text-teal-600",
    blurBg: "bg-teal-50",
    blurHover: "group-hover:bg-teal-100/60",
    shadowColor: "group-hover:shadow-teal-500/30",
    hoverShadow: "hover:shadow-[0_20px_40px_-4px_rgba(13,148,136,0.1)]"
  },
  amber: {
    bgGradient: "bg-amber-50",
    textColor: "text-amber-600",
    hoverBg: "group-hover:bg-amber-500",
    hoverText: "group-hover:text-amber-600",
    blurBg: "bg-amber-50",
    blurHover: "group-hover:bg-amber-100/60",
    shadowColor: "group-hover:shadow-amber-500/30",
    hoverShadow: "hover:shadow-[0_20px_40px_-4px_rgba(217,119,6,0.1)]"
  },
  rose: {
    bgGradient: "bg-rose-50",
    textColor: "text-rose-600",
    hoverBg: "group-hover:bg-rose-600",
    hoverText: "group-hover:text-rose-600",
    blurBg: "bg-rose-50",
    blurHover: "group-hover:bg-rose-100/60",
    shadowColor: "group-hover:shadow-rose-500/30",
    hoverShadow: "hover:shadow-[0_20px_40px_-4px_rgba(225,29,72,0.1)]"
  },
  violet: {
    bgGradient: "bg-violet-50",
    textColor: "text-violet-600",
    hoverBg: "group-hover:bg-violet-600",
    hoverText: "group-hover:text-violet-600",
    blurBg: "bg-violet-50",
    blurHover: "group-hover:bg-violet-100/60",
    shadowColor: "group-hover:shadow-violet-500/30",
    hoverShadow: "hover:shadow-[0_20px_40px_-4px_rgba(124,58,237,0.1)]"
  },
  sky: {
    bgGradient: "bg-sky-50",
    textColor: "text-sky-600",
    hoverBg: "group-hover:bg-sky-500",
    hoverText: "group-hover:text-sky-600",
    blurBg: "bg-sky-50",
    blurHover: "group-hover:bg-sky-100/60",
    shadowColor: "group-hover:shadow-sky-500/30",
    hoverShadow: "hover:shadow-[0_20px_40px_-4px_rgba(14,165,233,0.1)]"
  },
  emerald: {
    bgGradient: "bg-emerald-50",
    textColor: "text-emerald-600",
    hoverBg: "group-hover:bg-emerald-600",
    hoverText: "group-hover:text-emerald-600",
    blurBg: "bg-emerald-50",
    blurHover: "group-hover:bg-emerald-100/60",
    shadowColor: "group-hover:shadow-emerald-500/30",
    hoverShadow: "hover:shadow-[0_20px_40px_-4px_rgba(16,185,129,0.1)]"
  },
  purple: {
    bgGradient: "bg-purple-50",
    textColor: "text-purple-600",
    hoverBg: "group-hover:bg-purple-600",
    hoverText: "group-hover:text-purple-600",
    blurBg: "bg-purple-50",
    blurHover: "group-hover:bg-purple-100/60",
    shadowColor: "group-hover:shadow-purple-500/30",
    hoverShadow: "hover:shadow-[0_20px_40px_-4px_rgba(147,51,234,0.1)]"
  },
  orange: {
    bgGradient: "bg-orange-50",
    textColor: "text-orange-600",
    hoverBg: "group-hover:bg-orange-500",
    hoverText: "group-hover:text-orange-600",
    blurBg: "bg-orange-50",
    blurHover: "group-hover:bg-orange-100/60",
    shadowColor: "group-hover:shadow-orange-500/30",
    hoverShadow: "hover:shadow-[0_20px_40px_-4px_rgba(249,115,22,0.1)]"
  }
};

// Function to create a service card element
function createServiceCard(service) {
  const colors = service.colorScheme;
  
  const card = document.createElement('div');
  card.className = `group relative flex flex-col gap-6 rounded-3xl bg-white p-8 transition-all duration-500 hover:-translate-y-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05),0_10px_20px_-2px_rgba(0,0,0,0.01)] ${colors.hoverShadow} border border-slate-100 overflow-hidden`;
  
  card.innerHTML = `
    <div class="absolute right-0 top-0 h-32 w-32 translate-x-10 translate-y-[-40%] rounded-full ${colors.blurBg} blur-3xl transition-all ${colors.blurHover}"></div>
    <div class="relative flex h-16 w-16 items-center justify-center rounded-2xl ${colors.bgGradient} ${colors.textColor} transition-all duration-300 ${colors.hoverBg} group-hover:text-white group-hover:shadow-lg ${colors.shadowColor}">
      <span class="material-symbols-outlined text-[32px]">${service.icon}</span>
    </div>
    <div class="relative flex flex-col gap-2">
      <h3 class="text-slate-900 text-xl font-bold ${colors.hoverText} transition-colors">
        ${service.name}
      </h3>
      <p class="text-slate-500 text-base leading-relaxed">
        ${service.description}
      </p>
    </div>
  `;
  
  return card;
}

// Function to render all services
function renderServices(services = servicesData, containerId = 'services-grid') {
  const container = document.getElementById(containerId);
  
  if (!container) {
    console.error(`Container with id "${containerId}" not found`);
    return;
  }
  
  // Clear existing content
  container.innerHTML = '';
  
  // Create and append cards
  services.forEach(service => {
    const card = createServiceCard(service);
    container.appendChild(card);
  });
}

// Initialize on DOM load
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    renderServices();
  });
}
