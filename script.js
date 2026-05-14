const HOSPITALS = [
  { id:1, name:"King Faisal Hospital", district:"Gasabo, Kigali", type:"hospital", lat:-1.9500, lng:30.0588, open:"24h", rating:4.8, beds:300, phone:"+250 788 303 000", services:"Surgery, ICU, Cardiology, Oncology" },
  { id:2, name:"Rwanda Military Hospital", district:"Kanombe, Kigali", type:"hospital", lat:-1.9695, lng:30.1322, open:"24h", rating:4.5, beds:500, phone:"+250 788 311 611", services:"General Medicine, Emergency, Surgery" },
  { id:3, name:"University Teaching Hospital of Kigali (CHUK)", district:"Nyarugenge, Kigali", type:"hospital", lat:-1.9536, lng:30.0616, open:"24h", rating:4.7, beds:600, phone:"+250 788 303 900", services:"Neurology, Pediatrics, Maternity, Emergency" },
  { id:4, name:"Kibagabaga Hospital", district:"Gasabo, Kigali", type:"hospital", lat:-1.9303, lng:30.1052, open:"24h", rating:4.3, beds:200, phone:"+250 788 303 700", services:"General Medicine, Surgery, Maternity" },
  { id:5, name:"Masaka Hospital", district:"Kicukiro, Kigali", type:"hospital", lat:-1.9985, lng:30.1010, open:"24h", rating:4.2, beds:180, phone:"+250 788 303 500", services:"Pediatrics, General Medicine, Surgery" },
  { id:6, name:"Muhima Hospital", district:"Nyarugenge, Kigali", type:"hospital", lat:-1.9621, lng:30.0478, open:"24h", rating:4.1, beds:160, phone:"+250 788 302 400", services:"Maternity, Pediatrics, General Medicine" },
  { id:7, name:"Centre Hospitalier La Croix du Sud", district:"Kicukiro, Kigali", type:"clinic", lat:-2.0021, lng:30.0890, open:"open", rating:4.4, beds:80, phone:"+250 788 386 000", services:"General Medicine, Dentistry, Labs" },
  { id:8, name:"Baho International Hospital", district:"Remera, Kigali", type:"hospital", lat:-1.9582, lng:30.1121, open:"24h", rating:4.6, beds:120, phone:"+250 784 444 555", services:"ICU, Surgery, Emergency, Radiology" },

  { id:9, name:"Byumba District Hospital", district:"Gicumbi, Northern Province", type:"hospital", lat:-1.5765, lng:30.0681, open:"24h", rating:4.1, beds:200, phone:"+250 788 303 200", services:"General Medicine, Surgery, Maternity" },
  { id:10, name:"Ruhengeri Hospital (CHUB)", district:"Musanze, Northern Province", type:"hospital", lat:-1.4987, lng:29.6344, open:"24h", rating:4.4, beds:350, phone:"+250 788 303 400", services:"Emergency, Orthopedics, Surgery, ICU" },
  { id:11, name:"Kinihira Health Centre", district:"Rulindo, Northern Province", type:"health-center", lat:-1.7321, lng:29.9978, open:"open", rating:3.9, beds:30, phone:"+250 788 112 233", services:"Primary Care, Maternity, Vaccination" },

  { id:12, name:"Butare University Teaching Hospital (CHUB)", district:"Huye, Southern Province", type:"hospital", lat:-2.5954, lng:29.7383, open:"24h", rating:4.6, beds:500, phone:"+250 788 303 600", services:"Teaching Hospital, Surgery, Neurology, ICU" },
  { id:13, name:"Kabgayi Hospital", district:"Muhanga, Southern Province", type:"hospital", lat:-2.0750, lng:29.7531, open:"24h", rating:4.3, beds:280, phone:"+250 788 202 100", services:"General Medicine, Surgery, Maternity" },
  { id:14, name:"Kibilizi Hospital", district:"Nyanza, Southern Province", type:"hospital", lat:-2.3510, lng:29.7488, open:"24h", rating:4.0, beds:160, phone:"+250 788 203 200", services:"General Medicine, Pediatrics" },
  { id:15, name:"Rwamagana District Hospital", district:"Rwamagana, Eastern Province", type:"hospital", lat:-1.9481, lng:30.4357, open:"24h", rating:4.1, beds:180, phone:"+250 788 303 800", services:"Emergency, Surgery, General Medicine" },

  { id:16, name:"Kibungo Hospital", district:"Ngoma, Eastern Province", type:"hospital", lat:-2.1609, lng:30.5494, open:"24h", rating:4.0, beds:200, phone:"+250 788 504 000", services:"General Medicine, Surgery, Maternity" },
  { id:17, name:"Nyamata Hospital", district:"Bugesera, Eastern Province", type:"hospital", lat:-2.1434, lng:30.0932, open:"24h", rating:3.9, beds:150, phone:"+250 788 301 100", services:"General Medicine, Maternity" },
  { id:18, name:"Kigeme Adventist Hospital", district:"Nyamagabe, Southern Province", type:"hospital", lat:-2.5247, lng:29.5102, open:"open", rating:4.5, beds:120, phone:"+250 788 404 040", services:"Surgery, General Medicine, Eye Care" },

  { id:19, name:"Kibuye Hope Hospital", district:"Karongi, Western Province", type:"hospital", lat:-2.0605, lng:29.3494, open:"24h", rating:4.3, beds:200, phone:"+250 788 606 000", services:"Surgery, Emergency, Maternity" },
  { id:20, name:"Gisenyi Hospital", district:"Rubavu, Western Province", type:"hospital", lat:-1.6935, lng:29.2587, open:"24h", rating:4.2, beds:250, phone:"+250 788 564 000", services:"General Medicine, Pediatrics, Surgery" },
  { id:21, name:"Cyangugu Hospital", district:"Rusizi, Western Province", type:"hospital", lat:-2.4855, lng:28.9072, open:"24h", rating:4.1, beds:220, phone:"+250 788 531 000", services:"Emergency, General Medicine, Surgery" },
  { id:22, name:"La Bonne Santé Clinic", district:"Gasabo, Kigali", type:"clinic", lat:-1.9440, lng:30.0620, open:"open", rating:4.5, beds:40, phone:"+250 784 999 888", services:"General Medicine, Dentistry, Dermatology" },
  { id:23, name:"Polyclinique La Nouvelle Clinique", district:"Nyarugenge, Kigali", type:"clinic", lat:-1.9555, lng:30.0555, open:"open", rating:4.3, beds:50, phone:"+250 788 200 300", services:"Internal Medicine, Radiology, Labs" },
  { id:24, name:"Kigali Emergency Clinic", district:"Kicukiro, Kigali", type:"emergency", lat:-1.9888, lng:30.0978, open:"24h", rating:4.7, beds:30, phone:"+250 784 911 911", services:"Trauma, Emergency Surgery, Resuscitation" },
];

