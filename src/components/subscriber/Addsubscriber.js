import './Subscriber.css';
import { useForm } from "react-hook-form";
import Container from '../template/Container';
const Addsubscriber=(props)=>{
    const onsubmithandler=(events)=>{
        events.preventDefault();
    }
    return(
        
        <div>
            <form onSubmit={onsubmithandler}>
            <Container className="input">
            <label htmlFor='name'>Name</label>
            <input id='name' type='text'></input>
            <label htmlFor='Emial'>E-mail</label>
            <input id='Email' type='text'></input>
            <label htmlFor='Number'>Phone-no</label>
            <input id='Number' type='number'></input>
            <button type='submit'> Addsubscriber</button>
            </Container>
            </form>
             </div>
    )
}
export default Addsubscriber
