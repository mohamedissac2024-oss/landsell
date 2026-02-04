// Sample Land Data
const landsData = [
    {
        id: 1,
        title: "orahey center",
        description: "Stunning beachfront property with panoramic ocean views. Perfect for residential or resort development.",
        size: "5 acres",
        price: "450,000",
        location: "Miami Beach, Florida",
        phone: "+254 789650430",
        owner: "mohamed ahmed"
    },
    {
        id: 2,
        title: "hungai estate",
        description: "Breathtaking mountain views with excellent access to utilities. Ideal for luxury home construction.",
        size: "2.5 acres",
        price: "320,000",
        location: "Aspen, Colorado",
        phone: "+254 765432345",
        owner: "halima alas"
    },
    {
        
    },
    {
        id: 4,
        title: "Agricultural Farm for camels and cows",
        description: "Rich fertile soil perfect for farming or agricultural development. Includes water rights.",
        size: "25 acres",
        price: "275,000",
        location: "wajir south",
        phone: "+254 745678951",
        owner: "maryan ahmed"
    },
    {
        id: 5,
        title: "wajir community",
        description: "Peaceful lakeside property with private dock access. Great for vacation home or rental investment.",
        size: "1.2 acres",
        price: "385,000",
        location: "wajir comminity area",
        phone: "+254 768098765",
        owner: "abdullahi musa"
    },
    {
        id: 6,
        title: "wajir urban development",
        description: "Prime urban land ready for subdivision. All permits and utilities available.",
        size: "3 acres",
        price: "720,000",
        location: "Austin, Texas",
        phone: "+254 7265685060",
        owner: "issack musa"
    },
    {
        id: 7,
        title: "Desert Oasis Property",
        description: "Unique desert landscape with stunning sunset views. Perfect for eco-friendly development.",
        size: "4 acres",
        price: "195,000",
        location: "Phoenix, Arizona",
        phone: "+254 789098762",
        owner: "ahmed kassim"

    },
    {
        id: 8,
        title: "Forest Retreat Land",
        description: "Mature forest land with natural streams. Ideal for sustainable living or hunting preserve.",
        size: "10 acres",
        price: "400,000",
        location: "ahmed liban",
        phone: "+254 789734562",
        owner: "baryare ibrahim"
    },
    {
        id: 9,
        title: "yahud land",
        description: "Strategic coastal location with marine access. Excellent for mixed-use development.",
        size: "2 acres",
        price: "560,000",
        location: "burwaqo",
        phone: "+254 724355645",
        owner: "issa mohamed"
    }
];

// DOM Elements
const landsGrid = document.getElementById('landsGrid');
const modal = document.getElementById('detailModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

// Generate land cards HTML
function generateLandCard(land) {
    return `
        <div class="land-card" data-id="${land.id}">
            <div class="land-image">
                <span style="font-size: 4rem;">🏞️</span>
            </div>
            <div class="land-info">
                <h3 class="land-title">${land.title}</h3>
                <p class="land-description">${land.description}</p>
                
                <div class="land-stats">
                    <span class="stat">
                        <span class="stat-icon">📏</span>
                        <span>${land.size}</span>
                    </span>
                    <span class="stat">
                        <span class="stat-icon">👤</span>
                        <span>${land.owner}</span>
                    </span>
                </div>
                
                <div class="land-actions">
                    <button class="action-btn price-btn" onclick="showPrice('${land.title}', '${land.price}')">
                        <span>💰</span>
                        <span>${land.price}</span>
                    </button>
                    <button class="action-btn location-btn" onclick="showLocation('${land.title}', '${land.location}')">
                        <span>📍</span>
                        <span>Location</span>
                    </button>
                    <button class="action-btn phone-btn" onclick="showPhone('${land.title}', '${land.phone}')">
                        <span>📞</span>
                        <span>Call</span>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Render all land cards
function renderLands() {
    landsGrid.innerHTML = landsData.map(land => generateLandCard(land)).join('');
}

// Show price in modal
function showPrice(title, price) {
    modalTitle.textContent = title;
    modalBody.innerHTML = `
        <div class="modal-item">
            <span class="modal-icon">💰</span>
            <span class="modal-text"><strong>Price:</strong> ${price}</span>
        </div>
        <p style="color: var(--text-light); margin-top: 15px;">This is the current listing price for this property. Price may be subject to negotiation.</p>
    `;
    modal.classList.add('active');
}

// Show location in modal
function showLocation(title, location) {
    modalTitle.textContent = title;
    modalBody.innerHTML = `
        <div class="modal-item">
            <span class="modal-icon">📍</span>
            <span class="modal-text"><strong>Location:</strong> ${location}</span>
        </div>
        <div style="margin-top: 20px; height: 200px; background: linear-gradient(135deg, #e0e0e0, #c0c0c0); border-radius: 10px; display: flex; align-items: center; justify-content: center;">
            <span style="font-size: 3rem;">🗺️</span>
        </div>
        <p style="color: var(--text-light); margin-top: 15px;">Map view coming soon. Contact us for directions.</p>
    `;
    modal.classList.add('active');
}

// Show phone in modal
function showPhone(title, phone) {
    modalTitle.textContent = title;
    modalBody.innerHTML = `
        <div class="modal-item">
            <span class="modal-icon">📞</span>
            <span class="modal-text"><strong>Phone:</strong> ${phone}</span>
        </div>
        <div style="display: flex; gap: 10px; margin-top: 20px;">
            <a href="tel:${phone}" class="action-btn phone-btn" style="flex: 1; text-decoration: none;">
                <span>📞</span>
                <span>Call Now</span>
            </a>
            <a href="sms:${phone}" class="action-btn location-btn" style="flex: 1; text-decoration: none;">
                <span>💬</span>
                <span>Send SMS</span>
            </a>
        </div>
    `;
    modal.classList.add('active');
}

// Close modal
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.classList.remove('active');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderLands();
    
    // Add animation to cards on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.land-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

// Make functions globally available
window.showPrice = showPrice;
window.showLocation = showLocation;
window.showPhone = showPhone;

