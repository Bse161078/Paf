import Grid from "@mui/material/Grid/Grid";
import AuthBackground from 'src/assets/images/auth-background.png';
import {CustomLabelHeaderExtraLarge, CustomLabelHeaderLarge, CustomLabelLabelMedium} from "../common/label";
import React, {useState,useEffect} from "react";
import {CustomAuthTextField, CustomTextField} from "../common/text";
import {CustomButtonLarge} from "../common/button";
import Box from "@mui/material/Box/Box";
import {transformValidateObject, validateEmail, validateUserInput, validateUsername} from "../../utils";
import {getFireStoreDb, initializeFirebase} from "../../config/firebase";
import Button from "@mui/material/Button/Button";

import { doc, setDoc,getDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword,signOut,sendPasswordResetEmail   } from "firebase/auth";
import {useLocation,useOutletContext,Outlet,useNavigate} from 'react-router-dom';
import Loader from "../common/Loader";
import ResponsiveConfirmationDialog from "../common/ResponsiveConfirmation";
import { useSelector } from "react-redux";

export const initialRegister = {
    email: {value: null, error: "Email cant be empty", showError: false},
    password: {value: '', error: "Password cant be empty", showError: false},
};



const initialConfirmation = {
    show: false,
    title: "",
    text: "",
    data: null,
    isUpdate: false,
    buttonYes: null,
    buttonNo: null
}

let signIn,credentials,email,password,typeEmail,typePassword,loginTitle,forgotPassword,validEmail,validPassword,completeRegistration;

