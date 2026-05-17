// ==================== DATA ====================
const FACILITIES = [
  { id:1, name:"King Faisal Hospital", district:"Gasabo, Kigali", category:"hospital", lat:-1.9500, lng:30.0588, open:"24h", rating:4.8, phone:"+250788303000", services:"Surgery, ICU, Cardiology", icon:"🏥" },
  { id:2, name:"Rwanda Military Hospital", district:"Kanombe, Kigali", category:"hospital", lat:-1.9695, lng:30.1322, open:"24h", rating:4.5, phone:"+250788311611", services:"Emergency, Surgery", icon:"🏥" },
  { id:3, name:"CHUK Teaching Hospital", district:"Nyarugenge, Kigali", category:"hospital", lat:-1.9536, lng:30.0616, open:"24h", rating:4.7, phone:"+250788303900", services:"Neurology, Pediatrics", icon:"🏥" },
  { id:4, name:"Kibagabaga Hospital", district:"Gasabo, Kigali", category:"hospital", lat:-1.9303, lng:30.1052, open:"24h", rating:4.3, phone:"+250788303700", services:"General Medicine", icon:"🏥" },
  { id:5, name:"Masaka Hospital", district:"Kicukiro, Kigali", category:"hospital", lat:-1.9985, lng:30.1010, open:"24h", rating:4.2, phone:"+250788303500", services:"Pediatrics", icon:"🏥" },
  { id:6, name:"La Croix du Sud Clinic", district:"Kicukiro, Kigali", category:"clinic", lat:-2.0021, lng:30.0890, open:"open", rating:4.4, phone:"+250788386000", services:"Labs, Dentistry", icon:"🩺" },
  { id:7, name:"Smile Dental Rwanda", district:"Gasabo, Kigali", category:"dentist", lat:-1.9520, lng:30.0640, open:"open", rating:4.7, phone:"+250784111222", services:"Orthodontics", icon:"🦷" },
  { id:8, name:"PharmaCare Rwanda", district:"Gasabo, Kigali", category:"pharmacy", lat:-1.9500, lng:30.0600, open:"24h", rating:4.6, phone:"+250788222333", services:"Prescriptions", icon:"💊" },
  { id:9, name:"Vision Care Center", district:"Gasabo, Kigali", category:"eye-care", lat:-1.9510, lng:30.0680, open:"open", rating:4.8, phone:"+250788888999", services:"Eye Exams", icon:"👁️" },
  { id:10, name:"Muhima Maternity", district:"Nyarugenge, Kigali", category:"maternity", lat:-1.9621, lng:30.0478, open:"24h", rating:4.1, phone:"+250788302400", services:"Delivery", icon:"🤰" },
  { id:11, name:"Cardiac Care Center", district:"Gasabo, Kigali", category:"heart-hospital", lat:-1.9530, lng:30.0700, open:"24h", rating:4.9, phone:"+250788777666", services:"Heart Surgery", icon:"❤️" },
  { id:12, name:"Children's Medical Center", district:"Gasabo, Kigali", category:"children-hospital", lat:-1.9480, lng:30.0720, open:"24h", rating:4.8, phone:"+250788333222", services:"Vaccines", icon:"👶" },
  { id:13, name:"Kigali Emergency Clinic", district:"Kicukiro, Kigali", category:"emergency", lat:-1.9888, lng:30.0978, open:"24h", rating:4.7, phone:"+250784911911", services:"Trauma", icon:"🚨" },
  { id:14, name:"Emergency Response Center", district:"Gasabo, Kigali", category:"emergency", lat:-1.9400, lng:30.0600, open:"24h", rating:4.8, phone:"+250788911911", services:"Ambulance", icon:"🚨" }
];

