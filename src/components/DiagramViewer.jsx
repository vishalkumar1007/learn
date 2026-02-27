export default function DiagramViewer({ children, style = {} }) {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '880px',
        height: '320px',
        padding: '0 8px',
        margin: '0 auto',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
