import { Link } from "react-router-dom"
export const Error = () => {
  return (
    <div class="alert alert-danger m-auto" role="alert">
      <h4 class="alert-heading">SOMETHING WENT WRONG!</h4>
      <p>Below are the possible reasons of this error.</p>
      <ul>
        <li>Wrong URL</li>
        <li>Unstable Internet connection</li>
        <li>API Connection problems</li>
      </ul>
      <hr/>
      <Link to="/" className='text-center'>
                <button type="button" className="btn btn-primary">Back Home</button>
            </Link>
    </div>
  )
}
