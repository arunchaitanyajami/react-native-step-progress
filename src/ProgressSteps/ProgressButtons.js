import React from 'react';
import { View } from 'react-native';

const ProgressButtons = props => (
    <View style={{ flexDirection: 'row', marginTop: 40 , ...props.btnContainer }}>
        <View style={{ position: 'absolute', left: 0, bottom: 20, ...props.previousBtnContainer }}>{props.renderPreviousButton()}</View>
        <View style={{ position: 'absolute', right: 0, bottom: 20, ...props.nextBtnContainer }}>{props.renderNextButton()}</View>
    </View>
);

export default ProgressButtons;
