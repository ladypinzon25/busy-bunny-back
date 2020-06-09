import { Router } from "express";

import Users from "../tables/Users";
import { handleNotFound, handleError, handleCreated } from "./utils/handlers";
import { addTask, userTasks } from "./Tasks";

const router = Router();

router.get('/', async (request: any, response: any) => {
  try {
    const results = await Users.findAll();

    if (results) {
      response.send(results);
    } else {
      handleNotFound(response);
    }
  } catch (error) {
    handleError(error, response);
  }
});

router.get('/:id', async (request: any, response: any) => {
  const { id } = request.params;

  try {
    const result = await Users.findByPk(id);

    if (result) {
      response.send(result);
    } else {
      handleNotFound(response);
    }
  } catch (error) {
    handleError(error, response);
  }
});

router.post('/', async (request: any, response: any) => {
  try {
    const newRow = (await Users.create({ ...request.body }));

    handleCreated(response, (newRow as any).dataValues.id)
  } catch (error) {
    handleError(error, response);
  }
});

router.put('/:id', async (request: any, response: any) => {
  const { id } = request.params;

  try {
    const result = await Users.update({ ...request.body }, { where: { id } });

    if (result) {
      response.send(result);
    } else {
      handleNotFound(response);
    }
  } catch (error) {
    handleError(error, response);
  }
});

router.delete('/:id', async (request: any, response: any) => {
  const { id } = request.params;

  try {
    const result = await Users.destroy({ where: { id }});

    if (result) {
      response.send(id);
    } else {
      handleNotFound(response);
    }
  } catch (error) {
    handleError(error, response);
  }
});

router.post('/:userId/tasks', addTask);

router.get('/:userId/tasks', userTasks);

export default router;
