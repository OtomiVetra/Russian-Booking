const OrderInfo = ({ info }) => {
  return (
    <div>
      <p>Days: {info.days}</p>
      <p>total price: {info.totalPrice}</p>
    </div>
  )
}

export default OrderInfo;