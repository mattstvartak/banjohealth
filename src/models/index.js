// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Team = {
  "RED": "RED",
  "GREEN": "GREEN",
  "BLUE": "BLUE",
  "YELLOW": "YELLOW"
};

const Priority = {
  "HIGH": "HIGH",
  "MEDIUM": "MEDIUM",
  "LOW": "LOW"
};

const { Order } = initSchema(schema);

export {
  Order,
  Team,
  Priority
};