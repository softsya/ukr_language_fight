import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import './App.css';
import uaDict, {timelineItemsUA} from './lang/uk-UA';
import enDict, {timelineItemsUS} from './lang/en-US';
import Header from './components/Header';
import Timeline from './components/Timeline';

const messages = {
  "uk-UA": uaDict,
  "en-US": enDict,
  // "de-DE": enDict, // todo - add german dict and change here
}

const timelineItems = {
  "uk-UA": timelineItemsUA,
  "en-US": timelineItemsUS,
}

function App() {
  const [selectedLang, setLang] = useState("en-US");
  return (
    <IntlProvider messages={messages[selectedLang]} locale={selectedLang} defaultLocale={"en-US"}>
      <div className="App">
      <Header chooseLanguage={setLang}/>
      <Timeline timelineItems={timelineItems[selectedLang]} />

      </div>
    </IntlProvider>
  );
}

export default App;
