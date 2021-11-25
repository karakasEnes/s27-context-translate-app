import React from 'react';
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
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>

        <LanguageContext.Provider value={'english'}>
          <UserCreate />
        </LanguageContext.Provider>

        <UserCreate />
      </div>
    );
  }
}

export default App;
