
import { useParams,Link } from 'react-router-dom';
import { Error } from './Error';

export const User = ({ users }) => {
    const { userId } = useParams();
    const user = users.find((user) => user.id === +userId); // I put a + to convert string to number
    if(!user){
        return <Error/>
    }
    const { name, username, email, phone, company, website, address } = user;
    return (
        <div className="container d-flex justify-content-center p-4">
        <div className="container-fluid text-center" style={{maxWidth:"600px"}}>
            <table className="table table-striped text-start">
                <tbody>
                    <tr>
                        <th scope="row">Name</th>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Username</th>
                        <td>{username}</td>
                    </tr>
                    <tr>
                        <th scope="row">Email</th>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <th scope="row">Phone</th>
                        <td>{phone}</td>
                    </tr>
                    <tr>
                        <th scope="row">Company</th>
                        <td>{company.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Website</th>
                        <td>{website}</td>
                    </tr>
                  
                    <tr>
                        <th scope="row">Address</th>
                        <td rowSpan='4'>
                            Street: {address.street} <br/>
                            Suite: {address.suite} <br/>
                            City: {address.city} <br/>
                            Zipcode:{address.zipcode} <br/>
                        </td>
                    </tr>
                   
                </tbody>
            </table>
            <Link to="/" className='text-center'>
                <button type="button" className="btn btn-primary">Back Home</button>
            </Link>
        </div>
        </div>
    )
}
