import React from "react";
import { Card, Button} from 'react-bootstrap';
import { Redirect } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationMenu from '../components/NavigationMenu.js';
import { setAuthedUser, handleSetAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userId : ''};
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state = {
        redirectTo: false,
    }

    handleChangeUser(event) {
        console.log("logins page user id: " , this.state.userId)
        this.setState({userId: event.target.value});
       
    }
    
    handleSubmit(event) {
    const { userId } = this.state;
    const { authenticate } = this.props;
    if (userId) {
        authenticate(userId);
    } else {
        alert('Select a user, please');
    }
    event.preventDefault();
    this.setState({
        redirectTo: true
      })
    }
        
    render() {
        const { users } = this.props;
        const { userId } = this.state;
        const { redirectTo } = this.state
        if (redirectTo) {
            return <Redirect to= {{ pathname: "/" }} />
          }
        return (
            <body id="custom">
                <NavigationMenu/>
                <div class="container login-page">
                    <Card >
                        <Card.Header className='card-header' as="h5">
                            <p class="card-title">Welcome to the Would You Rather App!</p>
                            <p class="card-text">Please sign in to continue</p>
                        </Card.Header>
                        <Card.Body>
                        <div className="app-logo">
                            <img />
                        </div>
                        <h4 class="card-title text-signin">Sign In</h4>
                        <div class="form-group">
                            <label for="canbedeleted"> </label>
                            <select 
                            id="userSelect"
                            type="select"
                            name="select"
                            value={userId}
                            onChange={this.handleChangeUser}
                            class="form-control">
                                <option value="" disabled>Please select</option>
                                {
                                Object.keys(users).map(user =>
                                <option key={user} value={user}>
                                    {users[user].name}
                                </option>)
                                }
                            </select>
                        </div>
                        <Button  disabled={userId === ''} onClick={this.handleSubmit} className='btn-signin'>Sign In</Button>
                        </Card.Body>
                    </Card>  
                </div>
        </body>
        );
    }
}
function mapStateToProps ({ users }) {
    return {
      users
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      authenticate: (id) => {
        dispatch(setAuthedUser(id))
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)