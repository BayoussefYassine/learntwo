import * as yup from "yup";

const SchemaValidation = yup.object().shape({
    userName: yup.string().required().min(4).label('Username'),
    email: yup.string().email().label('Email').required(),
    password: yup.string().required().min(8).
    max(30).matches(/^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*/ , 'Is not in correct format')
    .label('Password'),
    confirmPassword: yup.string().test('passwords-match', 'Passwords must match', function(value){
        return this.parent.password === value
      }),
});
  
 
export default SchemaValidation;