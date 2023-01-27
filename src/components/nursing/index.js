import Grid from "@mui/material/Grid/Grid";
import React, {useEffect, useState} from "react";
import {CustomLabelHeaderLarge, CustomLabelLabelMedium} from "../common/label";
import NursingDetail from "src/assets/images/nursing-detail.webp";
import NursingDetail1Image1 from "src/assets/images/nursing-des-img1.svg";
import NursingDetail1Image2 from "src/assets/images/nursing-des1-img2.svg";
import NursingDetail1Image3 from "src/assets/images/nursing-des1-img3.svg";
import NursingDetail2Image1 from "src/assets/images/nursing-des2-img.svg";
import NursingDetail2Image2 from "src/assets/images/nursing-des2-img2.svg";
import NursingTick from "src/assets/images/nursing-tick.webp";
import NursingImage3 from "src/assets/images/nursing-img3.webp";
import Paper from "@mui/material/Paper/Paper";
import NursingDetail4Image1 from "src/assets/images/nursing-des4-img1.svg";
import NursingDetail4Image2 from "src/assets/images/nursing-des4-img2.svg";
import NursingDetail4Image3 from "src/assets/images/nursing-des4-img3.svg";
import NursingDetail4Image4 from "src/assets/images/nursing-des4-img4.svg";
import NursingDetail4Image5 from "src/assets/images/nursing-des4-img5.svg";
import {CustomButtonLarge} from "../common/button";
import {CustomTextField, CustomTextFieldWhite} from "../common/text";
import {useOutletContext} from "react-router-dom"
import {useSelector} from "react-redux";


