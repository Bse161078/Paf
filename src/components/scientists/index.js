import Grid from "@mui/material/Grid/Grid";
import React,{useState,useEffect} from "react";
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
import {CustomTextField} from "../common/text";
import { useSelector } from "react-redux";


let nursingFullService;
let germany;
let checkDocument;
let translationDocuments;
let applicationAuthorities;
let supportSearch;
let helpOpening;
let freeAssessment;
let name;
let phone;
let selectImmigration;
let message;
let signUp;
let submit


const Scientists = () => {
    const { selectedLanguage } = useSelector((state) => state.languageReducer);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);

    const loadConstant = async () => {
        setLoading(true);
        ({
            
            nursingFullService,
            germany,
            checkDocument,
            translationDocuments,
            applicationAuthorities,
            supportSearch,
            helpOpening,
            freeAssessment,
            name,
            phone,
            selectImmigration,
            message,
            signUp,
            submit,


        } =
            selectedLanguage === "English" ? await import(`src/translation/eng`) : await import(`src/translation/tur`));
        setLoading(false);
        setCount(count + 1)
    }

    useEffect(() => {
        loadConstant();
    }, [selectedLanguage])


    return (
        <Grid container justifyContent={"center"} sx={{marginTop: {xs:"calc(50vh - 250px)",sm:"calc(50vh - 250px)",lg:"calc(50vh - 300px)"}}}>
            <Grid item xs={9} container sx={{marginTop: {xs:"5px",md:"20px"}}} justifyContent={"space-between"}>
                <Grid item container xs={12} md={7} direction={"column"}>
                    <Grid item>
                        <CustomLabelHeaderLarge
                            text={"Scientists"}
                            color={"red"} fontWeight={"bold"}/>
                    </Grid>
                    <Grid item style={{marginTop: "20px"}}>
                        <CustomLabelLabelMedium
                            text={"According to the Bloomberg Innovation Index, Germany will be the 4th most innovative country in the world in 2021. Innovations are on the agenda in all sectors: Automotive, Energy & Environmental Protection, in the chemical and pharmaceutical industries and, of course, in mechanical and plant engineering. As a scientist, you research and develop the future, in Germany for the world. In modern laboratories, at private research institutes, as a product developer or in research and teaching on behalf of the government.\n" +
                            ""}
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
                                        text={"Dedicated Team"}
                                        color={"red"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={"There are many variations of passages of Scientists available.\n"}
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
                                        text={"Great Support"}
                                        color={"red"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={"There are many variations of passages of Scientists available.\n"}
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
                                        text={"Government Certified"}
                                        color={"red"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={"There are many variations of passages of Scientists available.\n"}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Natural scientists are in high demand"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={"With a degree in biotechnology, chemistry, environmental or energy technology, in pharmacy or physics or mathematics, you can work in many positions across industries. If you are interested in marketing and sales or consulting, if you want to work in management, or if you would like to work in research or teaching, then start your recognition process now. In order to maintain and expand its innovative status, Germany needs researchers, innovators and doers like you!\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>

                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={"Your dissertation in Germany"}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={"You want to write your dissertation in Germany? Many companies have their own R&D departments where you can do research and earn money even as a doctoral student. Or apply for a scholarship program. We can help you find the right one for you.\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
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
                                        <CustomLabelLabelMedium
                                            text={nursingFullService}
                                            color={"black"} fontWeight={"bold"} textAlign={"center"}
                                            opacity={0.7} lineHeight={1.7}/>

                                    </Grid>
                                    <Grid item>
                                        <CustomLabelLabelMedium
                                            text={germany}
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
                                                    text={checkDocument}
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
                                                    text={translationDocuments}
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
                                                    text={applicationAuthorities}
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
                                                    text={supportSearch}
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
                                                    text={helpOpening}
                                                    color={"black"} fontWeight={"normal"}
                                                    opacity={1} lineHeight={1.7}/>
                                            </Grid>
                                        </Grid>


                                        <Grid container justifyContent={"center"} style={{marginTop:"20px"}}>
                                            <CustomButtonLarge text={signUp} background={"red"} border={"2px solid red"}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                         </Grid>

                        <Grid container style={{marginTop:"40px"}}>
                            <Paper style={{width: "100%", padding: "40px 20xp 40px 20px",borderRadius:"20px", background: "#F5F5F5"}}>
                                <Grid contanier alignItems={"center"} direction={"column"} style={{padding:"20px"}}>
                                    <Grid item>
                                        <CustomLabelHeaderLarge
                                            text={freeAssessment}
                                            color={"black"} fontWeight={"bold"} textAlign={"center"}
                                            lineHeight={1.7}/>

                                    </Grid>

                                    <Grid item container alignItems={"center"}>

                                        <Grid container direction={"column"} alignItems={"flex-start"} style={{marginTop:"20px"}}>
                                            <Grid item>
                                                <CustomLabelLabelMedium
                                                    text={name}
                                                    color={"black"} fontWeight={"bold"} textAlign={"center"}
                                                    lineHeight={1.7}/>
                                            </Grid>
                                            <Grid item container>
                                                <CustomTextField placeholder={"Harry"}/>
                                            </Grid>
                                        </Grid>

                                        <Grid container direction={"column"} alignItems={"flex-start"} style={{marginTop:"20px"}}>
                                            <Grid item>
                                                <CustomLabelLabelMedium
                                                    text={phone}
                                                    color={"black"} fontWeight={"bold"} textAlign={"center"}
                                                    lineHeight={1.7}/>
                                            </Grid>
                                            <Grid item container>
                                                <CustomTextField placeholder={"1(234) 567-8900"}/>
                                            </Grid>
                                        </Grid>

                                        <Grid container direction={"column"} alignItems={"flex-start"} style={{marginTop:"20px"}}>
                                            <Grid item>
                                                <CustomLabelLabelMedium
                                                    text={selectImmigration}
                                                    color={"black"} fontWeight={"bold"} textAlign={"center"}
                                                    lineHeight={1.7}/>
                                            </Grid>
                                            <Grid item container>
                                                <CustomTextField placeholder={"Harry"}/>
                                            </Grid>
                                        </Grid>

                                        <Grid container direction={"column"} alignItems={"flex-start"} style={{marginTop:"20px"}}>
                                            <Grid item>
                                                <CustomLabelLabelMedium
                                                    text={message}
                                                    color={"black"} fontWeight={"bold"} textAlign={"center"}
                                                    lineHeight={1.7}/>
                                            </Grid>
                                            <Grid item container>
                                                <CustomTextField placeholder={""}/>
                                            </Grid>
                                        </Grid>





                                        <Grid container justifyContent={"center"} style={{marginTop:"20px"}}>
                                            <CustomButtonLarge text={submit} background={"red"} border={"2px solid red"}/>
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

export default Scientists;