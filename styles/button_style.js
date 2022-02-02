import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get("screen");

export const small = {
    paddingHorizontal: 10,
    paddingVertical: 12,
    width: width/4.3,
    height: 25,
    marginLeft: 5,
    marginRight: 5,
};
  
export const rounded = {
    borderRadius: 50
};
  
export const smallRounded = {
    // ...base,
    ...small,
    ...rounded
};


export const buttonContainer = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 20,
};

export const largeButton = {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: '#1fcc79',
    width: width/2.5,
    height: height/14
};