import React, {useState} from 'react';
import {
    DropDownContainer,
} from '../styled/dropdown_styles';
import onClickOutside  from 'react-onclickoutside';

const Dropdown = () => {  // shoud cause error
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    
    const toggle = () => {setIsOpen(!isOpen)};

    Dropdown.handleClickOutside = () => setIsOpen(false);

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
            <div>
                Something
            
            </div>
        
        
        </DropDownContainer>
    
    )

}

export default Dropdown;