// ==================== TRANSLATIONS ====================
const t9n = {
  en: {
    langSubtitle: "Your healthcare finder in Rwanda",
    tapLocation: "Tap to detect location",
    nearby: "nearby",
    available: "available",
    listTitle: "Nearby Facilities",
    navFind: "Find",
    navMap: "Map",
    navEmergency: "Emergency",
    navAppointments: "Appts",
    modalTitle: "📅 Book Appointment",
    successMsg: "✅ Appointment booked! Check your SMS.",
    mapTitle: "Healthcare Map",
    emergencyTitle: "🚨 Emergency Services",
    emergencySubtitle: "24/7 Emergency Response in Rwanda",
    callEmergency: "Call Emergency Now",
    ambulanceTitle: "Ambulance Services",
    ambulanceDesc: "SAMU Rwanda: Call 912 for immediate ambulance dispatch",
    erTitle: "Emergency Rooms",
    erDesc: "CHUK, King Faisal, and Military Hospital have 24/7 ER",
    bloodTitle: "Blood Bank",
    bloodDesc: "National Blood Transfusion Centre: +250 788 304 000",
    fireTitle: "Fire & Rescue",
    fireDesc: "Fire Brigade: Call 111 for fire emergencies",
    policeTitle: "Police Emergency",
    policeDesc: "Rwanda National Police: Call 112 for police assistance",
    apptsTitle: "📅 My Appointments",
    apptsSubtitle: "Manage your upcoming bookings",
    noAppts: "No appointments yet",
    noApptsDesc: "Book your first appointment with a healthcare facility near you.",
    findFacility: "Find a Facility",
    confirmed: "Confirmed",
    pending: "Pending",
    completed: "Completed",
    allCat: "All",
    hospitalCat: "Hospitals",
    clinicCat: "Clinics",
    dentistCat: "Dentists",
    pharmacyCat: "Pharmacy",
    eyeCat: "Eye",
    maternityCat: "Maternity",
    heartCat: "Heart",
    childrenCat: "Children",
    emergencyCat: "Emergency"
  },
  rw: {
    langSubtitle: "Shakisha ibitaro bya bugufi",
    tapLocation: "Kanda umenye aho uri",
    nearby: "hafi",
    available: "birahari",
    listTitle: "Ibitaro bya bugufi",
    navFind: "Shakisha",
    navMap: "Ikarita",
    navEmergency: "Amakuba",
    navAppointments: "Kwiyandikisha",
    modalTitle: "📅 Kwiyandikisha",
    successMsg: "✅ Kwiyandikisha byakozwe! Reba SMS.",
    mapTitle: "Ikarita y'Ubuzima",
    emergencyTitle: "🚨 Serivisi z'Amakuba",
    emergencySubtitle: "Ubufasha bw'Amakuba 24/7 mu Rwanda",
    callEmergency: "Hamagara Amakuba",
    ambulanceTitle: "Serivisi z'Ambiransi",
    ambulanceDesc: "SAMU Rwanda: Hamagara 912 kugira ngo ubone ambiransi",
    erTitle: "Ibyumba by'Amakuba",
    erDesc: "CHUK, King Faisal, n'Ibitaro bya Gisirikare bifite ER 24/7",
    bloodTitle: "Banki y'Amaraso",
    bloodDesc: "Ikigo cy'Igihugu cyo Gutanga Amaraso: +250 788 304 000",
    fireTitle: "Abazimya Umuriro",
    fireDesc: "Abazimya Umuriro: Hamagara 111",
    policeTitle: "Polisi y'Amakuba",
    policeDesc: "Polisi y'u Rwanda: Hamagara 112",
    apptsTitle: "📅 Ibyandikishijwe",
    apptsSubtitle: "Reba ibyo wandikishije",
    noAppts: "Nta byandikishijwe",
    noApptsDesc: "Iyandikishe ku kigo nderabuzima cya bugufi.",
    findFacility: "Shakisha Ikigo",
    confirmed: "Byemejwe",
    pending: "Bitegerejwe",
    completed: "Byarangiye",
    allCat: "Byose",
    hospitalCat: "Ibitaro",
    clinicCat: "Amavuriro",
    dentistCat: "Amenyo",
    pharmacyCat: "Farumasi",
    eyeCat: "Amaso",
    maternityCat: "Ababyeyi",
    heartCat: "Umutima",
    childrenCat: "Abana",
    emergencyCat: "Amakuba"
  },
  fr: {
    langSubtitle: "Trouvez des soins près de chez vous",
    tapLocation: "Appuyez pour localiser",
    nearby: "à proximité",
    available: "disponible",
    listTitle: "Établissements",
    navFind: "Chercher",
    navMap: "Carte",
    navEmergency: "Urgence",
    navAppointments: "RDV",
    modalTitle: "📅 Prendre RDV",
    successMsg: "✅ RDV confirmé ! Vérifiez SMS.",
    mapTitle: "Carte Santé",
    emergencyTitle: "🚨 Services d'Urgence",
    emergencySubtitle: "Intervention d'urgence 24/7 au Rwanda",
    callEmergency: "Appeler les Urgences",
    ambulanceTitle: "Services d'Ambulance",
    ambulanceDesc: "SAMU Rwanda : Appelez le 912 pour une ambulance",
    erTitle: "Salles d'Urgence",
    erDesc: "CHUK, King Faisal et Hôpital Militaire ont des urgences 24/7",
    bloodTitle: "Banque de Sang",
    bloodDesc: "Centre National de Transfusion : +250 788 304 000",
    fireTitle: "Pompiers",
    fireDesc: "Sapeurs-Pompiers : Appelez le 111",
    policeTitle: "Police Secours",
    policeDesc: "Police Nationale : Appelez le 112",
    apptsTitle: "📅 Mes Rendez-vous",
    apptsSubtitle: "Gérez vos rendez-vous",
    noAppts: "Aucun rendez-vous",
    noApptsDesc: "Prenez votre premier rendez-vous dans un établissement.",
    findFacility: "Trouver un Établissement",
    confirmed: "Confirmé",
    pending: "En attente",
    completed: "Terminé",
    allCat: "Tous",
    hospitalCat: "Hôpitaux",
    clinicCat: "Cliniques",
    dentistCat: "Dentistes",
    pharmacyCat: "Pharmacie",
    eyeCat: "Yeux",
    maternityCat: "Maternité",
    heartCat: "Cœur",
    childrenCat: "Enfants",
    emergencyCat: "Urgence"
  },
  sw: {
    langSubtitle: "Pata huduma za afya karibu",
    tapLocation: "Gusa kutambua eneo",
    nearby: "karibu",
    available: "zinapatikana",
    listTitle: "Vituo vya Afya",
    navFind: "Tafuta",
    navMap: "Ramani",
    navEmergency: "Dharura",
    navAppointments: "Miadi",
    modalTitle: "📅 Panga Miadi",
    successMsg: "✅ Miadi imefanywa! Angalia SMS.",
    mapTitle: "Ramani ya Afya",
    emergencyTitle: "🚨 Huduma za Dharura",
    emergencySubtitle: "Msaada wa Dharura 24/7 Rwanda",
    callEmergency: "Piga Dharura Sasa",
    ambulanceTitle: "Huduma za Ambulance",
    ambulanceDesc: "SAMU Rwanda: Piga 912 kwa ambulance ya haraka",
    erTitle: "Vyumba vya Dharura",
    erDesc: "CHUK, King Faisal, na Hospitali ya Kijeshi zina ER 24/7",
    bloodTitle: "Benki ya Damu",
    bloodDesc: "Kituo cha Taifa cha Utiaji Damu: +250 788 304 000",
    fireTitle: "Zimamoto na Uokoaji",
    fireDesc: "Kikosi cha Zimamoto: Piga 111",
    policeTitle: "Polisi Dharura",
    policeDesc: "Polisi ya Taifa: Piga 112",
    apptsTitle: "📅 Miadi Yangu",
    apptsSubtitle: "Simamia miadi yako ijayo",
    noAppts: "Hakuna miadi",
    noApptsDesc: "Panga miadi yako ya kwanza na kituo cha afya.",
    findFacility: "Tafuta Kituo",
    confirmed: "Imethibitishwa",
    pending: "Inasubiri",
    completed: "Imekamilika",
    allCat: "Zote",
    hospitalCat: "Hospitali",
    clinicCat: "Kliniki",
    dentistCat: "Meno",
    pharmacyCat: "Dawa",
    eyeCat: "Macho",
    maternityCat: "Uzazi",
    heartCat: "Moyo",
    childrenCat: "Watoto",
    emergencyCat: "Dharura"
  }
};

