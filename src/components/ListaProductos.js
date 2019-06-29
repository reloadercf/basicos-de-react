import React, { Component,Fragment } from 'react'
import Producto from './Producto'
class ListaProductos extends Component {
    //Primer forma de crear un state
    state = {
        //el state siempre debe ser un objeto cuando se utiliza en componente de clase
        productos:[
            {id:1, nombre:'camisa ReactJS', precio:30},
            {id:2, nombre:'camisa VueJs', precio:30},
            {id:3, nombre:'camisa Angular', precio:30},
            {id:4, nombre:'camisa Ionic', precio:30},
        ]
    }

    //Segunda forma de crear state
    // constructor(props){
    //     super(props);
    //     this.state=[
    //             {id:1, name:'camisa ReactJS', precio:30},
    //             {id:2, name:'camisa VueJs', precio:30},
    //             {id:3, name:'camisa Angular', precio:30},
    //             {id:4, name:'camisa Ionic', precio:30},
    //     ]
    // }
    render() { 
        let {productos}=this.state
        return ( <Fragment>
                    <h1>Lista de Productos</h1>
                    {productos.map(producto=>(
                        <Producto
                            key={producto.id}
                            producto={producto}
                        />
                    ))}
                </Fragment>);
    }
}
 
export default ListaProductos;