let map, userMarker, userLat = -1.9441, userLng = 30.0619;
let currentFilter = 'all', markers = [], radiusCircle;
let userLocated = false;

function initMap() {
  map = L.map('map', { zoomControl: false }).setView([userLat, userLng], 12);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors © CARTO',
    maxZoom: 19
  }).addTo(map);

  placeMarkers();
  renderList();
}

function getIcon(type, selected=false) {
  const colors = {
    hospital: ['#185FA5','#E6F1FB'],
    clinic: ['#0F6E56','#E1F5EE'],
    emergency: ['#A32D2D','#FCEBEB'],
    'health-center': ['#854F0B','#FAEEDA']
  };
  const emojis = { hospital:'🏥', clinic:'🩺', emergency:'🚨', 'health-center':'💊' };
  const c = colors[type] || colors.hospital;
  const size = selected ? 40 : 34;
  const border = selected ? `border: 2.5px solid ${c[0]};` : `border: 1.5px solid ${c[1]};`;
  const html = `<div style="width:${size}px;height:${size}px;background:${selected?c[0]:c[1]};${border}border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:${selected?18:14}px;box-shadow:0 2px 8px rgba(0,0,0,0.18);cursor:pointer;transition:all 0.15s;">${emojis[type]||'🏥'}</div>`;
  return L.divIcon({ html, className:'', iconSize:[size,size], iconAnchor:[size/2,size/2], popupAnchor:[0,-size/2] });
}

