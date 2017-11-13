import { Firma } from '../components/md_firma.model';
import * as firmaActions from './firma.actions';

export interface State {
    firma: Firma;
}

const initialState: State = {
  firma: {
    fa: '',
    fi: '',
    name: '',
    fils: [],
    ip: '',
    client: '',
    errorMessage: '',
  }
};

export function reducer (state = initialState, action: firmaActions.Actions): State {
  switch (action.type) {

    case firmaActions.GET_FIRMA_DONE: {
      const firma: Firma = action.payload;
      console.log('GET_FIRMA_OK', firma);
      return { ...state, firma };
    }

    case firmaActions.GET_FIRMA_FAIL: {
      const err = action.payload;
      console.log('GET_FIRMA_ERROR', err);
      return Object.assign({}, state, {errorMessage: err});
    }

    default: {
      console.log('firma.reducer - default', action.type);
      return state;
    }
  }
}

export const getFirma = (state: State) => state.firma;


