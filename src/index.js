import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Pokemon(props) {  
    return <div id="pokemon">
	Pokemon name: {props.name}
	</div>;
}


class Pokedex extends React.Component {
	
	constructor() {
		super();
		this.state = {
			//pokemons:["gil","gil21","gil3"],
			pokemons:[],
			currentPokemon:0
		};
		
		this.addPokemonClick=this.addPokemonClick.bind(this);
		
	}
	
	addPokemonClick(){
		this.state.pokemons.push(this.input.value);
		this.state.currentPokemon = this.state.pokemons.length;
		this.setState({pokemons:this.state.pokemons,
					   currentPokemon:this.state.currentPokemon});
	}
		
  
  
  render() {
    return (     	
	  <div id="allPokemons">
			<div>		   		  
			<input ref={(input) => this.input = input} ></input>
			<button onClick={this.addPokemonClick}>Click to add more pokemons</button>		  		 		   		   		   		  
			</div>		   
		    {
				this.state.pokemons.map(function(p){
					return <Pokemon key={p} name={p}/>
				})
			}		
			{this.state.currentPokemon}

			
	  </div>	  		  
    );
  }
}

// ========================================

ReactDOM.render(
  <Pokedex/>,
  document.getElementById('root')
	);
