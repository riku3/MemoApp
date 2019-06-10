import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, FlatList } from 'react-native';

class MemoList extends React.Component {
  renderMemo({ item }) {
    return (
      <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail'); }}>
        <View style={styles.monoListItem}>
          <Text style={styles.monoTitle}>{item.body}</Text>
          <Text style={styles.monoDate}>2017/10/10</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.monoList}>
        <FlatList data={this.props.memoList} renderItem={this.renderMemo.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  monoList: {
    flex: 1,
    width: '100%',
    // paddingTop: 78,
  },
  monoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  monoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  monoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});

export default MemoList;
