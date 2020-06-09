import { Router } from "express";

import Tasks from "../tables/Tasks";
import { handleNotFound, handleError, handleCreated } from "./utils/handlers";

const router = Router();

router.get('/', async (request: any, response: any) => {
  try {
    const results = await Tasks.findAll();

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
    const result = await Tasks.findByPk(id);

    if (result) {
      response.send(result);
    } else {
      handleNotFound(response);
    }
  } catch (error) {
    handleError(error, response);
  }
});

router.put('/:id', async (request: any, response: any) => {
  const { id } = request.params;

  try {
    const result = await Tasks.update({ ...request.body }, { where: { id } });

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
    const result = await Tasks.destroy({ where: { id }});

    if (result) {
      response.send(id);
    } else {
      handleNotFound(response);
    }
  } catch (error) {
    handleError(error, response);
  }
});

export async function addTask(request: any, response: any) {
  try {
    const { userId } = request.params;
    const newRow = (await Tasks.create({ ...request.body, userId }));

    handleCreated(response, (newRow as any).dataValues.id)
  } catch (error) {
    handleError(error, response);
  }
}

export async function userTasks(request: any, response: any) {
  try {
    const { userId } = request.params;
    const results = await Tasks.findAll({ where: { userId } });

    if (results) {
      response.send(results);
    } else {
      handleNotFound(response);
    }
  } catch (error) {
    handleError(error, response);
  }
}

export default router;
