const mutation = {
    addCart(state,book){
      // state.cartList.push(book);

      let  product = state.cartList.find(item=>item.bookId === book.bookId);
      console.log(state.cartList);
      if(product){

        state.cartList=state.cartList.map(item=>{
          if(item.bookId===book.bookId){
            item.bookCount++;
          }
          return  item;
        });
      }else{
        console.log(100);
        book.bookCount = 1;
        state.cartList.push(book);
      }

    }
};
export default mutation;

