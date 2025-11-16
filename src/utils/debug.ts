/**
 * Utility script for development and debugging
 * To be executed in the browser console
 */

/* eslint-disable no-console */

// Display all saved sessions
export function showSessions() {
  const sessions = localStorage.getItem("secretsanta_sessions");
  if (sessions) {
    console.log("Sessions:", JSON.parse(sessions));
  } else {
    console.log("No sessions found");
  }
}

// Display the last config
export function showLastConfig() {
  const config = localStorage.getItem("secretsanta_last_config");
  if (config) {
    console.log("Last config:", JSON.parse(config));
  } else {
    console.log("No config found");
  }
}

// Afficher les derniers participants
export function showLastParticipants() {
  const participants = localStorage.getItem("secretsanta_last_participants");
  if (participants) {
    console.log("Last participants:", JSON.parse(participants));
  } else {
    console.log("No participants found");
  }
}

// Clear all data
export function clearAllData() {
  if (confirm("Are you sure you want to clear ALL data?")) {
    localStorage.removeItem("secretsanta_sessions");
    localStorage.removeItem("secretsanta_last_config");
    localStorage.removeItem("secretsanta_last_participants");
    localStorage.removeItem("secretsanta_language");
    console.log("All data cleared!");
    location.reload();
  }
}

// Export all data
export function exportData() {
  const data = {
    sessions: localStorage.getItem("secretsanta_sessions"),
    config: localStorage.getItem("secretsanta_last_config"),
    participants: localStorage.getItem("secretsanta_last_participants"),
    language: localStorage.getItem("secretsanta_language"),
  };
  console.log("Export data:", data);
  return data;
}

// Import data
export function importData(data: any) {
  if (data.sessions)
    localStorage.setItem("secretsanta_sessions", data.sessions);
  if (data.config) localStorage.setItem("secretsanta_last_config", data.config);
  if (data.participants)
    localStorage.setItem("secretsanta_last_participants", data.participants);
  if (data.language)
    localStorage.setItem("secretsanta_language", data.language);
  console.log("Data imported!");
  location.reload();
}

// Expose functions globally in dev mode
if (import.meta.env.DEV) {
  (window as any).secretSantaDebug = {
    showSessions,
    showLastConfig,
    showLastParticipants,
    clearAllData,
    exportData,
    importData,
  };
  console.log("Debug tools available: window.secretSantaDebug");
}
