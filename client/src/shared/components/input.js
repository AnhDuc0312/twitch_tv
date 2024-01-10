import React from 'react'

export const Input = ({
    field,
    label,
    value,
    onChangHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
}) => {
    
    const handleValueChang = (e) => {
        onChangHandler(e.target.value,field);
    };

    const handleInputBlur = (e) => {
        onBlurHandler(e.target.value, field);
    }
  return (
    <>
    <div className='auth-form-label'>
        <span>{label}</span>
    </div>
    <input 
        type={type}
        value={value}
        onChange={handleValueChang}
        onBlur={handleInputBlur} 
    />
    <span className='auth-form-validation-message'>
        {showErrorMessage && validationMessage}
    </span>
    </>
  )
}
