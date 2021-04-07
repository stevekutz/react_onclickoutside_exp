import React, {useState} from 'react';
import {optionValues as optionValuesAlias} from '../data/optionData';
import {
    DropDownContainer,

} from '../styled/dropdown_styles';
import onClickOutside  from 'react-onclickoutside';

// const DropDown = () => {  // should cause error ==> Cannot read property 'isReactComponent' of undefined
function DropDownList(){
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    
    const toggle = () => {setIsOpen(!isOpen)};

    DropDownList.handleClickOutside = () => setIsOpen(false);

    const selectOption = (value) => {
        setIsOpen(false);
        setSelectedValue(value);
    
    }


    return (
        <DropDownContainer>


            <div onClick = {toggle}>
                {selectedValue ? 'Selected =>  ' + selectedValue : 'Select Option'}
            </div>


            {isOpen ? 
                <ul>
                    {optionValuesAlias.map((option) => 
                    <li 
                        key = {option.id}
                        onClick={() => selectOption(option.text)}
                    >
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
    handleClickOutside: () => DropDownList.handleClickOutside, 
}

// export default Dropdown;

export default onClickOutside(DropDownList, onClickOutsideConfig);

