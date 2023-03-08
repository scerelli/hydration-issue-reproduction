"use client"
import * as Yup from 'yup';
import { TextField } from '@/components/text-field';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
type Inputs = {
  firstName: string
  lastName: string
  birthDate: Date
};

export const Form = () => {

  const validationSchema = Yup.object().shape({
    birthDate: Yup.string()
      .required('Date of Birth is required')
      .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD')
  });
  const { control, register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(validationSchema), // <<---- this is the one the cause the problem
  });

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField placeholder='Name' {...register("firstName")} />
      <TextField placeholder='Last name' {...register("lastName")} />
      <TextField placeholder='Birth date' type="date" {...register("birthDate")} />
    </form>
  )
}
