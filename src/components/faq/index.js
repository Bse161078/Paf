import Grid from "@mui/material/Grid/Grid";
import React,{useState,useEffect} from "react";
import {
    CustomLabelHeader,
    CustomLabelHeaderLarge, CustomLabelHeaderLarge1,
    CustomLabelLabelMedium,
    CustomLabelLabelSmallMedium
} from "../common/label";
import YellowDividerIcon from 'src/assets/images/yellow-divider.svg';
import SmsIcon from "../../assets/images/sms.png";
import LocationIcon from "../../assets/images/location.png";
import Divider from "@mui/material/Divider/Divider";
import {CustomButtonLarge, CustomButtonLargeWithIcon} from "../common/button";
import FacebookIcon from 'src/assets/images/facebook.svg';
import YoutubeIcon from 'src/assets/images/youtube.svg';
import InstagramIcon from 'src/assets/images/instagram.svg';
import LinkedinIcon from 'src/assets/images/linkedin.svg';
import {CustomTextField} from "../common/text";
import Accordion from "@mui/material/Accordion/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails/AccordionDetails";
import AddIcon from '@mui/icons-material/Add';
import CustomAccordian from "../common/accordian";
import { useSelector } from "react-redux";

let helpClients,FAQ,findTheAnsOFFAQ,applyForRecognition,applyForRecognitionDetails,qualified,qualifiedDetails,workinInGermany,workinInGermanyDetails,recognitionProcedureCost,recognitionProcedureCostDetails,recognitionForVisa,recognitionForVisaDetails,applyForRecognitionFromAbroad,applyForRecognitionFromAbroadDetails,recognitionProcess,recognitionProcessDetails,financialSupport,financialSupportDetails,certificatesOrDoc,certificatesOrDocDetails,needGermanLangSkill,needGermanLangSkillDetails,docRequired,docRequiredDetails

const Faq = () => {

    const { selectedLanguage } = useSelector((state) => state.languageReducer);
        const [loading, setLoading] = useState(false);
        const [count, setCount] = useState(0);
    
        const loadConstant = async () => {
            setLoading(true);
            ({
                
                helpClients,FAQ,findTheAnsOFFAQ,applyForRecognition,applyForRecognitionDetails,qualified,qualifiedDetails,workinInGermany,workinInGermanyDetails,recognitionProcedureCost,recognitionProcedureCostDetails,recognitionForVisa,recognitionForVisaDetails,applyForRecognitionFromAbroad,applyForRecognitionFromAbroadDetails,recognitionProcess,recognitionProcessDetails,financialSupport,financialSupportDetails,certificatesOrDoc,certificatesOrDocDetails,needGermanLangSkill,needGermanLangSkillDetails,docRequired,docRequiredDetails
                
    
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
                <Grid container justifyContent={"space-between"}>
                    <Grid item xs={5.8} container direction={"column"}>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={helpClients}
                                color={"red"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>

                        </Grid>
                        <Grid item style={{marginTop:"10px"}}>
                            <CustomLabelHeaderLarge1
                                text={FAQ}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7} textAlign={"left"}/>

                        </Grid>
                    </Grid>

                    <Grid item container xs={5.8} alignItems={"center"}>
                        <CustomLabelLabelMedium
                            text={findTheAnsOFFAQ+"\n" +
                            ""}
                            color={"black"}
                            opacity={1} lineHeight={1.7} textAlign={"justify"}/>
                    </Grid>
                </Grid>


                <Grid container style={{marginTop:"40px"}} direction={"column"}>
                    <Grid item>
                       <CustomAccordian title={applyForRecognition}
                                        description={applyForRecognitionDetails}/>
                    </Grid>
                    <Grid item style={{marginTop:"20px"}}>
                        <CustomAccordian title={qualified}
                                         description={qualifiedDetails+"\n"}/>
                    </Grid>
                    <Grid item style={{marginTop:"20px"}}>
                        <CustomAccordian title={workinInGermany}
                                         description={workinInGermanyDetails}/>
                    </Grid>
                    <Grid item style={{marginTop:"20px"}}>
                        <CustomAccordian title={recognitionProcedureCost}
                                         description={recognitionProcedureCostDetails}/>
                    </Grid>
                    <Grid item style={{marginTop:"20px"}}>
                        <CustomAccordian title={recognitionForVisa}
                                         description={recognitionForVisaDetails}/>
                    </Grid>
                    <Grid item style={{marginTop:"20px"}}>
                        <CustomAccordian title={applyForRecognitionFromAbroad}
                                         description={applyForRecognitionFromAbroadDetails}/>
                    </Grid>
                    <Grid item style={{marginTop:"20px"}}>
                        <CustomAccordian title={recognitionProcess}
                                         description={recognitionProcessDetails}/>
                    </Grid>
                    <Grid item style={{marginTop:"20px"}}>
                        <CustomAccordian title={financialSupport}
                                         description={financialSupportDetails+"\n"}/>
                    </Grid>
                    <Grid item style={{marginTop:"20px"}}>
                        <CustomAccordian title={certificatesOrDoc}
                                         description={certificatesOrDocDetails+"\n"}/>
                    </Grid>

                    <Grid item style={{marginTop:"20px"}}>
                        <CustomAccordian title={needGermanLangSkill}
                                         description={needGermanLangSkillDetails}/>
                    </Grid>


                    <Grid item style={{marginTop:"20px"}}>
                        <CustomAccordian title={docRequired}
                                         description={docRequiredDetails}/>
                    </Grid>


                </Grid>
            </Grid>
        </Grid>
    )
}

export default Faq;