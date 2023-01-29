import Grid from "@mui/material/Grid/Grid";
import React,{useState,useEffect} from "react";
import {CustomLabelHeaderLarge, CustomLabelLabelMedium, CustomLabelLabelSmallMedium} from "../common/label";
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
import LearnGerman from "src/assets/images/learn-german-big.webp";
import ManyYearsExpIcon from "src/assets/images/many-years-exp.svg";
import CompleteAccurateIcon from "src/assets/images/complete-accurate.svg";
import ImmigrantSpecialistIcon from "src/assets/images/immigrant-specialist.svg";
import VisaPerson from "src/assets/images/visa-persone.webp";
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
let submit,neededGerman,neededGermanDetails,experienceNeeded,variationOfPassage,accurateAdvice,immigrationSpecials,levelOfLanguages,languageCompetance,levelA,levelB,levelC,basicKnowledge,beginner,advanced,advancedKnowledge,nativeSpeaker,almostLike,highestLevel,learnGerman,countlessPossibilities,bestExams,examPrepration,talkToConsultant,onlineCourses

const LanguageLessons = () => {

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
                submit,neededGerman,neededGermanDetails,experienceNeeded,variationOfPassage,accurateAdvice,immigrationSpecials,levelOfLanguages,languageCompetance,levelA,levelB,levelC,basicKnowledge,beginner,advanced,advancedKnowledge,nativeSpeaker,almostLike,highestLevel,learnGerman,countlessPossibilities,bestExams,examPrepration,talkToConsultant,onlineCourses
        
            } =
                selectedLanguage === "English" ? await import(`src/translation/eng`) : await import(`src/translation/tur`));
            setLoading(false);
            setCount(count + 1)
        }
    
        useEffect(() => {
            loadConstant();
        }, [selectedLanguage])

    return (
        <Grid container justifyContent={"center"}
              sx={{marginTop: {xs: "calc(50vh - 250px)", sm: "calc(50vh - 250px)", lg: "calc(50vh - 300px)"}}}>
            <Grid item xs={9} container sx={{marginTop: {xs: "5px", md: "20px"}}} justifyContent={"space-between"}>
                <Grid item container xs={12} md={7} direction={"column"}>
                    <Grid item container style={{marginTop: "20px"}}>
                        <img style={{width: "100%"}} src={LearnGerman}/>
                    </Grid>

                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={neededGerman}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={neededGermanDetails+"\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>

                    <Grid container justifyContent={"space-between"}>
                        <Grid item xs={12} md={3.8} container style={{marginTop: "20px"}} alignItems={"center"}
                              direction={"column"}>
                            <Paper style={{
                                padding: "10px",
                                borderRadius: "20px",
                                width: "100%",
                                height: "100%",
                                background: "#EEEEEE"
                            }}>
                                <Grid container direction={"column"} alignItems={"center"}>
                                    <Grid item>
                                        <img src={ManyYearsExpIcon} style={{
                                            maxWidth: "100%",
                                            background: "red",
                                            padding: "10px",
                                            borderRadius: "50%"
                                        }}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "5px"}}>
                                        <CustomLabelLabelMedium
                                            text={experienceNeeded}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={1} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "5px"}}>
                                        <CustomLabelLabelSmallMedium
                                            text={variationOfPassage}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={0.7} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={3.8} container style={{marginTop: "20px"}} alignItems={"center"}
                              direction={"column"}>
                            <Paper style={{
                                padding: "10px",
                                borderRadius: "20px",
                                width: "100%",
                                height: "100%",
                                background: "#EEEEEE"
                            }}>
                                <Grid container direction={"column"} alignItems={"center"}>
                                    <Grid item>
                                        <img src={CompleteAccurateIcon} style={{
                                            maxWidth: "100%",
                                            background: "red",
                                            padding: "10px",
                                            borderRadius: "50%"
                                        }}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "5px"}}>
                                        <CustomLabelLabelMedium
                                            text={accurateAdvice}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={1} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "5px"}}>
                                        <CustomLabelLabelSmallMedium
                                            text={variationOfPassage}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={0.7} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={3.8} container style={{marginTop: "20px"}} alignItems={"center"}
                              direction={"column"}>
                            <Paper style={{
                                padding: "10px",
                                borderRadius: "20px",
                                width: "100%",
                                height: "100%",
                                background: "#EEEEEE"
                            }}>
                                <Grid container direction={"column"} alignItems={"center"}>
                                    <Grid item>
                                        <img src={ImmigrantSpecialistIcon} style={{
                                            maxWidth: "100%",
                                            background: "red",
                                            padding: "10px",
                                            borderRadius: "50%"
                                        }}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "5px"}}>
                                        <CustomLabelLabelMedium
                                            text={immigrationSpecials}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={1} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "5px"}}>
                                        <CustomLabelLabelSmallMedium
                                            text={variationOfPassage}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={0.7} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Grid container style={{marginTop: "30px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={levelOfLanguages}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={languageCompetance+"\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>


                    <Grid container style={{marginTop: "30px"}}>
                        <Grid item style={{
                            padding: "10px",
                            width: "25px",
                            height: "25px",
                            background: "#FFCC00",
                            borderRadius: "50%"
                        }}>
                        </Grid>
                        <Grid item xs style={{marginLeft: "10px", marginTop: "-2px"}}>
                            <Grid container direction={"column"} justifyContent={"flex-start"}>
                                <CustomLabelHeaderLarge
                                    text={"Levels A1 and A2:"}
                                    color={"black"} fontWeight={"bold"}/>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={basicKnowledge}
                                        color={"black"} fontWeight={"normal"}
                                        opacity={0.5} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                                <Grid item container style={{ marginTop: "5px"}} alignItems={"center"}>
                                    <Grid item style={{
                                        width: "10px",
                                        height: "10px",
                                        background: "#FFCC00",
                                        borderRadius: "50%"
                                    }}>
                                    </Grid>
                                    <Grid item xs style={{marginLeft: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={beginner}
                                            color={"black"} fontWeight={"normal"}
                                            opacity={0.5} lineHeight={1.7} textAlign={"justify"}/>
                                    </Grid>
                                </Grid>
                                <Grid item container style={{ marginTop: "5px"}} alignItems={"center"}>
                                    <Grid item style={{
                                        width: "10px",
                                        height: "10px",
                                        background: "#FFCC00",
                                        borderRadius: "50%"
                                    }}>
                                    </Grid>
                                    <Grid item xs style={{marginLeft: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={beginner}
                                            color={"black"} fontWeight={"normal"}
                                            opacity={0.5} lineHeight={1.7} textAlign={"justify"}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid container style={{marginTop: "30px"}}>
                        <Grid item style={{
                            padding: "10px",
                            width: "25px",
                            height: "25px",
                            background: "#FFCC00",
                            borderRadius: "50%"
                        }}>
                        </Grid>
                        <Grid item xs style={{marginLeft: "10px", marginTop: "-2px"}}>
                            <Grid container direction={"column"} justifyContent={"flex-start"}>
                                <CustomLabelHeaderLarge
                                    text={levelB}
                                    color={"black"} fontWeight={"bold"}/>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={advancedKnowledge+"\n" +
                                        ""}
                                        color={"black"} fontWeight={"normal"}
                                        opacity={0.5} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                                <Grid item container style={{ marginTop: "5px"}} alignItems={"center"}>
                                    <Grid item style={{
                                        width: "10px",
                                        height: "10px",
                                        background: "#FFCC00",
                                        borderRadius: "50%"
                                    }}>
                                    </Grid>
                                    <Grid item xs style={{marginLeft: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={advanced}
                                            color={"black"} fontWeight={"normal"}
                                            opacity={0.5} lineHeight={1.7} textAlign={"justify"}/>
                                    </Grid>
                                </Grid>
                                <Grid item container style={{ marginTop: "5px"}} alignItems={"center"}>
                                    <Grid item style={{
                                        width: "10px",
                                        height: "10px",
                                        background: "#FFCC00",
                                        borderRadius: "50%"
                                    }}>
                                    </Grid>
                                    <Grid item xs style={{marginLeft: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={advanced}
                                            color={"black"} fontWeight={"normal"}
                                            opacity={0.5} lineHeight={1.7} textAlign={"justify"}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container style={{marginTop: "30px"}}>
                        <Grid item style={{
                            padding: "10px",
                            width: "25px",
                            height: "25px",
                            background: "#FFCC00",
                            borderRadius: "50%"
                        }}>
                        </Grid>
                        <Grid item xs style={{marginLeft: "10px", marginTop: "-2px"}}>
                            <Grid container direction={"column"} justifyContent={"flex-start"}>
                                <CustomLabelHeaderLarge
                                    text={levelC}
                                    color={"black"} fontWeight={"bold"}/>
                                <Grid item>
                                    <CustomLabelLabelMedium
                                        text={nativeSpeaker+"\n" +
                                        ""}
                                        color={"black"} fontWeight={"normal"}
                                        opacity={0.5} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                                <Grid item container style={{ marginTop: "5px"}} alignItems={"center"}>
                                    <Grid item style={{
                                        width: "10px",
                                        height: "10px",
                                        background: "#FFCC00",
                                        borderRadius: "50%"
                                    }}>
                                    </Grid>
                                    <Grid item xs style={{marginLeft: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={almostLike}
                                            color={"black"} fontWeight={"normal"}
                                            opacity={0.5} lineHeight={1.7} textAlign={"justify"}/>
                                    </Grid>
                                </Grid>
                                <Grid item container style={{ marginTop: "5px"}} alignItems={"center"}>
                                    <Grid item style={{
                                        width: "10px",
                                        height: "10px",
                                        background: "#FFCC00",
                                        borderRadius: "50%"
                                    }}>
                                    </Grid>
                                    <Grid item xs style={{marginLeft: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={highestLevel}
                                            color={"black"} fontWeight={"normal"}
                                            opacity={0.5} lineHeight={1.7} textAlign={"justify"}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>



                    <Grid container style={{marginTop: "20px"}} direction={"column"}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={learnGerman}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "10px"}}>
                            <CustomLabelLabelMedium
                                text={countlessPossibilities+"\n" +
                                ""}
                                color={"black"} fontWeight={"normal"}
                                opacity={0.5} lineHeight={1.7} textAlign={"justify"}/>
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
                                        text={bestExams}
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
                                        text={examPrepration}
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
                                        text={talkToConsultant}
                                        color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                        opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={5.5} container>
                            <img src={VisaPerson} style={{width: "100%"}}/>
                        </Grid>
                    </Grid>

                    <Grid container style={{marginTop: "40px"}}>
                        <CustomLabelLabelMedium
                            text={onlineCourses+"\n" +
                            ""}
                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                            opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>

                    </Grid>

                </Grid>

                <Grid container xs={12} md={4.5}>
                    <div>
                        <Grid container>
                            <Paper style={{
                                width: "100%",
                                padding: "40px 20xp 40px 20px",
                                borderRadius: "20px",
                                background: "#F5F5F5"
                            }}>
                                <Grid contanier alignItems={"center"} direction={"column"} style={{padding: "20px"}}>
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
                                        <Grid container alignItems={"center"} style={{marginTop: "20px"}}>
                                            <Grid item
                                                  style={{padding: "10px", borderRadius: "10px", background: "white"}}>
                                                <img src={NursingDetail4Image1}/>
                                            </Grid>
                                            <Grid item xs style={{marginLeft: "20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={checkDocument}
                                                    color={"black"} fontWeight={"normal"}
                                                    opacity={1} lineHeight={1.7}/>
                                            </Grid>
                                        </Grid>


                                        <Grid container alignItems={"center"} style={{marginTop: "20px"}}>
                                            <Grid item
                                                  style={{padding: "10px", borderRadius: "10px", background: "white"}}>
                                                <img src={NursingDetail4Image2}/>
                                            </Grid>
                                            <Grid item xs style={{marginLeft: "20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={translationDocuments}
                                                    color={"black"} fontWeight={"normal"}
                                                    opacity={1} lineHeight={1.7}/>
                                            </Grid>
                                        </Grid>


                                        <Grid container alignItems={"center"} style={{marginTop: "20px"}}>
                                            <Grid item
                                                  style={{padding: "10px", borderRadius: "10px", background: "white"}}>
                                                <img src={NursingDetail4Image3}/>
                                            </Grid>
                                            <Grid item xs style={{marginLeft: "20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={applicationAuthorities}
                                                    color={"black"} fontWeight={"normal"}
                                                    opacity={1} lineHeight={1.7}/>
                                            </Grid>
                                        </Grid>


                                        <Grid container alignItems={"center"} style={{marginTop: "20px"}}>
                                            <Grid item
                                                  style={{padding: "10px", borderRadius: "10px", background: "white"}}>
                                                <img src={NursingDetail4Image4}/>
                                            </Grid>
                                            <Grid item xs style={{marginLeft: "20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={supportSearch}
                                                    color={"black"} fontWeight={"normal"}
                                                    opacity={1} lineHeight={1.7}/>
                                            </Grid>
                                        </Grid>

                                        <Grid container alignItems={"center"} style={{marginTop: "20px"}}>
                                            <Grid item
                                                  style={{padding: "10px", borderRadius: "10px", background: "white"}}>
                                                <img src={NursingDetail4Image5}/>
                                            </Grid>
                                            <Grid item xs style={{marginLeft: "20px"}}>
                                                <CustomLabelLabelMedium
                                                    text={helpOpening}
                                                    color={"black"} fontWeight={"normal"}
                                                    opacity={1} lineHeight={1.7}/>
                                            </Grid>
                                        </Grid>


                                        <Grid container justifyContent={"center"} style={{marginTop: "20px"}}>
                                            <CustomButtonLarge text={signUp} background={"red"}
                                                               border={"2px solid red"}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid container style={{marginTop: "40px"}}>
                            <Paper style={{
                                width: "100%",
                                padding: "40px 20xp 40px 20px",
                                borderRadius: "20px",
                                background: "#F5F5F5"
                            }}>
                                <Grid contanier alignItems={"center"} direction={"column"} style={{padding: "20px"}}>
                                    <Grid item>
                                        <CustomLabelHeaderLarge
                                            text={freeAssessment}
                                            color={"black"} fontWeight={"bold"} textAlign={"center"}
                                            lineHeight={1.7}/>

                                    </Grid>

                                    <Grid item container alignItems={"center"}>

                                        <Grid container direction={"column"} alignItems={"flex-start"}
                                              style={{marginTop: "20px"}}>
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

                                        <Grid container direction={"column"} alignItems={"flex-start"}
                                              style={{marginTop: "20px"}}>
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

                                        <Grid container direction={"column"} alignItems={"flex-start"}
                                              style={{marginTop: "20px"}}>
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

                                        <Grid container direction={"column"} alignItems={"flex-start"}
                                              style={{marginTop: "20px"}}>
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


                                        <Grid container justifyContent={"center"} style={{marginTop: "20px"}}>
                                            <CustomButtonLarge text={submit} background={"red"}
                                                               border={"2px solid red"}/>
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

export default LanguageLessons;