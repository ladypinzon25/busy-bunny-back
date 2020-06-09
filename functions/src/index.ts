import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as dbSetup from "./setup/db";
import * as express from "express";
import * as cors from "cors";

import Users from "./routes/Users";
import Tasks from "./routes/Tasks";

admin.initializeApp();
dbSetup.connect();

const app = express();

app.use(cors({ origin: true }));

app.use('/users', Users);
app.use('/tasks', Tasks);

exports.api = functions.https.onRequest(app);
