import { Link } from 'react-router-dom';
export const Home = ({ users }) => {

    return (
        <main className='container-fluid row justify-content-center gap-5 p-4'>
            {
                users.map((user) => {
                    return <div key={user.id} className="card text-center col-lg-4" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <div className='d-flex justify-content-center align-items-center'>
                                <p className="rounded-circle bg-secondary m-auto text-light mb-3" style={{ width: '100px', height: '100px', fontSize: '3.4rem' }}>{user.name[0]}</p>
                            </div>
                            <h5 className="card-title mb-3">{user.name}</h5>
                            <i className="d-block mb-3">@{user.username}</i>
                            <a className='d-block mb-3' href={`http://${user.website}`}>http://{user.website}</a>
                            <Link style={{ textDecoration: 'none' }} to={`/users/${user.id}`}>
                                <button type="button" className="btn btn-primary">MORE DETAILS</button>
                            </Link>
                        </div>
                    </div>
                })
            }
        </main>
    )
}
