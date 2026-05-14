// Extended Healthcare Facilities Database
const HEALTHCARE_FACILITIES = [
  // General Hospitals
  { id:1, name:"King Faisal Hospital", district:"Gasabo, Kigali", category:"hospital", lat:-1.9500, lng:30.0588, open:"24h", rating:4.8, beds:300, phone:"+250 788 303 000", services:"Surgery, ICU, Cardiology, Oncology", icon:"🏥" },
  { id:2, name:"Rwanda Military Hospital", district:"Kanombe, Kigali", category:"hospital", lat:-1.9695, lng:30.1322, open:"24h", rating:4.5, beds:500, phone:"+250 788 311 611", services:"General Medicine, Emergency, Surgery", icon:"🏥" },
  { id:3, name:"University Teaching Hospital of Kigali (CHUK)", district:"Nyarugenge, Kigali", category:"hospital", lat:-1.9536, lng:30.0616, open:"24h", rating:4.7, beds:600, phone:"+250 788 303 900", services:"Neurology, Pediatrics, Maternity, Emergency", icon:"🏥" },
  { id:4, name:"Kibagabaga Hospital", district:"Gasabo, Kigali", category:"hospital", lat:-1.9303, lng:30.1052, open:"24h", rating:4.3, beds:200, phone:"+250 788 303 700", services:"General Medicine, Surgery, Maternity", icon:"🏥" },
  { id:5, name:"Masaka Hospital", district:"Kicukiro, Kigali", category:"hospital", lat:-1.9985, lng:30.1010, open:"24h", rating:4.2, beds:180, phone:"+250 788 303 500", services:"Pediatrics, General Medicine, Surgery", icon:"🏥" },
  { id:6, name:"Baho International Hospital", district:"Remera, Kigali", category:"hospital", lat:-1.9582, lng:30.1121, open:"24h", rating:4.6, beds:120, phone:"+250 784 444 555", services:"ICU, Surgery, Emergency, Radiology", icon:"🏥" },
  { id:7, name:"Ruhengeri Hospital (CHUB)", district:"Musanze, Northern Province", category:"hospital", lat:-1.4987, lng:29.6344, open:"24h", rating:4.4, beds:350, phone:"+250 788 303 400", services:"Emergency, Orthopedics, Surgery, ICU", icon:"🏥" },
  { id:8, name:"Butare University Teaching Hospital", district:"Huye, Southern Province", category:"hospital", lat:-2.5954, lng:29.7383, open:"24h", rating:4.6, beds:500, phone:"+250 788 303 600", services:"Teaching Hospital, Surgery, Neurology, ICU", icon:"🏥" },
  
  // Clinics
  { id:9, name:"Centre Hospitalier La Croix du Sud", district:"Kicukiro, Kigali", category:"clinic", lat:-2.0021, lng:30.0890, open:"open", rating:4.4, beds:80, phone:"+250 788 386 000", services:"General Medicine, Dentistry, Labs", icon:"🩺" },
  { id:10, name:"La Bonne Santé Clinic", district:"Gasabo, Kigali", category:"clinic", lat:-1.9440, lng:30.0620, open:"open", rating:4.5, beds:40, phone:"+250 784 999 888", services:"General Medicine, Dentistry, Dermatology", icon:"🩺" },
  { id:11, name:"Polyclinique La Nouvelle Clinique", district:"Nyarugenge, Kigali", category:"clinic", lat:-1.9555, lng:30.0555, open:"open", rating:4.3, beds:50, phone:"+250 788 200 300", services:"Internal Medicine, Radiology, Labs", icon:"🩺" },
  { id:12, name:"Medical Center Kigali", district:"Kacyiru, Kigali", category:"clinic", lat:-1.9450, lng:30.0750, open:"open", rating:4.2, beds:45, phone:"+250 788 555 666", services:"General Checkup, Vaccination, Treatment", icon:"🩺" },
  
  // Dentists
  { id:13, name:"Smile Dental Rwanda", district:"Gasabo, Kigali", category:"dentist", lat:-1.9520, lng:30.0640, open:"open", rating:4.7, beds:10, phone:"+250 784 111 222", services:"Dental Cleaning, Root Canal, Orthodontics", icon:"🦷" },
  { id:14, name:"Crown Dental Clinic", district:"Nyarugenge, Kigali", category:"dentist", lat:-1.9580, lng:30.0500, open:"open", rating:4.5, beds:8, phone:"+250 788 777 888", services:"Tooth Extraction, Filling, Cosmetic Dentistry", icon:"🦷" },
  { id:15, name:"Bright Smile Dental", district:"Kicukiro, Kigali", category:"dentist", lat:-1.9920, lng:30.0950, open:"open", rating:4.6, beds:12, phone:"+250 784 333 444", services:"Implants, Whitening, Alignment", icon:"🦷" },
  { id:16, name:"Advanced Dental Care", district:"Remera, Kigali", category:"dentist", lat:-1.9620, lng:30.1080, open:"open", rating:4.4, beds:9, phone:"+250 788 999 111", services:"Oral Surgery, Prosthetics", icon:"🦷" },
  
  // Pharmacies
  { id:17, name:"PharmaCare Rwanda", district:"Gasabo, Kigali", category:"pharmacy", lat:-1.9500, lng:30.0600, open:"24h", rating:4.6, beds:0, phone:"+250 788 222 333", services:"Prescription Filling, OTC Drugs, Consultation", icon:"💊" },
  { id:18, name:"Central Pharmacy Kigali", district:"Nyarugenge, Kigali", category:"pharmacy", lat:-1.9550, lng:30.0550, open:"24h", rating:4.5, beds:0, phone:"+250 788 444 555", services:"Medicines, Vitamins, Medical Supplies", icon:"💊" },
  { id:19, name:"Health Plus Pharmacy", district:"Kicukiro, Kigali", category:"pharmacy", lat:-1.9900, lng:30.0900, open:"open", rating:4.4, beds:0, phone:"+250 784 555 666", services:"Drugs, Health Advice", icon:"💊" },
  { id:20, name:"Wellness Pharmacy", district:"Remera, Kigali", category:"pharmacy", lat:-1.9600, lng:30.1100, open:"24h", rating:4.7, beds:0, phone:"+250 788 666 777", services:"Pharmaceutical Care, Home Delivery", icon:"💊" },
  
  // Eye Care Centers
  { id:21, name:"Vision Care Center", district:"Gasabo, Kigali", category:"eye-care", lat:-1.9510, lng:30.0680, open:"open", rating:4.8, beds:5, phone:"+250 788 888 999", services:"Eye Exams, Glasses, Contact Lenses", icon:"👁️" },
  { id:22, name:"Clear Vision Rwanda", district:"Kicukiro, Kigali", category:"eye-care", lat:-1.9850, lng:30.0800, open:"open", rating:4.5, beds:6, phone:"+250 784 777 888", services:"Optometry, LASIK, Cataract Surgery", icon:"👁️" },
  { id:23, name:"Eye Clinic Kigali", district:"Nyarugenge, Kigali", category:"eye-care", lat:-1.9600, lng:30.0600, open:"open", rating:4.6, beds:4, phone:"+250 788 111 222", services:"Eye Care, Prescription Glasses", icon:"👁️" },
  
  // Maternity Centers
  { id:24, name:"Muhima Hospital Maternity", district:"Nyarugenge, Kigali", category:"maternity", lat:-1.9621, lng:30.0478, open:"24h", rating:4.1, beds:160, phone:"+250 788 302 400", services:"Prenatal Care, Delivery, Postnatal Care", icon:"🤰" },
  { id:25, name:"Masaka Maternity Center", district:"Kicukiro, Kigali", category:"maternity", lat:-1.9985, lng:30.1010, open:"24h", rating:4.2, beds:180, phone:"+250 788 303 500", services:"Pregnancy Monitoring, Safe Delivery", icon:"🤰" },
  { id:26, name:"Women's Health Center", district:"Gasabo, Kigali", category:"maternity", lat:-1.9450, lng:30.0650, open:"open", rating:4.7, beds:50, phone:"+250 784 888 999", services:"OB/GYN, Family Planning", icon:"🤰" },
  
  // Heart Hospitals/Cardiology Centers
  { id:27, name:"Cardiac Care Center", district:"Gasabo, Kigali", category:"heart-hospital", lat:-1.9530, lng:30.0700, open:"24h", rating:4.9, beds:60, phone:"+250 788 777 666", services:"Cardiology, Heart Surgery, ECG", icon:"❤️" },
  { id:28, name:"Heart Clinic Rwanda", district:"Nyarugenge, Kigali", category:"heart-hospital", lat:-1.9600, lng:30.0500, open:"24h", rating:4.7, beds:40, phone:"+250 788 555 444", services:"Arrhythmia Treatment, Stents", icon:"❤️" },
  
  // Children's Hospitals
  { id:29, name:"Children's Medical Center", district:"Gasabo, Kigali", category:"children-hospital", lat:-1.9480, lng:30.0720, open:"24h", rating:4.8, beds:200, phone:"+250 788 333 222", services:"Pediatrics, Vaccines, Child Wellness", icon:"👶" },
  { id:30, name:"Pediatric Care Kigali", district:"Kicukiro, Kigali", category:"children-hospital", lat:-1.9920, lng:30.1050, open:"24h", rating:4.6, beds:120, phone:"+250 784 666 555", services:"Child Health, Neonatal Care", icon:"👶" },
  
  // Emergency Centers
  { id:31, name:"Kigali Emergency Clinic", district:"Kicukiro, Kigali", category:"emergency", lat:-1.9888, lng:30.0978, open:"24h", rating:4.7, beds:30, phone:"+250 784 911 911", services:"Trauma, Emergency Surgery, Resuscitation", icon:"🚨" },
  { id:32, name:"Emergency Response Center", district:"Gasabo, Kigali", category:"emergency", lat:-1.9400, lng:30.0600, open:"24h", rating:4.8, beds:50, phone:"+250 788 911 911", services:"24/7 Emergency, Ambulance", icon:"🚨" },
];

