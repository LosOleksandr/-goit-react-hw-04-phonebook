import * as yup from 'yup';
import shortid from 'shortid';

const nameId = shortid.generate();
const numberId = shortid.generate();


const validationSchema = yup.object({
  firstName: yup
    .string()
    .required('Name is required')
    .matches(/^[\p{L}]+$/u, 'Name must contains only letters')
    .min(4, 'Name must be at least 4 characters')
    .trim(),
  phoneNumber: yup
    .string()
    .required('Phone is required')
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Incorrect phone number format'),
});

export { validationSchema, nameId, numberId };
