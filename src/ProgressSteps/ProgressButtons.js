import React from 'react';
import { View } from 'react-native';

const ProgressButtons = props => (
    <View style={{ flexDirection: 'row', marginTop: 90 , ...props.btnContainer }}>
        <View style={{ position: 'absolute', left: 60, bottom: 40, ...props.previousBtnContainer }}>{props.renderPreviousButton()}</View>
        <View style={{ position: 'absolute', right: 60, bottom: 40, ...props.nextBtnContainer }}>{props.renderNextButton()}</View>
    </View>
);

export default ProgressButtons;
