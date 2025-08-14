import { Horizon } from 'stellar-sdk';
import accounts from '../accounts.json' with { type: 'json' };
import util from 'util';

const server = new Horizon.Server("https://horizon-testnet.stellar.org");

const checkAccounts = async accounts => {
    const accountDetails = await Promise.all(
        accounts.map(async account => await server.loadAccount(account.publicKey))
    );

    return accountDetails.map(account => {
        return {
            accountPublicKey: account.id,
            balance: account.balances
        };
    });

}

checkAccounts(accounts).then(
    accountBalances => {
        console.log("Account balances checked successfully");
        console.log(util.inspect(accountBalances, false, null));
    }
).catch(error => {
    console.error("Error checking account balances:");
    console.error(error);
});