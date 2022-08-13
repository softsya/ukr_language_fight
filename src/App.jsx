import React, {useState} from 'react';
import {IntlProvider, FormattedMessage} from 'react-intl';
import './App.css';
import uaDict from './lang/uk-UA';
import enDict from './lang/en-US';
import Header from './components/Header';
import Timeline from './components/Timeline';
import './reset.css';

const messages = {
  "uk-UA": uaDict,
  "en-US": enDict,
  "de-DE": enDict, // todo - add german dict and change here
  "pl-PL": uaDict, // todo - add polish dict and change here
}

function App() {
  const [selectedLang, setLang] = useState("en-US");
  return (
    <IntlProvider messages={messages[selectedLang]} locale={selectedLang} defaultLocale={"en-US"}>
      <div className="App">
      <Header chooseLanguage={setLang}/>

      <Timeline/>

      {/* <FormattedMessage
        id="1967"
        values={{ts: Date.now()}}
      /> */}
      
      </div>
    </IntlProvider>
  );
}

export default App;
