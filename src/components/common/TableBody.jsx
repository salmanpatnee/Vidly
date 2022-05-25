import React, { Component } from 'react';
 class TableBody extends Component {
     render() {
         
        const {data, columns} = this.props;
         return (
            <tbody>
            {
                data.map(item =>
                    <tr>
                        {columns.map(column => <td>{}</td>)}
                    </tr>
                )}
        </tbody>
         );
     }
 }
  
 export default TableBody;

//  <td>{movie.title}</td>
//                         <td>{movie.genre.name}</td>
//                         <td>{movie.numberInStock}</td>
//                         <td>{movie.dailyRentalRate}</td>
//                         <td className='text-center'>
//                             <Like
//                                 isLiked={movie.liked}
//                                 onClick={() => onLike(movie)} />
//                         </td>
//                         <td>
//                             <button
//                                 onClick={() => onDelete(movie)}
//                                 className='btn btn-danger'>
//                                 Delete
//                             </button>
//                         </td>