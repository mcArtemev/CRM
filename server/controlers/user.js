import bcrypt from 'bcryptjs';
// import { hash } from 'bcryptjs'; можно и так hash вызвать. Тогда 13 строка была бы body.password = await hash(body.password, server.salt);

import { User } from '../models';
import { user as userValidation } from '../../validation';
import { server } from '../../config';
import { multer } from '../middlewares';
import { response } from 'express';

const multerInstance = multer
  . fields([
    { name: 'image', maxCount: 1 },
    { name: 'name', maxCount: 1 },
    { name: 'format', maxCount: 1 }
  ]);

const uploadFormData = (req, res) => {
  return new Promise((resolve, reject) => {
    multerInstance(req, res, err => {
      if (err) {
        return reject(err);
      }
      return resolve(req);
    });
  });
};

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
      console.log(error);
      next(error);
    }
  },
  async whoAmI(req, res, next) {
    try {
      console.log('error whoami');
      const userId = req.session.passport.user;
      if (userId === undefined) {
        return res.status(401).send('Unauthorized');
      }
      const user = await User.findById(userId);
      if (user === undefined) {
        return res.status(401).send('Unauthorized');
      }
      return res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  },
  async uploadImage(req, res, next) {
    try {
      const { files } = await uploadFormData(req, res);
      const filePath = files.image[0].path;
      console.log(filePath);
    } catch (error) {
      next(error);
    }
  },

  async editProfile(req, res, next) {
    try {
      console.log('error editprofile');
      const { body, query } = req;
      const userId = req.session.passport.user;
      const user = await User.findById(userId);
      console.log(body);
      if (!user) {
        console.log('!user');
        return res.status(401).send('Unauthorized');
      }
      if (userId !== user._id.toString()) {
        return res.status(401).send('Unauthorized');
      }
      await userValidation.editProfile.validateAsync(body, { abortEarly: false });
      if (body.password !== undefined) {
        body.password = await bcrypt.hash(body.password, server.salt);
      }

      const editedUser = await User.findByIdAndUpdate(userId, { ...body });
      return res.status(200).send(editedUser);
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
