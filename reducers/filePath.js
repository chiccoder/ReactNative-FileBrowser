import RNFS from 'react-native-fs';


const filePath = (state = RNFS.ExternalStorageDirectoryPath, action) => {
    switch (action.type) {
      case 'SET_FILES':
        return action.payload.filePath
      default:
        return state
    }
  }
  
  export default filePath