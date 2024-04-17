import React, { useState } from 'react';

const Register = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Mật khẩu xác nhận không khớp.');
      return;
    }
    // Thực hiện xử lý đăng ký, ví dụ: gửi dữ liệu đăng ký đến server
    console.log('Username:', username);
    console.log('Password:', password);
    // Sau khi xử lý đăng ký, bạn có thể đóng modal hoặc thực hiện hành động khác
    onClose();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#326e51', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <img src={`${process.env.PUBLIC_URL}/images/login.png`} alt="Register" style={{ marginRight: '20px', width: '300px', height: '300px' }} />
        <div style={{ color: '#fff' }}>
          <h2 style={{ marginBottom: '20px' }}>Đăng Ký</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="username" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Tên đăng nhập:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: '250px', padding: '10px', border: '1px solid #cccccc', borderRadius: '20px', outline: 'none' }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="password" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Mật khẩu:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '250px', padding: '10px', border: '1px solid #cccccc', borderRadius: '20px', outline: 'none' }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="confirmPassword" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Xác nhận mật khẩu:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ width: '250px', padding: '10px', border: '1px solid #cccccc', borderRadius: '20px', outline: 'none' }}
              />
            </div>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <button type="submit" style={{ width: '100px', padding: '10px', backgroundColor: '#fff', fontWeight: 'bold', color: '#326e51', border: 'none', borderRadius: '20px', cursor: 'pointer', outline: 'none', transition: 'background-color 0.3s' }}>Đăng Nhập</button>
            
            <button type="button" onClick={onClose} style={{ marginLeft: '70px', width: '100px', padding: '10px', backgroundColor: '#fff', fontWeight: 'bold', color: '#326e51', border: 'none', borderRadius: '20px', cursor: 'pointer', outline: 'none', transition: 'background-color 0.3s' }}>Đăng Kỳ</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
