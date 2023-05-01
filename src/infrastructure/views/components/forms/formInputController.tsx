import {FormControl, Input, VStack} from 'native-base';
import {ResponsiveValue} from 'native-base/lib/typescript/components/types';
import React, {PropsWithChildren} from 'react';
import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';

interface FormInputControllerProps<FieldsType extends FieldValues> {
  name: Path<FieldsType>;
  defaultValue?: string;
  rules?: RegisterOptions;
  error?: FieldError;
  control: Control<FieldsType>;
}

interface Props<FieldsType extends FieldValues>
  extends FormInputControllerProps<FieldsType> {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'password';
  variant?: ResponsiveValue<
    'outline' | 'rounded' | string | 'unstyled' | 'underlined' | 'filled'
  >;
  required?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  testID?: string;
}

export const FormInputController = <FieldsType extends FieldValues>({
  variant,
  error,
  rules,
  label,
  type,
  control,
  name,
  placeholder,
  children,
  required,
  autoCapitalize,
  testID,
}: PropsWithChildren<Props<FieldsType>>) => {
  const isInvalid = error != null;
  const isRequired = (rules != null && 'required' in rules) || !!required;

  return (
    <VStack space={3}>
      <FormControl isInvalid={isInvalid} isRequired={isRequired}>
        {label != null && <FormControl.Label>{label}</FormControl.Label>}
        <Controller
          control={control}
          name={name}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder={placeholder}
              value={value}
              onBlur={onBlur}
              onChangeText={val => onChange(val)}
              type={type}
              textContentType={type === 'password' ? 'oneTimeCode' : undefined}
              variant={variant}
              testID={testID}
              autoCapitalize={autoCapitalize ?? 'none'}
            />
          )}
          rules={rules}
        />
        {error != null && (
          <FormControl.ErrorMessage>{error.message}</FormControl.ErrorMessage>
        )}
      </FormControl>
      {children}
    </VStack>
  );
};
