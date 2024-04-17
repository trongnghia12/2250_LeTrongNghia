import React from 'react';

const OrderComplete = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Đơn hàng của bạn đã được đặt thành công!</h2>
      <p style={styles.message}>Cảm ơn bạn đã mua hàng tại cửa hàng của chúng tôi. Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất để xác nhận đơn hàng.</p>
    </div>
  );
};

export default OrderComplete;

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '195px',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  message: {
    fontSize: '18px',
  },
};
