import React from "react";
import Table from 'react-bootstrap/Table';
import Swal from 'sweetalert2';
import BasicTable from './BasicTable';


class WishList extends  React.Component{

    constructor(props) {
        super(props);
        this.state = {
            productName: null,
            productImage: null,
            productPrice: 0,
            productQuantity: 0,
        }
    }

    deleteProduct = ()=>{
        Swal.fire('Deleted');
    }

    modalData = (productName, productImage, productPrice, productQuantity) => {
        this.setState({
          productName: productName,
          productImage: productImage,
          productPrice: productPrice,
          productQuantity: productQuantity
        });
      };

    render(){
        return(
           
            <div>

                <BasicTable/>
              
{/* 
<Table>
  <thead>
    <tr>
      <th>ItemName</th>
      <th>Image</th>
      <th>Price</th>
      <th>Quantity</th>
      <th></th>
    </tr>
  </thead>
  <tbody> */}
    {/* <tr>
      <td>{this.state.productName}</td>
      <td>{this.state.productImage}</td>
      <td>{this.state.productPrice}</td>
      <td>{this.state.productQuantity}</td>
      <td><a href="#" onClick={this.deleteProduct}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg></a></td>
    
    </tr> */}
    {/* <tr>
      <td>Camera HD</td>
      <td> <img style={{ width: '8rem', height: '8rem'}} src="https://mediadesknm.com/wp-content/uploads/2018/09/photographer-698908_960_720.jpg" class="img-fluid img-thumbnail" alt="prodImage"></img></td>
      <td>500$</td>
      <td>2</td>
      <td><a href="#" onClick={this.deleteProduct}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg></a></td>
    
    </tr>
  </tbody>
</Table> */}

            </div>
        )
    }
}

export default WishList;