function getUserIcon() {
  const html = `<div style="width:18px;height:18px;background:#639922;border:3px solid white;border-radius:50%;box-shadow:0 2px 8px rgba(99,153,34,0.5);"></div>`;
  return L.divIcon({ html, className:'', iconSize:[18,18], iconAnchor:[9,9] });
}

let selectedId = null;

function placeMarkers() {
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  const visible = getFilteredHospitals();
  visible.forEach(h => {
    const m = L.marker([h.lat, h.lng], { icon: getIcon(h.type) }).addTo(map);
    m.on('click', () => selectHospital(h.id));
    markers.push({ marker: m, id: h.id, type: h.type });
  });
}

function updateMarkerIcon(id, selected) {
  const entry = markers.find(m => m.id === id);
  if (entry) entry.marker.setIcon(getIcon(entry.type, selected));
}

function detectLocation() {
  const loader = document.getElementById('loader');
  const loaderText = document.getElementById('loaderText');
  loader.classList.add('visible');
  loaderText.textContent = 'Detecting your location…';

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
    err => {
      useDefaultLocation();
    },
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

  const dist = (a,b,c,d) => {
    const R=6371,dLat=(c-a)*Math.PI/180,dLon=(d-b)*Math.PI/180;
    const x=Math.sin(dLat/2)**2+Math.cos(a*Math.PI/180)*Math.cos(c*Math.PI/180)*Math.sin(dLon/2)**2;
    return R*2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x));
  };

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
  updateEmergencyStatus();
}

function updateRadius(val) {
  document.getElementById('radiusVal').textContent = val + ' km';
  if (radiusCircle && userLocated) {
    map.removeLayer(radiusCircle);
    radiusCircle = L.circle([userLat, userLng], { radius: val*1000, color:'#639922', weight:1.5, fillColor:'#639922', fillOpacity:0.05 }).addTo(map);
  }
  renderList();
  updateEmergencyStatus();
}

function haversine(lat1,lon1,lat2,lon2) {
  const R=6371,dLat=(lat2-lat1)*Math.PI/180,dLon=(lon2-lon1)*Math.PI/180;
  const a=Math.sin(dLat/2)**2+Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)**2;
  return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}

function getFilteredHospitals() {
  const q = (document.getElementById('search')?.value||'').toLowerCase();
  const maxDist = parseInt(document.getElementById('radiusSlider')?.value||20);
  return HOSPITALS
    .filter(h => currentFilter === 'all' || h.type === currentFilter)
    .filter(h => !q || h.name.toLowerCase().includes(q) || h.district.toLowerCase().includes(q))
    .map(h => ({ ...h, dist: haversine(userLat,userLng,h.lat,h.lng) }))
    .filter(h => !userLocated || h.dist <= maxDist)
    .sort((a,b) => a.dist - b.dist);
}

function filterHospitals(el, type) {
  currentFilter = type;
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  placeMarkers();
  renderList();
  updateEmergencyStatus();
}

function triggerEmergency() {
  const emergencyPill = document.querySelector('.filter-pill[data-type="emergency"]');
  if (emergencyPill) filterHospitals(emergencyPill, 'emergency');

  const nearest = getFilteredHospitals().find(h => h.type === 'emergency');
  if (nearest) {
    selectHospital(nearest.id);
    document.getElementById('emergencyStatus').innerHTML = `Nearest emergency unit: <strong>${nearest.name}</strong> (${nearest.dist.toFixed(1)} km). Use the Call button for immediate support.`;
  } else {
    alert('No emergency facility found nearby. Please call 912 for urgent ambulance dispatch.');
  }
}

