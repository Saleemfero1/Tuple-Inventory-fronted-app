import * as React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import ChartData from "../Chart/ChartData";
import FullScreenDialog from "./DataModel";
import Stock from "../images/stock.png";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits(props) {
  return (
    <React.Fragment>
      <div className="row">
        <Title>
          {props.heading2
            ? props.heading1 + "/" + props.heading2
            : props.heading1}
        </Title>
      </div>

      <div className="row">
        <div className="col-5 font-weight-bold ">
          <div className="mb-2">
            <Typography variant="h5" className="">
              {props.num2 ? props.num1 + "/" + props.num2 : props.num1}
            </Typography>
          </div>
          <div>
            <Typography variant="h5" className="">
              {props.imgSrc && <img src={props.imgSrc} alt="" width={80} />}
            </Typography>
          </div>
        </div>
        <div className="col-7">
          <ChartData data={props.data} />
        </div>
        <div>
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
          />
        </div>
      </div>
    </React.Fragment>
  );
}
