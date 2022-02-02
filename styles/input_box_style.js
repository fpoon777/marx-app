import { Dimensions } from 'react-native';


const { width, height } = Dimensions.get("screen");

export const inputBox = {
    borderColor: 'black',
    borderWidth: 1,
    paddingTop: 6,
    paddingBottom:6,
}

export const rounded = {
    borderRadius: 50
};

export const small = {
    width: width/1.3,
    height: height / 14,
    paddingLeft:20,
    paddingRight:20,
};

export const large = {
    width: width/1.3,
    height: height / 8,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:15,
    paddingTop:15,
};

export const smallRounded = {
    // ...base,
    ...inputBox,
    ...small,
    ...rounded
}

export const largeRounded = {
    ...inputBox,
    ...large,
    ...rounded
}