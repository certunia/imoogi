function TopSection(props) {
  return (
    <div className='top-section wrap'>
      <h1>{props.title}</h1>
      <div>{props.children}</div>
    </div>
  )
}

export default TopSection
