import React, { useState } from 'react'
import { avatatUrlValidationMessage, descriptionValidationMessage, titleValidationMessage, usernameValidationMessage } from '../../../shared/validators'
import { Input } from '../../../shared/components'

const inputs = [
    {
        field: 'username',
        label: 'Username',
        validationMessage: usernameValidationMessage,
        type: 'text'
    },
    {
        field: 'title',
        label: 'Title',
        validationMessage: titleValidationMessage,
        type: 'text'
    },
    {
        field: 'avatarUrl',
        label: 'Avatar Url',
        validationMessage: avatatUrlValidationMessage,
        type: 'text'
    },
    {
        field: 'description',
        label: 'Description',
        validationMessage: descriptionValidationMessage,
        type: 'text',
        textarea: true
    },
]

export const ChannelSettings = ({settings}) => {

    const [fromState, setFormState] = useState({
        title: {
            isValid : false,
            showError: false,
            value: settings.title,
        },
        username: {
            isValid : false,
            showError: false,
            value: settings.username,
        },
        avatarUrl: {
            isValid : false,
            showError: false,
            value: settings.avatarUrl,
        },
        description: {
            isValid : false,
            showError: false,
            value: settings.description,
        }
    })
  return (
    <form className='settings-form'>
        {inputs.map(input => (
            <Input
                key={input.field}
                field={input.field}
                label={input.label}
                value={input.value}
                onChangHandler={() => {}}
                onBlurHandler={() => {}}
                showErrorMessage={fromState[input.field].showError}
                validationMessage={input.validationMessage}
                type={input.type}
                text={input.textarea}
            />
        ))}
    </form>
  )
}
