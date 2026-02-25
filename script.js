/**
 * EventSphere Core Logic
 */

// --- State Management ---
const defaultConfig = {
    site_title: 'EventSphere',
    hero_headline: 'Discover Amazing Events Near You'
};

let registrations = [];
let currentPage = 'home';
let selectedEventId = null;

// --- Event Data ---
const eventsData = [
    {
        id: 'evt-001',
        title: 'TechConf 2025',
        subtitle: 'The Future of Technology',
        category: 'Tech',
        date: '2025-03-15',
        location: 'San Francisco',
        price: 299,
        capacity: 5000,
        registered: 3847,
        image: 'gradient-indigo',
        featured: true,
        description: 'Join developers and tech leaders for keynotes and workshops.'
    },
    {
        id: 'evt-002',
        title: 'Design Systems Summit',
        subtitle: 'Building Scalable Design',
        category: 'Design',
        date: '2025-02-28',
        location: 'New York',
        price: 199,
        capacity: 2000,
        registered: 1523,
        image: 'gradient-pink',
        featured: true,
        description: 'Learn to create and scale design systems.'
    },
    // ... (Add other events as needed)
];

// --- Navigation ---
function navigateTo(page, eventId = null) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(`page-${page}`).classList.remove('hidden');
    currentPage = page;
    
    if (page === 'events') renderEventsGrid();
    else if (page === 'detail' && eventId) renderEventDetail(eventId);
    else if (page === 'dashboard') renderDashboard();
    else if (page === 'home') renderFeaturedEvents();
}

// --- Render Functions ---
function renderFeaturedEvents() {
    const featured = eventsData.filter(e => e.featured).slice(0, 3);
    const container = document.getElementById('featured-events');
    if (!container) return;
    
    container.innerHTML = featured.map(event => `
        <article class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 card-hover">
            <h3 class="font-bold text-lg">${event.title}</h3>
            <p class="text-slate-500 mb-4">${event.location}</p>
            <button onclick="navigateTo('detail', '${event.id}')" class="text-indigo-600 font-semibold">View Details →</button>
        </article>
    `).join('');
}

// --- Utility Functions ---
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
    });
}

// --- Initialization ---
function init() {
    renderFeaturedEvents();
    console.log("EventSphere Platform Ready");
}

window.onload = init;