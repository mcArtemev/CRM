import joi from 'joi';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const emailSchema = joi
  .string()
  .trim()
  .empty('')
  .min(4)
  .lowercase()
  .email({ tlds: { allow: false } })
  .messages({
    'string.empty': 'Поле Почта пустое.',
    'string.min': 'Почта слишком короткая - должно быть минимум 4 символа.',
    'string.email': 'Почта введена некорректно.'
  });


const passwordSchema = joi
  .string()
  .empty('')
  .min(4)
  .messages({
    'string.empty': 'Поле Пароль пустое.',
    'string.min': 'Пароль слишком короткий - должно быть минимум 4 символа.'
  });

const nameSchema = joi
  .string()
  .empty('')
  .messages({
    'object.unknown': 'Объект неизвестен',
    'string.empty': 'Поле Имя пустое.',
    'string.min': 'Имя слишком короткое.'
  });

const surnameSchema = joi
  .string()
  .trim()
  .empty('')
  .min(2)
  .messages({
    'string.empty': 'Поле Фамилия пустое.',
    'string.min': 'Фамилия слишком короткая.'
  });

const phoneSchema = joi
  .string()
  .trim()
  .empty('')
  .min(8)
  .max(15)
  .pattern(phoneRegExp)
  .messages({
    'string.empty': 'Поле Телефон пустое.',
    'string.min': 'Телефон слишком короткий.',
    'string.max': 'Телефон слишком длинный.',
    'string.pattern.base': 'Номер введен некорректно.'
  });

// const birthdaySchema = joi
//   .date()
//   .iso()
//   .empty()
//   .messages({
//     'string.empty': 'Birthday is empty.'
//   });

const genderSchema = joi
  .boolean()
  .messages({
    'boolean.base': 'Пол не выбран.'
  });

const signUp = joi
  .object()
  .keys({
    name: nameSchema,
    surname: surnameSchema,
    email: emailSchema,
    gender: genderSchema,
    password: passwordSchema
  });


const signIn = joi
  .object()
  .keys({
    email: emailSchema,
    password: passwordSchema.required()
  }).required();


export default {
  signUp,
  signIn
};
