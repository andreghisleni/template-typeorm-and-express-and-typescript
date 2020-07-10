import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRoutes = Router();

usersRoutes.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  const createUser = new CreateUserService();
  const user = await createUser.execute({ name, email, password });

  delete user.password;

  res.json(user);
});

export default usersRoutes;
