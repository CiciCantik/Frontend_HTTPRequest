import React, { useState } from "react";
import EventHandlingInput from "./Pages/EventHandlingInput";
import EventHandlingResult from "./Pages/EventHandlingResult";

const EventApp = () => {const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [selectedOption, setSelectedOption] = useState('S1 Teknik Informatika');
    const [gender, setGender] = useState('Pria');
    const [academicAchievement, setAcademicAchievement] = useState(false);
    const [nonAcademicAchievement, setNonAcademicAchievement] = useState(false);
    const [inputValue, setInputValue] = useState('');

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleAddressChange(event) {
        setAddress(event.target.value);
    }

    function handleOptionChange(event) {
        setSelectedOption(event.target.value);
    }

    function handleGenderChange(event) {
        setGender(event.target.value);
    }

    function handleAchievementChange(event) {
        const { name, checked } = event.target;
        if (name === 'academicAchievement') {
            setAcademicAchievement(checked);
        } else if (name === 'nonAcademicAchievement') {
            setNonAcademicAchievement(checked);
        }
    }

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleClick() {
        alert('Tombol ini diklik');
    }

    return (
        <div className="flex flex-row">
            <EventHandlingInput
                name={name}
                address={address}
                selectedOption={selectedOption}
                gender={gender}
                academicAchievement={academicAchievement}
                nonAcademicAchievement={nonAcademicAchievement}
                inputValue={inputValue}
                handleNameChange={handleNameChange}
                handleAddressChange={handleAddressChange}
                handleOptionChange={handleOptionChange}
                handleGenderChange={handleGenderChange}
                handleAchievementChange={handleAchievementChange}
                handleInputChange={handleInputChange}
                handleClick={handleClick}
            />
            <EventHandlingResult
                name={name}
                address={address}
                selectedOption={selectedOption}
                gender={gender}
                academicAchievement={academicAchievement}
                nonAcademicAchievement={nonAcademicAchievement}
                inputValue={inputValue}
            />
        </div>
    );
}

export default EventApp;
