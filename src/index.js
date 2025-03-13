import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobslist";

// Get browser language and messages
const getLocale = () => {
  // Try to get language from browser
  const browserLang = navigator.language || navigator.userLanguage;
  
  // Check if the language starts with 'es' (es, es-ES, es-MX, etc.)
  if (browserLang.startsWith('es')) {
    return 'es';
  }
  
  // Default to English for any other language
  return 'en';
};

const getMessages = (locale) => {
  return locale === 'es' ? localeEsMessages : localeEnMessages;
};

const App = () => {
  const [locale, setLocale] = useState(getLocale());
  const messages = getMessages(locale);

  const handleLanguageChange = (newLocale) => {
    setLocale(newLocale);
  };

  return (
    <IntlProvider 
      locale={locale} 
      messages={messages}
      defaultLocale="en"
      onError={(err) => {
        if (err.code === 'MISSING_TRANSLATION') {
          console.warn('Missing translation:', err.message);
        }
      }}
    >
      <div className="language-switcher" style={{ padding: '20px', textAlign: 'right' }}>
        <button 
          onClick={() => handleLanguageChange('en')}
          style={{ marginRight: '10px', padding: '5px 10px' }}
          className={locale === 'en' ? 'btn btn-primary' : 'btn btn-outline-primary'}
        >
          English
        </button>
        <button 
          onClick={() => handleLanguageChange('es')}
          style={{ padding: '5px 10px' }}
          className={locale === 'es' ? 'btn btn-primary' : 'btn btn-outline-primary'}
        >
          Español
        </button>
      </div>
      <JobsList />
    </IntlProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

