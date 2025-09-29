import '../css/PageLoading.css';

export default function PageLoading({ message = 'Loading…' }) : React.ReactElement {
  return (
    <div className="page-loading" role="alert" aria-live="polite" aria-busy="true">
      <div className="page-loading__bg" aria-hidden="true" />
      <div className="page-loading__scrim" aria-hidden="true" />
      <div className="page-loading__content">
        <div className="page-loading__spinner" aria-hidden="true" />
        <p className="page-loading__message">{message}</p>
      </div>
    </div>
  );
}
