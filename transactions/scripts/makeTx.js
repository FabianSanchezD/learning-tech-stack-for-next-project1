import {
  Horizon,
  Keypair,
  TransactionBuilder,
  Operation,
  Asset,
  Networks,
  TimeoutInfinite,
} from '@stellar/stellar-sdk';
import accounts from "../accounts.json" with { type: "json" };

const server = new Horizon.Server('https://horizon-testnet.stellar.org');

const alice = Keypair.fromSecret(accounts[0].secret);
const bobPublic = accounts[1].publicKey;

(async () => {
  const baseFee = await server.fetchBaseFee();
  const account = await server.loadAccount(accounts[0].publicKey);

  const tx = new TransactionBuilder(account, {
    fee: String(baseFee),
    networkPassphrase: Networks.TESTNET,
  })
    .addOperation(Operation.payment({
      destination: bobPublic,
      asset: Asset.native(),
      amount: '150',
    }))
    .setTimeout(TimeoutInfinite)
    .build();

  tx.sign(alice);

  try {
    const res = await server.submitTransaction(tx);
    console.log('OK', res.hash);
  } catch (err) {
    console.error('Submit failed:', err.response?.data ?? err);
  }
})();
