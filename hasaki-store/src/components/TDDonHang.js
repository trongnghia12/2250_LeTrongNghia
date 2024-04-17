import React from 'react';

const OrderDetailPage = () => {
  const orders = [
    {
      id: 'ORD123456',
      status: 'Đang xử lý',
      date: '10/04/2024',
      address: '123 Đường ABC, Quận XYZ, Thành phố HCM',
      total: '1.000.000đ',
    },
    {
      id: 'ORD123457',
      status: 'Đang giao hàng',
      date: '15/04/2024',
      address: '456 Đường XYZ, Quận ABC, Thành phố HCM',
      total: '2.500.000đ',
    },
    
  ];

  const getOrderStatusColor = (status) => {
    switch (status) {
      case 'Đang xử lý':
        return '#ff5f00'; // Màu cam
      case 'Đang giao hàng':
        return '#007bff'; // Màu xanh dương
      case 'Hoàn thành':
        return '#28a745'; // Màu xanh lá cây
      case 'Đã hủy':
        return '#dc3545'; // Màu đỏ
      default:
        return '#000000'; // Màu đen mặc định
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Chi tiết đơn hàng</h2>
      {orders.map((order) => (
        <div key={order.id} style={styles.orderInfo}>
          <div style={styles.orderItem}>
            <span style={styles.label}>Mã đơn hàng:</span>
            <span style={styles.value}>{order.id}</span>
          </div>
          <div style={styles.orderItem}>
            <span style={styles.label}>Trạng thái:</span>
            <span style={{ ...styles.value, color: getOrderStatusColor(order.status) }}>{order.status}</span>
          </div>
          <div style={styles.orderItem}>
            <span style={styles.label}>Ngày đặt hàng:</span>
            <span style={styles.value}>{order.date}</span>
          </div>
          <div style={styles.orderItem}>
            <span style={styles.label}>Địa chỉ giao hàng:</span>
            <span style={styles.value}>{order.address}</span>
          </div>
          <div style={styles.orderItem}>
            <span style={styles.label}>Tổng tiền:</span>
            <span style={styles.value}>{order.total}</span>
          </div>
        </div>
      ))}
      <button style={styles.button}>In đơn hàng</button>
      <button style={styles.button}>Chia sẻ đơn hàng</button>
    </div>
  );
};

export default OrderDetailPage;

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '50px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  orderInfo: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
  },
  orderItem: {
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  label: {
    fontWeight: 'bold',
    marginRight: '10px',
  },
  value: {
    flex: '1',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '4px',
    backgroundColor: '#ff5f00',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    marginRight: '10px',
  },
};
