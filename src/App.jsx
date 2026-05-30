import { AnimatePresence, motion } from 'framer-motion';
import { MainLayout } from './layouts/MainLayout.jsx';
import { HomePage } from './pages/HomePage.jsx';

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        <MainLayout>
          <HomePage />
        </MainLayout>
      </motion.div>
    </AnimatePresence>
  );
}
