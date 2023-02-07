const { NavLink } = require('react-router-dom');

function NotFoundPage() {
  return (
    <div
      style={{
        marginTop: '100px',
        textAlign: 'center',
      }}
    >
      <h1 style={{ marginBottom: '40px' }}>Such page does not exist :(</h1>
      <NavLink
        to={'/'}
        style={{
          color: 'var(--accent)',
          fontSize: '20px',
          textDecoration: 'underline',
        }}
      >
        Go to homepage
      </NavLink>
    </div>
  );
}
export default NotFoundPage;
