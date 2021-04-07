import React from 'react';
import DropDownSelect from './comp/DropDownSelect';
import DropDownList from './comp/DropDownList';
import {
    MainContainer,
    SubContainer,


} from './styled/app_styles';

function App() {
  return (
    <MainContainer>
        <SubContainer>
            <DropDownSelect />        
        </SubContainer>
        <SubContainer>
            <DropDownList />
        </SubContainer>
        
        
    </MainContainer>
  );
}

export default App;
