import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Modal
} from 'react-native';
const { width, height } = Dimensions.get('window')
import PropTypes from 'prop-types';
import loadingImage from './assets/Loading.gif'

class Loading extends Component{
    constructor(props) {
        super(props);
    }
    _close(){
        console.log("onRequestClose ---- ")
    }
    render() {
        const { showLoading, opacity, backgroundColor } = this.props
        return (
            <Modal onRequestClose={() => this._close()} visible={showLoading} transparent>
                <View style={ [styles.loadingView, {opacity: opacity||0.3, backgroundColor: backgroundColor||'gray'}]}></View>
                <View style={ styles.loadingImageView }>
                    <View style={{}}>
                        {
                            this.props.loadingViewClick?
                            <TouchableOpacity onPress={ this.props.loadingViewClick }>
                                <Image style={ {width: this.props.width, height: this.props.height} } source={ loadingImage }/>
                            </TouchableOpacity>
                            :
                            <Image style={ {width: this.props.width, height: this.props.height} } source={ loadingImage }/>
                        }
                    </View>
                </View>
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    loadingView: {
        flex: 1,
        height,
        width,
        position: 'absolute'
    },
    loadingImage: {
        width: 100,
        height: 100,
    },
    loadingImageView: {
        position: 'absolute',
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

Loading.propTypes = {
    loadingViewClick: PropTypes.func,
    showLoading: PropTypes.bool.isRequired,
    opacity: PropTypes.number,
    backgroundColor: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
}


export default Loading