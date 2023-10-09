import React from 'react';
import { ImageBackground, StyleSheet, Image, View, Text } from 'react-native';

// TODO: Add types
const CharacterDetailInfo = ({ route }: any) => {
    const { item } = route.params;
    const statusIconUrl = () => {
        switch (item.status) {
            case 'Alive':
                return require('../assets/images/status_alive.png');
            case 'Dead':
                return require('../assets/images/status_dead.png');
            case 'unknown':
                return require('../assets/images/status_unknown.png');
            default:
                return require('../assets/images/status_unknown.png');
        }
    };
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.image}
                blurRadius={10}
                source={{ uri: item.image }}
                resizeMode="cover">
                <View style={styles.content}>
                    <View style={styles.centeredContent}>
                        <Image style={styles.avatar} source={{ uri: item.image }} />
                        <Text style={styles.name}>{item.name}</Text>
                        <View style={styles.statusInfoView}>
                            <Text style={styles.descriptionText}>Status: {item.status}</Text>
                            <Image style={styles.statusIcon} source={statusIconUrl()} />
                        </View>
                    </View>
                    <View style={styles.viewStyle}>
                        <Text style={styles.descriptionText}>
                            Type: {item.species} {item.type ? `(${item.type})` : ''}
                        </Text>
                    </View>
                    <View style={styles.viewStyle}>
                        <Text style={styles.descriptionText}>
                            Place of birth: {item.origin.name}
                        </Text>
                    </View>
                    <View style={styles.viewStyle}>
                        <Text style={styles.descriptionText}>
                            Current place: {item.location.name}
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.40)',
    },
    image: {
        flex: 1,
    },
    avatar: {
        width: 180,
        height: 180,
        borderRadius: 180 / 2,
        borderWidth: 2,
        borderColor: '#fff',
    },
    centeredContent: {
        alignItems: 'center',
        marginTop: 10,
    },
    name: {
        fontSize: 36,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    statusIcon: {
        height: 26,
        width: 26,
    },
    statusInfoView: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    },
    descriptionText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    viewStyle: {
        margin: 10,
    },
});

export default CharacterDetailInfo;
