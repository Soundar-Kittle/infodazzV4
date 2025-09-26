
"use client";

import { getSettings } from "@/Services/Settings/ApiSettings";
import { createContext, useContext, useEffect, useState } from "react";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Run on client after mount
  useEffect(() => {
    const loadFromStorage = () => {
      try {
        const localSettings = localStorage.getItem("appSettings");
        if (localSettings) {
          setSettings(JSON.parse(localSettings));
          setLoading(false);
        }
      } catch (err) {
        console.error("Failed to read localSettings", err);
      }
    };

    loadFromStorage();
  }, []);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await getSettings();

        const formattedSettings = data?.rows?.reduce((acc, setting) => {
          acc[setting.settings_name] = setting.settings_value;
          return acc;
        }, {});

        setSettings(formattedSettings);
        localStorage.setItem("appSettings", JSON.stringify(formattedSettings));
      } catch (error) {
        console.error("Failed to fetch settings:", error);
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if nothing in localStorage
    if (!settings) {
      fetchSettings();
    }
  }, [settings]);

  return (
    <SettingsContext.Provider value={{ settings, loading, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within SettingsProvider");
  }
  return context;
};
