import { CHANGE_FILTER } from '../actions/index';

export default function filterReducer(state = 'ALL', action) {
  switch (action.type) {
    case CHANGE_FILTER:

      return {
        state: action.value,
      };

    default:
      return state;
  }
}
