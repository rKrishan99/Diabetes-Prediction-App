"use client";

import styles from "./demo.module.css";
import React, { useState } from "react";

const Demo = () => {

 

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h1>Need To Know ...</h1>
        <form action="" className={styles.formContainer}>
          <div className={styles.formItem}>
            <label className={styles.formLabel}>Gender :</label>
            <select className={styles.formInputs}>
              <option className={styles.selectionOption} value="male">
                Male
              </option>
              <option className={styles.selectionOption} value="female">
                Female
              </option>
            </select>
          </div>
          <div className={styles.formItem}>
            <label className={styles.formLabel}>Age :</label>
            <input className={styles.formInputs} type="number" />
          </div>
          <div className={styles.formItem}>
            <label className={styles.formLabel}>Hypertension :</label>
            <input className={styles.formInputs} type="number" />
          </div>
          <div className={styles.formItem}>
            <label className={styles.formLabel}>Heart Disease :</label>
            <input className={styles.formInputs} type="number" />
          </div>
          <div className={styles.formItem}>
            <label className={styles.formLabel}>Smoking history :</label>
            <select className={styles.formInputs}>
              <option className={styles.selectionOption} value="yes">
                Never
              </option>
              <option className={styles.selectionOption} value="no">
                Current
              </option>
              <option className={styles.selectionOption} value="no">
                Former
              </option>
            </select>
          </div>
          <div className={styles.formItem}>
            <label className={styles.formLabel}>BMI :</label>
            <input className={styles.formInputs} type="number" />
          </div>
          <div className={styles.formItem}>
            <label className={styles.formLabel}>HbA1c Level :</label>
            <input className={styles.formInputs} type="number" />
          </div>
          <div className={styles.formItem}>
            <label className={styles.formLabel}>Blood Glucose Level :</label>
            <input className={styles.formInputs} type="number" />
          </div>
          <div className={styles.submitColumn}>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className={styles.secondContainer}></div>
    </div>
  );
};

export default Demo;
