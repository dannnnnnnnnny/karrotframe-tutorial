import React from 'react';
import { Navigator, Screen } from 'karrotframe';
import { MyComponent } from './components/MyComponent';
import './App.css';

const App: React.FC = () => {
  return (
    <Navigator
      theme='Android'
      onClose={() => {
        console.log('닫기버튼 누름.')
      }}
    >
      <Screen path='/'>
        <MyComponent />
      </Screen>
    </Navigator>
  )
}

export default App;
