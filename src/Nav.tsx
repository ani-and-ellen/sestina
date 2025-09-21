const Nav = () => {
	return (
		<div style = {{ height: "5rem", display: "flex", justifyContent: "right" }}>
			<div style = {{ display: "flex", alignItems: "center" }}> 
				<a href="/" style = {{ padding: "2rem" }}> Home</a>
				<a href="/about" style = {{ padding: "2rem" }}>About</a>
			</div>
		</div>
	)
}  

export { Nav };