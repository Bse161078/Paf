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
import CostIcon from "src/assets/images/cost-icon.svg";
import {useSelector} from "react-redux";


let documentRecognition,documentRecognitionDetails,documentRecognitionPrice,jobRecruitment,jobRecruitmentDetails,jobRecruitmentPrice,documentTranslation,documentTranslationDetails,documentTranslationPrice,visaCost,visaCostDetails,visaCostPrice,governmantFee,governmantFeeDetails,governmantFeePrice,flightTicket,flightTicketDetails,flightTicketPrice,accommodation,accommodationDetails,accommodationPrice,visaSupport,visaSupportDetails,visaSupportPrice
const CostFees = () => {

    const { selectedLanguage } = useSelector((state) => state.languageReducer);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);

    const loadConstant = async () => {
        setLoading(true);
        ({  
            documentRecognition,documentRecognitionDetails,documentRecognitionPrice,jobRecruitment,jobRecruitmentDetails,jobRecruitmentPrice,documentTranslation,documentTranslationDetails,documentTranslationPrice,visaCost,visaCostDetails,visaCostPrice,governmantFee,governmantFeeDetails,governmantFeePrice,flightTicket,flightTicketDetails,flightTicketPrice,accommodation,accommodationDetails,accommodationPrice,visaSupport,visaSupportDetails,visaSupportPrice
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
              sx={{marginTop: {xs: "calc(50vh - 250px)", sm: "calc(50vh - 250px)", lg: "calc(50vh - 300px)"},paddingBottom:"30px"}}>
            <Grid item xs={9} container sx={{marginTop: {xs: "5px", md: "20px"}}} justifyContent={"space-between"}>
                <Grid item container xs={12} md={12} direction={"column"}>


                    <Grid container justifyContent={"space-between"}>

                        <Grid item xs={12} sm={5.5} md={2.8} container style={{marginTop: "50px"}} alignItems={"center"}
                              direction={"column"}>
                            <Paper style={{
                                padding: "10px",
                                borderRadius: "20px",
                                width: "100%",
                                height: "100%",
                                background: "white",
                                position:"relative"
                            }}>
                                <Grid container direction={"column"} alignItems={"center"}>
                                    <Grid item>
                                        <img src={CostIcon} style={{
                                            maxWidth: "100%",
                                            background: "#EEEEEE",
                                            padding: "10px",
                                            borderRadius: "50%"
                                        }}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={documentRecognition}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={1} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px",paddingBottom:"50px"}}>
                                        <CustomLabelLabelSmallMedium
                                            text={documentRecognitionDetails+"\n" +
                                            ""}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={0.5} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{position:"absolute",bottom:-25}}>
                                        <CustomButtonLarge text={documentRecognitionPrice} background={"red"} border={"2px solid red"}/>
                                    </Grid>

                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={5.5} md={2.8} container style={{marginTop: "50px"}} alignItems={"center"}
                              direction={"column"}>
                            <Paper style={{
                                padding: "10px",
                                borderRadius: "20px",
                                width: "100%",
                                height: "100%",
                                background: "white",
                                position:"relative"
                            }}>
                                <Grid container direction={"column"} alignItems={"center"}>
                                    <Grid item>
                                        <img src={CostIcon} style={{
                                            maxWidth: "100%",
                                            background: "#EEEEEE",
                                            padding: "10px",
                                            borderRadius: "50%"
                                        }}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={jobRecruitment}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={1} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px",paddingBottom:"50px"}}>
                                        <CustomLabelLabelSmallMedium
                                            text={jobRecruitmentDetails+"\n" +
                                            ""}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={0.7} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{position:"absolute",bottom:-25}}>
                                        <CustomButtonLarge text={jobRecruitmentPrice} background={"red"} border={"2px solid red"}/>
                                    </Grid>

                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={5.5} md={2.8} container style={{marginTop: "50px"}} alignItems={"center"}
                              direction={"column"}>
                            <Paper style={{
                                padding: "10px",
                                borderRadius: "20px",
                                width: "100%",
                                height: "100%",
                                background: "white",
                                position:"relative"
                            }}>
                                <Grid container direction={"column"} alignItems={"center"}>
                                    <Grid item>
                                        <img src={CostIcon} style={{
                                            maxWidth: "100%",
                                            background: "#EEEEEE",
                                            padding: "10px",
                                            borderRadius: "50%"
                                        }}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={documentRecognition}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={1} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px",paddingBottom:"50px"}}>
                                        <CustomLabelLabelSmallMedium
                                            text={documentRecognitionDetails+"\n" +
                                            ""}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={0.7} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{position:"absolute",bottom:-25}}>
                                        <CustomButtonLarge text={documentRecognitionPrice} background={"red"} border={"2px solid red"}/>
                                    </Grid>

                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={5.5} md={2.8} container style={{marginTop: "50px"}} alignItems={"center"}
                              direction={"column"}>
                            <Paper style={{
                                padding: "10px",
                                borderRadius: "20px",
                                width: "100%",
                                height: "100%",
                                background: "white",
                                position:"relative"
                            }}>
                                <Grid container direction={"column"} alignItems={"center"}>
                                    <Grid item>
                                        <img src={CostIcon} style={{
                                            maxWidth: "100%",
                                            background: "#EEEEEE",
                                            padding: "10px",
                                            borderRadius: "50%"
                                        }}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={visaCost}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={1} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px",paddingBottom:"50px"}}>
                                        <CustomLabelLabelSmallMedium
                                            text={visaCostDetails+"\n" +
                                            ""}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={0.7} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{position:"absolute",bottom:-25}}>
                                        <CustomButtonLarge text={visaCostPrice} background={"red"} border={"2px solid red"}/>
                                    </Grid>

                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={5.5} md={2.8} container sx={{marginTop: {xs:"50px",sm:"100px"}}} alignItems={"center"}
                              direction={"column"}>
                            <Paper style={{
                                padding: "10px",
                                borderRadius: "20px",
                                width: "100%",
                                height: "100%",
                                background: "white",
                                position:"relative"
                            }}>
                                <Grid container direction={"column"} alignItems={"center"}>
                                    <Grid item>
                                        <img src={CostIcon} style={{
                                            maxWidth: "100%",
                                            background: "#EEEEEE",
                                            padding: "10px",
                                            borderRadius: "50%"
                                        }}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={visaSupport}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={1} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px",paddingBottom:"50px"}}>
                                        <CustomLabelLabelSmallMedium
                                            text={visaSupportDetails+"\n" +
                                            ""}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={0.7} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{position:"absolute",bottom:-25}}>
                                        <CustomButtonLarge text={visaSupportPrice} background={"red"} border={"2px solid red"}/>
                                    </Grid>

                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={5.5} md={2.8} container sx={{marginTop: {xs:"50px",sm:"100px"}}} alignItems={"center"}
                              direction={"column"}>
                            <Paper style={{
                                padding: "10px",
                                borderRadius: "20px",
                                width: "100%",
                                height: "100%",
                                background: "white",
                                position:"relative"
                            }}>
                                <Grid container direction={"column"} alignItems={"center"}>
                                    <Grid item>
                                        <img src={CostIcon} style={{
                                            maxWidth: "100%",
                                            background: "#EEEEEE",
                                            padding: "10px",
                                            borderRadius: "50%"
                                        }}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={governmantFee}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={1} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px",paddingBottom:"50px"}}>
                                        <CustomLabelLabelSmallMedium
                                            text={governmantFeeDetails+"\n" +
                                            ""}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={0.7} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{position:"absolute",bottom:-25}}>
                                        <CustomButtonLarge text={governmantFeePrice} background={"red"} border={"2px solid red"}/>
                                    </Grid>

                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={5.5} md={2.8} container sx={{marginTop: {xs:"50px",sm:"100px"}}} alignItems={"center"}
                              direction={"column"}>
                            <Paper style={{
                                padding: "10px",
                                borderRadius: "20px",
                                width: "100%",
                                height: "100%",
                                background: "white",
                                position:"relative"
                            }}>
                                <Grid container direction={"column"} alignItems={"center"}>
                                    <Grid item>
                                        <img src={CostIcon} style={{
                                            maxWidth: "100%",
                                            background: "#EEEEEE",
                                            padding: "10px",
                                            borderRadius: "50%"
                                        }}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={flightTicket}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={1} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px",paddingBottom:"50px"}}>
                                        <CustomLabelLabelSmallMedium
                                            text={flightTicketDetails+"\n" +
                                            ""}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={0.7} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{position:"absolute",bottom:-25}}>
                                        <CustomButtonLarge text={flightTicketPrice} background={"red"} border={"2px solid red"}/>
                                    </Grid>

                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={5.5} md={2.8} container sx={{marginTop: {xs:"50px",sm:"100px"}}} alignItems={"center"}
                              direction={"column"}>
                            <Paper style={{
                                padding: "10px",
                                borderRadius: "20px",
                                width: "100%",
                                height: "100%",
                                background: "white",
                                position:"relative"
                            }}>
                                <Grid container direction={"column"} alignItems={"center"}>
                                    <Grid item>
                                        <img src={CostIcon} style={{
                                            maxWidth: "100%",
                                            background: "#EEEEEE",
                                            padding: "10px",
                                            borderRadius: "50%"
                                        }}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px"}}>
                                        <CustomLabelLabelMedium
                                            text={accommodation}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={1} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{marginTop: "10px",paddingBottom:"50px"}}>
                                        <CustomLabelLabelSmallMedium
                                            text={accommodationDetails+"\n" +
                                            ""}
                                            color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                            opacity={0.7} lineHeight={1.7} textAlign={"center"}/>
                                    </Grid>
                                    <Grid item style={{position:"absolute",bottom:-25}}>
                                        <CustomButtonLarge text={accommodationPrice} background={"red"} border={"2px solid red"}/>
                                    </Grid>

                                </Grid>
                            </Paper>
                        </Grid>




                    </Grid>


                </Grid>
            </Grid>
        </Grid>
    )
}

export default CostFees;