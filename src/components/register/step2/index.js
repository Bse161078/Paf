import Grid from "@mui/material/Grid/Grid";
import AuthBackground from 'src/assets/images/auth-background.png';
import {
    CustomLabelHeaderExtraLarge,
    CustomLabelHeaderLarge,
    CustomLabelLabelMedium,
    CustomLabelLabelSmallHeader
} from "src/components/common/label";
import React, {useEffect, useState} from "react";
import {CustomAuthTextField, CustomTextField} from "src/components/common/text";
import {CustomButtonLarge} from "src/components/common/button";
import Box from "@mui/material/Box/Box";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import {useLocation, useOutletContext, Outlet, useNavigate} from 'react-router-dom';
import {transformValidateObject, validateEmail, validatePassword, validateUserInput} from "src/utils";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import {getFireStoreDb, initializeFirebase} from "src/config/firebase";
import YellowDivider from 'src/assets/images/yellow-divider.svg';
import Paper from "@mui/material/Paper/Paper";
import ProgressBar from "../../common/progressbar";
import Radio from "@mui/material/Radio/Radio";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup/RadioGroup";
import {Country, State, City} from 'country-state-city';
import {getAllLanguages, getAllNationalities, validateUsername} from "../../../utils";
import {CustomDropdown} from "../../common/text";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import {doc, getDoc, setDoc} from "firebase/firestore";
import Loader from "../../common/Loader";
import {DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import moment from "moment";
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {useSelector} from "react-redux";

let checkEligibility,personalData,username,phoneNo,gender,male,female,dob,pob,address,disability,yes,no,disease,nationality,nextStep,motherTongue,validPassword,typeUsername,typephone,typeDOB,typeAddress,validUsername,usernameEmpty,phoneNoEmpty,motherTongueEmpty,addressEmpty,dobEmpty,nationalityEmpty,pobEmpty,countryCodeEmpty;

export const initialRegister = {
    username: {value: null, error: usernameEmpty, showError: false},
    phone: {value: null, error: phoneNoEmpty, showError: false},
    countryCode: {value: null, error: countryCodeEmpty, showError: false},
    dob: {value: null, error: dobEmpty, showError: false},
    pob: {value: '', error: pobEmpty, showError: false},
    nationality: {value: '', error: nationalityEmpty, showError: false},
    language: {value: '', error: motherTongueEmpty, showError: false},
    gender: {value: 'female', error: "Gender cant be empty", showError: false},
    disability: {value: 'no', error: "Gender cant be empty", showError: false},
    disease: {value: 'no', error: "Gender cant be empty", showError: false},
    address: {value: '', error: addressEmpty, showError: false},

};





const RegisterStep2 = (props) => {
    let navigate = useNavigate();
    const [user, setUser] = useState(initialRegister);
    const [count, setCount] = useState(0);
    const [terms, setTerms] = useState({privacyPolicy: false, cancellationPolicy: false, validInfo: false})
    const [staticData, setStaticData] = useState({countryCodes: [], languages: [], nationalities: [], countries: []});
    const {userId} = useOutletContext();
    const [loading, setLoading] = useState(false);
    const [openCalendar, setOpenCalendar] = useState(false);

    const { selectedLanguage } = useSelector((state) => state.languageReducer);
       
    
        const loadConstant = async () => {
            setLoading(true);
            ({
                
                checkEligibility,personalData,username,phoneNo,gender,male,female,dob,pob,address,disability,yes,no,disease,nationality,nextStep,motherTongue,validPassword,typeUsername,typephone,typeDOB,typeAddress,validUsername,usernameEmpty,phoneNoEmpty,motherTongueEmpty,addressEmpty,dobEmpty,nationalityEmpty,pobEmpty,countryCodeEmpty
            } =
                selectedLanguage === "English" ? await import(`src/translation/eng`) : await import(`src/translation/tur`));
            setLoading(false);
            setCount(count + 1)
        }
    
        useEffect(() => {
            loadConstant();
        }, [selectedLanguage])

    useEffect(() => {

        const countryCodes = (Country.getAllCountries()).map((country) => (country.phonecode + " " + country.name));
        const countries = (Country.getAllCountries()).map((country) => country.name);

        const languages = getAllLanguages();
        const nationalities = getAllNationalities();
        setStaticData({countryCodes, languages, nationalities, countries});
        setCount(count + 1);


    }, [])


    const onChange = (e, type, isCheckbox) => {
        let data;

        if (isCheckbox) {
            data = {
                ...user,
                [type]: {
                    ...user[type],
                    value: e,
                    showError: false
                }
            };
        } else {
            data = {
                ...user,
                [type]: {
                    ...user[type],
                    value: e.target.value,
                    showError: false
                }
            };
        }


        if (type === "username") {
            if (validateUsername(data.username.value)) {
                data = {...data, username: {...data.username, showError: false, error: validUsername}}
            } else {
                data = {
                    ...data,
                    username: {...data.username, showError: true, error: ""}
                }
            }
        }


        setUser(data);
        setCount(count + 1);

    }


    const onChangeCheckbox = (type, value) => {
        setTerms({...terms, [type]: value.target.checked})
    }

    const onChangeLink = (page) => {
        navigate(`${page}`);
        window.scrollTo(0, 0)

    }


    const registerUser = async () => {
        setLoading(true);
        const userData = transformValidateObject(user);
        userData.progress = 2;
        await setDoc(doc(getFireStoreDb(), "users", userId), userData, {merge: true});
        setLoading(false);
        console.log("data : ",userData)
        navigate('/register/step3');
    }


    const onRegisterUser = () => {
        const validate = validateUserInput({...user}, "", validPassword);
        if (validate.isValid) {

            registerUser();


        } else {
            setUser(validate.data);
            setCount(count + 1);
        }

    }


    let CountriesContainerList = (staticData.countries).map((code) => <MenuItem
        value={code}>{code}</MenuItem>)


    let CountryCodeListContainer = (staticData.countryCodes).map((code) => <MenuItem
        value={code}>{code}</MenuItem>)

    let LanguageListContainer = (staticData.languages).map((code) => <MenuItem
        value={code}>{code}</MenuItem>)

    let NationalitiesContainer = (staticData.nationalities).map((code) => <MenuItem
        value={code}>{code}</MenuItem>)

    return (
        <Grid container style={{width: "100vw", height: "100vh", overflow: "auto"}} justifyContent={"center"}>
            {loading && <Loader/>}

            <Grid item xs={11} md={8} container direction={"column"} justifyContent={"center"} alignItems={"center"}>
                <Grid item>
                    <CustomLabelHeaderExtraLarge
                        text={checkEligibility}
                        color={"black"} fontWeight={"bold"} textAlign={"center"}/>
                </Grid>
                <Grid item style={{marginTop: "5px"}}>
                    <img src={YellowDivider}/>
                </Grid>
                <Grid container justifyContent={"space-between"} style={{marginTop: "20px"}}>
                    <Grid item xs={5.5}>
                        <Grid container direction={"column"}>
                            <Grid item>
                                <Paper
                                    style={{width: "48px", height: "48px", background: "#FF0000", borderRadius: "50%"}}>
                                    <Grid container justifyContent={"center"} alignItems={"center"}
                                          style={{height: "100%"}}>
                                        <CustomLabelLabelMedium color={"white"} text={"01"} fontWeight={"normal"}/>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid style={{marginTop: "20px"}}>
                                <ProgressBar progress={50}/>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={5.5}>
                        <Grid container direction={"column"}>
                            <Grid item>
                                <Paper style={{width: "48px", height: "48px", background: "white", borderRadius: "50%"}}
                                       elevation={10}>
                                    <Grid container justifyContent={"center"} alignItems={"center"}
                                          style={{height: "100%"}}>
                                        <CustomLabelLabelMedium color={"black"} text={"02"} fontWeight={"normal"}/>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid style={{marginTop: "20px"}}>
                                <ProgressBar progress={0}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container style={{marginTop: "30px"}}>
                    <Grid item xs={"auto"}>
                        <Grid container direction={"column"} alignItems={"center"}>
                            <Grid item>
                                <CustomLabelHeaderLarge
                                    text={personalData}
                                    color={"black"} fontWeight={"bold"}/>
                            </Grid>
                            <Grid item style={{marginTop: "5px"}}>
                                <img src={YellowDivider}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid container justifyContent={"space-between"} style={{marginTop: "30px"}}>
                    <Grid item xs={12} md={5.5} container>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={username}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}
                                lineHeight={1.7}/>
                        </Grid>
                        <Grid item container>
                            <CustomAuthTextField placeholder={typeUsername}
                                                 value={user.username.value}
                                                 onChange={(e) => onChange(e, "username")}
                                                 showError={user.username.showError}
                                                 error={user.username.error}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={5.5} container sx={{marginTop: {xs: "30px", md: "0px"}}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={phoneNo}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}
                                lineHeight={1.7}/>
                        </Grid>
                        <Grid item container alignItems={"center"}>
                            <Grid item xs={3}>
                                <CustomDropdown value={user.countryCode.value}
                                                onChange={(e) => onChange(e, "countryCode")}
                                                container={CountryCodeListContainer}
                                                showError={user.countryCode.showError}
                                                error={user.countryCode.error}
                                />
                            </Grid>
                            <Grid item xs={9} container>
                                <CustomAuthTextField placeholder={typephone}
                                                     value={user.phone.value}
                                                     onChange={(e) => onChange(e, "phone")}
                                                     showError={user.phone.showError}
                                                     error={user.phone.error}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container justifyContent={"space-between"} style={{marginTop: "30px"}}>
                    <Grid item xs={12} md={5.5} container>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={gender}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}
                                lineHeight={1.7}/>
                        </Grid>
                        <Grid item container>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="male" control={
                                    <Radio checked={user.gender.value === "male"}
                                           onChange={(e) => e.target.value && onChange("male", "gender", true)}
                                    />}
                                                  label={male}/>
                                <FormControlLabel value="female"
                                                  control={
                                                      <Radio checked={user.gender.value === "female"}
                                                             onChange={(e) => e.target.value && onChange("female", "gender", true)}
                                                      />}
                                                  label={female}
                                                  style={{marginLeft: "10px"}}/>
                            </RadioGroup>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container justifyContent={"space-between"} style={{marginTop: "30px"}}>
                    <Grid item xs={12} md={5.5} container>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={dob}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}
                                lineHeight={1.7}/>
                        </Grid>
                        <Grid item container justifyContent={"center"} alignItems={"center"} style={{position:"relative"}}>

                            <LocalizationProvider dateAdapter={AdapterDateFns} sx={{
                                ".MuiPickersPopper-root":{
                                    top:"140px!important"
                                }
                            }}>

                                <DesktopDatePicker
                                    label=""
                                    open={openCalendar}
                                    onClose={() => setOpenCalendar(false)}
                                    inputFormat="mm/dd/yyyy"
                                    value={user.dob.value}

                                    onChange={(value) => onChange({target:{value:moment(value).format("DD/MM/yyyy")}}, "dob")}
                                    renderInput={(params) =>
                                        (

                                            <CustomAuthTextField label={""} value={user.dob && user.dob.value}
                                                                 placeholder={typeDOB}
                                                                 params={params}
                                                                 showError={user.dob.showError}
                                                                 error={user.dob.error}
                                                                 otherInputProps={{
                                                                     endAdornment:
                                                                         <CalendarTodayIcon style={{
                                                                             color: "black",
                                                                             cursor: "pointer",
                                                                             fontSize: "18px"
                                                                         }}
                                                                                            onClick={(e) => setOpenCalendar(true)}/>
                                                                 }}
                                            />

                                        )
                                    }
                                />
                            </LocalizationProvider>

                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={5.5} container sx={{marginTop: {xs: "30px", md: "0px"}}}>

                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={pob}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}
                                lineHeight={1.7}/>
                        </Grid>
                        <Grid item container>


                            <CustomDropdown value={user.pob.value}
                                            onChange={(e) => onChange(e, "pob")}
                                            container={CountriesContainerList}
                                            showError={user.pob.showError}
                                            error={user.pob.error}
                            />
                        </Grid>
                    </Grid>
                </Grid>


                <Grid container justifyContent={"space-between"} style={{marginTop: "30px"}}>
                    <Grid item xs={12} md={12} container>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={address}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}
                                lineHeight={1.7}/>
                        </Grid>
                        <Grid item container>
                            <CustomAuthTextField placeholder={typeAddress}
                                                 value={user.address.value}
                                                 onChange={(e) => onChange(e, "address")}
                                                 showError={user.address.showError}
                                                 error={user.address.error}/>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid container justifyContent={"space-between"} style={{marginTop: "30px"}}>
                    <Grid item xs={12} md={5.5} container>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={disability}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}
                                lineHeight={1.7}/>
                        </Grid>
                        <Grid item container>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="yes" control=
                                    {<Radio checked={user.disability.value === "yes"}
                                            onChange={(e) => e.target.value && onChange("yes", "disability", true)}/>}
                                                  label={yes}/>
                                <FormControlLabel value="no" control=
                                    {<Radio checked={user.disability.value === "no"}
                                            onChange={(e) => e.target.value && onChange("no", "disability", true)}/>}
                                                  label={no}
                                                  style={{marginLeft: "10px"}}/>
                            </RadioGroup>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={5.5} container sx={{marginTop: {xs: "30px", md: "0px"}}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={disease}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}
                                lineHeight={1.7}/>
                        </Grid>
                        <Grid item container>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="yes"control=
                                    {<Radio checked={user.disease.value === "yes"}
                                            onChange={(e) => e.target.value && onChange("yes", "disease", true)}
                                    />}
                                                  label={yes}/>
                                <FormControlLabel value="no" control=
                                    {<Radio checked={user.disease.value === "no"}
                                            onChange={(e) => e.target.value && onChange("no", "disease", true)}
                                    />}
                                                  label={no} style={{marginLeft: "10px"}}/>
                            </RadioGroup>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid container justifyContent={"space-between"} style={{marginTop: "30px"}}>
                    <Grid item xs={12} md={5.5} container>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={motherTongue}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}
                                lineHeight={1.7}/>
                        </Grid>
                        <Grid item container>
                            <CustomDropdown value={user.language.value}
                                            onChange={(e) => onChange(e, "language")}
                                            container={LanguageListContainer}
                                            showError={user.language.showError}
                                            error={user.language.error}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={5.5} container sx={{marginTop: {xs: "30px", md: "0px"}}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={nationality}
                                color={"black"} fontWeight={"bold"} textAlign={"center"}
                                lineHeight={1.7}/>
                        </Grid>
                        <Grid item container>
                            <CustomDropdown value={user.nationality.value}
                                            onChange={(e) => onChange(e, "nationality")}
                                            container={NationalitiesContainer}
                                            showError={user.nationality.showError}
                                            error={user.nationality.error}
                            />

                        </Grid>
                    </Grid>
                </Grid>


                <Grid container style={{marginTop: "20px", paddingBottom: "40px"}}>
                    <Grid item onClick={(e) => (onRegisterUser())}>
                        <CustomButtonLarge
                            text={nextStep} background={"red"} border={"2px solid red"}/>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default RegisterStep2;