const Login=()=>{
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(initialRegister);
    let navigate = useNavigate();
    const [confirmation, setConfirmation] = useState(initialConfirmation);
    const [count,setCount]=useState(0);


    const { selectedLanguage } = useSelector((state) => state.languageReducer);

    const loadConstant = async () => {
        setLoading(true);
        ({
           
            signIn,credentials,email,password,typeEmail,typePassword,loginTitle,forgotPassword

        } =
            selectedLanguage === "English" ? await import(`src/translation/eng`) : await import(`src/translation/tur`));
        setLoading(false);
        setCount(count + 1)
    }

    useEffect(() => {
        loadConstant();
    }, [selectedLanguage])


    const onChange = (e, type, isCheckbox) => {
        let data;

        data = {
            ...user,
            [type]: {
                ...user[type],
                value: e.target.value,
                showError: false
            }
        };


        if (type === "email") {
            if (validateEmail(data.email.value)) {
                data = {...data, email: {...data.email, showError: false, error: ""}}
            } else {
                data = {...data, email: {...data.email, showError: true, error: 
                validEmail}}
            }
        }


        setUser(data);
        setCount(count + 1);

    }


    const getUserData = async (id) => {


        const userRef = doc(getFireStoreDb(), "users", id);

        const userDoc = await getDoc(userRef);
        if (!userDoc.exists()) {
            return null;
        } else {
            return userDoc.data();
        }
    }


    const logoutUser=()=>{
        setLoading(true);
        const auth = getAuth();
        signOut(auth).then(() => {
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
        });

    }


    const registerUser=async ()=>{
        setLoading(true);
        initializeFirebase();
        const auth = getAuth();
        const parsedUser=transformValidateObject(user);
        const validate = validateUserInput({...user}, "",validPassword);
        
        if(validate.isValid){

            signInWithEmailAndPassword(auth, parsedUser.email, parsedUser.password)
                .then(async (userCredential) => {
                    if (userCredential && userCredential.user.uid) {

                        const userData = await getUserData(userCredential.user.uid);
                        setLoading(false);

                        if (userData && userData.progress===3) {
                            navigate('/dashboard');
                        } else {
                            console.log("asd")
                            logoutUser()
                            console.log("asd")
                            setConfirmation({
                                show: true, title: "Error",
                                text: completeRegistration
                                , data: {}, isUpdate: false,
                                buttonYes:
                                    <Button autoFocus onClick={(e) => {
                                        setConfirmation(initialConfirmation)
                                    }}>{"ok"}</Button>,
                            })
                        }

                    }else{
                        logoutUser()
                        setLoading(false);
                        setConfirmation({
                            show: true, title: "Error",
                            text: completeRegistration
                            , data: {}, isUpdate: false,
                            buttonYes:
                                <Button autoFocus onClick={(e) => {
                                    setConfirmation(initialConfirmation)
                                }}>{"ok"}</Button>,
                        })
                    }
                    // Signed in

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setLoading(false);
                    setConfirmation({
                        show: true, title: "Error",
                        text: errorMessage
                        , data: {}, isUpdate: false,
                        buttonYes:
                            <Button autoFocus onClick={(e) => {
                                setConfirmation(initialConfirmation)
                            }}>{"ok"}</Button>,
                    })
                    // ..
                });
        }else{
            setUser(validate.data);
            setCount(count + 1);
        }

    }


    const onForgotPassword=()=>{
        navigate('/forgot-password')
    }


    return(
        <Grid container style={{width:"100vw",height:"100vh"}} justifyContent={"center"}>

            {loading && <Loader/>}
            {
                confirmation.show &&
                <ResponsiveConfirmationDialog
                    title={confirmation.title} text={confirmation.text}
                    buttons={confirmation.buttonYes}
                    otherButton={confirmation.buttonNo}
                />
            }

            <Grid item xs={0} md={4} sx={{height:"100vh",overflow:"hidden",display:{xs:"none",md:"block"}}}>
                <Box component={"img"} src={AuthBackground} sx={{height:"100vh"}}/>
            </Grid>
            <Grid item xs={0} md={2}></Grid>
            <Grid item xs={11} md={4} container direction={"column"} justifyContent={"center"} alignItems={"flex-start"}>
                <Grid item>
                    <CustomLabelHeaderExtraLarge
                        text={signIn}
                        color={"#FFCC00"} fontWeight={"bold"}/>
                </Grid>
                <Grid item style={{marginTop:"20px"}}>
                    <CustomLabelLabelMedium
                        text={credentials}
                        color={"black"} fontWeight={"bold"} color={"black"} fontWeight={"bold"}
                        opacity={1} lineHeight={1.7} textAlign={"center"}/>
                </Grid>

                <Grid item container style={{marginTop:"20px"}}>
                    <Grid item>
                        <CustomLabelLabelMedium
                            text={email}
                            color={"black"} fontWeight={"bold"} textAlign={"center"}
                            lineHeight={1.7}/>
                    </Grid>
                    <Grid item container>
                        <CustomAuthTextField placeholder={typeEmail}
                                             value={user.email.value}
                                             onChange={(e) => onChange(e, "email")}
                                             showError={user.email.showError}
                                             error={user.email.error}
                        />
                    </Grid>
                </Grid>

                <Grid item container style={{marginTop:"20px"}}>
                    <Grid item>
                        <CustomLabelLabelMedium
                            text={password}
                            color={"black"} fontWeight={"bold"} textAlign={"center"}
                            lineHeight={1.7}/>
                    </Grid>
                    <Grid item container>
                        <CustomAuthTextField placeholder={typePassword}
                                             type={"password"}
                                             value={user.password.value}
                                             onChange={(e) => onChange(e, "password")}
                                             showError={user.password.showError}
                                             error={user.password.error}
                        />
                    </Grid>
                </Grid>

                <Grid container style={{marginTop:"20px"}} justifyContent={"space-between"}>
                    <Grid item onClick={(e)=>registerUser()}>
                        <CustomButtonLarge text={loginTitle} background={"red"} border={"2px solid red"}/>
                    </Grid>
                    <Grid item onClick={(e)=>onForgotPassword()}>
                        <CustomButtonLarge text={forgotPassword} background={"transparent"} color={"red"} border={"2px solid red"}/>
                    </Grid>
                </Grid>

            </Grid>
            <Grid item xs={0} md={2}></Grid>
        </Grid>
    )
}

export default Login;