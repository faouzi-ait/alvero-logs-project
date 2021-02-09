import axios from 'axios';

export async function fetchLogs() {
  try {
    return await axios.get('./data/logs.json');
  } catch (error) {
    return { error };
  }
}
