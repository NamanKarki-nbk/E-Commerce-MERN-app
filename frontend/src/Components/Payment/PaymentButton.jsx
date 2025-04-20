import React from 'react';

class PaymentButton extends React.Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    const script = document.createElement('script');
    script.src =
      'https://khalti.s3.ap-south-1.amazonaws.com/KPG/dist/2020.12.17.0.0.0/khalti-checkout.iffe.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      this.initializeKhaltiCheckout();
    };
  }

  initializeKhaltiCheckout = () => {
    const config = {
      publicKey: 'test_public_key_dc74e0fd57cb46cd93832aee0a390234',
      productIdentity: '1234567890',
      productName: 'Dragon',
      productUrl: 'http://gameofthrones.wikia.com/wiki/Dragons',
      paymentPreference: [
        'KHALTI',
        'EBANKING',
        'MOBILE_BANKING',
        'CONNECT_IPS',
        'SCT',
      ],
      eventHandler: {
        onSuccess: (payload) => {
          console.log('Success:', payload);
        },
        onError: (error) => {
          console.log('Error:', error);
        },
        onClose: () => {
          console.log('Widget is closing');
        },
      },
    };

    this.checkout = new window.KhaltiCheckout(config);
    this.setState({ isReady: true });
  };

  handlePaymentClick = () => {
    if (this.checkout) {
      this.checkout.show({ amount: 1000 }); // Amount is in paisa (1000 = Rs.10)
    }
  };

  render() {
    return (
      <button
        onClick={this.handlePaymentClick}
        disabled={!this.state.isReady}
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          backgroundColor: '#5e338d',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: this.state.isReady ? 'pointer' : 'not-allowed',
        }}
      >
        Pay with Khalti
      </button>
    );
  }
}

export default PaymentButton;