let map, userMarker, userLat = -1.9441, userLng = 30.0619;
let currentCategory = 'all', currentFilter = 'all', markers = [], radiusCircle;
let userLocated = false, selectedId = null;

function initMap() {
  map = L.map('map', { zoomControl: false }).setView([userLat, userLng], 12);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors © CARTO',
    maxZoom: 19
  }).addTo(map);

  placeMarkers();
  renderList();
  updateSummary();
}

function getIcon(category, selected=false) {
  const colors = {
    hospital: ['#185FA5','#E6F1FB'],
    clinic: ['#0F6E56','#E1F5EE'],
    dentist: ['#9B4D96','#F5E6FA'],
    pharmacy: ['#2D5F2E','#E8F5E9'],
    'eye-care': ['#1565C0','#E3F2FD'],
    maternity: ['#C2185B','#FCE4EC'],
    'heart-hospital': ['#D32F2F','#FFEBEE'],
    'children-hospital': ['#F57C00','#FFF3E0'],
    emergency: ['#A32D2D','#FCEBEB']
  };
  const c = colors[category] || colors.hospital;
  const size = selected ? 40 : 34;
  const border = selected ? `border: 2.5px solid ${c[0]};` : `border: 1.5px solid ${c[1]};`;
  const emojis = { hospital:'🏥', clinic:'🩺', dentist:'🦷', pharmacy:'💊', 'eye-care':'👁️', maternity:'🤰', 'heart-hospital':'❤️', 'children-hospital':'👶', emergency:'🚨' };
  const html = `<div style="width:${size}px;height:${size}px;background:${selected?c[0]:c[1]};${border}border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:${selected?18:14}px;box-shadow:0 2px 8px rgba(0,0,0,0.18);cursor:pointer;transition:all 0.15s;">${emojis[category]||'🏥'}</div>`;
  return L.divIcon({ html, className:'', iconSize:[size,size], iconAnchor:[size/2,size/2], popupAnchor:[0,-size/2] });
}

