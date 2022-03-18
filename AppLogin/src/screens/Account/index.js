import React, {memo, useEffect, useState} from 'react';
import ItemAccount from '../Account/ItemAccount';
import {useDispatch} from 'react-redux';
import {actionGetUser} from './action/GetUserAction';
import { StyleSheet, FlatList, View } from 'react-native';
import _ from 'lodash';
import Colors from '../../utils/Colors';
import { ActivityIndicator } from 'react-native-paper';

const Account = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [indexSelect, setIndexSelect] = useState(0);
  const pageSize = 10;
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = pageNumber => {
    const params = {
      page: pageNumber,
      per_page: pageSize,
    };
    dispatch(actionGetUser(params, onSuccess, onError));
    setLoading(true);
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={Colors.black} />
      </View>
    );
  }
  const onLoadMore = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage > totalPage) {
      console.log('list user end');
    } else {
      fetchData(currentPage);
    }
    // check neu currentPage > totalPage thi khong fetData
  };

  const onSuccess = async response => {
    const _total = response.data.total_pages;
    setTotalPage(_total);

    const dataUser = response.data.data;
    // check xem la data loadmore hay la lan dau
    // lan dau thif setData()
    // neu la loadmore =>
    // lay stateCu + reponse moi: data + reponse
    if (currentPage == 1) {
      setData(dataUser);
      console.log('day la lan dau fetch data');
    } else if (currentPage <= totalPage) {
      setData([...data, ...dataUser]);
    } else {
      return;
    }
    setLoading(false);
  };

  const onError = error => {
    console.log('GetUser error: ', error);
    setLoading(false);
  };

  return (
    <FlatList
      data={data}
      style={styles.flatList}
      renderItem={({item, index}) => {
        return (
          <ItemAccount
            user={item}
            isSelect={index === indexSelect}
            indexSelect={indexSelect}
            index={index}
            setIndexSelect={setIndexSelect}
          />
        );
      }}
      keyExtractor={item => item.id}
      refreshing={loading}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.5}
    />
  );
};

export default memo(Account);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtBtnHeader: {
    color: Colors.white,
    fontSize: 20,
    textAlign: 'center',
  },
  flatList: {
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },
  loading: {
    flex: 1, 
    justifyContent: 'center'
  }
});
