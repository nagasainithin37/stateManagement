  import { useForm } from 'react-hook-form'

function Entry({todos,setTodos}) {
    
const {register,handleSubmit,formState:{errors}}=useForm()

var onFormSubmit=(obj)=>{
    setTodos([...todos,obj.todo])
    console.log(obj)
}

    return ( 
    <div>
        <div className="display-1 text-primary">Entry</div>
        <form onSubmit={handleSubmit(onFormSubmit)}>

        <input className='form-control mt-4' type="text"  {...register('todo',{required:true})} />
        <button className="btn btn-primary mt-3" type="submit" >Submit</button>
        </form>

    </div> );
}           


export default Entry;           
