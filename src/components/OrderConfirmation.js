import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { Text, Container, Grid, Col, Content } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'
import { getDateInWords, getFullAddress, getTotalPrice, roundToTwoFixedDecimalPlaces } from '../common/helpers'

const OrderConfirmation = props => {
  const { product, quantity, deliveryDate, invoiceNumber, deliveryAddressLine1, deliveryAddressLine2, city, province, contact, status } = props.order
  const { productTitle, productPrice, lotSize, productOwner } = product
  const subTotalPrice = roundToTwoFixedDecimalPlaces(getTotalPrice(quantity, productPrice))
  const vatableSales = roundToTwoFixedDecimalPlaces(subTotalPrice / 1.12)
  const formattedDate = getDateInWords(deliveryDate)
  const vat = roundToTwoFixedDecimalPlaces(subTotalPrice * 0.12)
  const fullAddress = getFullAddress(deliveryAddressLine1, deliveryAddressLine2, city, province)
  return (
    <Container>
      <View style={styles.container}>
        <Image style={styles.bgImage} source={require('../assets/images/green-leaf.jpeg')}/>
        <Container style={styles.invoice}>
          <Text style={styles.invoiceNumber}>{invoiceNumber}</Text>
          <Text style={styles.invoiceLabel}>Sold by {productOwner}</Text>
        </Container>
        <Container style={styles.pricing}>
          <Text style={styles.headingHeader}>₱{productPrice}</Text>
          <Text style={styles.priceLabel}>Total Due</Text>
        </Container>
        <Container style={styles.deliveryStatusContainer}>
          <Text style={styles.deliveryStatus}>{status}</Text>
        </Container>
      </View>
      <Content>
        <View style={styles.deliveryInformation}>
          <Text style={styles.deliveryInformationHeading}>Delivery Information</Text>
          <Grid>
            <Col style={styles.onePointFlex}>
              <Text style={styles.deliveryInformationText}><Icon name={'ios-calendar-outline'} style={styles.icon}/>{'  '}{formattedDate}</Text>
            </Col>
            <Col style={styles.onePointFlex} last>
              <Text style={styles.deliveryInformationText}><Icon name={'ios-call-outline'} style={styles.icon}/>{'  '}{contact}</Text>
            </Col>
          </Grid>
          <Text style={styles.deliveryInformationText}><Icon name={'ios-home-outline'} style={styles.icon}/>{'  '}{fullAddress}</Text>
        </View>

        <View style={styles.orderSummary}>
          <Container style={{height: 120}}>
            <Grid>
              <Col style={{ flex: 6 }}>
                <Text style={styles.summaryHeading}>Item</Text>
                <Text style={styles.regularText} numberOfLines={1}>{productTitle}</Text>
                <Text style={styles.regularText}>{quantity}{quantity > 1 ? ' pcs' : ' pc '} pcs x ₱{roundToTwoFixedDecimalPlaces(productPrice)}</Text>
                <Text style={styles.regularText}>{lotSize}{lotSize > 1 ? ' pcs' : ' pc '} per lot</Text>
              </Col>
              <Col style={{ flex: 3 }} last>
                <Text style={styles.summaryHeading}>Subtotal</Text>
                <Text style={styles.subTotal} numberOfLines={1}>₱{subTotalPrice}</Text>
              </Col>
            </Grid>
          </Container>
          <View style={styles.line}/>
          <Container style={{height: 140, paddingTop: 20}}>
            <Grid>
              <Col style={{ flex: 6 }}>
                <Text style={styles.totalPricingSummaryLabel}>VATABLE SALES</Text>
                <Text style={styles.totalPricingSummaryLabel}>VAT</Text>
                <Text style={styles.totalPricingSummaryLabel}>TOTAL</Text>
              </Col>
              <Col style={{ flex: 3 }} last>
                <Text style={styles.totalPricingSummary} numberOfLines={1}>₱{vatableSales}</Text>
                <Text style={styles.totalPricingSummary} numberOfLines={1}>₱{vat}</Text>
                <Text style={styles.totalPricingSummary} numberOfLines={1}>₱{subTotalPrice}</Text>
              </Col>
            </Grid>
          </Container>

        </View>
      </Content>
    </Container>

  )
}

const styles = StyleSheet.create({
  onePointFlex: {
    flex: 1
  },
  deliveryInformationHeading: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 15
  },
  deliveryInformation: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
  deliveryInformationText: {
    fontSize: 16,
    marginBottom: 6
  },
  icon: {
    fontSize: 24
  },
  line: {
    borderBottomColor: '#8a8c95',
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 5
  },
  summaryHeading: {
    marginBottom: 8,
    fontSize: 24
  },
  subTotal: {
    color: '#8a8c95',
    fontSize: 18
  },
  totalPricingSummary: {
    color: '#8a8c95',
    fontSize: 18,
    marginBottom: 25
  },
  totalPricingSummaryLabel: {
    color: 'black',
    fontSize: 18,
    textAlign: 'right',
    paddingRight: 20,
    fontWeight: 'bold',
    marginBottom: 25
  },
  deliveryStatus: {
    color: 'white',
    fontSize: 19
  },
  deliveryStatusContainer: {
    position: 'absolute',
    right: 20,
    top: 115
  },
  invoiceLabel: {
    fontSize: 15,
    color: 'white'
  },
  invoiceNumber: {
    fontSize: 24,
    color: 'white'
  },
  invoice: {
    marginLeft: 20,
    marginTop: 110
  },
  pricing: {
    marginLeft: 20
  },
  bgImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    maxHeight: 300
  },
  headingHeader: {
    fontSize: 44,
    color: 'white'
  },
  priceLabel: {
    fontSize: 18,
    color: 'white'
  },
  orderSummary: {
    flex: 1,
    padding: 20
  },
  regularText: {
    fontSize: 16,
    marginBottom: 2,
    color: '#8a8c95'
  }
})

export default OrderConfirmation
