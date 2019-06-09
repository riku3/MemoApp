import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

class MemoList extends React.Component {
  render() {
    return (
        <View style={styles.monoList}>
          <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail')}}>
            <View style={styles.monoListItem}>
              <Text style={styles.monoTitle}>講座のアイテム</Text>
              <Text style={styles.monoDate}>2017/10/10</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail')}}>
            <View style={styles.monoListItem}>
              <Text style={styles.monoTitle}>講座のアイテム</Text>
              <Text style={styles.monoDate}>2017/10/10</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail')}}>
            <View style={styles.monoListItem}>
              <Text style={styles.monoTitle}>講座のアイテム</Text>
              <Text style={styles.monoDate}>2017/10/10</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail')}}>
            <View style={styles.monoListItem}>
              <Text style={styles.monoTitle}>講座のアイテム</Text>
              <Text style={styles.monoDate}>2017/10/10</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail')}}>
            <View style={styles.monoListItem}>
              <Text style={styles.monoTitle}>講座のアイテム</Text>
              <Text style={styles.monoDate}>2017/10/10</Text>
            </View>
          </TouchableHighlight>
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
