export function handleError(error: any, response: any) {
  console.error(error);
  response.status(500).send(error.toString());
}

export function handleNotFound(response: any) {
  response.sendStatus(404);
}

export function handleCreated(response: any, id: any) {
  response.status(201).send(id.toString());
}

