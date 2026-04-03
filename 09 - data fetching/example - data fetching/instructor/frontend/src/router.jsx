// 1. API config / functions --------------------------------------------------

const API_BASE_URL = 'http://localhost:3000';


async function fetchResources() {
  const res = await fetch(`${API_BASE_URL}/resources`);

  if (!res.ok) {
    throw new Error(`Could not load resources: ${res.status}`);
  }

  return res.json();
}


async function fetchResourceById(resourceId) {
  const res = await fetch(`${API_BASE_URL}/resources/${resourceId}`);

  if (!res.ok) {
    throw new Error(`Could not load resource: ${res.status}`);
  }

  return res.json();
}
