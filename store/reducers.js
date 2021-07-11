import logger from 'lib/logger';
const employeesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_EMPLOYEES':
      logger(action, 'Çalışan arkadaşlar getirildi');
      return (state = action.payload);
    case 'LIKE_EMPLOYEE':
      logger(action, 'Kullanıcı beğenildi');
      return state.map((e) => {
        if (e.id === action.payload.id) {
          e.like++;
        }
        return e;
      });
    default:
      return state;
  }
};

const employeeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_EMPLOYEE':
      logger(action, 'Kullanıcı profiline girildi');
      return (state = action.payload);
    default:
      return state;
  }
};

export { employeesReducer, employeeReducer };
