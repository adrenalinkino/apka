import { ErrorTrackingService } from './src/services/ErrorTrackingService';
import { UpdateService } from './src/services/UpdateService';
import UpdateModal from './src/components/UpdateModal';

// В компоненті App
useEffect(() => {
  ErrorTrackingService.init();
}, []); 

const App = () => {
  const [updateAvailable, setUpdateAvailable] = useState(null);

  useEffect(() => {
    checkForUpdates();
  }, []);

  const checkForUpdates = async () => {
    const update = await UpdateService.checkForUpdates();
    if (update) {
      setUpdateAvailable(update);
    }
  };

  return (
    <>
      {/* Ваш основний контент */}
      {updateAvailable && (
        <UpdateModal 
          update={updateAvailable}
          onClose={() => setUpdateAvailable(null)}
        />
      )}
    </>
  );
}; 