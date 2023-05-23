$(function(){
    const pokemon = 
[
  {name:'Bulbasaur', num:'#001', btn01:'Grass', btn02:'Poiser', img:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png', height:'0.7m', weight:'6.9Kg', category: 'Seed', abilities:'Overgrow'},
  {name:'Ivysaurr', num:'#002', btn01:'Grass', btn02:'Poiser', img:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png', height:'1.0m', weight:'13.0Kg', category: 'Seed', abilities:'Overgrow'},
  {name:'Venusaur', num:'#003', btn01:'Grass', btn02:'Poiser', img:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png', height:'2.0m', weight:'100.0Kg', category: 'Seed', abilities:'Overgrow'},
  {name:'Chamander', num:'#004', btn01:'fire', btn02:'', img:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png', link:''},
  {name:'Charmeleon', num:'#005', btn01:'fire', btn02:'', img:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png', link:''},
  {name:'Charizard', num:'#006', btn01:'fire', btn02:'', img:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png', link:''},
  {name:'Squirtle', num:'#007', btn01:'Grass', btn02:'Poiser', img:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png', link:''},
  {name:'Wartortle', num:'#008', btn01:'Grass', btn02:'Poiser', img:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png', link:''},
  
]


pokemon.map((i)=>{
    var caixa = $('.box')
    caixa.html(`
      <div  class="container">
        <div class="topo">
            <div class="icons space"> <box-icon color="#fff" name='chevron-left'></box-icon> <box-icon color="#fff" name='heart'></box-icon> </div>
            <h2>${i.name} </h2>
            <div class="btns margin">
                <button class="corGrass">${i.btn01} </button>
                <button class="corPosion">${i.btn02}</button>
                <div class="num">${i.num} </div>
            </div>
            <img src=${i.img} alt="">
        </div>

        <div class="base brd">
            <li>Height: <b> ${i.height} </b> </li>
            <li>Weight: <b>${i.weight} </b></li>
            <li>Categoria: <b>${i.category}</b> </li>
            <li>Abilities: <b>${i.abilities}</b> </li>

        </div>
     </div>

    `)
})


})

