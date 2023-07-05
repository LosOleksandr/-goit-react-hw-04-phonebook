import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema, numberId, nameId } from './ValidationSchema';
import {
  StyledForm,
  StyledField,
  StyledLabel,
  SumbitBtn,
  StyledErrorMessage,
} from './PhonebookForm.styled';

export default function PhonebookForm({ addContact }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = values => {
    addContact(values);
    reset();
  };

  return (
    <StyledForm autoComplete="off" action="" onSubmit={handleSubmit(onSubmit)}>
      <StyledLabel htmlFor={nameId}>Name</StyledLabel>
      <StyledField
        id={nameId}
        name="name"
        type="text"
        {...register('firstName')}
      />
      <StyledErrorMessage>{errors.firstName?.message}</StyledErrorMessage>
      <StyledLabel htmlFor={numberId}>Phone</StyledLabel>
      <StyledField
        id={numberId}
        name="number"
        mask="999-99-99"
        type="tel"
        {...register('phoneNumber')}
      />
      <StyledErrorMessage>{errors.phoneNumber?.message}</StyledErrorMessage>
      <SumbitBtn type="submit">Add contact</SumbitBtn>
    </StyledForm>
  );
}
