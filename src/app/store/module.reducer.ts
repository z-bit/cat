import { Module } from '../components/md_module.model';
import * as moduleActions from './module.actions';

export interface State {
  module: Module;
}

const initialState: State = {
  module: {
    name: 'Home',
    titel: 'Care Angular Tools',
    untertitel: 'Cat\'s Home',
    beschreibung: 'Programm-Auswahl',
    avatarLink: 'src/assets/Home.png',
  }
};

export function reducer (state = initialState, action: moduleActions.Actions): State {
  switch (action.type) {

    case moduleActions.GET: {
      return state;
    }

    case moduleActions.SET: {
      const module: Module = action.payload;
      return { ...state, module };
    }

    default: {
      return state;
    }
  }
}

export const getModule = (state: State) => state.module;
