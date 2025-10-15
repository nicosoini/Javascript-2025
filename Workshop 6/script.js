const STORAGE_KEY = 'travelFormData';

function getData() {
  const destination = document.getElementById('destination').value;
  const arrival = document.getElementById('arrival').value;
  const checkboxes = Array.from(document.querySelectorAll('input[name="CheckboxGroup1"]'));
  const services = checkboxes.filter(cb => cb.checked).map(cb => cb.value);

  const formData = {
    destination: destination,
    arrivalDate: arrival,
    services: services,
    savedAt: new Date().toISOString()
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  sessionStorage.setItem('travelFormSessionData', JSON.stringify(formData));
  const sessionDiv = document.getElementById('sessiondata');
  if (sessionDiv) {
    sessionDiv.textContent = 'Saved to localStorage:\n' + JSON.stringify(formData, null, 2);
  }

  alert('Reservation saved to localStorage and sessionStorage.');
}


function loadSavedData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const sessionDiv = document.getElementById('sessiondata');

  if (!saved) {
    if (sessionDiv) sessionDiv.textContent = 'No saved data found in localStorage.';
    return;
  }

  try {
    const data = JSON.parse(saved);
    const destEl = document.getElementById('destination');
    const arrEl = document.getElementById('arrival');
    if (destEl) destEl.value = data.destination || '';
    if (arrEl) arrEl.value = data.arrivalDate || '';

    const checkboxes = Array.from(document.querySelectorAll('input[name="CheckboxGroup1"]'));
    checkboxes.forEach(cb => {
      cb.checked = Array.isArray(data.services) && data.services.includes(cb.value);
    });

    if (sessionDiv) {
      sessionDiv.innerHTML = `
        <strong>Loaded from localStorage:</strong>
        <pre style="white-space:pre-wrap;">${JSON.stringify(data, null, 2)}</pre>
      `;
    }
  } catch (e) {
    console.error('Error parsing saved data:', e);
    if (sessionDiv) sessionDiv.textContent = 'Error loading saved data (see console).';
  }
}

function clearLocalSavedData() {
  localStorage.removeItem(STORAGE_KEY);
  const sessionDiv = document.getElementById('sessiondata');
  if (sessionDiv) sessionDiv.textContent = 'Cleared travelFormData from localStorage.';
}
function clearSessionSavedData() {
  sessionStorage.removeItem('travelFormSessionData');
  const sessionDiv = document.getElementById('sessiondata');
  if (sessionDiv) sessionDiv.textContent = 'Cleared travelFormSessionData from sessionStorage.';
}

window.addEventListener('DOMContentLoaded', () => {
  loadSavedData();

  window.getData = getData;
  window.loadSavedData = loadSavedData;
  window.clearLocalSavedData = clearLocalSavedData;
  window.clearSessionSavedData = clearSessionSavedData;
});
