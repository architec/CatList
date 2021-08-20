import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export class CatCard extends Component {

    constructor(props) {
        super(props);

        // Initializing the state 
    }
    //   componentDidMount() {
    //     getFromApi();
    //   }

    render() {
        return (
            <View style={styles.listItem}>
                <Text style={{
                    alignItems: 'center', //Centered vertically
                    marginLeft: 20,
                    marginRight: 20,
                    fontWeight: "bold",
                    // fontFamily: "lucida grande",
                    fontSize: 24,
                    width: 100
                }}>
                    <Text>I am</Text>
                    <Text>{`\n`}</Text>
                    <Text>Cat {this.props.id}</Text>
                </Text>

                <Image
                    source={{ uri: this.props.imageSource }}
                    style={styles.img}
                />

            </View>
        );
    };
}

const styles = StyleSheet.create({
    listItem: {
        display: "flex",
        marginTop: 5,
        backgroundColor: "antiquewhite",
        flexDirection: 'row',
        
        justifyContent: 'space-between', //Centered horizontally
    },
    img: {
        width: 200,
        height: 150,
    },
});
