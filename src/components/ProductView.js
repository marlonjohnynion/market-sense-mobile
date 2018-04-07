import React from 'react'
import { Image, Text, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import {
  Container,
  Icon,
  Thumbnail,
  Grid,
  Col
} from 'native-base'
import ActionBar from './ProductActionBar'

const ProductView = ({ product }) => {
  return (
    <ScrollView>
      <SafeAreaView>
        <Container>
          <Image source={{ uri: product.productImageUri }} style={styles.productImage}/>
          <Container style={styles.productMetaContainer}>
            <Text style={styles.productCategory}>{product.productCategory}</Text>
            <Text style={styles.productTitle}>{product.productTitle}</Text>
            <Grid style={styles.metaGrid}>
              <Col style={styles.ownerMetaIcon}>
                <Icon name='person' style={styles.icon}/>
              </Col>
              <Col style={styles.productOwnerMeta}>
                <Text style={styles.productOwner}>
                  {product.productOwner}
                </Text>
                <Text style={styles.productLocation}>
                  {product.productLocation}
                </Text>
              </Col>
              <Col style={styles.ownerMetaAvatar}>
                <Thumbnail large source={{ uri: product.ownerAvatar }}/>
              </Col>
            </Grid>
            <Text style={styles.productDescription} numberOfLines={7}>
              {product.productDescription}
            </Text>
          </Container>
          <ActionBar product={product}/>
        </Container>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  productMetaContainer: { marginLeft: 20, marginRight: 20, paddingTop: 10 },
  productImage: { height: 250, width: null },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 0,
    color: '#424242'
  },
  productDescription: {
    fontSize: 18,
    marginTop: 7,
    fontWeight: '200',
    lineHeight: 25
  },
  productOwner: { fontWeight: '300', fontSize: 16 },
  productLocation: { fontWeight: '300', fontSize: 15, marginTop: 3 },
  productCategory: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#424242'
  },
  productOwnerMeta: { height: 100, flex: 0.8, paddingTop: 20, marginLeft: 10 },
  metaGrid: { marginTop: 20, marginBottom: 20, flex: 1 },
  ownerMetaIcon: { height: 100, flex: 0.1, paddingTop: 19 },
  ownerMetaAvatar: { height: 100, flex: 0.3 },
  icon: { fontSize: 40 }
})

export default ProductView
