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


let introduction,responsible_person,overview_of_processing,relevant_legal_bases,security_measures,transmission_of_personal_data,data_processing_in_third_countries,deletion_of_data,use_of_cookies,business_services,procedure_provision_of_online_offer_and_web_hosting,payment,registration_user_account,contact_inquiry,web_analysis_monitoring_optimization,marketing,presence_in_social_networks,plugins_embedded_functions_content,changing_updating_data_protection,rights_of_persons_concerned,responsiblePerson,authorizedRepresentative,representativesAndContactInfo,dataProcessingOverview,overviewOfProcessing,typesOfDataProcessed,inventoryData,paymentDetails,contactDetails,contentData,contractData,usageData,metaCommunicationData,categoriesOfDataSubjects,interestedPersons,communicationPartner,businessAndContractualPartners,pupilsStudentsParticipants,purposesOfProcessing,provisionOfContractualServices,contactRequestsAndCommunication,safetyMeasures,rangeMeasurement,officeAndOrganizationalProcedures,managementAndResponseToInquiries,profilesWithUserRelatedInformation,provisionOfOnlineOffer,informationTechnologyInfrastructure,relevantLegalBases,legalBasisOverview,legalBasisConsent,legalBasisContract,legalBasisObligation,legalBasisInterests,securityMeasuresHeading,securityMeasuresText,dataTransmissionHeading,dataTransmissionText,dataProcessingHeading,dataProcessingText,cookiesHeading,cookiesText,dataDeletionHeading,dataDeletionText,dataProtection,declaration,declarationText,tableOfContent,legalBasisInterestsHeading,legalBasisConsentHeading,legalBasisContractHeading,legalBasisObligationHeading;