function getUserIcon() {
  const html = `<div style="width:18px;height:18px;background:#639922;border:3px solid white;border-radius:50%;box-shadow:0 2px 8px rgba(99,153,34,0.5);"></div>`;
  return L.divIcon({ html, className:'', iconSize:[18,18], iconAnchor:[9,9] });
}

function placeMarkers() {
  markers.forEach(m => map.removeLayer(m.marker));
  markers = [];

  const visible = getFilteredFacilities();
  visible.forEach(f => {
    const m = L.marker([f.lat, f.lng], { icon: getIcon(f.category) }).addTo(map);
    m.on('click', () => selectFacility(f.id));
    markers.push({ marker: m, id: f.id, category: f.category });
  });

  if (visible.length > 0 && userLocated) {
    const bounds = L.latLngBounds(visible.map(f => [f.lat, f.lng]));
    bounds.extend([userLat, userLng]);
    map.fitBounds(bounds, { padding: [50, 50] });
  }
}

function updateMarkerIcon(id, selected) {
  const entry = markers.find(m => m.id === id);
  if (entry) entry.marker.setIcon(getIcon(entry.category, selected));
}

function detectLocation() {
  const loader = document.getElementById('loader');
  loader.classList.add('visible');

  if (!navigator.geolocation) {
    useDefaultLocation();
    return;
  }

  navigator.geolocation.getCurrentPosition(
    pos => {
      userLat = pos.coords.latitude;
      userLng = pos.coords.longitude;
      userLocated = true;
      updateLocationUI(userLat, userLng);
      loader.classList.remove('visible');
    },
    err => useDefaultLocation(),
    { timeout: 8000, maximumAge: 60000 }
  );
}