let nursingProfessionTitle;
let nurseQualification;
let dedicatedTeam;
let nurseTitle1;
let nurseTitle2;
let nurseTitle3;
let entryRequirement;
let nursingInGermany;
let nursingEmployed;
let nurse;
let jobPosition;
let jobVacancy;
const Nursing = () => {

    const {onClick,userId} = useOutletContext();


    const {selectedLanguage} = useSelector((state) => state.languageReducer);
    const [loading, setLoading] = useState(false);
    const [count,setCount]=useState(0);

    const loadConstant = async () => {
        setLoading(true);
        ({
            nursingProfessionTitle,
            nurseQualification,
            dedicatedTeam,
            nurseTitle2,
            nurseTitle1,
            nurseTitle3,
            nursingInGermany,
            nursingEmployed,
            nurse,
            jobPosition,
            jobVacancy
        } =
            selectedLanguage === "English" ? await import(`src/translation/eng`) : await import(`src/translation/tur`));
        setLoading(false);
        setCount(count+1)
    }

    useEffect(()=>{
        loadConstant();
    },[selectedLanguage])


    return (
        <Grid container justifyContent={"center"} sx={{marginTop: {xs:"calc(50vh - 250px)",sm:"calc(50vh - 250px)",lg:"calc(50vh - 300px)"}}}>
            <Grid item xs={9} container sx={{marginTop: {xs:"5px",md:"20px"}}} justifyContent={"space-between"}>
                <Grid item container xs={12} md={7} direction={"column"}>
                    <Grid item>
                        <CustomLabelHeaderLarge
                            text={nursingProfessionTitle}
                            color={"red"} fontWeight={"bold"}/>
                    </Grid>
                    <Grid item container style={{marginTop: "20px"}}>
                        <img style={{width: "100%"}} src={NursingDetail}/>
                    </Grid>
                    <Grid item style={{marginTop: "20px"}}>
                        <CustomLabelLabelMedium
                            text={nurseQualification}
                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                            opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                    </Grid>

                    <Grid container>
                        <Grid container style={{marginTop: "20px"}} alignItems={"center"}>
                            <Grid item>
                                <img src={NursingDetail1Image1}/>
                            </Grid>
                            <Grid item xs container direction={"column"} style={{marginLeft: "20px"}}>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={nurseTitle1}
                                        color={"red"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={dedicatedTeam+"\n"}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container style={{marginTop: "20px"}} alignItems={"center"}>
                            <Grid item>
                                <img src={NursingDetail1Image2}/>
                            </Grid>
                            <Grid item xs container direction={"column"} style={{marginLeft: "20px"}}>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={nurseTitle2}
                                        color={"red"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={dedicatedTeam}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container style={{marginTop: "20px"}} alignItems={"center"}>
                            <Grid item>
                                <img src={NursingDetail1Image3}/>
                            </Grid>
                            <Grid item xs container direction={"column"} style={{marginLeft: "20px"}}>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={nurseTitle3}
                                        color={"red"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={dedicatedTeam}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={entryRequirement}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={nursingInGermany+"\n"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>

                    <Grid container style={{marginTop: "20px"}} justifyContent={"space-around"}>
                        <Grid item xs={5.5}>
                            <Grid container direction={"column"} alignItems={"center"}>
                                <Grid item>
                                    <img src={NursingDetail2Image1}/>
                                </Grid>
                                <Grid item style={{marginTop: "20px"}}>
                                    <CustomLabelLabelMedium
                                        text={nurse}
                                        color={"red"} fontWeight={"bold"}/>
                                </Grid>
                                <Grid item style={{marginTop: "20px"}}>
                                    <CustomLabelLabelMedium
                                        text={nursingEmployed+"\n"}
                                        color={"black"} textAlign={"center"}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={5.5}>
                            <Grid container direction={"column"} alignItems={"center"}>
                                <Grid item>
                                    <img src={NursingDetail2Image2}/>
                                </Grid>
                                <Grid item style={{marginTop: "20px"}}>
                                    <CustomLabelLabelMedium
                                        text={jobPosition}
                                        color={"red"} fontWeight={"bold"}/>
                                </Grid>
                                <Grid item style={{marginTop: "20px"}}>
                                    <CustomLabelLabelMedium
                                        text={jobVacancy}
                                        color={"black"} textAlign={"center"}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container style={{marginTop: "20px"}} direction={"column"}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Visa & Residency"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={"To enter Germany, you need a visa, which can be applied for at the German embassy or consulate in your country.\n" +
                                "\n"}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>


                    <Grid container style={{marginTop: "20px"}} justifyContent={"space-between"}>
                        <Grid item xs={12} md={5.5} container>
                            <Grid container>
                                <Grid item>
                                    <img src={NursingTick}/>
                                </Grid>
                                <Grid item xs style={{marginLeft: "20px"}}>
                                    <CustomLabelLabelMedium
                                        text={"You can apply for visa and immigration"}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item>
                                    <img src={NursingTick}/>
                                </Grid>
                                <Grid item xs style={{marginLeft: "20px"}}>
                                    <CustomLabelLabelMedium
                                        text={"More than 20+ years of experience"}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item>
                                    <img src={NursingTick}/>
                                </Grid>
                                <Grid item xs style={{marginLeft: "20px"}}>
                                    <CustomLabelLabelMedium
                                        text={"Trusted by people"}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item>
                                    <img src={NursingTick}/>
                                </Grid>
                                <Grid item xs style={{marginLeft: "20px"}}>
                                    <CustomLabelLabelMedium
                                        text={"Provide Immigration Services Experience Agents"}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={5.5} container>
                            <img src={NursingImage3} style={{width: "100%"}}/>
                        </Grid>
                    </Grid>

                    <Grid container style={{marginTop: "40px"}}>
                        <CustomLabelLabelMedium
                            text={"To be able to work in Germany after entering the country, you will need a residence permit if you are not a citizen of the EU, Liechtenstein, Iceland, Norway, or Switzerland.We will of course support you in obtaining your visa and residence permit.\n" +
                            "\n"}
                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                            opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>

                    </Grid>

                </Grid>

                <Grid container xs={12} md={4.5}>
                    <div>
                        <Grid container>
                            <Paper style={{width: "100%", padding: "40px 20xp 40px 20px",borderRadius:"20px", background: "#F5F5F5"}}>
                                <Grid contanier alignItems={"center"} direction={"column"} style={{padding:"20px"}}>
                                    <Grid item>
                                        <CustomLabelHeaderLarge
                                            text={"Full service for your start in"}
                                            color={"black"} fontWeight={"bold"} textAlign={"center"}
                                            opacity={0.7} lineHeight={1.7}/>

                                    </Grid>
                                    <Grid item>
                                        <CustomLabelHeaderLarge
                                            text={"Germany"}
                                            color={"#FFCC00"} fontWeight={"bold"} textAlign={"center"}
                                            opacity={1} lineHeight={1.7}/>
                                    </Grid>

                                    <Grid item container alignItems={"center"}>
                                        <Grid container alignItems={"center"} style={{marginTop:"20px"}}>
                                            <Grid item style={{padding:"10px",borderRadius:"10px",background:"white"}}>
                                                <img src={NursingDetail4Image1}/>
                                            </Grid>
                                            <Grid item xs style={{marginLeft:"20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={"Document check"}
                                                    color={"black"} fontWeight={"normal"}
                                                    opacity={1} lineHeight={1.7}/>
                                            </Grid>
                                        </Grid>


                                        <Grid container alignItems={"center"} style={{marginTop:"20px"}}>
                                            <Grid item style={{padding:"10px",borderRadius:"10px",background:"white"}}>
                                                <img src={NursingDetail4Image2}/>
                                            </Grid>
                                            <Grid item xs style={{marginLeft:"20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={"Translations of your documents"}
                                                    color={"black"} fontWeight={"normal"}
                                                    opacity={1} lineHeight={1.7}/>
                                            </Grid>
                                        </Grid>


                                        <Grid container alignItems={"center"} style={{marginTop:"20px"}}>
                                            <Grid item style={{padding:"10px",borderRadius:"10px",background:"white"}}>
                                                <img src={NursingDetail4Image3}/>
                                            </Grid>
                                            <Grid item xs style={{marginLeft:"20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={"Application to the authorities"}
                                                    color={"black"} fontWeight={"normal"}
                                                    opacity={1} lineHeight={1.7}/>
                                            </Grid>
                                        </Grid>


                                        <Grid container alignItems={"center"} style={{marginTop:"20px"}}>
                                            <Grid item style={{padding:"10px",borderRadius:"10px",background:"white"}}>
                                                <img src={NursingDetail4Image4}/>
                                            </Grid>
                                            <Grid item xs style={{marginLeft:"20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={"Support with job search"}
                                                    color={"black"} fontWeight={"normal"}
                                                    opacity={1} lineHeight={1.7}/>
                                            </Grid>
                                        </Grid>

                                        <Grid container alignItems={"center"} style={{marginTop:"20px"}}>
                                            <Grid item style={{padding:"10px",borderRadius:"10px",background:"white"}}>
                                                <img src={NursingDetail4Image5}/>
                                            </Grid>
                                            <Grid item xs style={{marginLeft:"20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={"Help with bank account opening"}
                                                    color={"black"} fontWeight={"normal"}
                                                    opacity={1} lineHeight={1.7}/>
                                            </Grid>
                                        </Grid>

                                        {!userId &&
                                            <Grid container justifyContent={"center"} style={{marginTop: "20px"}}
                                                  onClick={(e) => onClick('register')}>
                                                <CustomButtonLarge text={"Sign Up"} background={"red"}
                                                                   border={"2px solid red"}/>
                                            </Grid>
                                        }
                                    </Grid>
                                </Grid>
                            </Paper>
                         </Grid>

                        <Grid container style={{marginTop:"40px"}}>
                            <Paper style={{width: "100%", padding: "40px 20xp 40px 20px",borderRadius:"20px", background: "#F5F5F5"}}>
                                <Grid contanier alignItems={"center"} direction={"column"} style={{padding:"20px"}}>
                                    <Grid item>
                                        <CustomLabelHeaderLarge
                                            text={"Free Immigration Assessment"}
                                            color={"black"} fontWeight={"bold"} textAlign={"center"}
                                            lineHeight={1.7}/>

                                    </Grid>

                                    <Grid item container alignItems={"center"}>

                                        <Grid container direction={"column"} alignItems={"flex-start"} style={{marginTop:"20px"}}>
                                            <Grid item>
                                                <CustomLabelLabelMedium
                                                    text={"Name"}
                                                    color={"black"} fontWeight={"bold"} textAlign={"center"}
                                                    lineHeight={1.7}/>
                                            </Grid>
                                            <Grid item container>
                                                <CustomTextFieldWhite placeholder={"Harry"}/>
                                            </Grid>
                                        </Grid>

                                        <Grid container direction={"column"} alignItems={"flex-start"} style={{marginTop:"20px"}}>
                                            <Grid item>
                                                <CustomLabelLabelMedium
                                                    text={"Phone"}
                                                    color={"black"} fontWeight={"bold"} textAlign={"center"}
                                                    lineHeight={1.7}/>
                                            </Grid>
                                            <Grid item container>
                                                <CustomTextFieldWhite placeholder={"1(234) 567-8900"}/>
                                            </Grid>
                                        </Grid>

                                        <Grid container direction={"column"} alignItems={"flex-start"} style={{marginTop:"20px"}}>
                                            <Grid item>
                                                <CustomLabelLabelMedium
                                                    text={"Select Immigration"}
                                                    color={"black"} fontWeight={"bold"} textAlign={"center"}
                                                    lineHeight={1.7}/>
                                            </Grid>
                                            <Grid item container>
                                                <CustomTextFieldWhite placeholder={"Harry"}/>
                                            </Grid>
                                        </Grid>

                                        <Grid container direction={"column"} alignItems={"flex-start"} style={{marginTop:"20px"}}>
                                            <Grid item>
                                                <CustomLabelLabelMedium
                                                    text={"Message"}
                                                    color={"black"} fontWeight={"bold"} textAlign={"center"}
                                                    lineHeight={1.7}/>
                                            </Grid>
                                            <Grid item container>
                                                <CustomTextFieldWhite placeholder={""}/>
                                            </Grid>
                                        </Grid>





                                        <Grid container justifyContent={"center"} style={{marginTop:"20px"}}>
                                            <CustomButtonLarge text={"Submit"} background={"red"} border={"2px solid red"}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>


                    </div>



                </Grid>
            </Grid>
        </Grid>
    )
}

export default Nursing;