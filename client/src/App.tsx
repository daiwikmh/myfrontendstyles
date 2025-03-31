
import HomeBeforeLogin from './pages/HomeBeforeLogin';
import HomeAfterLogin from './pages/HomeAfterLogin';
import { useAccount } from 'wagmi';

function App() {

  const { isConnected } = useAccount();
  return (
    <>
      {isConnected ? (
        <HomeAfterLogin />
      ) : (
        <HomeBeforeLogin />
      )}
    </>
  );
}

export default App;

// Updated HomeAfterLogin component with subscription check