// ==================== STATE ====================
let currentLang = 'en';
let currentScreen = 'findScreen';
let map, mapFull, userMarker, userLat = -1.9441, userLng = 30.0619;
let currentCategory = 'all', userLocated = false;
let markers = [], fullMarkers = [], selectedFacility = null;
let appointments = JSON.parse(localStorage.getItem('nearcare_appointments') || '[]');

function t(key) { return t9n[currentLang]?.[key] || t9n['en'][key] || key; }

// ==================== UI FUNCTIONS ====================
function applyLanguage(lang) {
  currentLang = lang;
  document.getElementById('langLabel').textContent = lang.toUpperCase();
  document.getElementById('langSubtitle').textContent = t('langSubtitle');
  document.getElementById('locationText').textContent = userLocated ? '📍 Kigali' : t('tapLocation');
  document.getElementById('listTitle').textContent = t('listTitle');
  document.getElementById('nearbyLabel').textContent = t('nearby');
  document.getElementById('availableLabel').textContent = t('available');
  document.getElementById('modalTitle').textContent = t('modalTitle');
  document.getElementById('mapTitle').textContent = t('mapTitle');
  
  // Emergency screen
  document.getElementById('emergencyTitle').textContent = t('emergencyTitle');
  document.getElementById('emergencySubtitle').textContent = t('emergencySubtitle');
  document.getElementById('callEmergency').textContent = t('callEmergency');
  document.getElementById('ambulanceTitle').textContent = t('ambulanceTitle');
  document.getElementById('ambulanceDesc').textContent = t('ambulanceDesc');
  document.getElementById('erTitle').textContent = t('erTitle');
  document.getElementById('erDesc').textContent = t('erDesc');
  document.getElementById('bloodTitle').textContent = t('bloodTitle');
  document.getElementById('bloodDesc').textContent = t('bloodDesc');
  document.getElementById('fireTitle').textContent = t('fireTitle');
  document.getElementById('fireDesc').textContent = t('fireDesc');
  document.getElementById('policeTitle').textContent = t('policeTitle');
  document.getElementById('policeDesc').textContent = t('policeDesc');
  
  // Appointments screen
  document.getElementById('apptsTitle').textContent = t('apptsTitle');
  document.getElementById('apptsSubtitle').textContent = t('apptsSubtitle');
  
  // Navigation
  document.getElementById('navFind').textContent = t('navFind');
  document.getElementById('navMap').textContent = t('navMap');
  document.getElementById('navEmergency').textContent = t('navEmergency');
  document.getElementById('navAppointments').textContent = t('navAppointments');
  
  // Category chips
  const catKeys = ['allCat','hospitalCat','clinicCat','dentistCat','pharmacyCat','eyeCat','maternityCat','heartCat','childrenCat','emergencyCat'];
  document.querySelectorAll('#findScreen .cat-chip').forEach((chip, i) => {
    if (catKeys[i]) {
      const icon = chip.textContent.trim().split(' ')[0];
      chip.innerHTML = `${icon} ${t(catKeys[i])}`;
    }
  });
  
  renderList();
  renderAppointments();
  if (currentScreen === 'mapScreen' && mapFull) updateFullMap();
}

