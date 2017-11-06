import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import RNFS from 'react-native-fs';
import { connect } from 'react-redux'
import path from 'react-native-path'

function addFilesToState(dispatch, path){
  RNFS.readDir(path).then(files => {
    dispatch({
      type: "SET_FILES",
      payload:{
        fileList: files.map(file => {
          return {
            ...file, 
            isFile: file.isFile(), 
            isDirectory: file.isDirectory()
          }
        }),
        filePath: path
      }
    })
  })
}

function goBack(dispatch, currPath){
  let p2 = path.resolve(currPath, '..')
  addFilesToState(dispatch,p2)
}

class FileList extends Component{
  componentWillMount(){
    addFilesToState(this.props.dispatch, RNFS.ExternalStorageDirectoryPath)
  }
  render(){
    const { dispatch, filePath, fileList } = this.props
    return(
      <View>
        <Button title='back' onPress={() => goBack(dispatch, filePath)}>Back</Button>
        <FlatList 
          data={fileList.files} 
          renderItem={({item})=>(
            item.isDirectory ? 
            (
              <Button key={item.path} title={item.name} onPress={() => addFilesToState(dispatch,item.path)}>
              {item.name}
              </Button>
            )
            :
            (
              <Text key={item.path}>{item.name}</Text>
            )
          )}
        />
      </View>
    )
  }
}

function mapStateToProps({fileList, filePath}){
  return {
    fileList,
    filePath
  }
}

export default connect(mapStateToProps)(FileList)