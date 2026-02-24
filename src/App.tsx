import { useMedplumProfile } from '@medplum/react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { SignInPage } from './pages/SignInPage';

export function App(): JSX.Element {
  const profile = useMedplumProfile();

  return (
    <Routes>
      <Route path="/" element={profile ? <HomePage /> : <SignInPage />} />
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  );
}
