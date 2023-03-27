import React from 'react';
import { View } from 'react-native';

const ProgressButtons = props => (
    <View style={{ flexDirection: 'row', ...props.btnContainer }}>
        <View style={{ ...props.previousBtnContainer }}>{props.renderPreviousButton()}</View>
        <View style={{ ...props.nextBtnContainer }}>{props.renderNextButton()}</View>
    </View>
);

export default ProgressButtons;