function useDefaultLocation() {
  userLat = -1.9441; userLng = 30.0619;
  userLocated = true;
  updateLocationUI(userLat, userLng, true);
  document.getElementById('loader').classList.remove('visible');
}

function updateLocationUI(lat, lng, isDefault=false) {
  const dot = document.getElementById('pulseDot');
  dot.classList.add('active');

  let locName = isDefault ? 'Kigali City Centre (estimated)' : `${lat.toFixed(4)}°N, ${lng.toFixed(4)}°E`;
  document.getElementById('locationText').textContent = locName;
  document.getElementById('locationSub').textContent = isDefault ? 'Using estimated Kigali location' : 'Live GPS location detected';

  if (userMarker) map.removeLayer(userMarker);
  userMarker = L.marker([lat,lng], { icon: getUserIcon() }).addTo(map);
  userMarker.bindPopup('<b style="font-family:Sora,sans-serif;font-size:13px;">📍 You are here</b>').openPopup();

  if (radiusCircle) map.removeLayer(radiusCircle);
  const r = parseInt(document.getElementById('radiusSlider').value) * 1000;
  radiusCircle = L.circle([lat,lng], { radius: r, color:'#639922', weight:1.5, fillColor:'#639922', fillOpacity:0.05 }).addTo(map);

  map.flyTo([lat,lng], 12, { duration: 1.4 });
  renderList();
  placeMarkers();
  updateSummary();
}

function updateRadius(val) {
  document.getElementById('radiusVal').textContent = val + ' km';
  if (radiusCircle && userLocated) {
    map.removeLayer(radiusCircle);
    radiusCircle = L.circle([userLat, userLng], { radius: val*1000, color:'#639922', weight:1.5, fillColor:'#639922', fillOpacity:0.05 }).addTo(map);
  }
  renderList();
  updateSummary();
}

function haversine(lat1,lon1,lat2,lon2) {
  const R=6371,dLat=(lat2-lat1)*Math.PI/180,dLon=(lon2-lon1)*Math.PI/180;
  const a=Math.sin(dLat/2)**2+Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)**2;
  return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}

function getFilteredFacilities() {
  const q = (document.getElementById('search')?.value||'').toLowerCase();
  const maxDist = parseInt(document.getElementById('radiusSlider')?.value||20);
  return HEALTHCARE_FACILITIES
    .filter(f => currentCategory === 'all' || f.category === currentCategory)
    .filter(f => !q || f.name.toLowerCase().includes(q) || f.district.toLowerCase().includes(q))
    .map(f => ({ ...f, dist: haversine(userLat,userLng,f.lat,f.lng) }))
    .filter(f => !userLocated || f.dist <= maxDist)
    .sort((a,b) => a.dist - b.dist);
}

function updateSummary() {
  const all = HEALTHCARE_FACILITIES.filter(f => currentCategory === 'all' || f.category === currentCategory);
  const nearby = getFilteredFacilities();
  
  document.getElementById('totalFacilities').textContent = all.length;
  document.getElementById('nearbyFacilities').textContent = nearby.length;
  document.getElementById('closestDistance').textContent = nearby.length > 0 ? nearby[0].dist.toFixed(1) + ' km' : '—';
}

