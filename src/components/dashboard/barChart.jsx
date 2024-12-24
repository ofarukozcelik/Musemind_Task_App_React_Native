import React from 'react';
import { View, Text } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { ThemeColors } from '../../theme/colors';

const BarrChart = () => {
  const barData = [
    {
      value: 60,
      label: 'Sep',
      labelWidth: 30,
      labelTextStyle: { color: 'black' },
      frontColor: ThemeColors.green,spacing: 5
    },
    { value: 25, frontColor: ThemeColors.pink,spacing: 5 },
    { value: 40, frontColor: ThemeColors.blue,spacing: 5 },
    { value: 20, frontColor: ThemeColors.yellow ,spacing: 20 },
    {
      value: 70,
      label: 'Oct',
      labelWidth: 30,
      labelTextStyle: { color: 'black' },
      frontColor: ThemeColors.green,spacing: 5
    },
    { value: 35, frontColor: ThemeColors.pink,spacing: 5 },
    { value: 50, frontColor: ThemeColors.blue,spacing: 5 },
    { value: 15, frontColor: ThemeColors.yellow ,spacing: 20},
    {
      value: 65,
      label: 'Nov',
      
      labelWidth: 30,
      labelTextStyle: { color: 'black' },
      frontColor: ThemeColors.green,spacing: 5
    },
    { value: 30, frontColor: ThemeColors.pink,spacing: 5 },
    { value: 45, frontColor: ThemeColors.blue ,spacing: 5},
    { value: 25, frontColor: ThemeColors.yellow ,spacing: 20},
    {
      value: 55,
      label: 'Dec',
      
      labelWidth: 30,
      labelTextStyle: { color: 'black' },
      frontColor: ThemeColors.green,spacing: 5
    },
    { value: 40, frontColor: ThemeColors.pink,spacing: 5 },
    { value: 65, frontColor: ThemeColors.blue ,spacing: 5},
    { value: 35, frontColor: ThemeColors.yellow ,spacing: 10},
  
  ];

  const renderTitle = () => {
    return (
      <View style={{ marginVertical: 10 }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
           
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
            <View
              style={{
                height: 14,
                width: 14,
                borderRadius: 50,
                backgroundColor: ThemeColors.pink,
                marginRight: 8,
              }}
            />
            <Text style={{ fontSize: 12, color: 'black' }}>In Review</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
            <View
              style={{
                height: 14,
                width: 14,
                borderRadius: 5,
                backgroundColor: ThemeColors.green,
                marginRight: 8,
              }}
            />
            <Text style={{ fontSize: 12, color: 'black' }}>Completed</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
            <View
              style={{
                height: 14,
                width: 14,
                borderRadius: 6,
                backgroundColor: ThemeColors.blue,
                marginRight: 5,
              }}
            />
            <Text style={{ fontSize: 12, color: 'black' }}>In Progress</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
            <View
              style={{
                height: 14,
                width: 14,
                borderRadius: 6,
                backgroundColor: ThemeColors.yellow,
                marginRight: 8,
              }}
            />
            <Text style={{ fontSize: 12, color: 'black' }}>On Hold</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,

      }}>
      <BarChart
        data={barData}
        barWidth={10}
        spacing={10}
        roundedTop
        roundedBottom
        hideRules
        xAxisThickness={0}
        yAxisThickness={0}
        yAxisTextStyle={{ color: 'black' }}
        noOfSections={5}
        maxValue={80}
        marginBottom={10}
      />
      {renderTitle()}
    </View>
  );
};

export default BarrChart;
