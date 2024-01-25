import React from 'react';
import styles from '../styles/Donation.module.css'; // Assume this is your CSS module

function Donation() {
  const wallets = [
    { 
      name: 'Bitcoin', 
      logo: '/path/to/bitcoin-logo.png', // Replace with actual path
      addresses: ['1BitcoinAddress...', '1BitcoinAddress2...'] 
    },
    { 
      name: 'Ethereum', 
      logo: '/path/to/ethereum-logo.png', // Replace with actual path
      addresses: ['0xEthereumAddress...'] 
    },
    // Add more chains here
  ];

  return (
    <div className={styles.donationPage}>
      <h1 className={styles.title}>Support Us with Crypto Donations</h1>
      <div className={styles.walletList}>
        {wallets.map((wallet, index) => (
          <div key={index} className={styles.walletCard}>
            <img src={wallet.logo} alt={`${wallet.name} logo`} className={styles.walletLogo}/>
            <h2 className={styles.walletName}>{wallet.name}</h2>
            <ul className={styles.addressList}>
              {wallet.addresses.map((address, index) => (
                <li key={index} className={styles.address}>{address}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Donation;