function showLanguageScreen() {
  document.querySelectorAll('.app-screen').forEach(s => s.classList.remove('active'));
  document.getElementById('languageScreen').style.display = 'flex';
  document.getElementById('bottomNav').style.display = 'none';
}

function initApp(lang) {
  applyLanguage(lang);
  document.getElementById('languageScreen').style.display = 'none';
  document.getElementById('bottomNav').style.display = 'flex';
  switchScreen('findScreen');
  if (!map) initMaps();
  detectLocation();
}

function switchScreen(screenId) {
  currentScreen = screenId;
  document.querySelectorAll('.app-screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
  
  // Update nav active state
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navBtn = document.querySelector(`.nav-item[data-screen="${screenId}"]`);
  if (navBtn) navBtn.classList.add('active');
  
  // Handle map screen
  if (screenId === 'mapScreen' && mapFull) {
    setTimeout(() => mapFull.invalidateSize(), 100);
    updateFullMap();
  }
  if (screenId === 'appointmentsScreen') renderAppointments();
  
  // Scroll to top
  document.getElementById('screensContainer').scrollTop = 0;
}

// ==================== MAPS ====================
function initMaps() {
  map = L.map('map', { zoomControl: false, attributionControl: false }).setView([userLat, userLng], 12);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', { maxZoom: 19 }).addTo(map);
  
  mapFull = L.map('mapFull', { zoomControl: false, attributionControl: false }).setView([userLat, userLng], 13);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', { maxZoom: 19 }).addTo(mapFull);
  
  placeMarkers();
  updateFullMap();
}

function placeMarkers() {
  if (!map) return;
  markers.forEach(m => map.removeLayer(m));
  markers = [];
  
  const filtered = getFiltered();
  filtered.forEach(f => {
    const icon = L.divIcon({
      html: `<div style="width:28px;height:28px;background:white;border:2px solid var(--green-400);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;">${f.icon}</div>`,
      className: '', iconSize: [28,28], iconAnchor: [14,14]
    });
    const m = L.marker([f.lat, f.lng], { icon }).addTo(map);
    m.on('click', () => selectFacility(f));
    markers.push(m);
  });
}

function updateFullMap() {
  if (!mapFull) return;
  fullMarkers.forEach(m => mapFull.removeLayer(m));
  fullMarkers = [];
  
  FACILITIES.forEach(f => {
    const color = f.category === 'emergency' ? '#ef4444' : f.category === 'hospital' ? '#185FA5' : 'var(--green-400)';
    const icon = L.divIcon({
      html: `<div style="width:32px;height:32px;background:white;border:2.5px solid ${color};border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;">${f.icon}</div>`,
      className: '', iconSize: [32,32], iconAnchor: [16,16]
    });
    const m = L.marker([f.lat, f.lng], { icon }).addTo(mapFull);
    m.bindPopup(`<b>${f.name}</b><br>${f.district}<br>⭐ ${f.rating}`);
    fullMarkers.push(m);
  });
  
  if (userLocated) {
    L.circleMarker([userLat, userLng], { radius: 8, color: '#639922', fillColor: '#639922', fillOpacity: 1 }).addTo(mapFull)
      .bindPopup('<b>📍 You are here</b>');
  }
}

function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371, dLat = (lat2-lat1)*Math.PI/180, dLon = (lon2-lon1)*Math.PI/180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function getFiltered() {
  const maxDist = parseInt(document.getElementById('radiusSlider')?.value || 20);
  return FACILITIES
    .filter(f => currentCategory === 'all' || f.category === currentCategory)
    .map(f => ({ ...f, dist: haversine(userLat, userLng, f.lat, f.lng) }))
    .filter(f => f.dist <= maxDist)
    .sort((a, b) => a.dist - b.dist);
}

// ==================== LOCATION ====================
function detectLocation() {
  document.getElementById('locationText').textContent = '📍 Detecting...';
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      userLat = pos.coords.latitude;
      userLng = pos.coords.longitude;
      userLocated = true;
      finishLocation();
    }, () => {
      userLat = -1.9441; userLng = 30.0619;
      userLocated = true;
      finishLocation();
    }, { timeout: 5000 });
  } else {
    finishLocation();
  }
}

