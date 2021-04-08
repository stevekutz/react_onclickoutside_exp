import React, {useState} from 'react';
import {optionValues as optionValuesAlias} from '../data/optionData';
import {
    DropDownContainer,
    SelectBox,
    SelectItem,
} from '../styled/dropdown_styles';
// import onClickOutside  from 'react-onclickoutside';

// const DropDown = () => {  // should cause error ==> Cannot read property 'isReactComponent' of undefined
function DropDownSelect(){
    const [selectedValue, setSelectedValue] = useState('');
    
    const activeOption = (e) => {
        setSelectedValue(e.target.value)
    
    }

    return (
        <DropDownContainer>
            <SelectBox 
                id = "optionSelected" 
                value = {selectedValue} 
                onChange = {activeOption}
            >
                {optionValuesAlias.map((option) => {
                    return (
                        <SelectItem 
                            key = {option.id}
                        > {option.text} </SelectItem>                    
                    )                
                })}
            
            </SelectBox>
            <div> Selected:  {selectedValue} </div>
        </DropDownContainer>
    
    )

}

export default DropDownSelect;


