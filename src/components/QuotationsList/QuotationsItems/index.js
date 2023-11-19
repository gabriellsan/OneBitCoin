import React, { Fragment } from "react";
import { View, Text, Image} from "react-native";
import styles from './styles'

export default function QuotationsItems() {
    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image style={styles.logBitCoin} source={require("../../../img/LogoBitCoin.png")}/>
                    <Text style={styles.dayCotation}>31/07/2013</Text>
                </View>
            </View>
            <View style={styles.contextRigth}>
                <Text style={styles.price}>$ 53331.052</Text>
            </View>
        </View>
    )
}