import { RotatingLines } from 'react-loader-spinner';

export function LoaderSpinner() {
  return (
    <div
      style={{
        marginTop: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <RotatingLines
        strokeColor="#F59256"
        strokeWidth="5"
        animationDuration="0.75"
        width="150"
        visible={true}
      />
    </div>
  );
}
