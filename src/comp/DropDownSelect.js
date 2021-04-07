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
    // const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    
    // const toggle = () => {setIsOpen(!isOpen)};

    // DropDownSelect.handleClickOutside = () => setIsOpen(false);

    const selectOption = (value) => {
        // setIsOpen(false);
        setSelectedValue(value);
    
    }


    return (
        <DropDownContainer>
            <SelectBox>
                {optionValuesAlias.map((option) => {
                    return (
                        <SelectItem key = {option.id}
                        > {option.text} </SelectItem>                    
                    )                
                })}
            
            </SelectBox>
        </DropDownContainer>
    
    )

}

// const onClickOutsideConfig = {
//     handleClickOutside: () => DropDownSelect.handleClickOutside, 
// }

export default DropDownSelect;

// export default onClickOutside(DropDownSelect, onClickOutsideConfig);

