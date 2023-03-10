import Grid from "@mui/material/Grid/Grid";
import {CustomLabelHeader} from "../label";
import DownArrowIcon from "../../../assets/images/down-arrow.png";
import React from "react";


const MenuItem=(props)=>{
    const {title,hovered,clicked,showDropDownIcon,type,onEnter,onLeave,onClick,page,onLanguageClick}=props;


    return(
        <Grid item style={{cursor:"pointer"}}
              onClick={(e)=> (onClick && onClick(page,type)) || (onLanguageClick && onLanguageClick(e))}
              onMouseEnter={() => onEnter && onEnter(type)}
              onMouseLeave={() => onLeave && onLeave(type)}>
            <Grid container direction={"column"} alignItems={"center"}>
                <Grid item container alignItems={"center"} spacing={1}>
                    <Grid item>
                        <CustomLabelHeader text={title} color={(hovered || clicked)?"#FFCC00":"white"} fontWeight={"bold"}/>
                    </Grid>
                    {showDropDownIcon &&
                        <Grid item style={{}}>
                            <img src={DownArrowIcon} />
                        </Grid>
                    }
                </Grid>
                {(clicked) &&
                    <Grid item sx={{display:{xs:"none",sm:"block"}}}>
                        <CustomLabelHeader text={"●"} color={"#FFCC00"} fontWeight={"bold"}/>
                    </Grid>
                }
            </Grid>
        </Grid>
    )
}

export default MenuItem;