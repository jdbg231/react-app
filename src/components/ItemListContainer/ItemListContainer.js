const sum =(a,b) =>{

    console.log(a);
    console.log(b);

    return a+b
}

function ItemListContainer( {values=[]}) {

  const renderList = () =>  values
      .map(value => <div style={{backgroundColor: value.color, fontWeight: value.bold ? 600 : 400}}>{value.text}</div>)


    return <div >
        <p>Hello, I am </p>

        {renderList()}
    </div>;
}

export default ItemListContainer;