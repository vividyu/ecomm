import { useState } from "react";
import { Link } from 'react-router-dom';
import ikun from "../assets/ikun.png";
import './Login.css';
import { connect } from 'react-redux';
import { actions } from "../actions/actionCreator";
import { Constants } from "../constants";

function Login(props) {
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");

    function handleLogin() {
        if (!user) {
            setUser("");
            setPwd("");
            return
        };

        const credential = { user: user, password: pwd };
        let isValidUser = false;
        const userInfo = props.userInfo;
        //console.log(userInfo);

        userInfo.forEach(userInfo => {
            if (userInfo.user === credential.user && userInfo.pwd === credential.password) {
                isValidUser = true;
            }
        });

        if (isValidUser) {
            const prevUser = props.curUser;
            props.setCurUser(user);

            //must create bag before merging
            props.createBags(user);

            if (prevUser === Constants.GUEST_USER && user !== Constants.GUEST_USER) {
                console.log("merge called");
                props.mergeBags(prevUser, user);
            }

        } else {
            console.log("Invalid user or password");
            alert("Invalid user or password");
        }
        setUser("");
        setPwd("");
    }

    return (
        <div className="login-container">
            <img className="ikun" src={ikun} alt="ikun"></img>
            <div className="input-box">
                {"Currently you are signed as: "}
                <span id="userDisplay">{props.curUser}</span>
            </div>
            <div className="input-box">
                {"User: "}
                <input value={user} onChange={e => setUser(e.target.value)}></input>
            </div>
            <div className="input-box">
                {"Password: "}
                <input value={pwd} onChange={e => setPwd(e.target.value)}></input>
            </div>
            <div className="input-box">
                <button onClick={handleLogin}>Sign in</button>
            </div>
            <Link className="back-link" to="/">Back</Link>
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        userInfo: state.userInfo,
        curUser: state.curUser,
        userBag: state.userBag,
    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        //addItem: (user, product, quantity) => dispatch(actions.addItem(user, product, quantity)),
        setCurUser: (user) => dispatch(actions.setCurUser(user)),
        createBags: (user) => dispatch(actions.createBags(user)),
        mergeBags: (prevUser, curUser) => dispatch(actions.mergeBags(prevUser, curUser)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);