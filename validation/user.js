import joi from 'joi';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const email = joi
  .string()
  .trim()
  .empty()
  .min(4)
  .lowercase()
  .email({ tlds: { allow: false } })
  .messages({
    'string.empty': 'Поле Почта пустое.',
    'string.min': 'Почта слишком короткая - должно быть минимум 4 символа.',
    'string.email': 'Почта введена некорректно.'
  });


const password = joi
  .string()
  .empty()
  .min(4)
  .messages({
    'string.empty': 'Поле Пароль пустое.',
    'string.min': 'Пароль слишком короткий - должно быть минимум 4 символа.'
  });

const name = joi
  .string()
  .empty()
  .messages({
    'object.unknown': 'Объект неизвестен',
    'string.empty': 'Поле Имя пустое.',
    'string.min': 'Имя слишком короткое.'
  });

const surname = joi
  .string()
  .trim()
  .empty()
  .min(2)
  .messages({
    'string.empty': 'Поле Фамилия пустое.',
    'string.min': 'Фамилия слишком короткая.'
  });

const phone = joi
  .string()
  .trim()
  .empty()
  .min(8)
  .max(15)
  .pattern(phoneRegExp)
  .messages({
    'string.empty': 'Поле Телефон пустое.',
    'string.min': 'Телефон слишком короткий.',
    'string.max': 'Телефон слишком длинный.',
    'string.pattern.base': 'Номер введен некорректно.'
  });

// const birthday = joi
//   .date()
//   .iso()
//   .empty()
//   .messages({
//     'string.empty': 'Birthday is empty.'
//   });

const gender = joi
  .boolean()
  .messages({
    'boolean.base': 'Пол не выбран.'
  });

const signUp = joi
  .object()
  .keys({
    name,
    surname,
    email,
    gender,
    password,
    passwordConfirmation: joi
      .string()
      .empty('')
      .required()
      .valid(joi.ref('password'))
      .messages({
        'string.empty': 'Подтвердите пароль',
        'any.only': 'Пароли не совпадают',
        'any.required': 'Подтвердите пароль'
      })
  });


const signIn = joi
  .object()
  .keys({
    email,
    password
  });

const editProfile = joi
  .object()
  .keys({
    email,
    name,
    surname,
    password: password.optional(),
    passwordConfirmation: joi
      .string()
      .empty('')
      .optional()
      .valid(joi.ref('password'))
      .messages({
        'string.empty': 'Подтвердите пароль',
        'any.only': 'Пароли не совпадают',
        'any.required': 'Подтвердите пароль'
      })
  });


export default {
  signUp,
  signIn,
  editProfile
};
