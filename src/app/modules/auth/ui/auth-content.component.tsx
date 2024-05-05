function AuthContentComponent({ bannerHeader, bannerDesc, className }: any) {
  return (
    <div className={className}>
      <div className="auth-content">
        <h2 className="light heading mb-5 lh-sm">{bannerHeader}</h2>
        <p className="light">{bannerDesc}</p>
      </div>
    </div>
  );
}

export default AuthContentComponent;
