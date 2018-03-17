import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import {
  Content,
  Container,
  Button,
  Icon,
  Thumbnail,
  Grid,
  Col
} from 'native-base'

const ProductView = ({product}) => {
  return (
    <Container>
      <Image source={{uri: product.imageUri}} style={styles.productImage}/>
      <Content style={styles.productMetaContainer}>
        <Text style={styles.productCategory}>{product.productCategory}</Text>
        <Text style={styles.productTitle}>{product.productTitle}</Text>
        <Grid style={styles.metaGrid}>
          <Col style={styles.ownerMetaIcon}>
            <Icon name='person' style={{fontSize: 40}}/>
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
            <Thumbnail large source={{uri: product.ownerAvatar}}/>
          </Col>
        </Grid>
        <Text style={styles.productDescription} numberOfLines={7}>
          {product.productDescription}
        </Text>
      </Content>
      <View style={styles.productBottomBar}>
        <Grid>
          <Col style={{flex: 0.6}}>
            <Text style={styles.productPrice}>
              {product.productPrice}
            </Text>
            <Text style={styles.productRating}>
              {product.productRating}
            </Text>
          </Col>
          <Col style={{flex: 0.6}}>
            <Button block success>
              <Text>Check Availability</Text>
            </Button>
          </Col>
        </Grid>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  productMetaContainer: {marginLeft: 20, marginRight: 20, paddingTop: 10},
  productImage: {height: 250, width: null},
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
  productPrice: {fontSize: 16, paddingTop: 6, fontWeight: '800'},
  productOwner: {fontWeight: '300', fontSize: 16},
  productLocation: {fontWeight: '300', fontSize: 15, marginTop: 3},
  productCategory: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#424242'
  },
  productRating: {fontSize: 16, fontWeight: '800', color: 'green'},
  productBottomBar: {
    bottom: 0,
    height: 75,
    paddingTop: 15,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#fff',
    borderColor: 'black',
    borderTopWidth: 0.3
  },
  productOwnerMeta: {height: 100, flex: 0.8, paddingTop: 20, marginLeft: 10},
  metaGrid: {marginTop: 20, marginBottom: 20},
  ownerMetaIcon: {height: 100, flex: 0.1, paddingTop: 19},
  ownerMetaAvatar: {height: 100, flex: 0.3}

})

export default ProductView
