const Wrapper =
  <P extends object>(Component: React.ComponentType<P>): React.FC<P> =>
  ({ ...props }) =>
    (
      <div className="wrapper">
        {' '}
        <Component {...(props as P)} />
      </div>
    );
export default Wrapper;
