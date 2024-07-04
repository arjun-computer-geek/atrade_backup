import * as yup from 'yup';

const stepFormValidationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    mobileNo: yup.string().matches(/^[0-9]{10}$/, 'Mobile No must be exactly 10 digits').required('Mobile No is required'),
    address: yup.string().required('Address is required'),
    remark: yup.string().required('Remark is required'),
});

export default stepFormValidationSchema;
