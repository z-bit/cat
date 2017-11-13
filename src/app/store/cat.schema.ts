import { DBSchema } from '@ngrx/db';

export const schema: DBSchema = {
  version: 1,
  name: 'cat_app',
  stores: {
    firma: {},
    user: {}
  }
};