const PrivacyPolicy = () => {
    const { selectedLanguage } = useSelector((state) => state.languageReducer);
        const [loading, setLoading] = useState(false);
        const [count, setCount] = useState(0);
    
        const loadConstant = async () => {
            setLoading(true);
            ({
                introduction,responsible_person,overview_of_processing,relevant_legal_bases,security_measures,transmission_of_personal_data,data_processing_in_third_countries,deletion_of_data,use_of_cookies,business_services,procedure_provision_of_online_offer_and_web_hosting,payment,registration_user_account,contact_inquiry,web_analysis_monitoring_optimization,marketing,presence_in_social_networks,plugins_embedded_functions_content,changing_updating_data_protection,rights_of_persons_concerned,responsiblePerson,authorizedRepresentative,representativesAndContactInfo,dataProcessingOverview,overviewOfProcessing,typesOfDataProcessed,inventoryData,paymentDetails,contactDetails,contentData,contractData,usageData,metaCommunicationData,categoriesOfDataSubjects,interestedPersons,communicationPartner,businessAndContractualPartners,pupilsStudentsParticipants,purposesOfProcessing,provisionOfContractualServices,contactRequestsAndCommunication,safetyMeasures,rangeMeasurement,officeAndOrganizationalProcedures,managementAndResponseToInquiries,profilesWithUserRelatedInformation,provisionOfOnlineOffer,informationTechnologyInfrastructure,relevantLegalBases,legalBasisOverview,legalBasisConsent,legalBasisContract,legalBasisObligation,legalBasisInterests,securityMeasuresHeading,securityMeasuresText,dataTransmissionHeading,dataTransmissionText,dataProcessingHeading,dataProcessingText,cookiesHeading,cookiesText,dataDeletionHeading,dataDeletionText,dataProtection,declaration,declarationText,tableOfContent,legalBasisInterestsHeading,legalBasisConsentHeading,legalBasisContractHeading,legalBasisObligationHeading

                
    
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
            <Grid item xs={11} md={6} container sx={{marginTop: {xs:"5px",md:"20px"}}} justifyContent={"space-between"}>
                <Grid item container xs={12} direction={"column"} alignItems={"flex-start"}>
                    <Grid item>
                        <CustomLabelHeaderLarge
                            text={dataProtection}
                            color={"red"} fontWeight={"bold"}/>
                    </Grid>



                    <Grid container style={{marginTop: "20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={declaration}
                                color={"black"} fontWeight={"normal"}/>
                        </Grid>
                        <Grid item style={{marginTop: "20px"}}>
                            <CustomLabelLabelMedium
                                text={declarationText+"\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>


                    <Grid container style={{marginTop: "20px"}} justifyContent={"center"} direction={"column"}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={tableOfContent}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop: "20px"}}>
                            <CustomLabelLabelMedium
                                text={introduction}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={responsible_person}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={overview_of_processing}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={relevant_legal_bases}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={security_measures}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={introduction}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={transmission_of_personal_data}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={data_processing_in_third_countries}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={deletion_of_data}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={use_of_cookies}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={business_services}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={payment}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={procedure_provision_of_online_offer_and_web_hosting}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={registration_user_account}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={contact_inquiry}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={web_analysis_monitoring_optimization}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={marketing}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={presence_in_social_networks}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={plugins_embedded_functions_content}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={changing_updating_data_protection}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item >
                            <CustomLabelLabelMedium
                                text={rights_of_persons_concerned}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>

                    </Grid>


                    <Grid container direction={"column"} style={{marginTop:"20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={responsiblePerson}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop:"20px"}}>
                            <CustomLabelLabelMedium
                                text={authorizedRepresentative}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={representativesAndContactInfo+"\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>

                    </Grid>



                    <Grid container direction={"column"} style={{marginTop:"20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={overviewOfProcessing}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop:"20px"}}>
                            <CustomLabelLabelMedium
                                text={dataProcessingOverview+"\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>


                    <Grid container direction={"column"} style={{marginTop:"20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={typesOfDataProcessed}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop:"20px"}}>
                            <CustomLabelLabelMedium
                                text={inventoryData}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={paymentDetails}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={contactDetails}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={contractData}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={contractData}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={usageData}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={metaCommunicationData}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>


                    <Grid container direction={"column"} style={{marginTop:"20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={categoriesOfDataSubjects}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop:"20px"}}>
                            <CustomLabelLabelMedium
                                text={inventoryData}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={interestedPersons}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={communicationPartner}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={businessAndContractualPartners}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={pupilsStudentsParticipants}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>


                    <Grid container direction={"column"} style={{marginTop:"20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={purposesOfProcessing}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop:"20px"}}>
                            <CustomLabelLabelMedium
                                text={provisionOfContractualServices}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={contactRequestsAndCommunication}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={safetyMeasures}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={rangeMeasurement}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={officeAndOrganizationalProcedures}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={managementAndResponseToInquiries}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={profilesWithUserRelatedInformation}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={provisionOfOnlineOffer}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={informationTechnologyInfrastructure}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>


                    <Grid container direction={"column"} style={{marginTop:"20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={relevantLegalBases}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop:"20px"}}>
                            <CustomLabelLabelMedium
                                text={legalBasisOverview}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>


                    <Grid item container style={{marginTop:"40px"}}>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={legalBasisConsentHeading}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7} textAlign={"justify"}>
                                <span>
                                    <CustomLabelLabelMedium
                                        inline={"inline"}
                                        text={legalBasisConsent}
                                        color={"black"} fontWeight={"bold"}
                                        opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                                </span>
                            </CustomLabelLabelMedium>
                        </Grid>
                        <Grid item>
                            <CustomLabelLabelMedium
                                text={legalBasisContractHeading}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7} textAlign={"justify"}>
                                <span>
                                    <CustomLabelLabelMedium
                                        inline={"inline"}
                                        text={legalBasisContract}
                                        color={"black"} fontWeight={"bold"}
                                        opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                                </span>
                            </CustomLabelLabelMedium>
                        </Grid>

                        <Grid item>
                            <CustomLabelLabelMedium
                                text={legalBasisObligationHeading}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7} textAlign={"justify"}>
                                <span>
                                    <CustomLabelLabelMedium
                                        inline={"inline"}
                                        text={legalBasisObligation}
                                        color={"black"} fontWeight={"bold"}
                                        opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                                </span>
                            </CustomLabelLabelMedium>
                        </Grid>

                        <Grid item>
                            <CustomLabelLabelMedium
                                text={legalBasisInterestsHeading}
                                color={"black"} fontWeight={"bold"}
                                opacity={1} lineHeight={1.7} textAlign={"justify"}>
                                <span>
                                    <CustomLabelLabelMedium
                                        inline={"inline"}
                                        text={legalBasisInterests+"\n" +
                                        "\n"}
                                        color={"black"} fontWeight={"bold"}
                                        opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                                </span>
                            </CustomLabelLabelMedium>
                        </Grid>


                    </Grid>


                    <Grid container direction={"column"} style={{marginTop:"20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={securityMeasuresHeading}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop:"20px"}}>
                            <CustomLabelLabelMedium
                                text={securityMeasuresText+"\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>


                    <Grid container direction={"column"} style={{marginTop:"20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={dataTransmissionHeading}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop:"20px"}}>
                            <CustomLabelLabelMedium
                                text={dataDeletionText+"\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>

                    <Grid container direction={"column"} style={{marginTop:"20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={dataProcessingHeading}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop:"20px"}}>
                            <CustomLabelLabelMedium
                                text={dataProcessingText+"\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>

                    <Grid container direction={"column"} style={{marginTop:"20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={cookiesHeading}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop:"20px"}}>
                            <CustomLabelLabelMedium
                                text={cookiesText+"\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>



                    <Grid container direction={"column"} style={{marginTop:"20px"}}>
                        <Grid item>
                            <CustomLabelHeaderLarge
                                text={dataDeletionHeading}
                                color={"red"} fontWeight={"bold"}/>
                        </Grid>
                        <Grid item style={{marginTop:"20px"}}>
                            <CustomLabelLabelMedium
                                text={dataDeletionText+"\n" +
                                ""}
                                color={"black"} fontWeight={"bold"} fontWeight={"bold"}
                                opacity={0.7} lineHeight={1.7} textAlign={"justify"}/>
                        </Grid>
                    </Grid>


                </Grid>

            </Grid>
        </Grid>
    )
}

export default PrivacyPolicy;