import { forwardRef } from 'react'
import { Fieldset } from '../fieldset'

export interface TextFieldProps extends Omit<React.ComponentPropsWithRef<'input'>, 'children'> {
  errorMessage?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({ className, errorMessage, ...props }, forwardedRef) => (
  <Fieldset errorMessage={errorMessage}>
    <input
      ref={forwardedRef}
      {...props}
    />
  </Fieldset>
))

TextField.displayName = 'TextField'
