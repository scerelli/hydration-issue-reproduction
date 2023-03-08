import React, { forwardRef, ReactElement } from 'react'

export interface CustomFieldsetProps {
  iconLeft?: boolean
  disabled?: boolean
  label?: string
  htmlFor?: string
  errorMessage?: string
}

type FieldPropsChildren = ReactElement<HTMLInputElement> | ReactElement<HTMLTextAreaElement> | ReactElement<HTMLSelectElement>

export interface FieldsetProps extends CustomFieldsetProps, Omit<React.ComponentPropsWithRef<'fieldset'>, 'children'> {
  children: FieldPropsChildren
}

export const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>((
  {
    className,
    children,
    iconLeft,
    disabled,
    label,
    errorMessage,
    htmlFor = 'field',
    ...props
  }, forwardedRef) => (
    <React.StrictMode>
      <fieldset
        ref={forwardedRef}
        data-fieldset-has-label={`${Boolean(label)}`}
        data-fieldset-has-error={!!errorMessage}
        data-fieldset-disabled={disabled}
        aria-disabled={disabled}
        tabIndex={disabled ? 0 : undefined}
        {...props}
      >
        {children}
        {errorMessage
          ? (
            <span>
              {errorMessage}
            </span>
            )
          : null}
      </fieldset>
    </React.StrictMode>
))

Fieldset.displayName = 'Fieldset'
