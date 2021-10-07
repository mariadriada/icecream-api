import db from "../db.js";
import { Rol } from "../models/index.js";

export const getAll = (req, res) => {
  // Connect to db
  db.connect();

  // Get all the icecreams
  Rol.find((err, data) => {
    if (err) res.status(500).send();
    if (data.length === 0) res.status(204).send();
    res.status(200).send(data);
  });
};

export const getOne = (req, res) => {
  // Connect to db
  db.connect();

  const { id } = req.params;

  Rol.findById(id, (err, data) => {
    if (err) res.sendStatus(404);
    res.status(200).json(data);
  });
};

export const create = (req, res) => {
  db.connect();
  if (req.body) {
    Rol.create(req.body, (err, icecream) => {
      if (err) res.sendStatus(500);
      res.status(201).json(icecream);
    });
  }
};

export const update = (req, res) => {
  const { id } = req.params;
  const icecreamNew = req.body;

  db.connect();
  Rol.findById(id, (err, icecream) => {
    if (err) res.status(500).send(err);
    Rol.updateOne(icecream, icecreamNew, (err, value) => {
      if (err) res.status(500).send(err);
      res.status(200).send(value);
    });
  });
};

export const deleteOne = (req, res) => {
  const { id } = req.params;

  db.connect();
  Rol.findById(id, (err, icecream) => {
    if (err) res.status(404).send(err);
    icecream.remove((err, value) => {
      if (err) res.status(500).send(err);
      res.status(200).send(value);
    });
  });
};
