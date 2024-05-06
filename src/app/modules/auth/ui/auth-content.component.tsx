function AuthContentComponent({ bannerHeader, bannerDesc, className }: any) {
  return (
    <div className={className}>
      <div className="auth-content">
        <h1 className="light heading mb-5 lh-sm">{bannerHeader}</h1>
        <p className="light">{bannerDesc}</p>
      </div>
    </div>
  );
}

export default AuthContentComponent;