function updateEmergencyStatus() {
  const status = document.getElementById('emergencyStatus');
  if (!status) return;
  const nearest = getFilteredHospitals().find(h => h.type === 'emergency');
  if (nearest) {
    status.innerHTML = `Nearest emergency unit: <strong>${nearest.name}</strong> (${nearest.dist.toFixed(1)} km). Dial 912 if you need immediate ambulance support.`;
  } else {
    status.textContent = 'No emergency units found in your area. Dial 912 for ambulance dispatch.';
  }
}

function renderList() {
  const list = document.getElementById('hospitalList');
  const items = getFilteredHospitals();
  document.getElementById('countLabel').textContent = items.length + ' found';

  if (!items.length) {
    list.innerHTML = `<div class="empty-state"><div class="icon">🔎</div><p>No facilities found. Try adjusting filters or radius.</p></div>`;
    return;
  }

  const starStr = r => '★'.repeat(Math.round(r)) + '☆'.repeat(5-Math.round(r));

  list.innerHTML = items.map(h => `
    <div class="hospital-item ${selectedId===h.id?'selected':''}" id="item-${h.id}" onclick="selectHospital(${h.id})">
      <div class="hosp-icon ${h.type}">
        ${{hospital:'🏥',clinic:'🩺',emergency:'🚨','health-center':'💊'}[h.type]}
      </div>
      <div class="hosp-info">
        <div class="hosp-name">${h.name}</div>
        <div class="hosp-location">📍 ${h.district}</div>
        <div class="hosp-meta">
          <span class="badge ${h.open==='24h'?'badge-24h':h.open==='open'?'badge-open':'badge-closed'}">
            ${h.open==='24h'?'24/7':h.open==='open'?'Open':'Closed'}
          </span>
          <span class="stars">${starStr(h.rating)}</span>
          <span class="hosp-dist">${userLocated?h.dist.toFixed(1)+' km':'–'}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function selectHospital(id) {
  if (selectedId) updateMarkerIcon(selectedId, false);
  selectedId = id;
  updateMarkerIcon(id, true);

  const h = HOSPITALS.find(x => x.id===id);
  if (!h) return;

  map.flyTo([h.lat, h.lng], 15, { duration: 1 });

  const panel = document.getElementById('detailPanel');
  document.getElementById('detailName').textContent = h.name;

  const dist = userLocated ? haversine(userLat,userLng,h.lat,h.lng).toFixed(1) + ' km away' : 'Distance unknown';
  const starStr = r => '★'.repeat(Math.round(r)) + '☆'.repeat(5-Math.round(r));

  document.getElementById('detailGrid').innerHTML = `
    <div class="detail-field">
      <div class="detail-field-label">District</div>
      <div class="detail-field-value">${h.district}</div>
    </div>
    <div class="detail-field">
      <div class="detail-field-label">Distance</div>
      <div class="detail-field-value">${dist}</div>
    </div>
    <div class="detail-field">
      <div class="detail-field-label">Hours</div>
      <div class="detail-field-value">${h.open==='24h'?'Open 24/7':h.open==='open'?'Currently Open':'Check Hours'}</div>
    </div>
    <div class="detail-field">
      <div class="detail-field-label">Rating</div>
      <div class="detail-field-value" style="color:#F0A500">${starStr(h.rating)} (${h.rating})</div>
    </div>
    <div class="detail-field" style="grid-column:1/-1">
      <div class="detail-field-label">Services</div>
      <div class="detail-field-value" style="font-weight:400;font-size:12px">${h.services}</div>
    </div>
  `;

  document.getElementById('dirBtn').onclick = () => {
    window.open(`https://www.google.com/maps/dir/${userLat},${userLng}/${h.lat},${h.lng}`, '_blank');
  };
  document.getElementById('callBtn').onclick = () => {
    window.location.href = 'tel:' + h.phone.replace(/\s/g,'');
  };
  document.getElementById('callBtn').innerHTML = `📞 ${h.phone}`;

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
  updateEmergencyStatus();
});