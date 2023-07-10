import * as React from "react";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import ChartData from "../Chart/ChartData";
import FullScreenDialog from "./DataModel";
import "./Dashboard.css";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits(props) {
  return (

    <div>
      <Title>
        <span className="ms-2">
          <img src={props.imgSrc} alt="" width={30} />
        </span>
        <span className="textOfBox">
          {props.heading2
            ? props.heading1 + "/" + props.heading2
            : props.heading1}
        </span>
      </Title>

      <Typography variant="h4" className="ps-2">
        {props.num2 ? props.num1 + "/" + props.num2 : props.num1}
      </Typography>
      <div className="row justify-content-center">
        <div className="col-10 justify-content-end">
          <FullScreenDialog
            heading1={props.heading1}
            heading2={props.heading2 ? props.heading2 : null}
            heading3={props.heading3 ? props.heading3 : null}
            num1={props.num1}
            num2={props.num2 ? props.num2 : null}
            num3={props.num3 ? props.num3 : null}
            link1={props.link1}
            link2={props.link2 ? props.link2 : null}
            data={props.data}
            itemData={props.itemData ? props.itemData : null}
            heading5={props.heading5 ? props.heading5 : null}
            heading6={props.heading6 ? props.heading6 : null}
            num5={props.num5 ? props.num5 : null}
          />
        </div>
      </div>
    </div>
  );
}
