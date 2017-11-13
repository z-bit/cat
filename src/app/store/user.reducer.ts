import { User } from '../components/md_user.model';
import * as userActions from './user.actions';
import { cloneDeep } from 'lodash';

export interface State {
  user: User;
}

const initialState: State = {
  user: {
    fa: '',
    fi: '',
    bkz: '',            // Benutzerkuerzel
    pnr: '',
    name: '',           // Name, Vorname
    abt: '',
    art: '',
    austritt: '',
    berechtigung: 'NO', // 'NO' | 'SB' | 'LG' | 'WH' | 'BH' | 'IT';
    token: '',
    errorMessage: '',
  }
};

export function reducer (state = initialState, action: userActions.Actions): State {

  switch (action.type) {

    case userActions.LOGIN_DONE: {
      const user = action.payload;
      console.log('LOGIN_DONE', user);
      return { ...state, user };
    }

    case userActions.LOGOUT: {
      return initialState;
    }

    case userActions.SET_ERROR: {
      const newState = cloneDeep(state);
      newState.user.errorMessage = action.payload;
      return newState;
    }

    case userActions.CLEAR_ERROR: {
      const newState = cloneDeep(state);
      newState.user.errorMessage = '';
      return newState;
    }

    default: {
      console.log('user.reducer - default', action);
      return state;
    }
  }
}
export const getUser = (state: State) => state.user;




