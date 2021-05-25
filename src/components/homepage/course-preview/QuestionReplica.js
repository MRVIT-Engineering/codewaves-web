import React from "react";
import classes from "../../../assets/css/Homepage.module.css";
import { Separator } from "../../ui-elements/common/Separator";

export default function QuestionReplica() {
  return (
    <div className={classes.QuestionReplica}>
      <p className={classes.QuestionReplicaTitle}>John Snow</p>
      <Separator />
      <p className={classes.QuestionReplicaText}>Who is guarding the wall?</p>
      <p className={classes.QuestionReplicaDate}>12/12/1000</p>
    </div>
  );
}
