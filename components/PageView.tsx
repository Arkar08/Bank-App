import React, { useState } from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import DepositPageView from './DepositPageView';
import TransferPageView from './TransferPageView';
import WithdrawPageView from './WithdrawPageView';


export default function PageView() {
  const layout = useWindowDimensions();
  const key = [
    { key: 'transfer', title: 'Transfer' },
    { key: 'deposit', title: 'Deposit' },
    { key: 'withdraw', title: 'Withdraw' }
  ]

  const renderItem ={
    transfer: TransferPageView,
    deposit: DepositPageView,
    withdraw:WithdrawPageView
  } 

  const [index, setIndex] = useState(0);
  const [routes] = useState(key);
  const renderScene = SceneMap(renderItem);

  return (
      <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={props => (
        <View>
          <Text className='text-2xl p-4 text-center text-[#59008c] font-semibold'>All Transactions</Text>
          <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: 'white' }}
          style={{ backgroundColor: '#59008c'}}
        />
        </View>
      )}
    />
  );
}
