export function Title (props) {
  const styles = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'gray'
  }

  return (
    <h1 style={styles}>
      {props.children}
    </h1>
  )
}
