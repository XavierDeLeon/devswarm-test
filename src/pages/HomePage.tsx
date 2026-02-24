import { useMedplum, useMedplumProfile } from '@medplum/react';
import { ResourceName } from '@medplum/react';

export function HomePage(): JSX.Element {
  const medplum = useMedplum();
  const profile = useMedplumProfile();

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Welcome</h1>
      {profile && (
        <p>
          Signed in as: <ResourceName value={profile} />
        </p>
      )}
      <p>
        Connected to: <code>{medplum.getBaseUrl()}</code>
      </p>
      <button onClick={() => { medplum.signOut(); window.location.reload(); }}>
        Sign out
      </button>
    </div>
  );
}