function finishLocation() {
  document.getElementById('locationText').textContent = `📍 Kigali (${userLat.toFixed(2)}, ${userLng.toFixed(2)})`;
  document.getElementById('pulseDot').classList.add('active');
  
  if (map) {
    if (userMarker) map.removeLayer(userMarker);
    userMarker = L.circleMarker([userLat, userLng], { radius: 6, color: '#639922', fillColor: '#639922', fillOpacity: 1 }).addTo(map);
    map.setView([userLat, userLng], 13);
    placeMarkers();
  }
  if (mapFull) updateFullMap();
  renderList();
}

// ==================== RENDER ====================
function renderList() {
  const items = getFiltered();
  document.getElementById('listCount').textContent = items.length;
  document.getElementById('nearbyCount').textContent = items.length;
  document.getElementById('availableCount').textContent = items.filter(f => f.open === '24h' || f.open === 'open').length;
  
  const starStr = r => '★'.repeat(Math.round(r)) + '☆'.repeat(5-Math.round(r));
  
  document.getElementById('facilitiesList').innerHTML = items.map(f => `
    <div class="facility-card ${selectedFacility?.id === f.id ? 'selected' : ''}" onclick="selectFacilityById(${f.id})">
      <div class="facility-icon">${f.icon}</div>
      <div class="facility-info">
        <div class="facility-name">${f.name}</div>
        <div class="facility-district">📍 ${f.district}</div>
        <div class="facility-meta">
          <span class="meta-badge ${f.open === '24h' ? 'badge-24h' : 'badge-open'}">${f.open === '24h' ? '24/7' : 'Open'}</span>
          <span class="stars">${starStr(f.rating)}</span>
          <span class="meta-badge badge-distance">${f.dist.toFixed(1)} km</span>
        </div>
        <button class="book-btn" onclick="event.stopPropagation(); openBooking(${f.id})">📞 Book Now</button>
      </div>
    </div>
  `).join('');
}

