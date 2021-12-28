import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {styles} from './styles';
import {PRIMARY_COLOR} from '../../constants/constants';
import {colors} from '../constants/constants';
import {VictoryChart, VictoryLine, VictoryTheme} from 'victory-native';

const {width, height} = Dimensions.get('screen');

const LineGraph = ({
  data = data,
  style,
  lineColor = colors.APP_PRIMARY_COLOR,
  lineWidth = 3,
  showAxis = false,
  bottomLine = true,
  HeadingTitle = 'Progress November 11-17',
  xAxis,
  yAxis,
}) => {
  // console.log('H:', height, 'W:', width);s
  // console.log('H1:', height, 'W1:', graphWidth);s
  return (
    <View style={[{...styles.graphContainer, height: height / 2.7}, style]}>
      <Text style={styles.DateRangeStyle}>{HeadingTitle}</Text>
      {showAxis ? (
        <VictoryChart theme={VictoryTheme.material} width={size} height={size}>
          <VictoryLine
            data={data}
            x={xAxis}
            y={yAxis}
            animate
            // width={size + 50}
            // height={size - 25}
            // width={width / 1}
            style={{data: {stroke: lineColor, strokeWidth: lineWidth}}}
          />
        </VictoryChart>
      ) : (
        <VictoryLine
          data={data}
          x={xAxis}
          y={yAxis}
          animate
          width={width * 0.9}
          height={height / 3.5}
          style={{
            data: {
              stroke: lineColor,
              strokeWidth: lineWidth,
            },
          }}
        />
      )}
      {bottomLine && (
        <View
          style={{
            backgroundColor: '#C4C4C4',
            height: 2,
            width: '80%',
          }}></View>
      )}
    </View>
  );
};

export default LineGraph;
