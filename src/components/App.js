import React from 'react';
import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext';
import UserCreate from './UserCreate';

class App extends React.Component {
  constructor() {
    super();
    this.state = { language: 'english' };
  }

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className='ui container'>
        <div>
          Select Language:
          <i
            onClick={() => this.onLanguageChange('english')}
            className='flag us'
          />
          <i
            onClick={() => this.onLanguageChange('dutch')}
            className='flag nl'
          />
        </div>

        <ColorContext.Provider value='red'>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
