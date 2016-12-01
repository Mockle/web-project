function FrontPage(){
	return(
		<div>
			<HorrizontalNav />
			<div id="mainContent" className="rowControl">
				<SelectForm />			
			</div>
		</div>
	)
}

function LoginPage(){
	return(
		<div id="mainContent">
			<HorrizontalNav />
			<div className="pure-g">
				<LoginForm />
			</div>
		</div>
	)
}

function SelectForm(){
	return(
		<form className="pure-form">
			<fieldset>
				<legend>Query the database!</legend>

				<input id="inputThing" type="text" placeholder="Query..." />
				<button id="buttonThing" className="pure-button pure-button-primary btnMargin">Query</button>
			</fieldset>
		</form>
	)
}

function SideBarNav(props){
	return(
		<div className={props.className}>
			<div className="pure-menu custom-restricted-width">
			    <span className="pure-menu-heading">Navigation</span>

			    <ul className="pure-menu-list">
			        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Batman</a></li>
			        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Super Man</a></li>
			        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Green Arrow</a></li>
			        <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
			            <a href="#" id="menuLink1" className="pure-menu-link">Universe</a>
			            <ul className="pure-menu-children">
			                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Marvel Comics</a></li>
			                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Other Comics</a></li>
			            </ul>
			        </li>
			    </ul>
			</div>
		</div>
	);
}

function HorrizontalNav(props){
	return(
		<div className="pure-menu pure-menu-horizontal">
		    <a href="/index" className="pure-menu-heading">LOGO</a>

		    <ul className="pure-menu-list">
		        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Batman</a></li>
		        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Super Man</a></li>
		        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Green Arrow</a></li>
		        <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
		            <a href="#" id="menuLink1" className="pure-menu-link">Universe</a>
		            <ul className="pure-menu-children">
		                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Marvel Comics</a></li>
		                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Other Comics</a></li>
		            </ul>
		        </li>
		        <li className="pure-menu-item"><a href="/login" className="pure-menu-link">Login</a></li>
		    </ul>
		</div>
	);
}

function LoginForm(){
	return(
		<div className="pure-u-1-2">
			<form className="pure-form pure-form-aligned">
			    <fieldset>
			    	<div className="legendControl">
			    		<legend >Login</legend>
			    	</div>

			        <div className="pure-control-group">
				        <label htmlFor="email">Email</label>
				        <input id="email" type="email" placeholder="Email" />
			        </div>

			        <div className="pure-control-group">
				        <label htmlFor="password">Password</label>
				        <input id="password" type="password" placeholder="Password" />
			        </div>

			        <div className="pure-control-group">
					    <label htmlFor="remember" className="pure-checkbox">Remember Me</label>
					    <input id="remember" type="checkbox" />
				    </div>

			        <div className="pure-controls">
			        	<button type="submit" className="pure-button pure-button-primary">Sign in</button>
			        </div>
			    </fieldset>
			</form>
		</div>
	);
}

function RegisterForm(){
	return(
		<div className="pure-u-1-2">
			<form className="pure-form pure-form-aligned">
				    <fieldset>
				    	<div className="legendControl">
				    		<legend >Register</legend>
				    	</div>

				        <div className="pure-control-group">
					        <label htmlFor="emailRegister">Email</label>
					        <input id="emailRegister" type="email" placeholder="Email" />
				        </div>

				        <div className="pure-control-group">
					        <label htmlFor="passwordRegister">Password</label>
					        <input id="passwordRegister" type="password" placeholder="Password" />
				        </div>

				        <div className="pure-controls">				        
				        	<button type="submit" className="pure-button pure-button-primary">Sign in</button>
				        </div>
				    </fieldset>
				</form>
		</div>
	);

}