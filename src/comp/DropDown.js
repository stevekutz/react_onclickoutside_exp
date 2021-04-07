import React, {useState} from 'react';
import {
    DropDownContainer,
    SelectBox,
    SelectItem,
} from '../styled/dropdown_styles';
import onClickOutside  from 'react-onclickoutside';

// const DropDown = () => {  // shoud cause error
function DropDown(){
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    
    const toggle = () => {setIsOpen(!isOpen)};

    DropDown.handleClickOutside = () => setIsOpen(false);

    const selectOption = (value) => {
        setIsOpen(false);
        setSelectedValue(value);
    
    }

    const optionValues = [
        {
            id: 1, 
            text: 'Option 1',
        },
        {
            id: 2, 
            text: 'Option Two',
        },
        {
            id: 3, 
            text: 'Option three',
        },
        {
            id: 4, 
            text: 'Option FOUR',
        },

    ];

    return (
        <DropDownContainer>
            <SelectBox>
                {optionValues.map((option) => {
                    return (
                        <SelectItem key = {option.id} > {option.text} </SelectItem>                    
                    )                
                })}
            
            </SelectBox>

            <div onClick = {toggle}>
                {selectedValue ? 'Selected' + selectedValue : 'SelectOption'}
            </div>

            {isOpen ? 
                <ul>
                    {optionValues.map((option) => 
                    <li key = {option.id} onClick = {() => selectOption(option.text)}>
                        <div> {option.text} </div>
                    </li>
                    )}
                
                </ul>
                :
                null
            }


        
        </DropDownContainer>
    
    )

}

const onClickOutsideConfig = {
    handleClickOutside: () => DropDown.handleClickOutside, 
}

// export default Dropdown;

export default onClickOutside(DropDown, onClickOutsideConfig);

