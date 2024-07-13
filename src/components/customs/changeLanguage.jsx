import { useEffect, useState } from "react";

export default function ChangeLanguage({actualLanguage}) {
  const [language, setLanguage] = useState(actualLanguage || 'en');

  const handleLanguageChange = (e) => {
    e.preventDefault();

    setLanguage(e.target.value);
  };

  useEffect(() => {
    if (language !== actualLanguage) {
      window.location.href = `/${language}`;
    }
  }, [language]);

  return (
    <div className="relative">
      <select className="px-5 py-2 rounded-md text-base bg-[var(--primary-color)] text-white font-semibold hover:bg-[var(--hover-primary-color)] cursor-pointer" onChange={handleLanguageChange} value={actualLanguage}>
        <option className={`${actualLanguage === "en"? "hidden" : ""} bg-white py-4 text-black`} value="en">EN</option>
        <option className={`${actualLanguage === "es"? "hidden" : ""} bg-white py-4 text-black`} value="es">ES</option>
        <option className={`${actualLanguage === "fr"? "hidden" : ""} bg-white py-4 text-black`} value="fr">FR</option>
      </select>
    </div>
  );
} 