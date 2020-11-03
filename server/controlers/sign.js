import bcrypt, { hash } from 'bcryptjs';

import { User } from '../models';
import { userValidation } from '../../validation';
import { server } from '../../config';

export default {
  async SignIn(req, res, next) {
    try {
      const body = req.body;
      await userValidation.signIn.validateAsync(body, { abortEarly: false });
      const user = await User.findOne({ email: body.email });
      if (!user) {
        res.status(401).send('Unauthorized');
        return;
      }
      const password = await hash(body.password, server.salt);

      if (user.password !== password) {
        res.status(401).send('Incorrect password');
        return;
      }
      req.logIn(user, error => {
        if (error) {
          return next(error);
        }
        return res.status(200).send(user);
      });
      await user.save();
      res.status(200).send(user);
    } catch (error) {
      if (error.isJoi) {
        res.status(400).send(error);
        return;
      }
      next(error);
    }
  },

  async SignOut(req, res, next) {
    try {
      req.session.destroy(); // req-запрос
      res.status(200).clearCookie('connect.sid').send('You have been successfully logged out!'); // почитать про clearCookie //res-ответ
    } catch (error) {
      next(error);
    }
  }
};