function renderAppointments() {
  const list = document.getElementById('appointmentsList');
  const badge = document.getElementById('apptBadge');
  
  if (appointments.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="icon">📅</div>
        <h3>${t('noAppts')}</h3>
        <p>${t('noApptsDesc')}</p>
        <button class="btn-primary" onclick="switchScreen('findScreen')">${t('findFacility')}</button>
      </div>
    `;
    badge.style.display = 'none';
  } else {
    badge.style.display = 'flex';
    badge.textContent = appointments.length;
    
    list.innerHTML = appointments.map((apt, i) => {
      const f = FACILITIES.find(x => x.id === apt.facilityId);
      const statusClass = apt.status === 'confirmed' ? 'status-confirmed' : apt.status === 'pending' ? 'status-pending' : 'status-completed';
      return `
        <div class="appointment-card">
          <div class="appointment-date">
            <div class="day">${apt.day || '15'}</div>
            <div class="month">${apt.month || 'JAN'}</div>
          </div>
          <div class="appointment-info">
            <h4>${f?.name || 'Unknown Facility'}</h4>
            <p>🕐 ${apt.time || '09:00'} | 📞 ${apt.phone || 'N/A'}</p>
            <span class="appointment-status ${statusClass}">${t(apt.status || 'confirmed')}</span>
          </div>
        </div>
      `;
    }).join('');
  }
}

function selectFacilityById(id) {
  const f = FACILITIES.find(x => x.id === id);
  if (f) selectFacility(f);
}

function selectFacility(f) {
  selectedFacility = f;
  
  document.getElementById('sheetName').textContent = f.name;
  const starStr = r => '★'.repeat(Math.round(r)) + '☆'.repeat(5-Math.round(r));
  document.getElementById('sheetGrid').innerHTML = `
    <div><div class="sheet-field-label">District</div><div class="sheet-field-value">${f.district}</div></div>
    <div><div class="sheet-field-label">Distance</div><div class="sheet-field-value">${f.dist?.toFixed(1) || '?'} km</div></div>
    <div><div class="sheet-field-label">Hours</div><div class="sheet-field-value">${f.open === '24h' ? '24/7' : 'Open'}</div></div>
    <div><div class="sheet-field-label">Rating</div><div class="sheet-field-value">${starStr(f.rating)}</div></div>
    <div style="grid-column:1/-1"><div class="sheet-field-label">Services</div><div class="sheet-field-value">${f.services}</div></div>
  `;
  
  document.getElementById('dirBtn').onclick = () => window.open(`https://maps.google.com/?q=${f.lat},${f.lng}`, '_blank');
  document.getElementById('bookSheetBtn').onclick = () => { closeDetailSheet(); openBooking(f.id); };
  
  document.getElementById('detailSheet').classList.add('visible');
  document.getElementById('overlayBg').classList.add('visible');
  
  if (map) map.setView([f.lat, f.lng], 15);
  renderList();
}

function closeDetailSheet() {
  document.getElementById('detailSheet').classList.remove('visible');
  document.getElementById('overlayBg').classList.remove('visible');
  selectedFacility = null;
  renderList();
}

// ==================== BOOKING ====================
function openBooking(facilityId) {
  const f = FACILITIES.find(x => x.id === facilityId);
  if (!f) return;
  document.getElementById('modalFacilityName').textContent = f.name;
  document.getElementById('patientName').value = '';
  document.getElementById('patientPhone').value = '';
  document.getElementById('appointmentTime').value = '';
  document.getElementById('appointmentModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('appointmentModal').style.display = 'none';
}

function confirmBooking() {
  const name = document.getElementById('patientName').value.trim();
  const phone = document.getElementById('patientPhone').value.trim();
  const time = document.getElementById('appointmentTime').value;
  if (!name || !phone || !time) { alert('Fill all fields'); return; }
  
  const facilityName = document.getElementById('modalFacilityName').textContent;
  const facilityId = FACILITIES.find(f => f.name === facilityName)?.id;
  
  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const apt = {
    id: Date.now(),
    facilityId: facilityId,
    name: name,
    phone: phone,
    time: time,
    day: new Date().getDate(),
    month: months[new Date().getMonth()],
    status: 'confirmed',
    date: new Date().toISOString()
  };
  appointments.unshift(apt);
  localStorage.setItem('nearcare_appointments', JSON.stringify(appointments));
  
  closeModal();
  
  const toast = document.getElementById('toast');
  toast.textContent = t('successMsg');
  toast.style.display = 'block';
  setTimeout(() => toast.style.display = 'none', 3500);
  
  renderAppointments();
}

// ==================== CATEGORY & RADIUS ====================
document.querySelectorAll('#findScreen .cat-chip').forEach(chip => {
  chip.addEventListener('click', function() {
    document.querySelectorAll('#findScreen .cat-chip').forEach(c => c.classList.remove('active'));
    this.classList.add('active');
    currentCategory = this.dataset.cat;
    placeMarkers();
    renderList();
  });
});

function updateRadius(val) {
  placeMarkers();
  renderList();
}

// ==================== BOTTOM NAVIGATION ====================
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function() {
    const screenId = this.dataset.screen;
    if (screenId) switchScreen(screenId);
  });
});

// ==================== LANGUAGE BUTTONS ====================
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => initApp(btn.dataset.lang));
});

// ==================== MODAL CLOSE ====================
document.getElementById('appointmentModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// ==================== INIT ====================
window.addEventListener('load', () => {
  document.getElementById('languageScreen').style.display = 'flex';
  document.getElementById('bottomNav').style.display = 'none';
  document.querySelectorAll('.app-screen').forEach(s => s.classList.remove('active'));
});
