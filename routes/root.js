import express from 'express';
import {calcMeters} from '../rest-api/controller/calc-controller';
const router = express.Router();

router.post('/v1/calc/metro/quadrado', calcMeters);

module.exports = router;
