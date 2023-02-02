function List({todos}) {
    return (  
        <div>
            <div className="display-1 text-secondary">List</div>
        {
            todos.map((todo,idx)=> <div className="display-6" key={idx}>{todo}</div> )
        }
        </div>
    );
}

export default List;