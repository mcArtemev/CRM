import bcrypt from 'bcryptjs';
// import { hash } from 'bcryptjs'; можно и так hash вызвать. Тогда 13 строка была бы body.password = await hash(body.password, server.salt);

import { User } from '../models';
import { userValidation } from '../../validation';
import { server } from '../../config';

export default {
  async add(req, res, next) {
    try {
      const body = req.body;
      console.log(body);
      await userValidation.signUp.validateAsync(body, { abortEarly: false }); // Валидируем поля при регистрации
      console.log('here');
      const findedUser = await User.findOne({ email: body.email }); // {название поля: значение поля}-объект//Находим пользователя( если существует)
      console.log(findedUser);
      if (findedUser) { // если существует, то такой уже есть
        res.status(409).send({ error: 'User with same email is already exists' });
        return;
      }
      // Создаем Userа
      body.password = await bcrypt.hash(body.password, server.salt);
      const user = new User(body);
      await user.save();
      res.status(200).send(user);
    } catch (error) {
      if (error.isJoi) {
        console.log(error.details);
        res.status(400).send(error);
        return;
      }
      next(error);
    }
  }
};
