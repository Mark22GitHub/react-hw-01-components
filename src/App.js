import Profile from './Components/Profile/Profile';
import Statistics from './Components/Statistics/Statistics';
import FriendList from './Components/FriendList/FriendList';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';

import user from './JSON/user.json';
import statisticalData from './JSON/statistical-data.json';
import friends from './JSON/friends.json';
import transactions from './JSON/transactions.json';

const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      {/* <Statistics stats={statisticalData} />; */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
