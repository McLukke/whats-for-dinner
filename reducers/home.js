import { ActionConst } from 'react-native-router-flux';

const homeReducer = (state ={}, { type, scene }) => {
  switch (type) {
    case ActionConst.FOCUS:
      return {
        ...state,
        scene,
      };
  
    default:
      return state;
  };
};

export default homeReducer;