function renderList() {
  const list = document.getElementById('hospitalList');
  const items = getFilteredFacilities();
  document.getElementById('countLabel').textContent = items.length + ' found';

  if (!items.length) {
    list.innerHTML = `<div class="empty-state"><div class="icon">🔎</div><p>${window.translate ? window.translate('noFacilitiesMessage') : 'No facilities found. Try adjusting filters or radius.'}</p></div>`;
    return;
  }

  const starStr = r => '★'.repeat(Math.round(r)) + '☆'.repeat(5-Math.round(r));

  list.innerHTML = items.map(f => `
    <div class="hospital-item ${selectedId===f.id?'selected':''}" id="item-${f.id}" onclick="selectFacility(${f.id})">
      <div class="hosp-icon" style="background: white; border: 2px solid var(--green-200);">
        ${f.icon}
      </div>
      <div class="hosp-info">
        <div class="hosp-name">${f.name}</div>
        <div class="hosp-location">📍 ${f.district}</div>
        <div class="hosp-meta">
          <span class="badge ${f.open==='24h'?'badge-24h':'badge-open'}">
            ${window.translate ? (f.open==='24h' ? window.translate('status24h') : window.translate('statusOpen')) : (f.open==='24h' ? '24/7' : 'Open')}
          </span>
          <span class="stars">${starStr(f.rating)}</span>
          <span class="hosp-dist">${userLocated?f.dist.toFixed(1)+' km':'–'}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function selectFacility(id) {
  if (selectedId) updateMarkerIcon(selectedId, false);
  selectedId = id;
  updateMarkerIcon(id, true);

  const f = HEALTHCARE_FACILITIES.find(x => x.id===id);
  if (!f) return;

  map.flyTo([f.lat, f.lng], 15, { duration: 1 });

  const panel = document.getElementById('detailPanel');
  document.getElementById('detailName').textContent = f.name;

  const dist = userLocated ? haversine(userLat,userLng,f.lat,f.lng).toFixed(1) + ' km away' : 'Distance unknown';
  const starStr = r => '★'.repeat(Math.round(r)) + '☆'.repeat(5-Math.round(r));

  document.getElementById('detailGrid').innerHTML = `
    <div class="detail-field">
      <div class="detail-field-label">${window.translate ? window.translate('detailDistrict') : 'District'}</div>
      <div class="detail-field-value">${f.district}</div>
    </div>
    <div class="detail-field">
      <div class="detail-field-label">${window.translate ? window.translate('detailDistance') : 'Distance'}</div>
      <div class="detail-field-value">${dist}</div>
    </div>
    <div class="detail-field">
      <div class="detail-field-label">${window.translate ? window.translate('detailHours') : 'Hours'}</div>
      <div class="detail-field-value">${f.open==='24h' ? (window.translate ? window.translate('status24hLong') : 'Open 24/7') : (window.translate ? window.translate('statusOpenLong') : 'Currently Open')}</div>
    </div>
    <div class="detail-field">
      <div class="detail-field-label">${window.translate ? window.translate('detailRating') : 'Rating'}</div>
      <div class="detail-field-value" style="color:#F0A500">${starStr(f.rating)} (${f.rating})</div>
    </div>
    <div class="detail-field" style="grid-column:1/-1">
      <div class="detail-field-label">${window.translate ? window.translate('detailServices') : 'Services'}</div>
      <div class="detail-field-value" style="font-weight:400;font-size:12px">${f.services}</div>
    </div>
  `;

  document.getElementById('dirBtn').onclick = () => {
    window.open(`https://www.google.com/maps/dir/${userLat},${userLng}/${f.lat},${f.lng}`, '_blank');
  };
  document.getElementById('callBtn').onclick = () => {
    window.location.href = 'tel:' + f.phone.replace(/\s/g,'');
  };
  document.querySelector('#callBtn .call-label').textContent = window.translate ? window.translate('callButton') : '📞 Call Now';
  document.getElementById('callPhone').textContent = ` ${f.phone}`;

  panel.classList.add('visible');

  const el = document.getElementById(`item-${id}`);
  if (el) el.scrollIntoView({ behavior:'smooth', block:'nearest' });

  renderList();
}

function closeDetail() {
  document.getElementById('detailPanel').classList.remove('visible');
  if (selectedId) updateMarkerIcon(selectedId, false);
  selectedId = null;
  renderList();
}

function resetMapView() {
  map.flyTo([userLat, userLng], 12, { duration: 1 });
}

window.addEventListener('load', () => {
  initMap();
  renderList();
  updateSummary();
});