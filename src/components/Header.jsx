import React from "react";
import {FormattedMessage} from "react-intl";
import { Dropdown } from 'semantic-ui-react';

const languageOptions = [
  { key: 'Ukrainian', text: 'ua', value: 'uk-UA' },
  { key: 'English', text: 'en', value: 'en-US' },
  { key: 'German', text: 'de', value: 'de-DE' },
]

const Header = ({chooseLanguage}) => {
  const handleLangChange = (e, {value}) => { // e is an html-event
    chooseLanguage(value);
  }

  return (
  <header className="header">
    <p><FormattedMessage id="header"/></p>
    <Dropdown 
      className="langDropdown" 
      onChange={handleLangChange}
      options={languageOptions}
      defaultValue={'en-US'}
    />
  </header>
  )
}

export default Header;
